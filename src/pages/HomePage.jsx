import CardDesign1 from "../Component/CardDesign1/CardDesign";
import CardDesign2 from "../Component/CardDesign2/CardDesign";
import CardDesign3 from "../Component/CardDesign3/CardDesign";


function App() {
  return (
    <div className="p-3">
      <div className="d-flex gap-3 flex-wrap">
        <CardDesign1 />
      </div>
      <div className="mt-5 d-flex gap-3 flex-wrap">
        <CardDesign2 />
      </div>
      <div className="mt-5 d-flex gap-3 flex-wrap">
        <CardDesign3 />
      </div>
    </div>
  );
}

export default App;
