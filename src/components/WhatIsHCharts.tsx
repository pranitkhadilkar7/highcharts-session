export function WhatIsHCharts() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-5xl font-bold">What is Highcharts?</h1>
      <div className="max-w-4xl mt-4">
        <ul className="list-disc ml-8">
          <li className="mb-4">
            <p className="text-2xl">
              Highcharts is a powerful JavaScript <b>charting library</b> used
              to create <b>interactive</b>, <b>responsive</b>, and visually
              appealing charts in web applications—helping make data more
              accessible to end users.
            </p>
          </li>
          <li>
            <p className="text-2xl">
              Can be integrated with any web framework, including React,
              Angular, Vue, etc.{' '}
              <a
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.highcharts.com/download/"
              >
                here
              </a>
              .
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}
