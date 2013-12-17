App.module("Charts.List", function(List, App, Backbone, Marionette, $, _){
	List.Controller = {
		listCharts: function(){
			// var devices = App.request("entities:device");
			var sensors = App.request("entities:sensor");
			var sensor_records = App.request("entities:sensor_record");
			// var refreshTime = 10000;
			var charts = {};
			var dimensions = {};
			

			$.when(sensor_records,sensors).then(function(sensor_records,sensors){
				var view = new List.Main({collection: sensors});

				var data = sensor_records.toJSON();

				var dateFormat = d3.time.format("%Y-%m-%d %H:%M:%S");
			    var numberFormat = d3.format(".2f");

			    data.forEach(function (d) {
			        d.dd = dateFormat.parse(d.created_at);
			        //d.month = d3.time.month(d.dd); // pre-calculate month for better performance
			    });

				var ndx = crossfilter(data);
				var all = ndx.groupAll();

    			var dailyDimension = ndx.dimension(function (d) {
			        return d3.time.hour(d.dd);
			    });

				view.on('show',function(){
					_.each(sensors.models,function(sensor){
						charts[slug(sensor.get('name'))] = dc.lineChart("#"+slug(sensor.get('name'))+"-chart", 'mychartgroup');

						var group = dailyDimension.group().reduce(
					        function (p, v) {
					        	if(parseInt(v.sensor_id) == sensor.get('id')){
						        	++p.count;
						            p.total += parseInt(v.value);
						            p.avg = Math.round(p.total / p.count);
						        }
					            return p;
					        },
					        function (p, v) {
					        	if(parseInt(v.sensor_id) == sensor.get('id')){
						            --p.count;
						            p.total -= parseInt(v.value);
						            p.avg = Math.round(p.total / p.count);
						        }
					            return p;
					        },
					        function () {
					            return {count: 0, total: 0, avg: 0};
					        }
					    );

						charts[slug(sensor.get('name'))]
					        .renderArea(true)
					        .width(990)
					        .height(200)
					        .transitionDuration(1000)
					        .margins({top: 0, right: 50, bottom: 25, left: 40})
					        .dimension(dailyDimension)
					        .mouseZoomable(true)
					        .group(group)
					        //.rangeChart(rangeChart)
					        .x(d3.time.scale().domain([d3.min(data, function(d) { return d.dd; }), d3.max(data, function(d) { return d.dd; })]))
					        //.round(d3.time.month.round)
					        //.xUnits(d3.time.months)
					        .elasticY(true)
					        .renderHorizontalGridLines(true)
					        .brushOn(false)
					        .valueAccessor(function (d) {
					            return d.value.avg;
					        })
					        .title(function(d){
					        	return d.data.value.avg;
					        })
					})

					

					dc.renderAll('mychartgroup');
    
				})

				App.mainRegion.show(view);
			});
		}
	};
});
