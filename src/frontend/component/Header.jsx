import React from 'react';
import styles from '../stylesheet/header.sass';

export default class Header extends React.Component {
    render() {
        return (
            <div className={styles.header}>
                PMONSTERS
            </div>
        );
    }
}