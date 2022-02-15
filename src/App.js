import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import {cards} from './components/Cards';
import Footer from './components/Footer';


function App() {
  console.log(cards);

  const cardData = cards.map(function(card) {
        return <Card
         img={card.img} 
         text={card.text}
         price={card.price}
         rating={card.stats.rating}
         updatedCount={card.stats.reviewcount}
         country={card.stats.country}
        />
  })
  return (
    <div>
      <Navbar/>
      <Hero/>  
      <div className="main-card-container">
         {cardData}
         </div>
       <Footer/>
    </div>
  );
}

export default App;
