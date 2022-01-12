import Head from "next/head"
import Image from "next/image"
import { Container, Grid } from "@mui/material";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import Title from "../components/Title";


export default function Gallery() {
  return (
    <>
      <Head>
        <title>Score Renovation | Gallery</title>
      </Head>
      <Container sx={{padding:"6rem 0 3rem 0"}}>
        <Title>
          <PermMediaIcon fontSize="large" /> GALLERY
        </Title>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={4}>
            <Image src="/images/bath01.jpg" alt="bath renovation" width={400} height={500} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Image src="/images/bath02.jpg" alt="bath renovation" width={400} height={500} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Image src="/images/bath03.jpg" alt="bath renovation" width={400} height={500} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Image src="/images/bath04.jpg" alt="bath renovation" width={400} height={500} />
          </Grid>

          <Grid item xs={12} sm={4}>
            <Image src="/images/floor01.jpeg" alt="floor renovation" width={400} height={500} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Image src="/images/floor02.jpeg" alt="floor renovation" width={400} height={500}/>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Image src="/images/floor03.jpg" alt="floor renovation" width={400} height={500}/>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Image src="/images/floor04.jpg" alt="floor renovation" width={400} height={500}/>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Image src="/images/kitchen01.jpg" alt="kitchen renovation" width={400} height={500}/>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Image src="/images/kitchen02.jpg" alt="kitchen renovation" width={400} height={500} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Image src="/images/bath05.jpg" alt="shower renovation" width={400} height={500}/>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Image src="/images/bath06.jpg" alt="shower renovation" width={400} height={500}/>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
