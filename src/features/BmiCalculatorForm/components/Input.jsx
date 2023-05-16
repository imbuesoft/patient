
const Input = ({ title, name, type, required, left, right }) => {
    return (
        <>
            <label title={required && "required"} htmlFor={name} className="form-label mt-3">{title} {required && <span className="text-danger">*</span>}</label>
            <div className="input-group">
                {left && <span className="input-group-text">{left}</span> || ""}
                <input type={type && type || "text"}
                name={name} id={name} required={required && true || false}
                className="form-control"  aria-label="Amount (to the nearest dollar)" />
                {right && <span className="input-group-text">{right}</span> || ""}
            </div>
        </>
    );
};

export default Input;