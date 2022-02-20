var HOST = "NHÀ CÁI"
var PLAYER = "NGƯỜI CHƠI"
var classNameBanker = "";
var classNamePlayer = "";
var classResult = "";
var classChipItem = "";//0-5
var countLen = ";"//0-1
var ableToBet = false;
var historyResult = "";
var chipValue = [50,250,1250,5000,25000,125000]
var spans = document.getElementsByTagName("div");
for (var i = 0; i < spans.length; i++) {
    var spans = document.getElementsByTagName("div");
    var getClassName =spans[i].className;
    if (getClassName.includes("banker--") && getClassName.length < 15) {
        classNameBanker = getClassName;
    }
    else if (getClassName.includes("player--") && getClassName.length < 15) {
        classNamePlayer = getClassName;
    }
    else if (getClassName.includes("chipItem--")) {
        classChipItem = getClassName;
    }
    else if (getClassName.includes("gameResult--")) {
        classResult = getClassName;
    }
    else if (getClassName.includes("count--") && countLen.length < 2) {
        countLen = getClassName;
    }
}

function GetResult(){
    return document.getElementsByClassName(classResult)[0].textContent;
}

function BetPlayer(){
    var arrNumChip = [];
}

function GetArrNumChip(betValue){
    var arrNumChip = [];
    for(var i = chipValue.length-1; i >= 0; i--){
        arrNumChip[i] = parseInt(betValue/chipValue[i])
        chipValue = chipValue%betValue
    }
}

function FirstStratgy(){
    if(!ableToBet){
        historyResult = GetResult();
        if(historyResult != ""){
            ableToBet = true
        }
    }
    else{

    }
    setTimeout(FirstStratgy,100);
}

function check(){
    //console.log(countLen);
    //console.log(document.getElementsByClassName(countLen[0])[0].textContent);
    //console.log(document.getElementsByClassName(countLen[1])[1].textContent);
    //console.log(document.getElementsByClassName(classResult)[0].textContent == "");
    //console.log(classNameBanker);
    //document.getElementsByClassName(classNameBanker)[0].click();
}
check();
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
function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "minhkhang311018",
        Password: "Hoang@0305",
        From: "minhkhang3110182@gmail.com",
        To: '6882216@gmail.com',
        Subject: "Mail Subject here",
        Body: "Mail Body Here"
    })
    .then(function (message) {
        alert("mail sent successfully")
    });
}