import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { PayPalScriptProvider, PayPalButtons } from 'react-paypal-button-v2';

function PayPalDonation() {
    const donateButtonStyle = {
      layout: 'horizontal',
      label: 'donate',
    };
  
    return (
      <PayPalScriptProvider options={{ 'client-id': 'WWPW4MDKB68ZU' }}>
        <div id="donate-button-container">
          <PayPalButtons
            style={donateButtonStyle}
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: '10.00', // Adjust the donation amount as needed
                    },
                  },
                ],
              });
            }}
          />
        </div>
      </PayPalScriptProvider>
    );
}
  
export default PayPalDonation;
  
