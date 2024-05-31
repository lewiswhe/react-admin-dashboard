import React from 'react';
import Plot from 'react-plotly.js';

const PlotlyGroupedBarChart = ({ data }) => {
  return (
    <Plot
      data={data}
      layout={{
        title: 'Plotly Grouped Bar Chart Example',
        barmode: 'group',
        xaxis: { title: 'Plotly Locomotion Type' },
        yaxis: { title: 'Plotly Speed' }
      }}
    />
  );
};

export default PlotlyGroupedBarChart;