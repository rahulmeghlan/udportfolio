// Measuring the Critical Rendering Path with Navigation Timing
// https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp
(function (w, g) {
    w['GoogleAnalyticsObject'] = g;
    w[g] = w[g] || function () {
            (w[g].q = w[g].q || []).push(arguments)
        };
    w[g].l = 1 * new Date();
})(window, 'ga');

// Optional TODO: replace with your Google Analytics profile ID.
ga('create', 'UA-XXXX-Y');
ga('send', 'pageview');

function logCRP() {
    var t = window.performance.timing,
        dcl = t.domContentLoadedEventStart - t.domLoading,
        complete = t.domComplete - t.domLoading;
    var stats = document.getElementById("crp-stats");
    stats.textContent = 'DCL: ' + dcl + 'ms, onload: ' + complete + 'ms';
}

window.addEventListener("load", function (event) {
    logCRP();
    var link = "//fonts.googleapis.com/css?family=Open+Sans:400,700",
        elem = document.createElement("link");
    elem.setAttribute("href", link);
    document.querySelector("head").append(elem);

});
