import React from 'react';
import '../text/text.css';
import Navbar from '../../components/navbar'

const Text = () => {
  return (
    <div className='gradient-background w-full h-full'>
       <Navbar />
           <div  className='pt-32 grid  grid-cols-1 xl:grid-cols-2 gap-2 mr-28' >
                
                {/* col 1 */}
                <div className=''>
                    
                      <select className="w-full p-2 border border-gray-300 rounded">
                        <option value="option1">persion-فارسی</option>
                        <option value="option1">english-انگلیسی</option>
                      </select>
                </div>

                {/* col 2 */}
                <div className=''>
                  
                </div>
           </div>

    </div>
  )
}

export default Text
