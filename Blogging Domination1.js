$(document).ready(function(){
        $("#pencarian .icon-search").click(function(){
			$("#nyari").slideToggle("fast");
        })
		var $span = $(".sidebar h2");
		$span.replaceWith(function () {
    		return $('<h3></h3>', {
        		class: 'titlewidget',
        		html: this.innerHTML
    		});
		});
		var $spans = $(".puter h2");
		$spans.replaceWith(function () {
    		return $('<h3></h3>', {
        		class: 'titlefooter',
        		html: this.innerHTML
    		});
		});
		$('h2.post-title.entry-title a').each(function(){
     		var me = $(this);
  			me.html(me.html().replace(/^(\w+)/, '<span>$1</span>'));
		});
		//Responsive
	var lin = $("#inner-wrapper").width();
	var wileft = $("#widget-left").width();
    var wiright = $("#widget-right").width();
	var lrbar = $("#right-bar").width();
	var lrhead = $("#header-wrapper .right").width();
	var lleft = $("#left-side").width();
	var hnav = $("#navigasi").height();
	var jhnav = hnav + 'px';
	var jlleft = lleft + 'px';
	var jlin = lin + 'px';
	var jlside = (lin - lrbar);
	var jlsidepx = jlside + 'px'
	var jwiright = (jlside - wileft) + 'px';
	var llhead = (lin - lrhead);
	var llheadpx = llhead + 'px';
	$("#left-side").css("width",jlsidepx);
	$("#widget-right").css("width",jwiright);
	$("#header-wrapper .left").css("width",llheadpx);
    if(llhead<200){
		$("#header-wrapper .left").css("float","none");
		$("#header-wrapper .left").css("width", "auto");
		$("#header-wrapper .left").css("textAlign", "center");
		$("#header-wrapper .right").css("float","none");
		$("#header-wrapper .right").css("textAlign","center");
		$("#header-wrapper .right").css("width", "auto");
    }else{
    }
    if(wiright<425){
		$("#widget-left").css("width","0px");
		$(".berita").css("width",jlin);
		$("#widget-right").css("width",jlleft);
		$("#outer-wrapper").css("padding","0px");
        }else{
        }
      if(wileft=0){
        $("#widget-right").css("width",jlleft);
      }
    if(lin<690){
        $("#right-bar").css("float","none");
		$("#widget-right").css("width",jlin);
		$("#right-bar").css("width",jlin);
		$("#left-side").css("width",jlin);
		$("#footer1").css("width",jlin);
		$("#footer2").css("width",jlin);
		$("#footer3").css("width",jlin);
    }
      if(hnav>44){
		$("#navigation ul li").css("float","none");
        $("#navigation ul").css("display","none");
		$("#ngehide").css("display","block");
      }
      $("#ngehide").click(function(){
		$("#navigation ul").slideToggle("fast");
      });
});
  $(window).bind("load resize",function(){
	var lin = $("#inner-wrapper").width();
	var wileft = $("#widget-left").width();
    var wiright = $("#widget-right").width();
	var lrbar = $("#right-bar").width();
	var lrhead = $("#header-wrapper .right").width();
	var lleft = $("#left-side").width();
	var hnav = $("#navigasi").height();
	var jhnav = hnav + 'px';
	var jlleft = lleft + 'px';
	var jlin = lin + 'px';
	var jlside = (lin - lrbar);
	var jlsidepx = jlside + 'px'
	var jwiright = (jlside - wileft) + 'px';
	var llhead = (lin - lrhead);
	var llheadpx = llhead + 'px';
	$("#left-side").css("width",jlsidepx);
	$("#widget-right").css("width",jwiright);
	$("#header-wrapper .left").css("width",llheadpx);
    if(llhead<200){
		$("#header-wrapper .left").css("float","none");
		$("#header-wrapper .left").css("width", "auto");
		$("#header-wrapper .left").css("textAlign", "center");
		$("#header-wrapper .right").css("float","none");
		$("#header-wrapper .right").css("textAlign","center");
		$("#header-wrapper .right").css("width", "auto");
    }else{
    }
    if(wiright<425){
		$("#widget-left").css("width","0px");
		$(".berita").css("width",jlin);
		$("#widget-right").css("width",jlleft);
		$("#outer-wrapper").css("padding","0px");
        }else{
        }
      if(wileft=0){
        $("#widget-right").css("width",jlleft);
      }
    if(lin<690){
        $("#right-bar").css("float","none");
		$("#widget-right").css("width",jlin);
		$("#right-bar").css("width",jlin);
		$("#left-side").css("width",jlin);
		$("#footer1").css("width",jlin);
		$("#footer2").css("width",jlin);
		$("#footer3").css("width",jlin);
    }
      if(hnav>44){
		$("#navigation ul li").css("float","none");
        $("#navigation ul").css("display","none");
		$("#ngehide").css("display","block");
      }
  });