import './App.css'
import response from './response.json'
import ShowProgress from './components/ShowProgress'

function App() {
  return (
    <div>
      <h1>App</h1>
      <ShowProgress routeName={response.routeName} myPosition={ response.myPosition } peopleOnRoute={ response.peopleOnRoute } />
    </div>
  )
}

export default App
