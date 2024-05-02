import { Spinning, Floating, StandardReality, Model } from "spacesvr";
// import TransparentFloor from "ideas/TransparentFloor";
import { Cloud, Sky } from '@react-three/drei'
// import { ColorSpaceFragment } from 'three/examples/jsm/shaders/ColorSpaceFragment';
// import { extend, Canvas, useFrame } from "@react-three/fiber";
import { Box3, Box3Helper, Vector3 } from "three";
import { useMemo, useRef } from "react";
import TransparentFloor from "./TransparentFloor";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import * as THREE from 'three'

// extend(THREE)

export default function Starter(): JSX.Element {



	return (
		<StandardReality playerProps={
			{
				pos: [0, 0, 1]
			}
		}>
			<ambientLight intensity={4} />

			<Model src="./vrShowcaseGlassFixed.glb" position-y={0.01} rotation-x={-Math.PI / 2} scale={0.007} />

			{/* <Floating height={0.10} speed={1.5}> */}
			<Model scale={0.10} position={[-0.01, 0.75, -0.05]} src="./product1.glb" />
			{/* </Floating> */}

			<TransparentFloor opacity={1} />
			<Sky distance={45000000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25} />
			{/* <Canvas camera={{ position: [0, 0, 1] }}> */}
			{/* </Canvas> */}

			{/* <Reflector resolution={1024} args={[8, 8]}>
      {(Material, props) => <Material color="#f0f0f0" metalness={0}  normalScale={[2, 2]} />}
    </Reflector> */}
		</StandardReality>
	);
}
