import { Box, Typography, Button, Stack } from "@mui/material";
import Slider from "react-slick";
import DownloadIcon from "@mui/icons-material/Download";

import img2 from "../assets/profile2.jpeg";
import img3 from "../assets/profile3.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        pt: "80px",
        pb: 6,
        px: 3,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "center", md: "flex-start" },
        justifyContent: { xs: "flex-start", md: "center" },
        gap: 6,
        textAlign: { xs: "center", md: "left" },
        backgroundColor: "#fff",
        color: "#212121",
      }}
    >
      {/* Image Carousel */}
      <Box
        sx={{
          width: { xs: "70%", md: 400 },
          order: { xs: 1, md: 2 },
          mb: { xs: 4, md: 0 },
          borderRadius: 1,
          // boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
          "& .slick-slide > div": {
            outline: "none",
          },
          "& img": {
            borderRadius: 3,
            objectFit: "cover",
            width: "100%",
            height: 520,
            transition: "transform 0.25s ease",
          },
          "& img:hover": {
            transform: "scale(1.05)",
          },
        }}
      >
        <Slider {...settings}>
          {[ img2, img3].map((imgSrc, index) => (
            <Box
              key={index}
              component="img"
              src={imgSrc}
              alt={`Profile ${index + 1}`}
            />
          ))}
        </Slider>
      </Box>

      {/* Text Section */}
      <Box sx={{ maxWidth: 480, order: { xs: 2, md: 1 } }}>
        <Typography
          variant="h3"
          fontWeight={700}
          sx={{
            position: "relative",
            pb: 1,
            "&::after": {
              content: '""',
              position: "absolute",
              width: 60,
              height: 3,
              bgcolor: "primary.main",
              bottom: 0,
              left: 0,
              borderRadius: 2,
            },
          }}
        >
          Hi, I'm Sufia Yusoof Simjee
        </Typography>

        <Typography
          variant="h6"
          color="text.secondary"
          mt={2}
          mb={3}
          fontWeight={500}
        >
          {/* B.Sc. (Hons) Computing Student | Aspiring Full-Stack Developer */}
          Full-Stack Developer
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          mb={4}
          lineHeight={1.6}
        >
          Detail-oriented individual with a strong academic foundation in developing CRUD applications using modern front
          end frameworks and MERN stack. Proficient in UI/ UX development, building responsive client-side applications, and
          writing clear, comprehensive technical documentation. Skilled in creating user-focused applications while maintaining
          clean and efficient codebase. Dedicated to continuously learning new technologies and adapting to project
          requirements, with a strong focus on meeting deadlines in fast-paced work environments. Willing to assist and take on
          any role, including testing or other tasks, as required by the project
        </Typography>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent={{ xs: "center", md: "flex-start" }}
        >
          <Button
            variant="contained"
            color="primary"
            href="#projects"
            sx={{
              px: 4,
              py: 1.5,
              fontWeight: 600,
              textTransform: "none",
              borderRadius: 2,
              boxShadow: "none",
              "&:hover": {
                boxShadow: "0 4px 12px rgb(25 118 210 / 0.3)",
              },
            }}
          >
            View My Project
          </Button>

          {/* <Button
            variant="outlined"
            color="primary"
            href="#contact"
            sx={{
              px: 4,
              py: 1.5,
              fontWeight: 600,
              textTransform: "none",
              borderRadius: 2,
            }}
          >
            Contact Me
          </Button> */}
          <Button
            variant="outlined"
            color="secondary"
            href="/Sufia_Yusoof_Simjee_CV.pdf"
            download
            startIcon={<DownloadIcon />}
            sx={{
              whiteSpace: "nowrap",
              px: 4,
              py: 1.5,
              fontWeight: 600,
              textTransform: "none",
              borderRadius: 2,
              "&:hover": {
                boxShadow: "0 4px 12px rgb(25 118 210 / 0.3)",
              },
            }}
          >
            Download MY CV
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Hero;
