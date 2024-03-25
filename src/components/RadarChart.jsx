import { useTheme } from "@mui/material";
import { ResponsiveRadar } from "@nivo/radar";
import { tokens } from "../theme";
import { mockRadarData as data } from "../data/radarData";
// import React, { useState } from "react";

const RadarChart = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  //   const [selectedKeys, setSelectedKeys] = useState([
  //     "Dry_Bones",
  //     "Baby_Daisy",
  //     "Dry_Bowser",
  //     "Baby_Luigi"
  //   ]);

  return (
    // <div>
    //   {/* Selection UI */}
    //   <div>
    //     <label>Select Keys:</label>
    //     <select
    //       multiple
    //       value={selectedKeys}
    //       onChange={(e) => setSelectedKeys(Array.from(e.target.selectedOptions, (option) => option.value))}
    //     >
    //       {Object.keys(data[0]).map((key) => (
    //         <option key={key} value={key}>
    //           {key}
    //         </option>
    //       ))}
    //     </select>
    //   </div>
    <ResponsiveRadar
      data={data}
      theme={{
        text: {
          fill: colors.grey[100],
        },
        tooltip: {
          container: {
            color: colors.primary[500],
          },
        },
      }}
      keys={["Dry_Bones", "Baby_Daisy", "Dry_Bowser", "Baby_Luigi"]}
      // keys={selectedKeys}
      indexBy="Value"
      valueFormat=" >-.2f"
      margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
      borderColor={{ from: "color" }}
      gridLabelOffset={36}
      dotSize={10}
      dotColor={{ theme: "background" }}
      dotBorderWidth={2}
      //   gridLevels={10}
      colors={{ scheme: "nivo" }}
      blendMode="multiply"
      motionConfig="wobbly"
      legends={[
        {
          anchor: "top-left",
          direction: "column",
          translateX: -50,
          translateY: -40,
          itemWidth: 80,
          itemHeight: 20,
          itemTextColor: colors.grey[300],
          symbolSize: 12,
          symbolShape: "circle",

          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: colors.grey[100],
              },
            },
          ],
        },
      ]}
    />
    // </div>
  );
};

export default RadarChart;
