import { useState } from 'react'
import { AiOutlineCaretDown , AiOutlineCaretUp } from "react-icons/ai";


export const Dropdown= () => {
    
    const { isOpen, setIsOpen} = useState(false)
 
 
    return (
    <div className="relative flex flex-col items-center w-[340px] h-[340px] rounded-lg"> 
        <button onClick={(prev) => setIsOpen(() => !prev)}  className='bg-white-300 p-4 w-full flex items-center justify-between font-alata text-lg rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white'>
            
            Tipo de Emergencia
            {!isOpen ? (< AiOutlineCaretDown className="h-8"/>
            ) : (
            <AiOutlineCaretUp className="h8" />    

            )}
        </button>


        {isOpen && (
            < div className="bg-white-300 absolute top-20 flex-col rounded-lg p-2 w-full">
                {listbox.map(( i )=> (
                    <div className="flex w-full justify-between p-2 hover: bg-pink-200 cursor-pointer rounded-r-lg border-l-transparent" key={i}>
                        <h3 className='font-alata'></h3>
                        <h3 className='font-alata'></h3>
                    </div>
                ))}
            </div>
            )}
    </div>
  )
}



