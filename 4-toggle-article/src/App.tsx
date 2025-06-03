import {useState} from 'react';
import logo from './logo.svg';
import './App.css';

type ArticleCardProps = {
  title: string;
  content: string;
};

function ArticleCardProps({title, content}: ArticleCardProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div style={{display: `flex`, flexDirection: `column`, alignItems: `center`, border: `1px solid grey`, padding: `0px 2rem`, width: `300px`, maxWidth: `300px`, margin: `15px`}}>
      <h2>{title}</h2>
      <button style={{margin: `15px`, padding: `2px`, maxWidth: `150px`}} onClick={()=>{setIsVisible(!isVisible)}}>
        {isVisible ? "Click to show content" : "Click to hide content"}
      </button>
      {isVisible && <p>{content}</p>}
    </div>
  );
};

function App() {
  return (
    <div style={{display: `flex`, flexDirection: `column`, alignItems: `center`, justifyContent: `center`}}>
      <ArticleCardProps
        title="What is React?"
        content="React is a library for building user interfaces."
      />
      <ArticleCardProps
        title="Why TypeScript?"
        content="TypeScript helps catch errors and adds type safety."
      />
      <ArticleCardProps
        title="US trade court blocks Trump tariffs, saying president 'exceeded any authority'"
        content="Trump's tariffs have been a major headache for any US company with a global supply chain. Many tech firms fall into that category, with one in particular in the spotlight: Apple."
      />
    </div>
  );
}

export default App;
