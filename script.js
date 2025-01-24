function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * (rate/100);
    //var amount = (int)principal + (float)(interest);
    var amount = parseInt(principal) + parseFloat(interest); 
    var result = document.getElementById("result");

    var year = new Date().getFullYear + parseInt(years);

    if (principal <= 0) 
    {
        alert("Please enter a positive number!");
        document.getElementById("principal").focus();

    }

    else {
        result.innerHTML = "If you deposit $" + "<mark>" + principal + "</mark>" + ",\<br\> at an interest rate of " + "<mark>" + rate + "%" + "</mark>" + "\<br\> You will receive an amount of $" + "<mark>" + amount + "</mark>" + ",\<br\> in the year " + "<mark>" + year + "</mark>" + "\<br\>";
    }
}
        
function updateRate()
{
    var rateVal = document.getElementById("rate").value;
    //document.span.rate_val = rateVal;
    document.getElementById("rate_val").innerText = rateval;

    


}


        
