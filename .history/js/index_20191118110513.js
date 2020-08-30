// I am going to continue to improve this...
// I attempt to perform candle again but could not overcome the previous version.
// http://codepen.io/fixcl/pen/nKFDr

//上面是原作者的屁话 PS:我修改了蜡烛的top值，还是一点卵用都没有，不同屏幕大小因为top值是百分比，会出现错位
//如何解决？除非把蜡烛不用CSS动画，和SVG合并，但现在根本没那个技术
//或者SVG用百分比确定top？或者蜡烛用em确定top？
//获取windows的高度来确定蜡烛的高度

//初始化fullpage
$(document).ready(function()
	{
		//获取windows的高度确定蜡烛的高度，对不同屏幕适配
		var velas_top = window.screen.height * 0.5 - 210;
		console.log(velas_top);
		//修改蜡烛的高度
		$('.velas').css(
			{
				'top': velas_top +'px'
			}
		);
		
		//先隐藏所有的文字
		$('.text').addClass('hide');
		$('#fullpage').fullpage(
			{
				sectionsColor: ['#ee9ca7', '#66cccc', '#b627d6','#00cc99', '#66cccc', '#ffcc66'],
				navigation: true,
				//增加回调函数，文字动画
				afterLoad: function(anchorLink, index)
				{
					//跳过最后彩蛋
					if (index == 6)
					{
						return;
					}
					
					
		            var text = $(this).find('.text');
		            text.removeClass('hide');
		            $(this).find('.text').addClass('animated fadeInDown');
		            svgpaint(index);
		            /*
		            if (index == 4)
		            {
		            	$(this).find('img').addClass('flipInX')
					}
					*/
	       	},
				//心累，感觉回滚没有有文字动画果然不行，得加上
				 onLeave: function(index, nextIndex, direction){ 
				 	
				 	//跳过最后彩蛋
					if (index == 6)
					{
						return;
					}
				 	var text = $(this).find('.text');
				 	$(this).find('.text').removeClass('animated fadeInDown').addClass('hide');
				 	
				 },
			}
			
		);
		
		
	});
	
	
	


