import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import { TotalData as data } from "../data/total_data";

const TotalBox = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dat = data.total;

  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            Total
          </Typography>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
          Robots
        </Typography>
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: colors.greenAccent[600] }}
        >
          {dat}
        </Typography>
      </Box>
    </Box>
  );
};

export default TotalBox;
