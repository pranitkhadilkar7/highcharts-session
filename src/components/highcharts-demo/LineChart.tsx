import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

export function LineChart() {
  const option: Highcharts.Options = {
    chart: {
      type: 'line',
    },
    title: {
      text: 'Profit and Loss',
    },
    xAxis: {
      title: {
        text: 'Year',
      },
      categories: [
        '2001',
        '2002',
        '2003',
        '2004',
        '2005',
        '2006',
        '2007',
        '2008',
        '2009',
        '2010',
      ],
    },
    yAxis: {
      title: {
        text: 'Amount',
      },
    },
    series: [
      {
        type: 'line',
        name: 'Profit',
        data: [1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500],
      },
      {
        type: 'line',
        name: 'Loss',
        data: [2334, 1233, 123, 9876, 1234, 1234, 1234, 1234, 1234, 1234],
      },
    ],
  }

  return <HighchartsReact highcharts={Highcharts} options={option} />
}
