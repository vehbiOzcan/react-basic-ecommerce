//import './App.css'

import Header from "./components/Header"
import PageContainer from "./layout/PageContainer"
import './App.css'
import RouterConfig from "./config/routers/RouterConfig"
import Loading from "./components/Loading"
import BasketDrawer from "./components/Drawer"

function App() {
  

  return (
    <>
      <PageContainer>
          <Header/>
          <RouterConfig/>
          <BasketDrawer/>
          <Loading/>
      </PageContainer>
    </>
  )
}

export default App
