import { Box } from "@mui/material";
import React from "react";
import style from "./style.module.css";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import { formatRelative } from "date-fns";

export default function ChatCard({ value }) {
  return (
    <>
      <Box className={style.conversation}>
        <div className={style.convImg}></div>
        <div className={style.convDetail}>
          <div className={style.convName}>You</div>
          <div className={style.convText}>{value.question}</div>
          <div className={style.convTime}>
            {formatRelative(value.time, new Date())}
          </div>
        </div>
      </Box>
      <Box className={style.conversation}>
        <div className={style.aiImg}></div>
        <div className={style.convDetail}>
          <div className={style.convName}>
            <span>Soul AI</span>
          </div>
          <p className={style.convText}>{value.answer}</p>
          <div className={style.convTimeAns}>
            <div>{formatRelative(value.time, new Date())}</div>

            <ThumbUpOffAltIcon sx={{ fontSize: "medium" }} />
            <ThumbDownOffAltIcon sx={{ fontSize: "medium" }} />
          </div>
        </div>
      </Box>
    </>
  );
}
