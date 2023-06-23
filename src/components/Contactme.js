"use client";
import React from "react";
import InputLabel from "./InputLabel";
import Stack from "@mui/joy/Stack";
import Box from "@mui/joy/Box";
import Textarea from "@mui/joy/Textarea";
import Button from "@mui/joy/Button";

const Contactme = () => {
  return (
    <>
      <h2 className="section_title">Contact Me</h2>
      <p className="section_para">
        The contact form is currently inactive. Get a functional and working
        contact form with Ajax & PHP in a few minutes. Just copy and paste the
        files, add a little code and you're done.
      </p>

      <div className="form">
        <form action="/send-data-here" method="post">
          <Box
            sx={{
              display: "flex",
              gap: 2,
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Stack
              direction="row"
              spacing={2}
              width="100%"
              className="input_box"
            >
              <InputLabel label="Your Name" />
              <InputLabel label="Your Email" />
            </Stack>
            <InputLabel label="Subject" />
            <Textarea
              minRows={4}
              variant="solid"
              placeholder="Type anything…"
              sx={{
                width: "100%",
                color: "#fff",
                backgroundColor: "#314355",
              }}
            />
            <Button
              variant="solid"
              size="lg"
              sx={{
                width: "100%",
                color: "#fff",
                backgroundColor: "#00b87b",
                transition: "0.3s all ease-in-out",
                "&:hover": {
                  backgroundColor: "#314355",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
            >
              Send Massage
            </Button>
          </Box>
        </form>
      </div>
    </>
  );
};

export default Contactme;
