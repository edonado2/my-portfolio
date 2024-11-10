import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Container, Card, CardMedia, CardContent, Grid, Drawer, List, ListItem, ListItemText, CssBaseline, Link } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LogoDark from '../assets/darkLogo.webp';
import LogoLight from '../assets/logo.svg';
import { projects } from '../data/projects';
import EducationSection from '../sections/Education';
import { useProvider } from '../theme/Provider';
import { skills } from '../data/skills';
import { colors } from '../data/colors';

export const HomeScreen = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { theme, darkMode, handleThemeChange } = useProvider();
  const [skillColor, setSkillColor] = useState('');

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };



  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* Navbar */}
      <AppBar position="static" className="appbar" color="default">
        <Toolbar>
          <Typography variant="h6" className="logo">
            <img 
              src={darkMode ? LogoDark : LogoLight} 
              alt="Ernesto Dev Logo" 
              style={{ height: '80px', marginRight: '10px' }} 
            />
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button color="inherit" sx={{ color: theme.palette.text.primary }} href='#about'>About</Button>
            <Button color="inherit" sx={{ color: theme.palette.text.primary }} href='#projects'>Projects</Button>
            <Button color="inherit" sx={{ color: theme.palette.text.primary }} href='#skills'>Skills</Button>
            <Button color="inherit" sx={{ color: theme.palette.text.primary }}>Contact</Button>
          </Box>
          <IconButton onClick={handleThemeChange} color="inherit" sx={{ ml: 1 }}>
            {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
          <IconButton
            color="inherit"
            edge="end"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: 'block', sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List>
          <ListItem button onClick={toggleDrawer(false)}>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button onClick={toggleDrawer(false)}>
            <ListItemText primary="Projects" />
          </ListItem>
          <ListItem button onClick={toggleDrawer(false)}>
            <ListItemText primary="Skills" />
          </ListItem>
          <ListItem button onClick={toggleDrawer(false)}>
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </Drawer>

      {/* Hero Section */}
      <Box className="hero-section" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 8, textAlign: 'center', backgroundImage: 'url(../assets/heroImage.webp) center/cover', color: 'white'}} id="about">
        <Box sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', p: 4, borderRadius: 2}}>
          <Typography variant="h2" className="fade-in">Hi, I'm Ernesto</Typography>
          <Typography variant="h5" className="fade-up">A Full Stack Developer passionate about creating dynamic websites.</Typography>
          <Button variant="contained" color="primary" className="button-bounce" sx={{ mt: 2 }} href='#projects'>View My Work</Button>
        </Box>
      </Box>
     {/* Projects Section */}
      <Container className="projects-section" sx={{ py: 8, height:'100%' }} id='projects'>
        <Typography variant="h3" align="center" gutterBottom  style={{color:`${darkMode? 'white': '#000'}`}}>Projects</Typography>
        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.id}>
              <Link href={project.url} underline='none'>
              <Card className="project-card">
                <CardMedia
                  component="img"
                  alt={`Project ${project.project_name}`}
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5">{project.project_name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    A brief description of project {project.project_name}.
                  </Typography>
                </CardContent>
              </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Skills Section */}
      <Container className="skills-section" sx={{ py: 8, textAlign: 'center' }} id="skills">
        <Typography variant="h3" align="center" gutterBottom>Skills</Typography>
        <Grid container spacing={2} justifyContent="center">
          {skills.map((skill) => (
        <Grid item xs={6} sm={4} md={2} key={skill}>
          <Box
            sx={{
              p: 2,
              borderRadius: 2,
              bgcolor: colors[Math.floor(Math.random() * colors.length)],
            }}
          >
            <Typography variant="h6" sx={{ color: theme.palette.text.primary }}>
              {skill.name}
            </Typography>
          </Box>
        </Grid>
          ))}
        </Grid>
      </Container>
      <EducationSection />
      <br />

      {/* Footer */}
      <Box sx={{ bgcolor: darkMode ? 'grey.900' : 'grey.200', p: 4, textAlign: 'center' }}>
        <Typography variant="body1">© 2024 Ernesto - Full Stack Developer</Typography>
      </Box>
    </ThemeProvider>
  );
};
