import React from 'react';
import PathologyForm from './pages/PathologyForm';
import PathologyHeader from './pages/PathologyHeader';
import PathologyFooter from './pages/PathologyFooter';

const index = (props) => {
    return (
        <>
            <div style={{ display: 'grid' }}>
                <div style={{ margin: "1em auto 0 ", border: "2px solid #ddd", boxShadow: "0 1em 5em #00000022", borderRadius: "12px", padding: "1em", maxWidth: "96em", width: "", background: "#fff" }} >
                    <PathologyHeader {...props} />
                    <PathologyForm {...props} />
                    <PathologyFooter {...props} />
                </div>
            </div>
        </>
    );
};

export default index;