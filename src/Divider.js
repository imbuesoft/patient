const Divider = ({ height, color }) => (
    <div style={{ borderLeft: `1px solid ${color}`, height: height, margin: '0 20px' }} />
  );
  
  const App = () => {
    const person = {
      name: "Yash M. Patel",
      age: "21 Years",
      sex: "Male",
      pid: "555"
    };
  
    const sample = {
      name: "Sample Collected At:",
      address: "125, Shivam Bungalow, S GRoad, Ahmadabad",
      refby: "Dr. Hiren Shah."
    };
  
    const register = {
      registered: "02:31 PM 02 Dec, 21",
      collected: "03:11 PM 02 Dec, 21",
      reported: "04:35 PM 02 Dec, 21"
    };
  
    return (
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 20px' }}>
        <div style={{ display: 'flex' }}>
          <div style={{ margin: '0 200px 0 100px', borderLeftWidth: '1px', borderLeftColor: 'gray' }}>
            <Header {...person} />
          </div>
  
          <Divider height="270px" color="gray" />
  
          <div style={{ margin: '0 150px 0 100px', borderLeftWidth: '1px', borderLeftColor: 'gray' }}>
            <Sample {...sample} />
          </div>
        </div>
  
        <Divider height="270px" color="gray" />
  
        <div style={{ margin: '0 150px 0 80px' }}>
          <Register {...register} />
        </div>
      </div>
    );
  };
  