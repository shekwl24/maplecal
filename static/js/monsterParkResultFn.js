// 훈장 획득까지 날짜 계산
function calDate(i, count, uses) {
    var clearPerDay = uses + 2
    var j = i + 1;
    if (j == 7) j = 0;

    var today = new Date();
    var gap = 7;
    var week;

    if (today.getDay() > j) gap = 7 - (today.getDay() - j);
    else if (today.getDay() < j) gap = j - today.getDay();

    if (uses != 0) week = Math.ceil((77 - count) / clearPerDay);
    else week = Math.ceil((77 - count) / 2);

    today.setDate(today.getDate() + gap + ((week - 1) * 7));

    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1; // 월
    let date = today.getDate(); // 날짜
    let day = today.getDay(); // 요일
    let achieveDate = year + '년' + month + '월' + date + '일';

    return achieveDate;
}

// 메포 계산
function calMepo(count, uses) {
    var useMepoPerDay = uses * 300;
    if (uses != 0) return (Math.floor((77 - count) / (uses + 2)) * useMepoPerDay) + Math.max((((77 - count) % (uses + 2)) - 2) * 300, 0);
    else return 0;
}
