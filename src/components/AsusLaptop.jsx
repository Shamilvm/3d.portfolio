import React, { useEffect, useRef } from "react";
import { useGLTF, useVideoTexture } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const AsusLaptop = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/models/asus_rog_zephyrus_g15.glb"
  );
  const txt = useVideoTexture(
    props.texture ? props.texture : "/textures/project/project1.mp4"
  );
  useEffect(() => {
    if (txt) {
      txt.flipY = false;
    }
  }, [txt]);

  useGSAP(() => {
    gsap.from([0, -0.1, 0], {
      y: Math.PI / 2,
      duration: 1,
      ease: "power3.out",
    });
  }, [txt]);

  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.001, 0]} rotation={[0.029, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.InteriorBlack}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.IndicatorLights}
        />
      </group>
      <group position={[-0.001, -0.006, -0.022]} rotation={[0.029, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_29.geometry}
          material={materials.LaptopSurface}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_30.geometry}
          material={materials.LaptopSurface}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_31.geometry}
          material={materials.LaptopSurface}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_32.geometry}
          material={materials.Painted}
        />
      </group>
      <group position={[0, 0.103, -0.162]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_46.geometry}
          material={materials.LaptopSurface}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_47.geometry}
          material={materials.SurfaceMetal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_48.geometry}
          material={materials.Painted}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_50.geometry}
          material={materials.InteriorBlack}
          rotation={[-1.927, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_52.geometry}
          material={materials.Logo}
          rotation={[-1.927, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_54.geometry}
          material={materials.Screen}
          rotation={[-1.927, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_56.geometry}
          material={materials.LaptopSurface}
          rotation={[-1.927, 0, 0]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_7.geometry}
        material={materials.InteriorBlack}
        position={[0, 0.001, 0]}
        rotation={[0.029, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_9.geometry}
        material={materials.InteriorBlack}
        position={[0, 0.001, 0]}
        rotation={[0.029, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_11.geometry}
        material={materials.InteriorBlack}
        position={[0, 0.001, 0]}
        rotation={[0.029, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_13.geometry}
        material={materials.InteriorBlack}
        position={[-0.17, 0.002, 0.036]}
        rotation={[0.029, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_15.geometry}
        material={materials.InteriorBlack}
        position={[0, 0.002, 0]}
        rotation={[0.029, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_17.geometry}
        material={materials.InteriorBlack}
        position={[0, -0.001, 0.091]}
        rotation={[-3.113, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_19.geometry}
        material={materials.InteriorBlack}
        position={[0, 0.001, 0]}
        rotation={[0.029, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_21.geometry}
        material={materials.InteriorBlack}
        position={[0, 0.002, -0.015]}
        rotation={[0.029, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_23.geometry}
        material={materials.InteriorBlack}
        position={[0, 0.001, 0]}
        rotation={[0.029, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_25.geometry}
        material={materials.InteriorBlack}
        position={[0, 0.001, 0]}
        rotation={[0.029, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_27.geometry}
        material={materials.material_0}
        position={[0.001, 0.004, 0]}
        rotation={[0.029, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_34.geometry}
        material={materials.InteriorBlack}
        position={[0, -0.001, -0.008]}
        rotation={[0.029, 0, 0]}
        scale={0.025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_36.geometry}
        material={materials.LaptopSurface}
        position={[0, 0.001, 0]}
        rotation={[0.029, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_38.geometry}
        material={materials.SurfaceMetal}
        position={[0, 0.001, 0]}
        rotation={[0.029, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_40.geometry}
        material={materials.SurfaceMetal}
        position={[0, 0.001, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_42.geometry}
        material={materials.SurfaceMetal}
        position={[0, 0.001, 0]}
        rotation={[0.029, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_44.geometry}
        material={materials.Keyboard}
        position={[-0.002, 0.007, -0.044]}
        rotation={[0.029, 0, 0]}
      />
    </group>
  );
};

useGLTF.preload("/models/asus_rog_zephyrus_g15.glb");

export default AsusLaptop;
