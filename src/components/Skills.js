// import React from 'react';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faReact, faNodeJs, faPython, faHtml5, faCss3, faJs} from '@fortawesome/free-brands-svg-icons';
// import { faDatabase, faM, faE, faD, faF, faArrowRight, faCheck, faCode, faC } from '@fortawesome/free-solid-svg-icons';
// import Grid from '@mui/material/Grid'; // Import Grid component

// import './Skills.css';

// function Skills() {
//   return (
//     <Container>
//       <Box mt={10} display="flex" flexDirection="column" alignItems="center" justifyContent="center" style={{ color: 'white', border: '2px dashed white', padding: '12px' }}>
//         <Typography variant="h5" gutterBottom style={{ color: 'white' }}>
//           Here are the skills that demonstrate my expertise:
//         </Typography>
//       </Box>
//       <Box mt={6} style={{ display: 'flex', justifyContent: 'space-between' }}>
//         {/* Buttons for filtering */}
//         <div className="button button-1"><FontAwesomeIcon icon={faCheck} />&nbsp;All</div>
//         <div className="button button-1"><FontAwesomeIcon icon={faCode} />&nbsp;Programming</div>
//         <div className="button button-1"> <FontAwesomeIcon icon={faArrowRight} />&nbsp;Frameworks</div>
//         <div className="button button-1"><FontAwesomeIcon icon={faDatabase} /> &nbsp;Databases</div>
//       </Box>
//       <Box>
//         {/* Grid for buttons */}
//         <Grid container spacing={2} mt={6} style={{display: 'flex', justifyContent: 'center', textAlign:'center'}}> {/* Centering the Grid */}
//           {/* React.js button */}
//           <Grid item xs={6} sm={6} md={2} mb={3}> {/* Adjusted md to 3 for two buttons in the center */}
//             <Button
//               style={{ color: 'turquoise', borderColor: 'turquoise', boxShadow: 'none', padding: '25px 36px', border: '2px solid turquoise', borderRadius: '15px' }}
//             >
//               <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//                 <FontAwesomeIcon icon={faReact} style={{ fontSize: '3rem', color: 'turquoise' }} />
//                 <div style={{ color: 'turquoise', marginTop: '6px' }}>React.js</div>
//               </div>
//             </Button>
//           </Grid>
          
//           <Grid item xs={6} sm={6} md={2} mb={3}> {/* Adjusted md to 3 for two buttons in the center */}
//             <Button
//               style={{ color: 'turquoise', borderColor: 'turquoise', boxShadow: 'none', padding: '25px 36px', border: '2px solid turquoise', borderRadius: '15px' }}
//             >
//               <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//                 <FontAwesomeIcon icon={faNodeJs} style={{ fontSize: '3rem', color: 'turquoise' }} />
//                 <div style={{ color: 'turquoise', marginTop: '6px' }}>Node.js</div>
//               </div>
//             </Button>
//           </Grid>
           
//            <Grid item xs={6} sm={6} md={2} mb={3}> {/* Adjusted md to 3 for two buttons in the center */}
//             <Button
//               style={{ color: 'turquoise', borderColor: 'turquoise', boxShadow: 'none', padding: '25px 32px', border: '2px solid turquoise', borderRadius: '15px' }}
//             >
//               <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//                 <FontAwesomeIcon icon={faM} style={{ fontSize: '3rem', color: 'turquoise' }} />
//                 <div style={{ color: 'turquoise', marginTop: '6px' }}>MongoDB</div>
//               </div>
//             </Button>
//           </Grid>
           
//            <Grid item xs={6} sm={6} md={2} mb={3}> {/* Adjusted md to 3 for two buttons in the center */}
//             <Button
//               style={{ color: 'turquoise', borderColor: 'turquoise', boxShadow: 'none', padding: '25px 24px', border: '2px solid turquoise', borderRadius: '15px' }}
//             >
//               <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//                 <FontAwesomeIcon icon={faE} style={{ fontSize: '3rem', color: 'turquoise' }} />
//                 <div style={{ color: 'turquoise', marginTop: '6px' }}>Express.js</div>
//               </div>
//             </Button>
//           </Grid>
           
