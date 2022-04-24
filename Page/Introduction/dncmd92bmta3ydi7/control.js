"use strict";
// import Typed from 'typed.js';
class ConversationBoxController {
    constructor() {
        this.componentElTag = {
            box: '.conversation-box-container',
            text: '.conversation-box-text',
            nextBtn: '.conversation-box-next-btn',
            conversationBoxOptions: '.conversation-box-options',
            mainScreen: '.main-screen'
        };
        this.textEl = document.querySelector(this.componentElTag.text);
        this.nextBtnEl = document.querySelector(this.componentElTag.nextBtn);
        this.conversationBoxOptionsEl = document
            .querySelector(this.componentElTag.conversationBoxOptions);
        this.mainScreenEl = document.querySelector(this.componentElTag.mainScreen);
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
            stringsElement: null,
            startDelay: 0,
            strings: [newWord],
            typeSpeed: 20,
            backSpeed: 0,
            fadeOut: true,
            loop: false,
            fadeOutDelay: 100,
            showCursor: false,
        });
        const audio = document
            .querySelector(`audio[data-sound="click-keyboard"]`);
        audio.currentTime = Math.floor(Math.random() * 5);
        audio.volume = 0.5;
        audio.play(); //  播放元素的音效
        setTimeout(() => {
            audio.pause();
            audio.currentTime = 0;
            console.log('over');
        }, newWord.length * 75);
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
                that.changeCharacter(value.who);
                console.log('in say', value.say);
                this.elDisplayOff(this.conversationBoxOptionsEl);
                break;
            // option
            case 'option':
                that.text = value.say;
                that.changeCharacter(value.who);
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
    changeCharacter(character) {
        const that = this;
        const [who, state, fileType] = character.split('.');
        const filePath = `./img/character/${who}/${state}.${fileType}`;
        let el = document.createElement('img');
        el.setAttribute('src', filePath);
        fetch(filePath).then((f) => {
            if (f.ok) {
                that.mainScreenEl.innerText = '';
                that.mainScreenEl.appendChild(el);
            }
        });
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