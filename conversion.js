

$(document).ready(function () {
 
	var list1 = document.getElementById('firstList');
    document.getElementById('myCon').value="";
    document.getElementById("finalCon").innerHTML = "Please select a conversion type";
	list1.options[0] = new Option('--Select--', '');
	list1.options[1] = new Option('Weight', 'Weight');
	list1.options[2] = new Option('Length', 'Length');

    //Hides the keyboard if the user presses submit
    $("#myCon").on("keyup", function(event){
    if (event.keyCode == 13) {
            event.preventDefault();
            event.target.blur()
        }
})

});


/*Function to reset converter*/
function reset(){
    var list1 = document.getElementById('firstList');
    var list2 = document.getElementById("secondList");
    var list3 = document.getElementById("thirdList");
    document.getElementById('myCon').value="";
    document.getElementById("finalCon").innerHTML = "Please select a conversion type";
	list1.options[0] = new Option('--Select--', '');
	list1.options[1] = new Option('Weight', 'Weight');
	list1.options[2] = new Option('Length', 'Length'); 
    list2.options.length=0;
    list3.options.length=0;
    list2.options[0] = new Option('Please select a conversion type', '');
    list3.options[0] = new Option('Please select a conversion type', '');
}

function getItems(){
 
            var list1 = document.getElementById('firstList');
            var list2 = document.getElementById("secondList");
            var list3 = document.getElementById("thirdList");
            var list1SelectedValue = list1.options[list1.selectedIndex].value;
            

            if (list1SelectedValue=='Weight')
            { 
                
                list2.options.length=0;
                list2.options[0] = new Option('--Select--', '');
                list2.options[1] = new Option('Pounds', 'Pounds');
                list2.options[2] = new Option('Kilograms', 'Kilograms');
                list2.options[3] = new Option('Stone', 'Stone');
                list2.options[4] = new Option('Newtons', 'Newtons');
                list2.options[5] = new Option('Grams', 'Grams');
                list2.options[6] = new Option('Ounces', 'Ounces');

                list3.options.length=0;
                list3.options[0] = new Option('--Select--', '');
                list3.options[1] = new Option('Pounds', 'Pounds');
                list3.options[2] = new Option('Kilograms', 'Kilograms');
                list3.options[3] = new Option('Stone', 'Stone');
                list3.options[4] = new Option('Newtons', 'Newtons');
                list3.options[5] = new Option('Grams', 'Grams');
                list3.options[6] = new Option('Ounces', 'Ounces');
                document.getElementById("finalCon").innerHTML = "Please select valid units to convert from and to"; 
            }
            else if (list1SelectedValue=='Length')
            {
                 
                list2.options.length=0;
                list2.options[0] = new Option('--Select--', '');
                list2.options[1] = new Option('m', 'm');
                list2.options[2] = new Option('mm', 'mm');
                list2.options[3] = new Option('cm', 'cm');
                list2.options[4] = new Option('feet', 'feet');
                list2.options[5] = new Option('inches', 'inches');
                list2.options[6] = new Option('yards', 'yards');
                list2.options[7] = new Option('miles', 'miles');

                list3.options.length=0;
                list3.options[0] = new Option('--Select--', '');
                list3.options[1] = new Option('m', 'm');
                list3.options[2] = new Option('mm', 'mm');
                list3.options[3] = new Option('cm', 'cm');
                list3.options[4] = new Option('feet', 'feet');
                list3.options[5] = new Option('inches', 'inches');
                list3.options[6] = new Option('yards', 'yards');
                list3.options[7] = new Option('miles', 'miles');
                document.getElementById("finalCon").innerHTML = "Please select valid units to convert from and to"; 
            }

            else{

                list2.options.length=0;
                list3.options.length=0;
                list2.options[0] = new Option('Please select a conversion type', '');
                list3.options[0] = new Option('Please select a conversion type', '');
                document.getElementById("finalCon").innerHTML = "Please select a conversion type";
            }

}



