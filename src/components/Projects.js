// import React, { useState } from "react";
// import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
// import Typography from "@mui/material/Typography";
// import Divider from "@mui/material/Divider";
// import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";
// import CardMedia from "@mui/material/CardMedia";
// import Dialog from "@mui/material/Dialog";
// import DialogContent from "@mui/material/DialogContent";
// import Button from "@mui/material/Button";

// function Projects() {
//   // Dummy data for project images and details
//   const projects = [
//     {
//       image:
//         "https://t3.ftcdn.net/jpg/05/02/18/64/360_F_502186443_Kubg3Wl76uE8BYl1tcAuYYXgGKAaO6r4.jpg",
//       title: 'E-farming',
//       description: 'This web application allows farmers to sell their product at better rate without any involvement of middlemen.',
//       technologies: 'Django, PostgreSQL, HTML, CSS, Bootstrap, Twilio, Paypal payment gateway.',
//       githubLink: "https://github.com/project1",
//     },
//     {
//       image:
//         "https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2021-05/revenge%20shopping.jpg",
//       title: 'GreatKart',
//       description: 'An E-commerce application which allows users to buy products online.',
//             technologies: 'Django, PostgreSQL, HTML, CSS, Bootstrap, Paypal payment gateway',
//        githubLink: "https://github.com/project2",
//     },
//     {
//       image:
//         "https://img.freepik.com/premium-vector/cute-virtual-wallet-cartoon-vector-illustration-logo-mascot-hand-drawn-concept-trandy-cartoon_519183-135.jpg",
//       title: 'Virtual Wallet',
//       description: 'This web application allows users to send receive request money from others and view wallet and transaction details.',
//             technologies: 'Django rest, Django, HTML.',
//        githubLink: "https://github.com/project2",
//     },
//     {
//       image:
//         "https://img.freepik.com/premium-vector/chatting-messaging-man-woman-chatting-smartphone-hand-holding-mobile-phone-with-text-messages_136162-238.jpg",
//         title: 'TalkHub',
//         description: 'TalkHub is a real-time chat application built using the MERN stack and Socket.io. It allows users to sign up, create groups, and engage in both one-on-one and group conversations.',
//         technologies: 'MongoDB, Express.js, React.js, Node.js, Socket.io.',
//          githubLink: "https://github.com/project2",
//     },
//     {
//       image:
//         "https://img.freepik.com/free-vector/college-university-students-group-young-happy-people-standing-isolated-white-background_575670-66.jpg",
//       title: 'Student Information Management System',
//       description: 'A basic web application in which we can add, read, update, delete Student details.',
//       technologies: 'Django, HTML, CSS, Bootstrap',
//        githubLink: "https://github.com/project2",
//     },
//     {
//       image:
//         "https://media.istockphoto.com/id/1133234233/vector/contact-list-businessman-icon-on-white-background-can-be-used-for-web-logo-mobile-app-ui-ux.jpg?s=612x612&w=0&k=20&c=iksDJzNt83NHeqIbJT6aB5ubCLx3CNJPiCM0vlmRf_s=",
//       title: 'Contact Manager',
//       description: 'A basic web application in which we can add, read, update, delete contact details.',
//            technologies: 'MongoDB, Express.js, React.js, Node.js, Socket.io.',
//        githubLink: "https://github.com/project2",
//     },
//     {
//       image:
//         "https://image.cnbcfm.com/api/v1/image/106341604-1579261030301thumbnailreports_deepfakevideo_clean_03.jpg?v=1579261049",
//       title: 'Deepfake Detection',
//       description: '......................',
//       technologies: '.....................',
//        githubLink: "https://github.com/project2",
//     },
//     {
//       image:
//         "https://media.licdn.com/dms/image/C4E12AQG2pj4JkZG0Yw/article-cover_image-shrink_600_2000/0/1520115601955?e=2147483647&v=beta&t=15dJ3ErnJfshcaCF1pn0x_PZO4-UeIeYayT1JR_1HY8",
//       title: 'Project Organizer',
//       description: '..........',
//       technologies: '............',
//        githubLink: "https://github.com/project2",
//     },
//     {
//       image:
//         "https://cdn.pixabay.com/photo/2020/10/09/21/36/ribbon-5641597_1280.png",
//       title: 'Breast Cancer Survival Prediction',
//       description: '............',
//       technologies: '..........................',
//        githubLink: "https://github.com/project2",
//     },
//     // Add more project objects as needed
//   ];

