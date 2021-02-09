function checkInput(inp){
    if (inp) {
        var error = alert('Input cannot be empty');
    }
    return error;
}
function onsuccesssignup(){
    window.location = 'Home-3.html';    
}

function onsuccessSelectedSubCategory(){
    onsuccessSelectedMainCategory();
}


function onsuccessSelectedMainCategory(){
    window.location = 'Home-4.html';    
}

$('#signUp').click(function(){
    //collecting form data
    var businessName = $('#businessName').val();
    var cityTown = $('#city').val();
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var email = $('#email').val();
    var mobileNumber = $('#mobileNumber').val();
    var inp = businessName == '' || cityTown == '' || firstName == '' || lastName == '' || email == '' || mobileNumber == '';
    //checking if form values are empty. Not performing any validation. Just fill in with any values
    checkInput(inp);
    if (!inp) {
        onsuccesssignup();    
    }
    
})


$('#submitMainCategory').click(function(e){
            e.preventDefault();
    var mainCategory = $('input[name="mainCat"]:checked').val();

    if(mainCategory){
        $('#catTitle').html(mainCategory);
        $('#mainCategoryModal').modal('show');
        
    }else{
        alert('select one of the categories');
    } 
}); 

$('#submitSubCategory').click(function(){
    //alert('hello')
    var subCategory = $('input[name="subCat"]:checked').val();
    var inp = subCategory == '';
    if(inp){
        alert('select one of the categories');
    }else{
        onsuccessSelectedSubCategory();
    }  
})