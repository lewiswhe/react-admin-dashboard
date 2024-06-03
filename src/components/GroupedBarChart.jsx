import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { legendData } from '../data/chart_extra';

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

    // Destroy the previous chart instance, if exists
    if (chartInstance.current !== null) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');
    Chart.defaults.font.size = 26;
    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labelsWithData,
        datasets: filteredData.datasets
      },
      options: {
        responsive: true,
        skipNull: true,
        scales: {
          x: {
            stacked: false,
            title: {
              display: true,
              text: 'Robot',
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
            title: {
              display: true,
              text: 'Speed (mm/s)',
            },
          }
        },
        plugins: {
          legend: {
            display: true,
            position: 'chartArea',
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
