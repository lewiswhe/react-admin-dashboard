import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import annotationPlugin from 'chartjs-plugin-annotation';
import { legendData } from '../data/chart_extra';

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
    console.log(uniqAdhes);

    if (chartInstance.current !== null) {
      chartInstance.current.destroy();
    }
    const annotation0 =
    {
      type: 'line',
      yScaleID: 'y',
      yMin: 0,
      yMax: 'yAxisMax',
      xMin: 6.5,
      xMax: 6.5
    }
    const annotation1 =
    {
      type: 'line',
      yScaleID: 'y',
      yMin: 0,
      yMax: 'yAxisMax',
      xMin: 7.5,
      xMax: 7.5
    }
    const annotation2 =
    {
      type: 'line',
      yScaleID: 'y',
      yMin: 0,
      yMax: 'yAxisMax',
      xMin: 8.5,
      xMax: 8.5
    }
    const annotation3 =
    {
      type: 'line',
      yScaleID: 'y',
      yMin: 0,
      yMax: 'yAxisMax',
      xMin: 10.5,
      xMax: 10.5
    }
    const annotation4 =
    {
      type: 'line',
      yScaleID: 'y',
      yMin: 0,
      yMax: 'yAxisMax',
      xMin: 12.5,
      xMax: 12.5
    }
    const annotation5 =
    {
      type: 'line',
      yScaleID: 'y',
      yMin: 0,
      yMax: 'yAxisMax',
      xMin: 18.5,
      xMax: 18.5
    }


    const yAxisMax = 400;
    const marker = {
      type: 'label',
      borderColor: (ctx) => ctx.chart.data.datasets[0].backgroundColor,
      borderRadius: 6,
      borderWidth: 1,
      content: ['Climbing', 'Speed'],
      callout: {
        display: true,
        position: 'bottom'
      },
      position: {
        x: 'start',
        y: 'center'
      },
      xValue: '[47]',
      yValue: 250,
      // xAdjust: (ctx) => maxIndex(ctx) <= 3 ? 60 : maxIndex(ctx) >= 10 ? -60 : 0,
      xAdjust: -175,
      // xValue: (ctx) => maxLabel(ctx),
      yAdjust: -60,
      // yValue: (ctx) => maxValue(ctx)
    };
    const marker1 = {
      type: 'label',
      borderColor: (ctx) => ctx.chart.data.datasets[0].backgroundColor,
      borderRadius: 6,
      borderWidth: 1,
      content: ['Payload'],
      callout: {
        display: true,
        position: 'bottom'
      },
      position: {
        x: 'start',
        y: 'center'
      },
      xValue: '[47]',
      yValue: 200,
      // xAdjust: (ctx) => maxIndex(ctx) <= 3 ? 60 : maxIndex(ctx) >= 10 ? -60 : 0,
      xAdjust: 50,
      // xValue: (ctx) => maxLabel(ctx),
      yAdjust: -100,
      // yValue: (ctx) => maxValue(ctx)
    };

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
              // callback: function(label) {
              //   let realLabel = this.getLabelForValue(label)
              //   var robot = realLabel.split(";")[0];
              //   var loco = realLabel.split(";")[1];
              //   return realLabel;
              // }
            }
          },
          y: {
            beginAtZero: true,
            position: 'left',
            minBarLength: 5,
            // type: 'logarithmic',
            stacked: false,
            // max: yAxisMax,
            title: {
              display: true,
              text: 'Climbing Speed (mm/s)',
            },
          },
          y1: {
            beginAtZero: true,
            minBarLength: 2,
            type: 'logarithmic',
            stacked: false,
            position: 'right',
            // max: 100,
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
            text: "Climbing Speed and Maximum Payload of Non-Planar Climbing Robots"
          },
          annotation: {
            annotations: {
              marker,
              marker1,
              annotation0,
              annotation1,
              annotation2,
              annotation3,
              annotation4,
              annotation5,

              // annotation6,
              line1: {
                type: 'line',
                yScaleID: 'y1',
                yMin: 1,
                yMax: 1,
                xMin: 0,
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
