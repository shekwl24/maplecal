// 누적합 공식
function prefixSum(n, a, d) {
    return (n * (2 * a + ((n - 1) * d))) / 2;
}

function symbolNumberS(n) {
    return ((n * (n + 1) * (2 * n + 1)) / 6) + 11 * n;
}

function athenSymbolNumberS(n) {
    return ((9 * n * (n + 1) * (2 * n + 1)) / 6) + 10 * n * (n + 1);
}

// 만렙까지 필요한 메소 계산
// symbol : 1(소멸의여로), 2(츄츄), 3(레헬른), 4(아르카나), 5(모라스), 6(에스페라), 7(세르니움), 8(아르크스)
function calMeso(level, symbol) {
    a = 0;
    d = 0;
    if (symbol == 1) {
        a = 7070000;
        d = 3960000;
    }
    if (symbol == 2) {
        a = 10840000;
        d = 4620000;
    }
    if (symbol == 3) {
        a = 14610000;
        d = 5280000;
    }
    if (symbol == 4 || symbol == 5 || symbol == 6) {
        a = 17136000;
        d = 5940000;
    }
    if (symbol == 7) {
        a = 185400000;
        d = 88500000;
    }
    if (symbol == 8) {
        a = 203900000;
        d = 97300000;
    }

    if (symbol >= 1 && symbol <= 6) {
        if (level == 1) return prefixSum(19, a, d);
        else return prefixSum(19, a, d) - prefixSum(level - 1, a, d);
    }

    if (symbol == 7 || symbol == 8) {
        if (level == 1) return prefixSum(10, a, d);
        else return prefixSum(10, a, d) - prefixSum(level - 1, a, d);
    }
}

// 만렙까지 필요한 심볼 개수 계산
function requiredSymbol(level, number) {
    if (level == 1) return symbolNumberS(19) - number;
    else return symbolNumberS(19) - symbolNumberS(level - 1) - number;
}

function athenRequiredSymbol(level, number) {
    if (level == 1) return athenSymbolNumberS(10) - number;
    else return athenSymbolNumberS(10) - athenSymbolNumberS(level - 1) - number;
}

// 만렙 달성 날짜 계산
function calDate(level, number, symbolPerDay, type) {
    let today = new Date();
    let requireDay = 0;
    if (type == 0) requiredDay = Math.ceil(requiredSymbol(level, number) / symbolPerDay);
    else if (type == 1) requiredDay = Math.ceil(athenRequiredSymbol(level, number) / symbolPerDay);

    today.setDate(today.getDate() + requiredDay);
    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1; // 월
    let date = today.getDate(); // 날짜
    let day = today.getDay(); // 요일
    let maxLevelDate = year + '년' + month + '월' + date + '일' + '<br />' + '(' + requiredDay + '일)';

    return maxLevelDate;
}
