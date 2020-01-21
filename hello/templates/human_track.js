// console.log($(window).width());
// console.log($(window).height());
doc_h = Math.floor($(window).height());
doc_w = Math.floor($(window).width());

var kpi_row_h = Math.floor(doc_h/5);
var viz_row_h = Math.floor((doc_h*4)/5);

var padding = 15;
var lobby_cec_corner = 0;
var lobby_w = Math.floor(0.15*doc_w);
var lobby_h = Math.floor(viz_row_h-(2*padding));
var cec_w = Math.floor(doc_w-(2*padding));
var cec_h = Math.floor(lobby_w-padding);
var vid_w = Math.floor((doc_w-(3*padding)-lobby_w)/2);
var vid_h = Math.floor((viz_row_h-(2*padding)-lobby_w));

console.log(lobby_w);
console.log(lobby_h);
console.log(cec_w);
console.log(cec_h);

d3.select('#kpi_row')
  .style('height', kpi_row_h + 'px');

d3.select('#viz_row')
  .style('height', viz_row_h + 'px');

d3.select('#clock')
  .style('height', kpi_row_h + 'px');

d3.select('#total_count')
  .style('height', kpi_row_h + 'px');

  d3.select('#total_sos')
    .style('height', kpi_row_h + 'px');

d3.select('#human_track')
  .style('height', viz_row_h + 'px');

d3.select('#vid1')
  .attr('width', vid_w + 'px')
  .attr('height', vid_h + 'px');

d3.select('#vid2')
  .attr('width', vid_w + 'px')
  .attr('height', vid_h + 'px');

d3.select('#viz_z1_vid1')
  .style('top', kpi_row_h+padding + 'px')
  .style('left', lobby_w+(2*padding) + 'px');

d3.select('#viz_z1_vid2')
  .style('top', kpi_row_h+padding + 'px')
  .style('left', lobby_w+(2*padding)+vid_w + 'px');

// d3.select('#info')
//   .attr('top', doc_h-padding + 'px');

var lobby_cec_border = '#dbdbdb';
var lobby_cec_color = '#dbdbdb';
var lobby_cec_border_width = 0

var svg = d3.select("#human_track")
            .append("svg")
            .attr("width", doc_w)
            .attr("height", viz_row_h)
            .append("g")
            .attr('id', 'main_svg');

var lobby = d3.select('#main_svg')
              .append('rect')
              .attr('x', padding)
              .attr('y', padding)
              .attr('width', lobby_w)
              .attr('height', lobby_h)
              .attr('fill', lobby_cec_color)
              .attr('stroke', lobby_cec_border)
              .attr('stroke-width', lobby_cec_border_width)
              .attr('rx', lobby_cec_corner)
              .attr('ry', lobby_cec_corner);

var cec = d3.select('#main_svg')
              .append('rect')
              .attr('x', padding)
              .attr('y', viz_row_h-lobby_w)
              .attr('width', cec_w)
              .attr('height', cec_h)
              .attr('fill', lobby_cec_color)
              .attr('stroke', lobby_cec_border)
              .attr('stroke-width', lobby_cec_border_width)
              .attr('rx', lobby_cec_corner)
              .attr('ry', lobby_cec_corner);

// var overlap = d3.select('#main_svg')
//               .append('rect')
//               .attr('x', padding+lobby_cec_border_width-4)
//               .attr('y', viz_row_h-lobby_w-padding)
//               .attr('width', lobby_w)
//               .attr('height', padding)
//               .attr('fill', lobby_cec_color)
//               .attr('stroke', lobby_cec_border)
//               .attr('stroke-width', 0)
//               .attr('rx', lobby_cec_corner)
//               .attr('ry', lobby_cec_corner);

// var cliprect_color = '#4682b4';
var cliprect_color = '#3DA358';
// var cliprect_color = '#56A0AE';

