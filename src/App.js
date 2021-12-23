import './App.css';

const App = () => {
  return (
    <div className="App">
      <header>
      <h1>Todo List</h1>
      </header>
      <div className='todo-app'>
        <div className='add-todo'>
          <input type="text" placeholder='what need to do?'/>
          <button type='submit'>Add</button>
        </div>
        <div className='todo-list'>
          <ul>
            <li>
              <input type="checkbox"/>
              <h2>Build thodo app</h2>
              <button >delete</button>
            </li>
          </ul>
        </div>
        <div>
          <div>
            2 items
          </div>
          <div>
            <ul>
              <li>
                <button>Add</button>
              </li>
              <li>
                <button>Active</button>
              </li>
              <li>
                <button>Completed</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <footer>
        <h3>develope by mbk</h3>
      </footer>
    </div>
  );
}

export default App;
