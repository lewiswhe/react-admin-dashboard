import React from 'react';
import GroupedBarChart from '../../components/GroupedBarChart';
import { Box } from "@mui/material";
import Header from "../../components/Header";
import { chartData as Cdata } from "../../data/chart_barChart"

const GroupedBar = () => {
  const chartData = Cdata;
  return (
    <Box m="10px">
      <Header title="Bar Chart" />
      <Box height="55vh">
        <GroupedBarChart data={chartData} />
      </Box>
    </Box>
  );
};

export default GroupedBar;
