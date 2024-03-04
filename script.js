//creating a div element 
var div = document.createElement("div");
div.style.textAlign="center";
div.style.margin="60px";

//creating a input element dropdown , to select the values
var dropdown = document.createElement("select");
dropdown.style.width="20%"
dropdown.style.padding="10px"
dropdown.id="drop"
// Create options and add them to the dropdown
var option1 = document.createElement("option");
option1.value = "biryani";
option1.text = "Biryani";

var option2 = document.createElement("option");
option2.value = "burger";
option2.text = "Burger";

var option3 = document.createElement("option");
option3.value = "butter-chicken";
option3.text = "Butter Chicken";

var option4 = document.createElement("option");
option4.value = "dessert";
option4.text = "Dessert";

var option5 = document.createElement("option");
option5.value = "dosa";
option5.text = "Dosa";

var option6 = document.createElement("option");
option6.value = "idly";
option6.text = "Idly";

var option7 = document.createElement("option");
option7.value = "pasta";
option7.text = "pasta";

var option8 = document.createElement("option");
option8.value = "pizza";
option8.text = "Pizza";

var option9= document.createElement("option");
option9.value = "rice";
option9.text = "Rice";

var option10 = document.createElement("option");
option10.value = "samosa";
option10.text = "Samosa";

// Add the dropdown to the DOM
dropdown.append(option1,option2,option3,option4,option5,option6,option7,option8,option9,option10);




//creating a Button element 
var button = document.createElement("button");
button.innerHTML="See Image of the dish!!!"
button.setAttribute("onclick","getval()")
button.className="btn btn-primary"
button.style.marginLeft="10px"

//Appending to the html file
div.append(dropdown,button)
document.body.append(div)

//Getting the values from the dropdown input
function getval(){
var val =document.getElementById("drop").value;
console.log(val)

foo(val);
}

//Passing the values to the api by the values selected by the user
async function foo(val){
    try{
        var res =`https://foodish-api.com/images/${val}/${val}1.jpg`
      
        console.log(res)
  
        var div1 = document.createElement("div");
        div1.style.textAlign="center";
        div1.style.margin="60px";
        var img = document.createElement("img");
        img.setAttribute("src",res)
        div1.append(img)
        document.body.append(div1)
    
    }
    catch(error){
        console.log(error)
        var div1 = document.createElement("div");
        div1.style.textAlign="center";
        div1.style.margin="60px";
        div1.innerHTML=
        `Error : ${error}`;
        document.body.append(div1)
    }
    
}




