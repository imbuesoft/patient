
const SuggestionBox = () => {
    return (
        <>
            <div className="d-flex justify-content-between align-items-center p-2">
                <div className="d-flex flex-row align-items-center">
                    <div className="d-flex flex-column px-3">
                        <span>Marketing</span>
                        <div className="d-flex flex-row align-items-center ">
                            <small>Marketing</small>
                            <span className="dots" />
                            <small>viewed Just now</small>
                            <span className="dots" />
                            <small>Edited 15 minutes ago</small>
                        </div>
                    </div>
                </div>
                <span className="content-text-1">ok</span>
            </div>
        </>
    );
};

export default SuggestionBox;