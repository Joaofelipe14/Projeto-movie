import { ReactComponent as IconeGit } from "assets/img/git.svg";
import './styles.css';

function Navbar() {
  return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <h1>DS movie</h1>
          <a href="www.google.com">
            <div className="dsmovie-contact-container">
              <IconeGit />
              <p className="dsmovie-contact-link"> /Joaosuperior</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
