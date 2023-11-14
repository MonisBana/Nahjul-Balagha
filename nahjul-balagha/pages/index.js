import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { getAllPostIds } from "../lib/get_sermons";
import Header from "../components/Header";
// import Fragment from "react";
import Body from "../components/Body";
import Layout from "../components/Layout";

export async function getStaticProps() {
  const allPostsData = getAllPostIds();
  return {
    props: {
      allPostsData,
    },
  };
}
export default function Home({ allPostsData }) {
  return (
    <Layout>
      <Header />
      <Body />
    </Layout>
  );
}
