import { OrbitControls, Environment } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Tamagochi from './components/Tamagochi'
import Lights from './components/Lights'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import Pets from './components/Pets'
import { useControls } from 'leva'
// console.log('ckeck render exp')


export default function Experience()
{
    // debug
    const { bloomIntensity, bloomLevels, envIntensity, numberOfPets, showPerf, hideChain } = useControls({
        bloomIntensity: { value: 0.08, min: 0, max: 1.5, step: 0.01 },
        bloomLevels: { value: 3, min: 1, max: 9, step: 1 },
        // envIntensity: { value: 0, min: 0, max: 1, step: 0.01 },
        numberOfPets: { value: 1, min: 1, max: 500, step : 1},
        showPerf: false,
        hideChain: true
    })

    return <>

        {/* performance */}
        { showPerf ? <Perf position="top-left" /> : null }

        {/* bgcolor */}
        <color args = { [ '#000033' ] }  attach = 'background'/>
        
        {/* env */}
        {/* <Environment 
            preset='city'
            environmentIntensity = { envIntensity }
            
        ></Environment> */}

        {/* post: bloom */}
        <EffectComposer
            multisampling = { 4 }
        >
            <Bloom 
                luminanceThreshold = { 1 }
                mipmapBlur
                intensity = { bloomIntensity * 4 }
                levels = { bloomLevels }
            />
        </EffectComposer>

        {/* orbit */}
        <OrbitControls 
            makeDefault 
            enablePan = { false }
            maxDistance = { 25 }
            maxPolarAngle = { Math.PI / 2.1 }
        />

        {/* lights */}
        <Lights /> 

        {/* model */}
        <Tamagochi
            position = { [ 0 , 0.36, 0 ] }
            chain = { hideChain }
            // rotation = { [-(Math.PI * 0.5), 0, 0] }
        />

        {/* floor */}
        <mesh receiveShadow rotation = { [ -(Math.PI * 0.5) , 0, 0 ] } scale = { 10 }>
            <planeGeometry />
            <meshStandardMaterial color = '#202a48' />
        </mesh>

        {/* pet */}
        <Pets 
            // position = {[ 2, 5, 2]}
            count = { numberOfPets }
        />

    </>
}