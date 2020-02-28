import React from 'react';
import axios from 'axios';
import APP_CONST from '../js/app-const.jsx';
import * as monster_sort from '../js/monster-sort.jsx';
import '../stylesheet/monster-list.sass';

const ASCENDING_SORT_MARK = " ▲"
const DESCENDING_SORT_MARK = " ▼"

export default class MonsterList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mosnter_list: {},
      api_call_status: APP_CONST.API_CALL_STATUS.NOT_CALL,
      sort_type: monster_sort.MONSTER_SORT_TYPE.ASCENDING_SORT_NUMBER
    }
    this.onClickNumberHeader = this.onClickNumberHeader.bind(this)
    this.onClickNameHeader = this.onClickNameHeader.bind(this)
  }
  /**
   * マウント後
   */
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

  /**
   * 図鑑番号ヘッダークリック時の処理
   */
  onClickNumberHeader(e) {
    console.log("onClickNumberHeader")
    if (this.state.sort_type == monster_sort.MONSTER_SORT_TYPE.ASCENDING_SORT_NUMBER) {
      this.setState({
        sort_type:monster_sort.MONSTER_SORT_TYPE.DESCENDING_SORT_NUMBER
      })
      return
    }
    this.setState({
      sort_type:monster_sort.MONSTER_SORT_TYPE.ASCENDING_SORT_NUMBER
    })
  }

  /**
   * 名前ヘッダークリック時の処理
   */
  onClickNameHeader(e) {
    console.log("onClickNumberHeader")
    if (this.state.sort_type == monster_sort.MONSTER_SORT_TYPE.ASCENDING_SORT_NAME) {
      this.setState({
        sort_type:monster_sort.MONSTER_SORT_TYPE.DESCENDING_SORT_NAME
      })
      return
    }
    this.setState({
      sort_type:monster_sort.MONSTER_SORT_TYPE.ASCENDING_SORT_NAME
    })
  }

  sortFunction() {
    // 図鑑番号 - 昇順
    if (this.state.sort_type == monster_sort.MONSTER_SORT_TYPE.ASCENDING_SORT_NUMBER) {
      return monster_sort.monsterAscendingSortNumber
    } 
    // 図鑑番号 - 降順
    else if (this.state.sort_type == monster_sort.MONSTER_SORT_TYPE.DESCENDING_SORT_NUMBER) {
      return monster_sort.monsterDescendingSortNumber
    }
    // 名前 - 昇順
    else if (this.state.sort_type == monster_sort.MONSTER_SORT_TYPE.ASCENDING_SORT_NAME) {
      return monster_sort.monsterAscendingSortName
    }
    // 名前 - 降順
    else if (this.state.sort_type == monster_sort.MONSTER_SORT_TYPE.DESCENDING_SORT_NAME) {
      return monster_sort.monsterDescendingSortName
    }
  }

  /**
   * 図鑑番号のヘッダーのソート文字列
   */
  numberHaderSortMark() {
    if (this.state.sort_type == monster_sort.MONSTER_SORT_TYPE.ASCENDING_SORT_NUMBER) {
      return ASCENDING_SORT_MARK
    } 
    // 図鑑番号 - 降順
    else if (this.state.sort_type == monster_sort.MONSTER_SORT_TYPE.DESCENDING_SORT_NUMBER) {
      return DESCENDING_SORT_MARK
    }
    return ""
  }

  /**
   * 名前のヘッダーのソート文字列
   */
  nameHaderSortMark() {
    if (this.state.sort_type == monster_sort.MONSTER_SORT_TYPE.ASCENDING_SORT_NAME) {
      return ASCENDING_SORT_MARK
    } 
    // 図鑑番号 - 降順
    else if (this.state.sort_type == monster_sort.MONSTER_SORT_TYPE.DESCENDING_SORT_NAME) {
      return DESCENDING_SORT_MARK
    }
    return ""
  }

  /**
   * List部分
   */
  pmonsterList() {
      if (this.state.api_call_status == APP_CONST.API_CALL_STATUS.NOT_CALL) {
          return <span>一覧読み込み中</span>
      } else if (this.state.api_call_status == APP_CONST.API_CALL_STATUS.SUCCESS) {
          var list = [];
          let sort_function = this.sortFunction() 
          this.state.mosnter_list.sort(function(monster1, monster2){
                return sort_function(monster1, monster2)
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
                    <th onClick={this.onClickNumberHeader}>
                      図鑑番号 { this.numberHaderSortMark() }
                    </th>
                    <th onClick={this.onClickNameHeader}>
                      名前 { this.nameHaderSortMark() }
                    </th>
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
          { this.pmonsterList() }
      </div>
    );
  }
}
