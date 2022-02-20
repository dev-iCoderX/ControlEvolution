//Dãy tiền bet
var BET_ARR = [15, 15, 30, 60, 120, 240]
//Chip nhỏ nhất
var CHIP = 15
//Chốt lời
var TAKEPROFIT = 50;
//Lỗ
var STOPLOSS = 50*(-1);
//Min lãi để gửi mail
var STEPMAIL = 30;
//Phương pháp
var TYPE_BET = parseInt(prompt("TYPE BET: ", "1"));;
//===================================================================






//===================================================================
var HOST = "NHÀ CÁI";
var PLAYER = "NGƯỜI CHƠI";
var PAIR = "HÒA"

var ableToBet = false;
var betted = false;
var betLocation = 0;
var betValue = BET_ARR[betLocation];
var sideBet = BET_ARR.length;
var betPlace = "";
var profit = 0;
var stepMail = 0;
var start;
var oldnumBanker=0
var oldnumPlayer=0
var numBankerR =0;
var numPlayerR =0;

function loadScript(filename){
        var fileref=document.createElement('script');
        fileref.setAttribute("type","text/javascript");
        fileref.setAttribute("src", filename);
        if (typeof fileref!="undefined"){
            document.getElementsByTagName("head")[0].appendChild(fileref)
        }
        if (window.trustedTypes && window.trustedTypes.createPolicy) {
            window.trustedTypes.createPolicy('default', {
            createHTML: (string, sink) => string
        });
    }  
}

loadScript('https://smtpjs.com/v3/smtp.js');
function sendEmail(title, body) {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "minhkhang311018",
        Password: "Hoang@0305",
        From: "minhkhang3110182@gmail.com",
        To: 'jimtotal89@gmail.com',
        Subject: title,
        Body: body
    })
    .then(function (message) {
        console.log("SEND MAIL: "+title)
    });
}

function ClickBanker(){
    document.querySelectorAll("[class*='banker--']")[1].click()
}
function ClickPlayer(){
    document.querySelectorAll("[class*='player--']")[1].click()
}
function GetResult(){
    return document.querySelectorAll("[class*='gameResult--']")[0].textContent
}

function GetNumberPB(){
    //1-2
    numPlayerR = parseInt(document.querySelectorAll("[class*='count--']")[1].textContent);
    numBankerR = parseInt(document.querySelectorAll("[class*='count--']")[2].textContent);
    if(numBankerR > numPlayerR){
        return HOST;
    }
    else{
        return PLAYER;
    }
}

function GetArrNumChip(betValue){
    return parseInt(betValue/CHIP);
}

function BetChip(betValue, side){
    var numChip = GetArrNumChip(betValue)
    if(numChip>0){
        for(var j = 0; j < numChip; j++){
            if(side == HOST){
                setTimeout(ClickBanker,500);
            }
            else if(side == PLAYER){
                setTimeout(ClickPlayer,500);
            }
        }
    }
}

