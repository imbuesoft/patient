import React from 'react';
import PathologyForm from './pages/PathologyForm';
import PathologyHeader from './pages/PathologyHeader';
import PathologyFooter from './pages/PathologyFooter';

const index = ({header, main, footer}) => {
    return (
        <>
            <div style={{ display: 'grid' }}>
                <div style={{ margin: "1em auto 0 ", border: "2px solid #ddd", boxShadow: "0 1em 5em #00000022", borderRadius: "12px", padding: "1em", width: "40em", background: "#fff" }} >
                    <PathologyHeader {...header} />
                    <PathologyForm {...main} />
                    <PathologyFooter {...footer} />
                </div>
            </div>
        </>
    );
};

export default index;


/*********** props should be in below: ***********

--- header ---
{ data = { name: "...", age: "...", sex: "...", pid: "...", address: "...", refName: "...", regDate: "...", collectedDate: "...", reportedDate: "..." } }

--- main ---
{
    "Hemoglobin": [
        "id": "...",
        "name": "...",
        "value": "...",
        "min": "...",
        "max": "...",
        "unit": "..."
    ],
    "RBC count": [...],
    "Blood Indics": [...],
    "WBC count": [...],
    "Differential WBC count": [...],
    "Platelet count": [...],
    "Instruments" : "...",
    "Interpretation" : "..."
}

--- footer ---

 */