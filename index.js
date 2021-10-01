import ReactDOM from 'react-dom';
import React from 'react';

function User({ name, surname, className, counter, setCounter }) {
  
  return (
    <>
        <div>Counter: {counter}</div>
        <button onClick={() => setCounter(counter + 1)}>+1</button>
      <div className={className}>Name: {name}</div>
      <div>Surname: {surname}</div>
    </>
  );
}

function Header(props) {
  return <h1>Hello {props.framework}</h1>;
}
function App() {
    const [counter, setCounter] = React.useState(0)
  return (
    <>
      <Header framework="vue" />
      <User name="Vlad" surname="Vorobyov" counter={counter} setCounter={setCounter}/>
      <User name="Alex" surname="Surname" className="container" counter={counter} setCounter={setCounter}/>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
