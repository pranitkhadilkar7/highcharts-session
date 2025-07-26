import Highcharts from 'highcharts'

// Import exporting modules - these automatically extend Highcharts
import 'highcharts/modules/exporting'
import 'highcharts/modules/offline-exporting'
import 'highcharts/modules/accessibility'

export function setGlobalSettings() {
  Highcharts.setOptions({
    chart: {
      style: {
        fontFamily: 'fantasy',
      },
    },
    title: {
      align: 'left',
    },
    subtitle: {
      align: 'left',
    },
    credits: {
      enabled: false,
    },
    exporting: {
      enabled: true,
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
    },
    tooltip: {
      useHTML: true,
      outside: true,
    },

    // colors: ['red', 'green', 'blue', 'yellow', 'purple'],
    xAxis: {
      title: {
        style: {
          fontSize: '18px',
          fontWeight: 'bold',
        },
      },
    },
    yAxis: {
      title: {
        style: {
          fontSize: '18px',
          fontWeight: 'bold',
        },
      },
    },

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 650,
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'left',
              verticalAlign: 'bottom',
            },
            xAxis: {
              title: {
                style: {
                  fontSize: '16px',
                  fontWeight: 'normal',
                },
              },
            },
            yAxis: {
              title: {
                style: {
                  fontSize: '16px',
                  fontWeight: 'normal',
                },
              },
            },
          },
        },
        {
          condition: {
            maxWidth: 450,
          },
          chartOptions: {
            legend: {
              enabled: false,
            },
            xAxis: {
              title: {
                style: {
                  fontSize: '12px',
                  fontWeight: 'normal',
                },
              },
            },
            yAxis: {
              title: {
                style: {
                  fontSize: '12px',
                  fontWeight: 'normal',
                },
              },
            },
          },
        },
      ],
    },
  })
}
