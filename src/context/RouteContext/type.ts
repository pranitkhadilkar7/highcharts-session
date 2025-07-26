export type Routes =
  | '/'
  | '/welcome'
  | '/agenda'
  | '/what-is-highcharts'
  | '/why-highcharts'
  | '/quick-start'
  | '/advanced-usage'
  | '/global-settings'
  | '/interactive-features'
  | '/formatters'
  | '/responsive-design'
  | '/custom-renderers'

export type RouteContextType = {
  route: Routes
  component: React.ReactNode
  setRoute: (route: Routes) => void
}
