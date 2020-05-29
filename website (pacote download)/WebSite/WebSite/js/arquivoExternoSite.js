/*Slide*/
$(function(){

    var liWidth = $("#slide ul li").outerWidth(),
        speed   = 3500,
        rotate  = setInterval(auto, speed); // Set interval vai executar a função auto mediante o speed definido

    
    //Mostra os botões quando passamos o mouse por cima do slide
    $("section#slide").hover(function(){
        $("section#buttons-slide").fadeIn();
        clearInterval(rotate); //Faz com que o setInterval pare de funcionar 
    }, function() {
        $("section#buttons-slide").fadeOut();
        rotate  = setInterval(auto, speed);
    });

    //Botão next
    $(".next").click(function(e){
        e.preventDefault(); 
    
        $("section#slide ul").css({'width':'99999%'}).animate({left:-liWidth}, function(){
            $("#slide ul li").last().after($("#slide ul li").first());
            
            $(this).css({'left':'0', 'width':'auto'});
        });
    }); 

    //Botão prévia
    $(".prev").click(function(e){
        e.preventDefault();

        $("#slide ul li").first().before($("#slide ul li").last().css({'margin-left':'-liWidth'}));
    
        $("section#slide ul").css({'width':'99999%'}).animate({left: liWidth}, function(){
            
            $("#slide ul li").first().css({'margin-left':'0'})
            $(this).css({'left': '0', 'width':'auto'})
        });
    });

    // Função que simula o click no botão next
    function auto(){
        $(".next").click();
    }
});

/* Fim Slide */

/* Botões da page funcionários */
    $(document).ready(function(){
        $("button#contactar-button").click(function(){
            $(".ulDropdown").toggleClass("active")
        })
    })
/* Fim Botões da page funcionários */

