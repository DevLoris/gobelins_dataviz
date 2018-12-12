import LetterFade from "../letter-fade";
import Scene from "../scene"


export default class SixtSlide extends Scene {
    constructor(props, lang) {
        super(props);
        this.lang = lang;
        this.scene_manager = props;
        this.el = document.querySelector('.scene__6');
        this.overlay = this.el.querySelector('.scene-full');
        this.inspector = this.el.querySelector('.inspector-text');
        this.links = this.el.querySelector('.links');

    }

    play() {
        setTimeout(() => {
            this.inspector.classList.add('inspector-text__appear');
            setTimeout(() => {
                this.overlay.classList.add('scene-full__visible');
                this.links.classList.remove('links__hidden');
            }, 2000);
        }, 3000);
    }
}