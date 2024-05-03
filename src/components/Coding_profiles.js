import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNodeJs,
  faPython,
  faHtml5,
  faCss3,
  faJs,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faM,
  faE,
  faD,
  faF,
  faArrowRight,
  faCheck,
  faCode,
  faC,
} from "@fortawesome/free-solid-svg-icons";
import Grid from "@mui/material/Grid"; // Import Grid component

function Coding_profiles() {
  // Function to handle button click and redirect to a particular site
  const redirectToSite = (site) => {
    window.open(site, "_blank"); // Open the site in a new tab
  };

  return (
    <Container>
      <Box
        mt={10}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        style={{ color: "white", border: "2px dashed white", padding: "12px" }}
      >
        <Typography variant="h5" gutterBottom style={{ color: "white" }}>
          Here are my coding profiles:
        </Typography>
      </Box>

      <Box>
        <Grid
          container
          spacing={2}
          mt={6}
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          {" "}
          {/* Centering the Grid */}
          <Grid item xs={6} sm={6} md={3} mb={3}>
            <Button
              style={{
                color: "turquoise",
                borderColor: "turquoise",
                boxShadow: "none",
                padding: "2rem 1rem", // Adjust padding as needed
                width: "100%", // Set a fixed width for all buttons
                border: "2px solid turquoise",
                borderRadius: "15px",
                textTransform: "none",
              }}
              onClick={() => redirectToSite("https://www.codechef.com/")} // Redirect to Codechef
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  src="coding_profiles/codechef_icon.png"
                  alt="Codechef"
                  style={{ fontSize: "3rem", color: "white" }}
                />
                <div style={{ color: "turquoise", marginTop: "6px" }}>
                  Codechef
                </div>
              </div>
            </Button>
          </Grid>
          <Grid item xs={6} sm={6} md={3} mb={3}>
          <Button
              style={{
                color: "turquoise",
                borderColor: "turquoise",
                boxShadow: "none",
                padding: "2.2rem 1rem", // Adjust padding as needed
                width: "100%", // Set a fixed width for all buttons
                border: "2px solid turquoise",
                borderRadius: "15px",
                textTransform: "none",
              }}
              onClick={() => redirectToSite("https://www.codechef.com/")} // Redirect to Codechef
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  src="coding_profiles/hackerrank_icon.png"
                  style={{ fontSize: "3rem", color: "white" }}
                />
                <div style={{ color: "turquoise", marginTop: "6px" }}>
                  Hackerrank
                </div>
              </div>
            </Button>
          </Grid>
          <Grid item xs={6} sm={6} md={3} mb={3}>
          <Button
              style={{
                color: "turquoise",
                borderColor: "turquoise",
                boxShadow: "none",
                padding: "2rem 1rem", // Adjust padding as needed
                width: "100%", // Set a fixed width for all buttons
                border: "2px solid turquoise",
                borderRadius: "15px",
                textTransform: "none",
              }}
              onClick={() => redirectToSite("https://www.codechef.com/")} // Redirect to Codechef
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  src="coding_profiles/codesignal_icon.png"
                  style={{ fontSize: "3rem", color: "white" }}
                />
                <div style={{ color: "turquoise", marginTop: "6px" }}>
                  CodeSignal
                </div>
              </div>
            </Button>
          </Grid>
          <Grid item xs={6} sm={6} md={3} mb={3}>
          <Button
              style={{
                color: "turquoise",
                borderColor: "turquoise",
                boxShadow: "none",
                padding: "2rem 1rem", // Adjust padding as needed
                width: "100%", // Set a fixed width for all buttons
                border: "2px solid turquoise",
                borderRadius: "15px",
                textTransform: "none",
              }}
              onClick={() => redirectToSite("https://www.codechef.com/")} // Redirect to Codechef
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  src="coding_profiles/leetcode_icon.png"
                  style={{ fontSize: "3rem", color: "white" }}
                />
                <div style={{ color: "turquoise", marginTop: "6px" }}>
                  Leetcode
                </div>
              </div>
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Coding_profiles;
