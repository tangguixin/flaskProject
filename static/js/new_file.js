$(function(){
	// pieChar();
	barChar(baroption);
	linchar(data);

	 radarchar(radaroption);
	// progress1char();
	// progress2char();
	// mapchar();
});
window.onresize = function(){
    // pieChart.resize();
    barChart.resize();    //若有多个图表变动，可多写
    linchart.resize();
    radarchart.resize();
    // progress1chart.resize();
	//  progress2chart.resize();
	//  mapchart.resize()

}
//饼状图
var pieChart="";
function pieChar(){
	pieChart= echarts.init(document.getElementById("pie-chart"));
	option = {
		color:["#4f8bf9","#fea31e","#959595"],
	    tooltip: {
	        trigger: 'item',
	        formatter: "{a} <br/>{b}: {c} ({d}%)"
	    },
	    series: [
	        {
	            name:'访问来源',
	            type:'pie',
	            selectedMode: 'single',
	            radius: [0, '60%'],
				center:["50%","42%"],
	           label: {
	                normal: {
	                    position: 'outside',
	                    formatter: "{b}:{d}%"    
	                }
	            }, 
	            data:[
	                {value:556, name:'正常'},
	                {value:100, name:'告警',selected:true},
	                {value:30, name:'离线'}
	            ]
	        }
	    ]
	};
	pieChart.setOption(option);
}
//柱状图
baroption = {
    series: [{
            type: 'gauge',
            center: ["50%", "60%"],
            startAngle: 200,
            endAngle: -20,
            min: 0,
            max: 60,
            splitNumber: 12,
            itemStyle: {

            },
            progress: {
                show: true,
                width: 30
            },

            pointer: {
                show: false,
            },
            axisLine: {
                lineStyle: {
                    width: 30
                }
            },
            axisTick: {
                distance: -45,
                splitNumber: 5,
                lineStyle: {
                    width: 2,

                }
            },
            splitLine: {
                distance: -52,
                length: 14,
                lineStyle: {
                    width: 3,

                }
            },
            axisLabel: {
                distance: -20,

                fontSize: 20
            },
            anchor: {
                show: false
            },
            title: {
                show: false
            },
            detail: {
                valueAnimation: true,
                width: '60%',
                lineHeight: 40,
                height: '15%',
                borderRadius: 8,
                offsetCenter: [0, '-15%'],
                fontSize: 60,
                fontWeight: 'bolder',
                formatter: '{value} °C',
                color: 'auto'
            },
            data: [{
                value: 20
            }]
        },

        {
            type: 'gauge',
            center: ["50%", "60%"],
            startAngle: 200,
            endAngle: -20,
            min: 0,
            max: 60,
            itemStyle: {
            },
            progress: {
                show: true,
                width: 8
            },

            pointer: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                show: false
            },
            detail: {
                show: false
            },
            data: [{
                value: 20,
            }]

        }
    ],
};
var barChart="";
function barChar(baroption){
	barChart= echarts.init(document.getElementById("bar-chart"));

barChart.setOption(baroption)

}
    function randomData(num) {
    now = new Date();
    value=num
    return {
        name: now.toString(),
        value: [
            now,
            Math.round(value)
        ]
    };
}
	var data = [];

