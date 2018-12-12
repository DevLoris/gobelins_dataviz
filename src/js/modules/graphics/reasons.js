import Graph from './graph';

export default class ReasonsGraph extends Graph {
    constructor(translator) {
        super('#reasons-graph');
        this.translator = translator;
    }

    init() {
        console.log(this.translator);
        super.init();

        d3.json('datas/reasons.json').then(data => {
            var svg = d3.select('body').select(this.selector).select("svg");

            let w = document.querySelector(this.selector).clientWidth;
            let h = document.querySelector(this.selector).clientHeight;

            var pack = d3.pack()
                .size([w,h])
                .padding(5);

            redraw(data);

            let translator = this.translator;
            function redraw(classes){
                let bbox = null;
                // transition
                let t = d3.transition()
                    .duration(750);

                // hierarchy
                let h = d3.hierarchy({children: classes})
                    .sum(function(d) {
                        return (d.value) ? d.value : 0;
                    })

                //JOIN
                let circle = svg.selectAll("circle")
                    .data(pack(h).leaves(), function(d){ return d.data.name; });

                let text = svg.selectAll("text")
                    .data(pack(h).leaves(), function(d){ return d.data.name; });


                //EXIT
                circle.exit()
                    .remove();

                text.exit()
                    .remove();

                //UPDATE
                circle
                    .transition(t)
                    .style("fill", "#45b29d")
                    .attr("r", function(d){ return d.r })
                    .attr("cx", function(d){ return d.x; })
                    .attr("cy", function(d){ return d.y; })

                text
                    .transition(t)
                    .attr("x", function(d){ return d.x; })
                    .attr("y", function(d){ return d.y; });

                //ENTER
                let c = circle.enter()
                    .append("g")
                    .attr('class', 'graphic-group')
                    .on("mouseover",  (d) =>  {
                        let text =   translator.get(d.data.value) + "% " + translator.get('slide.2.legend')+"  " + translator.get(d.data.text_key + '.name');
                        document.querySelector('.reason-legend').innerHTML = text;
                    });

                let circlex = c.append("circle")
                    .attr('class', 'graphic-circle')
                    .attr("r", 1e-6)
                    .attr("cx", function(d){ return d.x; })
                    .attr("cy", function(d){ return d.y; })
                    .transition(t)
                    //                 .style("fill", "#45b29d")
                    .attr("r", function(d){ return d.r });


                let x = c.append("text")
                //.attr("opacity", 1e-6)
                    .text(function(d){ return d.data.name; })
                    .attr("opacity", 1)
                    .attr('class', 'graphic-text')
                    .attr("x", function(d,i,el){  return d.x; })
                    .attr("y", function(d){ return d.y - 2; })
                    .attr("text-anchor", "middle")
                    .style('font-size', '25px')
                    .transition(t)
                    .attr("opacity", 1);

                c.append("image")
                    .attr("xlink:href", function(d) { return "images/" + d.data.icons })
                    .attr("width", function(d) { return 2*d.r; })
                    .attr("x", function(d,i,el){  return d.x- d.r; })
                    .attr("y", function(d){ return d.y - d.r; })
                    .attr('class', "graphic-image")
                    .attr("height", function(d) { return 2*d.r; })
                 //   .attr('transform', function(d) { return 'translate(' + d.x + ',' + d.y + ')'; });
                    /*.append("image")
                    .attr("xlink:href", function(d) { return "images/" + d.data.icons })
                    .attr('class', 'test')
                    .attr("x", function(d,i,el){  return d.x; })
                    .attr("y", function(d){ return d.y; })
                    .attr('width', '20px')
                    .attr('height', '20px')*/
                ;

                c.append("text")
                //.attr("opacity", 1e-6)
                    .attr('class', 'graphic-data')
                    .attr("x", function(d,i,el){  return d.x ; })
                    .attr("y", function(d){ return d.y + 10; })
                    .text(function(d){ return d.data.value; })

                    .attr("text-anchor", "middle");


            }

        }) ;
    }
}