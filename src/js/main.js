import SceneManager from "./modules/scene_manager";
import LetterFade from "./modules/letter-fade";
import ReasonGraph from "./modules/graphics/reasons";
import DemographyGraph from "./modules/graphics/demography-graph";
import Lang from "./lang";

const l = document.querySelector("meta[name='lang']");
const Translator = new Lang(l.getAttribute('content'));

const SM =  new SceneManager(Translator);
/*
SM.play(5);
*/
document.querySelector('.intro-button').addEventListener('click', function (e) {
    e.preventDefault();
    SM.play(0);
});

//CREDITS
document.querySelector('.credit-overlay').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('credits').classList.add('credits__hide');
});
document.querySelector('a.information').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('credits').classList.toggle('credits__hide');
});

//ACTIVE DISABLE GRAPH
document.querySelectorAll('.graph-toggler').forEach(function (el) {
    el.addEventListener('click', function (e) {
        e.preventDefault();
        let toggle = (el.getAttribute('graph-toggle'));
        let disable = (el.getAttribute('graph-disable'));

        let graph_toggle = document.querySelector(".graphic[graph='" + toggle + "']");
        graph_toggle.classList.remove('graphic__disabled');

        if(disable != null) {
            let graph_disable = document.querySelector(".graphic[graph='" + disable + "']");
            graph_disable.classList.add('graphic__disabled');
        }
    })
});

Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};