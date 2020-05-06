// 훈장 획득까지 날짜 계산
function calDate(i, count, useMepo) {
    var j = i + 1;
    if (j == 7) j = 0;

    var today = new Date();
    var gap = 7;
    var week;

    if (today.getDay() > j) gap = 7 - (today.getDay() - j);
    else if (today.getDay() < j) gap = j - today.getDay();

    if (useMepo) week = Math.ceil((77 - count) / 7);
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
function calMepo(count, useMepo) {
    if (useMepo) return (Math.floor((77 - count) / 7) * 1500) + Math.max((((77 - count) % 7) - 2) * 300, 0);
    else return 0;
}
