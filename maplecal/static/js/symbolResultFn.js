// 누적합 공식
function smeyrMesoCostS(n) {
    const a = 9500000;
    const d = 7130000;
    return (n * (2 * a + ((n - 1) * d))) / 2;
}

function etcMesoCostS(n) {
    const a = 19040000;
    const d = 6600000;
    return (n * (2 * a + ((n - 1) * d))) / 2;
}

function symbolNumberS(n) {
    return ((n * (n + 1) * (2 * n + 1)) / 6) + 11 * n;
}

// 만렙까지 필요한 메소 계산
function smeyrCalMeso(level) {
    if (level == 1) return smeyrMesoCostS(19);
    else return smeyrMesoCostS(19) - smeyrMesoCostS(level - 1);
}

function etcCalMeso(level) {
    if (level == 1) return etcMesoCostS(19);
    else return etcMesoCostS(19) - etcMesoCostS(level - 1);
}

// 만렙까지 필요한 심볼 개수 계산
function requiredSymbol(level, number) {
    if (level == 1) return symbolNumberS(19) - number;
    else return symbolNumberS(19) - symbolNumberS(level - 1) - number;
}

// 만렙 달성 날짜 계산
function calDate(level, number, symbolPerDay) {
    let today = new Date();
    let requiredDay = Math.ceil(requiredSymbol(level, number) / symbolPerDay);

    today.setDate(today.getDate() + requiredDay);
    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1; // 월
    let date = today.getDate(); // 날짜
    let day = today.getDay(); // 요일
    let maxLevelDate = year + '년' + month + '월' + date + '일' + '<br />' + '(' + requiredDay + '일)';

    return maxLevelDate;
}
