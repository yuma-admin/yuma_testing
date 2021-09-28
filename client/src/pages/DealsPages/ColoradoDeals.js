import Carousel from 'react-bootstrap/Carousel'
import "./deals.css"

// Deals Data
import dealsData from "./updateDealsHere/ColoradoDealsData"
import listReactFiles from "list-react-files"

// Organizing Coupons Into Segments
const heroCoupons = dealsData.slice(0,3);
const secondaryDeals = dealsData.slice(3,4)
const weeklyCouponsUpdated = dealsData.slice(4);

// Organing Coupons Through 'List-React-Files' Function

function ColoradoDeals() {

    return (
        <>
        <div className="container dealContainer" id="desktopAndTabletView">
        
            {/* STATE SELECTOR */}
            <div className="row">
                <div className="col-12">
                    
                        <div className="col-3 stateSelector">
                            <h3 className="currentState">Colorado Deals</h3>
                            <div className="selectableStates">
                                <a href="/michigan-deals"><h4>Michigan Deals</h4></a>
                            </div>
                        </div>
                    
                </div>
            </div>
            
            
            <div className="row" id="firstRow"> 
                 
                {/* CAROUSEL */}       
                <div className="col-9">
                    
                    <div className="dealHeroImageContainer">
         
                        {/* CAROUSEL SHOP BUTTON AND LOGO (DESKTOP) */}
                        <div className="col-4">
                            
                            <div className="heroButtonContainer">
                                <img className="heroDealsLogo" 
                                    src="/images/deals/coloradoDeals/YumaWay_Horizontal_BlackGold_Solid.png" 
                                    alt="YumaWay Logo" 
                                />
                                <a href="/locations" className="newDealButton">
                                    Shop 
                                </a>
                            </div>
                            
                        </div>

                        {/* CAROUSEL COUPON IMAGES (DESKTOP) */}
                        <div id="mainTopCarousel">
                            <div className="heroButtonBackground"></div>
                            <Carousel 
                                controls={false} 
                                interval={4000} 
                                wrap={true}
                                touch={true}
                                fade={false}
                            >    
                                <Carousel.Item>
                                
                                    <a href="/locations">
                                        <img src="/images/deals/coloradoDeals/heroFlower.png" 
                                        className=" carouselImage" 
                                        alt="Primary Cannabis Coupon One"
                                        />
                                    </a>
                                        
                                </Carousel.Item>
                                <Carousel.Item>
                                
                                    <a href="/locations">
                                        <img src="/images/deals/coloradoDeals/hero420Joints.png" 
                                        className=" carouselImage" 
                                        alt="Primary Cannabis Coupon Two"
                                        />
                                    </a>
                                        
                                </Carousel.Item>
                                <Carousel.Item>
                                
                                    <a href="/locations">
                                        <img src="/images/deals/coloradoDeals/heroConcentrates.png" 
                                        className=" carouselImage" 
                                        alt="Primary Cannabis Coupon Three"
                                        />
                                    </a>
                                        
                                </Carousel.Item>
                                    
                            </Carousel>
                                    
                        </div>
                        
                        
                    </div> 
                </div>  
                        
                {/* RIGHT COLUMN */}
                <div className="col-3 ">
                    <div className="rightTopColumn">
                        
                            <div className="topRightCouponContainer" id="upperTopCouponContainer">
                                <a href="/locations">
                                    <img src="/images/deals/coloradoDeals/bogo-50-off.png" alt="Cannabis Coupon One"/>
                                </a>
                            </div>    

                    </div>
                </div>
        
            </div>

            {/* ALL WEEKLY UPDATED COUPONS (DESKTOP) */}
            <div className="row" id="fourthRow">

                {weeklyCouponsUpdated.map((coupon, index) => (
                    <div key={index} className="col-4">

                        <div className="fourthRowCoupon">
                            <a href="/locations">
                                <img src={coupon.imgUrl} alt="Cannabis Coupon Three"/>
                            </a>
                        </div>

                    </div>
                ))} 

            </div>
        
        </div>

        {/* MOBILE VIEW */}
        
        <div className="container dealContainer" id="mobileView">
    
            {/* STATE SELECTOR (MOBILE) */}
            <div className="row">
                <div className="col-12">
                    <div className="stateSelector">
                        <h3 className="currentState">Colorado Deals</h3>
                        <div className="selectableStates">
                            <a href="/michigan-deals"><h4>Michigan Deals</h4></a>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* CAROUSEL */}
            <div id="firstRow">
                <div className="row">
                    <div className="col-12">


                        {/* CAROUSEL SHOP BUTTON AND LOGO (MOBILE)*/}
                        <div className="dealHeroImageContainer">
            
                            <div className="col-5">
                                
                                <div className="heroButtonContainer">
                                    <img className="heroDealsLogo" src="/images/deals/coloradoDeals/YumaWay_Horizontal_BlackGold_Solid.png" alt="YumaWay Logo"/>
                                    <a href="/locations" className="newDealButton">
                                    Shop 
                                    </a>
                                </div>
                                
                            </div>

                        {/* CAROUSEL IMAGE(S) */}
                        <div id="mainTopCarousel">
                        <div className="heroButtonBackground"></div>
                            <Carousel 
                                controls={false} 
                                interval={4000} 
                                wrap={true}
                                indicators={false}
                            >    
                                <Carousel.Item>
                                
                                    <a href="/locations">
                                        <img src="/images/deals/coloradoDeals/heroFlower.png" 
                                        className=" carouselImage" 
                                        alt="Primary Cannabis Coupon One"
                                        />
                                    </a>
                                        
                                </Carousel.Item>
                                <Carousel.Item>
                                
                                    <a href="/locations">
                                        <img src="/images/deals/coloradoDeals/hero420Joints.png" 
                                        className=" carouselImage" 
                                        alt="Primary Cannabis Coupon Two"
                                        />
                                    </a>
                                        
                                </Carousel.Item>
                                <Carousel.Item>
                                
                                    <a href="/locations">
                                        <img src="/images/deals/coloradoDeals/heroConcentrates.png" 
                                        className=" carouselImage" 
                                        alt="Primary Cannabis Coupon Three"
                                        />
                                    </a>
                                        
                                </Carousel.Item>
                                    
                            </Carousel>
                        </div>
                            
                        </div> 
                    </div>
                </div>
            </div>

            {/* ALL MOBILE COUPONS NOT IN CAROUSEL */}
            {weeklyCouponsUpdated.map((coupon, index) => (
                <div key={index} id="secondRow">
                    <div className="row">
                        <div className="col-12">
                            <div className="topRightCouponContainer" id="upperTopCouponContainer">
                                <a href="/locations">
                                    <img src={coupon.imgUrl} alt="Cannabis Coupon Mobile Two"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            
            {/* FINAL COUPON FROM RIGHT COLUMN */}
            <div id="secondRow">
                    <div className="row">
                        <div className="col-12">
                            <div className="topRightCouponContainer" id="upperTopCouponContainer">
                                <a href="/locations">
                                    <img src="/images/deals/coloradoDeals/bogo-50-off.png" alt="Cannabis Coupon Mobile Two"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    
    
    </>
    
    )
    
}
    
    
export default ColoradoDeals;