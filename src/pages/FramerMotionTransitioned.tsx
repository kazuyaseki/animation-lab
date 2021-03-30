import * as React from 'react'
import styled from 'styled-components'
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'

export default function FramerMotionTransitioned() {
  return (
    <Layout>
      <AnimateSharedLayout>
        <AnimatePresence>
          <motion.div layoutId="hoge">やったー</motion.div>
        </AnimatePresence>
      </AnimateSharedLayout>
    </Layout>
  )
}

const Layout = styled.div`
  background-color: #eee;
  width: 100vw;
  height: 100vh;
  padding: 20px;
`
