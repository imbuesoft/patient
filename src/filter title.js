import CardWithPhoto from "./CardWithPhoto";
import Sidebar from "./Sidebar";


const App = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <CardWithPhoto />
      </div>
    </>
  )
}

export default App;