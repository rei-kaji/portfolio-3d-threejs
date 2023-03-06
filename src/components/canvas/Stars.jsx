import { useState, useRef, Suspense } from "react"; // Importing required functions or components from react library
import { Canvas, useFrame } from "@react-three/fiber"; // Importing 3D graphics related functions and component from third-party package @react-three/fiber
import { Points, PointMaterial, Preload } from "@react-three/drei"; // Importing points and material related functions and component from third-party package @react-three/drei
import * as random from "maath/random/dist/maath-random.esm"; // Importing math related function from third-party package maath/random

const Stars = (props) => {
  // Function Component named Stars with props parameter
  const ref = useRef(); // Creating reference for group with ref
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  ); // Using useState to set up a sphere with Float32 number array of length 5000 with radius 1.2 using random function from maath/random package.

  useFrame((state, delta) => {
    // Using useFrame hook to manipulate positions of points based on state and delta values.
    ref.current.rotation.x -= delta / 10; // Rotating x axis based on delta value by ref object.
    ref.current.rotation.y -= delta / 15; // Rotating y axis based on delta value by ref object.
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      // Grouping set of objects with three axis rotation values in radians.
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        // Points is a component to position spheres in 3D graphics with ref to
        group, sphere positions and other props.
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
        // Material definition for a single point
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  // Function component named StarsCanvas
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      // Div container with classnames and formatting style
      <Canvas camera={{ position: [0, 0, 1] }}>
        // Canvas is a default 3D object where the scene is drawn using camera
        coordinates.
        <Suspense fallback={null}>
          // Suspense coiling to deviate rendering logic to definite conditions
          <Stars /> // calling Stars function in Suspense
        </Suspense>
        <Preload all /> // Fetches urls per asset and detects loading success or
        failure
      </Canvas>
    </div>
  );
};

export default StarsCanvas; // Exporting the default StarsCanvas object which can be imported and used by other files.
