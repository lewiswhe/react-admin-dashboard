import { Box } from "@mui/material";
// import React from "react";
import Header from "../../components/Header";
import SankeyChartAM from "../../components/SankeyChartAM";

const SankeyAM = () => {
  return (
    <Box m="10px">
      <Header title="All" />
      <Box height="85vh">
        <SankeyChartAM />
      </Box>
    </Box>
  );
};

export default SankeyAM;
