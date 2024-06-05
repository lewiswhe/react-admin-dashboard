import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import annotationPlugin from 'chartjs-plugin-annotation';
import { legendData } from '../data/chart_extra';

Chart.register(ChartDataLabels);
Chart.register(annotationPlugin);
const GroupedBarChart = ({ data }) => {
  const chartRef = useRef();
  const chartInstance = useRef(null);

  useEffect(() => {
    const uniqAdhes = legendData.uniqAdhesS;
    const hexColours = legendData.hexColours;

    // Destroy the previous chart instance, if exists
    if (chartInstance.current !== null) {
      chartInstance.current.destroy();
    }

    const yAxisMax = 1500;
    const labels2 = data.labels2

    const ctx = chartRef.current.getContext('2d');
    Chart.defaults.font.size = 26;
    chartInstance.current = new Chart(ctx, {
      type: 'scatter',
      categories: ['Total', 'Lower than 2.50'],
      data: {
        labels: data.labels,
        datasets: data.datasets,
      },
      options: {
        type: 'bar',
        responsive: true,
        skipNull: true,
        scales: {
          x: {
            stacked: true,
            type: 'category',
            ticks: {
              callback: function(label) {
                let realLabel = this.getLabelForValue(label);
                var robot = realLabel.split(";")[0]; // Display the robot label
                return robot;
              }
            }
          },
          // xAxis2: {
          //   type: "category",
          //   grid: {
          //     drawOnChartArea: false,
          //   },
          //   afterBuildTicks: function(axis) {
          //     // Create a mapping from labels to labels2
          //     const labelMapping = data.labels.map(label => label.split(";")[1]);
          //     axis.ticks = labels2.map((label, index) => ({
          //       value: index,
          //       label: label
          //     })).filter((tick) => labelMapping.includes(tick.label));
          //   },
          //   ticks: {
          //     callback: function(value, index) {
          //       // Return the mapped label for this position
          //       return labels2[index];
          //     }
          //   }
          // },
          y: {
            beginAtZero: true,
            position: 'left',
            stacked: false,
            type: 'logarithmic',
            max: yAxisMax,
            title: {
              display: true,
              text: 'Climbing Speed (mm/s)',
            },
          },
          y1: {
            beginAtZero: true,
            type: 'logarithmic',
            stacked: false,
            position: 'right',
            max: 100,
            title: {
              display: true,
              text: 'Payload (kg)',
            },
            grid: {
              display: false,
            }

          }
        },
        plugins: {
          legend: {
            display: true,
            position: 'top',
            title: {
              display: true,
              color: 'black',
              text: "Adhesion Methods"
            },
            labels: {
              generateLabels: function(chart) {
                let labels = [];
                uniqAdhes.forEach((adhe, index) => {
                  labels.push({
                    text: adhe,
                    fillStyle: hexColours[index],
                  });
                });
                return labels;
              },
            }
          },
          datalabels: {
            display: true,
            align: 'end',
            anchor: 'end',
            font: {
              size: 24, // Increase font size for data labels
            },
            formatter: (value, context) => {
              // Customize the text shown on each bar
              return value !== null && value !== 0 ? `${context.dataset.label.split(";")[0]}` : '';
            }
          },
          title: {
            display: true,
            text: "Maximum Payload of Planar Climbing Robots"
          },
          annotation: {
            annotations: {
              line1: {
                type: 'line',
                yScaleID: 'y1',
                yMin: 1,
                yMax: 1,
                xMin: 0.5,
                borderColor: 'rgb(255,0,0)',
                borderWidth: 2,
                // label: '1 Kg requirement'
              },
              label1: {
                type: 'label',
                xValue: 17.5,
                yValue: 1.3,
                yScaleID: 'y1',
                backgroundColor: 'rgba(245,245,245)',
                content: ['1 Kg requirement'],
                color: 'red',
                font: {
                  size: 18,
                }
              }
            }

          },
          afterDraw: function(chart, easing) {
            let ctx = chart.chart.ctx;
            ctx.save();
            let xAxis = chart.scales['x-axis-0'];
            let xCenter = (xAxis.left + xAxis.right) / 2;
            let yBottom = chart.scales['y-axis-0'].bottom;
            ctx.textAlign = 'center';
            ctx.font = '12px Arial';
            ctx.fillText(chart.data.categories[0], (xAxis.left + xCenter) / 2, yBottom + 40);
            ctx.fillText(chart.data.categories[1], (xCenter + xAxis.right) / 2, yBottom + 40);
            ctx.strokeStyle = 'lightgray';
            [xAxis.left, xCenter, xAxis.right].forEach(x => {
              ctx.beginPath();
              ctx.moveTo(x, yBottom);
              ctx.lineTo(x, yBottom + 40);
              ctx.stroke();
            });
            ctx.restore();
          }

        },
        layout: {
          padding: {
            left: 10,
            right: 10,
            top: 0,
            bottom: 10
          }
        },
        // categoryPercentage: 10.0, // Adjust spacing between bars within each category
        // barThickness: 50,
      },
    });

    // Cleanup function
    return () => {
      if (chartInstance.current !== null) {
        chartInstance.current.destroy();
      }
    };
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default GroupedBarChart;
