import './App.css';

const App = () => {
  return (
    <>
      <link
        href="https://use.fontawesome.com/releases/v5.6.1/css/all.css"
        rel="stylesheet"
      />
      <h1>Social Share Buttons</h1>
      <div className="frame">
        <a href="https://www.facebook.com/" className="btn">
          <i className="fab fa-facebook-f" style={{ color: "#3b5998" }} />
        </a>
        <a href="https://www.twitter.com/" className="btn">
          <i className="fab fa-twitter" style={{ color: "#00acee" }} />
        </a>
        <a href="https://www.instagram.com/" className="btn">
          <i className="fab fa-instagram" style={{ color: "#ea4c89" }} />
        </a>
        <a href="https://www.linkedin.com/" className="btn">
          <i className="fab fa-linkedin-in" style={{ color: "#0e76a8" }} />
        </a>
        <a href="https://api.whatsapp.com/" className="btn">
          <i className="fab fa-whatsapp" style={{ color: "#25D366" }} />
        </a>
        <a href="mailto:example@example.com" className="btn">
          <i className="far fa-envelope" />
        </a>
        <a href="https://github.com/" className="btn">
          <i className="fab fa-github" style={{ color: "#24292e" }} />
        </a>
      </div>
    </>
  );
}

export default App;



