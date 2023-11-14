import React from "react";
import Layout from "../components/Layout";
import { getAllPostIds, getSermonTitles } from "../lib/get_sermons";
import Link from "next/link";
export async function getStaticProps({ params }) {
  const sermons = await getAllPostIds();
  const titles = await getSermonTitles();
  return {
    props: {
      sermons,
      titles,
    },
  };
}
function sermons({ sermons, titles }) {
  return (
    <Layout>
      <div className="w-10/12 mx-auto">
        <div className="grid grid-cols-3">
          {sermons.map((sermon, index) => {
            return (
              <div
                key={sermon.params.key}
                className="border border-black border-solid rounded-xl m-4"
              >
                <div className="m-4 header-font font-bold dark-violet text-4xl hover:underline">
                  <Link href={`/sermons/${sermon.params.id}`}>
                    <p>Sermons {sermon.params.id}</p>
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

export default sermons;
