import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

//Main Difference between HTML and JSX syntax
//Embedding Expressions: JSX allows embedding JS expression
//Components: JSX support the creation of reusable componenets
//Conditional Rendering: JSX supports conditional rendering through JavaScript expressions, allowing components to render different content based on conditions 

function App() {
  return (
    <>
      <Header/>

      <Main/>

      <Footer/>
    </>
  )
}

export default App
