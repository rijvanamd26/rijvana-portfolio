// import React from 'react';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import { useTheme } from '@mui/material/styles';

// function Home() {
//   const theme = useTheme();
//   const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));

//   return (
//     <Container>
//       <Box mt={18}>
//         <Typography gutterBottom>
//           <p style={{ margin: '0' }}>Hi, I'm</p>
//           <p style={{ margin: '0', fontSize: isLargeScreen ? '5rem' : '2rem', color:'tomato', letterSpacing: isLargeScreen ? '.4rem' : '.1rem', fontWeight: 'bold' }}>MOHAMMAD RIJVANA</p>
//           <p style={{ margin: '0', fontSize: isLargeScreen ? '3rem' : '1.5rem', fontWeight: 'bold' }}>I build things for the web</p>
//         </Typography>
//         <Typography variant="body1" style={{ marginTop: '20px', textAlign: 'justify' }}>
//           Full Stack Developer with expertise in Django, MERN stack, and Frappe. Passionate about building robust web applications with a focus on scalability and performance.
//         </Typography>
//         <Box mt={4} display="flex">
//           <Button 
//             style={{ color: 'turquoise', fontWeight: 'bold', fontSize:'1.2rem', borderColor: 'turquoise', marginRight: '15px', boxShadow: 'none' }} 
//             variant="outlined"
//             sx={{
//               '&:hover': {
//                 color: 'black !important',
//                 fontWeight: 'bold', // Ensure color change on hover
//                 backgroundColor: 'turquoise',
//                 borderColor: 'turquoise',
//                 boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23)',
//               },
//             }}
//           >
//             Resume
//           </Button>
//           <Button 
//             style={{ color: 'turquoise', fontWeight: 'bold', fontSize:'1.2rem', borderColor: 'turquoise', boxShadow: 'none' }} 
//             variant="outlined"
//             sx={{
//               '&:hover': {
//                 color: 'black !important', 
//                 // Ensure color change on hover
//                 backgroundColor: 'turquoise',
//                 borderColor: 'turquoise',
//                 boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23)',
//               },
//             }}
//           >
//             Let's connect
//           </Button>
//         </Box>
//       </Box>
//     </Container>
//   );
// }

// export default Home;

import React from 'react';
import { motion } from 'framer-motion';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function Home() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <Box mt={18}>
          <Typography gutterBottom>
            <p style={{ margin: '0' }}>Hi, I'm</p>
            <p style={{ margin: '0', fontSize: isLargeScreen ? '5rem' : '2rem', color:'tomato', letterSpacing: isLargeScreen ? '.4rem' : '.1rem', fontWeight: 'bold' }}>MOHAMMAD RIJVANA</p>
            <p style={{ margin: '0', fontSize: isLargeScreen ? '3rem' : '1.5rem', fontWeight: 'bold' }}>I build things for the web</p>
          </Typography>
          <Typography variant="body1" style={{ marginTop: '20px', textAlign: 'justify' }}>
            Full Stack Developer with expertise in Django, MERN stack, and Frappe. Passionate about building robust web applications with a focus on scalability and performance.
          </Typography>
          <Box mt={4} display="flex">
            <Button 
              style={{ color: 'turquoise', fontWeight: 'bold', fontSize:'1.2rem', borderColor: 'turquoise', marginRight: '15px', boxShadow: 'none' }} 
              variant="outlined"
              sx={{
                '&:hover': {
                  color: 'black !important',
                  fontWeight: 'bold', // Ensure color change on hover
                  backgroundColor: 'turquoise',
                  borderColor: 'turquoise',
                  boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23)',
                },
              }}
            >
              Resume
            </Button>
            <Button 
              style={{ color: 'turquoise', fontWeight: 'bold', fontSize:'1.2rem', borderColor: 'turquoise', boxShadow: 'none' }} 
              variant="outlined"
              sx={{
                '&:hover': {
                  color: 'black !important', 
                  // Ensure color change on hover
                  backgroundColor: 'turquoise',
                  borderColor: 'turquoise',
                  boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23)',
                },
              }}
            >
              Let's connect
            </Button>
          </Box>
        </Box>
      </motion.div>
    </Container>
  );
}

export default Home;
