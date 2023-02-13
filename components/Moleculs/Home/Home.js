import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import logoKreasiAsia from "../../../public/Work/KreasiAsia.svg";
import logoPrantara from "../../../public/Work/Prantara.svg";
import logoRedhunter from "../../../public/Work/Redhunter.svg";
import logoStartcode from "../../../public/Work/Startcode.svg";

const description =
  "I’m Alfito, a frontend developer based in Bogor City Indonesia. I’m the founder and CEO of Startcode Id, where we develop technologies that empower people to grow their business using web and mobile applications.";

const BriefcaseIcon = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  );
};
const ArrowRightIcon = (props) => {
  return (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        {...props}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.04289 19.2071C7.65237 18.8166 7.65237 18.1834 8.04289 17.7929L13.8358 12L8.04289 6.20711C7.65237 5.81658 7.65237 5.18342 8.04289 4.79289C8.43342 4.40237 9.06658 4.40237 9.45711 4.79289L15.25 10.5858C16.031 11.3668 16.031 12.6332 15.25 13.4142L9.45711 19.2071C9.06658 19.5976 8.43342 19.5976 8.04289 19.2071Z"
          fill=""
        />
      </svg>
    </>
  );
};
const Resume = () => {
  let resume = [
    {
      company: "Startcode ID",
      title: "Founder & CEO",
      logo: logoStartcode,
      start: "2021",
      end: {
        label: "Present",
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: "Redhunter Academy",
      title: "Web Developer",
      logo: logoRedhunter,
      start: "2022",
      end: {
        label: "Present",
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: "PT Prantara",
      title: "Front End Developer",
      logo: logoPrantara,
      start: "2021",
      end: {
        label: "Present",
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: "PT Kreasi Asia",
      title: "Front End Developer",
      logo: logoKreasiAsia,
      start: "2021",
      end: "2021 November",
    },
  ];

  return (
    <div className="rounded-2xl border bg-white dark:bg-woodsmoke-700 dark:bg-opacity-40 dark:backdrop-blur-lg bg-opacity-60 backdrop-blur-lg border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 p-2 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={role.logo}
                alt=""
                className="h-7 w-7  object-contain"
                unoptimized
              />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{" "}
                <span aria-hidden="true">—</span>{" "}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
    </div>
  );
};
const Project = () => {
  let listProject = [
    {
      title: "Dunia Anura",
      desc: "The Dunia Anura application helps pet stores manage the animals they sell, die or for other reasons. This application was created using Next js and Express js.",
      link: "/duniaanura",
      date: "November 15, 2022",
    },
    {
      title: "Kandangku",
      desc: "Kandangku is an application that helps poultry farmers manage their egg-laying chicken coops. This application was created using React Native and Laravel.",
      link: "/kandangku",
      date: "Oktober , 2021",
    },
    {
      title: "Planteria",
      desc: "Planteria is an application that helps users take care of plants. This application was created using Laravel.",
      link: "/planteria",
      date: "Maret 5, 2021",
    },
    {
      title: "ETWPAD",
      desc: "Etwpad is an application that helps users manage the financial data of members of the Indonesian Army. This application was created using Laravel.",
      link: "/planteria",
      date: "November 17, 2021",
    },
  ];
  return (
    <>
      <h1 className="text-2xl font-bold text-woodsmoke-900 dark:text-white">
        The Last Of Project
      </h1>
      <div className="flex flex-col gap-y-6 mt-6">
        {listProject.map((project, index) => {
          return (
            <div
              key={index}
              className="rounded-2xl p-6 hover:bg-zinc-100 dark:bg-woodsmoke-700 dark:bg-opacity-40 dark:backdrop-blur-lg dark:hover:bg-woodsmoke-600 dark:hover:bg-opacity-40 dark:transition-all transition-all"
            >
              <span className="border-l-2 border-zinc-200 pl-2 text-woodsmoke-400 text-sm dark:text-woodsmoke-300">
                {project.date}
              </span>
              <h1 className="mt-4 font-semibold text-lg text-woodsmoke-800 dark:text-white">
                {project.title}
              </h1>
              <p className="mt-2 text-woodsmoke-400 text-sm dark:text-woodsmoke-300">
                {project.desc}
              </p>
              <Link
                href={`${project.link}`}
                className={
                  "flex items-center gap-x-2 text-xs mt-4 w-fit text-woodsmoke-500 hover:text-indigo-500 font-semibold group transition-colors"
                }
              >
                View Project
                <ArrowRightIcon className="fill-woodsmoke-400 h-4 w-4 group-hover:fill-indigo-500 transition-colors" />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};
const Home = () => {
  return (
    <>
      <Image
        src={"/Profile.jpeg"}
        className={
          "w-16 h-16 rounded-full border-2 border-woodsmoke-50 dark:border-woodsmoke-800"
        }
        width={64}
        height={64}
        alt={"Profile"}
      />
      <div className="max-w-2xl mt-8">
        <TypeAnimation
          sequence={[
            "I'm Software engineer",
            1000,
            "I'm front end developer and founder of Startcode Id.",
            2000,
          ]}
          wrapper="h1"
          cursor={true}
          repeat={false}
          className={
            "font-bold dark:text-white text-woodsmoke-900 text-3xl sm:text-5xl tracking-tight"
          }
        />
        <p className="text-woodsmoke-400 text-base mt-4 dark:text-woodsmoke-300">
          {description}
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-7 gap-x-8 gap-y-6">
        <div className="col-span-1 lg:col-span-4">
          <Project />
        </div>
        <div className="flex flex-col gap-y-6 col-span-1 lg:col-span-3">
          <Resume />
        </div>
      </div>
    </>
  );
};

export default Home;
