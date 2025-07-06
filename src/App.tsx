import './App.css'
import { Pagination } from './components/Pagination'
import { useRoute } from './context/RouteContext'
// import { Link } from './components/Link'

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
