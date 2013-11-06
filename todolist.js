$(function() {

    $('#addInformation').on('click', function(){
        
        var newLi = $("<li>olives</li>").hide();
        var btn = $('<button class="btn-remove">X</button>');
        
    	newLi.append(btn);
    	$('#information').append(newLi);
    	newLi.fadeIn();

    });

    $('#information').on('click', '.btn-remove', function(){ 
        
        $(this).closest('li').fadeOut();
   
    });    
});