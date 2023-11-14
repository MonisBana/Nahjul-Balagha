import { getAllPostIds, getPostData } from "../../lib/get_sermons";
import Head from "next/head";
import Layout from "../../components/Layout";
import Link from "next/link";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <div>
      <Head>
        <title>Sermons</title>
      </Head>
      <Layout>
        <div className="mx-auto w-8/12 m-4">
          <h1 className="text-6xl font-bold header-font flex justify-center dark-violet">
            Sermon {postData.id}
          </h1>
          <div className="text-xl hover:underline hover:text-blue-700">
            <Link href="/sermons">
              <a>← Back to Sermons</a>
            </Link>
          </div>
          <p
            className="text-xl leading-relaxed mt-4 opacity-80"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          ></p>
        </div>
      </Layout>
    </div>
  );
}
