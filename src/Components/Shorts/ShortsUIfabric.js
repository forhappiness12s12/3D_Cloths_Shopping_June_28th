import React from "react";
import { useState, useContext,useEffect } from "react";
import { StyleContext } from "./StyleproviderShorts";
import { supabase } from "../Database/supabaseClient";


export const ShortsUIfabric = () => {
  const [fabricImages, setFabricImages] = useState([]);

  // Function to import all images
  function importAll(r) {
    return r.keys().map(r);
  }
  useEffect(() => {
    
    const fetchImages = async () => {
      try {
        console.log('Fetching files from the bucket...');
        const { data, error } = await supabase
          .storage
          .from('Short%20Fabric') // Ensure this matches your bucket name exactly
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

        const baseUrl = 'https://krvevkxigsdnikvakxjt.supabase.co/storage/v1/object/public/Short%20Fabric/';

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
  const Fabricimages = fabricImages;
  const { sharedState, setSharedState } = useContext(StyleContext);


  const selectFabric = (index) => {
    setSharedState({ Fabricindex: index }); //operation for seleting fabric
  };

  return (
    <div>
      <article className="text-white text-[40px] font-[F37Judge]">SHORTS</article>
      <article className="text-white font-[AcuminVariableConcept] text-[18px] mt-[20px]">FABRIC OPTION</article>
      <div className="flex flex-row  bg-black overflow-x-auto gap-2">

        {Fabricimages.map((img, index) => (
          <button key={index} onClick={() => selectFabric(index)}  >
            <img src={img} alt={`Image ${index + 1}`} 
              className={`h-[40.91px] w-[36.04px] ${sharedState.Fabricindex === index ? 'border-2 border-yellow-600' : ''}`} />
          </button>
        ))}
      </div>
    </div>


  );
};
