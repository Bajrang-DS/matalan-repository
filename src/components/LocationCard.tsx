import { CardComponent, CardProps } from "@yext/search-ui-react";
import * as React from "react";
 import Location, { Coordinate } from "../types/locations";
import { RiDirectionFill } from "react-icons/ri";

const LocationCard: CardComponent<Location> = ({
  result,
}: CardProps<Location>): JSX.Element => {
  const location = result.rawData;

  // function that takes coordinates and returns a google maps link for directions
  const getGoogleMapsLink = (coordinate: Coordinate): string => {
    return `https://www.google.com/maps/dir/?api=1&destination=${coordinate.latitude},${coordinate.longitude}`;
  };

  return (
    <section >
      <div className="flex justify-between border-y p-4">
        <div className="flex">
          <div>
            <a
              target={"_blank"}
              href={location.slug}
              className="font-semibold text-orange"
              rel="noreferrer"
            >
              {location.name}
            </a>
            <p className="text-sm">{location.address.line1}</p>
            <p className="text-sm">{`${location.address.city}, ${location.address.region} ${location.address.postalCode}`}</p>
            <p className="text-sm"> Contact : {location.mainPhone}</p>
          </div>
        </div>
        <div className="flex items-center">
          {location.yextDisplayCoordinate && (
            <a
              target={"_blank"}
              className="flex flex-col items-center text-sm text-orange"
              href={getGoogleMapsLink(location.yextDisplayCoordinate)}
              rel="noreferrer"
            >
              <RiDirectionFill size={24} />
              <p>Directions</p>
            </a>

          )}
         
          



        </div>
        {/* <div>
            <button type="button" >
            <b>
            <a className="btn btn-primary " style={{ color: "green" }} href= {location.slug}>
            View Details
            </a>
          </b>
            </button>

          </div> */}

      </div>

    </section>
  );
};

export default LocationCard;