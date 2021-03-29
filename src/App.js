import './App.css';
import Planner from './components/planner/planner'
import Navbar from './components/navbar/navbar'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1> Welcome To </h1>
      <Planner/>
    </div>
  );
}

export default App;
