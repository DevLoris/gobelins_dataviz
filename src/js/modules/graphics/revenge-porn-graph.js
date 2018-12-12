import Graph from './graph';

export default class RevengePornGraph extends Graph {
    constructor(lang) {
        super('#revenge-porn');
        this.lang = lang;
    }

    load(selector) {
        let unload = [];

        for(let v of this.currently) {
            unload.push(v[0]);
        }

        this.chart.load({
            columns: this.datas[selector],
            unload: unload
        });

        this.currently =  this.datas[selector];
    }

    init() {
        super.init();

        d3.json('datas/revenge-porn.json').then( (data) => {


            for(let parent_key in data) {
                data[parent_key].forEach((v, k) => {
                    data[parent_key][k][0] = this.lang.get(   data[parent_key][k][0]  );
                });
            };

            this.datas = data;

            this.currently = this.datas['gender'];

            let color_i2 = 0;

            this.chart = bb.generate({
                data: {
                    x: "x",
                    columns: this.datas['gender'],
                    type: "bar",
                },
                color: {
                    pattern: [
                        "#59A6FF" ,
                        "#0C7DFF" ,
                        "#2C537F",
                        "#063F7F" ,
                    ]
                },
                tooltip: {
                    show: false
                },
                axis: {
                    x: {
                        show: false,
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
                bindto: "#revenge-porn-graph"
            });


        })
    }
}