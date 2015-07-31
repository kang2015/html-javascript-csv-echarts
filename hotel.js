function hotel(pos,ec){
	d3.csv("./STAFF_MST.csv",function(error,csvdata){
		if(error){
			console.log(error);
		}
		/*var str = d3.csv.format( csvdata );			
		console.log(str.length);
		console.log(str);	*/
		console.log(csvdata);
		var hotelStatis = new Map();
		for( var i=0; i<csvdata.length; i++ ){
			var hotel = csvdata[i].hotel_id;
			var mapHotel = hotelStatis.keySet();
			if(IsContain(mapHotel,hotel)){
				hotelStatis.inc(hotel);
			}else{
				hotelStatis.put(hotel,1);
			}
		}
		var hotels = [];
		for(var i=0;i<hotelStatis.size();i++){
			hotels[i] = hotelStatis.get(hotelStatis.keySet()[i]);		
		}
		console.log(hotels);
		// Initialize echar by dom
                var myChart = ec.init(pos); 
                var option = {
                    tooltip: {
                        show: true
                    },
                    legend: {
                        data:['Hotel Staff Number']
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data : hotelStatis.keySet()
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            "name":"Hotel Staff Number",
                            "type":"bar",
                            "data":hotels
                        }
                    ]
                };
        
                // Load data for Echart 
                myChart.setOption(option); 
		//draw(nations);
		//draw(genders);
		//draw(ages);
		});
}
