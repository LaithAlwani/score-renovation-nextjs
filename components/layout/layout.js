import Footer from "./footer";
import Navbar from "./navbar";
import { Box } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";

const styles = {
  hero: {
    minHeight: "100vh",
    marginBottom: "-35px",
  },
  root: {
    minHeight: "100vh",
    marginBottom: "-35px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default function Layout({ children }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/images/sr-logo.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Specialize in kitchens bathrooms and basements renovations. qulity is our main priority"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link
          rel="apple-touch-icon"
          href="%PUBLIC_URL%/images/sr-logo-white.ico"
        />
        <link
          rel="andriod-touch-icon"
          href="%PUBLIC_URL%/images/sr-logo-white.ico"
        />
        
      </Head>
      <Navbar />
      <Box sx={router.pathname === "/" ? styles.hero : styles.root}>
        {children}
      </Box>
      <Footer />
    </>
  );
}
