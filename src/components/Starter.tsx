import { Floating, StandardReality, Model, Spinning } from "spacesvr";

import { Box3, Box3Helper, Vector3 } from "three";
import { useMemo, useRef } from "react";
import TransparentFloor from "./TransparentFloor";
import { Sky } from "@react-three/drei";

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
			<Model scale={0.10} position={[-0.05, 0.75, 0.04]} src='./product1.glb' rotation-y={2.0} />

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
