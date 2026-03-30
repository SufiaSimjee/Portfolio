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
    title: "Home Appliance Management System",
    description:
      "For an academic project, I developed a simple CRUD application using WinForms (C#) and Microsoft SQL Server...",
    tech: [".Net (C#)", "MYSQL", "Winforms"],
    github: "https://github.com/SufiaSimjee/HomeApplianceManagementSystem",
    projectImage: home,
    period: "Jan 2023 – May 2023",
  },
  {
    title: "Campaign Website",
    description:
      "Dynamic website using CSS, JavaScript, and PHP with database integration and server-side rendering.",
    tech: ["HTML", "CSS", "Javascript", "PHP", "MYSQL"],
    github: "https://github.com/SufiaSimjee/Social-Media-Campaign-Website",
    projectImage: social,
    period: "Jan 2024 - May 2024",
  },
  {
    title: "Inventory Management System",
    description:
      "Database system with automation for membership and payments using forms and reporting tools.",
    tech: ["Laravel", "MySQL", "Bootstrap"],
    github: "https://github.com/SufiaSimjee/ZawMinMobile",
    projectImage: ims,
    period: "Jan 2025 – May 2025",
  },
  {
    title: "University Idea Management System",
    description:
      "Full-stack system with idea submission, voting, commenting, and role-based access.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/SufiaSimjee/University",
    projectVideo: university,
    period: "Jan 2025 – May 2025",
  },
  {
    title: "Trekking Application",
    description:
      "Android apps using Kotlin with CRUD operations, API integration, and user input validation.",
    tech: ["Kotlin"],
    github: "https://github.com/SufiaSimjee/Trekking-Application",
    projectImage: mhike,
    period: "Jan 2025 – May 2025",
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
                period,
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
                  <Typography variant="h6" fontWeight="600">
                    {title}
                  </Typography>

                  <Typography variant="subtitle2" color="text.secondary" mb={1}>
                    {period}
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