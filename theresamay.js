
theresaMay = function (){
    var self = this;

    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/includes#Polyfill
    if (!String.prototype.includes) {
        String.prototype.includes = function(search, start) {
            'use strict';
            if (typeof start !== 'number') {
                start = 0;
            }

            if (start + search.length > this.length) {
                return false;
            } else {
                return this.indexOf(search, start) !== -1;
            }
        };
    }

    //https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/includes?v=example#Polyfill
    if (!Array.prototype.includes) {
        Object.defineProperty(Array.prototype, 'includes', {
            value: function(searchElement, fromIndex) {
                if (this == null) {
                    throw new TypeError('"this" is null or not defined');
                }

                var o = Object(this);

                var len = o.length >>> 0;

                if (len === 0) {
                    return false;
                }

                var n = fromIndex | 0;
                var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

                function sameValueZero(x, y) {
                    return x === y || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y));
                }

                while (k < len) {
                    if (sameValueZero(o[k], searchElement)) {
                        return true;
                    }
                    k++;
                }

                return false;
            }
        });
    }

    self.openingLines = [
        "I have been very clear, and you can see that our record speaks for itself on the matter of MATTER, and I am happy to say NONSENSE. PARTYLINE.",
        "Look, I'm absolutely clear that NONSENSE.",
        "What we have done in government, and what we will continue do in government is to put record levels of funding into THING.",
        "I would say, in answer to that question, judge us on our record of MATTER.",
        "Every vote for Jeremy Corbyn is a vote for BADTHING. Only a conservative government can deliver THING. PARTYLINE."
    ];

    self.nonsense = [
        "every vote for me and my team will strengthen my hand in those negotiations",
        "cuts to the police enable them to do a better job",
        "the money was just resting in my account",
        "we can rely on the aging population to provide us with votes and bolster the economy via the new dementia tax"
    ];

    self.partyLines = [
        "Only the Conservative party, led by me, can deliver THING for our country",
        "When you're at the ballot box be very clear that a vote for me is a vote for five years of THING",
        "We will create a fairer society, based on THING. So more of us can share MATTER"

    ];

    self.matters = [
        "NHS funding",
        "massive police cuts",
        "swine flu",
        "holding hands with the president of the united states of America",
        "mysterious and unattributed cases of arson",
        "sales of peace keeping equipment to Saudi Arabia",
        "tax cuts for the rich",
        "the European Convention on Human Rights",
        "kicking cats to death"
    ];

    self.badThings = [
        "Jeremy Corbyn",
        "Diane Abbot",
        "uncontrolled immigration",
        "open borders",
        "befriending the IRA",
        "a coalition of chaos",
        "upholding human rights",
        "free school meals"
    ];

    self.things = [
        "magic money trees",
        "leopard print shoes",
        "child poverty",
        "union jack bunting",
        "strong and stable leadership",
        "oversized beaded necklaces"
    ];
}

theresaMay.prototype.askQuestion = function (question) {
    var self = this;

    // The question variable is never inspected by TheresaMay.js because it
    // doesnt really have any effect on the output.
    var responseArray = [];
    var nonsenseIterator = 0;
    var nonsenseCount = Math.floor((Math.random() * 3) + 1);

    responseArray.push(self.openingLines[Math.floor(Math.random() * self.openingLines.length)]);

    for (var i = 0; i < responseArray.length; i++) {
        var responseItem = responseArray[i];

        while (responseItem.includes("PARTYLINE")) {
            responseItem = responseItem.replace("PARTYLINE", self.partyLines[Math.floor(Math.random() * self.partyLines.length)]);
        }        

        while (responseItem.includes("MATTER")) {
            responseItem = responseItem.replace("MATTER", self.matters[Math.floor(Math.random() * self.matters.length)]);
        }

        while (responseItem.includes("NONSENSE")) {
            responseItem = responseItem.replace("NONSENSE", self.nonsense[Math.floor(Math.random() * self.nonsense.length)]);
        }        

        while (responseItem.includes("BADTHING")) {
            responseItem = responseItem.replace("BADTHING", self.badThings[Math.floor(Math.random() * self.badThings.length)]);
        }        

        while (responseItem.includes("THING")) {
            responseItem = responseItem.replace("THING", self.things[Math.floor(Math.random() * self.things.length)]);        
        }        

        responseArray[i] = responseItem;
    }

    return responseArray.join(". ");
}