for (var i = 0; i < 1000; i++) {
    data.push(randomData(0));
}
//折线图
var linchart="";
function linchar(data){

	linchart= echarts.init(document.getElementById("line-chart"));
option = {
    tooltip: {
        trigger: 'axis',
        formatter: function (params) {
            params = params[0];
            var date = new Date(params.name);
            return date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + ' : ' + params.value[1]+"℃";
        },
        axisPointer: {
            animation: false
        }
    },
    xAxis: {
        type: 'time',
        minInterval: 1,
        tickPixelInterval: 150,
		splitLine:{
        	show:false
		}
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: {
            show: false
        }
    },
    series: [{
        name: '模拟数据',
        type: 'line',
        smooth: true,
            emphasis: {
                focus: 'series'
            },
        showSymbol: true,
        hoverAnimation: false,
        data: data,
                    markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
            // markLine: {
            //     data: [
            //         {type: 'average', name: '平均值'}
            //     ]
            // }
    }]
};
	linchart.setOption(option)	
}
setInterval(function () {
        data.shift();
        data.push(randomData(Math.random(10,100)*1000));
    linchart.setOption({
        series: [{
            data: data
        }]
    });
      let random = (Math.random() * 60).toFixed(2) - 0;
      let random1 = (Math.random() * 60).toFixed(2) - 0;
    baroption.series[0].data[0].value = random;
    baroption.series[1].data[0].value = random;
    radaroption.series[0].data[0].value=random1
    barChart.setOption(baroption)
    radarchart.setOption(radaroption)
}, 2000);
//柱状图2
var barschart=""
function barschar(barschart){
     barschart = echarts.init(document.getElementById("bars-chart"));
     option = {
    series: [{
            type: 'gauge',
            center: ["50%", "60%"],
            startAngle: 200,
            endAngle: -20,
            min: 0,
            max: 60,
            splitNumber: 12,
            itemStyle: {
                color: '#FFAB91'
            },
            progress: {
                show: true,
                width: 30
            },

            pointer: {
                show: false,
            },
            axisLine: {
                lineStyle: {
                    width: 30
                }
            },
            axisTick: {
                distance: -45,
                splitNumber: 5,
                lineStyle: {
                    width: 2,
                    color: '#999'
                }
            },
            splitLine: {
                distance: -52,
                length: 14,
                lineStyle: {
                    width: 3,
                    color: '#999'
                }
            },
            axisLabel: {
                distance: -20,
                color: '#999',
                fontSize: 20
            },
            anchor: {
                show: false
            },
            title: {
                show: false
            },
            detail: {
                valueAnimation: true,
                width: '60%',
                lineHeight: 40,
                height: '15%',
                borderRadius: 8,
                offsetCenter: [0, '-15%'],
                fontSize: 60,
                fontWeight: 'bolder',
                formatter: '{value} °C',
                color: 'auto'
            },
            data: [{
                value: 20
            }]
        },

        {
            type: 'gauge',
            center: ["50%", "60%"],
            startAngle: 200,
            endAngle: -20,
            min: 0,
            max: 60,
            itemStyle: {
                color: '#FD7347',
            },
            progress: {
                show: true,
                width: 8
            },

            pointer: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                show: false
            },
            detail: {
                show: false
            },
            data: [{
                value: 20,
            }]

        }
    ],
};
     barschart.setOption(option)	     
};
//雷达图
radaroption = {
    tooltip: {
        formatter: '{a} <br/>{b} : {c}%'
    },
    series: [{
        name: 'Pressure',
        type: 'gauge',
        progress: {
            show: true
        },
        detail: {
            valueAnimation: true,
            formatter: '{value}'
        },
        data: [{
            value: 0,
            name: '湿度'
        }]
    }]
};
var radarchart="";
function radarchar(radaroption){
	radarchart = echarts.init(document.getElementById("radar-chart"));
	radarchart.setOption(radaroption)
}
//进度条1
var progress1chart="";
function progress1char(){
	progress1chart = echarts.init(document.getElementById("progress1-chart"));
	var baifenbi = [0.333, 0.444, 0.555, 0.777, 0.888];
	var grayBar = [1, 1, 1, 1, 1, ];
	var paiming = [ 5, 4, 3, 2, 1];
	var xingm = ['宁波', '台州', '焦作', '邢台', '嘉兴'];
	option = {
	    title: {
	        text: '2019年 第一季度',
	        left: '75%',
	        top:"20",
	        textStyle:{
	        	color:"#fff",
	        	fontSize:12
	        }
	    },
	     grid: {
	         left: '15%',  //如果离左边太远就用这个......
	         right: '15%',
	         bottom: '5%',
	         top: '20%',
	         containLabel: true
	     },
	    xAxis: [{
	            show: false,
	       },
	        {
	            show: false,
	        }
	    ],
	    yAxis: {
	        type: 'category',
	        axisLabel: {
	            show: true, //让Y轴数据不显示
	        },

	        axisTick: {
	            show: false, //隐藏Y轴刻度
	        },
	        axisLine: {
	            show: false, //隐藏Y轴线段
	        },
	    },
	    series: [
	        //背景色
	        {
	            show: true,
	            type: 'bar',
	            barGap: '-100%',
	            barWidth: '10%', //统计条宽度 
	            itemStyle: {
	                normal: {
	                    barBorderRadius: 50,
	                    color: 'rgba(41, 55, 94)'
	                },
	            },
	            z: 1,
	            data: grayBar,
	        },
	        //蓝条
	        {
	            show: true,
	            type: 'bar',
	            barGap: '-100%',
	            barWidth: '10%', //统计条宽度
	            itemStyle: {
	                normal: {
	                    barBorderRadius: 50, //统计条弧度
	                    color: {
	                        colorStops: [{
	                             offset: 0,
	                             color: '#5d29f7' // 0% 处的颜色
	                         }, {
	                             offset: 1,
	                             color: '#5093fb' // 100% 处的颜色
	                         }],
	                        globalCoord: false, // 缺省为 false
	
	                    }
	                },
	            },
	            max: 1,
	            label: {
	                normal: {
	                    show: true,
	                    textStyle: {
	                        color: '#fff', //百分比颜色
	                    },
	                    position: [0, '-35'],
	                    rich: { //富文本
	                        yellow: {
	                            color: '#FEC735',
	                        }
	                    },
	                    formatter: function(data) {
	                        //富文本固定格式{colorName|这里填你想要写的内容}
	                        if(paiming[data.dataIndex] == 1||paiming[data.dataIndex] == 2||paiming[data.dataIndex] == 3){
	                        	return '{yellow|' + paiming[data.dataIndex] + '  ' + xingm[data.dataIndex] + '}';
	                        }else{
	                        	return paiming[data.dataIndex] + '  ' + xingm[data.dataIndex] 
	                        }
	                       
	                    },
	                    
	                }
	            },
	          data: baifenbi,
	        },
	        
	    ]
	};
	
	progress1chart.setOption(option)
}
//点击切换数据
function DataSwitch(obj,num){
	$(obj).removeClass("Datasame");
	$(obj).siblings().addClass("Datasame")
	if(num==1){
		$(obj).parent().prev().addClass("Defaultgray");
		$(obj).parent().next().removeClass("Defaultgray");
		
		barChar([100,20,60,81])
		
		
	}else{
		barChar()
		$(obj).parent().prev().removeClass("Defaultgray");
		$(obj).parent().next().addClass("Defaultgray");
		barChar([10,20,50,81])
	}
		
	
}
