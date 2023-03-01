import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { MainLayout } from "../../components/MainLayout";
import Link from "next/link";
import { NextPageContext } from "next";
import { MyEarrings } from "../../interfaces/earrings";

interface aboutEarringPageProps {
  aboutEarring: MyEarrings;
}

export default function Post({
  aboutEarring: serverAboutEarring,
}: aboutEarringPageProps) {
  const [aboutEarring, setAboutEarring] = useState(serverAboutEarring);
  const router = useRouter();

  useEffect(() => {
    async function load() {
      const response = await fetch(
        `http://localhost:4200/aboutEarrings/${router.query.id}`
      );
      const data = await response.json();
      setAboutEarring(data);
    }

    if (!serverAboutEarring) {
      load();
    }
  }, []);

  if (!aboutEarring) {
    return (
      <MainLayout>
        <p>Loading ...</p>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <h1>{aboutEarring.title}</h1>
      <hr />
      <p>{aboutEarring.body}</p>
      <Link href={"/earrings"}>Go back to all Earrings Page</Link>
    </MainLayout>
  );
}

interface aboutEarringNextPageContext extends NextPageContext {
  query: {
    id: string;
  };
}

Post.getInitialProps = async ({ query, req }: aboutEarringNextPageContext) => {
  if (!req) {
    return { aboutEarring: null };
  }
  const response = await fetch(
    `${process.env.API_URL}/aboutEarrings/${query.id}`
  );
  const aboutEarring = await response.json();

  return {
    aboutEarring,
  };
};

// export async function getServerSideProps({ query, req }) {
//   const response = await fetch(
//     `http://localhost:4200/aboutEarrings/${query.id}`
//   );
//   const aboutEarring = await response.json();

//   return {props: aboutEarring}
// }
