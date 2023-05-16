

const SelectFromList = ({ name, options, title, defaultOption, required }) => {
    return (
        <>
            <label htmlFor={name} className="form-label mt-3">{title} {required && <span className="text-danger">*</span>}</label>
            <select className="form-select" name={name} id={name}>
                <option className="form-control">{defaultOption ? defaultOption : ""}</option>
                {
                    options.map((x, i) => <option key={i} value={x}>{x}</option>)
                }
            </select>
        </>
    );
};

export default SelectFromList;