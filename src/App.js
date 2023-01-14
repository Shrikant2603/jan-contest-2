
import { useState, useEffect } from 'react';
import './App.css';
import Counter from './components/Counter';

function App() {
  const [count, setCount] = useState(0);
useEffect(() => {
  console.log(count);
}, [count])

  return (
    <div className="App">
      <Counter count={count} setCount={setCount}/>
    </div>
  );
}

export default App;
