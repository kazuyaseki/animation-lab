import * as React from 'react'
import styled from 'styled-components'

export default function GraphicsProgrammingNyumon() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null)

  React.useEffect(() => {
    if (canvasRef.current) {
      const context = canvasRef.current.getContext('2d')

      if (context) {
        context.fillRect(0, 0, 100, 100)

        context.font = 'bold 30px cursive'
        context.fillStyle = '#ff00aa'
        context.shadowBlur = 5
        context.shadowOffsetY = 5
        context.shadowColor = '#666666'
        context.fillText('グラフィックプログラミンぐ', 100, 100)
      }
    }
  }, [])

  return (
    <Layout>
      <canvas ref={canvasRef}></canvas>
    </Layout>
  )
}

const Layout = styled.div``
