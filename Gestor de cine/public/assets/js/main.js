$(document).ready(function() {
    $(".delete-series").on("click", function(e){
        e.preventDefault();
        if(confirm("Are you sure you want to delete this series?")){
            $(this).closest(".form-delete").submit();
        }
    })    
});

$(document).ready(function() {
    $(".delete-Generos").on("click", function(e){
        e.preventDefault();
        if(confirm("Are you sure you want to delete this series?")){
            $(this).closest(".form-delete").submit();
        }
    })    
});