import React, { useState } from 'react'
import BudgetSelector from '../components/BudgetSelector'
import Filters from '../components/Filters'
import LaptopList from '../components/LaptopList'
import {Link} from 'react-router-dom'
import Footer from '../components/Footer'


const IndexPage = () => {

    const [budget, setBudget] = useState(0);
    const [brand, setBrand] = useState("");
    const [screenSize, setScreenSize] = useState("");

    const handleBudgetChange = (event) => {
        setBudget(Number(event.target.value));
    };

    const handleBrandChange = (event) => {
        setBrand(event.target.value);
    };

    const handleScreenSizeChange = (event) => {
        setScreenSize(event.target.value);
    };

    return (
        <div className="App bg indexPage">
            <header className="header">
                <h1>MacBuyer</h1>
                <BudgetSelector value={budget} onChange={handleBudgetChange} />
            </header>
            <main className="main-content">
                <div className="sidebar">
                    <Filters
                        brand={brand}
                        screenSize={screenSize}
                        onBrandChange={handleBrandChange}
                        onScreenSizeChange={handleScreenSizeChange}
                    />
                </div>
                <div className="results">
                    <h2>Results</h2>
                    <LaptopList budget={budget} brand={brand} screenSize={screenSize} />
                </div>
            </main>
         <Footer/>
        </div>

    )
}

export default IndexPage