import React, { useState } from 'react';
import { laptops } from './LaptopList';

function MacbookSpecs() {
  const { brand, model, screenSize, price} = laptops[0]

    return (
      <div>
        <h2>{brand} Specifications</h2>
        <ul>
          <li>Processor: Apple M1 chip with 8-core CPU and 8-core GPU</li>
          <li>Memory: 8GB or 16GB unified memory</li>
          <li>Storage: 256GB, 512GB, 1TB, or 2TB SSD</li>
          <li>Display: 13.3-inch Retina display with True Tone technology</li>
          <li>Ports: Two Thunderbolt / USB 4 ports, headphone jack</li>
          <li>Wireless: Wi-Fi 6 and Bluetooth 5.0</li>
          <li>Operating System: macOS Big Sur</li>
          <li>Screen Size: {screenSize}</li>
        </ul>
        <h2>Potential {brand} Sellers</h2>
        <ul>
          <li>You can get the device for at least USD{price}.00 </li>
          <li>Individuals looking to upgrade to a newer Mac Book model</li>
          <li>People who are no longer using their Mac Book and want to sell it</li>
          <li>Electronics resellers who specialize in selling used Apple products</li>
          <li>Online marketplaces such as eBay, Amazon, or Craigslist who sell {model}</li>
        </ul>
      </div>
    );
 }

export default MacbookSpecs;
