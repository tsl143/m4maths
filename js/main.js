var score=0;
$(document).ready(function(){
    if(window.localStorage.getItem('md5'))
        {$('#login').show();}
    else
        {$('#register').show();}
        
    $('.hometab, header').click(function(){
        homesweethome();
    });
    $('#homepage section').click(function(){
    $('#homepage').hide();
    $('#question').slideDown();
    });
    $('.answer').click(function(){
        $('.answer').css({'background-color':'red'});
            $('.right').css({'background-color':'green'});
        if ($(this).hasClass('right')){
            score++;
            
        }
    });
});

var src=['+','-','*','/','+','-','*','/','+','-'];
var i=10;
function rockit(type){
   
        itseasy=setInterval(function(){--i; easy(type)},5000);
   
}
function easy(type)
{
    $('.answer').css({'background-color':'transparent'});
    $('.right').removeClass('right');
    opr1=Math.floor((Math.random())*10);
    opr2=Math.floor((Math.random())*10);
    opr3=Math.floor((Math.random())*10);
    opr4=Math.floor((Math.random())*10);
    while(!opr2){opr2=Math.floor((Math.random())*10);}
    while(!opr3){opr3=Math.floor((Math.random())*10);}
    while(!opr4){opr4=Math.floor((Math.random())*10);}
    oprfalse=Math.floor((Math.random())*10);
    while(opr1==oprfalse){oprfalse=Math.floor((Math.random())*10);}
    oprind=Math.floor((Math.random())*10);
    oprind1=Math.floor((Math.random())*10);
    oprind2=Math.floor((Math.random())*10);
    if (type=="easy"){
        formula=opr1+src[oprind]+opr2;
        ambiguity=oprfalse+src[oprind]+opr2;
        }
    else if (type=="normal")
    {
        formula=opr1+src[oprind]+opr2+src[oprind1]+opr3;
        ambiguity=oprfalse+src[oprind]+opr2+src[oprind1]+opr3;
    }
    else {
        formula=opr1+src[oprind]+opr2+src[oprind1]+opr3+src[oprind2]+opr4;
        ambiguity=oprfalse+src[oprind]+opr2+src[oprind1]+opr3+opr3+src[oprind2]+opr4;
    }
    answer=eval(formula);
    fraud=eval(ambiguity);
    $("#problem").html(formula);
    if(answer%2){$("#opt1").html(answer);$("#opt1").addClass('right');$("#opt2").html(fraud);}else{$("#opt1").html(fraud);$("#opt2").html(answer);$("#opt2").addClass('right');}
    
    if (i==0){clearInterval(itseasy);alert(score);score=0;}
}

function homesweethome(){
$('[data-role="page"]').hide();
$('#homepage').slideDown();
}


