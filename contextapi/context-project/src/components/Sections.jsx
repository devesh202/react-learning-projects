import React from 'react'
import Section1 from './Section1'
import Section2 from './Section2'

const Sections = () => {
  return (
    <div className='h-221 flex justify-between bg-zinc-900'>
      <Section1/>
      <Section2/>
    </div>
  )
}

export default Sections