//   // State for modal open/close and selected project
//   const [open, setOpen] = useState(false);
//   const [selectedProject, setSelectedProject] = useState(null);

//   // Function to handle opening the modal and setting the selected project
//   const handleOpenModal = (projectIndex) => {
//     setSelectedProject(projects[projectIndex]);
//     setOpen(true);
//   };

//   // Function to handle closing the modal
//   const handleCloseModal = () => {
//     setOpen(false);
//   };

//   return (
//     <Container>
//       <Box mt={10} display="flex" alignItems="center">
//         <Typography
//           variant="h4"
//           gutterBottom
//           style={{ color: "tomato", marginRight: "14px" }}
//         >
//           Projects
//         </Typography>
//         <Divider sx={{ borderBottom: "2px solid turquoise", width: "180px" }} />
//       </Box>
//       <Box mt={4} style={{ display: "flex", justifyContent: "space-between" }}>
//         {/* Buttons for filtering */}
//         <div className="button button-1">All</div>
//         <div className="button button-1">Python</div>
//         <div className="button button-1">MERN</div>
//         <div className="button button-1">Other</div>
//       </Box>
//       {/* Grid for project cards */}
//       <Grid container spacing={3} mt={6}>
//         {/* Mapping through project images to create cards */}
//         {projects.map((project, index) => (
//           <Grid item xs={12} sm={6} md={3} key={index}>
//             <Card onClick={() => handleOpenModal(index)}
//             style={{cursor: 'pointer'}}>
//               <CardMedia
//                 component="img"
//                 width="200"
//                 height="250"
//                 image={project.image}
//                 alt={`Project ${index + 1}`}
//               />
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//       {/* Modal for displaying project details */}
//       <Dialog open={open} onClose={handleCloseModal}>
//         <DialogContent>
//           <Typography variant="h4" style={{color:'tomato'}}>{selectedProject && selectedProject.title}</Typography>
//           <Typography paragraph>
//             {selectedProject && selectedProject.description}
//           </Typography>
//           <Typography variant="h6" style={{color:'turquoise'}}>Technologies and APIs used:</Typography>
//           <Typography paragraph>
//             {selectedProject && selectedProject.technologies}
//           </Typography>
//           {selectedProject && (
//             <Button
//               variant="contained"
            
//               href={selectedProject.githubLink}
//               target="_blank"
//               style={{backgroundColor: "turquoise", color: 'black', fontWeight: '300px'}}
//             >
//               Source Code
//             </Button>
//           )}
//         </DialogContent>
//       </Dialog>
//     </Container>
//   );
// }

// export default Projects;


// import React, { useState } from "react";
// import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
// import Typography from "@mui/material/Typography";
// import Divider from "@mui/material/Divider";
// import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";
// import CardMedia from "@mui/material/CardMedia";
// import Dialog from "@mui/material/Dialog";
// import DialogContent from "@mui/material/DialogContent";
// import Button from "@mui/material/Button";

// function Projects() {
//   // Dummy data for project images and details
//   const projects = [
//     {
//       image:
//         "https://t3.ftcdn.net/jpg/05/02/18/64/360_F_502186443_Kubg3Wl76uE8BYl1tcAuYYXgGKAaO6r4.jpg",
//       title: "E-farming",
//       description:
//         "This web application allows farmers to sell their product at better rate without any involvement of middlemen.",
//       technologies:
//         "Django, PostgreSQL, HTML, CSS, Bootstrap, Twilio, Paypal payment gateway.",
//       githubLink: "https://github.com/project1",
//     },
//     {
//       image:
//         "https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2021-05/revenge%20shopping.jpg",
//       title: "GreatKart",
//       description:
//         "An E-commerce application which allows users to buy products online.",
//       technologies: "Django, PostgreSQL, HTML, CSS, Bootstrap, Paypal payment gateway",
//       githubLink: "https://github.com/project2",
//     },
//     // Add more project objects as needed
//   ];

//   // State for modal open/close and selected project
//   const [open, setOpen] = useState(false);
//   const [selectedProject, setSelectedProject] = useState(null);

//   // Function to handle opening the modal and setting the selected project
//   const handleOpenModal = (projectIndex) => {
//     setSelectedProject(projects[projectIndex]);
//     setOpen(true);
//   };

