import React from 'react'
import './css/Home.css'
import Product from './Product'
import logo from './images/lean.jpg'
import onePlus from './images/onePlus.jpeg'
import mi from './images/band.jpg'
import Mi from './images/band.jpg'
import led from './images/led.jpg'
import mobile from './images/redmi.jpeg'
import cam from './images/cam-3.jpeg'
import {uid} from './uid'







function Home() {
    return (
        <div className ="home" >
            <div className = "home__container">
                <img className = "home__image" src = "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" />

            
                <div className =" container__row" >
                    < Product
                    id = {uid()}
                     
                    title = "The One plus Five  Experience the Speed. The best mobile phone for new young generation."
                    price = {37999}
                    image = {onePlus}
                    rating = {5}
                    />
                    < Product
                    id = {uid()}
                    title = "The MI band. Feel the Power Enjoy your life and kill your valuable time by doing shit stuffs on Mobile"
                    price = {17999}
                    image = {mi}
                    rating = {5} />
                    

                    {/* Product */}

                </div>

                <div className =" container__row" >
                    {/* Product */}
                    < Product 
                    id = {uid()}

                    title = "The Lean Start Riche Darwin"
                    price = {399}
                    image = {logo}
                    rating = {4}
                    />
                    < Product
                    id = {uid()}
                    title = "The MI band. Feel the Power"
                    price = {10999}
                    image = {Mi}
                    rating = {5} />
                    < Product
                    id = {uid()}
                    title = "The Redmi Note 7 Pro Experience the HD camera."
                    price = {17999}
                    image = {mobile}
                    rating = {5}
                    />
                    
                </div>

                <div className =" container__row" >
                    {/* Product */}
                    < Product 
                    id = {uid()}

                    title = "The new generation led. Best price with highest quality. Enjoy your life and kill your valuable time by watching shit on TV"
                    price = {17999}
                    image = {led}
                    rating = {5}
                    />
                    < Product 
                    id = {uid()}

                    title = "The best Camera for FULL HD recording. Live Stream done best."
                    price = {17999}
                    image = {cam}
                    rating = {5}
                    />
                </div>
            </div>
        </div>
    )

}
export default Home