import * as React from 'react'
import styled from 'styled-components'
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'

export default function FunWithFramerMotion() {
  const [show, setShow] = React.useState(false)
  const toggle = () => setShow(!show)

  return (
    <Layout>
      <AnimateSharedLayout>
        <AnimatePresence>
          <motion.button layoutId="hoge" onClick={toggle}>
            マジで変わるんですか
          </motion.button>
        </AnimatePresence>
        <motion.ul layout initial={{ borderRadius: 25 }}>
          {items.map((item) => (
            <Item key={item} />
          ))}
        </motion.ul>
        <AnimatePresence>
          {show && (
            <motion.button layoutId="hoge" onClick={toggle}>
              すご過ぎない
            </motion.button>
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </Layout>
  )
}

function Item() {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggleOpen = () => setIsOpen(!isOpen)

  return (
    <motion.li layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
      <motion.div className="avatar" layout />
      <AnimatePresence>{isOpen && <Content />}</AnimatePresence>
    </motion.li>
  )
}

function Content() {
  return (
    <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="row" />
      <div className="row" />
      <div className="row" />
    </motion.div>
  )
}

const items = [0, 1, 2]

const Layout = styled.div`
  ul,
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  ul {
    width: 300px;
    display: flex;
    flex-direction: column;
    background: white;
    padding: 20px;
    border-radius: 25px;
  }

  li {
    background-color: rgba(214, 214, 214, 0.5);
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 20px;
    overflow: hidden;
    cursor: pointer;
  }

  li:last-child {
    margin-bottom: 0px;
  }

  .avatar {
    width: 40px;
    height: 40px;
    background-color: #666;
    border-radius: 20px;
  }

  .row {
    width: 100%;
    height: 8px;
    background-color: #999;
    border-radius: 10px;
    margin-top: 12px;
  }
`
