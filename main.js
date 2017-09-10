let animationKeyFrames = [];
let animationShorthands = [];

let positionAnimation = {};
positionAnimation['0'] = {top:'0px',left:'0px',transform:'rotate(0deg)'};
positionAnimation['25'] = {top:'0px',left:'100px',transform:'rotate(90deg)'};
positionAnimation['50'] = {top:'100px',left:'100px',transform:'rotate(180deg)'};
positionAnimation['75'] = {top:'100px',left:'0px',transform:'rotate(270deg)'};
positionAnimation['100'] = {top:'0px',left:'0px',transform:'rotate(360deg)'};
positionAnimation = new KeyFrame('positionAnimation', positionAnimation);
animationKeyFrames.push(positionAnimation);

let colorAnimation = {};
colorAnimation['0'] = {background:'red'};
colorAnimation['25'] = {background:'green'};
colorAnimation['50'] = {background:'blue'};
colorAnimation['75'] = {background:'green'};
colorAnimation['100'] = {background:'red'};
colorAnimation = new KeyFrame('colorAnimation',colorAnimation);
animationKeyFrames.push(colorAnimation);



animationKeyFrames.forEach(function (currentKeyFrame, index, arr) {
   currentKeyFrame.appendKeyFrameToDoc();
});


let animatingElement = document.getElementById('animating');
let animationShorhand = null;

animationShorthands.push(positionAnimation.getKeyFrameShorthand(5));
animationShorthands.push(colorAnimation.getKeyFrameShorthand(2.5));
animationShorhand = animationShorthands.join();

Animation.init(animatingElement, animationShorhand);


