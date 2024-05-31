import React from 'react';
import PlotlyGroupedBarChart from '../../components/PlotlyBar';
import { Box } from "@mui/material";
import Header from "../../components/Header";

const PlotlyBar = () => {
    const data = [
        {
          x: ['Tracked'], // Locomotion type
          y: [60], // Speed value for Robot 1
          type: 'bar',
          name: 'Magnetic (Robot 1)',
          marker: { color: 'rgb(0, 255, 140)' }
        },
        {
          x: ['Tracked'], // Locomotion type
          y: [70], // Speed value for Robot 2
          type: 'bar',
          name: 'Magnetic (Robot 2)',
          marker: { color: 'rgb(255, 0, 0)' }
        }
      ];

  return (
<Box m="20px">
      <Header title="Bar Chart"/>
      <Box height="75vh">
      <PlotlyGroupedBarChart data={data} />
      </Box>
    </Box>
  );
};

export default PlotlyBar ;
