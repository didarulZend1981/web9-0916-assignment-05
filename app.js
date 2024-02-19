

const allBtns = document.getElementsByClassName("add-btn");
// console.log(allBtn);
let count =0;
for(const btn of allBtns){
  btn.addEventListener("click",function(e){
    count = count +1 ;
   

    
    if(count===4){
      showElementByID("cupponDiv");
      
    }else if(count>4){
      document.getElementById("row-sit-C").innerHTML("disabled", true);
    }
    
    else{
      hideElementByID("cupponDiv");
    }
    setInnerText("number-seat",count)
    setInnerText("count-seat",count)
    

    const name=e.target.innerText;
    const price=parseInt(550);
    // console.log(name);

    const selectedContainer = document.getElementById(
      "selected-seat"
    );
    
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerText = name;
    const p3 = document.createElement("p");
    p3.innerText = "Economoy";

    const p2 = document.createElement("p");
    p2.innerText = price;

    li.appendChild(p);
    li.appendChild(p3);
    li.appendChild(p2);
    selectedContainer.appendChild(li);
    
    event.target.style.backgroundColor = "#1dd100";
    event.target.style.color = 'white';
    event.target.setAttribute("disabled", true);
    
    totalPrice("total-value", price);
    const dis= getValue("cupon-value");

    
       
    

      
  })
}

function applyFunction(){
    showElementByID("disPrice");
    hideElementByID("cupponDiv");
    let cupon = document.getElementById("cupponCode").value;
    
    const convertTotal = getValue("total-value");
    let discuntV=0;
    if (cupon == "NEW15") {
      discuntV=convertTotal*(15/100);
     
      
    } else if (cupon == "Couple 20") {
      
       discuntV=convertTotal*(20/100);
    }else {
      discuntV=0;
      showElementByID("disPriceErorr");
      hideElementByID("disPrice");
      
    }

    setInnerText("cupon-value",discuntV);
    grtotalPrice();

}

function hideElementByID(elementID){
  const section = document.getElementById(elementID);
  section.classList.add('hidden');
}

function showElementByID(elementID){
  const section = document.getElementById(elementID); 
  section.classList.remove('hidden');
}

function getValue(id) {
  const valueInnerText = document.getElementById(id).innerText;
  const value = parseInt(valueInnerText);
  return value;
}
function totalPrice(id, value) {
  const totalCost = getValue(id);
  const total = parseInt(totalCost) + parseInt(value);
  document.getElementById(id).innerText = total;
  grtotalPrice();
  
}
function grtotalPrice() {
  const discount = getValue("cupon-value");
  const total = getValue("total-value");
  const gt=total-discount;
 
    
  document.getElementById("total-grand").innerText =gt;
  
}


function setInnerText(id,value){
  document.getElementById(id).innerText=value;
}
