export function Agenda() {
  const agendaItems = [
    'What is Highcharts?',
    'Why Highcharts?',
    'Quick Start with React',
    'Advanced features of Highcharts',
    'Actual Usage',
    'Q&A',
  ]
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <h1 className="text-5xl font-bold">Agenda</h1>
      <ul className="list-disc ml-8 mt-4 text-2xl">
        {agendaItems.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
