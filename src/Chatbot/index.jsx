import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

//type in terminal: npm start
//https://lucasbassetti.com.br/react-simple-chatbot/#/
//ctrl + C
//npm run build
//git add .
//git commit -m "changes"
//git push


const BotRedirect = ({ url, message }) => {
  return (
    <div>
      <a href={url} target="_blank">
        {message}
      </a>
    </div>
  );
};

const CHATBOT_THEME = {
  background: "#FFFEFC",
  fontFamily: "Tahoma",
  headerBgColor: "#FFAC1D",
  headerFontColor: "#fff",
  headerFontSize: "20px",
  botBubbleColor: "#FFA369",
  botFontColor: "#fff",
  userBubbleColor: "#B8B8B8",
  userFontColor: "#fff"
};

const ChatBotHelper = () => {
  const steps = [
    {
      id: "1",
      message: "Hey, I'm Casper and I am a virtual agent!",
      trigger: "2",
    },
    {
      id: "2",
      message: "What is your name?",
      trigger: "3",
    },
    {
      id: "3",
      user: true,
      trigger: "4",
    },
    {
      id: "4",
      message: "Hi {previousValue}, I work at Best Friend Animal Society in America. I would like to introduce the charity to someone who has a heart of gold like you!",
      trigger: "5",
    },
    {
      id: "5",
      message: "Have you ever heard about Best Friend?",
      trigger: "6",
    },
    {
      id: "6",
      options: [
          { value: 1, label: "Yes", trigger: "7" },
          { value: 2, label: "No", trigger: "7" },
        ],
    },
    {
      id: "7",
      message: "Best Friend is supporting abandoned cats and dogs from being killed in America’s shelters because of the lack of resources. Our goal is to support every shelter in every community to reach the no-kill benchmark of 90% by 2025. ",
      trigger: "8",
    },
    {
      id: "8",
      message: "Do you know what it means that we are currently reaching 48% of U.S shelters that are no-kill?",
      trigger: "9",
    },
    {
      id: "9",
      options: [
          { value: 1, label: "Yes", trigger: "10" },
          { value: 2, label: "No", trigger: "10" },
        ],
    },
    {
      id: "10",
      message: "This means that 3.500.000 cats and dogs were being saved! We need your help now more than ever to get across the finish line. I think that you are the reason for our pets to smile again!",
      trigger: "11",
    },
    {
      id: "11",
      message: "Do you know which characteristics our supporters have? ",
      trigger: "12",
    },
    {
      id: "12",
      options: [
          { value: 1, label: "Yes", trigger: "13" },
          { value: 2, label: "No", trigger: "13" },
        ],
    },
    {
      id: "13",
      message: "We work with people who love to save animals. That is, someone like you who is an amazing person with many good qualities. I believe you do things very well where you have much to be proud of!",
      trigger: "14",
    },
    {
      id: "14",
      message: " You are a person of worth and have a positive attitude toward yourself! I could imaging that you bring out the best in people. I admire your ability and how much respect you have for yourself. I believe that you are incredibly nice and amazingly friendly person!",
      trigger: "15",
    },
    {
      id: "15",
      message: "Do you know how you can help us?",
      trigger: "16",
    },
    {
      id: "16",
      options: [
          { value: 1, label: "Yes", trigger: "17" },
          { value: 2, label: "No", trigger: "17" },
        ],
    },
    {
      id: "17",
      message: "Only with a small donation of 50 cents, you can already save lives and provide homeless animals the help and healing needed to find permanent loving homes. You’ll not only save lives today, you’ll ensure a bright, safe future for generations of animals to come! ",
      trigger: "18",
    },
    {
      id: "18",
      message: "Thank you for your effort! Please close this application and Go back to the survey",
      end:true,
    },
  ];

  return (
    <>
      <ThemeProvider theme={CHATBOT_THEME}>
        <ChatBot steps={steps} floating={true} />
      </ThemeProvider>
    </>
  );
};

export default ChatBotHelper;
