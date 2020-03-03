import React from 'react';
import styles from '../stylesheet/tab-menu.sass';
import APP_CONST from '../js/app-const.jsx';
import classNames from 'classnames';

import { withRouter, Link } from 'react-router-dom';

// パス名
var path_name = window.location.pathname;

class TabMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            route_path: path_name
        }
        this.pushToListPage = this.pushToListPage.bind(this)
        this.pushToTopPage = this.pushToTopPage.bind(this)
        this.listClassNames = this.listClassNames.bind(this)
        this.topPageClassNames = this.topPageClassNames.bind(this)
    }
    pushToTopPage(e) {
        this.props.history.push(APP_CONST.ROUTER_PATH.TOP_PAGE)
        this.setState({
            route_path:window.location.pathname
        })
    }
    pushToListPage(e) {
        this.props.history.push(APP_CONST.ROUTER_PATH.LIST)
        this.setState({
            route_path:window.location.pathname
        })
    } 
    /**
     * トップページのクラス名
     */
    topPageClassNames() {
        var className = classNames(styles['tab-menu'], {
            [styles['tab-select']] : this.state.route_path == APP_CONST.ROUTER_PATH.TOP_PAGE
        })
        return className
    }

    /**
     * 一覧のクラス名
     */
    listClassNames() {
        var className = classNames(styles['tab-menu'], {
            [styles['tab-select']] : this.state.route_path == APP_CONST.ROUTER_PATH.LIST
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
                <div className={this.topPageClassNames()} onClick={this.pushToTopPage}>
                    トップページ
                </div>
                <div className={this.listClassNames()} onClick={this.pushToListPage}>
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

export default withRouter(TabMenu)