function FirstStratgy(){
    historyResult = GetResult();
    if(historyResult != ""){
        console.log("KẾT QUẢ: " + historyResult);
        if(betted){
            betted = false;
            if(historyResult.includes(betPlace)){
                console.log("KẾT QUẢ: WIN");
                profit += betValue;
                stepMail += betValue;
                betLocation = 0;
                betValue = BET_ARR[betLocation];
                console.log("PROFIT: "+profit);
                if(profit >= TAKEPROFIT){
                    console.log("LỆNH: TAKE PROFIT");
                    sendEmail("MAIL BÁO: TAKE PROFIT "+TAKEPROFIT,"MAIL BÁO: STAKE PROFIT "+TAKEPROFIT);
                    clearInterval(start);
                }
                if(stepMail >= STEPMAIL){
                    stepMail -= STEPMAIL;
                    sendEmail("MAIL BÁO: ĐÃ WIN "+STEPMAIL,"MAIL BÁO: ĐÃ WIN "+STEPMAIL);
                }
            }
            else if(historyResult.includes(PAIR)){
                console.log("KẾT QUẢ: HÒA");
            }
            else{
                console.log("KẾT QUẢ: LOST");
                profit -= betValue;
                stepMail -= betValue;
                betLocation += 1;
                betValue = BET_ARR[betLocation]
                console.log("PROFIT: "+profit);
                if(betLocation >= sideBet){
                    console.log("LỆNH: OUT OF BET");
                    sendEmail("MAIL BÁO: ĐÃ ĐI HÊT DÃY TIỀN VÀ LOSS  "+profit,"MAIL BÁO: ĐÃ ĐI HÊT DÃY TIỀN VÀ LOSS "+profit);
                    clearInterval(start);
                }
                if(profit-betValue < STOPLOSS){
                    console.log("LỆNH: STOP LOSS");
                    sendEmail("MAIL BÁO: STOPLOSS "+profit,"MAIL BÁO: STOPLOSS "+profit);
                    clearInterval(start);
                }
            }
            console.log("==================");
            console.log("");
        }
        ableToBet = true;
        if(historyResult != PAIR){
            if(historyResult.includes(HOST)){
                betPlace = HOST;
            }
            else if(historyResult.includes(PLAYER)){
                betPlace = PLAYER;
            }
                
        }
    }
    else if(historyResult == "" && ableToBet){
        if(betPlace != ""){
            console.log("BET: " + betPlace);
            ableToBet = false;
            betted = true;
            console.log("VALUE: " + betValue);
            BetChip(betValue,betPlace);
        }
        else{
            console.log("BET: PASS");
        }
    }
    else{
        console.log("WAIT");
    }
}

function SecondStratgy(){
    historyResult = GetResult();
    if(historyResult != ""){
        console.log("KẾT QUẢ: " + historyResult + "\n===================");
        if(betted){
            betted = false;
            if(historyResult.includes(betPlace)){
                console.log("KẾT QUẢ: WIN");
                profit += betValue;
                stepMail += betValue;
                betLocation = 0;
                betValue = BET_ARR[betLocation];
                console.log("PROFIT: "+profit);
                if(profit >= TAKEPROFIT){
                    console.log("LỆNH: TAKE PROFIT");
                    sendEmail("MAIL BÁO: TAKE PROFIT "+TAKEPROFIT,"MAIL BÁO: STAKE PROFIT "+TAKEPROFIT);
                    clearInterval(start);
                }
                if(stepMail >= STEPMAIL){
                    stepMail -= STEPMAIL;
                    sendEmail("MAIL BÁO: ĐÃ WIN "+STEPMAIL,"MAIL BÁO: ĐÃ WIN "+STEPMAIL);
                }
            }
            else if(historyResult.includes(PAIR)){
                console.log("KẾT QUẢ: HÒA");
            }
            else{
                console.log("KẾT QUẢ: LOST");
                profit -= betValue;
                stepMail -= betValue;
                betLocation += 1;
                betValue = BET_ARR[betLocation]
                console.log("PROFIT: "+profit);
                if(betLocation >= sideBet){
                    console.log("LỆNH: OUT OF BET");
                    sendEmail("MAIL BÁO: ĐÃ ĐI HÊT DÃY TIỀN VÀ LOSS "+profit,"MAIL BÁO: ĐÃ ĐI HÊT DÃY TIỀN VÀ LOSS "+profit);
                    clearInterval(start);
                }
                if(profit-betValue < STOPLOSS){
                    console.log("LỆNH: STOP LOSS");
                    sendEmail("MAIL BÁO: STOPLOSS "+profit,"MAIL BÁO: STOPLOSS "+profit);
                    clearInterval(start);
                }
                console.log("==================");
                console.log("");
            }
        }
        ableToBet = true;
    }
    else if(historyResult == "" && ableToBet){
        if(betPlace != ""){
            console.log("BET: " + betPlace)
            ableToBet = false;
            betted = true;
            console.log("VALUE: " + betValue)
            BetChip(betValue,betPlace);
        }
        else{
            console.log("BET: PASS");
        }
    }
    else{
        console.log("WAIT FOR NEXT ROUND");
    }
}
if(TYPE_BET == 1){
    start = setInterval(FirstStratgy,100);
}
else{
    betPlace = GetNumberPB();
    start = setInterval(SecondStratgy,100);
}
