import React from 'react';
import GroupedBarChart from '../../components/GroupedBarChart';
import { Box } from "@mui/material";
import Header from "../../components/Header";
import { chartData as Sdata } from "../../data/chart_barChart"
import { chartDataP as Pdata } from "../../data/chart_barChartP"

const GroupedBar = () => {
  const speedData = Sdata;
  const payloadData = Pdata;
  return (
    <Box m="10px">
      <Header title="Bar Chart" />
      <Box height="55vh">
        <GroupedBarChart data={speedData} />
      </Box>
    </Box>
  );
};

export default GroupedBar;
