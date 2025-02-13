import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import * as THREE from 'three'

const materialChain = new THREE.MeshBasicMaterial({color:'#92b6e8'})
const materialScreen = new THREE.MeshBasicMaterial({color:'#000000'})
export default function Amagochi({position, chain}) {

  const baked = useTexture('./amagochi.jpg')
  baked.flipY = false
  const { nodes, materials } = useGLTF('./amagochi.glb')

  return (
    <group position = { position } dispose={null}>
      <mesh
        name="body"
        // castShadow
        // receiveShadow
        geometry={nodes.body.geometry}
        // material={nodes.body.material}
        position={[0.084, 0.146, 0.114]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <meshBasicMaterial map = { baked } />
      </mesh>
      { chain ? <mesh
        name="chain"
        // castShadow
        // receiveShadow
        geometry={nodes.chain.geometry}
        material={materialChain}
        position={[0.084, 0.146, 0.114]}
        rotation={[0, -0.856, 0]}
      /> : null }
      <mesh
        name="leftButton"
        // castShadow
        // receiveShadow
        geometry={nodes.leftButton.geometry}
        // material={nodes.leftButton.material}
        position={[0.084, 0.146, 0.114]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <meshBasicMaterial map = { baked } />
      </mesh>
      <mesh
        name="mainButton"
        // castShadow
        // receiveShadow
        geometry={nodes.mainButton.geometry}
        // material={nodes.mainButton.material}
        position={[0.084, 0.146, 0.114]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <meshBasicMaterial map = { baked } />
      </mesh>
      <mesh
        name="rightButton"
        // castShadow
        // receiveShadow
        geometry={nodes.rightButton.geometry}
        // material={nodes.rightButton.material}
        position={[0.084, 0.146, 0.114]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <meshBasicMaterial map = { baked } />
      </mesh>
      <mesh
        name="crack"
        // castShadow
        // receiveShadow
        geometry={nodes.crack.geometry}
        material={materials.crack}
        position={[0.084, 0.146, 0.114]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        name="screen"
        // castShadow
        // receiveShadow
        geometry={nodes.screen.geometry}
        material={materialScreen}
        position={[0.084, 0.146, 0.114]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('./amagochi.glb')