var cliprect1 = d3.select('#main_svg')
              .append('rect')
              .attr('x', 0)
              .attr('y', 0)
              .attr('width', padding)
              .attr('height', viz_row_h)
              .attr('fill', cliprect_color)
              .attr('stroke-width', '0')
              .attr('rx', lobby_cec_corner)
              .attr('ry', lobby_cec_corner);

var cliprect2 = d3.select('#main_svg')
              .append('rect')
              .attr('x', 0)
              .attr('y', 0)
              .attr('width', doc_w)
              .attr('height', padding)
              .attr('fill', cliprect_color)
              .attr('stroke-width', '0')
              .attr('rx', lobby_cec_corner)
              .attr('ry', lobby_cec_corner);

var cliprect3 = d3.select('#main_svg')
              .append('rect')
              .attr('x', 0)
              .attr('y', padding+lobby_h)
              .attr('width', doc_w)
              .attr('height', padding)
              .attr('fill', cliprect_color)
              .attr('stroke-width', '0')
              .attr('rx', lobby_cec_corner)
              .attr('ry', lobby_cec_corner);

var cliprect4 = d3.select('#main_svg')
              .append('rect')
              .attr('x', (padding*2)+lobby_w+(2*vid_w))
              .attr('y', 0)
              .attr('width', padding+5)
              .attr('height', viz_row_h)
              .attr('fill', cliprect_color)
              .attr('stroke-width', '0')
              .attr('rx', lobby_cec_corner)
              .attr('ry', lobby_cec_corner);

var cliprect5 = d3.select('#main_svg')
              .append('rect')
              .attr('x', padding+lobby_w)
              .attr('y', 0)
              .attr('width', doc_w)
              .attr('height', viz_row_h-lobby_w)
              .attr('fill', cliprect_color)
              .attr('stroke-width', '0')
              .attr('rx', lobby_cec_corner)
              .attr('ry', lobby_cec_corner);

var label_exit_s = 17;
var text_margin = 3;
// var label_color = '#dbdbdb';
var label_color = '#282828'
var label_font = "Lucida Console";

var label_exit = d3.select('#main_svg')
                  .append('text')
                  .attr('x', padding + lobby_w/2)
                  .attr('y', padding + label_exit_s)
                  .text('EXIT')
                  .attr('text-anchor', "middle")
                  .attr('font-weight', "bold")
                  .attr("font-family", label_font)
                  .attr("font-size", label_exit_s)
                  .attr("fill", label_color);

var label_cec = d3.select('#main_svg')
                  .append('text')
                  .attr('x', doc_w/2 + padding)
                  .attr('y', viz_row_h-lobby_w+padding+text_margin)
                  .text('CEC')
                  .attr('text-anchor', "middle")
                  .attr('font-weight', "bold")
                  .attr("font-family", label_font)
                  .attr("font-size", label_exit_s)
                  .attr("fill", label_color);

label_gradient_x = padding + text_margin + label_exit_s
label_gradient_y = viz_row_h-(0.8*viz_row_h)
var label_gradient = d3.select('#main_svg')
                      .append('text')
                      .attr('x', label_gradient_x)
                      .attr('y', label_gradient_y)
                      .text('GRADIENT')
                      .attr('text-anchor', "middle")
                      .attr('font-weight', "bold")
                      .attr('transform', "rotate(-90," + label_gradient_x + "," + label_gradient_y + ")")
                      .attr("font-family", label_font)
                      .attr("font-size", label_exit_s)
                      .attr("fill", label_color);

label_elevate_x = padding + text_margin + label_exit_s
label_elevate_y = viz_row_h-(0.55*viz_row_h)
var label_elevate = d3.select('#main_svg')
                      .append('text')
                      .attr('x', label_elevate_x)
                      .attr('y', label_elevate_y)
                      .text('ELEVATE')
                      .attr('text-anchor', "middle")
                      .attr('font-weight', "bold")
                      .attr('transform', "rotate(-90," + label_elevate_x + "," + label_elevate_y + ")")
                      .attr("font-family", label_font)
                      .attr("font-size", label_exit_s)
                      .attr("fill", label_color);

