import { QuickLineSetup } from './highcharts-demo/QuickLineSetup'

export function QuickStart() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-5xl font-bold">Quick Start With React</h1>
      <div className="flex flex-col mt-4">
        <p className="text-2xl">
          <b>Step 1:</b> <code>yarn add highcharts</code>
        </p>
        <p className="text-2xl">
          <b>Step 2:</b> <code>yarn add highcharts-react-official</code>
        </p>
      </div>
      <div className="flex flex-col items-center justify-center w-2xl mt-4">
        <QuickLineSetup />
      </div>
    </div>
  )
}
