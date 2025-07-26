import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

function renderLabelsForPieChart(
  this: Highcharts.Chart & {
    customLabelTitle?: Highcharts.SVGElement
    customLabelSubtitle?: Highcharts.SVGElement
  }
) {
  // Destroy exsiting labels if present
  if (this.customLabelTitle) {
    this.customLabelTitle.destroy()
  }

  if (this.customLabelSubtitle) {
    this.customLabelSubtitle.destroy()
  }

  // Draw new labels and position them at the center of the chart so that they are not overlapping with the chart
  this.customLabelTitle = this.renderer
    .text(
      'Title',
      this.plotLeft + this.plotWidth / 2,
      this.plotTop + this.plotHeight + 20
    )
    .attr({
      align: 'center',
    })
    .css({
      fontSize: '18px',
      fontWeight: 'bold',
    })
    .add()

  this.customLabelSubtitle = this.renderer
    .text(
      'Subtitle',
      this.plotLeft + this.plotWidth / 2,
      this.plotTop + this.plotHeight + 40
    )
    .attr({
      align: 'center',
    })
    .css({
      fontSize: '12px',
    })
    .add()
}

export function PieChart() {
  const option: Highcharts.Options = {
    chart: {
      type: 'pie',
      // extra margin to fit the labels below the chart
      marginBottom: 80,
      // drawing custom labels on load and each redraw
      events: {
        load: renderLabelsForPieChart,
        redraw: renderLabelsForPieChart,
      },
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: ${point.y}',
        },
      },
    },

    series: [
      {
        type: 'pie',
        name: 'Profit - Loss',
        data: [
          {
            name: 'Profit',
            y: 700,
          },
          {
            name: 'Loss',
            y: 300,
          },
        ],
      },
    ],
  }

  return <HighchartsReact highcharts={Highcharts} options={option} />
}