//Adding SOS buttons
var sos_button1 = d3.select('#main_svg')
                  .append('circle')
                  .attr('cx', lobby_w)
                  .attr('cy', viz_row_h+padding)
                  .attr('r', 3)
                  .attr('fill', '#037f51');





//CIRCLES
var dataset = [[100,50]];

//Create scale functions
var xScale = d3.scaleLinear()
           .domain([0, d3.max(dataset, function(d) { return d[0]; })])
           .range([padding, doc_w - padding * 2]);

var yScale = d3.scaleLinear()
           .domain([0, d3.max(dataset, function(d) { return d[1]; })])
           .range([viz_row_h , padding]);

var rScale = d3.scaleLinear()
           .domain([0, d3.max(dataset, function(d) { return d[1]; })])
           .range([2, 5]);


// d3.select('#main_svg')
//     .append('g')
//     .attr('id', 'people')
//     .selectAll("circle")
// 	  .data(dataset)
//     .enter()
//     .append("circle")
//     .attr('cx', function(d){
//       // return 20;
//       return xScale(d[0]);
//     })
//     .attr('cy', function(d){
//       // return 40;
//       return yScale(d[1]);
//     })
//     .attr("r", function(d) {
//             return 10;
//     })
//     .attr('fill', 'white');
//
//
// var refresh = function() {
//
//       var i, j, newVal;
//       var array = [];
//       var subarray = [];
//       for (i = 0; i < dataset.length; i++) {
//         for (j = 0; j < dataset[i].length; j++) {
//           if(j==1){
//             newVal = dataset[i][j] + 30;
//             subarray.push(newVal);
//           }
//          else{
//             subarray.push(dataset[i][j]);
//          }
//         }
//         array.push(subarray)
//       };
//       console.log(array);
//
//       dataset = array;
//
//     	//Update all rects
//     	d3.select('#peopl')
//       .selectAll("circle")
//     	   .data(dataset)
//     	   .transition()								// <-- This makes it a smooth transition!
//          .duration(1000)
//          .attr('cx', function(d){
//            return d[0];
//          })
//          .attr('cy', function(d){
//            return d[1];
//          })
//          .attr("r", function(d) {
//                  return 10;
//          });
//        };
//
// setInterval(refresh, 2000);








//Total Count
var tc_w = doc_w/6;
var tc_h = kpi_row_h;

d3.select("#total_count")
   .append("svg")
   .attr('id', 'svg_total_count')
   .attr("width", tc_w)
   .attr("height", tc_h)
   .append('circle')
   .attr('cx', tc_w/2)
   .attr('cy', tc_h/3)
   .attr('r', tc_w/5)
   .attr('fill', '#3DA358');
   // .attr('fill', '#4682b4');

d3.select("#svg_total_count")
  .append('text')
  .attr('x', tc_w/2)
  .attr('y', tc_h/3+10)
  .text('30')
  .attr('id', 'total_count_text')
  .attr('text-anchor', "middle")
  .attr('font-weight', "bold")
  .attr("font-family", label_font)
  .attr("font-size", 30)
  .attr("fill", "#dbdbdb");

d3.select("#svg_total_count")
  .append('text')
  .attr('x', tc_w/2)
  .attr('y', tc_h-padding)
  .text('Total Count')
  .attr('text-anchor', "middle")
  .attr('font-weight', "bold")
  .attr("font-family", label_font)
  .attr("font-size", 20)
  .attr("fill", "#202020");

//Total SOS
var tc_w = doc_w/6;
var tc_h = kpi_row_h;

