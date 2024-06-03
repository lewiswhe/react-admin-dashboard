import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const GroupedBarChart = ({ data }) => {
  const chartRef = useRef();
  const chartInstance = useRef(null);

  useEffect(() => {
    // Filter out datasets with zero or null values
    const filteredData = {
      ...data,
      datasets: data.datasets.filter(dataset => dataset.data.some(value => value !== 0 && value !== null))
    };

    // Filter out labels with no data
    const labelsWithData = filteredData.labels.filter((label, index) => filteredData.datasets.some(dataset => dataset.data[index] !== 0 && dataset.data[index] !== null));

    // Destroy the previous chart instance, if exists
    if (chartInstance.current !== null) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');
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
              text: 'Robots',
            },
            // maxBarThickness: 5,
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
              text: 'Speed',
            },
          }
        },
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
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