function convert1(){
	var list1 = document.getElementById("firstList");
	var list2 = document.getElementById("secondList");
    var list3 = document.getElementById("thirdList")
    var val4;
    if(list1.selectedIndex>0){

    	if(list2.selectedIndex > 0 && list3.selectedIndex > 0){

    		val1 = list2.options[list2.selectedIndex].value;
    		val2 = list3.options[list3.selectedIndex].value;
    		var val3 = parseFloat(document.getElementById("myCon").value);

    		if(isNaN(val3) || val3==""){
    			document.getElementById("finalCon").innerHTML = "Please insert a valid number";
    		}

            
    	
    		else{
                var inVal = val3;
                var list1Val = list1.options[list1.selectedIndex].value;
                var list2Val = list2.options[list2.selectedIndex].value;
                var list3Val = list3.options[list3.selectedIndex].value;
   				val4 = theConversion(list1Val,list2Val,list3Val,inVal);
                document.getElementById("finalCon").innerHTML = inVal + " " + list2Val + " = " + val4 + " " + list3Val;
    		}

            

    	}

		else{
                if(list2.selectedIndex==0 && list3.selectedIndex>0){
                    document.getElementById("finalCon").innerHTML = "Please select valid units to convert from";
                }

                else if(list3.selectedIndex==0 && list2.selectedIndex>0){
                    document.getElementById("finalCon").innerHTML = "Please select valid units to convert to";
                }

                else{
                    document.getElementById("finalCon").innerHTML = "Please select valid units to convert from and to"; 
                }
                
            }
            
        
	}

	else{
		document.getElementById("finalCon").innerHTML = "Please select a valid conversion type";
	}
}


function theConversion(conType,l1,l2,v1){

    var rValue;
    if(conType=="Weight"){
        
        switch(l1){
            case "Pounds":
                rValue = fromLbs(l2,v1);
                break;
            case "Kilograms":
                rValue = fromKg(l2,v1);
                break;
            case "Stone":
                rValue = fromStone(l2,v1);
                break;
            case "Newtons":
                rValue = fromN(l2,v1);
                break;  
            case "Grams":
                rValue = fromG(l2,v1);
                break;
            case "Ounces":
                rValue = fromOunce(l2,v1);
                break;                  
        }    
    }

    if(conType=="Length"){
        
        switch(l1){
            case "m":
                rValue = fromMeters(l2,v1);
                break;
            case "mm":
                rValue = fromMm(l2,v1);
                break;
            case "cm":
                rValue = fromCm(l2,v1);
                break;
            case "feet":
                rValue = fromFeet(l2,v1);
                break;  
            case "inches":
                rValue = fromInch(l2,v1);
                break;
            case "yards":
                rValue = fromYard(l2,v1);
                break;
            case "miles":
                rValue = fromMile(l2,v1);
                break;                           
        }    
    }


    
    return rValue;
}



/*-------Functions for weight conversion------*/

function fromKg(type1,val1){
    var finalVal;
    switch(type1){
        case "Pounds":
            finalVal = val1 * 2.20462;
            break;
        case "Kilograms":
            finalVal = val1;
            break;
        case "Stone":
            finalVal = val1 * 0.157473;
            break;
        case "Newtons":
            finalVal = val1 * 9.807;
            break;  
        case "Grams":
            finalVal = val1 * 1000;
            break;
        case "Ounces":
            finalVal = val1 * 35.274;
            break;                  
    }

    return finalVal;
}


function fromLbs(type1,val1){
    var finalVal;
    switch(type1){
        case "Pounds":
            finalVal = val1;
            break;
        case "Kilograms":
            finalVal = val1 * 0.453592;
            break;
        case "Stone":
            finalVal = val1 * 0.0714286;
            break;
        case "Newtons":
            finalVal = val1 * 4.4482216;
            break;  
        case "Grams":
            finalVal = val1 * 453.592551437;
            break;
        case "Ounces":
            finalVal = val1 * 16.0000064;
            break;                  
    }

    return finalVal;
}

  
function fromStone(type1,val1){
    var finalVal;
    switch(type1){
        case "Pounds":
            finalVal = val1 * 14;
            break;
        case "Kilograms":
            finalVal = val1 * 6.35029;
            break;
        case "Stone":
            finalVal = val1;
            break;
        case "Newtons":
            finalVal = val1 * 62.28;
            break;  
        case "Grams":
            finalVal = val1 * 6350.29;
            break;
        case "Ounces":
            finalVal = val1 * 224;
            break;                  
    }

    return finalVal;
}



function fromN(type1,val1){
    var finalVal;
    switch(type1){
        case "Pounds":
            finalVal = val1 * 0.22;
            break;
        case "Kilograms":
            finalVal = val1 * 0.10197162;
            break;
        case "Stone":
            finalVal = val1 * 0.0161;
            break;
        case "Newtons":
            finalVal = val1;
            break;  
        case "Grams":
            finalVal = val1 * 101.97;
            break;
        case "Ounces":
            finalVal = val1 * 3.60;
            break;                  
    }

    return finalVal;
}



function fromG(type1,val1){
    var finalVal;
    switch(type1){
        case "Pounds":
            finalVal = val1 * 0.00220462;
            break;
        case "Kilograms":
            finalVal = val1 * 0.001;
            break;
        case "Stone":
            finalVal = val1 * 0.000157473;
            break;
        case "Newtons":
            finalVal = val1 * 4.4482216;
            break;  
        case "Grams":
            finalVal = val1;
            break;
        case "Ounces":
            finalVal = val1 * 0.035274;
            break;                  
    }

    return finalVal;
}


