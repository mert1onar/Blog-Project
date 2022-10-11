import { Typography } from "@mui/material";

const WelcomePage = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(201,56,110,1) 45%, rgba(0,212,255,1) 100%)",

        height: "100vh",
        paddingTop: "30vh",
      }}
    >
      <Typography
        display="flex"
        flexDirection={"column"}
        alignItems="center"
        justifyContent={"center"}
        variant="h2"
        color={"white"}
      >
        Welcome To BlogsApp
      </Typography>
    </div>
  );
};
export default WelcomePage;
