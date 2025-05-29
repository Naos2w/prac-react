import {useState} from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const changeCount = (operator: string) => {
    (operator === "+") ? setCount(count+1) : setCount(count-1);
  };
  const flexStyle: React.CSSProperties={
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const btnStyle: React.CSSProperties={
    padding: "0px 10px",
  };
  const inputStyle: React.CSSProperties={
    padding: "4px",  
    textAlign: "center",
  };
  return (
    <div style={{...flexStyle, flexDirection: 'column'}}>
      <h2>Counter</h2>
      <p>Current Number: {count}</p>
      <div style={{...flexStyle, flexDirection: 'row'}}>
        <button style={btnStyle} onClick={() => changeCount('+')}>+</button>
        <button style={btnStyle} onClick={() => changeCount('-')}>-</button>
      </div>
      <hr/>
      <h2>Real-time Text previewer</h2>
      <input
        style={inputStyle}
        type="text"
        value={text}
        placeholder="type something here"
        maxLength={10}
        onChange={(e)=>{setText(e.target.value)}}>
      </input>
      <h4>Here is what you're typing: {text}</h4>
    </div>
  );
}

export default App;
