import logo from './assets/logo.svg';
import { st, classes } from './app.st.css';

function App() {
    return (
        <div className={st(classes.root)}>
            <header className={classes.appHeader}>
                <img src={logo} className={classes.appLogo} alt="logo" />
                <p>
                    Edit <code>src/app.tsx</code> and save to reload.
                </p>
                <a
                    className={classes.appLink}
                    href="https://stylable.io"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn Stylable
                </a>
            </header>
        </div>
    );
}

export default App;
