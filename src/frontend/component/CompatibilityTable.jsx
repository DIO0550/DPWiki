import React from 'react';
import axios from 'axios';
import APP_CONST from '../js/app-const.jsx';
import styles from'../stylesheet/compatibility-table.sass';

const compatibility = require('../resource/compatibility.json');

export default class CompatibilityTable extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      type_list: {},
      api_call_status: APP_CONST.API_CALL_STATUS.NOT_CALL
    }
  }
  /**
   * マウント後
   */
  componentDidMount() {
    axios.get(APP_CONST.PMONStERS_TYPE_API, { withCredentials: true })
    .then((response) => {
        console.debug(response, "ressponse");
        this.setState({
            type_list: response.data,
            api_call_status: APP_CONST.API_CALL_STATUS.SUCCESS
        })
    }).catch((error) => {
        console.debug(error);
        this.setState({
            api_call_status: APP_CONST.API_CALL_STATUS.FAILED
        })
    });
  }
  render() {
    if (this.state.api_call_status == APP_CONST.API_CALL_STATUS.NOT_CALL) {
          return <span>相性表読み込み中</span>
      } else if (this.state.api_call_status == APP_CONST.API_CALL_STATUS.SUCCESS) {
        var type_head = []
        for (var i in this.state.type_list) {
            type_head.push(
              <th key={this.state.type_list[i].id}>
                <span className={styles['compatibility-table-head']}>
                  { this.state.type_list[i].type1_name }
                </span>
              </th>
            )
        }
        var list = [];
        list.push(
            <thead>
                <tr>
                  <th>
                    <span>
                      タイプ
                    </span>
                  </th>
                  { type_head }
              </tr>
            </thead>
        )
        for (var i in this.state.type_list) {
        list.push(
          <tbody>
            <tr>
                <th>{ this.state.type_list[i].type1_name  }</th>
                <th>{ compatibility[this.state.type_list[i].type1_name][this.state.type_list[0].type1_name] }</th>
                <th>{ compatibility[this.state.type_list[i].type1_name][this.state.type_list[1].type1_name] }</th>
                <th>{ compatibility[this.state.type_list[i].type1_name][this.state.type_list[2].type1_name] }</th>
                <th>{ compatibility[this.state.type_list[i].type1_name][this.state.type_list[3].type1_name] }</th>
                <th>{ compatibility[this.state.type_list[i].type1_name][this.state.type_list[4].type1_name] }</th>
                <th>{ compatibility[this.state.type_list[i].type1_name][this.state.type_list[5].type1_name] }</th>
                <th>{ compatibility[this.state.type_list[i].type1_name][this.state.type_list[6].type1_name] }</th>
                <th>{ compatibility[this.state.type_list[i].type1_name][this.state.type_list[7].type1_name] }</th>
                <th>{ compatibility[this.state.type_list[i].type1_name][this.state.type_list[8].type1_name] }</th>
                <th>{ compatibility[this.state.type_list[i].type1_name][this.state.type_list[9].type1_name] }</th>
                <th>{ compatibility[this.state.type_list[i].type1_name][this.state.type_list[10].type1_name] }</th>
                <th>{ compatibility[this.state.type_list[i].type1_name][this.state.type_list[11].type1_name] }</th>
                <th>{ compatibility[this.state.type_list[i].type1_name][this.state.type_list[12].type1_name] }</th>
                <th>{ compatibility[this.state.type_list[i].type1_name][this.state.type_list[13].type1_name] }</th>
                <th>{ compatibility[this.state.type_list[i].type1_name][this.state.type_list[14].type1_name] }</th>
                <th>{ compatibility[this.state.type_list[i].type1_name][this.state.type_list[15].type1_name] }</th>
                <th>{ compatibility[this.state.type_list[i].type1_name][this.state.type_list[16].type1_name] }</th>
                <th>{ compatibility[this.state.type_list[i].type1_name][this.state.type_list[17].type1_name] }</th>
            </tr>
          </tbody>
        )
        }
        
        return ( 
          <table border="5" className={styles['compatibility-table']}>
            { list }
          </table>
        )
      } else {
          return <span>取得に失敗しました。</span>
      }
  }
}

