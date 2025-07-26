export function GlobalSettings() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-5xl font-bold">Global Settings</h1>
      <ul className="list-disc ml-8 mt-4 text-2xl">
        <li>
          <p className="text-2xl">
            Apply a set of options to all charts on the same page or throughout
            the application.
          </p>
        </li>
        <li>
          <p className="text-2xl">
            Use the <code>Highcharts.setOptions</code> method to set global
            options.
          </p>
        </li>
        <li>
          <p className="text-2xl">
            Default configurations can also be applied based on chart{' '}
            <code>type</code>.
          </p>
        </li>
        <li>
          <p>
            See use case at <code>src/utils/chart.ts</code>
          </p>
        </li>
      </ul>
    </div>
  )
}
