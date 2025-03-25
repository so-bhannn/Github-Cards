import './App.css'
import { Card } from './components'

function App() {

  return (
    <div className='w-full h-screen bg-amber-100 flex flex-col items-center justify-center'>
      <p className='text-black/90 text-7xl text-center font-semibold font-monasans hidden'>
        Github Cards
      </p>
      <p className='text-black/60 text-2xl text-center font-funnelsans py-5 box-border hidden'>
        Get your personalized Github cards with a single click!
      </p>
      <div className='w-96 max-h-[52px] md:w-xl relative justify-self-center mt-5 gap-1 hidden'>
        <br />
        <input type="text" placeholder='Enter your Github username...' className='bg-amber-50 w-full py-3.5 px-4 rounded-xl text-lg font-funnelsans outline-1 outline-black/10 focus:outline-1.5 focus:outline-black/70'/>
        <button className='absolute right-1 top-7 text-white bg-green-600 py-2.5 px-5.5 rounded-lg font-funnelsans text-lg hover:cursor-pointer hover:bg-green-500'>Generate</button>
      </div>
      <div className=''>
        <Card/>
      </div>
      <footer className='absolute bottom-5 w-full text-center text-2xl font-monasans text-gray-800 font-semibold'>
        Made with 💓 by <a href="#">so-bhannn</a>
      </footer>

    </div>
  )
}

export default App
