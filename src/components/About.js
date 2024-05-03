// import React from 'react';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';

// function About() {
//   return (
//     <Container>
//       <Box mt={10} display="flex" alignItems="center">
//         <Typography variant="h4" gutterBottom style={{ color:'tomato', marginRight: '16px' }}>
//           About
//         </Typography>
//         <Divider sx={{ borderBottom: '2px solid turquoise', width: '250px' }} />
//       </Box>
//       <Box mt={6} display={{ xs: 'column', md: 'flex' }}>
//         {/* Image Column */}
//         <Box flex="1" mb={{ xs: 4, md: 0 }} order={{ xs: 2, md: 1 }}>
//           <img src="https://cdni.iconscout.com/illustration/premium/thumb/woman-working-at-home-on-laptop-11195891-8991268.png" alt="About" style={{ width: '100%', maxWidth: '450px', height:'100%'}} />
//         </Box>
//         {/* Text Column */}
//         <Box flex="1" ml={{ xs: 0, md: 4 }} order={{ xs: 1, md: 2 }}>
//           <Typography variant="body1" style={{ textAlign: 'justify' }}>
 
// <p>I am Rijvana, a versatile full-stack developer proficient in MERN, Django, and Frappe frameworks. With hands-on experience in developing projects across various stacks, including MERN, Django, and Flask, I excel in crafting efficient solutions tailored to meet diverse requirements.</p>

// <p>My journey in software development has been marked by successful participation in hackathons and coding contests, including securing a prize in a national-level hackathon conducted by Vignan's Foundation for Science and Technology.</p>

// <p>Driven by a passion for continuous learning, I am a quick learner and a self-motivated individual committed to delivering high-quality results. With a strong work ethic and a focus on innovation, I approach every project with dedication and enthusiasm.</p>
//           </Typography>
//         </Box>
//       </Box>
//     </Container>
//   );
// }

// export default About;


import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import { useInView } from 'react-intersection-observer';

function About() {
  const imageAnimationControls = useAnimation();
  const textAnimationControls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      // Start image animation
      imageAnimationControls.start({
        scale: 1,
        transition: { duration: 0.5 },
      });

      // Start staggered text animation
      textAnimationControls.start((index) => ({
        scale: 1,
        transition: { duration: 0.5, delay: index * 0.2 },
      }));
    } else {
      // Reset animation controls when section goes out of view
      imageAnimationControls.stop();
      imageAnimationControls.set({ scale: 0.8 });
      textAnimationControls.stop();
      textAnimationControls.set({ scale: 0.8 });
    }
  }, [imageAnimationControls, textAnimationControls, inView]);

  return (
    <Container>
      <Box mt={10} display="flex" alignItems="center">
        <Typography variant="h4" gutterBottom style={{ color: 'tomato', marginRight: '16px' }}>
          About
        </Typography>
        <Divider sx={{ borderBottom: '2px solid turquoise', width: '250px' }} />
      </Box>
      <Grid container spacing={4} mt={6} ref={ref}>
        {/* Image Column */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ scale: 0.8 }}
            animate={imageAnimationControls}
          >
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/woman-working-at-home-on-laptop-11195891-8991268.png"
              alt="About"
              style={{ width: '100%', maxWidth: '450px', height: '100%' }}
            />
          </motion.div>
        </Grid>
        {/* Text Column */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ scale: 0.8 }}
            animate={textAnimationControls}
          >
            <Typography variant="body1" style={{ textAlign: 'justify' }}>
              <p>I am Rijvana, a versatile full-stack developer proficient in MERN, Django, and Frappe frameworks. With hands-on experience in developing projects across various stacks, including MERN, Django, and Flask, I excel in crafting efficient solutions tailored to meet diverse requirements.</p>
            </Typography>
          </motion.div>
          <motion.div
            initial={{ scale: 0.8 }}
            animate={textAnimationControls}
          >
            <Typography variant="body1" style={{ textAlign: 'justify' }}>
              <p>My journey in software development has been marked by successful participation in hackathons and coding contests, including securing a prize in a national-level hackathon conducted by Vignan's Foundation for Science and Technology.</p>
            </Typography>
          </motion.div>
          <motion.div
            initial={{ scale: 0.8 }}
            animate={textAnimationControls}
          >
            <Typography variant="body1" style={{ textAlign: 'justify' }}>
              <p>Driven by a passion for continuous learning, I am a quick learner and a self-motivated individual committed to delivering high-quality results. With a strong work ethic and a focus on innovation, I approach every project with dedication and enthusiasm.</p>
            </Typography>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default About;
