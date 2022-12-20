//Cards
const cardsPanel   = document.querySelector(".cards");
const farmName1    = document.querySelector("#farm-1");
const farmName2    = document.querySelector("#farm-2");
const farmName3    = document.querySelector("#farm-3");
const farmName4    = document.querySelector("#farm-4");
const farmName5    = document.querySelector("#farm-5");
const farmName6    = document.querySelector("#farm-6");
const cl1 = document.querySelector("#cl-1");
const cl2 = document.querySelector("#cl-2");
const cl3 = document.querySelector("#cl-3");
const cl4 = document.querySelector("#cl-4");
const cl5 = document.querySelector("#cl-5");
const cl6 = document.querySelector("#cl-6");
//Sections
let   headingDiv     = document.querySelector('#heading');
let   midSect        = document.querySelector('#MiddleSection');
let delButtonSection = document.querySelector('#delmess');
//Buttons
const deleteFarmBtn      = document.querySelector("#deleteFarmBtn");
const emptiness    = document.querySelector('#emptiness'); //------
const backBtn      = document.querySelector("#backBtn");
const confirmDelBtn= document.querySelector("#confDel");
const createBtnBlw = document.querySelector("#createBtnBlw");
const cancelBtnBlw = document.querySelector("#cancelBtnBlw");
//Messages & Inputs
const pagerBack    = document.querySelector("#back"); 
const pagerFroward = document.querySelector("#forward"); 
const messageElem1 = document.querySelector("#message1");
const messageElem2 = document.querySelector("#message2");
const messageElem3 = document.querySelector("#message3");
const prebox1      = document.querySelector("#preBox1");
const prebox2      = document.querySelector("#preBox2");
const input0       = document.querySelector("#input-line0");
const input1       = document.querySelector("#input-line1");
const input2       = document.querySelector("#input-line2");

const cardColors=["gray","green","orange","blue","red","skyblue"];
let existingCards=[];
let currentPage=0;
let maxPage = 0;

let totalFarms = 0;
let selectedFarm = 1;
let newFarmIdentifier = 1;
let state = 1;



begin();

function begin(){
  let selectedFarm = 1;
  let newFarmIdentifier = 1;
  let state = 1;
  
  midSect.innerHTML = `<div class="column right"><button class="msg A" onclick="addMessageButton()"> Add new message </button></div>`;        
  renderCurrentFarms();  
  setPager();
}


/*1. Initial State
  2. State when Creating a New Farm
  3. State when deleting a Farm
  4. State when deleting a Farm*/
let cardNum = 3;
let fName = "ThisFarm";  //traer del backend, a través de pag principal
let clName = "ThisClient";
cardsPanel.innerHTML =  `
&emsp;
<div class="cpanel cpanel-${cardColors[cardNum-2]}">
  <div class="icon-part">
    <i class="num" aria-hidden="true">${newFarmIdentifier}</i><br><br><br>
    <small id="farm-${cardNum}"> Farm: ${fName} </small>    
    <p id="cl-${cardNum}"> Client: ${clName} </p>
  </div>
  <div class="card-content-part">
    <a href="./Messages.html"> Messages </a>
  </div>
</div>`;

function addMessageButton() {
  midSect.innerHTML += `
          <div class="column">
              <input id="input-line1.1"  class='form-control2' type="text" placeholder="Type author's name"></input><br><br>
              <input id="input-line1.2"  class='form-control2' type="text" placeholder="Type your Message"></input>
          </div>
          <div class="column left"><button class="A" onclick="addMessage()"> Send </button></div>`
      const editBtn      = document.querySelector("#editBtn");
      const deleteBtn    = document.querySelector("#deleteBtn");    
}
    
    
    // else if (set == 3) {
    //     prebox1.style.visibility = "hidden";
    //     prebox2.style.visibility = "hidden";
    //     createBtn.style.visibility = "hidden";
    //     cancelBtnBlw.style.visibility = "hidden";
    //     headingDiv.innerHTML = `            
    //         <div>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;                
    //             <button id="confDel" class="msg" onclick="deleteFarm()" class="msg"> CONFIRM DELETE </button> &emsp;
    //             <input id="input-line0" class='form-control3' type="text" placeholder=" Write the farm id"></input> &emsp;
    //             <button id="backBtn" class="msg" onclick="returnStart()"> BACK </button><br><br>
    //         </div>`
    // } else if (set == 4) {
    //     prebox1.style.visibility = "visible";
    //     prebox2.style.visibility = "hidden";
    //     createBtn.style.visibility = "hidden";
    // }


function renderCurrentFarms(fName, clName){    //no params
  //showNewFarm(fName,clName)
}

function createFarmButton() {
    if (state == 1) {
        headingDiv.innerHTML = "<i>Please go to the panel below...</i>";
        newMessagesSet("CREATE FARM, Please provide the info of the farm to add", "", "");                
        setVisualState(2);
        emptiness.innerHTML = "";
    } else {
        updateElementContent(messageElem2, "Not valid option. Please continue.");
        updateElementContent(messageElem3, "");
    }
}

function addMessage(){
  //bring from backend
  renderMessages();
}

function renderMessages(){
  
}

function pickMessageToDelete(){
  // get input box innerText
}


function editFarmInfo(){
  
}

function deleteFarm(){
  //delete farm In Backend
}

function deleteMessage(){
  //delete message in backend
  renderMessages();
}

function showDelButtons(){
  delButtonSection.innerHTML = `
            <input id="input-line2" class='form-control3' type="text" placeholder="Write the message id"></input>
            <button onclick="pickMessageToDelete()"> Delete </button><br><br>`;
}
function pickMessageToDelete(){
  
}

function setPager(){ 
  if(totalFarms==0){pager.innerHTML = `No pages yet`;}else{
  pager.innerHTML = `Page ${currentPage} of ${maxPage}`;}
}

function previousMessagesPage(){
  
}

function nextMessagesPage(){
  
}