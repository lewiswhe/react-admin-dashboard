import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import annotationPlugin from 'chartjs-plugin-annotation';
import { legendData, annotations } from '../data/chart_extra_c_All';

Chart.register(ChartDataLabels);
Chart.register(annotationPlugin);
function maxValue(ctx) {
  const values = ctx.chart.data.datasets[0].data;
  return Math.max(...values);
}

function maxIndex(ctx) {
  const max = maxValue(ctx);
  const dataset = ctx.chart.data.datasets[0];
  return dataset.data.indexOf(max);
}

function maxLabel(ctx) {
  return ctx.chart.data.labels[maxIndex(ctx)];
}
const GroupedBarChartC = ({ data  }) => {
  const chartRef = useRef();
  const chartInstance = useRef(null);

  useEffect(() => {
    const uniqAdhes = legendData.uniqAdhesS;
    const hexColours = legendData.hexColours;
    console.log(uniqAdhes);
    console.log(annotations);

    if (chartInstance.current !== null) {
      chartInstance.current.destroy();
    }

    const yAxisMax = 100;
    const ctx = chartRef.current.getContext('2d');
    Chart.defaults.font.size = 26;
    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.labels,
        datasets: data.datasets,
      },
      options: {
        responsive: true,
        skipNull: true,
        // barThickness: 50,
        categoryPercentage: 0.9,
        barPercentage: 0.9,
        scales: {
          x: {
            stacked: false,
            type: 'category',
            ticks: {
              autoSkip: false,
              autoSkipPadding: 50,
              align: 'center',
              sampleSize: 10,
            },

            grid: {
              display: true,
              color: '#a3a3a3'
            }
          },
          y: {
            beginAtZero: true,
            position: 'left',
            type: 'logarithmic',
            max: 1500,
            minBarLength: 5,
            stacked: false,
            title: {
              display: true,
              text: 'Maximum Climbing Speed (mm/s)',
            },
          },
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
            display: false,
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
            text: "Maximum Climbing Speed of Climbing Robots"
          },
          annotation: {
            common: {
              drawTime: 'afterDraw'
            },

            annotations: annotations
          },
          tooltip: {
            enabled: true,
            callbacks: {
              title: function(context) {
                // Title will be the label of the data point
                return `Robot: ${context[0].label}`;
              },
              label: function(context) {
                const value = context.raw; // The value of the data point
                const loco = context.dataset.loco; // Access the loco value from the dataset
                const adhe = context.dataset.adhe; // Access the loco value from the dataset
                const datasetLabel = context.dataset.label || ''; // Dataset label
                return `${loco}|${value} mm/s|${adhe}`; // Include loco in the tooltip
              },
            },
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            titleFont: { size: 16 },
            bodyFont: { size: 14 },
            footerFont: { size: 12 },
            displayColors: true,
          },        },
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

export default GroupedBarChartC;
