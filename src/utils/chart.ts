import Highcharts from 'highcharts'

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
    // xAxis: {
    //   title: {
    //     style: {
    //       fontSize: '18px',
    //       fontWeight: 'bold',
    //     },
    //   },
    // },
    // yAxis: {
    //   title: {
    //     style: {
    //       fontSize: '18px',
    //       fontWeight: 'bold',
    //     },
    //   },
    // },
  })
}
