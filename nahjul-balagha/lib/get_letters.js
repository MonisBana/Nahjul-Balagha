import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";
import parse from "csv-parse/lib/sync";

const lettersDirectory = path.join(process.cwd(), "letters");
const titleDirectory = path.join(process.cwd(), "titles");
export function getAllLetterIds() {
  const fileNames = fs.readdirSync(lettersDirectory).map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
        key: fileName.replace(/\.md$/, ""),
      },
    };
  });
  return fileNames.sort((a, b) => {
    return a.params.key - b.params.key;
  });
}

export async function getLetterData(id) {
  const fullPath = path.join(lettersDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);
  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}

export async function getLetterTitles() {
  const fullPath = path.join(titleDirectory, "Letter_title.csv");
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const results = await parse(fileContents, {
    columns: true,
    skip_empty_lines: true,
  });
  return results;
}
