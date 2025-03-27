import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import ChatCard from "../ChatCard/ChatCard";
import style from "./style.module.css";
import { formatRelative, subDays } from "date-fns";

export default function PastConv() {
  const [chatHistory, setChatHistory] = useState([1]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("conversation"));
    console.log(data);
    setChatHistory(data);
  }, []);
  return (
    <div className={style.PastConv}>
      <div className={style.heading}>
        Past Conversations
      </div>
      <Box className={style.chatHistory}>
        {
          chatHistory?.map((val) => (
            <div className={style.chat}>
              <h3 style={{ alignSelf: "baseline" }}>
                {formatRelative(new Date(), new Date())}
              </h3>
              {val?.conversation?.map((chat) => (
                <ChatCard value={chat} />
              ))}
            </div>
          ))
          //   <div className={style.chat}>
          //     <h3 style={{ alignSelf: "baseline" }}>
          //       {formatRelative(subDays(new Date(), 6), new Date())}
          //     </h3>
          //     <ChatCard
          //       value={{ question: "hi!", answer: "hi There", time: Date() }}
          //     />
          //   </div>
        }
      </Box>
    </div>
  );
}
