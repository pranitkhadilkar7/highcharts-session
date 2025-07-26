export function Formatters() {
  return (
    <div className="flex flex-col h-full w-full overflow-y-auto">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-5xl font-bold">Formatters</h1>
        <ul className="list-disc ml-8 mt-4 text-2xl">
          <li>
            <p className="text-2xl">
              These are the functions that are used to format different aspects
              of the chart.
            </p>
          </li>
          <li>
            <p className="text-2xl">Examples</p>
            <ul className="list-disc ml-8 text-2xl">
              <li>
                <p className="text-xl">Showing custom legend labels</p>
              </li>
              <li>
                <p className="text-xl">Formatting the tooltip content</p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}
