import * as React from "react";
import {
  MapboxMap,
  FilterSearch,
  OnSelectParams,
  VerticalResults,
  getUserLocation, 
} from "@yext/search-ui-react";
import { useEffect, useState } from "react";  // New
import { BiLoaderAlt } from "react-icons/bi";
import {
  Matcher,
  SelectableStaticFilter,
  useSearchActions,
  useSearchState  ,
} from "@yext/search-headless-react";
// Mapbox CSS bundle
import "mapbox-gl/dist/mapbox-gl.css";
import LocationCard from "./LocationCard";  
import MapPin from "./MapPin";    
type InitialSearchState = "not started" | "started" | "complete";

const StoreLocator = (): JSX.Element => {
   const searchActions = useSearchActions();

  const [initialSearchState, setInitialSearchState] =
    useState<InitialSearchState>("not started");

  const searchLoading = useSearchState((state) => state.searchStatus.isLoading);

  useEffect(() => {
    getUserLocation()
      // .then((location) => {
      //   searchActions.setStaticFilters([
      //     {
      //       selected: true,
      //       displayName: "Current Location",
      //       filter: {
      //         kind: "fieldValue",
      //         fieldId: "builtin.location",
      //         value: {
      //           lat: location.coords.latitude,
      //           lng: location.coords.longitude,
      //           radius: 40233.6, // equivalent to 25 miles
      //         },
      //         matcher: Matcher.Near,
      //       },
      //     },
      //   ]);
      // })
      .catch(() => {
        searchActions.setStaticFilters([
          {
            selected: true,
            displayName: "New York City, New York, NY",
            filter: {
              kind: "fieldValue",
              fieldId: "builtin.location",
              value: {
                lat: 40.7128,
                lng: -74.006,
                radius: 40233.6, // equivalent to 25 miles
              },
              matcher: Matcher.Near,
            },
          },
        ]);
      })
      .then(() => {
        searchActions.executeVerticalQuery();
        setInitialSearchState("started");
      });
  }, []);

  useEffect(() => {
    if (!searchLoading && initialSearchState === "started") {
      setInitialSearchState("complete");
    }
  }, [searchLoading]);

  const handleFilterSelect = (params: OnSelectParams) => {
    const locationFilter: SelectableStaticFilter = {
      selected: true,
      filter: {
        kind: "fieldValue",
        fieldId: params.newFilter.fieldId,
        value: params.newFilter.value,
        matcher: Matcher.Equals,
      },
    };
    searchActions.setStaticFilters([locationFilter]);
    searchActions.executeVerticalQuery();
  };

  return (
    <>
    <div className="relative flex h-[calc(100vh-210px)] border ">
        {initialSearchState !== "complete" && (
          <div className="absolute z-20 flex h-full w-full items-center justify-center bg-white opacity-70">
            <BiLoaderAlt className="animate-spin " size={50} />
          </div>
        )}
      <div className="flex h-[calc(100vh-242px)] border">
        <div className=" flex flex-col">
          <FilterSearch
            onSelect={handleFilterSelect}
            placeholder="Find your Locations Near You"
            searchFields={[
              {
                entityType: "location",
                fieldApiName: "builtin.location",
              },
            ]}
          />
          <VerticalResults
            customCssClasses={{ verticalResultsContainer: "overflow-y-auto" }}
            CardComponent={LocationCard}
           
          />
        </div>
        
        </div>
         <div className="w-full pl-10 pr-10 pb-4 pt-4">
          <MapboxMap

            mapboxAccessToken={import.meta.env.YEXT_PUBLIC_MAPBOX_API_KEY || ""}
            PinComponent={MapPin}           // New 
          />
        
        </div><br />
        </div>
    
    </>
  );
};

export default StoreLocator;