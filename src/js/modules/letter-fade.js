export default class LetterFade {

    constructor(selector) {
        this.selector = selector;

        this.el  = document.querySelector(selector);
        this.el.style.display = "block";
        this.text = this.el.innerText;

        this.index = 0;

        this.delay  = 70;

        this.spans = [];

        this.init();
    }

    init() {
        const letters = this.text.split('');
        this.el.innerHTML = "";
        letters.forEach(word => {
            const span = Object.assign(document.createElement('span'), {
                className: 'letter',
                innerHTML: word === ' ' ? '&nbsp;' : word
            });
            this.el.appendChild(span);
            this.spans.push(span);
        });
    }

    show(callback) {
        let timeout = setInterval(() => {
            this.showLetter(this.index);
            this.index ++ ;
            if(this.index >= this.spans.length) {
                clearInterval(timeout);
                callback();
            }
        }, this.delay);
    }

    hide() {
        this.el.style.display = "none";
    }

    showLetter(i) {
        this.spans[i].className = 'letter fade';
        setTimeout(() => {
            this.spans[i].className = 'letter in';
        }, 200);
    }

}