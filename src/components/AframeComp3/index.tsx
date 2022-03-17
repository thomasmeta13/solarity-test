import { useEffect, useState } from 'react'


export default function AframeComp4 () {
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
          <a-asset-item id="bastardo" src="/room/scene.gltf" ></a-asset-item>
        </a-assets>

        <a-entity camera />
        <a-entity rotation="0 -105 0">
            <a-gltf-model src="#bastardo" scale="1 1 1" position="0 -25 0">
            </a-gltf-model>
        </a-entity>
        <a-sky src="https://media.istockphoto.com/videos/abstract-high-tech-background-texture-video-id925324512?s=640x640"></a-sky>
      </a-scene>
    )
  }
  return (
    <div>load...</div>
  )
}