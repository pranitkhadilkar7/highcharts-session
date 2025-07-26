import { GroupedBarChart } from './highcharts-demo/GroupedBarChart'

export function InteractiveFeatures() {
  return (
    <div className="flex flex-col h-full w-full overflow-y-auto">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-5xl font-bold">Interactive Features</h1>
        <ul className="list-disc ml-8 mt-4 text-2xl">
          <li>
            <p className="text-2xl">
              Often we want to add interactivity to our charts.
            </p>
          </li>
          <li>
            <p className="text-2xl">Examples</p>
            <ul className="list-disc ml-8 text-2xl">
              <li>
                <p className="text-xl">Execute a function when chart loads</p>
              </li>
              <li>
                <p className="text-xl">
                  Execute a function when legend is clicked
                </p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="w-full mb-5 p-5">
        <GroupedBarChart />
      </div>
    </div>
  )
}
