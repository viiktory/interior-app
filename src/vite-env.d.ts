declare module '*.svg?react'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.png'
declare module '*.gif'{
  import * as React from 'react'
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>
  export default ReactComponent
}
