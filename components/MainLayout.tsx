import Link from "next/link";
import Head from "next/head";

export function MainLayout({ children, title = "HandMade | Dina" }) {
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="handmade, dina, broșă, cercei, brățară, brooche, earrings, bracelet"
        />
        <meta name="description" content="It is about handmade." />
        <title>{title} | Dina</title>
      </Head>

      <nav>
        <Link href="/" className="my-link">
          Home Page
        </Link>
        <Link href="/brooches" className="my-link">
          Brooches Page
        </Link>
        <Link href="/earrings" className="my-link">
          Earrings Page
        </Link>
      </nav>
      <main className="container">{children}</main>
    </>
  );
}