d3.select("#total_sos")
   .append("svg")
   .attr('id', 'svg_total_sos')
   .attr("width", tc_w)
   .attr("height", tc_h)
   .append('circle')
   .attr('cx', tc_w/2)
   .attr('cy', tc_h/3)
   .attr('r', tc_w/5)
   .attr('fill', '#8b0000');

d3.select("#svg_total_sos")
  .append('text')
  .attr('x', tc_w/2)
  .attr('y', tc_h/3+10)
  .text('7')
  .attr('id', 'total_count_text')
  .attr('text-anchor', "middle")
  .attr('font-weight', "bold")
  .attr("font-family", label_font)
  .attr("font-size", 30)
  .attr("fill", "#dbdbdb");

d3.select("#svg_total_sos")
  .append('text')
  .attr('x', tc_w/2)
  .attr('y', tc_h-padding)
  .text('SOS')
  .attr('text-anchor', "middle")
  .attr('font-weight', "bold")
  .attr("font-family", label_font)
  .attr("font-size", 20)
  .attr("fill", "#202020");

// d3.select()







//CLOCK
var radians = 0.0174532925,
	clockRadius = 50,
	margin = 50,
	width = doc_w/12,
  height = kpi_row_h,
  hourHandLength = 2*clockRadius/3,
  minuteHandLength = clockRadius,
  secondHandLength = clockRadius-40,
  secondHandBalance = 30,
  secondTickStart = clockRadius;
  secondTickLength = -10,
  hourTickStart = clockRadius,
  hourTickLength = -18
  secondLabelRadius = clockRadius + 16;
  secondLabelYOffset = 5
  hourLabelRadius = clockRadius - 40
  hourLabelYOffset = 7;


var hourScale = d3.scaleLinear()
	.range([0,330])
	.domain([0,11]);

var minuteScale = secondScale = d3.scaleLinear()
	.range([0,354])
	.domain([0,59]);

var handData = [
	{
		type:'hour',
		value:0,
		length:-hourHandLength,
		scale:hourScale
	},
	{
		type:'minute',
		value:0,
		length:-minuteHandLength,
		scale:minuteScale
	},
	{
		type:'second',
		value:0,
		length:-secondHandLength,
		scale:secondScale,
		balance:secondHandBalance
	}
];

function drawClock(){ //create all the clock elements
	updateData();	//draw them in the correct starting position
	var svg2 = d3.select("#clock")
               .append("svg")
               .attr('id', 'svg_clock')
          	   .attr("width", width)
          	   .attr("height", height);

	var face = svg2.append('g')
		.attr('id','clock-face')
		.attr('transform','translate(' + 50 + ',' + 70 + ')');

	//add marks for seconds
	face.selectAll('.second-tick')
		.data(d3.range(0,60)).enter()
			.append('line')
			.attr('class', 'second-tick')
			.attr('x1',0)
			.attr('x2',0)
			.attr('y1',secondTickStart)
			.attr('y2',secondTickStart + secondTickLength)
			.attr('transform',function(d){
				return 'rotate(' + secondScale(d) + ')';
			});
	//and labels

	face.selectAll('.second-label')
		.data(d3.range(5,61,5))
			.enter()
			.append('text')
			.attr('class', 'second-label')
			.attr('text-anchor','middle')
			.attr('x',function(d){
				return secondLabelRadius*Math.sin(secondScale(d)*radians);
			})
			.attr('y',function(d){
				return -secondLabelRadius*Math.cos(secondScale(d)*radians) + secondLabelYOffset;
			})
			.text(function(d){
				return d;
			});

	//... and hours
	face.selectAll('.hour-tick')
		.data(d3.range(0,12)).enter()
			.append('line')
			.attr('class', 'hour-tick')
			.attr('x1',0)
			.attr('x2',0)
			.attr('y1',hourTickStart)
			.attr('y2',hourTickStart + hourTickLength)
			.attr('transform',function(d){
				return 'rotate(' + hourScale(d) + ')';
			});

	face.selectAll('.hour-label')
		.data(d3.range(3,13,3))
			.enter()
			.append('text')
			.attr('class', 'hour-label')
			.attr('text-anchor','middle')
			.attr('x',function(d){
				return hourLabelRadius*Math.sin(hourScale(d)*radians);
			})
			.attr('y',function(d){
				return -hourLabelRadius*Math.cos(hourScale(d)*radians) + hourLabelYOffset;
			})
			.text(function(d){
				return d;
			});


	var hands = face.append('g').attr('id','clock-hands');

	face.append('g').attr('id','face-overlay')
		.append('circle').attr('class','hands-cover')
			.attr('x',0)
			.attr('y',0)
			.attr('r',clockRadius/20);

	hands.selectAll('line')
		.data(handData)
			.enter()
			.append('line')
			.attr('class', function(d){
				return d.type + '-hand';
			})
			.attr('x1',0)
			.attr('y1',function(d){
				return d.balance ? d.balance : 0;
			})
			.attr('x2',0)
			.attr('y2',function(d){
				return d.length;
			})
			.attr('transform',function(d){
				return 'rotate('+ d.scale(d.value) +')';
			});
}

