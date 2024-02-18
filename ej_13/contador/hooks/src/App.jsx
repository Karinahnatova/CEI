import LoginUseContext from "../components/LoginUseContext"
import FocusRef from "../components/FocusRef"
import ContadorRef from "../components/ContadorRef"

function App() {


  return (
    <>
    <h2>1- USE CONTEXT / CREATE CONTEXT</h2>
    <LoginUseContext/>

    <h2>2- USE REF FOCUS</h2>
    <FocusRef/>

    <h2>3- USE REF CONTADOR</h2>
    <ContadorRef/>
     
    </>
  )
}

export default App
