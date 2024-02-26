import { Box } from "@mui/material";
// import React from "react";
import Header from "../../components/Header";
import CalendarChart2 from "../../components/CalendarChart2";

const Calendar2 = () => {
  return (
    <Box m="20px">
      <Header title="Calendar2 Chart" subtitle="Simple Calendar2 Chart" />
      <Box height="75vh">
        <CalendarChart2 />
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

export default Calendar2;
