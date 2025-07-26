import { ActualUsage } from '../../components/ActualUsage'
import { AdvancedUsage } from '../../components/AdvancedUsage'
import { Agenda } from '../../components/Agenda'
import { CustomRenderers } from '../../components/CustomRenderers'
import { Explorting } from '../../components/Explorting'
import { Formatters } from '../../components/Formatters'
import { GlobalSettings } from '../../components/GlobalSettings'
import { InteractiveFeatures } from '../../components/InteractiveFeatures'
import { QAndA } from '../../components/QAndA'
import { QuickStart } from '../../components/QuickStart'
import { ResponsiveDesign } from '../../components/ResponsiveDesign'
import { ThankYou } from '../../components/ThankYou'
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
  '/interactive-features': <InteractiveFeatures />,
  '/formatters': <Formatters />,
  '/responsive-design': <ResponsiveDesign />,
  '/custom-renderers': <CustomRenderers />,
  '/explorting': <Explorting />,
  '/actual-usage': <ActualUsage />,
  '/q-and-a': <QAndA />,
  '/thank-you': <ThankYou />,
}
