import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import RouterConfig from './router/router-config'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterConfig/>
  </StrictMode>,
)
