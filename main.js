
let positionAnimation = {};
positionAnimation['0'] = {top:'0px',left:'0px'};
positionAnimation['25'] = {top:'0px',left:'100px'};
positionAnimation['50'] = {top:'100px',left:'100px'};
positionAnimation['75'] = {top:'100px',left:'0px'};
positionAnimation['100'] = {top:'0px',left:'0px'};
positionAnimation = new KeyFrame('positionAnimation', positionAnimation);
positionAnimation.appendKeyFrameToDoc();

let colorAnimation = {};
colorAnimation['0'] = {background:'red'};
colorAnimation['25'] = {background:'green'};
colorAnimation['50'] = {background:'blue'};
colorAnimation['75'] = {background:'green'};
colorAnimation['100'] = {background:'red'};
colorAnimation = new KeyFrame('colorAnimation',colorAnimation);
colorAnimation.appendKeyFrameToDoc();

var animatingElement = document.getElementById('animating');
var animationShortEnd = 'colorAnimation 2.5s infinite,positionAnimation 5s infinite';

Animation.init(animatingElement, animationShortEnd);


