import { useState } from 'react'
import { PrimaryButton } from './Buttons/PrimaryButton'
import { GroupedBarChart } from './highcharts-demo/GroupedBarChart'

export function ResponsiveDesign() {
  const [showChart, setShowChart] = useState(false)

  const handleShowChart = () => {
    setShowChart((e) => !e)
  }

  return (
    <div className="flex flex-col h-full w-full overflow-y-auto">
      <div className="flex flex-col items-center justify-center mt-16">
        <h1 className="text-5xl font-bold">Responsive Design</h1>
        <ul className="list-disc ml-8 mt-4 text-2xl">
          <li>
            <p className="text-2xl">
              We can create responsive charts much the same way you work with
              responsive web pages
            </p>
          </li>
          <li>
            <p className="text-2xl">
              It lets you define a set of rules, for each condition, for example
              maxWidth: 500
            </p>
          </li>
          <li>
            <p className="text-2xl">Examples</p>
            <ul className="list-disc ml-8 text-2xl">
              <li>
                <p className="text-xl">Hide legend when screen is small</p>
              </li>
              <li>
                <p className="text-xl">
                  Change style of chart when screen is small
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
          <GroupedBarChart />
          <div className="grid grid-cols-3 gap-4 my-4">
            <GroupedBarChart />
            <GroupedBarChart />
            <GroupedBarChart />
          </div>
          <div className="grid grid-cols-4 gap-4">
            <GroupedBarChart />
            <GroupedBarChart />
            <GroupedBarChart />
            <GroupedBarChart />
          </div>
        </div>
      ) : null}
    </div>
  )
}
