import LetterFade from "../letter-fade";
import Scene from "../scene"
import ReasonGraph from "../graphics/reasons";


export default class SecondSlide extends Scene {
    constructor(props, lang) {
        super(props);
        this.lang = lang;
        this.scene_manager = props;
        this.el = document.querySelector('.scene__2');

        this.social_screens = this.el.querySelectorAll('.social-screen img');

        this.next_button = this.el.querySelector('.line-button');
        this.next_button.classList.add('line-button__hide');
        this.next_button.addEventListener('click',(e) => {
            this.next_button.classList.add('line-button__hide');
            e.preventDefault();
            props.play(3);
        });
    }

    play() {
        new ReasonGraph(this.lang);

        setTimeout(() => {
            let inspector = this.el.querySelector(".inspector-text[step='1']");
            inspector.classList.add('inspector-text__appear');
            this.el.querySelectorAll('button').forEach((btn_item) => {
                btn_item.classList.add('choice-button__display');

                btn_item.addEventListener('click', (e)=> { 
                    e.preventDefault();
                    inspector.classList.remove('inspector-text__appear');
                    let choice = btn_item.getAttribute('choice');

                    let inspector_2 = this.el.querySelector(".inspector-text[step='2']");
                    inspector_2.querySelector('div').innerHTML = ( (choice === "1") ?  this.lang.get('slide.2.second.1') : this.lang.get('slide.2.second.2'));
                    inspector_2.classList.add('inspector-text__appear');

                    this.social_screens.forEach((v,i) => {
                        v.remove();
                    });
                    this.el.querySelector('.graphic__disabled').classList.remove('graphic__disabled');
                    this.next_button.classList.remove('line-button__hide');
                });

                this.social_screens.forEach((v,i) => {
                    setTimeout(() => {
                        v.classList.add('social-screen__show');
                    }, 500 + i * 250);
                });
            });
        }, 1000)
    }
}