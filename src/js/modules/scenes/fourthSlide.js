import HowGraph from "../graphics/how-graph";
import Scene from "../scene"


export default class FourthSlide extends Scene {
    constructor(props, lang) {
        super(props);
        this.lang = lang;
        this.scene_manager = props;
        this.el = document.querySelector('.scene__4');


        this.next_button = this.el.querySelector('.line-button');
        this.next_button.style.display = "none";
        this.next_button.addEventListener('click',(e) => {
            this.next_button.classList.add('line-button__hide');
            e.preventDefault();
            this.scene_manager.play(5);
        });

        let [inspector_first, inspector_second, inspector_third]  = [
            this.el.querySelector(".inspector-text[step='1']"),
            this.el.querySelector(".inspector-text[step='2']"),
            this.el.querySelector(".inspector-text[step='3']"),
        ];


        this.inspector_first = inspector_first;
        this.inspector_second = inspector_second;
        this.inspector_third = inspector_third;

        setTimeout(() => {
            this.inspector_first.querySelector('button').classList.add('choice-button__display');
        });

        this.how = [
            'sustained-harassment',
            'stalking',
            'physical-treats',
            'sexual-harassment',
            'purposeful-embarrassement',
        ];

        this.how_stats = {
            2014: {
                'purposeful-embarrassement': [21, 17],
                'physical-treats': [9, 5],
                'stalking': [6, 7],
                'sustained-harassment': [7, 6],
                'sexual-harassment': [4, 6]
            },
            2017: {

                'purposeful-embarrassement': [24, 21],
                'physical-treats': [12, 8],
                'stalking': [6, 8],
                'sustained-harassment': [8, 7],
                'sexual-harassment': [4, 8]
            }
        };


        this.folder_maker = this.el.querySelector('.folder-maker');
        this.select = this.folder_maker.querySelectorAll('select');

        let regenereSelect = () => {
            this.select.forEach((el) => {
                el.innerHTML = "";
                let new_option = document.createElement('option');
                new_option.text = "";
                new_option.value = "";
                el.options.add(new_option);

                for (let how of this.how) {
                    let new_option = document.createElement('option');
                    new_option.text = this.lang.get("slide.4.how." + how);
                    new_option.value = how;
                    el.options.add(new_option);
                }
            });
        };


        inspector_first.querySelector('button').addEventListener('click', (e) =>  {
            e.preventDefault();
            this.el.querySelector('.folder-maker').classList.remove('folder-maker__hide');
            setTimeout( () =>  {
            this.graph = new HowGraph(this.lang);

            }, 500);
            regenereSelect();

        });

            this.select.forEach((el) => {
                let line = el.parentElement.parentElement;
                let folder_valid = line.getAttribute('folder-valid');
                    el.addEventListener('change', (e) => {
                        e.preventDefault();
                        if(el.value == folder_valid) {
                            line.classList.add('folder-line__verified');
                            this.how.remove(el.value);

                            if(this.how.length == 0) {
                                this.inspector_first.classList.remove('inspector-text__appear');
                                this.inspector_second.classList.add('inspector-text__appear');
                                setTimeout(() => {
                                    this.next_button.style.display = "block";
                                }, 500);
                            }

                            this.graph.addValue( this.lang.get("slide.4.how." + folder_valid), this.how_stats["2014"][folder_valid][0],this.how_stats["2014"][folder_valid][1]);
                            regenereSelect();
                        }
                    })
            })
    }

    play() {
    }
}