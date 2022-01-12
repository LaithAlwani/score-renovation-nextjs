import { Box, Fab } from "@mui/material";
import links from "../../utils/socialLinks";

export default function SocialLinks() {
  const handleClick = (path) => {
    window.open(path, "_blank", "noreferrer", "noopener");
  };
  return (
    <Box
      sx={{
        flexGrow: 1,
        position: "fixed",
        bottom: 10,
        right: 3,
        display: "flex",
        flexDirection: "column"
      }}
    >
      {links.map((link, index) => (
        <Fab
          key={index}
          aria-label={link.name}
          size="small"
          tooltipTitle={link.name}
          onClick={() => handleClick(link.path)}
          sx={link.styles}
        >
          {link.icon}
        </Fab>
      ))}
    </Box>
  );
}
