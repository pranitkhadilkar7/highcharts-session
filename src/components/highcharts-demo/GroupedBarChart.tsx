import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

export function GroupedBarChart() {
  const option: Highcharts.Options = {
    chart: {
      type: 'column',
      events: {
        //Fires when the chart is finished loading
        load: () => {
          console.log('GroupedBarChart Loade')
        },
        redraw: () => {
          console.log('GroupedBarChart Redraw')
        },
      },
    },
    title: {
      text: 'Corn vs wheat estimated production for 2023',
    },
    subtitle: {
      text:
        'Source: <a target="_blank" ' +
        'href="https://www.indexmundi.com/agriculture/?commodity=corn">indexmundi</a>',
    },
    xAxis: {
      categories: ['USA', 'China', 'Brazil', 'EU', 'Argentina', 'India'],
      crosshair: true,
      accessibility: {
        description: 'Countries',
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: '1000 metric tons (MT)',
      },
    },
    tooltip: {
      valueSuffix: ' (1000 MT)',
    },
    legend: {
      events: {
        itemClick: function (event) {
          console.log(event.preventDefault())
          console.log('Legend item clicked')
        },
      },
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: 'Corn',
        type: 'column',
        data: [387749, 280000, 129000, 64300, 54000, 34300],
      },
      {
        name: 'Wheat',
        type: 'column',
        data: [45321, 140000, 10000, 140500, 19500, 113500],
      },
    ],
  }

  return <HighchartsReact highcharts={Highcharts} options={option} />
}
