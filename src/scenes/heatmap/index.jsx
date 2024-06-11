import { Box } from "@mui/material";
// import React from "react";
import Header from "../../components/Header";
import MyResponsiveHeatMap from "../../components/Heatmap";

const Heatm = () => {
  return (
    <Box m="10px">
      <Box height="100vh">
        <MyResponsiveHeatMap />
      </Box>
    </Box>
  );
};

export default Heatm;
