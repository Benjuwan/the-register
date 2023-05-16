import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import './index.css'

import { TheAryContextFlagment } from './providers/TheAryContext.tsx'
import { TheNameContextFlagment } from './providers/TheNameContext.tsx'
import { TheMailContextFlagment } from './providers/TheMailContext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TheAryContextFlagment>
      <TheNameContextFlagment>
        <TheMailContextFlagment>
          <App />
        </TheMailContextFlagment>
      </TheNameContextFlagment>
    </TheAryContextFlagment>
  </React.StrictMode>,
)
