const draggableElements = document.querySelectorAll(".draggable-word");
const droppableElements = document.querySelectorAll(".droppable-blank");
var currentValue;
var currentClickElement;
var clickState=false;
var InsertCount=0;
var BLANKSIZE=16;
var BingoValue = new Array();
var wordList= new Array();
var droppableLst = new Array();
var draggableLst = new Array();
var imgName=['transparent.png','test.png'];
var isPC; //1:pc 0:mob

draggableElements.forEach(elem => {
  elem.addEventListener("dragstart", dragStart); 
});

droppableElements.forEach(elem => {
  elem.addEventListener("dragenter", dragEnter);
  elem.addEventListener("dragover", dragOver); 
  elem.addEventListener("dragleave", dragLeave);
  elem.addEventListener("drop", drop);
});


function dragStart(event) {
    event.dataTransfer.setData("text", event.target.id);
    currentValue=event.target.getAttribute("id");
    console.log(currentValue);
}

function formSubmit(){
    if(isPC==1){
        var name = document.getElementById("namepc");
        console.log("pc1");
    }else if(isPC==0){
        var name = document.getElementById("namemob");
        console.log("mob1");
    }
    
    if(name.value ==null || name.value ==""){
        alert("이름이 비었네요..\n이름이 없다면..");
        alert("곤..\n..란\n해..\n..요!");
        alert("제발당신의성함을적어주세요제발요제발당신의성함을적어주세요제발요제발당신의성함을적어주세요제발요제발당신의성함을적어주세요제발요제발당신의성함을적어주세요제발요제발당신의성함을적어주세요제발요제발당신의성함을적어주세요제발요제발당신의성함을적어주세요제발요제발당신의성함을적어주세요제발요제발당신의성함을적어주세요제발요제발당신의성함을적어주세요제발요제발당신의성함을적어주세요제발요제발당신의성함을적어주세요제발요제발당신의성함을적어주세요제발요제발당신의성함을적어주세요제발요제발당신의성함을적어주세요제발요제발당신의성함을적어주세요제발요제발당신의성함을적어주세요제발요제발당신의성함을적어주세요제발요제발당신의성함을적어주세요제발요제발당신의성함을적어주세요제발요제발당신의성함을적어주세요제발요제발당신의성함을적어주세요제발요제발당신의성함을적어주세요제발요제발당신의성함을적어주세요제발요제발당신의성함을적어주세요제발요제발당신의성함을적어주세요제발요제발당신의성함을적어주세요제발요제발당신의성함을적어주세요제발요제발당신의성함을적어주세요제발요제발당신의성함을적어주세요제발요제발당신의성함을적어주세요제발요제발당신의성함을적어주세요제발요제발당신의성함을적어주세요제발요제발당신의성함을적어주세요제발요제발당신의성함을적어주세요제발요제발당신의성함을적어주세요제발요제발당신의성함을적어주세요제발요제발당신의성함을적어주세요제발요제발당신의성함을적어주세요제발요제발당신의성함을적어주세요제발요제발당신의성함을적어주세요제발요제발당신의성함을적어주세요제발요제발당신의성함을적어주세요제발요제발당신의성함을적어주세요제발요제발당신의성함을적어주세요제발요제발당신의성함을적어주세요제발요제발당신의성함을적어주세요제발요제발당신의성함을적어주세요제발요제발당신의성함을적어주세요제발요제발당신의성함을적어주세요제발요제발당신의성함을적어주세요제발요제발당신의성함을적어주세요제발요제발당신의성함을적어주세요제발요제발당신의성함을적어주세요제발요제발당신의성함을적어주세요제발요제발당신의성함을적어주세요제발요제발당신의성함을적어주세요제발요제발당신의성함을적어주세요제발요제발당신의성함을적어주세요제발요제발당신의성함을적어주세요제발요제발당신의성함을적어주세요제발요제발당신의성함을적어주세요제발요제발당신의성함을적어주세요제발요");
        return;
    }
   
    var isAllFilled=true;
    for(var i=0; i<BingoValue.length;i++){
        if(BingoValue[i]=="-1"){
            console.log("하나라도..안채워진곳이..있으면..곤란..");
            isAllFilled=false;   
        }
    }
    if(isAllFilled){
        if(confirm("본 빙고판은 총괄진이 보관하지 않습니다.\n완성 빙고판의 사진을 찍지 않았다면 지금 PrintScreen키를 누르거나, 스크린샷 프로그램등을 이용하여 저장해주세요..\n저장 하셨나요?")){
            alert("전송했씁니다.");
            if(isPC==1){
                document.getElementById("submitform_pc").submit();
            }else if(isPC==0){
                document.getElementById("submitform_mob").submit();
            }
            
        }else{
            
         alert("죄송해요제발저장해주세요죄송해요제발저장해주세요죄송해요제발저장해주세요죄송해요제발저장해주세요죄송해요제발저장해주세요죄송해요제발저장해주세요죄송해요제발저장해주세요죄송해요제발저장해주세요죄송해요제발저장해주세요");   
        }
    }
    else{
        alert("아직 그..부분을 안채웠는데요.\n이러시면..\n곤..\n..란\n해..\n..요!");
        alert("채워주세요 부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요부탁드려요죄송해요");
    }
}