//   // Function to handle closing the modal
//   const handleCloseModal = () => {
//     setOpen(false);
//   };

//   return (
//     <Container>
//       <Box mt={10} display="flex" alignItems="center">
//         <Typography
//           variant="h4"
//           gutterBottom
//           style={{ color: "tomato", marginRight: "14px" }}
//         >
//           Projects
//         </Typography>
//         <Divider sx={{ borderBottom: "2px solid turquoise", width: "180px" }} />
//       </Box>
//       <Box mt={4} style={{ display: "flex", justifyContent: "space-between" }}>
//         {/* Buttons for filtering */}
//         <div className="button button-1">All</div>
//         <div className="button button-1">Python</div>
//         <div className="button button-1">MERN</div>
//         <div className="button button-1">Other</div>
//       </Box>
//       {/* Grid for project cards */}
//       <Grid container spacing={3} mt={6}>
//         {/* Mapping through project images to create cards */}
//         {projects.map((project, index) => (
//           <Grid item xs={12} sm={6} md={3} key={index}>
//             <Card
//               onClick={() => handleOpenModal(index)}
//               style={{ cursor: "pointer" }}
//             >
//               <CardMedia
//                 component="img"
//                 width="200"
//                 height="250"
//                 image={project.image}
//                 alt={`Project ${index + 1}`}
//                 style={{ transition: "0.3s", filter: "brightness(100%)" }}
//                 onMouseOver={(e) => (e.currentTarget.style.filter = "brightness(50%)")}
//                 onMouseOut={(e) => (e.currentTarget.style.filter = "brightness(100%)")}
//               />
//               <div style={{ position: "absolute", bottom: 0, width: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)", color: "white", textAlign: "center", padding: "8px 0", fontSize: "16px" }}>
//                 {project.title}
//               </div>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//       {/* Modal for displaying project details */}
//       <Dialog open={open} onClose={handleCloseModal}>
//         <DialogContent>
//           <Typography variant="h4" style={{ color: "tomato" }}>
//             {selectedProject && selectedProject.title}
//           </Typography>
//           <Typography paragraph>
//             {selectedProject && selectedProject.description}
//           </Typography>
//           <Typography variant="h6" style={{ color: "turquoise" }}>
//             Technologies and APIs used:
//           </Typography>
//           <Typography paragraph>
//             {selectedProject && selectedProject.technologies}
//           </Typography>
//           {selectedProject && (
//             <Button
//               variant="contained"
//               href={selectedProject.githubLink}
//               target="_blank"
//               style={{
//                 backgroundColor: "turquoise",
//                 color: "black",
//                 fontWeight: "300px",
//               }}
//             >
//               Source Code
//             </Button>
//           )}
//         </DialogContent>
//       </Dialog>
//     </Container>
//   );
// }

// export default Projects;

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";

