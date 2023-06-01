const App = () => {
    return  (
     <div className="card" style={{ width: "1650px", height: "100px"}}>
                   <div className="card-body" style={{ background:"lightblue"}} >
                           <div className="d-flex h-100 w-100">
                               <div className="d-grid">
                                   <img style={{margin:"auto", borderRadius: "50%"}} height={75} width={75} src="https://img.freepik.com/premium-photo/doctor-intern-girl-stands-green-background-med-uniform-concept-medicine-stethoscope-medicine-isolated_359031-27160.jpg?w=2000" alt="Logo" />
                               </div>
                               <div className="d-flex flex-column justify-content-center ps-3" >
                                   <strong>Need help with booking your test?</strong>
                                    Our experts are here to help you
                                 </div>
                                 <div className="d-flex flex-row align-items-center justify-content-center pe-5 ms-auto">

                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg>
                                
                                    <strong>+91 8045684087</strong>
                                 </div>
                       </div>
                   </div>
                   </div>
   )
   };
   export default App;