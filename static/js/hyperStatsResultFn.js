// 캐릭터 레벨당 하이퍼 스텟
function charLevelToHs(charLevel) {
    let n = Math.floor(charLevel / 10) - 13;
    let units = charLevel % 10;

    return (5 * n * n) + (16 * n) - 18 + ((n + 2) * units);
}

// 하이퍼스텟 레벨당 필요 스텟
function hsLevelToHs(hsLevel) {
    let point = [0, 1, 3, 7, 15, 25, 40, 60, 85, 115, 150, 200, 265, 345, 440, 550];

    return point[hsLevel];
}

// 하이퍼 스텟 레벨 당 오르는 결과
function resultByStat(statNumber, level) {
    if (statNumber == 0) return "힘 " + (level * 30);
    else if (statNumber == 1) return "민첩성 " + (level * 30);
    else if (statNumber == 2) return "지력 " + (level * 30);
    else if (statNumber == 3) return "운 " + (level * 30);
    else if (statNumber == 4) return "최대 HP " + (level * 2) + "%";
    else if (statNumber == 5) return "최대 MP " + (level * 2) + "%";
    else if (statNumber == 6) return "최대 데몬 포스/타임 포스 " + (level * 10) + "<br />최대 싸이킥 포인트 " + level;
    else if (statNumber == 7) {
        if (level <= 5) return "크리티컬 확률 " + level + "%";
        else return "크리티컬 확률 " + (2 * level - 5) + "%";
    }
    else if (statNumber == 8) return "크리티컬 데미지 " + level + "%";
    else if (statNumber == 9) return "방어율 무시 " + (level * 3) + "%";
    else if (statNumber == 10) return "데미지 " + (level * 3) + "%";
    else if (statNumber == 11) {
        if (level <= 5) return "보스 몬스터 공격 시 데미지 " + (level * 3) + "%";
        else return "보스 몬스터 공격 시 데미지 " + (4 * level - 5) + "%";
    }
    else if (statNumber == 12) {
        if (level <= 5) return "일반 몬스터 공격 시 데미지 " + (level * 3) + "%";
        else return "일반 몬스터 공격 시 데미지 " + (4 * level - 5) + "%";
    }
    else if (statNumber == 13) {
        if (level <= 5) return "상태 이상 내성 " + level;
        else return "상태 이상 내성 " + (2 * level - 5);
    }
    else if (statNumber == 14) return "공격력과 마력 " + (level * 3);
    else if (statNumber == 15) {
        if (level <= 10) return "획득 경험치 " + (level * 0.5) + "%";
        else return "획득 경험치 " + (level - 5) + "%";
    }
    else {
        if (level <= 10) return "아케인포스 " + (level * 5);
        else return "아케인포스 " + (10 * level - 50);
    }
}
