import { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Container } from "@mui/material";

export default function ErrorPage() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.back();
    }, 2000);
  }, []);
  return (
    <Container sx={{ display: "block", textAlign: "center" }}>
      <Head>
        <title>Score Renovation | Page Not Found</title>
      </Head>
      <h1>page not found</h1>
      <p>redirecting...</p>
    </Container>
  );
}
