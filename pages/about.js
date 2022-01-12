import Head from "next/head"
import { Card, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import Title from "../components/Title";

export default function About() {
  return (
    <Container sx={{ paddingTop: "6rem", paddingBottom: "3rem" }}>
      <Head>
        <title>Score Renovation | About Us</title>
      </Head>
      <Title>
        <InfoIcon fontSize="large" /> ABOUT
      </Title>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ width: "100%", height: 475 }}>
            <CardMedia
              component="img"
              src="images/about-kitchen.jpg"
              alt="kitchen renovation"
              height="300"
            />
            <CardContent>
              <Typography variant="h4" fontSize="3vmax" fontWeight="bold">
                Remodel
              </Typography>
              <Typography variant="body1">
                specializing in kitchens and bathrooms remodeling and
                renovations.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ width: "100%", height: 475 }}>
            <CardMedia
              component="img"
              src="images/about-basement.jpeg"
              alt="basement renovation"
              height="300"
            />
            <CardContent>
              <Typography variant="h4" fontSize="3vmax" fontWeight="bold">
                Finish
              </Typography>
              <Typography variant="body1">
                From framing to drywalls we renovate any room in your house.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ width: "100%", height: 475 }}>
            <CardMedia
              component="img"
              src="images/about-bath.jpg"
              alt="bath renovation"
              height="300"
            />
            <CardContent>
              <Typography variant="h4" fontSize="3vmax" fontWeight="bold">
                Quality
              </Typography>
              <Typography variant="body1">
                Punctuality and cleanliness are always our main priority in any
                renovation, backed by our lengthy warranty.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
