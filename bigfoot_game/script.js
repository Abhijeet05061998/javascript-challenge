



function loadbigfoot()
{
    document.getElementById("big").src='https://raw.githubusercontent.com/hackclub/hackclub/master/workshops/find_bigfoot/assets/bigfoot.png';
};


function move()
{ alert('Woohoo, you win! You found Bigfoot!');
    var pic=document.getElementById("big");
   
  var x = Math.random() * 300;
  var y = Math.random() * 300;

  pic.style.top = x + 'px';
  pic.style.left = y + 'px';
}