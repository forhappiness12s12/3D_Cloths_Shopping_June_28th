import React, { useState, useEffect, useContext } from "react";
import { supabase } from "../Database/supabaseClient";
import { StyleContext } from "./StyleProvider";

export const TrousersUIfabric = () => {
  
  const { sharedState, setSharedState } = useContext(StyleContext);
  const [fabricImages, setFabricImages] = useState([]);
  useEffect(() => {
    const fetchImages = async () => {
      try {
        console.log('Fetching files from the bucket...');
        const { data, error } = await supabase
          .storage
          .from('Trouser%20Fabric')
          .list('', { limit: 100 });

        if (error) {
          console.error('Error listing files:', error);
          return;
        }

        if (!data || data.length === 0) {
          console.log('No files found in the bucket.');
          return;
        }

        console.log('Files found:', data);

        const baseUrl = 'https://krvevkxigsdnikvakxjt.supabase.co/storage/v1/object/public/Trouser%20Fabric/';

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

  const selectFabric = (index) => {
    setSharedState({ Fabricindex: index });
  };

  return (
    <div className="bg-black ">
      <article className="text-white text-[40px] font-[F37Judge]">TROUSERS</article>
      <article className="text-white font-[AcuminVariableConcept] text-[18px] mt-[26px] mb-[-10px]">FABRIC OPTION</article>\
      
      <div className="bg-black overflow-x-auto space-x-[7.64px]">
        {fabricImages.map((imageUrl, index) => (
          <button key={index} onClick={() => selectFabric(index)}>
            <img src={imageUrl}
             alt={`Fabric ${index + 1}`}
              className={`h-[40.91px] w-[36.04px] ${sharedState.Fabricindex === index ? 'border-2 border-yellow-600' : ''}`}
             />
          </button>
        ))}
      </div>
    </div>
  );
};
