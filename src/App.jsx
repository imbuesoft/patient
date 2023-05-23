
import SpeechToText from './features/SpeechToText/'


const App = () => {
  return (
    <>
    <div style={{display:"grid", height:"100vh", width:"100vw",}}>
      <div style={{width:"100%", maxWidth:"80em", height:"90%", margin:"2em auto auto", border:"1px solid #00000022", borderRadius:"1em", background:"#ffffff44", boxShadow:"0 1em 3em #00000015"}}>
        <SpeechToText />
      </div>
    </div>
    </>
  );
};

export default App;