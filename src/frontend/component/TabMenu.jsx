import React from 'react';
import styles from '../stylesheet/tab-menu.sass';

export default class TabMenu extends React.Component {
    render() {
        return (
            <div className={styles['tab-menus']}>
                <div className={styles['tab-menu']}>
                    トップページ
                </div>
                <div className={styles['tab-menu']}>
                    一覧
                </div>
                <div className={styles['tab-menu']}>
                    相性表
                </div>
                <div className={styles['tab-menu']}>
                    チーム編成
                </div>
            </div>
        );
    }
}