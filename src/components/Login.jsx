import codeant1 from '../assets/codeant1.svg'
import { useState } from 'react'
import github from '../assets/github.svg'
import bitbucket from '../assets/bitbucket.svg'
import azure from '../assets/azure.svg'
import gitlab from '../assets/gitlab.svg'
import key from '../assets/key.svg'

function Login(){

    const [isSaas, setIsSaas] = useState(true)

    const saas = [
        {
            name: 'Github',
            logo: github
        },
        {
            name: 'Bitbucket',
            logo: bitbucket
        },
        {
            name: 'Azure',
            logo: azure
        },
        {
            name: 'Gitlab',
            logo: gitlab
        }
    ]

    const self_hosted = [
        {
            name: 'GitLab',
            logo: gitlab
        },
        {
            name: 'SSO',
            logo: key
        }
    ]
    return(
        <div className="bg-zinc-50 w-1/2 h-screen border-2 flex flex-col justify-center items-center max-md:w-full">
            <div className="h-3/4 border-1 rounded-lg w-11/12 bg-white shadow-md">
                <div className="h-2/5 border-b-2 flex flex-col items-center">
                    <div className='flex h-2/3 flex-col justify-between pt-10 pb-3'>
                    <img src={codeant1} alt="codeant" />
                    <p className='font-semibold text-2xl'>Welcome to CodeAnt AI</p>
                    </div>
                    <div className='my-3 max-md:flex max-md:flex-row max-md:items-center'>
                        <button onClick={()=>setIsSaas(true)} className={`px-36 py-3 rounded-lg font-semibold border-2 max-md:px-0 max-md:w-40 max-md:py-2 ${isSaas ? `bg-blue-500 text-white` : `bg-zinc-50 text-black` }`}>SAAS</button>
                        <button onClick={()=>setIsSaas(false)} className={`px-32 py-3 rounded-lg font-semibold border-2 max-md:px-0 max-md:w-36 max-md:py-2 ${!isSaas ? `bg-blue-500 text-white` : `bg-zinc-50 text-black` }`}>Self Hosted</button>
                    </div>
                </div>
                <div className='flex flex-col items-center my-4'>
                    {isSaas && saas.map((item,index)=>(
                        <a key={index} href='/repository' className="flex w-96 justify-center px-4 py-4 rounded-lg font-semibold border-2 bg-white text-black my-3 hover:scale-105 transition-transform duration-200 max-md:w-56 max-md:py-2 max-md:px-2 max-md:scale-105">
                            <img src={item.logo} alt="github" className='mx-2'/>
                            Sign in with {item.name}
                        </a>
                    ))}
                    {!isSaas && self_hosted.map((item,index)=>(
                        <a key={index} href='/repository' className="flex w-96 justify-center px-4 py-4 rounded-lg font-semibold border-2 bg-white text-black my-3 hover:scale-105 transition-transform duration-200 max-md:w-56 max-md:py-2 max-md:px-2 max-md:scale-105">
                            <img src={item.logo} alt="github" className='mx-2'/>
                            Sign in with {item.name}
                        </a>
                    ))}
                </div>
            </div>
            <p className='mt-3'>By signing up you agree to the <b>Privacy Policy</b>.</p>
        </div>
    )
}

export default Login