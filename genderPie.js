function genderPie(pos,ec){	
	d3.csv("./CUSTOMER_MST.csv",function(error,csvdata){
		if(error){
			console.log(error);
		}
		console.log(csvdata);
		console.log(ec);
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
			var cur = new Object();
			cur.value = statis.get(statis.keySet()[i]);
			cur.name = statis.keySet()[i];
			nums[i] = cur;		
		}
		console.log(nums);
		
		// Intinialize Graph by Dom
                var myChart = ec.init(pos); 
		option = {
		    title : {
			text: 'Customer Nation Statistic',
			subtext: '',
			x:'center'
		    },
		    tooltip : {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },
		    legend: {
			orient : 'vertical',
			x : 'left',
			data:statis.keySet()
		    },
		    toolbox: {
			show : true,
			feature : {
			    mark : {show: true},
			    dataView : {show: true, readOnly: false},
			    magicType : {
				show: true, 
				type: ['pie', 'funnel'],
				option: {
				    funnel: {
				        x: '25%',
				        width: '50%',
				        funnelAlign: 'left',
				        max: 1548
				    }
				}
			    },
			    restore : {show: true},
			    saveAsImage : {show: true}
			}
		    },
		    calculable : true,
		    series : [
			{
			    name:'nation percentage',
			    type:'pie',
			    radius : '55%',
			    center: ['50%', '60%'],
			    data:nums
			}
		    ]
		};
		myChart.setOption(option); 

	});   
                
}		            
