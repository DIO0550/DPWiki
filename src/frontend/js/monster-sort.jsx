
/**
 * モンスターの図鑑番号の昇順でソート
 * 番号が同じなら、文字の長さで比較
 * @param monster1 比較モンスター１
 * @param monster2 比較モンスター2
 * @return 比較結果
 */
export function monsterAscendingSortNumber(monster1, monster2) {
    var moster1_pos = monster1.number.indexOf("-");
    var monster1_num = "";
    if (moster1_pos < 0) {
        monster1_num = monster1.number
    } else {
        monster1_num = monster1.number.substring(0, moster1_pos);
    }

    var moster2_pos = monster2.number.indexOf("-");
    var monster2_num = "";
    if (moster2_pos < 0) {
        monster2_num = monster2.number
    } else {
        monster2_num = monster2.number.substring(0, moster2_pos);
    }
    if(parseFloat(monster1_num) < parseFloat(monster2_num)) return -1;
    if(parseFloat(monster1_num) > parseFloat(monster2_num)) return 1;

    if (monster1.length < monster2.length) return -1;
    if (monster1.length > monster2.length) return 1;
    return 0;
}

/**
 * モンスターの図鑑番号の降順でソート
 * 番号が同じなら、文字の長さで比較
 * @param monster1 比較モンスター１
 * @param monster2 比較モンスター2
 * @return 比較結果
 */
export function monsterDescendingSortNumber(monster1, monster2) {
    var moster1_pos = monster1.number.indexOf("-");
    var monster1_num = "";
    if (moster1_pos < 0) {
        monster1_num = monster1.number
    } else {
        monster1_num = monster1.number.substring(0, moster1_pos);
    }

    var moster2_pos = monster2.number.indexOf("-");
    var monster2_num = "";
    if (moster2_pos < 0) {
        monster2_num = monster2.number
    } else {
        monster2_num = monster2.number.substring(0, moster2_pos);
    }
    if(parseFloat(monster1_num) < parseFloat(monster2_num)) return 1;
    if(parseFloat(monster1_num) > parseFloat(monster2_num)) return -1;

    if (monster1.length < monster2.length) return 1;
    if (monster1.length > monster2.length) return -1;
    return 0;
}

/**
 * モンスターの名前の昇順でソート
 * @param monster1 比較モンスター１
 * @param monster2 比較モンスター2
 * @return 比較結果
 */
export function monsterAscendingSortName(monster1, monster2) {
    if (monster1.monster_name < monster2.monster_name) {
        return -1
    } else if (monster1.monster_name > monster2.monster_name) {
        return 1
    }  
    return 0
}

/**
 * モンスターの名前の降順でソート
 * @param monster1 比較モンスター１
 * @param monster2 比較モンスター2
 * @return 比較結果
 */
export function monsterDescendingSortName(monster1, monster2) {
    if (monster1.monster_name < monster2.monster_name) {
        return 1
    } else if (monster1.monster_name > monster2.monster_name) {
        return -1
    }  
    return 0
}

/**
 * ソートの種類
 */
export const MONSTER_SORT_TYPE = {
    ASCENDING_SORT_NUMBER:1,
    DESCENDING_SORT_NUMBER:2,
    ASCENDING_SORT_NAME:3,
    DESCENDING_SORT_NAME:4
}