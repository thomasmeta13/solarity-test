import { useEffect, useState } from 'react'


export default function AframeComp1 () {
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
          <a-asset-item id="bro" src="/original_jetpack/scene.gltf" ></a-asset-item>
        </a-assets>
        <a-marker preset='hiro'>
          <a-entity
            position='0 0 0'
            rotation='0 0 0'
            scale='0.05 0.05 0.05'
            gltf-model='/examples/image-tracking/nft/trex/scene.gltf'
          />
        </a-marker>
        <a-entity camera />
        <a-gltf-model src="#bro" scale="0.1 0.1 0.1" position="0 -3 -60"  rotation="0 90 0"
        animation__rot="property:rotation;
        dur:5000;
        to:0 360 0;
        loop: true;
        easing:linear;">
        </a-gltf-model>
        <a-sky color="#6EBAA7"></a-sky>
      </a-scene>
    )
  }
  return (
    <div>load...</div>
  )
}

