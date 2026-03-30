import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Stack,
  CardMedia,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import university from "../assets/video/University.webm";
import home from "../assets/personalprojects/HomeAppliance.png";
import ims from "../assets/personalprojects/ims.jpg";
import mhike from "../assets/personalprojects/mhike.jpg";
import social from "../assets/personalprojects/socialmedia.png";

const projectsData = [
  {
    title: "Home Appliance Management System , Windows Application",
    description:
      "For an academic project, I developed a simple CRUD application using WinForms (C#) and Microsoft SQL Server. This experience taught me how to design database schemas for SQL databases and optimize them for read/ write operations through normalization and denormalization techniques. I also learned about data input validation, data types, and UI controls.",
    tech: [".Net (C#)", "MYSQL", "Winforms"],
    github: "https://github.com/SufiaSimjee/HomeApplianceManagementSystem",
    projectImage: home,
    // period: "Jan 2023 – May 2023",
  },
  {
    title: "Camping Site, Website",
    description:
      "For another academic project, I was tasked with creating a dynamic website to promote camping productsusing vanilla CSS, JavaScript, and PHP. From this experience, I learned how to set up an HTTP server, connect back-end programs to a database system, and handle form submissions. I also learned about the concept of server-side rendering and how it can help reduce CPU load on the client side.",
    tech: ["HTML", "CSS", "Javascript", "PHP", "MYSQL"],
    github: "https://github.com/SufiaSimjee/Social-Media-Campaign-Website",
    projectImage: social,
  },
  {
    title: "Inventory Management System, Web-Based Information System",
    description:
      "I was tasked as a solo developer to create an information system for a small business as a school project. From this experience, I learned to design an IMS using Laravel framework which could handle high volumes of data through pagination technique. I also became familiar with technical concepts such as the MVC architecture, user access control, and data migration and seeding.",
    tech: ["Laravel", "MySQL", "Bootstrap"],
    github: "https://github.com/SufiaSimjee/ZawMinMobile",
    projectImage: ims,
   
  },
  {
    title: "University Idea Management System, Web Application",
    description:
      "I was assigned to a group project as a full-stack developer. From this experience, I learned how to design and implement REST APIs, set-up NoSQL databases, and create single-page applications that could be used simultaneously by multiple users. I also gained experience in deploying projects live on cloud platforms such as Vercel and Render",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/SufiaSimjee/University",
    projectVideo: university,
  },
  {
    title: "Trekking Application, Android Application",
    description:
      "For a school project, I was tasked with developing two Android apps using the Android framework (Kotlin) and React Native to store & display information about trekking programs. I learned many important aspects of creating CRUD applications for mobile, such as designing intuitive UI, managing local and remote data storage, handling user-input validation, and integrating google APIs for dynamic data retrieval",
    tech: ["Kotlin"],
    github: "https://github.com/SufiaSimjee/Trekking-Application",
    projectImage: mhike,
  },
];

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    adaptiveHeight: true,
  };

  return (
    <Box
      id="projects"
      sx={{
        minHeight: "80vh",
        px: { xs: 2, md: 6 },
        py: 6,
        backgroundColor: "#f9fafb",
      }}
    >
      <Typography variant="h4" fontWeight="bold" mb={5} align="center">
        My Projects
      </Typography>

      <Box sx={{ width: "80vw", maxWidth: 900, mx: "auto" }}>
        <Slider {...settings}>
          {projectsData.map(
            (
              {
                title,
                description,
                tech,
                github,
                projectImage,
                projectVideo,
                // period,
              },
              idx
            ) => (
              <Card
                key={idx}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  borderRadius: 3,
                  bgcolor: "white",
                  transition: "0.3s",
                  "&:hover": {
                    boxShadow:
                      "0 12px 24px rgba(0,0,0,0.15), 0 6px 12px rgba(0,0,0,0.1)",
                    transform: "translateY(-6px)",
                  },
                }}
              >
        
                {projectVideo ? (
                  <CardMedia
                    component="video"
                    src={projectVideo}
                    controls
                    sx={{
                      width: "100%",
                      height: 250,
                      objectFit: "cover",
                      borderTopLeftRadius: 12,
                      borderTopRightRadius: 12,
                    }}
                  />
                ) : (
                  projectImage && (
                    <CardMedia
                      component="img"
                      image={projectImage}
                      alt={title}
                      sx={{
                        width: "100%",
                        mb: 1,
                        borderTopLeftRadius: 12,
                        borderTopRightRadius: 12,

                        // 🎯 Fix ONLY mhike
                        height:
                          title === "Trekking Application" ? 160 : 250,
                        objectFit:
                          title === "Trekking Application"
                            ? "contain"
                            : "cover",
                        bgcolor:
                          title === "Trekking Application"
                            ? "#f5f5f5"
                            : "transparent",
                      }}
                    />
                  )
                )}

                <CardContent>
                  <Typography variant="h6" fontWeight="600"  sx={{mb: 2 }}>
                    {title}
                  </Typography>

                  <Stack direction="row" spacing={1} flexWrap="wrap" mb={1}>
                    {tech.map((t, i) => (
                      <Chip key={i} label={t} size="small"  color="secondary" />
                    ))}
                  </Stack>

                  <Typography variant="body2" color="text.secondary">
                    {description}
                  </Typography>
                </CardContent>

                {github && (
                  <CardActions sx={{ px: 2, pb: 2 }}>
                    <Button
                      size="small"
                      href={github}
                      target="_blank"
                      variant="contained"
                      startIcon={<GitHubIcon />}
                      sx={{ textTransform: "none" }}
                    >
                      GitHub
                    </Button>
                  </CardActions>
                )}
              </Card>
            )
          )}
        </Slider>
      </Box>
    </Box>
  );
};

export default Projects;