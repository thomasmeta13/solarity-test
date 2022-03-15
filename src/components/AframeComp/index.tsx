import { useEffect, useState } from 'react'


export default function AframeComp () {
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
          <a-asset-item id="ciao" src="/final.glb"></a-asset-item>
          <a-asset-item id="sky" src="https://t4.ftcdn.net/jpg/02/82/07/95/360_F_282079571_H3KiNvtRoS70EWmh8xZgY2AOER30ubV2.jpg"></a-asset-item>
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
        <a-gltf-model src="#ciao"></a-gltf-model>
        <a-sky src="#sky"/>
      </a-scene>
    )
  }
  return (
    <div>load...</div>
  )
}


