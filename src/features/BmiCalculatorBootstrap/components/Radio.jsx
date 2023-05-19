
const Radio = ({ data, name, title, handleChange, checkedData, className }) => {
    return (
        <>
            <div className={className}>

                {title ? <label>{title}</label> : ""}
                {
                    data.map((id) => (
                        <div>
                            <input onClick={handleChange} type="radio" name={name} className="btn-check" id={id} value={id} autoComplete="off" checked={checkedData === id} />
                            <label className="btn btn-outline-primary text-capitalize" htmlFor={id}>{id}</label><br />
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default Radio;