import React from "react";
import { Scatter } from "react-chartjs-2";
import { Chart as ChartJS, LinearScale, PointElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Box } from "@mui/material";

// Register the required components from Chart.js
ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

const ScatterChart = () => {
  const quad1 = {
    type: 'box',
    backgroundColor: 'rgba(0,245,1,0.2)',
    xMin: 100,
    xMax: 2000,
    yMin: 1,
    yMax: 1000,
    order: 0,
    label: {
      content: "3",
      position: {
        x: '0',
        y: '0'
      }
    }
  };
  const quad2 = {
    type: 'box',
    backgroundColor: 'rgba(245,245,1,0.2)',
    xMin: 0,
    xMax: 100,
    yMin: 1,
    yMax: 1000,
    label: {
      content: "3",
      position: {
        x: '0',
        y: '0'
      }
    }
  };
  const quad3 = {
    type: 'box',
    backgroundColor: 'rgba(245,0,1,0.2)',
    xMin: 0,
    xMax: 100,
    yMin: 0,
    yMax: 1,
    label: {
      content: "3",
      position: {
        x: '0',
        y: '0'
      }
    }
  };
  const quad4 = {
    type: 'box',
    backgroundColor: 'rgba(245,245,1,0.2)',
    xMin: 100,
    xMax: 2000,
    yMin: 0,
    yMax: 1,
    label: {
      content: "3",
      position: {
        x: '0',
        y: '0'
      }
    }
  };
  const uniqLocos =  [
  'Electroadhesive',
  'Pneumatic',
  'Claws/Spines',
  'Magnetic',
  'Friction',
  'Adhesives',
  'Grippers',
  'Friction, Pneumatic',
  'Friction, Sliding Frame'
];
  const hexColours =  [
  'rgba(255,0,0,1.0)',
  'rgba(255,170,0,1.0)',
  'rgba(170,255,0,1.0)',
  'rgba(0,255,0,1.0)',
  'rgba(0,255,170,1.0)',
  'rgba(0,170,255,1.0)',
  'rgba(0,0,255,1.0)',
  'rgba(170,0,255,1.0)',
  'rgba(255,0,170,1.0)'
];

  const data = {
    datasets: [
      {
        label: "Planar Robots",
        data: [
  { x: '88.46', y: '0.01', customLabel: '' },
  { x: '100', y: '0', customLabel: '' },
  { x: '90', y: '0', customLabel: '' },
  { x: '1.4', y: '0', customLabel: '' },
  { x: '2', y: '2', customLabel: '' },
  { x: '20', y: '0', customLabel: '' },
  { x: '46', y: '0', customLabel: '' },
  { x: '7.45', y: '0.2', customLabel: '' },
  { x: '250', y: '0.6', customLabel: '' },
  { x: '40', y: '0', customLabel: '' },
  { x: '340', y: '0', customLabel: '' },
  { x: '60', y: '75', customLabel: '' },
  { x: '250', y: '0', customLabel: '' },
  { x: '30', y: '0', customLabel: '' },
  { x: '167', y: '9', customLabel: '' },
  { x: '0', y: '7', customLabel: '' },
  { x: '0', y: '1.6', customLabel: '' },
  { x: '150', y: '4', customLabel: '' },
  { x: '0', y: '10.5', customLabel: '' },
  { x: '77', y: '0.0057', customLabel: '' },
  { x: '30', y: '0', customLabel: '' }
],
        pointStyle: 'rect',
        backgroundColor: [
  'rgba(255,0,0,1.0)',   'rgba(255,170,0,1.0)',
  'rgba(170,255,0,1.0)', 'rgba(255,0,0,1.0)',
  'rgba(170,255,0,1.0)', 'rgba(255,0,0,1.0)',
  'rgba(170,255,0,1.0)', 'rgba(170,255,0,1.0)',
  'rgba(255,170,0,1.0)', 'rgba(0,255,0,1.0)',
  'rgba(255,170,0,1.0)', 'rgba(0,255,0,1.0)',
  'rgba(255,170,0,1.0)', 'rgba(0,255,170,1.0)',
  'rgba(0,255,0,1.0)',   'rgba(0,255,0,1.0)',
  'rgba(0,255,0,1.0)',   'rgba(0,255,0,1.0)',
  'rgba(255,170,0,1.0)', 'rgba(0,170,255,1.0)',
  'rgba(255,0,0,1.0)'
],
        radius: 16, // Increase the marker size for this dataset
      },
      {
        label: "Non-Planar Robots",
        data: [
  { x: '37', y: '10', customLabel: '' },
  { x: '25', y: '1.5', customLabel: '' },
  { x: '0', y: '1', customLabel: '' },
  { x: '48', y: '0', customLabel: '' },
  { x: '1', y: '0', customLabel: '' },
  { x: '115', y: '0', customLabel: '' },
  { x: '1090', y: '0.5', customLabel: '' },
  { x: '55.6', y: '0', customLabel: '' },
  { x: '83', y: '0', customLabel: '' },
  { x: '2.1', y: '0', customLabel: '' },
  { x: '8.3', y: '0.5', customLabel: '' },
  { x: '1000', y: '0', customLabel: '' },
  { x: '100', y: '0.155', customLabel: '' },
  { x: '167', y: '2', customLabel: '' },
  { x: '83', y: '5.5', customLabel: '' },
  { x: '110', y: '0.370', customLabel: '' },
  { x: '500', y: '3', customLabel: '' },
  { x: '180', y: '10', customLabel: '' }
],
        backgroundColor: [
  'rgba(0,0,255,1.0)',   'rgba(0,255,0,1.0)',
  'rgba(0,0,255,1.0)',   'rgba(0,0,255,1.0)',
  'rgba(0,0,255,1.0)',   'rgba(0,255,0,1.0)',
  'rgba(0,255,170,1.0)', 'rgba(170,255,0,1.0)',
  'rgba(0,255,0,1.0)',   'rgba(0,255,170,1.0)',
  'rgba(170,0,255,1.0)', 'rgba(0,255,170,1.0)',
  'rgba(0,255,0,1.0)',   'rgba(255,0,170,1.0)',
  'rgba(0,255,0,1.0)',   'rgba(0,255,0,1.0)',
  'rgba(0,0,255,1.0)',   'rgba(0,0,255,1.0)'
],
        pointStyle: 'triangle',
        radius: 10, // Increase the marker size for this dataset
      },
      {
        label: "Other Robots",
        data: [ { x: '200', y: '0', customLabel: '' } ],
        backgroundColor: [ 'rgba(93,255,0,1.0)' ],
        pointStyle: 'circle',
        radius: 10, // Increase the marker size for this dataset
      }

    ]
  };

  const options = {
    scales: {
      x: {
        type: "logarithmic",
        position: "bottom",
        bounds: 'data',
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
        type: "logarithmic",
        max: 1000,
        bounds: 'data',
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
        display: true,
        position: 'right',
        title: {
          display: true,
          color: 'black',
          text: "Adhesion Methods"
        },
        labels: {
        usePointStyle: true,
          generateLabels: function(chart) {
            let labels = [];
            labels.push({
              text: "Planar",
              fillStyle: 'rgba(128,128,128,1)',
              pointStyle: 'rect',
            },{
              text: "Non-Planar",
              fillStyle: 'rgba(128,128,128,1)',
              pointStyle: 'triangle',
            },{
              text: "Planar and Non-Planar",
              fillStyle: 'rgba(128,128,128,1)',
              pointStyle: 'circle',
            })
            uniqLocos.forEach((adhe, index) => {
              labels.push({
                text: adhe,
                fillStyle: hexColours[index],
                pointStyle: 'rectRounded',
              });
            });
            
            return labels;
          },
        }
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
        text: 'Payload Vs. Climbing Speed of all Climbing Robots',
        font: {
          size: 22,
        },
      },
      annotation: {
        common: {
          drawTime: 'beforeDraw'
        },
        annotations: {
          quad1,
          quad2,
          quad3,
          quad4,
          line1: {
            type: 'line',
            yScaleID: 'y',
            yMin: 1,
            yMax: 1,
            xMin: 0,
            borderColor: 'rgb(255,0,0)',
            borderWidth: 2,
            // label: '1 Kg requirement'
          },
          label1: {
            type: 'label',
            xValue: 0.2,
            yValue: 1.3,
            yScaleID: 'y',
            backgroundColor: 'rgba(245,245,245)',
            content: ['1 Kg requirement'],
            color: 'red',
            font: {
              size: 18,
            }
          },
          line2: {
            type: 'line',
            xScaleID: 'x',
            xMin: 100,
            xMax: 100,
            yMin: 0,
            borderColor: 'rgb(255,0,0)',
            borderWidth: 2,
            // label: '1 Kg requirement'
          },
          label2: {
            type: 'label',
            xValue: 0.2,
            yValue: 1.3,
            yScaleID: 'y',
            backgroundColor: 'rgba(245,245,245)',
            content: ['1 Kg requirement'],
            color: 'red',
            font: {
              size: 18,
            }
          }
        }
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
    <Box width="90%" height="90%">
    <Scatter data={data} options={options} />
    </Box>
  );
};

export default ScatterChart;

