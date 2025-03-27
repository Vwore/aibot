import React from "react";
import style from "./style.module.css";
import { Box, Typography } from "@mui/material";
import logo from "../asset/logo.png";
import EditIcon from "@mui/icons-material/Edit";
export default function SideBar() {
  return (
    <Box className={style.sideBar}>
      <Box className={style.newChat}>
        <div className={style.logo} >
          <img src={logo} />
        </div>
        <div>New Chat</div>
        <EditIcon />
      </Box>
      <Typography className={style.past} variant="h3">Past Conversation</Typography>
    </Box>
  );
}
