import { useTheme } from "@mui/material";
import { ResponsiveSankey } from "@nivo/sankey";
import { tokens } from "../theme";
import { SankeyData as data } from "../data/nivoSankeyM_Planar"


const SankeyChartPM = ({ isCustomLineColors = false, isDashboard = true }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    // render: () => <Sankey {...commonProperties} data={dataWithRandLinkColors(sankeyData)} enableLinkGradient={true} colors={node => node.nodeColor} />
    const legends = !isDashboard ? [
        {
            anchor: 'bottom-right',
            direction: 'column',
            translateX: 130,
            itemWidth: 100,
            itemHeight: 14,
            itemDirection: 'left-to-right',
            itemsSpacing: 2,
            itemTextColor: colors.grey[400],
            symbolSize: 14,
            effects: [
                {
                    on: "hover",
                    style: {
                        itemTextColor: colors.grey[100],
                    },
                },
            ],
        }
    ] : [];
    return (
        <ResponsiveSankey
            // dataWithRandLinkColors={data}
            data={data}
            theme={{
                text: {
                    fill: colors.primary[100],
                    fontSize: '26px',
                    // fontWeight: 'bold'
                },
                tooltip: {
                    container: {
                        color: colors.primary[500],
                    },
                },
            }}
            margin={{ top: 10, right: 700, bottom: 20, left: 160 }}
            align="start"
            sort="input"
            // colors={{ scheme: 'nivo' }}
            colors={node => node.nodeColor}
            nodeOpacity={1}
            nodeHoverOthersOpacity={0.35}
            nodeThickness={18}
            nodeSpacing={20}
            nodeBorderWidth={1}
            nodeBorderColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        0.5
                    ]
                ]
            }}
            nodeBorderRadius={3}
            enableLinkGradient={true}
            linkOpacity={0.4}
            linkHoverOthersOpacity={0.1}
            linkContract={1}
            linkBlendMode="lighten"
            labelPosition="outside"
            labelOrientation="horizontal"
            labelPadding={16}
            labelTextColor={colors.primary[100]}
            motionConfig="wobbly"
            legends={legends}
        />
    );
};

export default SankeyChartPM;
