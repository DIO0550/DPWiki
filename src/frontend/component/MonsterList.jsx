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
    this.onClickType1Header = this.onClickType1Header.bind(this)
    this.onClickType2Header = this.onClickType2Header.bind(this)
    this.onClickHitPointHeader = this.onClickHitPointHeader.bind(this)
    this.onClickAttackHeader = this.onClickAttackHeader.bind(this)
    this.onClickDefenceHeader = this.onClickDefenceHeader.bind(this)
    this.onClickSpecialAttackHeader = this.onClickSpecialAttackHeader.bind(this)
    this.onClickSpecialDefenceHeader = this.onClickSpecialDefenceHeader.bind(this)
    this.onClickSpeedHeader = this.onClickSpeedHeader.bind(this)
  }
  /**
   * マウント後
   */
  componentDidMount() {
    axios.get(APP_CONST.PMONSTERS_LIST_API, { withCredentials: true })
    .then((response) => {
        console.debug(response, "ressponse");
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

  /**
   * タイプ１ヘッダークリック時の処理
   */
  onClickType1Header(e) {
    if (this.state.sort_type == monster_sort.MONSTER_SORT_TYPE.ASCENDING_SORT_TYPE1) {
      this.setState({
        sort_type:monster_sort.MONSTER_SORT_TYPE.DESCENDING_SORT_TYPE1
      })
      return
    }
    this.setState({
      sort_type:monster_sort.MONSTER_SORT_TYPE.ASCENDING_SORT_TYPE1
    })
  }

  /**
   * タイプ２ヘッダークリック時の処理
   */
  onClickType2Header(e) {
    if (this.state.sort_type == monster_sort.MONSTER_SORT_TYPE.ASCENDING_SORT_TYPE2) {
      this.setState({
        sort_type:monster_sort.MONSTER_SORT_TYPE.DESCENDING_SORT_TYPE2
      })
      return
    }
    this.setState({
      sort_type:monster_sort.MONSTER_SORT_TYPE.ASCENDING_SORT_TYPE2
    })
  }

  /**
   * HPヘッダークリック時の処理
   */
  onClickHitPointHeader(e) {
    if (this.state.sort_type == monster_sort.MONSTER_SORT_TYPE.ASCENDING_SORT_HIT_POINT) {
      this.setState({
        sort_type:monster_sort.MONSTER_SORT_TYPE.DESCENDING_SORT_HIT_POINT
      })
      return
    }
    this.setState({
      sort_type:monster_sort.MONSTER_SORT_TYPE.ASCENDING_SORT_HIT_POINT
    })
  }

  /**
   * 攻撃ヘッダークリック時の処理
   */
  onClickAttackHeader(e) {
    if (this.state.sort_type == monster_sort.MONSTER_SORT_TYPE.ASCENDING_SORT_ATTACK) {
      this.setState({
        sort_type:monster_sort.MONSTER_SORT_TYPE.DESCENDING_SORT_ATTACK
      })
      return
    }
    this.setState({
      sort_type:monster_sort.MONSTER_SORT_TYPE.ASCENDING_SORT_ATTACK
    })
  }
  
  /**
   * 防御ヘッダークリック時の処理
   */
  onClickDefenceHeader(e) {
    if (this.state.sort_type == monster_sort.MONSTER_SORT_TYPE.ASCENDING_SORT_DEFENCE) {
      this.setState({
        sort_type:monster_sort.MONSTER_SORT_TYPE.DESCENDING_SORT_DEFENCE
      })
      return
    }
    this.setState({
      sort_type:monster_sort.MONSTER_SORT_TYPE.ASCENDING_SORT_DEFENCE
    })
  }

  /**
   * 特攻ヘッダークリック時の処理
   */
  onClickSpecialAttackHeader(e) {
    if (this.state.sort_type == monster_sort.MONSTER_SORT_TYPE.ASCENDING_SORT_SPECIAL_ATTACK) {
      this.setState({
        sort_type:monster_sort.MONSTER_SORT_TYPE.DESCENDING_SORT_SPECIAL_ATTACK
      })
      return
    }
    this.setState({
      sort_type:monster_sort.MONSTER_SORT_TYPE.ASCENDING_SORT_SPECIAL_ATTACK
    })
  }
  
  /**
   * 特防ヘッダークリック時の処理
   */
  onClickSpecialDefenceHeader(e) {
    if (this.state.sort_type == monster_sort.MONSTER_SORT_TYPE.ASCENDING_SORT_SPECIAL_DEFENCE) {
      this.setState({
        sort_type:monster_sort.MONSTER_SORT_TYPE.DESCENDING_SORT_SPECIAL_DEFENCE
      })
      return
    }
    this.setState({
      sort_type:monster_sort.MONSTER_SORT_TYPE.ASCENDING_SORT_SPECIAL_DEFENCE
    })
  }

  /**
   * 特防ヘッダークリック時の処理
   */
  onClickSpeedHeader(e) {
    if (this.state.sort_type == monster_sort.MONSTER_SORT_TYPE.ASCENDING_SORT_SPEED) {
      this.setState({
        sort_type:monster_sort.MONSTER_SORT_TYPE.DESCENDING_SORT_SPEED
      })
      return
    }
    this.setState({
      sort_type:monster_sort.MONSTER_SORT_TYPE.ASCENDING_SORT_SPEED
    })
  }
  

  /**
   * 図鑑番号のヘッダーのソート文字列
   */
  numberHeaderSortMark() {
    if (this.state.sort_type == monster_sort.MONSTER_SORT_TYPE.ASCENDING_SORT_NUMBER) {
      return ASCENDING_SORT_MARK
    } 
    else if (this.state.sort_type == monster_sort.MONSTER_SORT_TYPE.DESCENDING_SORT_NUMBER) {
      return DESCENDING_SORT_MARK
    }
    return ""
  }

  /**
   * 名前のヘッダーのソート文字列
   */
  nameHeaderSortMark() {
    if (this.state.sort_type == monster_sort.MONSTER_SORT_TYPE.ASCENDING_SORT_NAME) {
      return ASCENDING_SORT_MARK
    }
    else if (this.state.sort_type == monster_sort.MONSTER_SORT_TYPE.DESCENDING_SORT_NAME) {
      return DESCENDING_SORT_MARK
    }
    return ""
  }

  /**
   * タイプ１のヘッダーのソート文字列
   */
  type1HeaderSortMark() {
    if (this.state.sort_type == monster_sort.MONSTER_SORT_TYPE.ASCENDING_SORT_TYPE1) {
      return ASCENDING_SORT_MARK
    }
    else if (this.state.sort_type == monster_sort.MONSTER_SORT_TYPE.DESCENDING_SORT_TYPE1) {
      return DESCENDING_SORT_MARK
    }
    return ""
  }

  /**
   * タイプ２のヘッダーのソート文字列
   */
  type2HeaderSortMark() {
    if (this.state.sort_type == monster_sort.MONSTER_SORT_TYPE.ASCENDING_SORT_TYPE2) {
      return ASCENDING_SORT_MARK
    }
    else if (this.state.sort_type == monster_sort.MONSTER_SORT_TYPE.DESCENDING_SORT_TYPE2) {
      return DESCENDING_SORT_MARK
    }
    return ""
  }

  /**
   * HPのヘッダーのソート文字列
   */
  hitPointHeaderSortMark() {
    if (this.state.sort_type  == monster_sort.MONSTER_SORT_TYPE.ASCENDING_SORT_HIT_POINT) {
      return ASCENDING_SORT_MARK
    }
    else if (this.state.sort_type == monster_sort.MONSTER_SORT_TYPE.DESCENDING_SORT_HIT_POINT) {
      return DESCENDING_SORT_MARK
    }
    return ""
  }

  /**
   * 攻撃のヘッダーのソート文字列
   */
  attakHeaderSortMark() {
    if (this.state.sort_type == monster_sort.MONSTER_SORT_TYPE.ASCENDING_SORT_ATTACK) {
      return ASCENDING_SORT_MARK
    }
    else if (this.state.sort_type == monster_sort.MONSTER_SORT_TYPE.DESCENDING_SORT_ATTACK) {
      return DESCENDING_SORT_MARK
    }
    return ""
  }

  /**
   * 防御のヘッダーのソート文字列
   */
  defenceHeaderSortMark() {
    if (this.state.sort_type == monster_sort.MONSTER_SORT_TYPE.ASCENDING_SORT_DEFENCE) {
      return ASCENDING_SORT_MARK
    }
    else if (this.state.sort_type == monster_sort.MONSTER_SORT_TYPE.DESCENDING_SORT_DEFENCE) {
      return DESCENDING_SORT_MARK
    }
    return ""
  }

  /**
   * 特攻のヘッダーのソート文字列
   */
  specialAttakHeaderSortMark() {
    if (this.state.sort_type == monster_sort.MONSTER_SORT_TYPE.ASCENDING_SORT_SPECIAL_ATTACK) {
      return ASCENDING_SORT_MARK
    }
    else if (this.state.sort_type == monster_sort.MONSTER_SORT_TYPE.DESCENDING_SORT_SPECIAL_ATTACK) {
      return DESCENDING_SORT_MARK
    }
    return ""
  }

  /**
   * 特防のヘッダーのソート文字列
   */
  specialDefenceHeaderSortMark() {
    if (this.state.sort_type == monster_sort.MONSTER_SORT_TYPE.ASCENDING_SORT_SPECIAL_DEFENCE) {
      return ASCENDING_SORT_MARK
    }
    else if (this.state.sort_type == monster_sort.MONSTER_SORT_TYPE.DESCENDING_SORT_SPECIAL_DEFENCE) {
      return DESCENDING_SORT_MARK
    }
    return ""
  }

  /**
   * 素早さのヘッダーのソート文字列
   */
  speedHeaderSortMark() {
    if (this.state.sort_type == monster_sort.MONSTER_SORT_TYPE.ASCENDING_SORT_SPEED) {
      return ASCENDING_SORT_MARK
    }
    else if (this.state.sort_type == monster_sort.MONSTER_SORT_TYPE.DESCENDING_SORT_SPEED) {
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
          let sort_function = monster_sort.monsterSortFunction(this.state.sort_type)
          this.state.mosnter_list.sort(function(monster1, monster2){
                return sort_function(monster1, monster2)
          });
          for(var i in this.state.mosnter_list) {
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
                      図鑑番号 { this.numberHeaderSortMark() }
                    </th>
                    <th onClick={this.onClickNameHeader}>
                      名前 { this.nameHeaderSortMark() }
                    </th>
                    <th onClick={this.onClickType1Header}>
                      タイプ１ { this.type1HeaderSortMark() }
                    </th>
                    <th onClick={this.onClickType2Header}>
                      タイプ２ { this.type2HeaderSortMark() }
                    </th>
                    <th onClick={this.onClickHitPointHeader}>
                      HP { this.hitPointHeaderSortMark() }
                    </th>
                    <th onClick={this.onClickAttackHeader}>
                      攻撃 { this.attakHeaderSortMark() }
                    </th>
                    <th onClick={this.onClickDefenceHeader}>
                      防御 { this.defenceHeaderSortMark() }
                    </th>
                    <th onClick={this.onClickSpecialAttackHeader}>
                      特攻 { this.specialAttakHeaderSortMark() }
                    </th>
                    <th onClick={this.onClickSpecialDefenceHeader}>
                      特防 { this.specialDefenceHeaderSortMark() }
                    </th>
                    <th onClick={this.onClickSpeedHeader}>
                      素早さ { this.speedHeaderSortMark() }
                    </th>
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
