import { useState } from 'react';
import PathoData from '../api/PathoData.json';
import PathologyDocument from '../features/PathologyDocument';

const header_data = { name: "Jay Parmar", age: "25", sex: "gender", pid: "123456789", address: "Ahmedabad", refName: "Dr. ABC", regDate: "01/01/2021", collectedDate: "01/01/2021", reportedDate: "01/01/2021" }
const footer_data = { generateDate: "02 Dec, 2021 05:00 PM", doctors: [{ name: "Kavya Sharma", qualification: "MD (Pathology)", signature: 'https://i.fonts2u.com/bs/bs-signature-demo_4.png' }, { name: "Dr.Sachin Patil", qualification: "Pathologist", signature: 'https://i.fonts2u.com/bs/bs-signature-demo_4.png' }, { name: "Priynka Patel", qualification: "Lab Technician", signature: 'https://i.fonts2u.com/bs/bs-signature-demo_4.png' }] }

const App = () => {

    const [pathoData, setPathoData] = useState(
        JSON.parse(localStorage.getItem('pathoData')) || PathoData
    );

    return (
        <>
            <PathologyDocument
                header={{ data: header_data }}
                main={{ data: pathoData, setData: setPathoData, isEditable: false }}
                footer={{ data: footer_data }}
            />
        </>
    );
};

export default App;