import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Card = (username, repos, followers, contributions) =>{
    return (
        <div className="relative flex flex-col justify-between w-96 h-48 md:w-3xl md:h-96 bg-amber-50 rounded-xl shadow-2xl box-border overflow-hidden">
            <div id="upper" className="flex pt-6 px-6">
                <div id="title" className="flex min-h-32 box-border items-center">
                    <h1 className="text-5xl font-monasans">so-bhannn/ <strong>Sobhan Ghosh</strong></h1>
                </div>
                <div id="avatar-container" className='min-w-40'>
                    <img src="https://avatars.githubusercontent.com/u/156843487?v=4" alt="Avatar" className="rounded-3xl w-36 h-36 "/>
                </div>
            </div>
            <div id="description" className="pl-6">
                <p className="text-2xl font-monasans text-black/60">
                    Building the invisible backbone of the web.
                </p>
            </div>
            <div id="stats" className="flex justify-evenly mb-7">
                <div id="stat" className='flex flex-col items-center'>
                    <div id='details' className='flex items-center'>
                        <i className="fa-solid fa-users text-3xl text-black/70"></i>
                        <span className='text-3xl font-monasans font-semibold p-2'>
                            56
                        </span>
                    </div>
                    <p className='text-xl text-black/70'>
                        Followers
                    </p>
                </div>
                <div id="stat" className='flex flex-col items-center'>
                    <div id='details' className='flex items-center'>
                        <i className="fa-solid fa-cubes text-3xl text-black/70"></i>
                        <span className='text-3xl font-monasans font-semibold p-2'>
                            18
                        </span>
                    </div>
                    <p className='text-xl text-black/70'>
                        Repositories
                    </p>
                </div>
                <div id="stat" className='flex flex-col items-center'>
                    <div id='details' className='flex items-center'>
                        <i className="fa-solid fa-code-branch text-3xl text-black/70"></i>
                        <span className='text-3xl font-monasans font-semibold p-2'>
                            356
                        </span>
                    </div>
                    <p className='text-xl text-black/70'>
                        Contributions
                    </p>
                </div>
            </div>
            <div id='languages' className='absolute flex min-w-full bottom-0 box-border '>
                <span className='w-1/4 h-4 bg-[#e34c26]'></span>
                <span className='w-1/4 h-4 bg-[#0366d6]'></span>
                <span className='w-1/4 h-4 bg-[#f1e05a]'></span>
                <span className='w-1/4 h-4 bg-[#6f42c1]'></span>
            </div>
        </div>
    )
}

export default Card