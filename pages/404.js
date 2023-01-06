import Image from "next/image";

const Page404Error = () => {
  return (
    <>
      <div className="flex min-h-full flex-col pt-16 ">
        <div className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
          <div className="flex flex-shrink-0 justify-center">
            <Image
              src={"/Profile.jpeg"}
              className={
                "w-28 h-28 rounded-full border-2 border-woodsmoke-50 dark:border-woodsmoke-800"
              }
              width={112}
              height={112}
              alt={"Profile"}
            />
          </div>
          <div className="py-16">
            <div className="text-center">
              <p className="text-base font-semibold text-indigo-600 dark:text-indigo-500">
                404
              </p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                Page not found.
              </h1>
              <p className="mt-2 text-base text-gray-500 dark:text-woodsmoke-400">
                Sorry, we couldn’t find the page you’re looking for.
              </p>
              <div className="mt-6">
                <a
                  href="#"
                  className="text-base font-medium text-indigo-600 dark:text-indigo-500 hover:text-indigo-500"
                >
                  Go back home
                  <span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Page404Error;
