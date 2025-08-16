import React, { useState } from 'react'
import { 
  Deck, 
  FlexBox
} from 'spectacle'
import Demo from './components/Demo'
import './App.css'

// Import all slides
import {
  TitleSlide,
  IntroductionSlide,
  WebSocketOverviewSlide
} from './slides/intro'

import {
  OperationsOverviewSlide,
  PartialOperationSlide,
  PartialFieldsSlide,
  InsertOperationSlide,
  UpdateOperationSlide,
  DeleteOperationSlide
} from './slides/operations'

import {
  FeedTypesOverviewSlide,
  InfiniteInsertSlide,
  StateUpdateSlide,
  OrderBookSlide
} from './slides/feeds'

import {
  ImplementationSlide,
  ErrorHandlingSlide
} from './slides/implementation'

import {
  KeyTakeawaysSlide,
  ThankYouSlide
} from './slides/conclusion'

// Custom theme
const theme = {
  colors: {
    primary: '#ffd700',
    secondary: '#ffffff',
    tertiary: '#1a1a1a',
    quaternary: '#2d2d2d'
  },
  fonts: {
    header: '"Segoe UI", Helvetica, Arial, sans-serif',
    text: '"Segoe UI", Helvetica, Arial, sans-serif',
    monospace: '"Courier New", monospace'
  }
}

function App() {
  const [currentView, setCurrentView] = useState('presentation')

  if (currentView === 'demo') {
    return (
      <>
        <div style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: 1000
        }}>
          <button 
            onClick={() => setCurrentView('presentation')}
            style={{
              background: '#ffd700',
              color: '#000',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '25px',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '14px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
            }}
          >
            ← Back to Presentation
          </button>
        </div>
        <Demo />
      </>
    )
  }

  return (
    <div style={{ height: '100vh', background: '#1a1a1a' }}>
      <div style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 1000
      }}>
        <button 
          onClick={() => setCurrentView('demo')}
          style={{
            background: '#ffd700',
            color: '#000',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '25px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '14px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
          }}
        >
          Live Demo
        </button>
      </div>

      <Deck theme={theme}>
        <TitleSlide />
        <IntroductionSlide />
        <WebSocketOverviewSlide />
        <OperationsOverviewSlide />
        <PartialOperationSlide />
        <PartialFieldsSlide />
        <InsertOperationSlide />
        <UpdateOperationSlide />
        <DeleteOperationSlide />
        <FeedTypesOverviewSlide />
        <InfiniteInsertSlide />
        <StateUpdateSlide />
        <OrderBookSlide />
        <ImplementationSlide />
        <ErrorHandlingSlide />
        <KeyTakeawaysSlide />
        <ThankYouSlide />
      </Deck>
    </div>
  )
}

export default App
