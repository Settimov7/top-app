import { FC } from 'react';
import classNames from 'classnames';

import { LayoutProps } from './layout.props';
import { Header } from './header/header.component';
import { Sidebar } from './sidebar/sidebar.component';
import { Footer } from './footer/footer.component';
import styles from './layout.module.css';
import { AppContextApi, AppContextProvider } from '../context/app.context';

export function Layout({ children }: LayoutProps): JSX.Element {
    return (
        <div className={classNames(styles.wrapper)}>
            <Header className={classNames(styles.header)}/>
            <Sidebar className={classNames(styles.sidebar)}/>
            <div className={classNames(styles.body)}>
                {children}
            </div>
            <Footer className={classNames(styles.footer)}/>
        </div>
    );
}

export const withLayout = <T extends Record<string, unknown> & AppContextApi>(Component: FC<T>): FC<T> => {
    return function componentWithLayout(props: T): JSX.Element {
        return (
            <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
                <Layout>
                    <Component {...props}/>
                </Layout>
            </AppContextProvider>
        );
    };
};