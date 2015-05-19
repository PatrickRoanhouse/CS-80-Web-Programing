// Patrick Roanhouse CS 80 Section 1678
// Section 12.4 assignment javascript


// base variable
var cost; 
var tipRate; 
var total;



// function to calculate cost added with percent of tip for total cost
var calc = function() 
{

    // input
    cost = +document.getElementById("cost").value;
    tip = +document.getElementById("tip").value;
    
    // calculation
    total = cost * (1 + tip/100);
	
    // output  
    document.getElementById("total").innerHTML = "$" + total.toFixed(2);
};