const Content = () => {
    const handleNameChange = () => {
        const name = ["Bhism", "Anas", "Nitin"];
        const int = Math.floor(Math.random()*3);
        return name[int];
      }

      const handleClick = () => {
        console.log("You Clicked Here!")
      }
    
      const handleClick2 = (name1) => {
        console.log(`${name1} was clicked`)
      }

      const handleClick3 = (e) => {
        console.log(e.target.innerText)
      }

    return (
        <main>
        
            <p onDoubleClick={handleClick}>Hello {handleNameChange()}!</p>
            <button onClick={handleClick}>Click It</button>
            <button onClick={()=>handleClick2('Bhism')}>Click On</button>
            <button onClick={(e)=>handleClick3(e)}>Click On</button>
        </main>
    )
}

export default Content