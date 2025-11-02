
const App = () => {
  return (
    // <div>  //to avoid this using of this div we use fragments
    //   <div id="dad">
    //     <h1 id="child"></h1>
    //     <h1 id="child"></h1>
    //   </div>
    //   <div id="uncle">

    //   </div>
    // </div>

    // FRAGMENTS ARE BASICALLY EMPTY TAGS <></> => THESE used to contain Elements 
    // it aslso act as wrapper it wraps the elements

    <>
      <div id="dad">
        <h1 id="child">Zub</h1>
        <h1 id="child">Tab</h1>
      </div>
       <div id="uncle">   </div>
    </>
    
  )
}

export default App