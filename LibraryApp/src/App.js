import { PictureRoman1 } from "../src/constants/image";

function App() {
  
  return(
    <div className="App">
      <h1>{PictureRoman1.map((el) => (
               <div>
                  <img src={el.image} alt="" />
               </div>
            ))}
      </h1>
    </div>
  )
}

export default App;