function dragEnter(event) {
  if(!event.target.classList.contains("dropped")) {
    event.target.classList.add("droppable-hover");
  }
}

function dragOver(event) {
  if(!event.target.classList.contains("dropped")) {
    event.preventDefault(); 
  }
}

function dragLeave(event) {
  if(!event.target.classList.contains("dropped")) {
    event.target.classList.remove("droppable-hover");
  }
}

function addCheck(){
    
    if(isDup()){
        return;
    }
    currentClickElementCancel();
    const clickElementData = event.target.getAttribute("id");
    const clickElement = document.getElementById(clickElementData);
    currentClickElement = clickElement;
    var newSrc = "check_word/"+clickElementData+".png";
    clickElement.src = newSrc;
    clickState=true;
}
function isDup(){
    var isDuplicated=false;
    for(var i=0; i<draggableLst.length;i++){
        if(draggableLst[i]==event.target){
            isDuplicated=true;
        }
    }
    return isDuplicated;
}
function currentClickElementCancel(){
    if(clickState==true){
        currentClickElement.src = "word/"+currentClickElement.getAttribute("id")+".png";
    }
}
function saveAnswer(){
    
    var answer="";
    for(var i=0; i<BingoValue.length;i++){
        if(i!=BingoValue.length-1){
            answer+=BingoValue[i]+",";
        }else{
            answer+=BingoValue[i];
        }
    }
    
    var answerValue;
        if( isPC==0 ){
            answerValue = document.getElementById("bAnswer_mob");
            console.log("mob2");
            
        }else if(isPC==1){
            answerValue = document.getElementById("bAnswer_pc");
            console.log("pc2");
        }
    console.log(answer);
    answerValue.setAttribute("value",answer);
    
}
function isBlank(ElementData){
    var isBlanked=false;
    
    var dIdr = (ElementData).substr(2,1);
    var dIdc = (ElementData).substr(3,1);
    dIdr = parseInt(dIdr)-1;
    dIdc = parseInt(dIdc)-1;
    
    console.log("클릭:"+dIdr+","+dIdc);

    if(BingoValue[4*(dIdr)+dIdc]!="-1"){
        isBlanked=true;
    }
    return isBlanked;
}
function addSticker(){
    
    if(clickState==false){
        return;
    }

    var undoBt = document.getElementById("undoBt");
    undoBt.disabled=false;
    var undoBt2 =document.getElementById("undoBtm");
    undoBt2.disabled=false;
    
    event.preventDefault();
    var stickerId=currentClickElement.getAttribute("id");
    const droppableElementData = event.target.getAttribute("id");
    const droppableElement = document.getElementById(droppableElementData);
    var cancel=false;
    console.log(droppableElementData);
    
    if(isBlank(droppableElementData)){
        return;
    }  
        
    var row = Number(droppableElementData.substr(2,1));
    var col = Number(droppableElementData.substr(3,1));
    

    wordList[InsertCount]=currentClickElement.getAttribute("id");
    droppableLst[InsertCount]=droppableElement;
    draggableLst[InsertCount]=currentClickElement;
    droppableElement.src = "sticker/"+stickerId+".png";
    currentClickElement.src = "checked_word/"+stickerId+".png";
    
    currentClickElement.setAttribute("draggable","false");
    currentClickElement.setAttribute("clickable","false");
    console.log(currentClickElement.getAttribute("id")+": "+ currentClickElement.getAttribute("clickable"));
    currentClickElement.classList.add("dragged");
    BingoValue[(row-1)*4+(col-1)]=stickerId;
    
    console.log(InsertCount);
    currentClickElement = "";
    InsertCount++;
    clickState=false;
    
    saveAnswer();
    
}

