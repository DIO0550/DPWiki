import React from 'react';
import styles from '../stylesheet/tab-menu.sass';
import APP_CONST from '../js/app-const.jsx';
import classNames from 'classnames';

// パス名
const path_name = window.location.pathname;

export default class TabMenu extends React.Component {

    /**
     * トップページのクラス名
     */
    topPageClassNames() {
        var className = classNames(styles['tab-menu'], {
            [styles['tab-select']] : path_name == APP_CONST.ROUTER_PATH.TOP_PAGE
        })
        return className
    }

    /**
     * 一覧のクラス名
     */
    listClassNames() {
        var className = classNames(styles['tab-menu'], {
            [styles['tab-select']] : path_name == APP_CONST.ROUTER_PATH.LIST
        })
        return className
    }

    /**
     * 相性表のクラス名
     */
    compatibilityTableClassNames() {

    }

    /**
     * チーム編成のクラス名
     */
    teamFormationClassNames() {

    }

    render() {
        return (
            <div className={styles['tab-menus']}>
                <div className={this.topPageClassNames()}>
                    トップページ
                </div>
                <div className={this.listClassNames()}>
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