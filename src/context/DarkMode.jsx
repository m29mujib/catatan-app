import { createContext } from "react"
import { useState } from "react"

const DarkModeContext = createContext()
const DarkMode = ({children}) => {
   const [isDarkMode, setIsDarkMode] = useState(false)
   return(
      <DarkModeContext.Provider value={{isDarkMode, setIsDarkMode}}>
         {children}
      </DarkModeContext.Provider>
   )
}
export const DarkProvider = DarkModeContext
export default DarkMode