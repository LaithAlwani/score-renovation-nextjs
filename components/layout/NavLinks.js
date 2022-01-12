import Link from "next/link";
import { Button } from "@mui/material";

export default function NavLinks() {
  return (
    <>
      <Link  href="/about">
        <Button color="inherit">About</Button>
      </Link>
      <Link  href="/gallery">
        <Button color="inherit">Gallery</Button>
      </Link>
      <Link  href="/contact">
        <Button color="inherit">Contact</Button>
      </Link>
    </>
  );
}
