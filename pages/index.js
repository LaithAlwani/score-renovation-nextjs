import { Box, Button, Typography } from "@mui/material";
import Head from "next/head";

const styles = {
  root: {
    minHeight: "100vh",
  },
  hero: {
    backgroundImage: `url("/images/main.jpg")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    textAlign: "center",
  },
  textContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    height: "100vh",
    display: "flex",
    alignItems: "center",
  },
  textWhite: {
    fontWeight: "bold",
    color: "white",
    textShadow: "1px 1px #444444",
  },
  button: {
    mt: 2,
    width: "250px",
    backgroundColor: "white",
    color: "black",
    "&:hover": { backgroundColor: "#888888", color: "white" },
  },
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Score Renovation | Home</title>
      </Head>
      <Box sx={styles.root}>
        <Box width="100%">
          <Box sx={styles.hero} role="img" aria-label="kitchen reonvations">
            <Box sx={styles.textContainer}>
              <Box
                sx={{
                  width: "100%",
                }}
              >
                <Typography variant="h1" fontSize="7vmin" sx={styles.textWhite}>
                  Quality renovations
                </Typography>
                <Typography
                  variant="body1"
                  fontSize="5vmin"
                  sx={styles.textWhite}
                >
                  is our main priority
                </Typography>
                <Button variant="contained" sx={styles.button} href="/about-us">
                  Learn More
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
