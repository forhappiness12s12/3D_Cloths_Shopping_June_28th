import React, { useContext, useRef, useEffect, Suspense, useState } from "react";
import { StyleContext } from "./StyleProviderJoggers";
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { ContactShadows, Environment, OrbitControls, useGLTF } from '@react-three/drei';
import { TextureLoader } from 'three';
import * as THREE from 'three';
import { supabase } from "../Database/supabaseClient";

export const JoggersModel = () => {
  const { sharedState } = useContext(StyleContext);

  // Function to import all images
  function importAll(r) {
    return r.keys().map(r);
  }
  const [FabricImages, setFabricImages] = useState([])
  useEffect(() => {
    const fetchImages = async () => {
      try {
        console.log('Fetching files from the bucket...');
        const { data, error } = await supabase
          .storage
          .from('Jogger%20Fabric') // Ensure this matches your bucket name exactly
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

        const baseUrl = 'https://krvevkxigsdnikvakxjt.supabase.co/storage/v1/object/public/Jogger%20Fabric/';

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

  const images = FabricImages;
  const textureLoader = new TextureLoader();

  // Load textures
  const textures = images.map(image => {
    const texture = textureLoader.load(image);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(10, 10);
    return texture;
  });

  // Create fabric materials
  const fabricMaterials = textures.map(texture => new THREE.MeshStandardMaterial({ map: texture }));
  useEffect(() => {

  }, [sharedState]);
  const Modelname = ['loosefitrope.glb', 'loosefitbottomcuff.glb', 'loosefitfrontpocket.glb', 'loosefitjoggers.glb', 'loosefitbackpocket.glb', 'skinnyfitrope.glb',
    'skinnyfitbottomcuff.glb', 'skinnyfitfrontpocket.glb', 'skinnyfitjoggers.glb','joggerhem.glb',
  ]

  return (
    <Suspense fallback={<div>Loading...</div>}>
        <Canvas>
          <Scene nodes={useGLTF(Modelname[sharedState.Change_Model_Index]).nodes} fabricMaterials={fabricMaterials} sharedState={sharedState} />
        </Canvas>
    </Suspense>
  );
};

const Scene = ({ nodes, fabricMaterials, sharedState }) => {
  const { camera } = useThree();
  const group = useRef();

  useEffect(() => {
    console.log("jogger nodes:", nodes)
    camera.position.set(0, 0, 7)
    camera.rotation.set(0, 0, 10)
    camera.fov = 15;
    camera.updateProjectionMatrix();
  }, [camera]);
  // Automatic rotation
  useFrame(() => {
    // group.current.rotation.y += 0.01;
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <directionalLight position={[0, -100, -100]} intensity={5} />
      <directionalLight position={[0, 300, 100]} intensity={3} />
      <directionalLight position={[0, 0, 0]} intensity={3} />
      <Environment preset="city" />
      <ContactShadows
        rotation-x={Math.PI / 2}
        position={[0, -0.8, 0]}
        opacity={0.25}
        width={10}
        height={10}
        blur={1.5}
        far={0.8}
      />
      <group ref={group} dispose={null}>
        {Object.keys(nodes).map(key => (
          <mesh
            key={key}
            geometry={nodes[key].geometry}
            material={fabricMaterials[sharedState.Fabricindex]}
          />
        ))}
      </group>
      <ContactShadows
        rotation-x={Math.PI / 2}
        position={[0, -0.8, 0]}
        opacity={0.25}
        width={10}
        height={10}
        blur={1.5}
        far={0.8}
      />
      <OrbitControls />
    </>
  );
};
