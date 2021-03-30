import * as React from 'react'
import styled from 'styled-components'
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'

export default function FramerMotionTransitionFrom() {
  return (
    <Layout>
      <motion.div layoutId="hoge">これ変わるの</motion.div>
    </Layout>
  )
}

const Layout = styled.div`
  background-color: #ddd;
  width: 100vw;
  height: 100vh;
  padding: 20px;
`
