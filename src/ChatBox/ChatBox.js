import {
  Box,
  Button,
  Container,
  Drawer,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import style from "./style.module.css";
import Logo from "../asset/logo.png";
import responseGenrator from "./responseGenrator";
import { v4 as uuidv4 } from "uuid";
import ChatCard from "../ChatCard/ChatCard";
import MenuIcon from "@mui/icons-material/Menu";
import SideBar from "../SideBar/SideBar";

// {id,time,question,answer,like,dislike}
function Template({ heading }) {
  return (
    <Box className={style.template}>
      <Box className={style.templateText1}>{heading}</Box>
      <Box className={style.templateText2}>
        Get immediate AI generated response
      </Box>
    </Box>
  );
}

export default function ChatBox() {
  const [conversation, setConversation] = useState([]);
  const [question, setQuestion] = useState("");
  const chatRef = useRef(null);
  const isMobile = useMediaQuery("(max-width:900px)");
  const [showDrawer, setShowDrawer] = useState(false);

  useEffect(() => {
    console.log(chatRef);
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
    console.log(conversation);
    console.log(isMobile);
  }, [conversation]); // Runs whenever messages change

  return (
    <Box
      className={style.chatBox}
      sx={{
        background: "background.default",
        padding: "10px",
        height: "100vh",
        margin: 0,
        width: "100%",
      }}
    >
      <Box className={style.navbar}>
        {isMobile && (
          <div>
            <MenuIcon
              onClick={() => {
                setShowDrawer(true);
              }}
            />
            <Drawer
              open={showDrawer}
              onClose={() => {
                setShowDrawer(false);
              }}
            >
              <SideBar />
            </Drawer>
          </div>
        )}
        <Typography variant="h1" className={style.heading}>
          Bot AI
        </Typography>
      </Box>

      {conversation.length === 0 ? (
        <>
          <Box className={style.hero}>
            <Typography variant="h1">How Can I Help You Today?</Typography>
            <div className={style.logo}>
              <img src={Logo} />
            </div>
          </Box>
          <Box className={style.templates}>
            <Template heading={"Hi, what is the weather"} />
            <Template heading={"Hi, what is my location"} />
            <Template heading={"Hi, what is the temperature"} />
            <Template heading={"Hi, how are you"} />
          </Box>
        </>
      ) : (
        <Box className={style.converContainer} ref={chatRef}>
          {conversation?.map((value) => (
            <>
              <ChatCard value={value} />
            </>
          ))}
        </Box>
      )}
      <Box className={style.inputBox}>
        <TextField
          id="standard-basic"
          variant="standard"
          placeholder="Message Bot AI…"
          sx={{ background: "white", width: "80%" }}
          value={question}
          onChange={(e) => {
            setQuestion(e.target.value);
          }}
        />
        <Button
          variant="contained"
          type="submit"
          onClick={() => {
            setConversation([
              ...conversation,
              {
                id: uuidv4(),
                question: question,
                answer: responseGenrator(question),
                time: Date(),
                feedback: "",
                rating: null,
              },
            ]);
            setQuestion("");
          }}
        >
          Ask
        </Button>
        <Button variant="contained" type="button">
          Save
        </Button>
      </Box>
    </Box>
  );
}