//            <Grid item xs={6} sm={6} md={2} mb={3}> {/* Adjusted md to 3 for two buttons in the center */}
//             <Button
//               style={{ color: 'turquoise', borderColor: 'turquoise', boxShadow: 'none', padding: '25px 37px', border: '2px solid turquoise', borderRadius: '15px' }}
//             >
//               <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//                 <FontAwesomeIcon icon={faD} style={{ fontSize: '3rem', color: 'turquoise' }} />
//                 <div style={{ color: 'turquoise', marginTop: '6px' }}>Django</div>
//               </div>
//             </Button>
//           </Grid>
//           <Grid item xs={6} sm={6} md={2} mb={3}> {/* Adjusted md to 3 for two buttons in the center */}
//             <Button
//               style={{ color: 'turquoise', borderColor: 'turquoise', boxShadow: 'none', padding: '25px 46px', border: '2px solid turquoise', borderRadius: '15px' }}
//             >
//               <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//                 <FontAwesomeIcon icon={faD} style={{ fontSize: '3rem', color: 'turquoise' }} />
//                 <div style={{ color: 'turquoise', marginTop: '6px' }}>DRF</div>
//               </div>
//             </Button>
//           </Grid>
//           <Grid item xs={6} sm={6} md={2} mb={3}> {/* Adjusted md to 3 for two buttons in the center */}
//             <Button
//               style={{ color: 'turquoise', borderColor: 'turquoise', boxShadow: 'none', padding: '25px 39px', border: '2px solid turquoise', borderRadius: '15px' }}
//             >
//               <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//                 <FontAwesomeIcon icon={faPython} style={{ fontSize: '3rem', color: 'turquoise' }} />
//                 <div style={{ color: 'turquoise', marginTop: '6px' }}>Python</div>
//               </div>
//             </Button>
//           </Grid>
//           <Grid item xs={6} sm={6} md={2} mb={3}> {/* Adjusted md to 3 for two buttons in the center */}
//             <Button
//               style={{ color: 'turquoise', borderColor: 'turquoise', boxShadow: 'none', padding: '25px 43px', border: '2px solid turquoise', borderRadius: '15px' }}
//             >
//               <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//                 <FontAwesomeIcon icon={faF} style={{ fontSize: '3rem', color: 'turquoise' }} />
                