function drop(event) {
    var undoBt = document.getElementById("undoBt");
    undoBt.disabled=false;
    var undoBt2 =document.getElementById("undoBtm");
    undoBt2.disabled=false;

    event.preventDefault(); 
    event.target.classList.remove("droppable-hover");
    const draggableElementData = event.dataTransfer.getData("text"); 
    const droppableElementData = event.target.getAttribute("id");
    const draggableElement = document.getElementById(draggableElementData);
    if(isBlank(droppableElementData)){
        return;
    } 
    
     if(isDup()){
        return;
    }
    var isValie=false;
    for(var i=0; i<32; i++){
        if(i>=0 && i<10){
            var k = "0"+String(i);
        }else if(i>10){
            var k = String(i);
        }
        if(draggableElementData==k){
            console.log("draggableElem=",k);
            isValie=true;
        }
    }
    

    
    currentClickElementCancel();
    console.log(droppableElementData);
    var row = Number(droppableElementData.substr(2,1));
    var col = Number(droppableElementData.substr(3,1));
    
    var img = document.getElementById(droppableElementData);
    
    currentValue="";
    wordList[InsertCount]=draggableElementData;
    droppableLst[InsertCount]=img;
    draggableLst[InsertCount]=draggableElement;
    img.src = "sticker/"+ draggableElementData+".png";
    console.log((row-1)*4+(col-1));
    BingoValue[(row-1)*4+(col-1)]=draggableElementData;
        if(isValie){
        console.log("is Vaild.");
    }else{
            BingoValue[(row-1)*4+(col-1)]="-2";
        /*console.log("is not Valid."+draggableElement.getAttribute("id"));
        return;*/
    }
    console.log(InsertCount);
    InsertCount++;

    event.target.classList.add("dropped");    
   
    
    draggableElement.src = "checked_word/"+draggableElementData+".png";
    draggableElement.classList.add("dragged");
    draggableElement.setAttribute("draggable", "false");
    event.target.insertAdjacentHTML("afterbegin", `<i id="{draggableElementData}"></i>`);
    clickState=false;
    
    saveAnswer();

}


function posSearch(){
    var find = 0;
    if(InsertCount==0){
        console.log("value is empty");
        return -1;
    }
    for(var i=0; i<BLANKSIZE;i++){
        if(wordList[InsertCount-1]==BingoValue[i]){
            console.log(wordList[InsertCount-1]+":"+BingoValue[i]);
            find = 1;
            return i;
        }
    }
    if(find==0){
        console.log("not found");
        return -1;
    }
}
function undo(){
    var value = posSearch();
    if(value==-1){
        return 0;
        
    }else{
        BingoValue[value]="-1";
    }
    wordList[InsertCount-1]=null;
    droppableLst[InsertCount-1].src="transparent.png";
    droppableLst[InsertCount-1].classList.remove("dropped");
    droppableLst[InsertCount-1] = null;
    draggableLst[InsertCount-1].src="word/"+draggableLst[InsertCount-1].getAttribute("id")+".png";
    draggableLst[InsertCount-1].setAttribute("draggable","true");
    draggableLst[InsertCount-1].classList.remove("dragged");
    draggableLst[InsertCount-1] = null;
    InsertCount--;
    if(InsertCount==0){
        var undoBt = document.getElementById("undoBt");
        undoBt.disabled=true;
        var undoBt2 = document.getElementById("undoBtm");
        undoBt2.disabled=true;
    }
    console.log(value);
}
function remove(){
    for(var i =InsertCount-1; i>=0; i--){
        droppableLst[i].src = "transparent.png";
        draggableLst[i].setAttribute("draggable","true");
        draggableLst[i].src="word/"+draggableLst[i].getAttribute("id")+".png";
        draggableLst[i].setAttribute("clickable","true");
        droppableLst[i].classList.remove("dropped");
        draggableLst[i].classList.remove("dragged");
        wordList[i]=null;
    }
    InsertCount=0;
    for(var i=0; i<BLANKSIZE;i++){
        BingoValue[i]="-1";
    }
    for(var i =0; i<draggableLst.length;i++){
        draggableLst[i]=null;
    }
    for(var i=0; i<droppableLst.length;i++){
        droppableLst[i]=null;
    }
    var undoBt = document.getElementById("undoBt");
    undoBt.disabled=true;
    console.log("초기화 완료");
}
function win_load(){
    for(var i= 0; i<BLANKSIZE;i++){
     BingoValue[i]="-1";   
    }
    
    var filter = "win16|win32|win64|mac";
 
    if( navigator.platform  ){
        if( filter.indexOf(navigator.platform.toLowerCase())<0 ){
            console.log("mobile");
            document.getElementById("pc").style.display = 'none'; 
            document.getElementById("mobile").style.display = 'block'; 
            document.addEventListener("touchstart", this.onStart.bind(this), false);
            document.addEventListener("touchmove", this.onMove.bind(this), false);
            document.addEventListener("touchend", this.onEnd.bind(this), false);
            isPC=0;
            document.getElementById("isPC").setAttribute("value","0"); 
        }else{
            document.getElementById("mobile").style.display = 'none';
            document.getElementById("pc").style.display = 'block'; 
            document.getElementById("isPC").setAttribute("value","1");
            console.log("pc");
            isPC=1; 
        }
    }else{
        consol.log("????");
    }
    console.log("init_Complete");
}
window.onload=win_load;

var bStartEvent = false;
var bMoveEvent = false;
function onStart(e) {
    bStartEvent = true;
}
 
function onMove(e) {
    
    if(!bStartEvent) {
        return;
    }
    bMoveEvent = true;

}
 
function onEnd(e) {
    if(bStartEvent && !bMoveEvent) {
    }
    bStartEvent = false;
    bMoveEvent = false;
}
 
document.onkeydown = function(){
if (event.keyCode == 123) {

}
} 
