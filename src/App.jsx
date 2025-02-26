import { BrowserRouter, Route, Routes} from "react-router-dom"
import { UserReg } from "./pages/cadastro"


export function App(){
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserReg/>}/> 
        </Routes>
      </BrowserRouter>
    </>
  )
}