import codeant2 from '../assets/codeant2.svg'
import graph from '../assets/graph.svg'
import { FaArrowUp } from 'react-icons/fa'
import codeant3 from '../assets/codeant3.svg'

function Hero(){
    return(
        <div className="w-1/2 h-screen border-1 max-md:hidden">
            <div className="flex items-center justify-center h-full relative">
                <div className="rounded-lg shadow-2xl">
                    <div className='flex text-2xl font-semibold border-b-2 py-4 pl-4 pr-8'>
                        <img src={codeant2} alt="codeant1" className='mr-4'/>
                        AI to Detect & Autofix Bad Code
                    </div>
                    <div className='flex items-center justify-between my-4 px-4'>
                        <div className='flex flex-col items-center'>
                            <b>30+</b>
                            Language Support
                        </div>
                        <div className='flex flex-col items-center'>
                            <b>10K+</b>
                            Developers
                        </div>
                        <div className='flex flex-col items-center'>
                            <b>100K+</b>
                            Hours Saved
                        </div>
                    </div>
                </div>
                <div className='rounded-lg shadow-2xl flex flex-row justify-between p-8 bg-white absolute bottom-48 left-96'>
                    <div>
                        <img src={graph} alt="graph" />
                        <p className='text-lg font-semibold mt-2'>Issues Fixed</p>
                        <p className='text-4xl font-bold mt-2'>500K+</p>
                    </div>
                    <div className='ml-7'>
                        <div className='flex items-center font-bold'>
                            <FaArrowUp className='text-blue-600'/>
                            <p className='text-blue-600'>14%</p>
                        </div>
                        <div className='mt-1'>
                            This Week
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-row justify-between p-8 absolute bottom-0 left-0 bg-transparent'>
                <img src={codeant3} alt="codeant3" />
            </div>
        </div>
    )
}

export default Hero