function Projects() {
   const projects = [
    {
      image:
        "https://t3.ftcdn.net/jpg/05/02/18/64/360_F_502186443_Kubg3Wl76uE8BYl1tcAuYYXgGKAaO6r4.jpg",
      title: 'E-farming',
      description: 'This web application allows farmers to sell their product at better rate without any involvement of middlemen.',
      technologies: 'Django, PostgreSQL, HTML, CSS, Bootstrap, Twilio, Paypal payment gateway.',
      githubLink: "https://github.com/project1",
    },
    {
      image:
        "https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2021-05/revenge%20shopping.jpg",
      title: 'GreatKart',
      description: 'An E-commerce application which allows users to buy products online.',
            technologies: 'Django, PostgreSQL, HTML, CSS, Bootstrap, Paypal payment gateway',
       githubLink: "https://github.com/project2",
    },
    {
      image:
        "https://img.freepik.com/premium-vector/cute-virtual-wallet-cartoon-vector-illustration-logo-mascot-hand-drawn-concept-trandy-cartoon_519183-135.jpg",
      title: 'Virtual Wallet',
      description: 'This web application allows users to send receive request money from others and view wallet and transaction details.',
            technologies: 'Django rest, Django, HTML.',
       githubLink: "https://github.com/project2",
    },
    {
      image:
        "https://img.freepik.com/premium-vector/chatting-messaging-man-woman-chatting-smartphone-hand-holding-mobile-phone-with-text-messages_136162-238.jpg",
        title: 'TalkHub',
        description: 'TalkHub is a real-time chat application built using the MERN stack and Socket.io. It allows users to sign up, create groups, and engage in both one-on-one and group conversations.',
        technologies: 'MongoDB, Express.js, React.js, Node.js, Socket.io.',
         githubLink: "https://github.com/project2",
    },
    {
      image:
        "https://img.freepik.com/free-vector/college-university-students-group-young-happy-people-standing-isolated-white-background_575670-66.jpg",
      title: 'Student Information Management System',
      description: 'A basic web application in which we can add, read, update, delete Student details.',
      technologies: 'Django, HTML, CSS, Bootstrap',
       githubLink: "https://github.com/project2",
    },
    {
      image:
        "https://media.istockphoto.com/id/1133234233/vector/contact-list-businessman-icon-on-white-background-can-be-used-for-web-logo-mobile-app-ui-ux.jpg?s=612x612&w=0&k=20&c=iksDJzNt83NHeqIbJT6aB5ubCLx3CNJPiCM0vlmRf_s=",
      title: 'Contact Manager',
      description: 'A basic web application in which we can add, read, update, delete contact details.',
           technologies: 'MongoDB, Express.js, React.js, Node.js, Socket.io.',
       githubLink: "https://github.com/project2",
    },
    {
      image:
        "https://image.cnbcfm.com/api/v1/image/106341604-1579261030301thumbnailreports_deepfakevideo_clean_03.jpg?v=1579261049",
      title: 'Deepfake Detection',
      description: '......................',
      technologies: '.....................',
       githubLink: "https://github.com/project2",
    },
    {
      image:
        "https://media.licdn.com/dms/image/C4E12AQG2pj4JkZG0Yw/article-cover_image-shrink_600_2000/0/1520115601955?e=2147483647&v=beta&t=15dJ3ErnJfshcaCF1pn0x_PZO4-UeIeYayT1JR_1HY8",
      title: 'Project Organizer',
      description: '..........',
      technologies: '............',
       githubLink: "https://github.com/project2",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2020/10/09/21/36/ribbon-5641597_1280.png",
      title: 'Breast Cancer Survival Prediction',
      description: '............',
      technologies: '..........................',
       githubLink: "https://github.com/project2",
    },
    // Add more project objects as needed
  ];

//   // State for modal open/close and selected project
//   const [open, setOpen] = useState(false);
//   const [selectedProject, setSelectedProject] = useState(null);

//   // Function to handle opening the modal and setting the selected project
//   const handleOpenModal = (projectIndex) => {
//     setSelectedProject(projects[projectIndex]);
//     setOpen(true);
//   };

//   // Function to handle closing the modal
//   const handleCloseModal = () => {
//     setOpen(false);
//   };

//   return (
//     <Container>
//       <Box mt={10} display="flex" alignItems="center">
//         <Typography
//           variant="h4"
//           gutterBottom
//           style={{ color: "tomato", marginRight: "14px" }}
//         >
//           Projects
//         </Typography>
//         <Divider sx={{ borderBottom: "2px solid turquoise", width: "180px" }} />
//       </Box>
//       <Box mt={4} style={{ display: "flex", justifyContent: "space-between" }}>
//         {/* Buttons for filtering */}
//         <div className="button button-1">All</div>
//         <div className="button button-1">Python</div>
//         <div className="button button-1">MERN</div>
//         <div className="button button-1">Other</div>
//       </Box>
//       {/* Grid for project cards */}
//       <Grid container spacing={3} mt={6}>
//         {/* Mapping through project images to create cards */}
//         {projects.map((project, index) => (
//           <Grid item xs={12} sm={6} md={3} key={index}>
//             <Card
//               onClick={() => handleOpenModal(index)}
//               style={{ cursor: "pointer", position: "relative" }}
//             >
//               <CardMedia
//                 component="img"
//                 width="200"
//                 height="250"
//                 image={project.image}
//                 alt={`Project ${index + 1}`}
//                 style={{
//                   transition: "0.3s",
//                   filter: "brightness(100%)",
//                   position: "relative",
//                 }}
//                 onMouseOver={(e) => {
//                   e.currentTarget.style.filter = "brightness(50%)";
//                   e.currentTarget.nextSibling.style.visibility = "visible";
//                 }}
//                 onMouseOut={(e) => {
//                   e.currentTarget.style.filter = "brightness(100%)";
//                   e.currentTarget.nextSibling.style.visibility = "hidden";
//                 }}
//               />
//               <div
//                 style={{
//                   position: "absolute",
//                   bottom: "40%",
//                   left: "50%",
//                   transform: "translateX(-50%)",
//                   backgroundColor: "rgb(64, 224, 208, 0.3)",
//                   color: "white",
//                   textAlign: "center",
//                   padding: "8px",
//                   visibility: "hidden",
//                   borderRadius: "4px",
//                 }}
//               >
//                 {project.title}
//               </div>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//       {/* Modal for displaying project details */}
//       <Dialog open={open} onClose={handleCloseModal}>
//         <DialogContent>
//           <Typography variant="h4" style={{ color: "tomato" }}>
//             {selectedProject && selectedProject.title}
//           </Typography>
//           <Typography paragraph>
//             {selectedProject && selectedProject.description}
//           </Typography>
//           <Typography variant="h6" style={{ color: "turquoise" }}>
//             Technologies and APIs used:
//           </Typography>
//           <Typography paragraph>
//             {selectedProject && selectedProject.technologies}
//           </Typography>
//           {selectedProject && (
//             <Button
//               variant="contained"
//               href={selectedProject.githubLink}
//               target="_blank"
//               style={{
//                 backgroundColor: "turquoise",
//                 color: "black",
//                 fontWeight: "300px",
//               }}
//             >
//               Source Code
//             </Button>
//           )}
//         </DialogContent>
//       </Dialog>
//     </Container>
//   );
// }

// export default Projects;


  // State for modal open/close and selected project
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Function to handle opening the modal and setting the selected project
  const handleOpenModal = (projectIndex) => {
    setSelectedProject(projects[projectIndex]);
    setOpen(true);
  };

  // Function to handle closing the modal
  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <Container>
      <Box mt={10} display="flex" alignItems="center">
        <Typography
          variant="h4"
          gutterBottom
          style={{ color: "tomato", marginRight: "14px" }}
        >
          Projects
        </Typography>
        <Divider sx={{ borderBottom: "2px solid turquoise", width: "180px" }} />
      </Box>
      <Box mt={4} style={{ display: "flex", justifyContent: "space-between" }}>
        {/* Buttons for filtering */}
        <div className="button button-1">All</div>
        <div className="button button-1">Python</div>
        <div className="button button-1">MERN</div>
        <div className="button button-1">Other</div>
      </Box>
      {/* Grid for project cards */}
      <Grid container spacing={3} mt={6}>
        {/* Mapping through project images to create cards */}
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              onClick={() => handleOpenModal(index)}
              style={{
                cursor: "pointer",
                position: "relative",
                transition: "0.3s",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.filter = "brightness(100%)";
                e.currentTarget.querySelector('.project-title').style.visibility = "visible";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.filter = "brightness(100%)";
                e.currentTarget.querySelector('.project-title').style.visibility = "hidden";
              }}
            >
              <CardMedia
                component="img"
                width="200"
                height="250"
                image={project.image}
                alt={`Project ${index + 1}`}
              />
              <div
                className="project-title"
                style={{
                  position: "absolute",
                  bottom: "79%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  backgroundColor: "transparent",
                //   filter: "brightness(100%) !important",
                  color: "black",
                  fontWeight: "bold",
                  textAlign: "center",
                  padding: "8px",
                  visibility: "hidden",
                  borderRadius: "4px",
                  width: "100%",
                }}
              >
                {project.title}
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>
      {/* Modal for displaying project details */}
      <Dialog open={open} onClose={handleCloseModal}>
        <DialogContent>
          <Typography variant="h4" style={{ color: "tomato" }}>
            {selectedProject && selectedProject.title}
          </Typography>
          <Typography paragraph>
            {selectedProject && selectedProject.description}
          </Typography>
          <Typography variant="h6" style={{ color: "turquoise" }}>
            Technologies and APIs used:
          </Typography>
          <Typography paragraph>
            {selectedProject && selectedProject.technologies}
          </Typography>
          {selectedProject && (
            <Button
              variant="contained"
              href={selectedProject.githubLink}
              target="_blank"
              style={{
                backgroundColor: "turquoise",
                color: "black",
                fontWeight: "300px",
              }}
            >
              Source Code
            </Button>
          )}
        </DialogContent>
      </Dialog>
    </Container>
  );
}

export default Projects;