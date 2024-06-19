import React from "react";
import { Scatter } from "react-chartjs-2";
import { Chart as ChartJS, LinearScale, PointElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Box } from "@mui/material";

import { ScatterData } from "../data/nivoScatter_All";

// Register the required components from Chart.js
ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

const ScatterChart = () => {
  const pl = ScatterData.pl;
  const plc = ScatterData.plc;
  const plx = ScatterData.plx;
  const plxc = ScatterData.plxc;
  const ply = ScatterData.ply;
  const plyc = ScatterData.plyc;
  const npl = ScatterData.npl;
  const nplc = ScatterData.nplc;
  const nplx = ScatterData.nplx;
  const nplxc = ScatterData.nplxc;
  const nply = ScatterData.nply;
  const nplyc = ScatterData.nplyc;
  const o = ScatterData.o;
  const oc = ScatterData.oc;
  const ox = ScatterData.ox;
  const oxc = ScatterData.oxc;
  const oy = ScatterData.oy;
  const oyc = ScatterData.oyc;
  const uniqAdhes =  ScatterData.uniqAdhes;
  const hexColours = ScatterData.hexColours;
  const miny = 0.002;
  const minx = 0.1;
  const maxx1 = 1500;
  const maxy1 = 100;
  const quad1 = {
    type: 'box',
    backgroundColor: 'rgba(0,245,1,0.2)',
    xMin: 100,
    xMax: maxx1,
    yMin: 1,
    yMax: maxy1,
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
    xMin: 0.54,
    xMax: 100,
    yMin: 1,
    yMax: maxy1,
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
    xMin: 0.54,
    xMax: 100,
    yMin: 0.0011,
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
    xMax: maxx1,
    yMin: 0.0011,
    yMax: 1,
    label: {
      content: "3",
      position: {
        x: '0',
        y: '0'
      }
    }
  };
  const data = {
    datasets: [
      {
        label: "Planar Robots",
        pointStyle: 'rect',
        radius: 16, // Increase the marker size for this dataset
        data: pl,
        backgroundColor: plc
      },
      {
        label: "Planar Robots",
        pointStyle: 'rect',
        radius: 16, // Increase the marker size for this dataset
        xAxisID: 'x2',
        data: plx,
        backgroundColor: plxc
      },
      {
        label: "Planar Robots",
        pointStyle: 'rect',
        radius: 16, // Increase the marker size for this dataset
        yAxisID: 'y2',
        data: ply,
        backgroundColor: plyc
      },
      {
        label: "Non-Planar Robots",
        pointStyle: 'triangle',
        radius: 16, // Increase the marker size for this dataset
        data: npl,
        backgroundColor: nplc
      },

      {
        label: "Non-Planar Robots",
        pointStyle: 'triangle',
        radius: 16, // Increase the marker size for this dataset
        xAxisID: 'x2',
        data: nplx,
        backgroundColor: nplxc
      },
      {
        label: "Non-Planar Robots",
        pointStyle: 'triangle',
        radius: 16, // Increase the marker size for this dataset
        yAxisID: 'y2',
        data: nply,
        backgroundColor: nplyc
      },

      {
        label: "Other Robots",
        pointStyle: 'circle',
        radius: 16, // Increase the marker size for this dataset
        yAxisID: 'y2',
        data: oy,
        backgroundColor: oyc
      },
    ]
  };

  const options = {
    scales: {
      x: {
        type: "logarithmic",
        position: "bottom",
        bounds: 'data',
        min: 0.5,
        max: maxx1,
        title: {
          display: true,
          text: "Climbing Speed (mm/s)",
          font: {
            size: 26,
          },
        },
        ticks: {
          font: {
            size: 26,
          },
        },
      },
      x2: {
        type: "linear",
        position: "bottom",
        bounds: 'data',
        display: false,
        min: -maxx1/10000,
        max: maxx1/100,
        title: {
          display: false,
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
        max: maxy1,
        min: 0.001,
        bounds: 'data',
        title: {
          display: true,
          text: "Payload (kg)",
          font: {
            size: 26,
          },
        },
        ticks: {

          font: {
            size: 26,
          },
        },
      },
      y2: {
        type: "linear",
        display: false,
        max: maxy1/10,
        min: -maxy1/1000,
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
          text: "Key",
          font: {
            size: 26,
          },
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
            uniqAdhes.forEach((adhe, index) => {
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
          size: 32,
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
            xMin: 0.54,
            borderColor: 'rgb(255,0,0)',
            borderWidth: 2,
            // label: '1 Kg requirement'
          },
          label1kg: {
            type: 'label',
            xValue: 1.1,
            yValue: 1.5,
            yScaleID: 'y',
            backgroundColor: 'rgba(245,245,245)',
            content: ['1 kg requirement'],
            color: 'red',
            font: {
              size: 22,
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
          labelspeed: {
            type: 'label',
            xValue: 160,
            yValue: 0.05,
            yScaleID: 'y',
            backgroundColor: 'rgba(245,245,245)',
            content: ['100 mm/s requirement'],
            color: 'red',
            font: {
              size: 22,
            }
          },
          linex0: {
            type: 'line',
            xScaleID: 'x2',
            yScaleID: 'y2',
            yMin: 0,
            yMax: 1000,
            xMin: 0,
            xMax: 0,
            borderColor: 'rgb(0,0,0)',
            borderWidth: 2,
            // label: '1 Kg requirement'
          },
          liney0: {
            type: 'line',
            yScaleID: 'y2',
            xScaleID: 'x2',
            yMin: 0,
            yMax: 0,
            xMin: -0.05,
            borderColor: 'rgb(0,0,0)',
            borderWidth: 2,
            // label: '1 Kg requirement'
          },
          labelx0: {
            type: 'label',
            xValue: 0.15,
            yValue: 2.0,
            rotation: -90,
            xScaleID: 'x2',
            yScaleID: 'y2',
            backgroundColor: 'rgba(245,245,245)',
            content: ['Speed Not Measured'],
            color: 'black',
            font: {
              size: 24,
            }
          },
          labely0: {
            type: 'label',
            xValue: 4,
            xScaleID: 'x2',
            yScaleID: 'y2',
            yValue: 0.2,
            backgroundColor: 'rgba(245,245,245)',
            content: ['Payload Not Measured'],
            color: 'black',
            font: {
              size: 24,
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

