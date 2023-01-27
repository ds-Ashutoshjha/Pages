
import {
    GetHeadConfig,
    GetPath,
    GetRedirects,
    HeadConfig,
    Template,
    TemplateConfig,
    TemplateProps,
    TemplateRenderProps,
  } from "@yext/pages";
  import * as React from "react";
   import Banner from "../components/locationDetails/banner";
  // import Details from "../components/details";
  import Hours from "../components/commons/hours";
  // import List from "../components/list";
  import PageLayout from "../components/layouts/PageLayout";
  import StaticMap from "../components/locationDetails/StaticMap";
  // import Favicon from "../public/yext-favicon.ico";
  
  import "../index.css";
  
  /**
   * Required when Knowledge Graph data is used for a template.
   */
  export const config: TemplateConfig = {
    stream: {
      $id: "my-stream-id-1",
      // Specifies the exact data that each generated document will contain. This data is passed in
      // directly as props to the default exported function.
      fields: [
        "id",
        "uid",
        "meta",
        "name",
        "address",
        "mainPhone",
        "description",
        "yearEstablished",
        "roomCount",
        "floorCount",
        "emails",
        "menuUrl",
        "websiteUrl",
        "mobilePhone",
        "photoGallery",
        "roomService",
        "spa",
        "salon",
        "massage",
        "doctorOnCall",
        "parking",
        "hours",
        "slug",
        "geocodedCoordinate",
        "services",
      ],
      // Defines the scope of entities that qualify for this stream.
      filter: {
        entityTypes: ["location"],
      },
      // The entity language profiles that documents will be generated for.
      localization: {
        locales: ["en"],
        primary: false,
      },
    },
  };
  
  /**
   * Defines the path that the generated file will live at for production.
   *
   * NOTE: This currently has no impact on the local dev path. Local dev urls currently
   * take on the form: featureName/entityId
   */
  export const getPath: GetPath<TemplateProps> = ({ document }) => {
    return document.slug
      ? document.slug
  
      : `-${document.id.toString()}`;
  };
  
  /**
   * Defines a list of paths which will redirect to the path created by getPath.
   *
   * NOTE: This currently has no impact on the local dev path. Redirects will be setup on
   * a new deploy.
   */
  export const getRedirects: GetRedirects<TemplateProps> = ({ document }) => {
    return [`index-old/${document.id.toString()}`];
  };
  
  /**
   * This allows the user to define a function which will take in their template
   * data and produce a HeadConfig object. When the site is generated, the HeadConfig
   * will be used to generate the inner contents of the HTML document's <head> tag.
   * This can include the title, meta tags, script tags, etc.
   */
  export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
    relativePrefixToRoot,
    path,
    document,
  }): HeadConfig => {
    return {
      title: document.name,
      charset: "UTF-8",
      viewport: "width=device-width, initial-scale=1",
      tags: [
        {
          type: "meta",
          attributes: {
            name: "description",
            content: document.description,
          },
        },
        {
          type: "link",
          attributes: {
            rel: 'icon',
            type: 'image/x-icon',
            // href: Favicon
          },
        }
      ],
    };
  };
  
  
  const Location: Template<TemplateRenderProps> = ({
    relativePrefixToRoot,
    path,
    document,
  }) => {
    const {
      _site,
      name,
      address,
      mainPhone,
      description,
      yearEstablished,
      roomCount,
      floorCount,
      emails,
      menuUrl,
      websiteUrl,
      mobilePhone,
      photoGallery,
      roomService,
      spa,
      salon,
      massage,
      doctorOnCall,
      parking,
      openTime,
      hours,
      slug,
      geocodedCoordinate,
      services,
    } = document;
  
  
    const images = photoGallery?.map((img: any) => {
      return <img src={img?.image?.url} />
    })
  
    return (
      <>
  
  
        {<PageLayout _site={_site}>
  
          <Banner name={name} address={address} imgs={images} />
          <div id="header" className="header-nav"></div>
          <div className="container header-content"></div>
          <div className="header-content-left"></div>
          <a className="button" href="#"><span className="is-hidden-touch">Find a restaurant</span></a>

          {/* <div class="header-content-middle"><a className="logo" href="/"><img class="" src="/src/images/Prezzo_Logo_RGB_OffWhite.png" alt="Prezzo"></a></div> */}


          <div className="centered-container">
            <div className="section">
              <div className="grid grid-cols-2 gap-x-10 gap-y-10">
                <div className="bg-gray-100 p-2">
                  {/* <Details address={address} phone={mainPhone}></Details>
                  {services && <List list={services}></List>} */}
                </div>
                <div className="bg-gray-100 p-2">
                  {hours && <Hours title={"Restaurant Hours"} hours={hours} />}
                </div>
                {geocodedCoordinate && (
                  <StaticMap
                    latitude={geocodedCoordinate.latitude}
                    longitude={geocodedCoordinate.longitude}
                  ></StaticMap>
                )}
                <div>{images}</div>
                <div className="bg-gray-100 p-2">
                  <div className="text-xl font-semibold">{`About ${name}`}</div>
                  <p className="pt-4">{description}</p>
                </div>
              </div>
            </div>
          </div>
  
          <div>
            <p><h1><b>Some Details About the Hotel Taj Palace</b></h1></p>
            <br></br>
  
          <p><b>Year Established</b>-{yearEstablished}</p>
           <p><b>Room Count</b>-{roomCount}</p>
          <p> <b>Floor Count</b>- {floorCount}</p>
    
          <p><b>You can contact us on our Email Id</b>-{emails}</p>
            <br></br>
            <p><b>Some Facilities available here</b></p>
            <p><b>Spa</b>-{spa}</p>
            <p><b>Salon</b>-{salon}</p>
            <p><b>DoctorOnCall</b> -{doctorOnCall}</p>
            <p><b>Parking</b>-{parking}</p>  
          </div>
        </PageLayout>}
      </>
    );
  };
  
  export default Location;
  