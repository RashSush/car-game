class Form{
constructor(){

}
display(){
  var  title=CreateElement('h1');
  title.html("Super Car Game");
  title.position(250,10);
  var input=createInput("name");
  var button=createButton('Start to PLAY');
input.position(250,250);
button.position(250,260)
button.mousePressed(function(){
  input.hide();
  button.hide();
  var name=input.value();
  playercount+=1;
  player.update(name);
  player.updateCount(playercount);
  greeting.html("HELLO"+name);
  greeting.position (250,250);
})
}
}