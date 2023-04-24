import React from "react";
import { Link } from 'react-router-dom'
import shady from './shadyy.svg'

export const laptops = [
  { brand: "Mac", model: "2008 MacBook Air ", screenSize: "13.3-inch", price: 350 },
  { brand: "Mac", model: "2010 MacBook Air ", screenSize: "11.6-inch", price: 450 },
  { brand: "Mac", model: "2012 MacBook Air ", screenSize: "13-inch", price: 500 },
  { brand: "Mac", model: "2015 MacBook Air ", screenSize: "13-inch", price: 650 },
  { brand: "Mac", model: "2018 MacBook Air ", screenSize: "13-inch", price: 800 },
  { brand: "Mac", model: "2017 MacBook Pro", screenSize: "13-inch", price: 1299 },
  { brand: "Mac", model: "2018 MacBook Pro", screenSize: "15-inch", price: 2399 },
  { brand: "Mac", model: "2019 MacBook Pro", screenSize: "16-inch", price: 2399 },
  { brand: "iPad", model: "iPad Air (4th Gen)", screenSize: "13-inch", price: 1099 },
  { brand: "iPad", model: "iPad Pro (5th Gen)", screenSize: "15-inch", price: 1599 },
  { brand: "iPad", model: "iPad mini (6th Gen)", screenSize: "15-inch", price: 1599 },

];

function LaptopList({ budget, brand, screenSize }) {
  const filteredLaptops = laptops.filter((laptop) => {
    if (brand && laptop.brand !== brand) {
      return false;
    }
    if (screenSize && laptop.screenSize !== screenSize) {
      return false;

    }
    return laptop.price <= budget;
  });

  return (
    <div className="laptop-list">
      {filteredLaptops.length === 0 ? (
        <div style={{
          justifyContent: 'center',
          display: 'flex',
          alignItems: 'center'
        }}>

          <img src={shady}

            alt='Error Image'></img>
        </div>
      ) : (
        <ul className="itemsRows" style={{
          listStyleType: 'none',
          display: 'grid',
        }}>
          {filteredLaptops.map((laptop, index) => (
            <li key={index}>
              <h3>{laptop.brand}</h3>
              <p>{laptop.model}</p>
              <p>Screen Size: {laptop.screenSize}</p>
              <p>Price: ${laptop.price}</p>
              <Link to={'/buy/' + laptop.brand}>Specifications and Potential Sellers </Link>

            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LaptopList;
