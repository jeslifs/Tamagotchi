import * as THREE from 'three'
import { useEffect, useMemo, useRef, useState } from 'react'
import Vertex from '../shaders/vertex.glsl'
import happymouthFragment from '../shaders/happy/mouth/fragment.glsl'
import happyeyeFragment from '../shaders/happy/eyes/fragment.glsl'
import hungryeyeFragment from '../shaders/hungry/eyes/fragment.glsl'
import hungrymouthFragment from '../shaders/hungry/mouth/fragment.glsl'
import sadeyeFragment from '../shaders/sad/eyes/fragment.glsl'
import sadmouthFragment from '../shaders/sad/mouth/fragment.glsl'
import { useFrame } from '@react-three/fiber'

// BoxGeomtry
const planeGeometry = new THREE.PlaneGeometry(1, 1, 1)
const sphereGeometry = new THREE.SphereGeometry(1, 6, 6)

// materials
const sphereHappyMaterial = new THREE.MeshStandardMaterial({ color: '#ede472', name: 'happy' })
const sphereSadMaterial = new THREE.MeshStandardMaterial({ color: '#86bfe7', name: 'sad' })
const sphereHungryMaterial = new THREE.MeshStandardMaterial({ color: '#c89eca', name: 'hungry' })


// console.log('ckeck render pet')


/**
 * Sad
 */
export const SadEye = ( props ) => {

    useEffect(() =>{

        return() =>{

        }

    }, [ ])

    return(
        <mesh
            { ...props }
            // position = { [-0.3, 0.3, 0.97] }
            scale = { 0.3 }
            geometry  = { planeGeometry }
            // material = { planeMaterial }
        >
            <shaderMaterial vertexShader = { Vertex } fragmentShader = { sadeyeFragment }/>
            {/* <planeGeometry /> */}
            {/* <meshBasicMaterial color = 'black'/> */}
        </mesh>
    )
}

export const SadMouth = () => {

    useEffect(() =>{

        return() =>{

        }

    }, [ ])

    return(
        <mesh 
            position = { [0, -0.2, 0.995] }
            scale = { [ 0.9, 0.25, 0 ] }
            geometry  = { planeGeometry }
            // material = { planeMaterial }
        >
            <shaderMaterial vertexShader = { Vertex } fragmentShader = { sadmouthFragment }/>
        </mesh>
    )
}

export const Sad = () => {

    useEffect(() =>{

    }, [])
    
    return(
        <group
            position = { [(Math.random() * 5) * (Math.random() < 0.5 ? -1 : 1), 0.15, (Math.random() * 5) * (Math.random() < 0.5 ? -1 : 1)] }
            scale = { 0.15 }
        >
            <mesh
                castShadow
                material = { sphereSadMaterial }
                geometry = { sphereGeometry }
                
            />
            <group scale = { 1 } position = {[ 0, 0.15, -0.1]}>
                {/* eyes */}

                {/* left eye */}
                <SadEye position = { [-0.3, 0.3, 0.97] }/>

                {/* right eye */}
                <SadEye position = { [0.3, 0.3, 0.97] }/>

                {/* mouth */}
                <SadMouth />

            </group>
        </group>



    )
}

/**
 * Hungry
 */
export const HungryEye = ( props ) => {

    useEffect(() =>{

        return() =>{

        }

    }, [ ])

    return(
        <mesh
            { ...props }
            // position = { [-0.3, 0.3, 0.97] }
            scale = { 0.3 }
            geometry  = { planeGeometry }
            // material = { planeMaterial }
        >
            <shaderMaterial vertexShader = { Vertex } fragmentShader = { hungryeyeFragment }/>
            {/* <planeGeometry /> */}
            {/* <meshBasicMaterial color = 'black'/> */}
        </mesh>
    )
}

export const HungryMouth = () => {

    useEffect(() =>{

        return() =>{

        }

    }, [ ])

    return(
        <mesh 
            position = { [0, -0.2, 0.995] }
            scale = { [ 0.9, 0.25, 0 ] }
            geometry  = { planeGeometry }
            // material = { planeMaterial }
        >
            <shaderMaterial vertexShader = { Vertex } fragmentShader = { hungrymouthFragment }/>
        </mesh>
    )
}

