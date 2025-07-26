import './App.css'
import { Pagination } from './components/Pagination'
import { useRoute } from './context/RouteContext'
import { setGlobalSettings } from './utils/chart'

setGlobalSettings()

function App() {
  const { component } = useRoute()
  return (
    <div className="h-full flex flex-col p-4">
      {component}
      <Pagination />
    </div>
  )
}

export default App
