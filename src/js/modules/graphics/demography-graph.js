import Graph from './graph';

export default class DemographyGraph extends Graph {
    constructor(lang) {
        super('#social-use-internet');
        this.lang = lang;
    }


    init() {
        super.init();

        d3.json('datas/demography-stats.json').then( (data) => {
            data.gender.forEach((v, k) => {
                v.forEach((value, key) => {
                    if(key == 0)
                        data.gender[k][key] = this.lang.get(value)
                })
            });
            data.age.forEach((v, k) => {
                v.forEach((value, key) => {
                    if(key == 0)
                        data.age[k][key] = this.lang.get(value)
                })
            });

            let color_i = 0;
            var chart = bb.generate({
                data: {
                    columns: data.gender,
                    order: null,
                    type: "pie"
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
                legend: {
                    position: "right"
                },
                bindto :  "#demography-gender-graph"
            });
            console.log(chart);

            let color_i2 = 0;
            var chart2 = bb.generate({
                data: {
                    columns: data.age,
                    order: null,
                    type: "pie",
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
                legend: {
                    position: "right"
                },
                bindto :  "#demography-age-graph"
            });


        })
    }
}