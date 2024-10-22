import React, { useContext, useRef, useEffect, Suspense,useState } from "react";
import { StyleContext } from "./StyleProvider";
import { Canvas, useThree,useFrame } from '@react-three/fiber';
import { ContactShadows, Environment, OrbitControls,useGLTF } from '@react-three/drei';
import { TextureLoader } from 'three';
import * as THREE from 'three';
import { supabase } from "../Database/supabaseClient";

export const TrousersModel = () => {
  const { sharedState } = useContext(StyleContext);
  const [images, setFabricImages] = useState([]);

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
          .from('Trouser%20Fabric') // Ensure this matches your bucket name exactly
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

        const baseUrl = 'https://krvevkxigsdnikvakxjt.supabase.co/storage/v1/object/public/Trouser%20Fabric/';

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
  useEffect(()=>{
    console.log("Changes::",sharedState.BottomStyle)
  },[sharedState]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
     
     <Canvas shadows dpr={[1, 2]} >
          <directionalLight
            position={[0, -1000, -1000]}
            intensity={0.1}

          />
          <directionalLight
            position={[0, 1000, 1000]}
            intensity={0.1}
          />
        <Scene nodes={useGLTF("pra1.glb").nodes} fabricMaterials={fabricMaterials} sharedState={sharedState} />
      </Canvas>
    </Suspense>
  );
};

const Scene = ({ nodes, fabricMaterials, sharedState }) => {
  const { camera } = useThree();
  const group = useRef();

  useEffect(() => {
    camera.position.set(0, 0, 50)
    camera.rotation.set(0,0,20)
    camera.fov = 70;
    camera.updateProjectionMatrix();
  }, [camera]);

  return (
    <>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <directionalLight position={[0, -100, -100]} intensity={1} />
      <directionalLight position={[0, 300, 100]} intensity={1} />
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
      <group ref={group}>
        <mesh castShadow receiveShadow>
        <mesh
            
            material={fabricMaterials[sharedState.Fabricindex]}
            geometry={nodes.trouser004.geometry}
          />
                    <mesh
            
            material={fabricMaterials[sharedState.Fabricindex]}
            geometry={nodes.trouser004_1.geometry}
          />
       <mesh
            
            material={fabricMaterials[sharedState.Fabricindex]}
            geometry={nodes.leftbackhalf.geometry}
            visible={sharedState.BackPocketStyle[0]}
          />
          <mesh
            
            material={fabricMaterials[sharedState.Fabricindex]}
            geometry={nodes.rightbackhalf.geometry}
            visible={sharedState.BackPocketStyle[1]}
          />
          <mesh
            
            material={fabricMaterials[sharedState.Fabricindex]}
            geometry={nodes.leftcenterback.geometry}
            visible={sharedState.BackPocketStyle[2]}
          />
          <mesh
            
            material={fabricMaterials[sharedState.Fabricindex]}
            geometry={nodes.rightcenterback.geometry}
            visible={sharedState.BackPocketStyle[3]}
          />
          <mesh
            
            material={fabricMaterials[sharedState.Fabricindex]}
            geometry={nodes.leftnocenterback.geometry}
            visible={sharedState.BackPocketStyle[4]}
          />
          <mesh
            
            material={fabricMaterials[sharedState.Fabricindex]}
            geometry={nodes.rightnocenterback.geometry}
            visible={sharedState.BackPocketStyle[5]}
          />
          <mesh
            
            material={fabricMaterials[sharedState.Fabricindex]}
            geometry={nodes.ticketleft.geometry}
            visible={sharedState.TicketPocketStyle[0]}
          />
          <mesh
            
            material={fabricMaterials[sharedState.Fabricindex]}
            geometry={nodes.ticketleft001.geometry}
            visible={sharedState.TicketPocketStyle[1]}
          />
          <mesh
            
            material={fabricMaterials[sharedState.Fabricindex]}
            geometry={nodes.ticketright.geometry}
            visible={sharedState.TicketPocketStyle[0]}
          />
          <mesh
            
            material={fabricMaterials[sharedState.Fabricindex]}
            geometry={nodes.ticketright001.geometry}
            visible={sharedState.TicketPocketStyle[1]}
          />
           <mesh
            
            material={fabricMaterials[sharedState.Fabricindex]}
            geometry={nodes.trouser003.geometry}
            visible={sharedState.BottomStyle[0]}
          />
          <mesh
            
            material={fabricMaterials[sharedState.Fabricindex]}
            geometry={nodes.trouser003_1.geometry}
            visible={sharedState.BottomStyle[0]}
          />
          <mesh
            
            material={fabricMaterials[sharedState.Fabricindex]}
            geometry={nodes.trouser002.geometry}
            visible={sharedState.BottomStyle[1]}
          />
          <mesh
            
            material={fabricMaterials[sharedState.Fabricindex]}
            geometry={nodes.trouser002_1.geometry}
            visible={sharedState.BottomStyle[1]}
          />      
          <mesh
            
            material={fabricMaterials[sharedState.Fabricindex]}
            geometry={nodes.trouser001.geometry}
            visible={sharedState.BottomStyle[2]}
          />          
          <mesh
            
            material={fabricMaterials[sharedState.Fabricindex]}
            geometry={nodes.trouser001_1.geometry}
            visible={sharedState.BottomStyle[2]}
          />

          <mesh
            
            material={fabricMaterials[sharedState.Fabricindex]}
            geometry={nodes.cuff.geometry}
            visible={sharedState.BottomStyle[3]}
          />
          <mesh
            
            material={fabricMaterials[sharedState.Fabricindex]}
            geometry={nodes.cuff_1.geometry}
            visible={sharedState.BottomStyle[3]}
          />
          <mesh
            
            material={fabricMaterials[sharedState.Fabricindex]}
            geometry={nodes.cuff1.geometry}
            visible={sharedState.BottomStyle[4]}
          />
          <mesh
            
            material={fabricMaterials[sharedState.Fabricindex]}
            geometry={nodes.cuff1_1.geometry}
            visible={sharedState.BottomStyle[4]}
          />
          <mesh
            
            material={fabricMaterials[sharedState.Fabricindex]}
            geometry={nodes.cuff2.geometry}
            visible={sharedState.BottomStyle[5]}
          />
          <mesh
            
            material={fabricMaterials[sharedState.Fabricindex]}
            geometry={nodes.cuff2_1.geometry}
            visible={sharedState.BottomStyle[5]}
          />
        </mesh>
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
