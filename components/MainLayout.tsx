import Link from "next/link";
import Head from "next/head";
import Logo from "../assets/logo.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

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
        <div className="nav-link">
          <Link href="/" className="logo">
            <Image priority src={Logo} alt="Logo" />
          </Link>
          <div className="container-brooches">
            <Link href="/brooches" className="my-link nav-brooches">
              <h3>Brooches</h3>
            </Link>
            <div className="container-brooches-list">
              <ul className="ul-brooches-list">
                <li className="brooches-list">
                  <Link href="/brooches/brooches_8_march">Broșe 8 Martie</Link>
                </li>
                <li className="brooches-list">
                  <Link href={"/brooches/brooches_martisor"}>
                    Broșe Mărțișor
                  </Link>
                </li>
                <li className="brooches-list">
                  <Link href={"/brooches/brooches_new_year"}>
                    Broșe Anul Nou
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <Link href="/earrings" className="my-link">
            <h3>Earrings</h3>
          </Link>
          <Link href={"/bracelets"} className="my-link">
            <h3>Bracelets</h3>
          </Link>
          <Link href={"/rings"} className="my-link">
            <h3>Rings</h3>
          </Link>
        </div>
        <div className="container-nav-icons">
          <ul className="nav-ul-icons">
            <li className="nav-list-icons">
              <span>
                <FontAwesomeIcon icon={faHeart} height="20px" />
              </span>
            </li>
            <li className="nav-list-icons">
              <span>
                <FontAwesomeIcon icon={faCartShopping} height="20px" />
              </span>
            </li>
          </ul>
        </div>
      </nav>
      <main className="container">{children}</main>
    </>
  );
}
