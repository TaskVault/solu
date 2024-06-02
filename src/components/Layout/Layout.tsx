import {FC, PropsWithChildren} from "react";
import styles from './Layout.module.scss'
import logo from '../../assets/logo.svg'

const Layout: FC<PropsWithChildren<any>> = ({children}) => {
    return (
        <div className={styles.layout}>
            {children}
        </div>
    );
};

export default Layout;
