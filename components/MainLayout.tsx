import Link from "next/link";
import Head from "next/head";
import Logo from "../assets/logo.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { aboutCompany } from "../constants";

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

      <nav className="nav">
        <div className="nav-bar">
          <Link href="/" className="nav-logo">
            <Image priority src={Logo} alt="Logo" />
          </Link>
          <div className="container-brooches">
            <Link href="/brooches" className="nav-categories nav-brooches">
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
          <Link href="/earrings" className="nav-categories">
            <h3>Earrings</h3>
          </Link>
          <Link href={"/bracelets"} className="nav-categories">
            <h3>Bracelets</h3>
          </Link>
          <Link href={"/rings"} className="nav-categories">
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
      <main className="body-container">{children}</main>
      <footer className="footer-container">
        <h6 className="footer-about-company">{aboutCompany}</h6>
        <div className="footer-logo-container">
          <Link href="/" className="footer-logo">
            <Image priority src={Logo} alt="Logo" />
          </Link>
        </div>
        <section className="footer-contact-informations">
          <h2>Informație de contact</h2>
          <ul className="footer-ul-contact-informations">
            <li className="footer-li-contact-informations">060581891</li>
            <li className="footer-li-contact-informations">
              <Link href={"https://www.instagram.com/handmade.grosu.dina/"}>
                Instagram
              </Link>
            </li>
            <li className="footer-li-contact-informations">
              <Link href={"https://www.facebook.com/grosudina.03"}>
                Facebook
              </Link>
            </li>
            <li className="footer-li-contact-informations">
              dina.grosu@gmail.com
            </li>
          </ul>
        </section>
      </footer>
    </>
  );
}
