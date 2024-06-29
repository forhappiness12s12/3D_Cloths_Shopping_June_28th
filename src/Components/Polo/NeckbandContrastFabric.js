import React from "react";
import { useState, useContext,useEffect } from "react";
import { StyleContext } from "./StyleProviderPolo";
import { supabase } from "../Database/supabaseClient";


export const NeckbandContrastFabricUI = () => {
  function importAll(r) {
    return r.keys().map(r);
  }
  const [Fabricimages,setFabricImages1]=useState([])
    useEffect(() => {
        const fetchImages3 = async () => {
          try {
            console.log('Fetching files from the bucket...');
            const { data, error } = await supabase
              .storage
              .from('Polo%20Neckband%20Fabric') // Ensure this matches your bucket name exactly
              .list('', { limit: 100 }); // Adjust the limit as needed
    
            if (error) {
              console.error('Error listing files:', error);
              return;
            }
    
            if (!data || data.length === 0) {
              console.log('No files found in the bucket.');
              return;
            }
    
            console.log('Files found:', data);
    
            const baseUrl = 'https://krvevkxigsdnikvakxjt.supabase.co/storage/v1/object/public/Polo%20Neckband%20Fabric/';
    
            // Manually construct the public URLs
            const imageUrls = data.map((file) => {
              const publicURL = `${baseUrl}${file.name}`;
              console.log(`Public URL for ${file.name}: ${publicURL}`);
              return publicURL;
            });
    
            setFabricImages1(imageUrls);
          } catch (error) {
            console.error('Error fetching images:', error);
          }
        };
    
        fetchImages3();
      }, []);
  const { sharedState, setSharedState } = useContext(StyleContext);


  const selectFabric = (index) => {
    setSharedState({ NeckFabricIndex: index }); //operation for seleting fabric
    console.log("neckfabricindex:;",sharedState.NeckFabricIndex)
  };

  return (
    
    <div className="mt-4">
    <article className="text-white text-[15px] font-[AcuminVariable] mt-2">Neckband Fabric  Option</article>
    <div className="flex flex-row  bg-[#15171F] overflow-x-auto gap-2">

        {Fabricimages.map((img, index) => (
          <button key={index} onClick={() => selectFabric(index)}  >
            <img src={img} alt={`Image ${index + 1}`}
            className={`h-[40.91px] w-[36.04px] ${sharedState.NeckFabricIndex === index ? 'border-2 border-yellow-600' : ''}`} />
          <div className="mr-26"></div>
          </button>
        ))}
      </div>
    </div>


  );
};
