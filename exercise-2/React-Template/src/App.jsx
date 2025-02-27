import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

/* 
  Main Difference between HTML and JSX syntax :
  -JSX:
  +JSX is case-sensitive with camelCase properties.
  +JSX allows JavaScript expressions.
  +JSX requires a single root node.
  +Attributes are camelcased (e.g., onClick).
  +JSX can have custom components (e.g., <MyComponent />)
  -Html:
  +HTML is not case-sensitive.
  +HTML does not have logic built-in; it requires a separate script
  +HTML does not have this restriction
  +Attributes are lowercase (e.g., click).
  +HTML does not support custom components natively.
*/


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
