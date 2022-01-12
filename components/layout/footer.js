import {useRouter} from "next/router"
import  Typography  from "@mui/material/Typography";

export default function Footer() {
  const router = useRouter();
  return (
    <Typography variant="body1" align="center" color={router.pathname ==="/"? "white":"inherit"} >
      2020 © Score Renovations
    </Typography>
  );
}
