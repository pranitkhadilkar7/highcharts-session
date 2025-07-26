import { AdvancedUsage } from '../../components/AdvancedUsage'
import { Agenda } from '../../components/Agenda'
import { GlobalSettings } from '../../components/highcharts-demo/GlobalSettings'
import { QuickStart } from '../../components/QuickStart'
import { Welcome } from '../../components/Welcome'
import { WhatIsHCharts } from '../../components/WhatIsHCharts'
import { WhyHighcharts } from '../../components/WhyHighcharts'
import type { Routes } from './type'

export const ROUTES_COMPONENTS: Record<Routes, React.ReactNode> = {
  '/': <div>Home</div>,
  '/welcome': <Welcome />,
  '/agenda': <Agenda />,
  '/what-is-highcharts': <WhatIsHCharts />,
  '/why-highcharts': <WhyHighcharts />,
  '/quick-start': <QuickStart />,
  '/advanced-usage': <AdvancedUsage />,
  '/global-settings': <GlobalSettings />,
}
