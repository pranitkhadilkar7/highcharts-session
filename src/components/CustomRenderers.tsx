import { useState } from 'react'
import { PieChart } from './highcharts-demo/PieChart'
import { PrimaryButton } from './Buttons/PrimaryButton'

export function CustomRenderers() {
  const [showChart, setShowChart] = useState(false)

  const handleShowChart = () => {
    setShowChart((e) => !e)
  }
  return (
    <div className="flex flex-col h-full w-full overflow-y-auto">
      <div className="flex flex-col items-center justify-center mt-16">
        <h1 className="text-5xl font-bold">Custom Renderers</h1>
        <ul className="list-disc ml-8 mt-4 text-2xl">
          <li>
            <p className="text-2xl">
              Use to render custom svg elements on the chart
            </p>
          </li>
          <li>
            <p className="text-2xl">
              Each chart instance has its own reference to a renderer
            </p>
          </li>
          <li>
            <p className="text-2xl">Examples</p>
            <ul className="list-disc ml-8 text-2xl">
              <li>
                <p className="text-xl">
                  Adding custom label text below the pie chart
                </p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center justify-center mt-16">
        <PrimaryButton
          title={showChart ? 'Hide Chart' : 'Show Chart'}
          onClick={handleShowChart}
        />
      </div>
      {showChart ? (
        <div className="w-full mb-5 p-5">
          <PieChart />
        </div>
      ) : null}
    </div>
  )
}
