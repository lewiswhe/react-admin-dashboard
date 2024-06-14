import React from "react";
import { Scatter } from "react-chartjs-2";
import { Chart as ChartJS, LinearScale, PointElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Box } from "@mui/material";

// Register the required components from Chart.js
ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

const ScatterChart = () => {

  const data = {
    datasets: [
      {
        label: "Scatter Dataset 1",
        data: [
          { x: '100', y: '0' ,customLabel: ''},
          { x: '90', y: '0' ,customLabel: ''},
          { x: '1.4', y: '0' ,customLabel: ''},
          { x: '2', y: '2' ,customLabel: ''},
          { x: '20', y: '0' ,customLabel: ''},
          { x: '46', y: '0' ,customLabel: ''},
          { x: '7.45', y: '0.2' ,customLabel: ''},
          { x: '250', y: '0.6' ,customLabel: ''},
          { x: '40', y: '0' ,customLabel: ''},
          { x: '340', y: '0' ,customLabel: ''},
          { x: '200', y: '0' ,customLabel: ''},
          { x: '60', y: '75' ,customLabel: ''},
          { x: '250', y: '0' ,customLabel: ''},
          { x: '30', y: '0' ,customLabel: ''},
          { x: '167', y: '9' ,customLabel: ''},
          { x: '0', y: '7' ,customLabel: ''},
          { x: '0', y: '1.6' ,customLabel: ''},
          { x: '150', y: '4' ,customLabel: ''},
          { x: '0', y: '10.5' ,customLabel: ''},
          { x: '77', y: '0.0057' ,customLabel: ''},
          { x: '30', y: '0' ,customLabel: ''},
        ],
        backgroundColor: "rgba(75, 192, 192, 1)",
        radius: 10, // Increase the marker size for this dataset
      },
      {
        label: "Scatter Dataset 2",
        data: [
          { x: '37', y: '10' ,customLabel: ''},
          { x: '25', y: '1.5' ,customLabel: ''},
          { x: '0', y: '1' ,customLabel: ''},
          { x: '48', y: '0' ,customLabel: ''},
          { x: '1', y: '0' ,customLabel: ''},
          { x: '115', y: '0' ,customLabel: ''},
          { x: '1090', y: '0.5' ,customLabel: ''},
          { x: '55.6', y: '0' ,customLabel: ''},
          { x: '83', y: '0' ,customLabel: ''},
          { x: '200', y: '0' ,customLabel: ''},
          { x: '2.1', y: '0' ,customLabel: ''},
          { x: '8.3', y: '0.5' ,customLabel: ''},
          { x: '1000', y: '0' ,customLabel: ''},
          { x: '100', y: '0.155' ,customLabel: ''},
          { x: '167', y: '2' ,customLabel: ''},
          { x: '83', y: '5.5' ,customLabel: ''},
          { x: '110', y: '0.370' ,customLabel: ''},
          { x: '500', y: '3' ,customLabel: ''},
          { x: '180', y: '10' ,customLabel: ''},        ],
        backgroundColor: "rgba(255, 0, 0, 1)",
        radius: 10, // Increase the marker size for this dataset
      }
    ]
  };

  const options = {
    scales: {
      x: {
        type: "linear",
        position: "bottom",
        title: {
          display: true,
          text: "Climbing Speed (mm/s)",
          font: {
            size: 22,
          },
        },
        ticks: {
          font: {
            size: 22,
          },
        },
      },
      y: {
        type: "linear",
        title: {
          display: true,
          text: "Payload (kg)",
          font: {
            size: 22,
          },
        },
        ticks: {
          font: {
            size: 22,
          },
        },
      },
    },
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 22,
          },
        },
      },
      tooltip: {
        bodyFont: {
          size: 22,
        },
        callbacks: {
          label: () => '', // Remove x and y labels from the tooltip
        },
      },
      title: {
        display: true,
        text: 'Scatter Chart',
        font: {
          size: 22,
        },
      },
      datalabels: {
        display: true,
        align: 'end',
        anchor: 'end',
        font: {
          size: 22,
        },
        formatter: (value) => value.customLabel, // Use customLabel for data labels
      },
    },


  };

  // Set the default font size
  ChartJS.defaults.font.size = 22;

  return (
    <Box width="100%" height="100%">
    <Scatter data={data} options={options} />
    </Box>
  );
};

export default ScatterChart;

