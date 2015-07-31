function nationPie(pos,ec){	
	d3.csv("./CUSTOMER_MST.csv",function(error,csvdata){
		if(error){
			console.log(error);
		}
		console.log(csvdata);
		console.log(ec);
		var nationStatis = new Map();
		for( var i=0; i<csvdata.length; i++ ){
			var nation = csvdata[i].nationality;
			var mapNation = nationStatis.keySet();
			if(IsContain(mapNation,nation)){
				nationStatis.inc(nation);
			}else{
				nationStatis.put(nation,1);
			}
		}
		var nations = [];
		for(var i=0;i<nationStatis.size();i++){
			var cur = new Object();
			cur.value = nationStatis.get(nationStatis.keySet()[i]);
			cur.name = nationStatis.keySet()[i];
			nations[i] = cur;		
		}
		console.log(nations);
		
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
			data:nationStatis.keySet()
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
			    data:nations
			}
		    ]
		};
		myChart.setOption(option); 

	});   
                
}		            
