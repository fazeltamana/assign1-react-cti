import Badge from "./components/Badge"
import "./App.css";

function App() {

  return (
    <>
      <div className="app">
        <h1 className="title">Week 1 Assignment</h1>
        <div className="badge-grid">
          <Badge label="Course:" value="React Fundamentals"/>
          <Badge label="Instructor:" value="Ehsan Ehrari"/>
          <Badge label="Duration:" value="6 Months"/> 
          <Badge label="Status:" value="Active"/>
          <Badge label="Week:" value="1" />
          <Badge label="Topic:" value="Reusable Components" />
          <Badge label="Student" value="Tamana Fazel" />
        </div>
        <footer className="footer">
          <div className="footer-row">
              <div>© {new Date().getFullYear()} Reusable Components</div>
              <div>Built by: Tamana Fazel</div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App
