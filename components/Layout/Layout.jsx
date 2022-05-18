import Footer from './Footer'
import Header from './Header' 
import MenuBar from './MenuBar'

const Layout = ({children}) => {
  return (
    <>
      <Header /> 
      <MenuBar />
        {children}
      <Footer />
    </>
  )
}

export default Layout