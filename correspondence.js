function newGuid() {
    var S4 = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}

ucc = {}

ucc.firstOrDefault = function(array, selector) {
    if (arguments.length < 2)
        selector = function(x) { return x; }

    if (array.length > 0)
        return selector(array[0]);
    else
        return null;
}

ucc.select = function (array, selector) {
    var results = new Array();
    for (i in array) {
        results.push(selector(array[i]));
    }
    return results;
}