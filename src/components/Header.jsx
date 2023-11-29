import "./Header.css";
export const Header = () => {
  return (
    <div className="header">
      <div>
        <h1>IMAGINARIUM</h1>
      </div>
      <div className="navBar">
        <button>Login</button>
        <button>Create account</button>
      </div>
    </div>
  );
};