function moveHands(){
	d3.select('#clock-hands').selectAll('line')
	.data(handData)
		.transition()
		.attr('transform',function(d){
			return 'rotate('+ d.scale(d.value) +')';
		});
}

function updateData(){
	var t = new Date();
	handData[0].value = (t.getHours() % 12) + t.getMinutes()/60 ;
	handData[1].value = t.getMinutes();
	handData[2].value = t.getSeconds();
}

drawClock();

setInterval(function(){
	updateData();
	moveHands();
}, 1000);
































d3.select('#trend_chart')
  .style('height', kpi_row_h + 'px');

trend_w = Math.floor($('#trend_chart').width());
trend_h = Math.floor($('#trend_chart').height());
// create the svg area
var svg = d3.select('#trend_chart')
            .append("svg")
            .attr("id", "svg_trend_chart")
            .attr("width", trend_w)
            .attr("height", trend_h);

// set the dimensions and margins of the graph
var trend_margin = {top: 10, right: 10, bottom: 10, left: 10}

// append the svg object to the body of the page
svg.append("g")
    .attr("id", "g_trend_chart")
    .attr("transform",
          "translate(" + 0 + "," + 10 + ")");

// Data
var dataset = [1,2,3,1,2,3];

//Create scale functions
var xScaleTrend = d3.scaleBand()
           .domain(d3.range(dataset.length))
           .range([0, trend_w-trend_margin.left-trend_margin.right]);

var yScaleTrend = d3.scaleLinear()
           .domain([0, d3.max(dataset)])
           .range([trend_h-trend_margin.top-trend_margin.bottom, 0]);



// Add the area
svg.select("#g_trend_chart")
  .append("path")
  .datum(dataset)
  .attr("fill", "#3d3d3d")
  .attr("d", d3.area()
              .curve(d3.curveCardinal)
              .x(function(d,i) {
                return xScaleTrend(i);
              })
              .y0(yScale(0))
              .y1(function(d) {
                return yScaleTrend(d);
              })
    );





d3.select('#info')
  .on('mouseover', function(){
    d3.select('body')
      .append('div')
      .attr('id', 'temp_info')
      .style('z-index',  3)
      .style('left', 0)
      .style('top', 0)
      .style('position',  'absolute')
      .append('svg')
      .attr('width', doc_w-(2*padding))
      .attr('height', doc_h-(2*padding))
      .append('rect')
      .attr('x', padding)
      .attr('y', padding)
      .attr('width', doc_w-(2*padding))
      .attr('height', doc_h-(2*padding))
      .attr('fill', 'red')
      .attr('opacity', '0')
      .transition()
      .duration(2000)
      .attr('opacity', '100');
  })
  .on('mouseout', function(){
    d3.select('#temp_info')
      .remove();
  });
