import * as React from "react";
//import Cta from "../components/cta";
import logo from "../assets/images/logo.png";
type Link = {
  label: string;
  url: string;
};

const links: Link[] = [
  {
    label: "Home",
    url: "#",
  },
  {
    label: "About",
    url: "#",
  },
  {
    label: "Womens",
    url: "#",
  },
  {
    label: "Mens",
    url: "#",
  },
  {
    label: "Girls",
    url: "#",
  },
  {
    label: "Baby",
    url: "#",
  },
  {
    label: "contact",
    url: "#",
  },
];


const Header = () => {
  const linkDoms = links.map((link) => (
    <div style={{color:"black"}} key={link.label}>
      <a href={link.url} target="_blank" rel="noreferrer">
        {link.label}
      </a>
    </div>
  ));

  return (
    <div style={{background:"white"}} className="bg-gray-50">
      <div className="alert alert-dismissible text-center cookiealert">

        <nav className="py-4 flex items-center justify-between">

          <div className="flex gap-x-4 items-center">
            <img
              src={logo}
              width="200"
              height="100"
            ></img>
            <div className="flex gap-x-4 text-sm font-semibold text-body">
              {linkDoms}
            </div>
          </div>
          <div className="space-x-5"></div>
          <div className="flex gap-x-4">


            <div className=" h-12 pt-4 ">
              <div className="numbercom">

                <h1 className="number_col">
                  <b><span style={{color:"green"}}> UK:</span></b><a style={{color:"black"}} href="tel:(+44)2080901819">(+44) 208 0901819</a>
               
                <b><span  style={{color:"green"}}>,  US:</span></b><a style={{color:"black"}} href="tel:(+1)3015639488">(+1) 301 563 9488</a>
                <b><span  style={{color:"green"}}>, AUS:</span></b><a style={{color:"black"}} href="tel:(+61)0386768288">(+61) 03 8676 8288</a></h1>
              </div>

              


              {/* <Cta
                buttonText="Order Online"
                url="#"
                style="text-white bg-orange shadow-xl"
              ></Cta> */}
            </div>
          </div>
        </nav>
      </div><br />
    </div>
  );
};

export default Header;
