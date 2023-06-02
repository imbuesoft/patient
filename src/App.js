import Review from "./Review/Review";
import Data from './/Review/Data.json'
function App() {
  return (
    <Review data={Data}/>
  )
}

export default App;
