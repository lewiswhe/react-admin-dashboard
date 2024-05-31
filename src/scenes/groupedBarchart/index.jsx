import React from 'react';
import GroupedBarChart from '../../components/GroupedBarChart';
import { Box } from "@mui/material";
import Header from "../../components/Header";

const GroupedBar = () => {
  const chartData = {
    labels: ['Tracked'], // Locomotion types
    datasets: [
      {
        label: 'Magnetic (Robot 1)', // Adhesion method + robot identifier
        data: [60], // Speed value for Robot 1
        backgroundColor: 'rgb(0, 255, 140)',
        borderColor: 'rgb(0, 255, 140)',
        borderWidth: 1
      },
      {
        label: 'Magnetic (Robot 2)', // Adhesion method + robot identifier
        data: [70], // Speed value for Robot 2
        backgroundColor: 'rgb(0, 255, 140)',
        borderColor: 'rgb(0, 255, 140)',
        borderWidth: 1
      }
    ]
  };

  return (
    <Box m="100px">
      <Header title="Bar Chart"/>
      <Box height="55vh">
        <GroupedBarChart data={chartData} />
      </Box>
    </Box>
  );
};

export default GroupedBar;
