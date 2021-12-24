import './App.css';
import {
  Header,
  TodoApp,
  Footer
} from './components'

const App = () => {
  return (
    <div className="App">
      <Header />
      <TodoApp />
      <Footer />
    </div>
  );
}

export default App;
