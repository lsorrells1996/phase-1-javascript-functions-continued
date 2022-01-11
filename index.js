// code your solution here
function saturdayFun(active = "roller-skate") {
    return (`This Saturday, I want to ${active}!`);
}

const mondayWork = function (todo = 'go to the office') {
    return `This Monday, I will ${todo}.`;
}

function wrapAdjective (flair = '*') {
    return function (param = 'special') {
        return `You are ${flair}${param}${flair}!`;
    };
}