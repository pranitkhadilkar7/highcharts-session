import Highcharts, {
  Legend,
  Point,
  Series,
  type LegendItemClickEventObject,
} from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

function legendClickHandler() {
  return function (this: Legend, event: LegendItemClickEventObject) {
    event.preventDefault()
    console.log('Legend item clicked')
  }
}

function legendLabelFormatter(this: Point | Series) {
  return `${this.name} Production`
}

function tooltipFormatter(this: Point) {
  return `<div style="font-size: 14px"><b>${this.series.name}</b> - <span style="color: #616365;">${this.y}</span></div>`
}

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
      formatter: tooltipFormatter,
    },
    legend: {
      events: {
        itemClick: legendClickHandler(),
      },
      labelFormatter: legendLabelFormatter,
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
