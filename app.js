function handleProductChange(product,isIncrease){
    const productInput = document.getElementById(product + "-count");
    const productCount = parseInt(productInput.value);
    let productNewInput = productCount;
    if(isIncrease == true){
       productNewInput = productCount + 1;
    }
    if(isIncrease == false && productCount > 0){
       productNewInput = productCount - 1;
    }
    productInput.value = productNewInput;

    let productTotal = 0;
    if(product == 'phone'){
       productTotal = productNewInput * 1219;
    }
    if(product == 'case'){
       productTotal = productNewInput * 59;
    }
    document.getElementById(product + "-total").innerText = "$" + productTotal;
    calculateTotal();
 }
 function calculateTotal(){
    const phoneInput = document.getElementById("phone-count");
    const phoneCount = parseInt(phoneInput.value);

    const caseInput = document.getElementById("case-count");
    const caseCount = parseInt(caseInput.value);

    const totalPrice = phoneCount * 1219 +  caseCount * 59;
    document.getElementById("sub-total").innerText = '$'+totalPrice;

    const tax = totalPrice * 0.05;
    const taxTotal = Math.round(tax);

    document.getElementById("tax").innerText = '$'+taxTotal;

    document.getElementById("total").innerText = '$'+totalPrice;
 }
 document.getElementById("checkout").addEventListener("click",function(){
    alert("Thank You for the Purchase.");
 })