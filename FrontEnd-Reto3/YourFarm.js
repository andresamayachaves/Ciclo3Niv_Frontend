import {getAllFarmsFromBackend} from "./farmAsyncRequests.js";
//import {editFarmInBackend} from "./armAsyncRequests.js";
import {addNewFarmToBackend} from "./farmAsyncRequests.js";
//import {deleteFarmInBackend} from "./farmAsyncRequests.js";
//import  getFarmXFromBackend from "./farmAsyncRequests.js";

//Cards
const cardsPanel   = document.querySelector("#cards");
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
//Buttons
let   headingDiv   = document.querySelector('#heading');
const emptiness    = document.querySelector('#emptiness');
const createBtn    = document.querySelector("#createBtn");
const deleteBtn    = document.querySelector("#deleteBtn");
const backBtn      = document.querySelector("#backBtn");
const confirmDelBtn= document.querySelector("#confDel");
const createBtnBlw = document.querySelector("#createBtnBlw");
const cancelBtnBlw = document.querySelector("#cancelBtnBlw");
//Messages & Inputs
const pager        = document.querySelector("#pager"); 
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


setVisualState(1);
renderCurrentFarms();  
setPager();


function begin(){
  let selectedFarm = 1;
  let newFarmIdentifier = 1;
  let state = 1;
  setVisualState(1);
  renderCurrentFarms();  
}


/*1. Initial State
  2. State when Creating a New Farm
  3. State when deleting a Farm
  4. State when deleting a Farm*/


function setVisualState(set) {
    if (set == 1) {
        headingDiv.innerHTML = `
          <button id="createBtn" onclick="createFarmButton()"> CREATE FARM </button>
          <button id="deleteBtn" onclick="viewDelFarm()"> DELETE FARM </button><br><br>`;
        prebox1.style.visibility = "hidden";
        prebox2.style.visibility = "hidden";
        createBtn.style.visibility = "Visible";
        deleteBtn.style.visibility = "Visible";
        createBtnBlw.style.visibility = "hidden";
        cancelBtnBlw.style.visibility = "hidden";
    } else if (set == 2) {
        prebox1.style.visibility = "visible";
        prebox2.style.visibility = "visible";
        createBtn.style.visibility = "hidden";
        deleteBtn.style.visibility = "hidden";
        createBtnBlw.style.visibility = "visible";
        cancelBtnBlw.style.visibility = "visible";

    } else if (set == 3) {
        prebox1.style.visibility = "hidden";
        prebox2.style.visibility = "hidden";
        createBtn.style.visibility = "hidden";
        cancelBtnBlw.style.visibility = "hidden";
        headingDiv.innerHTML = `            
            <div>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;                
                <button id="confDel" class="msg" onclick="deleteFarm()" class="msg"> CONFIRM DELETE </button> &emsp;
                <input id="input-line0" class='form-control3' type="text" placeholder=" Write the farm id"></input> &emsp;
                <button id="backBtn" class="msg" onclick="returnStart()"> BACK </button><br><br>
            </div>`
    } else if (set == 4) {
        prebox1.style.visibility = "visible";
        prebox2.style.visibility = "hidden";
        createBtn.style.visibility = "hidden";
    }
}

function renderCurrentFarms(( //fName, clName){    //no params   //showNewFarm(fName,clName)
    allFarms = [];
    getAllFarmsFromBackend().then(response => {
        allFarms = response;
        console.log(allFarms);
        allFarms.forEach(farm => createFarm(farm));
    });
  
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

function showMessage0(message) {
    const headingDiv = document.querySelector('#heading');
    headingDiv.innerText = message;
}

function createFarm(f) {
  fName  = input1.value;
  clName = input2.value;
  let newFarm = {
        address: fName,
        extension: 450,
        category:{id:1},
        name:"Hacienda Lucas km 12 via capital",
        description":"Hacienda Lucas km 12 via capital"
  };
      
    };
  if (fName!="" && clName!=""){    
    addNewFarmToBackend(farm); //sendFarmToDB();
    renderCurrentFarms();
    //showNewFarm(fName, clName); // traer nombres de la DB a través del backend
  }else{
    updateElementContent(messageElem1, "Farm has not been create. Please fill both data");
    updateElementContent(messageElem3, "Please fill both data.");
  }
}

function deleteFarm() {
  
}

function cancelCreate(){
  setVisualState(1);
  if(totalFarms>0){emptiness.innerHTML = "";}
  else{emptiness.innerText ="No farms yet. Let's create one!"}  //ToDo replace with renderCurrentFarms
}


function viewDelFarm() {
    setVisualState(3);
}

function returnStart() {
    state = 1
    setVisualState(state);
    headingDiv.innerHTML = `<button id="createBtn" onclick="createFarmButton()"> CREATE FARM </button>
                            <button id="deleteBtn" onclick="viewDelFarm()"> DELETE FARM </button><br><br>`

}

function backPageFarm() {renderCurrentPage()}

function forwardPageFarm() {}

//Service
function newMessagesSet(m1, m2, m3) {
    updateElementContent(messageElem1, m1);
    updateElementContent(messageElem2, m2);
    updateElementContent(messageElem3, m3);
}

function updateElementContent(Elem, newContent) {
    Elem.textContent = newContent;
}

function showNewFarm(fName, clName){  // get names from backend using createFarm()
  currentPage = Math.ceil((newFarmIdentifier-1)/6);
  let cardNum = newFarmIdentifier%6+1;
  let pageToFill = Math.ceil(newFarmIdentifier/6);
  showNextCard(cardNum, fName, clName);
  totalFarms += 1;
  setPager();
}

function showNextCard(cardNum, fName, clName){
  if(newFarmIdentifier%6==1){
    createNewPage();
  }
  cardsPanel.innerHTML +=  `
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
  newFarmIdentifier+=1; //llevar a createFarm()
}

function createNewPage(){
  cardsPanel.innerHTML = "";
  currentPage+=1;
  maxPage+=1;
  setPager();
}  

function renderCurrentPage(){
  
}

function setPager(){ 
  if(totalFarms==0){pager.innerHTML = `No pages yet`;}else{
  pager.innerHTML = `Page ${currentPage} of ${maxPage}`;}
}