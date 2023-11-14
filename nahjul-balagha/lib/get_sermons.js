import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";
import parse from "csv-parse/lib/sync";

const sermonDirectory = path.join(process.cwd(), "sermons");
const titleDirectory = path.join(process.cwd(), "titles");

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(sermonDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(sermonDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData;
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(sermonDirectory).map((fileName) => {
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

export async function getPostData(id) {
  const fullPath = path.join(sermonDirectory, `${id}.md`);
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

export async function getSermonTitles() {
  const fullPath = path.join(titleDirectory, "Sermon_title.csv");
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const results = await parse(fileContents, {
    columns: true,
    skip_empty_lines: true,
  });
  return results;
}
