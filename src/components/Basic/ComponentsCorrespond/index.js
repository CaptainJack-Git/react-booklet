import React, { createRef, forwardRef, useImperativeHandle } from 'react'

// 类子组件
class ParentCallChildByClass extends React.Component {
  print() {
    console.log('类子组件中的方法，被父组件调用了')
  }

  render() {
    return <strong>类组件的父组件调用子组件的方法</strong>
  }
}

// 函数子组件
const ParentCallChildByFunction = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    print() {
      console.log('函数子组件中的方法，被父组件调用了')
    }
  }))

  return <strong>函数组件的父组件调用子组件的方法</strong>
})

function ComponentsCorrespond() {
  const classChildRef = createRef()
  const functionChildRef = createRef()

  return (
    <div className="components-correspond">
      <button onClick={() => classChildRef.current.print()}>父组件调用"类子组件"中的方法</button>
      <br />
      <ParentCallChildByClass ref={classChildRef} />
      <br />
      <br />
      <button onClick={() => functionChildRef.current.print()}>父组件调用"函数子组件"中的方法</button>
      <br />
      <ParentCallChildByFunction ref={functionChildRef} />
    </div>
  )
}

export default ComponentsCorrespond
