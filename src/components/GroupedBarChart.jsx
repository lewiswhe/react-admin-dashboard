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
    const filteredData = {
      ...data,
      datasets: data.datasets.filter(dataset => dataset.data.some(value => value !== 0 && value !== null))
    };
    const uniqAdhes = legendData.uniqAdhes;
    const hexColours = legendData.hexColours;

    // Filter out labels with no data
    const labelsWithData = filteredData.labels.filter((label, index) => filteredData.datasets.some(dataset => dataset.data[index] !== 0 && dataset.data[index] !== null));
    var labels = labelsWithData;

    // Destroy the previous chart instance, if exists
    if (chartInstance.current !== null) {
      chartInstance.current.destroy();
    }

    const maxDataValue = Math.max(
      ...filteredData.datasets.flatMap(dataset => dataset.data.filter(value => value !== null))
    );

    const yAxisMax = Math.ceil(maxDataValue * 1.1);

    const ctx = chartRef.current.getContext('2d');
    Chart.defaults.font.size = 26;
    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labelsWithData,
        datasets: filteredData.datasets,
      },
      options: {
        responsive: true,
        skipNull: true,
        scales: {
          x: {
            stacked: false,
            title: {
              display: true,
              text: 'Robots grouped by Locomotion Method',
            },
            ticks: {
              callback: (value, index, values) => labelsWithData[index], // Only show labels with data
              maxRotation: 0, // Prevent label rotation
              autoSkip: false, // Prevent labels from being skipped
            }
          },
          y: {
            beginAtZero: true,
            stacked: false,
            max: yAxisMax,
            title: {
              display: true,
              text: 'Maximum Payload (kg)',
            },
          }
        },
        plugins: {
          legend: {
            display: true,
            position: 'chartArea',
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
            text: "Maximum Payload of Non-Planar Climbing Robots"
          },
          annotation: {
            annotations: {
              line1: {
                type: 'line',
                yMin: 1,
                yMax: 1,
                borderColor: 'rgb(255,0,0)',
                borderWidth: 2,
                // label: '1 Kg requirement'
              },
              label1: {
                type: 'label',
                xValue: 0.5,
                yValue: 1.3,
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
        barPercentage: 1.0, // Adjust width of bars within each category
        categoryPercentage: 1.0, // Adjust spacing between bars within each category
        barThickness: 50,
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
