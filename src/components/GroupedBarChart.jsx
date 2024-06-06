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
    // Filter out datasets with zero or null values
    // const filteredData = {
    //   ...data,
    //   datasets: data.datasets.filter(dataset => dataset.data.some(value => value !== 0 && value !== null))
    // };
    const uniqAdhes = legendData.uniqAdhesS;
    const hexColours = legendData.hexColours;

    // Filter out labels with no data
    // const labelsWithData = filteredData.labels.filter((label, index) => filteredData.datasets.some(dataset => dataset.data[index] !== 0 && dataset.data[index] !== null));
    // var labels = labelsWithData;

    // Destroy the previous chart instance, if exists
    if (chartInstance.current !== null) {
      chartInstance.current.destroy();
    }

    // const maxDataValue = Math.max(
    //   ...filteredData.datasets.flatMap(dataset => dataset.data.filter(value => value !== null))
    // );

    // const yAxisMax = Math.ceil(maxDataValue * 1.1);
    const yAxisMax = 1200;

    const ctx = chartRef.current.getContext('2d');
    Chart.defaults.font.size = 26;
    chartInstance.current = new Chart(ctx, {
      type: 'scatter',
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
                let realLabel = this.getLabelForValue(label)
                var robot = realLabel.split(";")[0];
                var loco = realLabel.split(";")[1];
                return realLabel;
              }
            }
          },
          xAxis2: {
            type: "category",
            labels: [
              "Legged",
              "Soft",
              "Jet Propulsion",
              "Wheeled",
              "Inchworm",
              "Wheeled, Inchworm",
              "Tracked"
            ],
            grid: {
              drawOnChartArea: false, // only want the grid lines for one axis to show up
            },
            ticks: {
              callback: function(label) {
                let realLabel = this.getLabelForValue(label)

                var robot = realLabel.split(";")[0];
                var loco = realLabel.split(";")[1];
                return realLabel;

              }
            }
          },
          y: {
            beginAtZero: true,
            position: 'left',
            stacked: false,
            // type: 'logarithmic',
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
              return value !== null && value !== 0 ? `${context.dataset.label}` : '';
            }
          },
          title: {
            display: true,
            text: "Climbing Speed and Maximum Payload of Non-Planar Climbing Robots"
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
