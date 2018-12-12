import LetterFade from "../letter-fade";
import Scene from "../scene"


export default class Intro extends Scene {
    constructor(scene_manager, lang) {
        super();

        this.lang = lang;
        this.scene_manager = scene_manager;

        this.el = document.querySelector('.scene__0');
        this.intro = this.el.querySelector('#intro');
        this.pre = this.intro.querySelector('.intro-pre');
        //this.red_skew = this.el.querySelector('.red-skew');
        this.inspector = this.el.querySelector('.inspector-container .inspector');
        this.red_line = this.el.querySelector('.intro-redline');
        this.next_scene_line = this.el.querySelector('.line');
        this.button = this.el.querySelector('.intro-button');
        this.text_container = this.el.querySelector('.intro-text-container');
        this.step = 0;

    }

    play() {
        if(this.step === 0) {
            this.red_line.classList.add('intro-redline__step-1');
            this.text_container.classList.add('intro-text-container__show');
            this.pre.classList.add('intro-pre__hide');

            let fDade = new LetterFade(".intro-text-item[step='0']");
            fDade.show(() => {
                setTimeout(() => {
                    fDade.hide();
                    this.play();
                },1000);
            });
            this.step ++ ;
        }
        else if(this.step === 1 || this.step === 2 || this.step === 3) {
            this.red_line.classList.add('intro-redline__step-' + (this.step+1));
            let fDade = new LetterFade(".intro-text-item[step='"+this.step+"']");
            fDade.show(() => {
                setTimeout(() => {
                    fDade.hide();
                    this.play();
                },1000);
            });
            this.step ++ ;
        }
        else if(this.step === 4) {
            this.intro.classList.add('intro__remove');
            //this.red_skew.classList.add('red-skew__animate');
            this.inspector.classList.add('inspector__show');
            this.step ++ ;
            setTimeout( () =>  {
                this.play();
            }, 4000);
        }
        else if(this.step === 5) {
            this.step ++ ;
            this.next_scene_line.classList.add('line__display');
            setTimeout(() => {
                this.play();
            }, 1000)
        }
        else if(this.step === 6){
            this.step ++ ;
            let [inspector_first, inspector_second]  = [this.el.querySelector(".inspector-text[step='1']"), this.el.querySelector(".inspector-text[step='2']")];
            inspector_first.classList.add('inspector-text__appear');
            setTimeout(() => {
                inspector_second.classList.add('inspector-text__appear');
            }, 3000);
            setTimeout(() => {
                let btn = inspector_second.querySelector('button');
                btn.classList.add('choice-button__display');
                btn.addEventListener('click',  (e)  => {
                    e.preventDefault();
                    this.scene_manager.next();
                })
            }, 3000);
        }
    }
}