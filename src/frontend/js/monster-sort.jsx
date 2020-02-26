
/**
 * モンスターの図鑑番号の昇順でソート
 * 番号が同じなら、文字の長さで比較
 * @param monster1 比較モンスター１
 * @param monster2 比較モンスター2
 * @return 比較結果
 */
export function monsterSortNumber(monster1, monster2) {
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