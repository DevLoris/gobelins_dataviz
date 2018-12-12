import Graph from './graph';

export default class SocialUseTimeGraph extends Graph {
    constructor() {
        super('#social-use-time-internet');
    }

    init() {
        super.init();

        d3.json('datas/daily-use.json').then( (data) => {
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
                            format: function(x) { return x + "'"; }
                        }
                    },
                    x: {

                        tick: {
                            fit: true,
                            culling : true,
                            count: 7
                        },
                        type: "category"
                    }
                },
                tooltip: {
                    grouped : true,
                    format: {
                        title: function(d) {
                            return 'Daily use time ';
                        },
                        value: function(value, ratio, id) {
                            return value + " min.";
                        }
                    }
                },
                bindto: this.selector
            });
        })
    }
}