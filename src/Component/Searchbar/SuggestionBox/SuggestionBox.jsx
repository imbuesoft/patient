import './SuggestionBox.css'

const SuggestionBox = ({ data, handleClick }) => {

    return (
        <>
            <div onClick={()=>{
                handleClick(data)
            }} className="d-flex justify-content-between align-items-center p-2 cursor-pointer suggestion-container" >
                {/* <span className="suggestion-content-text-1">{data?.textLeft}</span> */}
                <div className="d-flex flex-row align-items-center">
                    <div className="d-flex flex-column px-1">
                        {<div className="fw-semibold">{data?.heading}</div>}
                        {<div className="">{data?.description}</div>}
                    </div>
                </div>
                {/* <span className="suggestion-content-text-1">{data?.textRight}</span> */}
            </div>
        </>
    );
};

export default SuggestionBox;