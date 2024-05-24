import { Box } from "@mui/material";
// import React from "react";
import Header from "../../components/Header";
import MyResponsiveHeatMap from "../../components/Heatmap";

const Heatm = () => {
  return (
    <Box m="20px">
      <Header title="Heatmap" subtitle="Heatmap of loco adhe" />
      <Box height="75vh">
        <MyResponsiveHeatMap />
      </Box>
    </Box>
  );
};

export default Heatm;
