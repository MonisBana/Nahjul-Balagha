import Head from "next/head";
import Layout from "../../components/Layout";
import Link from "next/link";
import { getAllLetterIds, getLetterData } from "../../lib/get_letters";

export async function getStaticProps({ params }) {
  const letterData = await getLetterData(params.id);
  return {
    props: {
      letterData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllLetterIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ letterData }) {
  return (
    <div>
      <Head>
        <title>Sermons</title>
      </Head>
      <Layout>
        <div className="mx-auto w-8/12 m-4">
          <h1 className="text-6xl font-bold header-font flex justify-center dark-violet">
            Letter {letterData.id}
          </h1>
          <div className="text-xl hover:underline hover:text-blue-700">
            <Link href="/letters">
              <a>← Back to Letters</a>
            </Link>
          </div>
          <p
            className="text-xl leading-relaxed mt-4 opacity-80"
            dangerouslySetInnerHTML={{ __html: letterData.contentHtml }}
          ></p>
        </div>
      </Layout>
    </div>
  );
}
