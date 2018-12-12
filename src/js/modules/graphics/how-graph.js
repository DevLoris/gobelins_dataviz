import Graph from './graph';

export default class HowGraph extends Graph {
    constructor(lang) {
        super('#social-use-internet');
        this.lang = lang;
    }

    addValue(key, man, woman) {
        this.datas[0].push(key);
        this.datas[1].push(man);
        this.datas[2].push(woman);

            this.chart.load({
                columns: this.datas });
    }

    init() {
        super.init();

        d3.json('datas/internet-use.json').then( (data) => {

            this.datas = [
                    ["x", this.lang.get('slide.4.how.offensive-name-calling')],
                    [this.lang.get('slide.3.legend.man'), 27],
                    [this.lang.get('slide.3.legend.woman'), 19]
                ];
// Script
            this.chart = bb.generate({
                data: {
                    x: "x",
                    columns: this.datas,
                    type: "bar"
                },
                color: {
                    pattern: [
                        "#59A6FF" ,
                        "#0C7DFF" ,
                        "#2C537F",
                        "#063F7F" ,
                    ]
                },
                legend: {
                    position: 'right'
                },
                axis: {
                    x: {
                        type: "category"
                    },
                    y: {
                        tick: {
                            format: function(x) { return x + "%"; }
                        }
                    }
                },
                bar: {
                    width: {
                        ratio: 0.75
                    }
                },
                bindto: "#how-graph"
            });


        })
    }
}