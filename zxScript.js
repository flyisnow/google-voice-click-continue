var bn = $(".modal .borderRight");
var element = bn[0];
var creatTouchstartEventAndDispatch =function(el) { 
          var event = document.createEvent('Events');
          event.initEvent('touchstart', true, true); 
          el.dispatchEvent(event); 
     }

var loopTimes=500000;

var sleepMicroSecond=350;
var i = 1;

function myTouchstartOld(){
         $(".modal-pay-error").css({
                "-webkit-transform": "scale(0)",
                transform: "scale(0)"
            });
            setTimeout(function() {
                $(".masking").addClass("none");
                $("body").css("overflow", "auto");
                $(".modal .borderLeft").addClass("none");
                $(".modal .borderRight").html("知道了")
            }, 50)
}

function myTouchstart(){
         $(".modal-pay-error").css({
                "-webkit-transform": "scale(0)",
                transform: "scale(0)"
            });
                $(".masking").addClass("none");
                $("body").css("overflow", "auto");
                $(".modal .borderLeft").addClass("none");
                $(".modal .borderRight").html("知道了");

}


function c(){
    var bn = $(".modal .borderRight");
    var element = bn[0];
    if('知道了'==element.innerHTML){
        //  var event = document.createEvent('Events');
        //  event.initEvent('touchstart', true, true); 
        //  element.dispatchEvent(event); 
        myTouchstart();
    }
}


function myLoop (){
        c();	
	window.submitOrder();

	setTimeout(function(){
	  i++;
	  if( i< loopTimes){	  
            myLoop();
          }	
           c();	  
     	  },sleepMicroSecond);     

}

