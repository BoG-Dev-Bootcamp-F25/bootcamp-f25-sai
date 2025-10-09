import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="pokemon">
        <p className="name"></p>
        <div className="sprite-container">
          <button className="left"> &lt; </button>
          <img className="sprite" src={logo} alt="logo"/>
          <button className="right"> &gt; </button>
        </div>
        <div className="types"></div>
      </div>
      <div className="infos">
        <ul className="info"></ul>
        <ul className="moves"></ul>
        <button className="info">More Info</button>
        <button className="moved">Shiny</button>
      </div>
    </div>
  );
}

export default App;
