import './App.css'
import linkedinIcon from './assets/linkedin-icon.svg'; // Use an SVG icon for LinkedIn logo

function App() {
  return (
    <div className="popup-container">
      <header className="popup-header">
        <img src={linkedinIcon} alt="LinkedIn Icon" className="linkedin-icon" />
        <h1>LinkedIn AutoConnect</h1>
      </header>
      <div className="popup-content">
        <p>Use this extension to automate your connection requests.</p>
        <p>
          Navigate to the LinkedIn <b>Grow Your Network</b> page and click the
          "Connect with All" button.
        </p>
      </div>
    </div>
  )
}

export default App;
