import * as React from 'react';
import './style.css';
import data from './data.js';
import List from './List.js';

function App() {
  const [people, setPeople] = React.useState(data);

  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthdays Today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>Clear</button>
      </section>
    </main>
  );
}

export default App;
