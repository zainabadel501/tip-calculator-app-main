
var people=1;
var bill=0;
var tip=0;
var custom=0;

var billinput=$("#bill__input").blur(()=>{
    bill=parseFloat(billinput.val());
    calculate();
});

var peopleInput=$("#n_of_people").blur(()=>{
    people=parseFloat(peopleInput.val());
    if (people==0){
        $("#n_of_people").addClass("error__input");
        $(".error_pha").css("display","block");
        
    }
    else {
        $("#n_of_people").removeClass("error__input");
        $(".error_pha").css("display","none");
        calculate();
    }
    
});

var costuminput=$("#custom").blur(()=>{
    custom=parseFloat(costuminput.val());
    if(custom!=0){
        $(".tip__btn").removeClass("active");
        tip=custom/100;
        calculate();
    }
});

$(".tip__btn").click(function(e){
    e.preventDefault();
    costuminput.val("Custom");
    $(".tip__btn").each( function(){
        $(this).removeClass("active");
    });
    $(this).addClass("active");
        tip=parseFloat(this.value);
        tip=tip/100;
        calculate();
        
       
   

});



$(".result_btn").click(function(){
people=1;
bill=0;
tip=0;
costuminput.val("Custom");
$(".tip__btn").removeClass("active");
billinput.val("0");
peopleInput.val("0");
calculate();
});


function calculate(){
    var tip__result=0;
    var total_result=0;
    var tip_per_person=0;
    tip__result=((bill*tip)/people).toFixed(2);
    tip_per_person=parseFloat(tip__result);
    total_result=((bill/people)+tip_per_person).toFixed(2);
    document.querySelector("#tip__result").innerHTML = "$" + tip__result;
    document.querySelector("#total_result").innerHTML = "$" + total_result;

}