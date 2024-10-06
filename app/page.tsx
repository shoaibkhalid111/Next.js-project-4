import React from 'react'
import Card from './components/card/Card'

const Home = () => {
  return (
    <>
      <div className="heading text-4xl text-center pt-10 pb-7 text-black underline bg-blue-400 rounded-md">
        <h1>STUDENT IDENTIFICATION CARD</h1>
      </div>
      <div className='flex mt-52 h-full w-full fix'>
        <Card name='Sahil'
          age={21}
          rollNumber={1111}
          day='Monday'
          time='2 To 5'
          cardBtnText='Comments' />
        <Card name='Shoaib'
          age={22}
          rollNumber={2222}
          day='Monday' time='2 To 5'
          cardBtnText='Comments' />
        <Card name='Hassan'
          age={20}
          rollNumber={3333}
          day='Monday'
          time='2 To 5'
          cardBtnText='Comments' />
      </div>
    </>
  )
}

export default Home