function fromOunce(type1,val1){
    var finalVal;
    switch(type1){
        case "Pounds":
            finalVal = val1 * 0.0625;
            break;
        case "Kilograms":
            finalVal = val1 * 0.02834;
            break;
        case "Stone":
            finalVal = val1 * 0.004464;
            break;
        case "Newtons":
            finalVal = val1 * 4.4482216;
            break;  
        case "Grams":
            finalVal = val1 * 28.3495;
            break;
        case "Ounces":
            finalVal = val1;
            break;                  
    }

    return finalVal;
}
	
/*-------Functions for Length conversion------*/

function fromMeters(type1,val1){
    var finalVal;
    switch(type1){
        case "cm":
            finalVal = val1 * 100;
            break;
        case "mm":
            finalVal = val1 * 1000;
            break;
        case "m":
            finalVal = val1;
            break;
        case "feet":
            finalVal = val1 * 3.28084;
            break;  
        case "inches":
            finalVal = val1 * 39.3701;
            break;
        case "yards":
            finalVal = val1 * 1.09361;
            break; 
        case "miles":
            finalVal = val1 * 0.000621371;
            break;                      
    }

    return finalVal;
}   

function fromMm(type1,val1){
    var finalVal;
    switch(type1){
        case "cm":
            finalVal = val1 * 0.1;
            break;
        case "mm":
            finalVal = val1;
            break;
        case "m":
            finalVal = val1*0.001;
            break;
        case "feet":
            finalVal = val1 * 0.00328084;
            break;  
        case "inches":
            finalVal = val1 * 0.0393701;
            break;
        case "yards":
            finalVal = val1 * 0.00109361;
            break; 
        case "miles":
            finalVal = val1 * 0.000000621371;
            break;                      
    }

    return finalVal;
}    

function fromCm(type1,val1){
    var finalVal;
    switch(type1){
        case "cm":
            finalVal = val1;
            break;
        case "mm":
            finalVal = val1 * 10;
            break;
        case "m":
            finalVal = val1 * 0.01;
            break;
        case "feet":
            finalVal = val1 * 0.0328084;
            break;  
        case "inches":
            finalVal = val1 * 0.393701;
            break;
        case "yards":
            finalVal = val1 * 0.0109361;
            break; 
        case "miles":
            finalVal = val1 * 0.00000621371;
            break;                      
    }

    return finalVal;
}    

function fromFeet(type1,val1){
    var finalVal;
    switch(type1){
        case "cm":
            finalVal = val1 * 30.48;
            break;
        case "mm":
            finalVal = val1 * 304.8;
            break;
        case "m":
            finalVal = val1*0.3048;
            break;
        case "feet":
            finalVal = val1;
            break;  
        case "inches":
            finalVal = val1 * 12;
            break;
        case "yards":
            finalVal = val1 * 0.3333333;
            break; 
        case "miles":
            finalVal = val1 * 0.000189394;
            break;                      
    }

    return finalVal;
}    

function fromInch(type1,val1){
    var finalVal;
    switch(type1){
        case "cm":
            finalVal = val1 * 2.54;
            break;
        case "mm":
            finalVal = val1 * 25.4;
            break;
        case "m":
            finalVal = val1*0.0254;
            break;
        case "feet":
            finalVal = val1 * 0.083333;
            break;  
        case "inches":
            finalVal = val1;
            break;
        case "yards":
            finalVal = val1 * 0.0277778;
            break; 
        case "miles":
            finalVal = val1 * 0.000015783;
            break;                      
    }

    return finalVal;
}    

function fromYard(type1,val1){
    var finalVal;
    switch(type1){
        case "cm":
            finalVal = val1 * 91.44;
            break;
        case "mm":
            finalVal = val1 * 914.4;
            break;
        case "m":
            finalVal = val1*0.9144;
            break;
        case "feet":
            finalVal = val1 * 3;
            break;  
        case "inches":
            finalVal = val1 * 36;
            break;
        case "yards":
            finalVal = val1;
            break; 
        case "miles":
            finalVal = val1 * 0.000568182;
            break;                      
    }

    return finalVal;
}    

function fromMile(type1,val1){
    var finalVal;
    switch(type1){
        case "cm":
            finalVal = val1 * 160934;
            break;
        case "mm":
            finalVal = val1 * 1609000;
            break;
        case "m":
            finalVal = val1*1609.34;
            break;
        case "feet":
            finalVal = val1 * 5280;
            break;  
        case "inches":
            finalVal = val1 * 63360;
            break;
        case "yards":
            finalVal = val1 * 1760;
            break; 
        case "miles":
            finalVal = val1;
            break;                      
    }

    return finalVal;
}     
    
