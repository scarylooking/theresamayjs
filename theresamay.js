
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
        "I have been very clear, and you can see that our record speaks for itself on the matter of {{MATTER}}, and I am happy to say {{NONSENSE}}. {{PARTYLINE}}",
        "Look, I'm absolutely clear that {{NONSENSE}}",
        "That is not the reason why this election has been called, and lets be clear {{NONSENSE}}. {{PARTYLINE}}",
        "What we have done in government, and what we will continue do in government is to put record levels of funding into {{THING}}",
        "I would say, in answer to that question, judge us on our record of {{MATTER}}",
        "Every vote for Jeremy Corbyn is a vote for {{BADTHING}}. Only a conservative government can deliver {{THING}}. {{PARTYLINE}}",
        "I'm clear: if human rights laws get in the way of tackling {{BADTHING}}, we will change those laws to keep British people safe",
        "If we get {{MATTER}} right, we can do great things as a country. Vote for me and my team to deliver {{THING}} for everyone",
        "Let me be clear: {{MATTER}} should be the number one priority for any Prime Minister and any Government. {{PARTYLINE}}",
        "Now more than ever we need a Prime Minister offering {{THING}}. Give me your backing to deliver for Britain and for you. {{PARTYLINE}}",
        "As we face this critical election for our country, I've launched my manifesto for Britain's future: {{THING}}. {{PARTYLINE}}",
        "Your family's {{THING}} is too important to risk. Who will get the best deal for your family & the UK - me or {{BADTHING}}? {{PARTYLINE}}",
        "Your vote at this election will strengthen my hand and the UK's negotiating position on {{MATTER}}. {{PARTYLINE}}",
        "My mission is to increase the capacity & diversity of our school system so that every child gets {{THING}}. {{PARTYLINE}}"
    ];

    self.nonsense = [
        "every vote for me and my team will strengthen my hand in those negotiations",
        "cuts to the police enable them to do a better job",
        "nurses enjoy consecutive 14 hour shifts",
        "we can rely on the aging population to provide us with votes and bolster the economy via the new dementia tax",
        "there has never been a u-turn on {{MATTER}} or {{THING}}",
        "in relation to {{THING}}, all spending was properly declared. The Conservative Party did make an administrative error on its national spending, as did other parties. We have paid our fine, I would expect other parties to do so"
    ];

    self.partyLines = [
        "Only the Conservative party, led by me, can deliver {{THING}} for our country",
        "When you're at the ballot box be very clear that a vote for me is a vote for five years of {{THING}}",
        "We will create a fairer society, based on {{THING}} so more of us can share {{MATTER}}",
        "Only a local Conservative vote will secure {{THING}}, and strengthen our hand in the Brexit negotiations",
        "Every vote for me and my team is a vote for {{THING}}",
        "I am confident that we can fulfil the promise of {{THING}} and build a stronger, fairer, even more prosperous Britain",
        "A vote for the Labour party is a vote for {{BADTHING}}"
    ];

    self.matters = [
        "NHS funding",
        "massive police cuts",
        "swine flu",
        "holding hands with the president of the united states of America",
        "mysterious and unattributed cases of arson",
        "record breaking sales of peace-keeping equipment to Saudi Arabia",
        "tax cuts for the rich",
        "the European Convention on Human Rights",
        "kicking cats to death",
        "the slow and inexorable advance of Yorkshire over its rivals",
        "hard brexit",
        "red, white, and blue brexit",
        "running through wheat fields"
    ];

    self.badThings = [
        "Jeremy Corbyn",
        "Diane Abbot",
        "Diane Abbots hairstyles",
        "uncontrolled immigration",
        "open borders",
        "a coalition of chaos",
        "upholding human rights",
        "free school meals",
        "human rights laws",
        "end-to-end encryption",
        "running in a field of wheat",
        "hordes of migrants"
    ];

    self.things = [
        "magic money trees",
        "leopard print shoes",
        "child poverty",
        "union flag bunting",
        "strong and stable leadership",
        "oversized beaded necklaces",
        "food banks",
        "racism",
        "civilian casualties",
        "strong and stable leadership in our national interest",
        "breakfast... brexit"
    ];
}

theresaMay.prototype.askQuestion = function (question) {
    var self = this;

    // The question variable is never inspected by TheresaMay.js because it doesnt really have any effect on the output.
    var tagDetectionRegex = /{{[A-Z]*}}/
    var larryTheCat = 0;

    var response = self.openingLines[Math.floor(Math.random() * self.openingLines.length)];

    while (tagDetectionRegex.test(response)) {
        response = response.replace("{{MATTER}}", self.matters[Math.floor(Math.random() * self.matters.length)]);
        response = response.replace("{{NONSENSE}}", self.nonsense[Math.floor(Math.random() * self.nonsense.length)]);
        response = response.replace("{{PARTYLINE}}", self.partyLines[Math.floor(Math.random() * self.partyLines.length)]);
        response = response.replace("{{BADTHING}}", self.badThings[Math.floor(Math.random() * self.badThings.length)]);
        response = response.replace("{{THING}}", self.things[Math.floor(Math.random() * self.things.length)]);     
        
        if (larryTheCat >= 25) {
            // This makes about as much sense as anything else in here...
            response = "It is with great sadness that I today announce to the nation; Larry the cat has died at the ripe old age of 25";
            break;
        }
    }

    return response;
}
