import { useState } from "react";
import Head from "next/head"
import {
  Alert,
  Box,
  Button,
  Container,
  InputLabel,
  TextField,
} from "@mui/material";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import Title from "../components/Title";
import emailjs from "emailjs-com";

export const getServerSideProps = () => {
  console.log(process.env.USER_ID);
  console.log(process.env.SERVICE_ID);
  console.log(process.env.TEMPLATE_ID);

  return {
    props: {
      userId: process.env.USER_ID,
      serviceId: process.env.SERVICE_ID,
      templateId: process.env.TEMPLATE_ID,
    },
  };
};

export default function Contact({ userId, serviceId, templateId }) {
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [subjectError, setSubjectError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setNameError(false);
    setEmailError(false);
    setSubjectError(false);
    setMessageError(false);

    if (
      e.target.name.value &&
      e.target.email.value &&
      e.target.subject.value &&
      e.target.message.value
    ) {
      emailjs.sendForm(serviceId, templateId, e.target, userId).then(
        (result) => {
          console.log(result.text);
          setMessage("Request Sent");
          e.target.reset();
          setTimeout(() => {
            setMessage("");
          }, 3000);
        },
        (error) => {
          console.log(error.text);
          setMessage("Request Failed");
          setTimeout(() => {
            setMessage("");
          }, 3000);
        }
      );
    } else {
      if (!e.target.name.value) {
        setNameError(true);
      }
      if (!e.target.email.value) {
        setEmailError(true);
      }
      if (!e.target.subject.value) {
        setSubjectError(true);
      }
      if (!e.target.message.value) {
        setMessageError(true);
      }
    }
  };

  return (
    <Container>
      <Head>
        <title>Score Renovation | Contact Us</title>
      </Head>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { my: 1 },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Title>
          <ContactSupportIcon fontSize="large" /> CONTACT US
        </Title>

        {message && (
          <Alert severity={message === "Request Sent" ? "success" : "error"}>
            {message}
          </Alert>
        )}

        <InputLabel>
          <TextField
            label="Name"
            name="name"
            aria-label="name"
            variant="outlined"
            fullWidth
            required
            error={nameError}
          />
        </InputLabel>
        <InputLabel>
          <TextField
            // onChange={(e) => setEmail(e.target.value)}
            label="Email"
            name="email"
            aria-label="email"
            variant="outlined"
            fullWidth
            required
            error={emailError}
          />
        </InputLabel>
        <InputLabel>
          <TextField
            // onChange={(e) => setTitle(e.target.value)}
            label="Subject"
            name="subject"
            aria-label="subject"
            variant="outlined"
            fullWidth
            required
            error={subjectError}
          />
        </InputLabel>
        <InputLabel>
          <TextField
            // onChange={(e) => setMessage(e.target.value)}
            label="Message"
            name="message"
            aria-label="message"
            variant="outlined"
            multiline={true}
            rows={5}
            fullWidth
            required
            error={messageError}
          />
        </InputLabel>

        <Button
          type="submit"
          aria-label="submit"
          variant="contained"
          sx={{
            width: "100%",
            backgroundColor: "#5b5b5b",
            "&:hover": { backgroundColor: "#444444" },
          }}
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
}
