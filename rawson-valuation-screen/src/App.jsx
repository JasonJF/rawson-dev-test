import './App.css'
import MyNavbar from './components/MyNavbar'
import ValuationsSummary from './components/ValuationsSummary'

function App() {

  return (
    <div className="App bg-light">
      <MyNavbar />
      <div className="container mainAppContainer">
        <div className="d-flex justify-content-end mt-5">
          <button className="btn btn-primary">
            <i className="bi bi-plus-lg"></i>New Valuation
          </button>
        </div>
        <ValuationsSummary/>
      </div>
      
      
    </div>
  )
}

export default App
