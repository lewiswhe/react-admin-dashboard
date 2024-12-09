import React from 'react';
import GroupedBarChartC from '../../components/GroupedBarChartC';
import { Box, Grid, Typography } from "@mui/material";
import Header from "../../components/Header";
import { chartData as Sdata } from "../../data/chart_barChart_c"
// import { chartDataP as Pdata } from "../../data/chart_barChartP"

const GroupedBarC = () => {
  const speedData = Sdata;
  // const payloadData = Pdata;
  return (
    <Box m="10px" display="flex" flexDirection="column" minHeight="100vh">
      <Header title="Bar Chart" />
      <Box flex="1" height="55vh">
        <GroupedBarChartC data={speedData} />
      </Box>
      <Box mt={1} height="10vh">
        <Grid container spacing={2} justifyContent="space-around" alignItems="center">
          <Grid item sx={{ transform: "translateX(300px)"}}>
            <Typography variant="h3" sx={{ fontWeight: 'bold' }}>Inchworm</Typography>
          </Grid>
          <Grid item sx={{ transform: "translateX(300px) translateY(30px)"}}>
            <Typography variant="h3" sx={{ fontWeight: 'bold' }}>Jet Propulsion</Typography>
          </Grid>
          <Grid item sx={{ transform: "translateX(80px)"}}>
            <Typography variant="h3" sx={{ fontWeight: 'bold' }}>Legged</Typography>
          </Grid>
          <Grid item sx={{ transform: "translateX(-40px)"}}>
            <Typography variant="h3" sx={{ fontWeight: 'bold' }}>Tracked</Typography>
          </Grid>
          <Grid item sx={{ transform: "translateX(-100px)"}}>
            <Typography variant="h3" sx={{ fontWeight: 'bold' }}>Soft</Typography>
          </Grid>
          <Grid item sx={{ transform: "translateX(10px)"}}>
            <Typography variant="h3" sx={{ fontWeight: 'bold' }}>Wheeled</Typography>
          </Grid>
          <Grid item sx={{ transform: "translateX(50px)"}}>
            <Typography variant="h3" sx={{ fontWeight: 'bold' }}>Wheel,Inchworm</Typography>
          </Grid>

        </Grid>
      </Box>
    </Box>

  );
};

export default GroupedBarC;
