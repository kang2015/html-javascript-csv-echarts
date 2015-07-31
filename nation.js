function nation(pos,ec){	
	d3.csv("./CUSTOMER_MST.csv",function(error,csvdata){
		if(error){
			console.log(error);
		}
		console.log(csvdata);
		console.log(ec);
		
		/*var str = d3.csv.format( csvdata );			
		console.log(str.length);
		console.log(str);	*/
		var nationStatis = new Map();
		var genderStatis = new Map();
		var ageStatis = new Map();
		for( var i=0; i<csvdata.length; i++ ){
			var nation = csvdata[i].nationality;
			var mapNation = nationStatis.keySet();
			if(IsContain(mapNation,nation)){
				nationStatis.inc(nation);
			}else{
				nationStatis.put(nation,1);
			}
			
			var gender = csvdata[i].gender;
			var mapGender = genderStatis.keySet();
			if(IsContain(mapGender,gender)){
				genderStatis.inc(gender);
			}else{
				genderStatis.put(gender,1);
			}
			
			var year = csvdata[i].birthday.substring(0,4);
			if(year >= 1990) year= "after 1990";
			else if(year >= 1980) year = "1980-1990";
			else if(year >= 1970) year = "1970-1980";
			else if(year >= 1960) year = "1960-1970";
			else year = "before 1960";
			var mapAge = ageStatis.keySet();
			if(IsContain(mapAge,year)){
				ageStatis.inc(year);
			}else{
				ageStatis.put(year,1);
			}
		}
		var nations = [];
		for(var i=0;i<nationStatis.size();i++){
			nations[i] = nationStatis.get(nationStatis.keySet()[i]);		
		}
		console.log(nations);
		var genders = [];
		for(var i=0;i<genderStatis.size();i++){
			genders[i] = [genderStatis.keySet()[i],genderStatis.get(genderStatis.keySet()[i])];	
		}
		console.log(genders);
		var ages = [];
		for(var i=0;i<ageStatis.size();i++){
			ages[i] = [ageStatis.keySet()[i],ageStatis.get(ageStatis.keySet()[i])];
		}
		// Intinialize Graph by Dom
                var myChart = ec.init(pos); 
               
		
                var option = {
                    tooltip: {
                        show: true
                    },
                    legend: {
                        data:['Customer Nation']
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data : nationStatis.keySet()
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            "name":"Customer Nation",
                            "type":"bar",
                            "data":nations
                        }
                    ]
                };
        
                // Load Data For Echart 
                myChart.setOption(option); 
		//draw(nations);
		//draw(genders);
		//draw(ages);
	});   
                
}
