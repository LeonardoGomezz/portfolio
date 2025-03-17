import { useState } from "react"
import Flag from 'react-world-flags'
import { FaChevronDown, FaChevronUp  } from "react-icons/fa";

export const LanguageSelect = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <div className="fixed bottom-32 right-8">
      <div className="flex items-center gap-2 cursor-pointer" onClick={()=> setShowMenu(!showMenu)}>
        
      <Flag code="usa" className="" width={50} />
      {showMenu === true ?
      <FaChevronUp /> 
      :
      <FaChevronDown />
    }
      </div>
      {
        showMenu && (
      <div className="absolute top-10 right-6 cursor-pointer">
        <a href='/'>
      <Flag code="col" className="" width={50} />
        </a>
      </div>

        )
      }
    </div>
  )
}
