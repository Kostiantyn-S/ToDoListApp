import {React, Component} from 'react';
import styles from './Header.module.css';

export default class Header extends Component {
    render() {
        return (
            <header className={styles.Header}>
                <div className={styles.UserName}>{this.props.header}</div>
            </header>
        )
    }
}