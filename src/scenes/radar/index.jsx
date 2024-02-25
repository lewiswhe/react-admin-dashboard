import { Box } from "@mui/material";
// import React from "react";
import Header from "../../components/Header";
import RadarChart from "../../components/RadarChart";

const Radar = () => {
  return (
    <Box m="20px">
      <Header title="Radar Chart" subtitle="Simple Radar Chart" />
      <Box height="75vh">
        <RadarChart />
      </Box>
    </Box>
  );
};

// const Radar = () => {
//   return (
//     <Box m="20px">
//       <Header title="Radar Chart" subtitle="Simple Radar Chart" />
//       <Box display="flex" flexDirection="column" alignItems="center">
//         {/* Add the RadarChart component */}
//         <Box width="50%">
//           <RadarChart />
//         </Box>
//       </Box>
//     </Box>
//   );
// };

export default Radar;
