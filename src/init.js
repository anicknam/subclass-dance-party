$(document).ready(function() {
  window.dancers = [];


  $('.addDancerButton').on('click', function() {
     /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // console.log($(this));
    var fishColor = $(this).attr("id");
    // console.log(typeof fishColor);

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // console.log('danceMakerFunction', dancerMakerFunction);

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000, fishColor
    );

    window.dancers.push(dancer);

    $('body').append(dancer.$node);

    dancer.$node.on('click', function(event) {

      var $bubble = $("<img class ='bubble' src='Assets/bubbles.png'\/>");
      $('body').append($bubble);
    // var latitude = this.left;
      console.log('yay');
    // var longitude = this.top;

    });

  });


  $('.lineUpButton').on('click', function(){

    for (var i = 0; i < window.dancers.length; i++) {
      dancers[i].isMove = false;
      dancers[i].$node.css('left', 0);
    }

    // window.dancers.forEach(function(dancer) {
    //   var node = dancer.$node;
    //   node.css("left",0);
    // });

  });




});



