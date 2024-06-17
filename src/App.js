import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/colors">
            <ColorList colors={colors} />
          </Route>
          <Route exact path="/colors/new">
            <NewColorForm addColor={handleAddColor} />
          </Route>
          <Route path="/colors/:color">
            <ColorDetails colors={colors} />
          </Route>
          <Redirect to="/colors" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
