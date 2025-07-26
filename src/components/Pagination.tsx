import { useRoute, type Routes } from '../context/RouteContext'

const ROUTES: Routes[] = [
  '/welcome',
  '/agenda',
  '/what-is-highcharts',
  '/why-highcharts',
  '/quick-start',
  '/advanced-usage',
  '/global-settings',
  '/interactive-features',
]

// ... existing code ...
export function Pagination() {
  const { route, setRoute } = useRoute()

  const index = ROUTES.indexOf(route)

  const goTo = (idx: number) => {
    if (idx >= 0 && idx < ROUTES.length) {
      setRoute(ROUTES[idx])
    }
  }

  return (
    <div className="fixed bottom-6 right-6 flex gap-4 items-center z-50">
      {/* Left Arrow */}
      <span
        onClick={() => index > 0 && goTo(index - 1)}
        className={`text-2xl cursor-pointer select-none rounded-full p-2 transition
            ${
              index <= 0
                ? 'text-gray-300 cursor-not-allowed bg-gray-100'
                : 'text-gray-700 hover:bg-gray-200 bg-white shadow'
            }
          `}
        aria-disabled={index <= 0}
        role="button"
        tabIndex={index <= 0 ? -1 : 0}
      >
        ←
      </span>
      {/* Right Arrow */}
      <span
        onClick={() => index < ROUTES.length - 1 && goTo(index + 1)}
        className={`text-2xl cursor-pointer select-none rounded-full p-2 transition
            ${
              index >= ROUTES.length - 1
                ? 'text-gray-300 cursor-not-allowed bg-gray-100'
                : 'text-gray-700 hover:bg-gray-200 bg-white shadow'
            }
          `}
        aria-disabled={index >= ROUTES.length - 1}
        role="button"
        tabIndex={index >= ROUTES.length - 1 ? -1 : 0}
      >
        →
      </span>
    </div>
  )
}
