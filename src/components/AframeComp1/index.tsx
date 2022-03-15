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
          <a-asset-item id="bro" src="/carinoviola.glb"></a-asset-item>
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
        <a-gltf-model src="#bro"></a-gltf-model>
      </a-scene>
    )
  }
  return (
    <div>load...</div>
  )
}

