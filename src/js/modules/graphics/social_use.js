import Graph from './graph';

export default class SocialUseGraph extends Graph {
    constructor() {
        super('#social-use-internet');
    }

    init() {
        super.init();

        d3.json('datas/internet-use.json').then( (data) => {
            var chart = bb.generate({
                data: {
                    x: "x",
                    columns: data,
                    colors : {
                        Facebook: "#3b5999",
                        Twitter: "#55acee",
                        Instagram: "#e4405f",
                        Linkedin: "#0077B5",
                        Snapchat: "#FFFC00"
                    },
                    color: function(color, d) {
                        return  color;
                    },
                },
                point: {
                    pattern : [
                        "<g><circle cx='5' cy='5' r='5'></circle></g>"
                    ]
                },
                legend: {
                    usePoint : true,
                    position: "right"
                },
                axis: {
                    y : {
                        default: [0, 1000],
                        tick: {
                            format: function(x) { return x + "%"; }
                        }
                    },
                    x: {
                        type: "category"
                    }
                },
                tooltip: {
                    grouped : true,
                    format: {
                        title: function(d) {
                            return 'Adult use';
                        },
                        value: function(value, ratio, id) {
                            return value + "%";
                        }
                    }
                },
                bindto: this.selector
            });
        })
    }
}