function staff(pos,ec){	
	d3.csv("./STAFF_MST.csv",function(error,csvdata){
		if(error){
			console.log(error);
		}
		/*var str = d3.csv.format( csvdata );			
		console.log(str.length);
		console.log(str);	*/
		console.log(csvdata);
		var statis = new Array(20);
		for( var i=0; i<csvdata.length; i++ ){
			var cur = csvdata[i].hotel_id;
			var object = statis[i];
			
			var mapKey = statis.keySet();
			if(IsContain(mapKey,cur)){
				statis.inc(cur);
			}else{
				statis.put(cur,1);
			}
			var mapValue = statis.get(mapKey);
			
		}
		var totalnums = [];
		for(var i=0;i<csvdata.length;i++){
			nums[i] = statis.get(statis.keySet()[i]);		
		}
		console.log(nums);
		
		// Initialize echar by dom
                var myChart = ec.init(pos); 
		option = {
		    tooltip : {
			show: true,
			trigger: 'item'
		    },
		    legend: {
			data:['Rank-officer','Rank-senior','Rank-expert','Rank-assistant',
			    'Position - Region Manager','Position - Manager','Position - Staff',
			    'Gender-Male','Gender-Female']
		    },
		    toolbox: {
			show : true,
			feature : {
			    mark : {show: true},
			    dataView : {show: true, readOnly: false},
			    magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
			    restore : {show: true},
			    saveAsImage : {show: true}
			}
		    },
		    calculable : true,
		    xAxis : [
			{
			    type : 'category',
			    data : ['hotel 1','hotle2','hotel 3','hotel 1','hotel 1','hotel 1','hotel 1','hotel 1','hotel 1','hotel 1','hotel 1','hotel 1','hotel 1','hotel 1','hotel 1','hotel 1','hotel 1','hotel 1','hotel 1','hotel 1']
			}
		    ],
		    yAxis : [
			{
			    type : 'value'
			}
		    ],
		    series : [
			{
			    name:'Rank-officer',
			    type:'bar',
			    stack: '总量',
			    data:[120, '-', 451, 134, 190, 230, 110]
			},
			{
			    name:'Rank-senior',
			    type:'bar',
			    stack: '总量',
			    itemStyle: {                // 系列级个性化
				normal: {
				    barBorderWidth: 6,
				    barBorderColor:'tomato',
				    color: 'red'
				},
				emphasis: {
				    barBorderColor:'red',
				    color: 'blue'
				}
			    },
			    data:[
				320, 332, 100, 334,
				{
				    value: 390,
				    symbolSize : 10,   // 数据级个性化
				    itemStyle: {
				        normal: {
				            color :'lime'
				        },
				        emphasis: {
				            color: 'skyBlue'
				        }
				    }
				},
				330, 320
			    ]
			},
			{
			    name:'Rank-expert',
			    type:'bar',
			    stack: '总量',
			    itemStyle: {                // 系列级个性化
				normal: {
				    barBorderWidth: 6,
				    barBorderColor:'tomato',
				    color: 'red'
				},
				emphasis: {
				    barBorderColor:'red',
				    color: 'blue'
				}
			    },
			    data:[
				320, 332, 100, 334,
				{
				    value: 390,
				    symbolSize : 10,   // 数据级个性化
				    itemStyle: {
				        normal: {
				            color :'lime'
				        },
				        emphasis: {
				            color: 'skyBlue'
				        }
				    }
				},
				330, 320
			    ]
			},
			
		    ]
		};
		myChart.setOption(option); 
		});
}                    
