import * as React from "react";



const Footer = () => {
  return (
    <section style={{ height: "5px" }} className="footer-panel">
      <footer style={{ background: "white", height: "250px" }} className="footer1">
        <div style={{padding:"15px"}} className="grid grid-cols-4 gap-x-10 gap-y-10">

          <div style={{ width: "300px" }} className="col-xs-12 col-sm-5 col-lg-6 col-md-6">
            <ul>
              <li className="widget-container widget_nav_menu">
                <h2 style={{ color: "#f5821f" }} className="title-widget">Why We Are Here</h2>
                <p style={{ color: "black" }}>We are here to make your mood very Happy and calm by serving you a healthy and tasty food, So enjoy your day with us.</p><br />
                
                <h2 style={{ color: "#f5821f" }} className="title-widget">Subscribe</h2>
                 <p style={{ color: "black" }}>Keep up to date with the tasty foods, recipe trends and offer announcements.</p>
              
              </li>
            </ul>
          </div>
          
          
          <div className="col-xs-12 col-sm-2 col-lg-2 col-md-2">
            <ul>
              <li className="widget-container widget_nav_menu">
                <h2 style={{ color: "#f5821f" }} className="title-widget">About Us</h2>
                <ul style={{ color: "black" }} className="menu_footer">
                  <li><a href="#">Expertise</a></li>
                  <li><a href="#">Our Company</a></li>
                  <li><a href="#">Case Studies</a></li>
                  <li><a href="#">Press</a></li>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#" target="_blank">Careers</a></li>
                  <li><a href="#">Contact Us</a></li>
                  <li><a href="#">Sitemap</a></li>
                  
                  </ul>
              </li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-2 col-lg-2 col-md-2">
            <ul>
              <li className="widget-container widget_nav_menu">
                <h2 style={{ color: "#f5821f" }} className="title-widget">Categories</h2>
                <ul style={{ color: "black" }} className="menu_footer">
                  <li><a href="#">Item-1</a></li>
                  <li><a href="#">Item-2</a></li>
                  <li><a href="#">Item-3</a></li>
                  <li><a href="#">Item-4</a></li>
                  <li><a href="#">Item-5</a></li>
                  <li><a href="#" >Item-6</a></li>
                  <li><a href="#">Others</a></li>
                 
                  </ul>
              </li>
            </ul>
          </div>
          <div>
            <h2 style={{ color: "#f5821f" }} className="title-widget">Our Offices</h2>
            <ul style={{ color: "black" }} className="menu_footer">
              <li><span style={{color:"green"}}>INDIA</span> : Jaipur, Rajasthan - 302004, India</li>
              <li><span style={{color:"green"}}>BRIGHTON, UK</span> : Unit 2, Albourne Court</li>
              <li><span style={{color:"green"}}>LONDON, UK</span> : Unit 2 Hobbs Court</li>
              <li><span style={{color:"green"}}>DUBAI UAE</span> : 10, Bayti 22, Street 35</li>
              <li><span style={{color:"green"}}>USA 6701</span> : Democracy Blvd.Suite 300</li>
              <li><span style={{color:"green"}}>AUSTRALIA</span> : 11/475 Blackburn Road</li>
              <li><span style={{color:"green"}}>FRANCE</span> : 506 Chemin des Nugues</li>
              <li><span style={{color:"green"}}>GURUGRAM, INDIA</span> : Emaar Digital Greens Tower A</li>
            </ul>

          </div>
        </div>
        </footer>
        <div style={{ background: "green" }} className="flex flex-col flex-wrap justify-center p-5 md:flex-row">
          <span className="inline-flex justify-center w-full mx-auto mt-2 mr-2 sm:ml-auto sm:mt-0 space-x-3">
            <a className="text-black hover:text-blue-500">
              <svg
                fill="blue"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="text-black hover:text-blue-500">
              <svg
                fill="blue"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="text-black hover:text-blue-500">
              <svg
                fill="yellow"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="text-black hover:text-blue-500">
              <svg
                fill="blue"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
           {/* <div style={{ background: "#f5821f" }} className="flex flex-col flex-wrap justify-center p-5 md:flex-row"> */}
          <div className="container inline-flex flex-col flex-wrap items-center px-5 py-4 mx-auto sm:flex-row">
            <p className="mx-auto text-sm text-center text-black sm:text-left ">
              {" "}
              ©  2002 - 2023  {"turtlehead tacos reserve all policy. "}
            </p>
          


        </div>
    
        </div>
       
    </section>
  );
};
// style={{height:"50px", width:"10px"}} 
export default Footer;
