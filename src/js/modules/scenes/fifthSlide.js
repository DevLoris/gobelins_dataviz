import Scene from "../scene"
import RevengePornGraph from "../graphics/revenge-porn-graph";


export default class FifthSlide extends Scene {
    constructor(props, lang) {
        super(props);
        this.lang = lang;
        this.scene_manager = props;
        this.el = document.querySelector('.scene__5');

        this.inspector = this.el.querySelector('.inspector-text');
        this.inspector.classList.add('inspector-text__appear');

        this.next_button = this.el.querySelector('.line-button');
        this.next_button.addEventListener('click',(e) => {
            this.next_button.classList.add('line-button__hide');
            e.preventDefault();
            props.play(6);
        });

    }

    play() {
        setTimeout(() => {
            this.graph=  new RevengePornGraph(this.lang);
            this.el.querySelectorAll('.graphic-menu li').forEach((x) => {
                x.addEventListener('click', (e) => {
                    e.preventDefault();
                    let active = x.getAttribute('show-data');

                    this.el.querySelector('.graphic-menu li.active').classList.remove('active');

                    x.classList.add('active');
                    x.classList.remove('animate');
                    this.graph.load(active);
                });
            }) ;
        }, 50);
    }
}