import logo from "../img/logo.svg";

export const Nav = () => (
  <nav>
    <img src={logo} alt="ChangeEngine" />
    <ul>
      <li>
        <button
          onClick={() => {
            window.location.hash = "create/" + crypto.randomUUID();
          }}
        >
          Create a moment
        </button>
      </li>
      <li id="library">
        <a href="#library">Library</a>
      </li>
    </ul>
  </nav>
);
