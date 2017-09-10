
function KeyFrame(keyFrameName, keyFrameStates){
    this.keyFrameName = keyFrameName;
    this.keyFrameStates = keyFrameStates;
}

KeyFrame.prototype.appendKeyFrameToDoc = function () {
    let keyFramWrapStyleTag = document.getElementById('keyFrameWrap');
    keyFramWrapStyleTag.innerHTML += this.toString() +'\n';
};

KeyFrame.prototype.toString = function () {
    let keyFrameString = '@keyframes ' + this.keyFrameName + '{\n';
    for( let keyFrameSelector in this.keyFrameStates){
        if(this.keyFrameStates.hasOwnProperty(keyFrameSelector)){
            keyFrameString += keyFrameSelector + '% ' + cssRuleSetObjectToString(this.keyFrameStates[keyFrameSelector]);
            keyFrameString +='\n';
        }
    }
    keyFrameString +='}';
    return keyFrameString;
};

KeyFrame.prototype.getName = function () {
    return this.keyFrameName;
}


