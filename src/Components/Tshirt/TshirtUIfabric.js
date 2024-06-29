import React from "react";
import { useState, useContext,useEffect } from "react";
import { StyleContext } from "./StyleproviderTshirt";
import { supabase } from "../Database/supabaseClient";


export const TshirtUIfabric = () => {
  const [Fabricimages, setFabricImages] = useState([]);
  useEffect(() => {
    const fetchImages = async () => {
      try {
        console.log('Fetching files from the bucket...');
        const { data, error } = await supabase
          .storage
          .from('Tshirt%20Fabric')
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

        const baseUrl = 'https://krvevkxigsdnikvakxjt.supabase.co/storage/v1/object/public/Tshirt%20Fabric/';

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
    setSharedState({ Fabricindex: index });
  };

  return (
    <div>
    <article className="text-white text-[40px] font-[F37Judge]">TSHIRT</article>
    <article className="text-white font-[AcuminVariableConcept] text-[18px] mt-[26px]">FABRIC OPTION</article>
      <div className="flex flex-row bg-black overflow-x-auto space-x-[7.64px] mt-[11px]">

        {Fabricimages.map((imageUrl, index) => (
          <button key={index} onClick={() => selectFabric(index)}  >
            <img src={imageUrl} alt={`Image ${index + 1}`} 
              className={`h-[40.91px] w-[36.04px] ${sharedState.Fabricindex === index ? 'border-2 border-yellow-600' : ''}`} />
          </button>
        ))}
      </div>
    </div>


  );
};
