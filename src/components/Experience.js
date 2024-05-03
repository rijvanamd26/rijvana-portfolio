import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

function Experience() {
  const [activeIndex, setActiveIndex] = useState(0); // State to keep track of active button index

  const handleButtonClick = (index) => {
    setActiveIndex(index); // Set active index when button is clicked
  };

  return (
    <Container>
      <Box mt={10} display="flex" alignItems="center">
        <Typography
          variant="h4"
          gutterBottom
          style={{ color: "tomato", marginRight: "16px" }}
        >
          Experience
        </Typography>
        <Divider sx={{ borderBottom: "2px solid turquoise", width: "180px" }} />
      </Box>
      <Box mt={4}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Box mt={2}>
              <Button
                style={{
                  marginBottom: "0px",
                  display: "block",
                  padding: "15px 25px",
                  fontSize: "1.3rem",
                  color: "turquoise",
                  textTransform: "none",
                  borderRadius: "0",
                  width: '100%',
                  width: '100%',
                  backgroundColor:
                    activeIndex === 0
                      ? "rgb(64, 224, 208, 0.2)"
                      : "transparent",
                  borderLeft:
                    activeIndex === 0
                      ? "3px solid rgb(64, 224, 208)"
                      : "2px solid rgb(64, 224, 208, 0.3)",
                }}
                onClick={() => handleButtonClick(0)} // Handle click for first button
              >
                Mar 2024 - Present
              </Button>
              <Button
                style={{
                  marginBottom: "0px",
                  display: "block",
                  padding: "15px 25px",
                  fontSize: "1.3rem",
                  color: "turquoise",
                  textTransform: "none",
                  borderRadius: "0",
                  width: '100%',
                  backgroundColor:
                    activeIndex === 1
                      ? "rgb(64, 224, 208, 0.2)"
                      : "transparent",
                  borderLeft:
                    activeIndex === 1
                      ? "3px solid rgb(64, 224, 208)"
                      : "2px solid rgb(64, 224, 208, 0.3)",
                }}
                onClick={() => handleButtonClick(1)} // Handle click for second button
              >
                Dec 2023 - Mar 2024
              </Button>
              <Button
                style={{
                  marginBottom: "0px",
                  display: "block",
                  padding: "15px 25px",
                  fontSize: "1.3rem",
                  color: "turquoise",
                  textTransform: "none",
                  borderRadius: "0",
                  width: '100%',
                  backgroundColor:
                    activeIndex === 2
                      ? "rgb(64, 224, 208, 0.2)"
                      : "transparent",
                  borderLeft:
                    activeIndex === 2
                      ? "3px solid rgb(64, 224, 208)"
                      : "2px solid rgb(64, 224, 208, 0.3)",
                }}
                onClick={() => handleButtonClick(2)} // Handle click for third button
              >
                Jun 2023 - Oct 2023
              </Button>
              <Button
                style={{
                  marginBottom: "0px",
                  display: "block",
                  padding: "15px 25px",
                  fontSize: "1.3rem",
                  color: "turquoise",
                  textTransform: "none",
                  borderRadius: "0",
                  width: '100%',
                  backgroundColor:
                    activeIndex === 3
                      ? "rgb(64, 224, 208, 0.2)"
                      : "transparent",
                  borderLeft:
                    activeIndex === 3
                      ? "3px solid rgb(64, 224, 208)"
                      : "2px solid rgb(64, 224, 208, 0.3)",
                }}
                onClick={() => handleButtonClick(3)} // Handle click for fourth button
              >
                May 2023 - Aug 2023
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={9}>
            {activeIndex === 0 && (
              <Typography variant="body1" mx={3} gutterBottom>
                {/* Content for first grid item */}
                <h2 style={{ color: "tomato", letterSpacing: ".1rem" }}>
                  Mern Stack Developer
                </h2>
                <h3 style={{ color: "turquoise" }}>Metainnovix</h3>
                Contributing on developing and maintaining web applications
                using the MERN stack.
                <h4 style={{ color: "turquoise" }}>
                  Technologies and APIs used:
                </h4>
                <p>MongoDB, Express.js, React.js, Node.js, Socket.io</p>
              </Typography>
            )}
            {activeIndex === 1 && (
              <Typography variant="body1" mx={3} gutterBottom>
                {/* Content for second grid item */}
                <h2 style={{ color: "tomato", letterSpacing: ".1rem" }}>
                  Full Stack Web Developer
                </h2>
                <h3 style={{ color: "turquoise" }}>Slash Mark</h3>
                Developed web applications using the MERN stack.
                <h4 style={{ color: "turquoise" }}>
                  Technologies and APIs used:
                </h4>
                <p>MongoDB, Express.js, React.js, Node.js</p>
              </Typography>
            )}
            {activeIndex === 2 && (
              <Typography variant="body1" mx={3} gutterBottom>
                {/* Content for third grid item */}
                <h2 style={{ color: "tomato", letterSpacing: ".1rem" }}>
                  Software Developer
                </h2>
                <h3 style={{ color: "turquoise" }}>
                  Signo Driver Logistics Pvt Ltd
                </h3>
                <ul>
                  <li>
                    Engaged in multiple Frappe based projects, actively involved
                    in customizations and development.
                  </li>
                  <li>
                    Developed Aadhaar number extraction, Centralized GPS,
                    Barcode Scanner etc.
                  </li>
                  <li>
                    Customizations include Sidebar for doctypes, mobile view for
                    doctypes etc.
                  </li>
                </ul>
                <h4 style={{ color: "turquoise" }}>
                  Technologies and APIs used:
                </h4>
                <p>Frappe, HTML, CSS, Javascript</p>
              </Typography>
            )}
            {activeIndex === 3 && (
              <Typography variant="body1" mx={3} gutterBottom>
                {/* Content for fourth grid item */}
                <h2 style={{ color: "tomato", letterSpacing: ".1rem" }}>
                  Python/Django Intern
                </h2>
                <h3 style={{ color: "turquoise" }}>
                  Dutypar AI Technologies Pvt Ltd
                </h3>
                <ul>
                  <li>
                    Assisted in the development and implementation of web
                    applications using Django.
                  </li>
                  <li>Assisted in debugging APIs</li>
                </ul>
                <h4 style={{ color: "turquoise" }}>
                  Technologies and APIs used:
                </h4>
                <p>Django, Python, HTML, CSS, Javascript</p>
              </Typography>
            )}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Experience;
