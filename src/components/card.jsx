import { Tooltip as ReactTooltip } from 'react-tooltip';
import languageColors from '../assets/githubColors'
const Card = (userData) =>{
    const getLanguageColor=(language)=>{
        return languageColors[language].color || "#ffffff"
    }
    
    return (
        <div className="relative flex flex-col justify-between w-96 h-48 md:w-3xl md:h-96 bg-amber-50 rounded-xl shadow-2xl box-border overflow-hidden">
            <div id="upper" className="flex pt-2 px-4 md:pt-6 md:px-6">
                <div id="title" className="flex md:h-32 md:min-w-xl box-border items-center">
                    <h1 className="text-2xl md:text-5xl font-monasans">{`${userData.userData.login}/`} <strong>{userData.userData.name}</strong></h1>
                </div>
                <div id="avatar-container" className='shadow-2xl rounded-3xl min-w-20 h-20 md:min-w-36 md:h-36 overflow-hidden'>
                    <img src={userData.userData.avatar_url} alt="Avatar" className="w-full h-full "/>
                </div>
            </div>
            <div id="description" className="pl-4 md:pl-6 pb-2">
                <p className="text-lg font-monasans text-black/60">
                    {userData.userData.bio}
                </p>
            </div>
            <div id="stats" className="flex justify-evenly mb-7">
                <div id="stat" className='flex flex-col items-center'>
                    <div id='details' className='flex items-center'>
                        <i className="fa-solid fa-users text-lg md:text-3xl text-black/70"></i>
                        <span className='text-lg md:text-3xl font-monasans font-semibold px-2'>
                            {userData.userData.followers}
                        </span>
                    </div>
                    <p className='text-md md:text-xl text-black/70'>
                        Followers
                    </p>
                </div>
                <div id="stat" className='flex flex-col items-center'>
                    <div id='details' className='flex items-center'>
                        <i className="fa-solid fa-cubes text-lg md:text-3xl text-black/70"></i>
                        <span className='text-lg md:text-3xl font-monasans font-semibold px-2'>
                            {userData.userData.public_repos}
                        </span>
                    </div>
                    <p className='text-md md:text-xl text-black/70'>
                        Repositories
                    </p>
                </div>
                <div id="stat" className='flex flex-col items-center'>
                    <div id='details' className='flex items-center'>
                        <i className="fa-solid fa-code-branch text-lg md:text-3xl text-black/70"></i>
                        <span className='text-lg md:text-3xl font-monasans font-semibold px-2'>
                            {userData.userData.contributions}
                        </span>
                    </div>
                    <p className='text-md md:text-xl text-black/70'>
                        Contributions
                    </p>
                </div>
            </div>
            {
                userData.userData.percentages && 
                <div id='languages' className='absolute flex min-w-full bottom-0 box-border '>
                    {
                        userData.userData.percentages.map(([language,percentage],index)=>{
                            return(
                                <span
                                key={index}
                                className='h-4'
                                style={{
                                    width:`${percentage}%`,
                                    backgroundColor:getLanguageColor(language)
                                }}
                                data-tooltip-id={language}
                                data-tooltip-content={`${language} : ${percentage}%`}
                                >
                                <ReactTooltip id={language} place="top" type="dark" effect="solid" />
                                </span>
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}

export default Card