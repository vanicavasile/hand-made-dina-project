import Link from "next/link";
import { MainLayout } from "../components/MainLayout";
import classes from "../styles/error.module.scss";

export default function ErrorPage() {
  return (
    <MainLayout>
      <div className={classes.error_page}>
        <h1 className={classes.error}>Error 404</h1>
        <p>
          Please,{" "}
          <Link href="/" className={classes.go_back}>
            <em>go back</em>
          </Link>{" "}
          home
        </p>
      </div>
    </MainLayout>
  );
}
