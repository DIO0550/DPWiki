

/**
 * ソートに使用する関数を返す
 * @param monster_sort_type
 * @return ソートに使用する関数
 */
export function monsterSortFunction(monster_sort_type) {
    // 図鑑番号 - 昇順
    if (monster_sort_type == MONSTER_SORT_TYPE.ASCENDING_SORT_NUMBER) {
      return monsterAscendingSortNumber
    } 
    // 図鑑番号 - 降順
    else if (monster_sort_type == MONSTER_SORT_TYPE.DESCENDING_SORT_NUMBER) {
      return monsterDescendingSortNumber
    }
    // 名前 - 昇順
    else if (monster_sort_type == MONSTER_SORT_TYPE.ASCENDING_SORT_NAME) {
      return monsterAscendingSortName
    }
    // 名前 - 降順
    else if (monster_sort_type == MONSTER_SORT_TYPE.DESCENDING_SORT_NAME) {
      return monsterDescendingSortName
    }
    // タイプ１ - 昇順
    else if (monster_sort_type == MONSTER_SORT_TYPE.ASCENDING_SORT_TYPE1) {
      return monsterAscendingSortType1
    }
    // タイプ１ - 降順
    else if (monster_sort_type == MONSTER_SORT_TYPE.DESCENDING_SORT_TYPE1) {
      return monsterDescendingSortType1
    }
    // タイプ2 - 昇順
    else if (monster_sort_type == MONSTER_SORT_TYPE.ASCENDING_SORT_TYPE2) {
      return monsterAscendingSortType2
    }
    // タイプ2 - 降順
    else if (monster_sort_type == MONSTER_SORT_TYPE.DESCENDING_SORT_TYPE2) {
      return monsterDescendingSortType2
    }
    // HP - 昇順
    else if (monster_sort_type == MONSTER_SORT_TYPE.ASCENDING_SORT_HIT_POINT) {
      return monsterAscendingSortHitPoint
    }
    // HP - 降順
    else if (monster_sort_type == MONSTER_SORT_TYPE.DESCENDING_SORT_HIT_POINT) {
      return monsterDescendingSortHitPoint
    }
    // ATTACK - 昇順
    else if (monster_sort_type == MONSTER_SORT_TYPE.ASCENDING_SORT_ATTACK) {
      return monsterAscendingSortAttack
    }
    // ATTACK - 降順
    else if (monster_sort_type == MONSTER_SORT_TYPE.DESCENDING_SORT_ATTACK) {
      return monsterDescendingSortAttack
    }
}

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
 * モンスターのタイプ１の昇順でソート
 * @param monster1 比較モンスター１
 * @param monster2 比較モンスター2
 * @return 比較結果
 */
export function monsterAscendingSortType1(monster1, monster2) {
    if (monster1.type1_name < monster2.type1_name) {
        return -1
    } else if (monster1.type1_name > monster2.type1_name) {
        return 1
    }  
    // 同じ場合は、図鑑番号の昇順
    return monsterAscendingSortNumber(monster1, monster2)
}

/**
 * モンスターのタイプ１の降順でソート
 * @param monster1 比較モンスター１
 * @param monster2 比較モンスター2
 * @return 比較結果
 */
export function monsterDescendingSortType1(monster1, monster2) {
    if (monster1.type1_name < monster2.type1_name) {
        return 1
    } else if (monster1.type1_name > monster2.type1_name) {
        return -1
    }  
    // 同じ場合は、図鑑番号の降順
    return monsterDescendingSortNumber(monster1, monster2)
}

/**
 * モンスターのタイプ２の昇順でソート
 * @param monster1 比較モンスター１
 * @param monster2 比較モンスター2
 * @return 比較結果
 */
export function monsterAscendingSortType2(monster1, monster2) {
    if (monster1.type2_name < monster2.type2_name) {
        return -1
    } else if (monster1.type2_name > monster2.type2_name) {
        return 1
    }  
    // 同じ場合は、図鑑番号の昇順
    return monsterAscendingSortNumber(monster1, monster2)
}

/**
 * モンスターのタイプ２の降順でソート
 * @param monster1 比較モンスター１
 * @param monster2 比較モンスター2
 * @return 比較結果
 */
export function monsterDescendingSortType2(monster1, monster2) {
    if (monster1.type2_name < monster2.type2_name) {
        return 1
    } else if (monster1.type2_name > monster2.type2_name) {
        return -1
    }  
    // 同じ場合は、図鑑番号の降順
    return monsterDescendingSortNumber(monster1, monster2)
}

/**
 * モンスターのHPの昇順でソート
 * @param monster1 比較モンスター１
 * @param monster2 比較モンスター2
 * @return 比較結果
 */
export function monsterAscendingSortHitPoint(monster1, monster2) {
    if (monster1.hit_point < monster2.hit_point) {
        return -1
    } else if (monster1.hit_point > monster2.hit_point) {
        return 1
    }  
    // 同じ場合は、図鑑番号の昇順
    return monsterAscendingSortNumber(monster1, monster2)
}

/**
 * モンスターのHPの降順でソート
 * @param monster1 比較モンスター１
 * @param monster2 比較モンスター2
 * @return 比較結果
 */
export function monsterDescendingSortHitPoint(monster1, monster2) {
    if (monster1.hit_point < monster2.hit_point) {
        return 1
    } else if (monster1.hit_point > monster2.hit_point) {
        return -1
    }  
    // 同じ場合は、図鑑番号の降順
    return monsterDescendingSortNumber(monster1, monster2)
}

/**
 * モンスターのHPの昇順でソート
 * @param monster1 比較モンスター１
 * @param monster2 比較モンスター2
 * @return 比較結果
 */
export function monsterAscendingSortAttack(monster1, monster2) {
    if (monster1.attack < monster2.attack) {
        return -1
    } else if (monster1.attack > monster2.attack) {
        return 1
    }  
    // 同じ場合は、図鑑番号の昇順
    return monsterAscendingSortNumber(monster1, monster2)
}

/**
 * モンスターのHPの降順でソート
 * @param monster1 比較モンスター１
 * @param monster2 比較モンスター2
 * @return 比較結果
 */
export function monsterDescendingSortAttack(monster1, monster2) {
    if (monster1.attack < monster2.attack) {
        return 1
    } else if (monster1.attack > monster2.attack) {
        return -1
    }  
    // 同じ場合は、図鑑番号の降順
    return monsterDescendingSortNumber(monster1, monster2)
}


/**
 * ソートの種類
 */
export const MONSTER_SORT_TYPE = {
    ASCENDING_SORT_NUMBER:1,
    DESCENDING_SORT_NUMBER:2,
    ASCENDING_SORT_NAME:3,
    DESCENDING_SORT_NAME:4,
    ASCENDING_SORT_TYPE1:5,
    DESCENDING_SORT_TYPE1:6,
    ASCENDING_SORT_TYPE2:7,
    DESCENDING_SORT_TYPE2:8,
    ASCENDING_SORT_HIT_POINT:9,
    DESCENDING_SORT_HIT_POINT:10,
    ASCENDING_SORT_ATTACK:11,
    DESCENDING_SORT_ATTACK:12
}