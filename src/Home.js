import React from 'react'
import './Home.css';
import Product from "./Product";
function Home() {
    return (
        <div className='home'>
            <img className='home_img' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'/>
         
         {/* products -- id  price rating img */}
         {/* every thing we are passing here , we have access to product.js  */}
            <div className="home_row">
                <Product
                    id="12345"
                    title="The Lean Startup:How Constant Innovation Creates"
                    price={11.96}
                    rating={5}
                    image="https://i.pinimg.com/564x/8e/8e/35/8e8e3546849d11e345a06cff35199878.jpg"
                />

                <Product
                    id="12345"
                    title="The Lean Startup:How Constant Innovation Creates"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                />

            </div>
            <div className="home_row">
                <Product
                    id="12345"
                    title="The Lean Startup:How Constant Innovation Creates"
                    price={11.96}
                    rating={5}
                    image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?%24300x400_retinamobilex2%24"
                />

                <Product
                    id="12345"
                    title="The Lean Startup:How Constant Innovation Creates"
                    price={11.96}
                    rating={5}
                    image="https://i.pinimg.com/564x/8e/8e/35/8e8e3546849d11e345a06cff35199878.jpg"
                />
                <Product
                    id="12345"
                    title="The Lean Startup:How Constant Innovation Creates"
                    price={11.96}
                    rating={5}
                    image="https://i.pinimg.com/564x/8e/8e/35/8e8e3546849d11e345a06cff35199878.jpg"
                />

            </div>

            <div className="home_row">

                <Product
                    id="12345"
                    title="The Lean Startup:How Constant Innovation Creates"
                    price={11.96}
                    rating={5}
                    image="https://i.pinimg.com/236x/56/e0/3a/56e03a84c41f2b4d5bdfe67ad56fecc2.jpg"
                />

            </div>
            

        </div>
    )
}

export default Home
