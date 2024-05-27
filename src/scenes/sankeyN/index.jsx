import { Box } from "@mui/material";
// import React from "react";
import Header from "../../components/Header";
import SankeyChartN from "../../components/SankeyChartN";

const SankeyN = () => {
  return (
    <Box m="10px">
      <Header title="Non-Planar" />
      <Box height="85vh">
        <SankeyChartN />
      </Box>
    </Box>
  );
};

export default SankeyN;
