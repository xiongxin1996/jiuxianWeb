$(function(){
	$(".jiuBox").mouseover(function(){
		$(this).css({"background":"white","border":"1px solid #ededed"});
		$(".myJiu").find("i").css("transform","rotate(180deg)")
		$(".jiuBox div").show();
	}).mouseout(function(){
		$(this).css({"background":"$redColor","border":"1px solid transparent"});
		$(this).find("i").css("transform","rotate(0deg)")
		$(".jiuBox div").hide();
	})
	$(".phoneShow").mouseover(function(){
		$(this).find("img").show()
	}).mouseout(function(){
		$(this).find("img").hide()
	})
	$(".mapBox").mouseover(function(){
		$(".mapBox").css({"background":"white","height":"27px","border-left":"1px solid #ededed","border-right":"1px solid #ededed"})
		$(this).find(".bottomBox").show();
	}).mouseout(function(){
		$(".mapBox").css({"background":"$headerColor","height":"26px","border-left":"1px solid transparent","border-right":"1px solid transparent"})
		$(this).find(".bottomBox").hide();
	})
	$(".serList").mouseover(function(){
		$(this).css({"background":"white","border":"1px solid #ededed"});
		$(".serList").find("b").css("transform","rotate(180deg)")
		$(".serList div").show();
	}).mouseout(function(){
		$(this).css({"background":"$redColor","border":"1px solid transparent"});
		$(".serList").find("b").css("transform","rotate(0deg)")
		$(".serList div").hide();
	})
})
