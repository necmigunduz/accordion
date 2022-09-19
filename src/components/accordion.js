import { useState } from 'react'
import Button from './button'

const Accordion = ({ accordionName, btnList }) => {
  const [isActive, setIsActive] = useState(true)
  const handleAccordion = () => {
    setIsActive(!isActive)
  } 
  const titleClassName = 'bg-slate-800 text-slate-300 font-bold py-[0.05em] hover:bg-slate-700 hover:text-slate-200'
  const bodyClassName = 'bg-slate-500 my-[0.1em] py-1 text-slate-100 text-xs hover:bg-slate-400'
  return (
    <div className='flex flex-col bg-slate-600 w-[10em] my-1 place-y-2'>
        <Button 
          onClick={handleAccordion} 
          btnName={accordionName} 
          className={titleClassName} 
        />
        {isActive ? 
          null 
            : 
          <div 
            className='flex flex-col'
          >
            {
              btnList.map((btn) => 
                <Button btnName={btn.name} className={bodyClassName} key={btn.id} />)
            }
          </div>}
    </div>
  )
}

export default Accordion