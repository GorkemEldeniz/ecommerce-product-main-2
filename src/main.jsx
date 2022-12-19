import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { store } from './Store/Store'
import { Provider } from 'react-redux'
import {ContextFunction} from './Context/Context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ContextFunction>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ContextFunction>
  </Provider>
  ,
)
