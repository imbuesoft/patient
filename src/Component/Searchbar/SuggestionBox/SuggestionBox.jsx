import './SuggestionBox.css'

const SuggestionBox = ({ data, handleClick}) => {

    return (
        <>
            <div tabIndex={0}
                onKeyUp={(e) => {
                    if (e.key === 'Enter') {
                        handleClick(data)
                    }
                }}
                onClick={() => {
                    handleClick(data)
                }} className="d-flex justify-content-between align-items-center p-2 cursor-pointer suggestion-container" >
                {data?.left && <span className="suggestion-content-text-1">{data?.textLeft}</span>}
                <div className="d-flex flex-row align-items-center">
                    <div className="d-flex flex-column px-1">
                        {data?.heading && <div className="fw-semibold">{data?.heading}</div>}
                        {data?.description && <div className="">{data?.description}</div>}
                    </div>
                </div>
                {data?.right && <span className="suggestion-content-text-1">{data?.textRight}</span>}
            </div>
        </>
    );
};

export default SuggestionBox;