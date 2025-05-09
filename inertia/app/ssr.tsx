import ReactDOMServer from 'react-dom/server'
import { createInertiaApp } from '@inertiajs/react'
import AppShell from '~/components/layouts/app_shell'

export default function render(page: any) {
  return createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    resolve: (name) => {
      const pages = import.meta.glob('../pages/**/*.tsx', { eager: true })
      const pageComponent: any = pages[`../pages/${name}.tsx`]
      pageComponent.default.layout =
        pageComponent.default.layout || ((page: any) => <AppShell children={page} />)
      return pageComponent
    },
    setup: ({ App, props }) => <App {...props} />,
  })
}
