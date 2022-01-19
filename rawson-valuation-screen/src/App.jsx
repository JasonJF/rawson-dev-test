import './App.css';
import MyNavbar from './components/MyNavbar';
import MyReactTable from './components/MyReactTable';
import ValuationsSummary from './components/ValuationsSummary';
import logo from "../src/images/logo-rawson-light-grey.png";

function App() {

  return (
    <div className="App">
      <MyNavbar />
      <div className="container mainAppContainer my-5">
        <div className="d-flex justify-content-end mt-5">
          <button className="btn btn-primary">
            <i className="bi bi-plus-lg"></i>New Valuation
          </button>
        </div>
        <ValuationsSummary/>
        <MyReactTable/>
        <footer className="d-flex justify-content-end my-5">
          <img className="rawsonLogo" src={logo} alt="rawson-logo" />
        </footer>
      </div>
      
      
    </div>
  )
}

export default App
