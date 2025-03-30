import { useState } from 'react'
import './App.css'
import { Card } from './components'
import {fetchContributions,analyzeLanguages} from './services/githubServices'

function App() {

  const [username, setUsername] = useState('')
  const [userdata, setUserdata] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)


  const fetchGithubUser = async()=>{
    if(!username) return
    
    setLoading(true)
    setError(null)

    try{
      const [userResponse,contributions,percentages] = await Promise.all([
        fetch(`https://api.github.com/users/${username}`),
        fetchContributions(username),
        analyzeLanguages(username)
      ])
      if(!userResponse.ok){
        setError('User not found')
        return 0
      }
      const data = await userResponse.json()
      setUserdata({...data, contributions,percentages})
    }
    catch(error){
      setError(error)
    }
    finally{
      setLoading(false)
    }    
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    fetchGithubUser()
  }

  const resetPage=()=>{
    window.localStorage.clear()
    window.location.reload()
  }

  return (
  <div className={`w-full h-screen bg-amber-100 flex flex-col items-center justify-center p-2`}>
    <button onClick={()=>window.open('https://github.com/so-bhannn/Github-Cards','_blank')} className="absolute top-20 inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg px-4 text-sm font-medium text-black/90 bg-amber-100 backdrop-blur-3xl">
          ⭐ Star on Github 
        </span>
      </button>
      {!userdata && <p className={`text-black/90 text-6xl md:text-7xl text-center font-semibold font-monasans`}>
        Github Cards
      </p>}
      {!userdata && <p className={`text-black/60 text-2xl text-center font-funnelsans py-5 box-border`}>
        Get your personalized Github cards with a single click!
      </p>}
      {!userdata && <form onSubmit={handleSubmit} className={`w-96 max-h-[52px] md:w-xl relative justify-self-center mt-5 gap-1`}>
        <br />
        <input
        type="text"
        placeholder='Enter your Github username...'
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        className={`bg-amber-50 w-full py-3.5 px-4 rounded-xl text-lg font-funnelsans outline-1 focus:outline-1.5 focus:outline-black/70 ${error ? 'outline-red-600' : 'outline-black/10'}`}
        />
        <button
        type='submit'
        disabled={loading}
        className={`absolute right-1 top-7 text-white py-2.5 px-5.5 rounded-lg font-funnelsans text-lg hover:bg-green-500 ${loading ? 'hover:cursor-not-allowed bg-gray-400' : 'hover:cursor-pointer bg-green-600'}`}>
          {!loading ? 'Generate' : 'Loading...'}
        </button>
        {error && <p className='text-red-600 font-semibold text-center mt-3'>
          {error}
        </p>}
      </form>}
      {userdata && <div className='flex flex-col gap-20 items-center'>
        <Card userData={userdata}/>
        <button
        onClick={resetPage}
        className='w-52 text-white py-2.5 px-5.5 rounded-lg font-funnelsans text-lg bg-green-600 hover:bg-green-500 hover:cursor-pointer'>
          Generate More
        </button>
      </div>}
      <footer className='absolute bottom-5 w-full text-center text-2xl font-monasans text-gray-800 font-semibold'>
        Made with 💓 by <a href="#">so-bhannn</a>
      </footer>

    </div>
  )
}

export default App
