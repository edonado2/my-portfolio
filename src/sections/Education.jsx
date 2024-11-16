import React from 'react';
import {
  Typography,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
  Box,
  ThemeProvider,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { education } from '../data/education';
import { useProvider } from '../theme/Provider'; 

const EducationSection = () => {
  const { theme } = useProvider(); 

  return (
    <ThemeProvider theme={theme}> 
      <Container className="education-section" sx={{ py: 8 }}>
        <Typography variant="h3" align="center" gutterBottom>
          Education
        </Typography>
        {education.map((edu) => (
          <Accordion key={edu.id} sx={{ mb: 2,  color: theme.palette.text.primary}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${edu.id}-content`}
              id={`panel${edu.id}-header`}
            >
              <Box>
                <Typography variant="h5">{edu.institution}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {edu.degree} • {edu.date}
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                {edu.details.map((detail, index) => (
                  <ListItem key={index} className="list-item">
                    <ListItemText primary={detail} />
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </ThemeProvider>
  );
};

export default EducationSection;
