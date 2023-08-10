import React, { useEffect } from 'react';

const PayPalDonationButton = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.paypalobjects.com/donate/sdk/donate-sdk.js';
    script.charset = 'UTF-8';
    script.onload = () => {
      // eslint-disable-next-line no-undef
      PayPal.Donation.Button({
        env: 'production',
        hosted_button_id: 'WWPW4MDKB68ZU',
        image: {
          src: 'https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif',
          alt: 'Donate with PayPal button',
          title: 'PayPal - The safer, easier way to pay online!',
        },
      }).render('#donate-button');
    };

    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="donate-button"></div>;
};

export default PayPalDonationButton;
