import { Box, Grid, Typography } from "@mui/material";
// import React from "react";
import Header from "../../components/Header";
import SankeyChartP from "../../components/SankeyChartP";

const SankeyP = () => {
  return (
    <Box m="10px">
      <Header title="Planar" />
    <Box height="100px">
        <Grid container spacing={2} justifyContent="space-around" alignItems="center" height="100%">
          <Grid item sx={{ transform: "translateX(-130px)" }}>
            <Typography variant="h1" sx={{fontWeight: "bold"}}>Robot</Typography>
          </Grid>
          <Grid item sx={{ transform: "translateX(-30px)" }}>
            <Typography variant="h1" sx={{fontWeight: "bold"}}>Locomotion </Typography>
          </Grid>
          <Grid item sx={{ transform: "translateX(0px)" }}>
            <Typography variant="h1" sx={{fontWeight: "bold"}}>Adhesion </Typography>
          </Grid>
          <Grid item sx={{ transform: "translateX(40px)" }}>
            <Typography variant="h1" sx={{fontWeight: "bold"}}>Surface </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h1"></Typography>
          </Grid>
        </Grid>
      </Box>

      <Box height="85vh">
        <SankeyChartP />
      </Box>
    </Box >
  );
};

export default SankeyP;
