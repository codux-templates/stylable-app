import type React from 'react';
import { st, classes } from './header.st.css';
import { ReactComponent as StylableLogo } from './assets/stylable.svg';

export interface HeaderProps {
    className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
    return (
        <header className={st(classes.root, className)}>
            <h1 className={classes.title}>
                Hello{' '}
                <a
                    className={classes.anchor}
                    href="https://stylable.io"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Stylable!
                </a>{' '}
                <StylableLogo
                    className={classes.logo}
                    width="60"
                    height="60"
                    title="Stylable Logo"
                />
            </h1>
        </header>
    );
};
