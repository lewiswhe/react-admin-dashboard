import { Box } from "@mui/material";
// import React from "react";
import Header from "../../components/Header";
import SankeyChart from "../../components/SankeyChart";

const Sankey = () => {
  return (
    <Box m="20px">
      <Header title="Sankey Chart" subtitle="Simple Sankey Chart" />
      <Box height="75vh">
        <SankeyChart />
      </Box>
    </Box>
  );
};

// const Sankey = () => {
//   return (
//     <Box m="20px">
//       <Header title="Sankey Chart" subtitle="Simple Sankey Chart" />
//       <Box display="flex" flexDirection="column" alignItems="center">
//         {/* Add the SankeyChart component */}
//         <Box width="50%">
//           <SankeyChart />
//         </Box>
//       </Box>
//     </Box>
//   );
// };

export default Sankey;
