$(function() {

    $('#addInformation').on('click', function(){
        //when clicking button "addInformation", store the string
        var enteredAnswer = $('#enterInformation').val();
        var button = $('<button class="btn-remove">Delete</button>');
        //from there, take the store string and create a new line (in the unordered list) for it
        //for the entered string, add a button for delete
        //access the list and add a new line
        $('#information').append($('<li></li>').append(enteredAnswer).append(button));
        //clear the pform when submitting information
        $('#enterInformation').val(' ');
    });

    $('#information').on('click', '.btn-remove', function(){ 
        $(this).closest('li').fadeOut();
    });    
});