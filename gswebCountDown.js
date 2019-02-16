/*
    gswebCoundDown.js - https://juanjimeneztj.com
    Licensed under the MIT license - http://opensource.org/licenses/MIT

    Copyright (c) 2019 Juan jimenez
    
    CountDown created by Juan Jiménez.

    Initially this counter is counter in reverse only minutes and seconds.
    
    Repository: https://gitlab.com/juanjimeneztj/gswebcountdown.git
*/

var gswebDoc = $(document),gswebCountDown = $('#gsweb-count'), gswebCountDownMinutes, gswebCountDownSeconds, counter;

if(gswebCountDown.attr('data-minutes')){
    gswebCountDownMinutes = gswebCountDown.attr('data-minutes');
}else{
    gswebCountDownMinutes = 0;
} 
if(gswebCountDown.attr('data-seconds')){
    gswebCountDownSeconds = gswebCountDown.attr('data-seconds');
}else{
    gswebCountDownSeconds = 0;
} 

if (gswebCountDownMinutes < 10) { gswebCountDownMinutes = "0"+parseInt(gswebCountDownMinutes); } 
if (gswebCountDownSeconds < 10){ gswebCountDownSeconds = "0"+parseInt(gswebCountDownSeconds); } 
gswebCountDown.html(gswebCountDownMinutes+":"+gswebCountDownSeconds);

gswebDoc.ready(function(){
    counter = setInterval(function(){
        if(gswebCountDownSeconds > 0){
            gswebCountDownSeconds--;
        }else{
            if(gswebCountDownMinutes > 0){
                gswebCountDownMinutes--;
                gswebCountDownSeconds = 59;
            }else{
                clearInterval(counter);
            }
        }
        if (gswebCountDownMinutes < 10) { gswebCountDownMinutes = "0"+parseInt(gswebCountDownMinutes); } 
        if (gswebCountDownSeconds < 10){ gswebCountDownSeconds = "0"+parseInt(gswebCountDownSeconds); } 

        gswebCountDown.html(gswebCountDownMinutes+":"+gswebCountDownSeconds);
    },1000);

});