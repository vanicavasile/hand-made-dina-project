import { useState, useEffect } from "react";
import Link from "next/link";
import { MainLayout } from "../components/MainLayout";
import { MyEarrings } from "../interfaces/earrings";
import { NextPageContext } from "next";

interface EarringsPageProps {
  aboutEarrings: MyEarrings[];
}

export default function Earrings({
  aboutEarrings: serverAboutEarrings,
}: EarringsPageProps) {
  const [aboutEarrings, setAboutEarrings] = useState(serverAboutEarrings);

  useEffect(() => {
    async function load() {
      const response = await fetch(`${process.env.API_URL}/aboutEarrings`);
      const json = await response.json();
      setAboutEarrings(json);
    }

    if (!serverAboutEarrings) {
      load();
    }
  }, []);

  if (!aboutEarrings) {
    return (
      <MainLayout>
        <p>Loading ...</p>
      </MainLayout>
    );
  }

  return (
    <MainLayout title={"Earrings"}>
      <h1>Earrings Page</h1>
      <p>
        <Link href={"/"}>Home Page</Link>
      </p>
      <p>
        <Link href={"/brooches"}>Brooches Page</Link>
      </p>
      <ul>
        {aboutEarrings?.map((about) => (
          <li key={about.id}>
            <Link href={`/aboutEarring/${about.id}`}>{about.title}</Link>
          </li>
        ))}
      </ul>
    </MainLayout>
  );
}

Earrings.getInitialProps = async ({ req }: NextPageContext) => {
  if (!req) {
    return { aboutEarrings: null };
  }
  const response = await fetch(`${process.env.API_URL}/aboutEarrings`);
  const aboutEarrings: MyEarrings[] = await response.json();

  return {
    aboutEarrings,
  };
};
