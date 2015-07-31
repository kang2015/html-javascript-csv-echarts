function gender(pos,ec){
d3.csv("./CUSTOMER_MST.csv",function(error,csvdata){
		if(error){
			console.log(error);
		}
		/*var str = d3.csv.format( csvdata );			
		console.log(str.length);
		console.log(str);	*/
		console.log(csvdata);
		var genderStatis = new Map();
		for( var i=0; i<csvdata.length; i++ ){
			
			var gender = csvdata[i].gender;
			var mapGender = genderStatis.keySet();
			if(IsContain(mapGender,gender)){
				genderStatis.inc(gender);
			}else{
				genderStatis.put(gender,1);
			}
			
		}
		var genders = [];
		for(var i=0;i<genderStatis.size();i++){
			genders[i] = genderStatis.get(genderStatis.keySet()[i]);	
		}
		console.log(genders);
		// Initialize char by dom
                var myChart = ec.init(pos); 
               
		
                var option = {
                    tooltip: {
                        show: true
                    },
                    legend: {
                        data:['Customer Gender']
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data : genderStatis.keySet()
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            "name":"Customer Gender",
                            "type":"bar",
                            "data":genders
                        }
                    ]
                };
        
                // Load data for echarts
                myChart.setOption(option); 
		//draw(nations);
		//draw(genders);
		//draw(ages);
		});
}
