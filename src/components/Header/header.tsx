import "./style.less";

const keyLocale = process.env.REACT_APP_ACOUNT_BASE_URL || "";
const keyBuild = process.env.ACOUNT_BASE_URL || "";

function Header() {
  return (
    <div className="header">
      <h1>Integração contínua</h1>

      <p>
        Chave env local:{" "}
        <a target="_blank" href={keyLocale} rel="noreferrer">
          {keyLocale}
        </a>
      </p>
      <p>
        Chave env setada no build:{" "}
        <a target="_blank" href={keyBuild} rel="noreferrer">
          {keyBuild}
        </a>
      </p>
    </div>
  );
}

export default Header;