export const Hungry = () => {

    useEffect(() =>{

    }, [])

    return(
        <group
            position = { [(Math.random() * 5) * (Math.random() < 0.5 ? -1 : 1), 0.15, (Math.random() * 5) * (Math.random() < 0.5 ? -1 : 1)] }
            scale = { 0.15 }
        >
            <mesh
                castShadow
                material = { sphereHungryMaterial }
                geometry = { sphereGeometry }
                
            />
            <group scale = { 1 } position = {[ 0, 0.15, -0.1]}>
                {/* eyes */}

                {/* left eye */}
                <HungryEye position = { [-0.3, 0.3, 0.97] }/>

                {/* right eye */}
                <HungryEye position = { [0.3, 0.3, 0.97] }/>

                {/* mouth */}
                <HungryMouth />

            </group>
        </group>


    )
}

/**
 * Happy face
 */
export const HappyEye = ( props ) => {

    useEffect(() =>{

        return() =>{

        }

    }, [ ])

    return(
        <mesh
            { ...props }
            // position = { [-0.3, 0.3, 0.97] }
            scale = { 0.3 }
            geometry  = { planeGeometry }
            // material = { planeMaterial }
        >
            <shaderMaterial vertexShader = { Vertex } fragmentShader = { happyeyeFragment }/>
            {/* <planeGeometry /> */}
            {/* <meshBasicMaterial color = 'black'/> */}
        </mesh>
    )
}

export const HappyMouth = () => {

    useEffect(() =>{

        return() =>{

        }

    }, [ ])

    return(
        <mesh 
            position = { [0, -0.2, 0.995] }
            scale = { [ 0.9, 0.25, 0 ] }
            geometry  = { planeGeometry }
            // material = { planeMaterial }
        >
            <shaderMaterial vertexShader = { Vertex } fragmentShader = { happymouthFragment }/>
            {/* <planeGeometry args = { [ 3, 1, 1 ] }/> */}
            {/* <meshBasicMaterial color = 'black'/> */}

        </mesh>
    )
}

export const Happy = () => {

    useEffect(() =>{

        return() =>{

        }

    }, [ ])

    return(
        <group
            position = { [(Math.random() * 5) * (Math.random() < 0.5 ? -1 : 1), 0.15, (Math.random() * 5) * (Math.random() < 0.5 ? -1 : 1)] }
            scale = { 0.15 }
        >
            <mesh
                castShadow
                material = { sphereHappyMaterial }
                geometry = { sphereGeometry }
                
            />
            {/* <sphereGeometry args = { [ 1, 6, 6 ] }/> */}
                
            <group scale = { 1 } position = {[ 0, 0.15, -0.1]}>
                {/* eyes */}

                {/* left eye */}
                <HappyEye position = { [-0.3, 0.3, 0.97] }/>

                {/* right eye */}
                <HappyEye position = { [0.3, 0.3, 0.97] }/>

                {/* mouth */}
                <HappyMouth />

            </group>
        </group>



    )
}

export default function Pets({ count = 3, types = [Happy, Sad, Hungry] }) {
    // console.log(count, 'iin face');
    
    const emotions = useMemo(() => {

        const emotions = []
    
        for(let i = 0; i < count; i++)
        {
            const type = types[ Math.floor(Math.random() * types.length) ]
            emotions.push(type)
        }
    
        return emotions
    
    }, [ count ])


    // ref
    const faceGroup = useRef()

    // offset
    const [ timeOffset ] = useState(() => Math.random() * Math.PI * 2)
    
    // animate
    useFrame((state, delta) => {

        const time = state.clock.elapsedTime
        for(const face of faceGroup.current.children)
        {   
            // console.log(face.children[0].material.name)
            // console.log(face.children[0])
            const y =  Math.sin(time + timeOffset)
            // if(face.children[0].material.name === 'happy')
            // {
            //     face.scale.x = .1 + Math.abs( y * 0.08)
            //     // face.scale.y = .1 + Math.abs( y * 0.1)
            //     face.position.y = 0.15 + Math.abs( y * 0.1)
                
                
            // }
            // else if(face.children[0].material.name === 'sad')
            // {
            //     face.scale.y = .1 + Math.abs( y * 0.05 )
            //     face.position.y = 0.15 + Math.abs( y * 0.05)
            // }
            // else
            // {
            //     face.scale.x = .1 + Math.abs( y * 0.03 )
            // }
            face.position.y = 0.15 + Math.abs( y * 0.091)

        }
    })

    useEffect(() => {
        // console.log('called pet once');

        return () => {
            console.log('destroyed');
        }

    }, [ count ])

    return <group ref = {faceGroup} >
        {emotions.map((Faces, index) => <Faces key = { index } count = { count } />)}
    </group>
  
                
            

}


/**
 * Happy face
 */

