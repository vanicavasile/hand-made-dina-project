import Link from "next/link";
import { MainLayout } from "../components/MainLayout";

export default function Index() {
  return (
    <MainLayout title={"HandMade"}>
      <h1>Hello Next.js</h1>
      <p>
        <Link href={"/brooches"}>Brooches</Link>
      </p>
      <p>
        <Link href={"/earrings"}>Earrings</Link>
      </p>
      <p>
        The async function declaration declares an async function where the
        await keyword is permitted within the function body.
      </p>
    </MainLayout>
  );
}
