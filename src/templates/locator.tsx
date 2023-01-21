import * as React from "react";
import "../index.css";
import {
  GetHeadConfig,
  GetPath,
  Template,
  TemplateProps,
  TemplateRenderProps,
  

} from "@yext/pages";
import PageLayout from "../components/page-layout";
import StoreLocator from "../components/StoreLocator";
 
import {
  provideHeadless,
  SandboxEndpoints,
  SearchHeadlessProvider,
} from "@yext/search-headless-react";
//import { FilterSearch } from "@yext/search-ui-react";

export const getPath: GetPath<TemplateProps> = () => {
  return `locator`;
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = () => {
  return {
    title: "Turtlehead Tacos Locations",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

const searcher = provideHeadless({
  apiKey: import.meta.env.YEXT_PUBLIC_SEARCH_API_KEY,
  // make sure your experience key matches what you see in the platform        
  experienceKey: "turtlehead-tacos-locator",
  locale: "en_GB",
  endpoints: SandboxEndpoints,
  verticalKey: "locations",
});

const Locator: Template<TemplateRenderProps> = () => {
  return (
    <>
    <PageLayout>
      <SearchHeadlessProvider searcher={searcher}>
        <div className="max-w-7xl mx-auto px-4">
          {/* <FilterSearch
            placeholder="Find Locations Near You"
            searchFields={[
              {
                entityType: "location",
                fieldApiName: "builtin.location",
              },
            ]}
            
          /> */}
             <StoreLocator/>
           
        </div>
      </SearchHeadlessProvider>
    </PageLayout>
    </>
  );
};

export default Locator;