// Part1.
// ✅랜덤한 숫자 지정
// 유자가 번호를 입력한다.
// ✅go 버튼을 누른다.
// 만약에 유저의 숫자가 랜덤숫자보다 작다면 : UP
// 만약에 유저의 숫자가 랜덤숫자보다 크다면 : Down
// 유저숫자 = 랜덤숫자라면 : "맞추셨습니다."

// Part2.
// 기회는 5번
// 5번의 기회를 다 쓰면 게임이 끝난다 (버튼 disable)
// 유저가 1-100 범위 밖의 숫자 입력 시 알려준다. 기회깎지 않는다.
// 유저가 이미 입력한 숫자를 입력 시 알려준다. 기회깎지 않는다.

//code Part1. 240210

let ranNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
playButton.addEventListener("click",play);

function makeRanNum() {
    ranNum = Math.floor(Math.random()*100);
    console.log("정답 : ",ranNum);
}

function play(){
    let userValue = userInput.value
    if(userValue < ranNum){
        resultArea.textContent = "Up!"
    }else if(userValue > ranNum){
        resultArea.textContent = "Down!"
    }else if(userValue == ranNum){
        resultArea.textContent = "정답입니다.!"
    }
}

makeRanNum();