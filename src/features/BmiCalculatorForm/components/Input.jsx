import { placeholder } from "@babel/types";

const Input = ({ title, name, type, required, left, right, placeholder, onChange }) => {
    return (
        <>
            <div>
                {title && <label title={required && "required"} htmlFor={name} className="form-label mt-3">{title} {required && <span className="text-danger">*</span>}</label>}
                <div className="input-group">
                    {left && <span className="input-group-text">{left}</span> || ""}
                    <input type={type && type || "text"} onChange={onChange} step="0.01" placeholder={placeholder}
                        name={name} id={name} required={required && true || false}
                        className="form-control" aria-label="Amount (to the nearest dollar)" />
                    {right && <span className="input-group-text">{right}</span> || ""}
                </div>
            </div>
        </>
    );
};

export default Input;