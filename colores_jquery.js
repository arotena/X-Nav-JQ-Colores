$( document ).ready(function() {
      $( "#orderedlist" ).addClass( "red" );
      $( "#orderedlist li" ).addClass("blue");
      $("#orderedlist li").last().mouseover(function(event){
        $("#orderedlist li").last().addClass("green");
      });
      $("#orderedlist li").last().mouseout(function(event){
        $("#orderedlist li").last().removeClass("green");
      });
  });
