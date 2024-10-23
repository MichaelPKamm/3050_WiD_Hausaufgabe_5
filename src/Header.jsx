import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Droppdown } from "./Droppdown";
import { Tabelle } from "./Tabelle";

export const Header = ({
  kantone_Liste,
  service_Liste,
  score_Liste,
  data,
  handleChange_L,
  handleChange_R,
  handleChange_score,
  dp_L,
  dp_R,
  dp_score,
}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ minHeight: "100px", display: "flex", justifyContent: "center" }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <img src="geoharvester.png" width={200} align="left" />
          <Typography
            variant="h7"
            component="div"
            sx={{ flexGrow: 1 }}
            align="center"
          >
            Ein Katalog für Schweizer Geodienste
          </Typography>
          <Droppdown
            kantone_Liste={kantone_Liste}
            service_Liste={service_Liste}
            score_Liste={score_Liste}
            handleChange_L={handleChange_L}
            handleChange_R={handleChange_R}
            handleChange_score={handleChange_score}
            dp_L={dp_L}
            dp_R={dp_R}
            dp_score={dp_score}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
