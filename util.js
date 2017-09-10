
function cssRuleSetObjectToString(cssRuleSetObject) {
    let cssRuleSetString ='{';
    for(let prop in cssRuleSetObject){
        if(cssRuleSetObject.hasOwnProperty(prop)){
            cssRuleSetString += prop +':' + cssRuleSetObject[prop] +';';
        }
    }
    cssRuleSetString += '}';
    return cssRuleSetString;
}

function createAnimationShorthand(name, duration,timeFunction = 'linear',delay = '0',
                                  direction='normal',iterationCount='infinite',
                                  fillMode='none',playState='running') {

    var resultArr = [name,duration+'s',timeFunction,delay+'s',direction, iterationCount,fillMode,playState];
    return resultArr.join(' ');
}

