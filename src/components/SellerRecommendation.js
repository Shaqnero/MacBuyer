import React, { useState } from 'react';
import { laptops } from './LaptopList';
import m2019 from '../images/m2019.jpg';
import theman from '../images/theman.jpg';
import BuyButton from './BuyButton';

function MacbookSpecs() {
  const { brand, model, screenSize, price } = laptops[4]

  return (
    <div style={{
      marginTop: '5%'
    }}>
      <h2 style={{ marginLeft: '25%', marginBottom: '-5px' }}>{brand} Specifications</h2>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', alignContent: 'center' }}>

        <ul style={{
          listStyleType: 'none'
        }}>
          <li>Model: {model}</li>
          <li>Processor: Apple M1 chip with 8-core CPU and 8-core GPU</li>
          <li>Memory: 8GB or 16GB unified memory</li>
          <li>Storage: 256GB, 512GB, 1TB, or 2TB SSD</li>
          <li>Display: {screenSize} Retina display with True Tone technology</li>
          <li>Ports: Two Thunderbolt / USB 4 ports, headphone jack</li>
          <li>Wireless: Wi-Fi 6 and Bluetooth 5.0</li>
          <li>Operating System: macOS Big Sur</li>
          {/* <li>Screen Size: {screenSize}</li> */}
        </ul>
        {/* Image of the Machine */}
        <div>
          <img 
          style={{}}
          src={m2019} width={240}></img>
        </div>

      </div>
      <h2 style={{ marginLeft: '25%', marginBottom: '-5px' }}>Potential {brand} Sellers</h2>
      <div style={{
        justifyContent: 'center',
        alignContet: 'center',
        display: 'flex',

      }}>
        <ul style={{
          listStyleType: 'none'

        }}>
          <li>You can get the device for at least USD{price}.00 </li>
          <li>Individuals looking to upgrade to a newer Mac Book model</li>
          <li>People who are no longer using their Mac Book and want to sell it</li>
          <li>Electronics resellers who specialize in selling used Apple products</li>
          <li>Online marketplaces such as eBay, Amazon, or Craigslist who sell {model}</li>
        </ul>
        {/* Image of the Sellers */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '5px'
        }}>
         <BuyButton name='CompuGhana'  color='white' backgroundColor='black'/>
         <BuyButton name='Telefonika' color='white' backgroundColor='black'/>
         <BuyButton name='Franko' color='white' backgroundColor='black'/>
        </div>
      </div>
    </div>
  );
}

export default MacbookSpecs;
