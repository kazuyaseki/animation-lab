import * as React from 'react'
import styled from 'styled-components'

class Canvas2DUtility {
  private canvasElement: HTMLCanvasElement
  public context2d: CanvasRenderingContext2D
  constructor(canvas: HTMLCanvasElement) {
    this.canvasElement = canvas
    this.context2d = canvas.getContext('2d')! // 使うの自分だけなので non-null assertion
  }

  public drawRect(x: number, y: number, width: number, height: number, color: string) {
    if (color) {
      this.context2d.fillStyle = color
    }
    this.context2d.fillRect(x, y, width, height)
  }
}

export default function GraphicsProgrammingNyumon() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null)

  React.useEffect(() => {
    if (canvasRef.current) {
      const util = new Canvas2DUtility(canvasRef.current)
      util.context2d

      if (util.context2d) {
        util.drawRect(100, 100, 100, 200, '#343499')

        util.context2d.font = 'bold 30px cursive'
        util.context2d.fillStyle = '#ff00aa'
        util.context2d.shadowBlur = 5
        util.context2d.shadowOffsetY = 5
        util.context2d.shadowColor = '#666666'
        util.context2d.fillText('グラフィックプログラミンぐ', 100, 100)
      }
    }
  }, [])

  return (
    <Layout>
      <canvas ref={canvasRef}></canvas>
    </Layout>
  )
}

const Layout = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #555;
  color: #f0f0f0;
  text-align: center;
  overflow: hidden;

  > canvas {
    margin: 0 auto;
  }
`
