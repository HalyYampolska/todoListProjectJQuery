//Check Off Specific Todos By Clicking 
$("ul").on("click", "li", function(){
    /*
    //if li is grey
    if ($(this).css("color") === "rgb(128, 128, 128)") {
        //turn it black
        $(this).css({
            color: "black",
            textDecoration: "none",   
        });
    }
        //else 
        else {
        //turn it gray
            $(this).css({
                color: "grey",
                textDecoration: "line-through",   
            });
    }*/
    $(this).toggleClass("completed");
});

//Click on X to delite Todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
   event.stopPropagation(); 
});

//Build Input Forms 
$("input[type='text']").keypress(function(event){
    if(event.which === 13) {
        //grabbing new todo text from input 
        var todoText = $(this).val();
        $(this).val("");
        //create a new li and add to ul 
        $("ul").append("<li><span>X</span> " + todoText + "</li>");
    }
});