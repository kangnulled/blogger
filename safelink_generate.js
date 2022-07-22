/**
 * Skipped minification because the original files appears to be already minified.
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */

//<![CDATA[
$(document).ready(function(){$("#btngenerate").on("click",function(){var e=$("#generateurl").val(),r=$("#generatelink"),a=$("#generateloading"),n=$("#resulturl");if(""==e)return $("#generateurl").focus(),!1;$("#copytoclipboard").html("<span class='fa fa-floppy-o'></span> Copy URL"),a.removeClass("hidden"),r.addClass("hidden"),$.ajax({url:"/feeds/posts/summary?alt=json-in-script",type:"get",dataType:"jsonp",success:function(t){var o="",l=t.feed.entry,s=new Array;if(void 0!==l){for(var i=0;i<l.length;i++){for(var d=0;d<l[i].link.length;d++)if("alternate"==l[i].link[d].rel){o=l[i].link[d].href;break}s[i]=o;var c=Math.random()*s.length;c=parseInt(c)}resultgenerate=s[c]+"#?o="+aesCrypto.encrypt(convertstr(e),convertstr("root")),a.addClass("hidden"),r.removeClass("hidden"),n.val(resultgenerate)}else n.val("No result!")},error:function(){n.val("Error loading feed!")}})}),new ClipboardJS(".copytoclipboard").on("success",function(e){$("#copytoclipboard").html("<span class='fa fa-check'></span> Link Copied to Clipboard")})});
//]]>