//                 <div style={{ color: 'turquoise', marginTop: '6px' }}>Flask</div>
//               </div>
//             </Button>
//           </Grid>
//           <Grid item xs={6} sm={6} md={2} mb={3}> {/* Adjusted md to 3 for two buttons in the center */}
//             <Button
//               style={{ color: 'turquoise', borderColor: 'turquoise', boxShadow: 'none', padding: '25px 49px', border: '2px solid turquoise', borderRadius: '15px' }}
//             >
//               <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//                 <FontAwesomeIcon icon={faHtml5} style={{ fontSize: '3rem', color: 'turquoise' }} />
//                 <div style={{ color: 'turquoise', marginTop: '6px' }}>HTML</div>
//               </div>
//             </Button>
//           </Grid>
//           <Grid item xs={6} sm={6} md={2} mb={3}> {/* Adjusted md to 3 for two buttons in the center */}
//             <Button
//               style={{ color: 'turquoise', borderColor: 'turquoise', boxShadow: 'none', padding: '25px 42px', border: '2px solid turquoise', borderRadius: '15px' }}
//             >
//               <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//                 <FontAwesomeIcon icon={faCss3} style={{ fontSize: '3rem', color: 'turquoise' }} />
//                 <div style={{ color: 'turquoise', marginTop: '6px' }}>CSS</div>
//               </div>
//             </Button>
//           </Grid>
//           <Grid item xs={6} sm={6} md={2} mb={3}> {/* Adjusted md to 3 for two buttons in the center */}
//             <Button
//               style={{ color: 'turquoise', borderColor: 'turquoise', boxShadow: 'none', padding: '25px 30px', border: '2px solid turquoise', borderRadius: '15px' }}
//             >
//               <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//                 <FontAwesomeIcon icon={faJs} style={{ fontSize: '3rem', color: 'turquoise' }} />
//                 <div style={{ color: 'turquoise', marginTop: '6px' }}>Javacript</div>
//               </div>
//             </Button>
//           </Grid>
//           <Grid item xs={6} sm={6} md={2} mb={3}> {/* Adjusted md to 3 for two buttons in the center */}
//             <Button
//               style={{ color: 'turquoise', borderColor: 'turquoise', boxShadow: 'none', padding: '25px 48px', border: '2px solid turquoise', borderRadius: '15px' }}
//             >
//               <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//                 <FontAwesomeIcon icon={faC} style={{ fontSize: '3rem', color: 'turquoise' }} />
//                 <div style={{ color: 'turquoise', marginTop: '6px' }}>C</div>
//               </div>
//             </Button>
//           </Grid>
//           <Grid item xs={6} sm={6} md={2} mb={3}> {/* Adjusted md to 3 for two buttons in the center */}
//             <Button
//               style={{ color: 'turquoise', borderColor: 'turquoise', boxShadow: 'none', padding: '25px 40px', border: '2px solid turquoise', borderRadius: '15px' }}
//             >
//               <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//                 <FontAwesomeIcon icon={faCode} style={{ fontSize: '3rem', color: 'turquoise' }} />
//                 <div style={{ color: 'turquoise', marginTop: '6px' }}>CPP</div>
//               </div>
//             </Button>
//           </Grid>
//           <Grid item xs={6} sm={6} md={2} mb={3}> {/* Adjusted md to 3 for two buttons in the center */}
//             <Button
//               style={{ color: 'turquoise', borderColor: 'turquoise', boxShadow: 'none', padding: '25px 47px', border: '2px solid turquoise', borderRadius: '15px' }}
//             >
//               <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//                 <FontAwesomeIcon icon={faDatabase} style={{ fontSize: '3rem', color: 'turquoise' }} />
//                 <div style={{ color: 'turquoise', marginTop: '6px' }}>SQL</div>
//               </div>
//             </Button>
//           </Grid>
//           <Grid item xs={6} sm={6} md={2} mb={3}> {/* Adjusted md to 3 for two buttons in the center */}
//             <Button
//               style={{ color: 'turquoise', borderColor: 'turquoise', boxShadow: 'none', padding: '25px 47px', border: '2px solid turquoise', borderRadius: '15px' }}
//             >
//               <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//                 <FontAwesomeIcon icon={faF} style={{ fontSize: '3rem', color: 'turquoise' }} />
//                 <div style={{ color: 'turquoise', marginTop: '6px' }}>Frappe</div>
//               </div>
//             </Button>
//           </Grid>
//           {/* Additional buttons can be added similarly */}
//         </Grid>
//       </Box>
//     </Container>
//   );
// }

// export default Skills;


import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs, faPython, faHtml5, faCss3, faJs} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faM, faE, faD, faF, faArrowRight, faCheck, faCode, faC } from '@fortawesome/free-solid-svg-icons';
import Grid from '@mui/material/Grid'; // Import Grid component

import './Skills.css';

