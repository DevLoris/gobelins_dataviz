import LetterFade from "../letter-fade";
import Scene from "../scene"

import SocialUseGraph from "../graphics/social_use";
import SocialTimeUseGraph from "../graphics/use-time";

export default class FirstSlide extends Scene {
    constructor(props, lang) {
        super(props);
        this.lang = lang;
        this.scene_manager = props;
        this.el = document.querySelector('.scene__1');
        this.next_button = this.el.querySelector('.line-button');
        this.next_button.addEventListener('click', (e) => {
            this.next_button.classList.add('line-button__hide');
            e.preventDefault();
            props.play(2);
        });
    }

    play() {
        new SocialUseGraph();
        new SocialTimeUseGraph();
        let [inspector_first, inspector_second]  = [this.el.querySelector(".inspector-text[step='1']"), this.el.querySelector(".inspector-text[step='2']")];
        inspector_first.classList.add('inspector-text__appear');
        let lines = inspector_first.querySelectorAll("div");

        lines.forEach(function (value, key) {
            value.style.opacity = 0;
            setTimeout(() => { value.style.opacity = 1;}, 4000 + key * 1000);
        });
        setTimeout(() => {
            let btn = inspector_first.querySelector('button');
            btn.classList.add('choice-button__display');
            btn.addEventListener('click',(e) => {
                inspector_first.classList.remove('inspector-text__appear');
                inspector_second.classList.add('inspector-text__appear');
                this.next_button.classList.remove('line-button__hide');

                setTimeout(() => {
                    let btn2 = inspector_second.querySelectorAll('button');
                    btn2.forEach((btn_item) => {
                        btn_item.classList.add('choice-button__display');
                    })
                }, 2000);
            })
        }, 6000);
    }
}