import { Box } from "@mui/material";
// import React from "react";
import Header from "../../components/Header";
import SankeyChartP from "../../components/SankeyChartP";

const SankeyP = () => {
  return (
    <Box m="10px">
      <Header title="Planar" />
      <Box height="85vh">
        <SankeyChartP />
      </Box>
    </Box >
  );
};

export default SankeyP;
