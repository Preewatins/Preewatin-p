import type { MetaFunction } from "@remix-run/node";
import MyCard from "./MyCard";


export const meta: MetaFunction = () => {
  return [
    { title: "Mr. Phakphum Rungjaemjaeng" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="font-sans p-4">
      <MyCard />
      {/* <h1 className="text-3xl">Welcome to Remix</h1>
      <ul className="list-disc mt-4 pl-6 space-y-2">
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://remix.run/start/quickstart"
            rel="noreferrer"
          >
            5m Quick Start
          </a>
        </li>
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://remix.run/start/tutorial"
            rel="noreferrer"
          >
            30m Tutorial
          </a>
        </li>
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://remix.run/docs"
            rel="noreferrer"
          >
            Remix Docs
          </a>
        </li>
      </ul>
      <hr />
      <h1 className="text-3xl">My Profile</h1>
      <ul className="list-disc mt-4 pl-6 space-y-2">
        <li>Name : Phakphum Rungjaemjaeng</li>
        <li>Class : Information Technology</li>
        <li>E-Mail : <a href="mailoto : phakphum.run@rmutto.ac.th">Contact Me.</a></li>
          </ul>
          <img src="img/images.jpg" ></img> */}
    </div>

  );
}