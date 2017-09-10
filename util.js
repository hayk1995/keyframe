
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



