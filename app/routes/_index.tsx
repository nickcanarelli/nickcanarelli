import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import {
  GetInTouch,
  Hero,
  MyWork,
  RecentBlogPosts,
  TechStack,
} from "~/components";
import { quotes } from "~/constants";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader: LoaderFunction = async () => {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  return [quote];
};

export default function Index() {
  return (
    <>
      <Hero />
      <TechStack />
      <MyWork />
      {/* <RecentBlogPosts /> */}
      <GetInTouch />
    </>
  );
}
