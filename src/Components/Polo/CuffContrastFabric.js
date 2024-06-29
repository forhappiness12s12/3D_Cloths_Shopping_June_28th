import React from "react";
import { useState, useContext,useEffect} from "react";
import { StyleContext } from "./StyleProviderPolo";
import { supabase } from "../Database/supabaseClient";


export const CuffContrastFabricUI = () => {
  function importAll(r) {
    return r.keys().map(r);
  }
  const [Fabricimages,setFabricImages]=useState([])
  useEffect(() => {
    const fetchImages = async () => {
      try {
        console.log('Fetching files from the bucket...');
        const { data, error } = await supabase
          .storage
          .from('Polo%20Cuff%20Fabric') // Ensure this matches your bucket name exactly
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

        const baseUrl = 'https://krvevkxigsdnikvakxjt.supabase.co/storage/v1/object/public/Polo%20Cuff%20Fabric/';

        // Manually construct the public URLs
        const imageUrls = data.map((file) => {
          const publicURL = `${baseUrl}${file.name}`;
          console.log(`Public URL for ${file.name}: ${publicURL}`);
          return publicURL;
        });

        setFabricImages(imageUrls);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);
  
  const { sharedState, setSharedState } = useContext(StyleContext);


  const selectFabric = (index) => {
    setSharedState({ CuffFabricIndex: index }); //operation for seleting fabric
  };

  return (
    
    <div className="mt-2">
    <article className="text-white text-[15px] font-[AcuminVariable]">Cuff Fabric  Option</article>
    <div className="flex flex-row  bg-[#15171F] overflow-x-auto gap-2">
      {Fabricimages.map((img, index) => (
            <button key={index} onClick={() => selectFabric(index)}  >
              <img src={img} alt={`Image ${index + 1}`}
              className={`h-[40.91px] w-[36.04px] ${sharedState.CuffFabricIndex === index ? 'border-2 border-yellow-600' : ''}`} />
            </button>
          ))}
      </div>
    </div>


  );
};
