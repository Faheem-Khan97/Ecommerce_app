import React from 'react'
import './Home.css'
import Product from './Product'
import logo from './img/lean.png'
import mobile from './img/Mobile.jpg'
import mi from './img/MMI.jpg'
import Mi from './img/MIBand.jpg'
import led from './img/LED.jpg'






function Home() {
    return (
        <div className ="home" >
            <div className = "home__container">
                <img className = "home__image" src = "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" />

            
                <div className =" container__row" >
                < Product 
                    title = "The One plus Five  Experience the Speed."
                    price = {37999}
                    image = {mobile}
                    rating = {5}
                    />
                    < Product
                    title = "The MI band. Feel the Power Enjoy your life and kill your valuable time by doing shit stuffs on Mobile"
                    price = {17999}
                    image = {mi}
                    rating = {5} />
                    


                    {/* Product */}

                </div>

                <div className =" container__row" >
                    {/* Product */}
                    < Product 
                    title = "The Lean Start Riche Darwin"
                    price = {399}
                    image = {logo}
                    rating = {4}
                    />
                    < Product
                    title = "The MI band. Feel the Power"
                    price = {10999}
                    image = {Mi}
                    rating = {5} />
                    < Product 
                    title = "The Redmi Note 7 Pro Experience the HD camera."
                    price = {17999}
                    image = {mobile}
                    rating = {5}
                    />
                    
                </div>

                <div className =" container__row" >
                    {/* Product */}
                    < Product 
                    title = "The new generation led. Best price with highest quality. Enjoy your life and kill your valuable time by watching shit on TV"
                    price = {17999}
                    image = {led}
                    rating = {5}
                    />
                </div>
            </div>
        </div>
    )

}
export default Home