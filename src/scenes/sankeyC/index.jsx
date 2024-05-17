import { Box } from "@mui/material";
// import React from "react";
import Header from "../../components/Header";
import SankeyChartC from "../../components/SankeyChartC";

const SankeyC = () => {
  return (
    <Box m="20px">
      <Header title="Sankey Chart" subtitle="Contacts" />
      <Box height="75vh">
        <SankeyChartC />
      </Box>
    </Box>
  );
};

export default SankeyC;
