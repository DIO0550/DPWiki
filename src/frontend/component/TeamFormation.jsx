import React from 'react';
import axios from 'axios';
import APP_CONST from '../js/app-const.jsx';

export default class TeamFormation extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       pmonster_team_formations: {},
       api_call_status: APP_CONST.API_CALL_STATUS.NOT_CALL
    }
  }
  /**
   * マウント後
   */
  componentDidMount() {
    axios.get(APP_CONST.PMONSTERS_TEMA_FORMATIONS_API, { withCredentials: true })
    .then((response) => {
        console.debug(response, "ressponse");
        this.state.mosnter_list = response.data
        this.setState({
            pmonster_team_formations: response.data,
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
          return <span>チーム編成読み込み中</span>
      } else if (this.state.api_call_status == APP_CONST.API_CALL_STATUS.SUCCESS) {
        var list = [];
        for(var i in this.state.mosnter_list){
          list.push(
             <thead>
                  <tr>
                    <th>
                      図鑑番号
                    </th>
                    <th>
                      名前
                    </th>
                    <th>
                      タイプ１
                    </th>
                    <th>
                      タイプ２
                    </th>
                </tr>
             </thead>
          )
          list.push(
            <tbody key={this.state.pmonster_team_formations[i].number}>
              <tr>
                  <th>{this.state.pmonster_team_formations[i].number}</th>
                  <th>{this.state.pmonster_team_formations[i].monster_name}</th>
                  <th>{this.state.pmonster_team_formations[i].type1_name}</th>
                  <th>{this.state.pmonster_team_formations[i].type2_name}</th>
              </tr>
            </tbody>
          )
        }
        return ( 
          <table border="5">
            { list }
          </table>
        )
      } else {
          return <span>取得に失敗しました。</span>
      }
  }
}
