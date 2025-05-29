import React from 'react';
import logo from './logo.svg';
import './App.css';

type ProfileCardProps = {
  name: string;
  imageUrl: string;
  intro: string;
  description: string;
};

function ProfileCardProps({name, imageUrl, intro, description}: ProfileCardProps) {
  return (
    <div style={{display: `flex`, flexDirection: `column`, justifyContent: `center`, border: `2px solid black`, padding: `2rem`, borderRadius: `8px`, maxWidth: `300px`, alignItems: `center`, alignContent: `center` }} >
      <img src={imageUrl} alt={`${name}'s profile`} style={{height: '100px'}} />
      <h2>{name}</h2>
      <p>{intro}</p>
      <p>{description}</p>
    </div>

  )
};

function App() {
  return (
    <div className="App" style={{display: `flex`, flexDirection: `row`, justifyContent: `center`, alignItems: `center`, alignContent: `center`}}>
      <ProfileCardProps 
        name="Naos"
        imageUrl="https://www.toughlex.com/_next/image?url=%2Fimages%2Fexpertise%2Ftechnology%2Freact%2Freact-logo.webp&w=2048&q=75"
        intro="Hi, This is my second react app, I'm learning React."
        description="7+ years experience for software engineer."
      />
    </div>
  );
}

export default App;
