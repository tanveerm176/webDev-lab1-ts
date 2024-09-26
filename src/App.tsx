import './App.css'
import Calendar from './components/Calendar'

const App = () => {
  return(
    <div className='App'>
      <h1>Itinerary for your Spain trip</h1>
      <h2>
        Welcome to Spain! Here are some sights and sounds you should see!
      </h2>
      <Calendar />
    </div>
  )
}

export default App
