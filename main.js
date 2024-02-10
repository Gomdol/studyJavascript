// Part1.
// 랜덤한 숫자 지정
// 유자가 번호를 입력한다.
// go 버튼을 누른다.
// 만약에 유저의 숫자가 랜덤숫자보다 작다면 : UP
// 만약에 유저의 숫자가 랜덤숫자보다 크다면 : Down
// 유저숫자 = 랜덤숫자라면 : "맞추셨습니다."

// Part2.
// 기회는 5번
// 5번의 기회를 다 쓰면 게임이 끝난다 (버튼 disable)
// 유저가 1-100 범위 밖의 숫자 입력 시 알려준다. 기회깎지 않는다.
// 유저가 이미 입력한 숫자를 입력 시 알려준다. 기회깎지 않는다.

//code Part1&&2. 240210

let ranNum = 0;
let clickBtn = document.getElementById("input-button");
let resetBtn = document.getElementById("reset-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let chanceArea = document.getElementById("chance-area");
let chances = 5
let gameover = false;
let history = [];

clickBtn.addEventListener("click",play)
resetBtn.addEventListener("click",reset)
userInput.addEventListener("focus",function(){userInput.value=""})
userInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter" && !gameover) { 
        play(); 
        userInput.value=""
    }
});




function makeRanNum(){
    ranNum = Math.floor(Math.random()*100)+1;
    console.log(ranNum)
}

function play(){
    let userNum = parseInt(userInput.value);

    if(isNaN(userNum)){
        resultArea.innerText = "숫자를 입력해 주세요."
        return;
    }
    if(userNum<1 || userNum>100){
        resultArea.innerText = "1과 100 사이의 숫자를 입력해 주세요."
        return;
    }
    if(history.includes(userNum)){
        resultArea.innerText = "이미 입력한 숫자 입니다."
        return;
    }
    
    if(userNum < ranNum){
        resultArea.innerText = "UP"
    }else if(userNum > ranNum){
        resultArea.innerText = "Down"
    }else if(userNum == ranNum){
        resultArea.innerText = "정답입니다."
    }
    chances--;
    chanceArea.innerText = `${chances}번의 기회가 남았습니다.`
    console.log("찬스 : ",chances)

    history.push(userNum)
    console.log("히스토리 : ",history)

    if(chances<1){
        gameover = true;
    }

    if(gameover == true){
        clickBtn.disabled = true;
    }
}

function reset(){
    gameover = false;
    clickBtn.disabled = false;
    chances = 5
    history = [];
    userInput.value="";
    resultArea.innerText = "결과가 나오는 곳"
    chanceArea.innerText = "5번의 기회가 남았습니다."
}

makeRanNum()