function Skills() {
  // State for selected filter
  const [selectedFilter, setSelectedFilter] = useState('All');

  // Skills data
  const skills = [

    { name: 'React.js', category: 'Frameworks' },
    { name: 'Express.js', category: 'Frameworks' },
    { name: 'Node.js', category: 'Frameworks' },
    { name: 'Django', category: 'Frameworks' },
    { name: 'DRF', category: 'Frameworks' },
    { name: 'Flask', category: 'Frameworks' },
    { name: 'Frappe', category: 'Frameworks' },
    { name: 'Python', category: 'Programming' },
    { name: 'C', category: 'Programming' },
    { name: 'CPP', category: 'Programming' },
    { name: 'HTML', category: 'Programming' },
    { name: 'CSS', category: 'Programming' },
    { name: 'Javascript', category: 'Programming' },
    { name: 'MongoDB', category: 'Databases' },
    { name: 'SQL', category: 'Databases' },
  ];

  // Filtered skills based on selected filter
  const filteredSkills = selectedFilter === 'All' ? skills : skills.filter(skill => skill.category === selectedFilter);

  return (
    <Container>
      <Box mt={10} display="flex" flexDirection="column" alignItems="center" justifyContent="center" style={{ color: 'white', border: '2px dashed white', padding: '12px' }}>
        <Typography variant="h5" gutterBottom style={{ color: 'white' }}>
          Here are the skills that demonstrate my expertise:
        </Typography>
      </Box>
      <Box mt={6} style={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Buttons for filtering */}
        <div className="button button-1" onClick={() => setSelectedFilter('All')}><FontAwesomeIcon icon={faCheck} />&nbsp;All</div>
        <div className="button button-1" onClick={() => setSelectedFilter('Programming')}><FontAwesomeIcon icon={faCode} />&nbsp;Programming</div>
        <div className="button button-1" onClick={() => setSelectedFilter('Frameworks')}><FontAwesomeIcon icon={faArrowRight} />&nbsp;Frameworks</div>
        <div className="button button-1" onClick={() => setSelectedFilter('Databases')}><FontAwesomeIcon icon={faDatabase} /> &nbsp;Databases</div>
      </Box>
      <Box>
        {/* Grid for buttons */}
        <Grid container spacing={2} mt={6} style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}> {/* Centering the Grid */}
          {/* Render filtered skills */}
          {filteredSkills.map((skill, index) => (
            <Grid key={index} item xs={6} sm={6} md={2} mb={3}> {/* Adjusted md to 3 for two buttons in the center */}
              <Button
                style={{
                  color: 'turquoise',
                  borderColor: 'turquoise',
                  boxShadow: 'none',
                  padding: '3rem 1rem', // Adjust padding as needed
                  width: '100%', // Set a fixed width for all buttons
                  border: '2px solid turquoise',
                  borderRadius: '15px',
                  textTransform: 'none'
               }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  {skill.name === 'React.js' && <FontAwesomeIcon icon={faReact} style={{ fontSize: '3rem', color: 'turquoise' }} />}
                  {skill.name === 'Node.js' && <FontAwesomeIcon icon={faNodeJs} style={{ fontSize: '3rem', color: 'turquoise' }} />}
                  {skill.name === 'Python' && <FontAwesomeIcon icon={faPython} style={{ fontSize: '3rem', color: 'turquoise' }} />}
                  {skill.name === 'HTML' && <FontAwesomeIcon icon={faHtml5} style={{ fontSize: '3rem', color: 'turquoise' }} />}
                  {skill.name === 'CSS' && <FontAwesomeIcon icon={faCss3} style={{ fontSize: '3rem', color: 'turquoise' }} />}
                  {skill.name === 'Javascript' && <FontAwesomeIcon icon={faJs} style={{ fontSize: '3rem', color: 'turquoise' }} />}
                  {skill.name === 'Django' && <FontAwesomeIcon icon={faD} style={{ fontSize: '3rem', color: 'turquoise' }} />}
                  {skill.name === 'DRF' && <FontAwesomeIcon icon={faD} style={{ fontSize: '3rem', color: 'turquoise' }} />}
                  {skill.name === 'Flask' && <FontAwesomeIcon icon={faF} style={{ fontSize: '3rem', color: 'turquoise' }} />}
                  {skill.name === 'Frappe' && <FontAwesomeIcon icon={faF} style={{ fontSize: '3rem', color: 'turquoise' }} />}
                  {skill.name === 'MongoDB' && <FontAwesomeIcon icon={faM} style={{ fontSize: '3rem', color: 'turquoise' }} />}
                  {skill.name === 'SQL' && <FontAwesomeIcon icon={faDatabase} style={{ fontSize: '3rem', color: 'turquoise' }} />}
                  {skill.name === 'C' && <FontAwesomeIcon icon={faC} style={{ fontSize: '3rem', color: 'turquoise' }} />}
                  {skill.name === 'CPP' && <FontAwesomeIcon icon={faC} style={{ fontSize: '3rem', color: 'turquoise' }} />}
                  {skill.name === 'Express.js' && <FontAwesomeIcon icon={faE} style={{ fontSize: '3rem', color: 'turquoise' }} />}
                  <div style={{ color: 'turquoise', marginTop: '6px' }}>{skill.name}</div>
                </div>
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default Skills;
