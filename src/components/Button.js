import React from "react";


const Button = ({color, changeQuote}) => {
    return (
        <div>
            <button className="button" style={{backgroundColor: color}} onClick={changeQuote}>
                <i class="fa-solid fa-angle-right"></i>
            </button>

            
        </div>
    );
};

export default Button;