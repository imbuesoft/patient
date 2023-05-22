
const Header = ({ name, age, sex, pid }) => {
    return (
        <header>
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>Sex: {sex}</p>
            <p>PID: {pid}</p>
        </header>
    );
};

export default Header;