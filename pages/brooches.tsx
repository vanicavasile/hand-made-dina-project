import Router from "next/router";
import { MainLayout } from "../components/MainLayout";

export default function Brooches({ title }) {
  const linkClickHandler = () => {
    Router.push("/");
  };

  return (
    <MainLayout title={"Brooches"}>
      <h1>{title}</h1>
      <button onClick={linkClickHandler}>Go back to Home Page</button>
      <button onClick={() => Router.push("/earrings")}>
        Go back to Earrings Page
      </button>
    </MainLayout>
  );
}

Brooches.getInitialProps = async () => {
  const response = await fetch(`${process.env.API_URL}/brooches`);
  const data = await response.json();

  return {
    title: data.title,
  };
};
