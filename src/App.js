import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
// import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import Radar from "./scenes/radar";
import Calendar2 from "./scenes/calendar2";
import Calendar from "./scenes/calendar/calendar";
import SankeyN from "./scenes/sankeyN";
import SankeyP from "./scenes/sankeyP";
import SankeyC from "./scenes/sankeyA";
import Heatm from "./scenes/heatmap";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import GroupedBar from "./scenes/groupedBarchart";
import GroupedBarP from "./scenes/groupedBarchartP";
import PlotlyBar from "./scenes/plotlybar";
import Scatter from "./scenes/scatter";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<GroupedBar />} />
              <Route path="/barp" element={<GroupedBarP />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/sankey" element={<SankeyN />} />
              <Route path="/radar" element={<Radar />} />
              <Route path="/calendar2" element={<Calendar2 />} />
              <Route path="/sankey2" element={<SankeyP />} />
              <Route path="/sankeyc" element={<SankeyC />} />
              <Route path="/heatmap" element={<Heatm />} />
              <Route path="/groupedbar" element={<GroupedBar />} />
              <Route path="/plotlybar" element={<PlotlyBar />} />
              <Route path="/scatter" element={<Scatter />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
