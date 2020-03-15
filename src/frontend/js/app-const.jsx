

 /**
  * APIのベースURL
  */
const API_BASE_URL = "http://localhost:3000/api/"

const APP_CONST = {
    
    /**
     * モンスター一覧のAPIのURL
     */
    PMONSTERS_LIST_API: API_BASE_URL + "v1/pmonsters",

    /**
     * チーム編成のAPIのURL
     */
    PMONSTERS_TEMA_FORMATIONS_API: API_BASE_URL +  "v1/team_formations",

    /**
     * タイプ一覧のAPIのURL
     */
    PMONStERS_TYPE_API: API_BASE_URL + "v1/type1s",
    
    /**
     * APIの呼び出しステータス
     */
    API_CALL_STATUS: {
        NOT_CALL: 0,
        SUCCESS: 1,
        FAILED: 2
    },

    ROUTER_PATH: {
        TOP_PAGE: "/",
        LIST: "/List",
        COMPATIBILITY_TABLE: "/CompatibilityTable",
        TEAM_FORMATION: "/TeamFormation"
    }
}

export default APP_CONST;