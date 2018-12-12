import intro from "./scenes/intro"
import firstSlide from "./scenes/first-slide"
import secondSlide from "./scenes/second-slide"
import Scene from "./scene"
import thirdSlide from "./scenes/thirdSlide";
import fourthSlide from "./scenes/fourthSlide";
import fifthSlide from "./scenes/fifthSlide";
import sixtSlide from "./scenes/sixtSlide";

export default class SceneManager extends Scene{
    constructor(lang) {
        super();
        this.scene = 0;
        this.lang = lang;
        this.scene_list = [
            new intro(this, lang),
            new firstSlide(this, lang),
            new secondSlide(this, lang),
            new thirdSlide(this,lang),
            new fourthSlide(this, lang),
            new fifthSlide(this, lang),
            new sixtSlide(this, lang)
        ];
    }

    play(index) {
        index = index || this.scene;
        this.active(index);
        (this.scene_list[index]).play();
    }

    next() {
        this.scene ++ ;
        this.play();
    }

    active(active) {
        let last =   document.querySelector('.scene__' + (active-1));
        let now =   document.querySelector('.scene__' + (active));

        if( (active-1) > 0) {
            let last =   document.querySelector('.scene__0').classList.add('scene__ended');
        }
        if(last) {
            last.classList.remove('scene__active');
            last.classList.add('scene__ended');
            setTimeout(() => {
                last.style.display = "none";
            }, 5000);
        }

        if(now) {
            now.classList.add('scene__active');
            now.style.display = "block";
        }
    }
}