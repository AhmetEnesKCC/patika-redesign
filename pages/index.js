import Head from "next/head";
import About from "../components/About";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="w-full h-[3000px]">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="container mx-auto">
        <About />

        <div className="cursor-pointer w-8 h-16 rounded-full border-gray-600 border  mx-auto -mt-10 relative group">
          <div
            style={{ transition: "0.4s all" }}
            className="bg-purple-main rounded-full w-6 h-6 top-1 left-1/2 transform -translate-x-1/2  absolute transition duration-500 group-hover:top-[36px]"
          ></div>
        </div>
      </main>
    </div>
  );
}
