import { useTheme } from "@mui/material";
import { ResponsiveCalendar } from "@nivo/calendar";
import { tokens } from "../theme";
import { mockCalendarData as data } from "../data/calendarData";

const CalendarChart2 = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <ResponsiveCalendar
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
    from="2023-09-01"
    to="2027-09-30"
    emptyColor={colors.grey[600]}
    colors={[ colors.blueAccent[500], colors.greenAccent[500], colors.redAccent[500] ]}
    margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
    yearSpacing={40}
    monthBorderColor={colors.grey[400]}
    monthSpacing={10}
    dayBorderWidth={2}
    dayBorderColor={colors.grey[300]}
        legends={[
      {
        anchor: 'bottom-right',
        direction: 'row',
        translateY: 36,
        itemCount: 4,
        itemWidth: 42,
        itemHeight: 36,
        itemsSpacing: 14,
        itemDirection: 'right-to-left'
      }
    ]}
    />);

};

export default CalendarChart2;
