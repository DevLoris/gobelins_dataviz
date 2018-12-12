import LetterFade from "../letter-fade";
import Scene from "../scene"
import DemographyGraph from "../graphics/demography-graph";


export default class ThirdSlide extends Scene {
    constructor(props, translator) {
        super(props);
        this.translator = translator;
        this.scene_manager = props;
        this.el = document.querySelector('.scene__3');

        this.inspector_first  = this.el.querySelector(".inspector-text[step='1']");
        this.inspector_second = this.el.querySelector(".inspector-text[step='2']");
        this.step = 1;

    }

    play() {
        if(this.step === 1) {
            setTimeout(() => {
                this.inspector_first.classList.add('inspector-text__appear');
                setTimeout(() => {
                    let btn2 = this.inspector_first.querySelectorAll('button');
                    new DemographyGraph(this.translator);
                    btn2.forEach((btn_item) => {
                        btn_item.classList.add('choice-button__display');
                        btn_item.addEventListener('click', (e) => {
                            let reply = btn_item.getAttribute('reply');
                            this.inspector_second.querySelector('.text-style').innerHTML = this.translator.get('slide.3.first.button.'+reply+'.reply');
                            this.inspector_second.classList.add('inspector-text__appear');

                            let graph = this.el.querySelector(".graphic[graph='graph.3.2']");
                            setTimeout((e) => {
                                graph.classList.remove('graphic__disabled');


                                this.next_button = this.el.querySelector('.line-button');
                                this.next_button.style.display = "block";
                                this.next_button.addEventListener('click',(e) => {
                                    this.next_button.classList.add('line-button__hide');
                                    e.preventDefault();
                                    this.scene_manager.play(4);
                                });

                            }, 500);
                        });
                    })
                }, 1000);
            }, 1000);
        }
        this.step ++ ;
    }
}