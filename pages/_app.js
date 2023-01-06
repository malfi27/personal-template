import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import "../styles/globals.css";

export default function App({ Component, pageProps, router }) {
  return (
    <>
      <div className="relative pt-8 overflow-x-hidden">
        <div className="container relative">
          {/*Gradient Effect */}
          <div className="absolute top-56 xl:top-64 transition-all left-8 md:left-20 rotate-[35deg]">
            <div className="relative flex flex-col">
              <div className="w-[300px] sm:w-[500px] transition-all md:w-[660px] lg:w-[800px] xl:w-[900px] rounded-lg h-14 bg-gradient-to-r from-blue-400 to-blue-400 dark:from-blue-500 dark:to-blue-500"></div>
              <div className="w-[300px] sm:w-[500px] transition-all md:w-[660px] lg:w-[800px] xl:w-[900px] rounded-lg h-14 bg-gradient-to-r from-purple-400 dark:from-blue-700 dark:to-sky-800 to-purple-400 "></div>
              <div className="w-[300px] sm:w-[500px] transition-all md:w-[660px] lg:w-[800px] xl:w-[900px] rounded-lg h-14 bg-gradient-to-r from-cyan-200 dark:from-purple-700 dark:to-purple-700 to-cyan-200 "></div>
              <div className="w-[300px] sm:w-[500px] transition-all md:w-[660px] lg:w-[800px] xl:w-[900px] rounded-lg h-14 bg-gradient-to-r from-red-200 to-red-200 dark:from-fuchsia-700 dark:to-fuchsia-700"></div>
            </div>
          </div>
          <div className="py-10 relative z-10 bg-opacity-50 dark:bg-opacity-70 backdrop-blur-2xl bg-white dark:bg-woodsmoke-900 rounded-2xl px-10 md:px-20 border dark:border-woodsmoke-800">
            <Header />
            <main className="py-6 relative z-10">
              <Component {...pageProps} />
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
