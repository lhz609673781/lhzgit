//前台分页
function page(data,tpl,cont) {
            var nums = 10;
            var render = function (curr) {
                	var last = curr * nums - 1,
                      	      tplArray = new Array();
                	last = last >= data.data.length ? (data.data.length - 1) : last;
                	for (var i = (curr * nums - nums); i <= last; i++) {
                    		tplArray.push(data.data[i]);
                	}
                	var $tplArray = $(tpl).render(tplArray);
                	return $tplArray;
            };
            layui.use('laypage', function () {
                	var laypage = layui.laypage;
                	laypage({
                    		cont: 'page',
                    		pages: Math.ceil(data.data.length / nums),
                    		skip: true,
                    		jump: function (obj, first) {
                        		$(cont).html(render(obj.curr));
                    		}
                	});
            });
}

//格式化日期
function formatDate(date){
	var year=date.getFullYear();
	var month=date.getMonth()+1;
	var day=date.getDate();
	var hour=date.getHours();
	var minute=date.getMinutes();
	if(minute<10){
		minute="0"+minute;
	}
	var second=date.getSeconds();
	if(second<10){
		second="0"+second;
	}
	return year+"/"+month+"/"+day+" "+hour+":"+minute+":"+second;
}

//3D饼图
function charts3d(key,arr,des){
    $(key).highcharts({
                chart: {
                    type: 'pie',
                    options3d: {
                        enabled: true,
                        alpha: 45,
                        beta: 0
                    }
                },
                title: {
                    text: ''
                },
                tooltip: {
                    enabled: des,
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        depth: 35,
                        dataLabels: {
                            enabled: des,
                            format: '{point.name} {point.percentage} %'
                        }
                    }
                },
                series: [{
                    type: 'pie',
                    name: '占比',
                    data: arr
                }],
                credits:{
                     enabled:false
                }
            });
}