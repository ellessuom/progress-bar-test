import { useState } from 'react'
import './App.css'
import response from './response.json'
import ShowProgress from './components/ShowProgress'

function App() {
  const [percentage, setPercentage] = useState(0)

  return (
    <div>
      <h1>App</h1>
      <ShowProgress routeName={response.routeName} myPosition={ response.myPosition } peopleOnRoute={ response.peopleOnRoute } />

    </div>
  )
}

export default App
