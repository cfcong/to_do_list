$(function() {

    $('#addInformation').on('click', function(){
        //when clicking button "addInformation", store the string
        var enteredAnswer = $('#enterInformation').val();
        var button = $('<button class="btn-remove">X</button>');
        //from there, take the store string and create a new line (in the unordered list) for it
        $('#information').append($('<li></li>').append(enteredAnswer).append(button));
        //var newLi = $("<li>olives</li>").hide();
        //var btn = $('<button class="btn-remove">Delete</button>');
        $('#enterInformation').val(' ');
        //for the entered string, add a button for delete
    	//access the list and add a new line
    	//transition the line into the list

    });

    $('#information').on('click', '.btn-remove', function(){ 
        
        $(this).closest('li').fadeOut();
   
    });    
});