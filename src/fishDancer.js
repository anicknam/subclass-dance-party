var fishDancer = function(top, left, timeBetweenSteps, color) {

  this.storage = {"blue": "'Assets/bluefish.png'", 
                  "orange": "'Assets/orangefish.png'", 
                  "hook": "'Assets/hook.png'"};

  //this.motions = {'toggle': toggle()};
  this.isMove = true;

  this.color = color;
  this.left = left;
  this.top = top;
  var currFish = '<img class="dancer ' + this.color + '" src= ' + this.storage[this.color] + '/>';
  
  this.$node = $(currFish);
  //console.log('this node', this.$node);

  makeDancer.apply(this, arguments);
  // this.color = color;

  

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function


};

fishDancer.prototype = Object.create(makeDancer.prototype);
fishDancer.prototype.constructor = fishDancer;

//var oldStep = makeDancer.prototype.step;

fishDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step

  //console.log('first', this.$node);
  
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  
  var node = this.$node;
  var isMove = this.isMove;
  
  if (this.color === "orange") {

    var lat = this.left;

    var move = function(lat){
      if (lat < -2000) {return;}
      lat--;
      node.css("left",lat);
      setTimeout(function(){move(lat);}, this.timeBetweenSteps);
    };

    // makeDancer.prototype.step.call(this);
    // this.$node.toggle();
    move(lat);
 

  } else if (this.color === "blue") {

    //var lat = 0;
    //var position = node.position();
    var lat = this.left;

    var move = function(lat){
      if (true) {
        if (lat > 2000) {return;}
        lat++;
        node.css("left",lat);
        setTimeout(function(){move(lat);}, this.timeBetweenSteps);
      }
    };

    move(lat);
    
  }

  else if (this.color === 'hook') {

    var long = -50;

    var move = function(long) {
      if (long > 200) {return};
      long++;
      node.css('top', long);
      setTimeout(function(){move(long)}, this.timeBetweenSteps);
    };

    move(long);

  }
};  

