import React, { lazy } from 'react'
const StateHealth = lazy(() => import('../state-health'))
import { data } from '../../data/data.ts'

interface InterfaceResults { }

const Results: React.FC<InterfaceResults> = () => {
  return (
    <div className='bg-white shadow-lg 2xl:w-[760px] rounded-3xl flex 2xl:flex-row sm:flex-col sm:w-full sm:h-full'>
      <section className='duration-500 bg-gradient-to-t from-[var(--azul)] via-[#4d38f1] to-[var(--morado)] bg-size-200 bg-pos-0 w-[380px] rounded-3xl h-[500px] p-6 flex flex-col items-center gap-5'>
        <header className='text-center text-gray-300 font-[HankenGroteskBold]'>
          <h1 className="text-2xl m-5">Your Result</h1>
          <div className='bg-gradient-to-t to-[var(--moradoOscuro)] from-[#4d38f1] w-[200px] h-[200px] rounded-full flex items-center flex-col justify-center '>
            <span className='text-[#fcfcfe] text-6xl'>76</span>
            <blockquote className='text-[#9184fd]'>of 100</blockquote>
          </div>
        </header>
        <footer className='text-center'>
          <h1 className='text-[#fcfcfe] text-3xl font-[HankenGroteskBold]'>Great</h1>
          <p className='font-[HankenStatic] text-lg text-gray-300 py-6'>You scored higher than 65% of the people who hav e taken these test.</p>
        </footer>
      </section>
      <section className='p-6 2xl:w-[50%] sm:w-[100%] '>
        <h1 className='text-2xl p-5 font-[HankenGroteskBold] text-[var(--negro)]'>Summary</h1>
        <div className='font-[HankenGroteskBold] flex flex-col gap-4'>
          {
            data.map((element, i) => {
              const { bgcolor, colorText, score, icon, category } = element
              return (
                <StateHealth color={bgcolor} colorText={colorText} key={i}>
                  <span className='flex-[80%] flex gap-2'>
                    <img src={icon} alt='icon' />
                    {category}
                  </span>
                  <span className='text-[var(--negro)] font-[HankenGroteskExtraBold]'>
                    {score}
                    <span className='font-[HankenGroteskBold] text-gray-400'> / 100</span>
                  </span>
                </StateHealth>
              )
            })
          }
          <button className='bg-[var(--negro)] text-white rounded-3xl p-3 mt-4'>Continue</button>
        </div>
      </section>
    </div>
  )
}

export default Results