import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types';

function CCard({ cardInfo }) { 
    let {name, cardNumber, expirationDate , bankName} = cardInfo;
    return (
        <div className="credit-card">
            <div className = "bank-name">{bankName}</div>
            <img className = "logo" src={require("./img/nfc.png")}/>
            
            <img className = "visa" src={require("./img/visa.png")}/>
            <div className = "card-number">{cardNumber}</div>
            <div className = "first-four-digits">{cardNumber.substring(0,4)}</div>
            <div className="expiration">
                <span className="valid-thru">Valid Thru</span> <span className="date">{expirationDate}</span>
        </div>
            <div className="name">{name}</div>
        </div>
    );
}


let cardInfo = {
    name: "Mr Mihail Gaidau",
    cardNumber: "4234 4565 6534 8767",
    expirationDate: "04/20",
    bankName: "Revolut"
};

ReactDOM.render(
<CCard cardInfo = {cardInfo}/>,
    document.querySelector('#root'));
