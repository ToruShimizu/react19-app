import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useReducer } from 'react';
import { ErrorBoundary } from "react-error-boundary";
import { PowerSupplyArea } from './types';

const ErrorComponent = (props: { shouldThrow: boolean }) => {
  if(props.shouldThrow) {

    throw new Error('Error in ErrorComponent');
  }
  return <p>No error</p>;
}


const reducer = (state: { count: number }, action: { type: 'increment' | 'decrement' }) => {
  if (action.type === 'increment') {
    return { count: state.count + 1 };
  } else if (action.type === 'decrement') {
    return { count: state.count - 1 };
  }
  return { count: state.count + 1 };
}



function App() {
  const [count, setCount] = useState(0)
  const [state, dispatch] = useReducer(reducer, { count: 0 })
  const areas = PowerSupplyArea.TOHOKU_EPCO & ~PowerSupplyArea.TEPCO
  const filter = (areas: number) => {
    console.log('areas', areas);
    
    console.log('&', areas & PowerSupplyArea.TOHOKU_EPCO);
    
    console.log(areas & PowerSupplyArea.TOHOKU_EPCO);
    
    if(areas & PowerSupplyArea.TOHOKU_EPCO) {
      console.log('tepco');
      
    }
  }
  filter(areas)  
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <p>Count2: {state.count}</p>

      <ErrorBoundary fallback={<p>Error</p>}>
        <ErrorComponent shouldThrow={true} />
      </ErrorBoundary>
    </>
  )
}

export default App
