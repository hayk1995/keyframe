let Animation = {
    init:function (htmlElement,animationShorthand) {
        this.createAnimation(htmlElement, animationShorthand);
        this.initAnimationControl(htmlElement);
    },

    createAnimation:function (htmlElement, animationShorthand) {
        htmlElement.style.animation = animationShorthand;
    },

    initAnimationControl:function (htmlElement) {
        let animationName = htmlElement.style.animationName;
        let controlWindow = this.createControlWindow(animationName);
        this.initAnimationStateChange(htmlElement, controlWindow);
        this.initAnimationSeekBar(htmlElement, controlWindow);
    },

    createControlWindow:function (animationName) {
        let controllersWindow = document.getElementById('controllersWidnow');
        let controlWindow = document.getElementById('controlWindow').cloneNode(true);

        controlWindow.id = '';
        controlWindow.getElementsByClassName('animation-name')[0].innerText=animationName;
        controlWindow.style.display = 'block';
        controllersWindow.appendChild(controlWindow);

        return controlWindow;
    },
    
    initAnimationStateChange:function (htmlElement, controlWindow) {
        let stateControlButton = controlWindow.getElementsByClassName('f_state-controller')[0];

        stateControlButton.onclick = function () {
            let currentStates = htmlElement.style.animationPlayState.split(',');
            if(currentStates[0]==='paused'){
                currentStates.fill('running');
            }
            else {
                currentStates.fill('paused');
            }
            htmlElement.style.animationPlayState = currentStates;
        }
    },
    
    initAnimationSeekBar:function (htmlElement, controlWindow) {
        let seekBar = controlWindow.getElementsByClassName('f_seek-bar')[0];
        let animationDuration = this.getMaxDuration(htmlElement.style.animationDuration);
        let htmlElementStyle = htmlElement.style;
        let keyframeCount = htmlElementStyle.animationName.split(',').length;
        seekBar.oninput = function () {
            let delay = (animationDuration) * (seekBar.value)/100;
            let currentAnimation = htmlElementStyle.animation;

            htmlElementStyle.animation = 'none';
            htmlElement.offsetWidth;
            htmlElementStyle.animation = currentAnimation;
            htmlElementStyle.animationDelay = (new Array(keyframeCount)).fill('-'+delay+'s');
            htmlElementStyle.animationPlayState = (new Array(keyframeCount)).fill('paused');
        }.bind(this)
    },

    getMaxDuration:function (animationDuration) {
        let durationArr = animationDuration.split(',');
        durationArr.forEach((currentValue, index, arr)=>{
            let currentDuration = parseFloat(currentValue);
            arr[index] = currentDuration;
        });

        return Math.max.apply(null,durationArr);
    }
    
};
