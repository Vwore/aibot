import React from "react";
import style from "./style.module.css";
import { Grid2 } from "@mui/material";
import SideBar from "../SideBar/SideBar";
import ChatBox from "../ChatBox/ChatBox";
import { Route, Routes } from "react-router";
import PastConv from "../PastConv/PastConv";

export default function Home() {
  return (
    <Grid2 container>
      <Grid2 item size={{ md: 2, xs: 0 }}>
        <SideBar />
      </Grid2>
      <Grid2
        item
        size={{ md: 10, xs: 12 }}
        bgcolor={"background.paper"}
        sx={{ marginLeft: 0, marginRight: 0, width: "100%" }}
      >
        <Routes>
          <Route path="/" element={<ChatBox />} />
          <Route path="/history" element={<PastConv />} />
        </Routes>
      </Grid2>
    </Grid2>
  );
}
