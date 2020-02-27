import React from 'react';
import axios from 'axios';
import APP_CONST from '../js/app-const.jsx';
import * as monster_sort from '../js/monster-sort.jsx';
import '../stylesheet/monster-list.sass';

export default class MonsterList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mosnter_list: {},
      api_call_status: APP_CONST.API_CALL_STATUS.NOT_CALL
    }
  }
  componentDidMount() {
    axios.get(APP_CONST.PMONSTERS_LIST_API, { withCredentials: true })
    .then((response) => {
        console.debug(response, "ressponse");
        this.state.mosnter_list = response.data
        this.setState({
            mosnter_list: response.data,
            api_call_status: APP_CONST.API_CALL_STATUS.SUCCESS
        })
    }).catch((error) => {
        console.debug(error);
        this.setState({
            api_call_status: APP_CONST.API_CALL_STATUS.FAILED
        })
    });
  }
  pmonsterList(api_call_status) {
      if (api_call_status == APP_CONST.API_CALL_STATUS.NOT_CALL) {
          return <span>一覧読み込み中</span>
      } else if (api_call_status == APP_CONST.API_CALL_STATUS.SUCCESS) {
          var list = [];
          this.state.mosnter_list.sort(function(monster1, monster2){
                return monster_sort.monsterAscendingSortNumber(monster1, monster2)
          });
          for(var i in this.state.mosnter_list){
            list.push(
              <tbody key={this.state.mosnter_list[i].number}>
                <tr>
                    <th>{this.state.mosnter_list[i].number}</th>
                    <th>{this.state.mosnter_list[i].monster_name}</th>
                    <th>{this.state.mosnter_list[i].type1_name}</th>
                    <th>{this.state.mosnter_list[i].type2_name}</th>
                    <th>{this.state.mosnter_list[i].hit_point}</th>
                    <th>{this.state.mosnter_list[i].attack}</th>
                    <th>{this.state.mosnter_list[i].defence}</th>
                    <th>{this.state.mosnter_list[i].special_attack}</th>
                    <th>{this.state.mosnter_list[i].special_defence}</th>
                    <th>{this.state.mosnter_list[i].speed}</th>
                </tr>
              </tbody>
            )}
          return (
              <table border="5">
                 <thead>
                  <tr>
                    <th>図鑑番号</th>
                    <th>名前</th>
                    <th>タイプ１</th>
                    <th>タイプ２</th>
                    <th>HP</th>
                    <th>攻撃</th>
                    <th>防御</th>
                    <th>特攻</th>
                    <th>特防</th>
                    <th>素早さ</th>
                </tr>
               </thead>
            { list }
            </table>
          )
      } else {
          return <span>一覧取得に失敗しました。</span>
      }
  }
  render() {

    return (
      <div className="list-contents">
          { this.pmonsterList(this.state.api_call_status) }
      </div>
    );
  }
}
