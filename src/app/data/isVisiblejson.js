const surveyJson = {
    pages: [{
        elements: [{
            name: "satisfaction-score",
            // ...
        }]
    }, {
        elements: [{
            name: "what-would-make-you-more-satisfied",
            // ...
            visibleIf: "{satisfaction-score} = 4"
        }, {
            name: "nps-score",
            // ...
        }],
        visibleIf: "{satisfaction-score} >= 4"
    }, {
        elements: [{
            name: "how-can-we-improve",
            // ...
        }],
        visibleIf: "{satisfaction-score} = 3"
    }, {
        elements: [{
            name: "disappointing-experience",
            // ...
        }],
        visibleIf: "{satisfaction-score} =< 2"
    }],
};
