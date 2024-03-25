import { Box } from "@mui/material";
// import React from "react";
import Header from "../../components/Header";
import SankeyChartA from "../../components/SankeyChartA";

const SankeyA = () => {
  return (
    <Box m="20px">
      <Header title="Sankey Chart" subtitle="Adhesion First" />
      <Box height="75vh">
        <SankeyChartA />
      </Box>
    </Box>
  );
};

export default SankeyA;
