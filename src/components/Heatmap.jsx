import { ResponsiveHeatMap } from '@nivo/heatmap'
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import { HeatmapData as data } from "../data/heatmapData";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveHeatMap = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <ResponsiveHeatMap
      data={data}
      margin={{ top: 160, right: 90, bottom: 190, left: 190 }}
      forceSquare={true}
      theme={{
        text: {
          fill: colors.grey[100],
          fontSize: 18,
        },
        tooltip: {
          container: {
            color: colors.primary[500],
          },
        },
      }}
      axisTop={null}
      axisTop={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: -45,
        legend: 'Locomotion',
        legendPosition: 'middle',
        legendOffset: -150,
        truncateTickAt: 0
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Adhesion',
        legendPosition: 'middle',
        legendOffset: -160,
        truncateTickAt: 0,
      }}
      colors={{
        type: 'diverging',
        scheme: 'greens',
        divergeAt: 0.5,
        minValue: 0,
        maxValue: 11
      }}
      emptyColor="#ffb3b3"
      // legends={
      //   [
      //     {
      //       anchor: 'top',
      //       translateX: 0,
      //       translateY: -50,
      //       length: 400,
      //       thickness: 18,
      //       direction: 'row',
      //       tickPosition: 'after',
      //       tickSize: 1,
      //       tickSpacing: 4,
      //       tickOverlap: false,
      //       title: 'Amount',
      //       titleAlign: 'start',
      //       titleOffset: 4
      //     }
      //   ]}
    />
  )
}


export default MyResponsiveHeatMap;
