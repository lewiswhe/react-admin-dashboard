import { Box } from "@mui/material";
// import React from "react";
import Header from "../../components/Header";
import SankeyChartL from "../../components/SankeyChartL";

const SankeyL = () => {
  return (
    <Box m="20px">
      <Header title="Sankey Chart" subtitle="Locomotion First" />
      <Box height="75vh">
        <SankeyChartL />
      </Box>
    </Box>
  );
};

export default SankeyL;
