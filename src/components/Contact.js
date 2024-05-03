import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

function Contact() {
  const contactInfo = `{ <br><br>
  "name": "Mohammad Rijvana",<br><br>
  "gender": "Female",<br><br>
  "email": "rijvana.md26@gmail.com",<br><br>
  "phone": "7569332075",<br><br>
  "address": "Visakhapatnam, AP, India"<br><br>
}`;

  return (
    <Container>
      <Box mt={10} display="flex" alignItems="center">
        <Typography variant="h4" gutterBottom style={{ color:'tomato', marginRight: '16px' }}>
          Contact
        </Typography>
        <Divider sx={{ borderBottom: '2px solid turquoise', width: '220px' }} />
      </Box>
      <Box mt={6} display={{ xs: 'column', md: 'flex' }}>

        {/* Text Column */}
        <Box flex="1" mb={{ xs: 4, md: 0 }} order={{ xs: 2, md: 1 }}>
          <Typography variant="body1" style={{  color:'turquoise', letterSpacing:'.1rem', marginTop:'50px' }}>
            <div dangerouslySetInnerHTML={{ __html: contactInfo }} />
          </Typography>
        </Box>
        
        {/* Image Column */}
        <Box flex="1" ml={{ xs: 0, md: 22 }} order={{ xs: 1, md: 2 }}>
          <img src="contact-removebg.png" alt="About" style={{ width: '100%', maxWidth: '450px', height:'100%', transform:'scaleX(-1)' }} />
        </Box>
      </Box>
    </Container>
  );
}

export default Contact;
