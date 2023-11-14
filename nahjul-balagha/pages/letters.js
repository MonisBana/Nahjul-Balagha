import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import { getAllLetterIds, getLetterTitles } from "../lib/get_letters";
export async function getStaticProps({ params }) {
  const letters = await getAllLetterIds();
  const titles = await getLetterTitles();
  return {
    props: {
      letters,
      titles,
    },
  };
}
function letters({ letters, titles }) {
  return (
    <Layout>
      <div className="w-10/12 mx-auto">
        <div className="grid grid-cols-3">
          {letters.map((letter, index) => {
            return (
              <div
                key={letter.params.key}
                className="border border-black border-solid rounded-xl m-4"
              >
                <div className="m-4 header-font font-bold dark-violet text-4xl hover:underline">
                  <Link href={`/letters/${letter.params.id}`}>
                    <p>Letter {letter.params.id}</p>
                  </Link>
                </div>
                <p className="m-4 text-xl opacity-80">
                  {titles[index].Title.split("**")
                    .join("")
                    .split("\\")
                    .join("")}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export default letters;
