
const APP_CONST = {
    
    /**
     * モンスター一覧のAPIのパス
     */
    PMONSTERS_LIST_API: "http://localhost:3000/api/v1/pmonsters",
    
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