import React from 'react';
import GroupedBarChartP from '../../components/GroupedBarChartP';
import { Box, Grid, Typography } from "@mui/material";
import Header from "../../components/Header";
import { chartData as Pdata } from "../../data/chart_barChart_p";
// import { chartDataP as Pdata } from "../../data/chart_barChartP";

const GroupedBarP = () => {
  const payloadData = Pdata;
  // const payloadData = Pdata;
  return (
    <Box m="10px" display="flex" flexDirection="column" minHeight="100vh">
      <Header title="Payload Chart" />
      <Box flex="1" height="55vh">
        <GroupedBarChartP data={payloadData} />
      </Box>
      <Box mt={1} height="10vh">
        <Grid container spacing={2} justifyContent="space-around" alignItems="center">
          <Grid item sx={{ transform: "translateX(10px)"}}>
            <Typography variant="h3" sx={{ fontWeight: 'bold' }}>Humanoid </Typography>
          </Grid>
          <Grid item sx={{ transform: "translateX(20px)"}}>
            <Typography variant="h3" sx={{ fontWeight: 'bold' }}>Legged </Typography>
          </Grid>
          <Grid item sx={{ transform: "translateX(300px)"}}>
            <Typography variant="h3" sx={{ fontWeight: 'bold' }}>Tracked </Typography>
          </Grid>
          <Grid item sx={{ transform: "translateX(260px)"}}>
            <Typography variant="h3" sx={{ fontWeight: 'bold' }}>Wheeled,Legged </Typography>
          </Grid>
          <Grid item sx={{ transform: "translateX(180px)"}}>
            <Typography variant="h3" sx={{ fontWeight: 'bold' }}>Wheeled </Typography>
          </Grid>
          <Grid item sx={{ transform: "translateX(110px) translateY(30px)"}}>
            <Typography variant="h3" sx={{ fontWeight: 'bold' }}>Wheeled, Inchworm </Typography>
          </Grid>
          <Grid item sx={{ transform: "translateX(-80px)"}}>
            <Typography variant="h3" sx={{ fontWeight: 'bold' }}>Wheel-Legs </Typography>
          </Grid>

        </Grid>
      </Box>
    </Box>
  );
};

export default GroupedBarP;

