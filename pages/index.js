import Head from "next/head";
import Home from "../components/Moleculs/Home/Home";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>
          M Alfito Rahman - Software Engineer, Web Developer, and UI/UX Designer
        </title>
        <meta
          name="description"
          // content="I’m Spencer, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms."
        />
      </Head>
      <Home />
    </>
  );
}
