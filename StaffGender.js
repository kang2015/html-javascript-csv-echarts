function StaffGender(pos,ec){
	d3.csv("./STAFF_MST.csv",function(error,csvdata){
		if(error){
			console.log(error);
		}
		/*var str = d3.csv.format( csvdata );			
		console.log(str.length);
		console.log(str);	*/
		console.log(csvdata);
		var statis = new Map();
		for( var i=0; i<csvdata.length; i++ ){
			var cur = csvdata[i].gender;
			var mapKey = statis.keySet();
			if(IsContain(mapKey,cur)){
				statis.inc(cur);
			}else{
				statis.put(cur,1);
			}
		}
		var nums = [];
		for(var i=0;i<statis.size();i++){
			nums[i] = statis.get(statis.keySet()[i]);		
		}
		console.log(nums);
		// Initialize echar by dom
                var myChart = ec.init(pos); 
                var option = {
                    tooltip: {
                        show: true
                    },
                    legend: {
                        data:['Hotel Staff position']
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data : statis.keySet()
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            "name":"Hotel Staff position",
                            "type":"bar",
                            "data":nums
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
