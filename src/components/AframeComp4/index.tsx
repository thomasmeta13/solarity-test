import { useEffect, useState } from 'react'


export default function AframeComp3 () {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    require('aframe/dist/aframe-master.js')
    setMounted(true)
  }, [])

  if (mounted) {
    return (
      <a-scene arjs='' embedded>
        <a-entity camera />
        <a-assets>
          <a-asset-item id="tio" src="/orb/scene.gltf" ></a-asset-item>
        </a-assets>

        <a-entity camera />
        <a-entity rotation="0 -105 0">
            <a-gltf-model src="#tio" scale="1 1 1" position="-3 1.5 1 "  scale="1 1 1" rotation="0 0 0"
            animation__rot="property:rotation;
            dur:5000;
            to:0 360 0;
            loop: true;
            easing:linear;">
            </a-gltf-model>
        </a-entity>
        <a-sky src=""></a-sky>
      </a-scene>
    )
  }
  return (
    <div>load...</div>
  )
}