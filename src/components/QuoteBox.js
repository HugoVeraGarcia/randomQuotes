import React, { useState } from "react";
import quotes from "../data/quotes.json"
import Button from "./Button";


const getRandom = (data) => Math.floor(Math.random() * data.length);


const colors = [
    "#845EC2",
    "#D65DB1",
    "#FF6F91",
    "#FF9671",
    "#FFC75F",
    "#F9F871"
  ];
  
//rsc ... react state component
const QuoteBox = () => {
    const [quote, setQuote] = useState(quotes[getRandom(quotes)]);
  
    function changeQuote(){
        const indice = getRandom(quotes);
        setQuote(quotes[indice]);
    }  
    const color = colors[getRandom(colors)];

    document.body.style = `background: ${color}`;
    
    return (
        <div>
            <div className="card" style={{color: color}}>
                <div className="quote-container">
                    <p><i class="fa-solid fa-quote-left icon"></i></p>
                    <p className="quote">{quote.quote}</p>
                    </div>
                <p className="author">{quote.author}</p>
                <Button color = {color} changeQuote = {changeQuote} />

            </div>
        </div>
    );
}

export default QuoteBox;