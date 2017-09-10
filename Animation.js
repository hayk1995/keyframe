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
            let currentState = htmlElement.style.animationPlayState;
            if(currentState==='paused'){
                htmlElement.style.animationPlayState = 'running';
            }
            else {
                htmlElement.style.animationPlayState = 'paused';
            }
        }
    },
    
    initAnimationSeekBar:function (htmlElement, controlWindow) {
        let seekBar = controlWindow.getElementsByClassName('f_seek-bar')[0];

        seekBar.oninput = function () {
            let animationDuration = this.getMaxDuration(htmlElement.style.animationDuration);
            let delay = (animationDuration) * (seekBar.value)/100;
            let htmlElementStyle = htmlElement.style;
            let currentAnimation = htmlElementStyle.animation;

            htmlElementStyle.animation = 'none';
            htmlElement.offsetWidth;
            htmlElementStyle.animation = currentAnimation;
            htmlElementStyle.animationDelay = '-' + delay +'s';
            htmlElementStyle.animationPlayState = 'paused';
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
