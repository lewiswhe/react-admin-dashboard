import { Box } from "@mui/material";
import Header from "../../components/Header";
import ScatterChart from "../../components/ScatterChart";

const Scatter = () => {
  return (
    <Box m="20px">
      <Header title="Scatter Chart" subtitle="Simple Scatter Chart" />
      <Box height="85vh">
        <ScatterChart />
      </Box>
    </Box>
  );
};

export default Scatter;
