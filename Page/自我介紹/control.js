"use strict";
// import Typed from 'typed.js';
class ConversationBoxController {
    constructor() {
        this.componentElTag = {
            box: '.conversation-box-container',
            text: '.conversation-box-text',
            nextBtn: '.conversation-box-next-btn',
            conversationBoxOptions: '.conversation-box-options',
        };
        this.textEl = document.querySelector(this.componentElTag.text);
        this.nextBtnEl = document.querySelector(this.componentElTag.nextBtn);
        this.conversationBoxOptionsEl = document
            .querySelector(this.componentElTag.conversationBoxOptions);
        this.boxEl = document.querySelector(this.componentElTag.box);
        this.nextBtnEl.addEventListener('click', (e) => {
            this.nextConversation();
            e.stopPropagation();
        });
        this.boxEl.addEventListener('click', (e) => {
            this.nextConversation();
            e.stopPropagation();
        });
        this.conversationPart;
    }
    get text() {
        return this.textEl.innerText;
    }
    set text(newWord) {
        let typed2 = new Typed(this.componentElTag.text, {
            strings: [newWord],
            typeSpeed: 0,
            backSpeed: 0,
            fadeOut: true,
            loop: false,
            fadeOutDelay: 20,
            showCursor: false,
        });
        // .innerText = newWord;
    }
    nextConversation(part) {
        let that = this;
        let value;
        if (part) {
            console.log('in pare', conversationRecode()['part']);
            that.conversationPart = new ConversationIteratorGenerator(conversationRecode()[part]); //@ts.ignore
        }
        if (!(that.conversationPart)) {
            that.conversationPart = new ConversationIteratorGenerator(conversationRecode().init);
        }
        value = that.conversationPart.next().value;
        console.log(that.conversationPart);
        switch (value.state) {
            // say
            case "print":
                that.text = value.say;
                console.log('in say');
                this.elDisplayOff(this.conversationBoxOptionsEl);
                break;
            // option
            case 'option':
                that.text = value.say;
                that.conversationBoxOptions(value.option);
                break;
            default:
                console.log(value);
                return that.conversationPart;
                break;
            // conversation.next
        }
    }
    conversationBoxOptions(options) {
        const that = this;
        this.elDisplayOn(this.conversationBoxOptionsEl);
        that.conversationBoxOptionsEl.innerText = '';
        console.log('in option', options);
        setTimeout(function () {
            let i;
            for (i of options) {
                let el = document.createElement('div');
                // el.innerText = i.say;
                el.setAttribute('onclick', `changeConversation('${i.goTo}')`);
                el.setAttribute('id', `typed-${i.goTo}`);
                console.log('in option', el);
                that.conversationBoxOptionsEl.appendChild(el);
                let typed2 = new Typed(el, {
                    startDelay: 200,
                    strings: [i.say],
                    typeSpeed: 0,
                    backSpeed: 0,
                    fadeOut: true,
                    loop: false,
                    fadeOutDelay: 100,
                    showCursor: false,
                });
            }
            that.elDisplayOn(that.conversationBoxOptionsEl);
        }, 1000);
        // this.elDisplayOff(this.conversationBoxOptionsEl);
    }
    displayConversationBoxHidden() {
        this.elNotHidden(this.boxEl);
    }
    HiddenConversationBoxHidden() {
        this.elIsHidden(this.boxEl);
    }
    elDisplayOn(el) {
        el.classList.remove("no-display");
    }
    elDisplayOff(el) {
        el.classList.add("no-display");
    }
    elIsHidden(el) {
        el.classList.remove("hidden");
    }
    elNotHidden(el) {
        el.classList.add("hidden");
    }
}
// -----
class ConversationIteratorGenerator {
    constructor(conversation) {
        const arr = conversation;
        let nextIndex = 0;
        console.log('in iterG', arr);
        return {
            next: function () {
                return nextIndex < arr.length ?
                    { value: arr[nextIndex++], done: false } :
                    { done: true };
            }
        };
    }
}
// ---
function changeConversation(part) {
    ConversationBox.nextConversation(part);
}
//# sourceMappingURL=control.js.map