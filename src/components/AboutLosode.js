import React from 'react'
import Womenie from '../assets/images/women-new.jpg';
import Groupie from '../assets/images/our-story.jpg'
import Losode from '../assets/images/losode.gif'
import Footer from './Footer.js'
import TopBanner from './TopBanner'


import '../SCSS/About.scss'
const AboutLosode  = (props)=>{
    return(
      <React.Fragment>
        <div className="container">
        <div className="row d-flex justify-content-center pt-4" id="who">
           <div className="col-md-9">
           <h1 className="text-center"> Who we are.</h1>
           
           <p>Losode UK Ltd is a UK-based online retail store. Our aim is to offer the most fashionable, yet affordable clothing, shoes, and accessories to both men and women in Africa between. Losode is a registered company both in the UK and Nigeria.

Our clothing, shoes, and accessories are loved by professionals, executives, students, and young Africans who are or want to be up to date with today’s fashion trends. Online fashion retail is a growing trend in the African market, and we plan on being pioneers of this movement by offering the African population stylish pieces they will love to wear.</p>
<img src={Womenie} alt="about-us" className="img-fluid img-about mx-auto d-block" />
           </div>
          
           </div>

           <div className="row d-flex justify-content-center mt-4 pt-4 our-story">
           <div className="col-md-9">
           <h1 className="text-center"> Our Story.</h1>
           
           <p>Here at Losode, we strive to offer the highest quality pieces of clothing and fashion accessories, specifically targeted to the African market. Our style range encapsulates worldwide known and lesser-known European brands such as VeroModa, Fever, Calvin Klein Jeans, and much more.

We carried out a trial run in 2014, when the company started, with the first issue of our online fashion magazine “The Verdict”. All our clothing and accessories are conveniently available for online purchase and delivered straight to your door. We work with a range of designers and style professionals to give our customers the most variety at the best prices possible.</p>
<img src={Groupie} alt="about-us" className="img-fluid img-about mx-auto d-block"  />
           </div>
          
           </div>


           <div className="row d-flex justify-content-center mt-4 pt-4 our-story">
           <div className="col-md-9">
           <h1 className="text-center"> Our Mission & Goals. </h1>
           
           <p>Our primary aim is to enable the African population access fashionable and quality shoes, clothing, and accessories without having to board a plane. If you’re looking for quality clothing and accessories at a price you can afford, Losode is the perfect platform to acquire a wardrobe you can be proud of.

One of our main goals as a company is to connect retailers who have great inventory but lack the market accessibility with the perfect customer for that retailer. Those retailers who do not have the resources to reach the African market and attract an even larger audience will benefit from the exposure they will get from Losode and customers can enjoy a wide array of fashionable yet affordable clothing, shoes, and accessories.</p>

           </div>
          
           </div>

           <div>
           <h1 className="thisIs"> #ThisIsLosode </h1>
           <div className="row d-flex justify-content-center mt-4">
           <div className="col-md-6">
           <img src={Losode} alt="about-us" className="img-fluid img-about mx-auto d-block"  />
           </div>
           <div className="col-md-6 pt-4">
               <p>
               Losode is easily described as a fashion and style destination and differs considerably to your standard ecommerce store. We have built a fan base by providing our target audience with the most valuable content related to today’s fashion trends, celebrity style, and virtual stylists. For this, we use many of our own content marketing platforms, including Losode TV, the Losode blog, and our online magazine, The Verdict. We also stay active on the most popular social media platforms, so you can be sure you will be kept properly informed.

As an innovator in African online fashion, here at Losode we are constantly working to remain your top choice when it comes to buying stylish yet affordable clothing as well as keep you style savvy and fashion informed. Our team here at Losode, from the customer service specialists to the shipping department to the designers themselves, is looking forward to serving your needs for top fashion clothes, shoes, and accessories. Thank you for shopping at Losode!
    <div>
    <p className ='mt-4 btn btn-primary joinUs'><a href="">Join Us</a></p>
    </div>

               </p>
           </div>
           </div>
           </div>
        </div>
        <Footer/>
      </React.Fragment>
    )
}

export default AboutLosode
