import { Box } from "@mui/material";
// import React from "react";
import Header from "../../components/Header";
import SankeyChartA from "../../components/SankeyChartA";

const SankeyA = () => {
  return (
    <Box m="10px">
      <Header title="All" />
      <Box height="85vh">
        <SankeyChartA />
      </Box>
    </Box>
  );
};

export default SankeyA;
