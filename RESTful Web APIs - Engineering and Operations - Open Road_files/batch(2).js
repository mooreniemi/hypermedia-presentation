try {
AJS.toInit(function ($) {
    $("#action-view-source-link").click(function (e) {
        window.open(this.href, (this.id + "-popupwindow").replace(/-/g, "_"), "width=800, height=600, scrollbars, resizable");
            e.preventDefault();
            return false;
        });
});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
AJS.toInit(function ($) {
    $(".view-storage-link, .view-storage-link a").click(function (e) {
        window.open(this.href, (this.id + "-popupwindow").replace(/-/g, "_"), "width=800, height=600, scrollbars, resizable");
            e.preventDefault();
            return false;
        });
});

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
AJS.toInit(function($) {
    function autoSize(embeds, attempt) {
        var retry;

        if(attempt >= 20) { // 2 sec
            AJS.log('unable to auto size flash - took too long to load');
            return;
        }

        retry = $([]);

        embeds.each(function() {
            var $e = $(this);
            var h, w;
            if(this.GetVariable) {
                // Only set width/height is not already set
                if(!$e.attr("height")) {
                    h = this.GetVariable("height");
                    if(h) {
                        $e.height(h);
                    } else {
                        retry = retry.add($e);
                        return;
                    }
                }
                if(!$e.attr("width")) {
                    w = this.GetVariable("width");
                    if(w) {
                        $e.width(w);
                    } else {
                        retry = retry.add($e);
                        return;
                    }
                }
            }
        });

        if(retry.length) {
            setTimeout(function() {
                autoSize(retry, attempt + 1);
            }, 100);
        }
    }

    autoSize($('embed[type="application/x-shockwave-flash"]'), 0);

    // For preview
    $(window).bind("render-content-loaded", function(e, body) {
        autoSize($('embed[type="application/x-shockwave-flash"]', body), 0);
    });
});

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
AJS.Confluence.SharePage={};
AJS.Confluence.SharePage.autocompleteUser=function(D){D=D||document.body;
var E=AJS.$,A=/^([a-zA-Z0-9_\.\-\+\!#\$%&'\*/=\?\^_`{|}~])+\@.*/;
var C=function(I){if(!I||!I.result){throw new Error("Invalid JSON format")
}var F=[];
for(var G=0;
G<I.result.length;
G++){var H=I.result[G];
if(H.type=="group"){H=B(H)
}}F.push(I.result);
return F
};
function B(F){if(F.name=="confluence-users"||F.name=="confluence-administrators"){return F
}F.title=F.name;
F.group=F.name;
F.thumbnailLink={href:AJS.Confluence.getContextPath()+"/download/resources/com.atlassian.confluence.plugins.share-page:mail-page-resources/images/group.png",type:"image/png",rel:"thumbnail"};
F.link=[{href:AJS.Confluence.getContextPath(),rel:"self"}];
return F
}E("input.autocomplete-sharepage[data-autocomplete-user-bound!=true]",D).each(function(){var H=E(this).attr("data-autocomplete-sharepage-bound","true").attr("autocomplete","off");
var G=H.attr("data-max")||10,J=H.attr("data-alignment")||"left",I=H.attr("data-dropdown-target"),F=null;
if(I){F=E(I)
}else{F=E("<div></div>");
H.after(F)
}F.addClass("aui-dd-parent autocomplete");
H.quicksearch(AJS.REST.getBaseUrl()+"search/user-or-group.json",function(){H.trigger("open.autocomplete-sharepage")
},{makeParams:function(K){return{"max-results":G,query:K.replace("{|}","")}
},dropdownPlacement:function(K){F.append(K)
},makeRestMatrixFromData:C,addDropdownData:function(L){var K=E.trim(H.val());
if(A.test(K)){L.push([{name:K,email:K,href:"#",icon:AJS.Confluence.getContextPath()+"/download/resources/com.atlassian.confluence.plugins.share-page:mail-page-resources/images/envelope.png"}])
}if(!L.length){var M=H.attr("data-none-message");
if(M){L.push([{name:M,className:"no-results",href:"#"}])
}}return L
},ajsDropDownOptions:{alignment:J,displayHandler:function(K){if(K.restObj&&K.restObj.username){return K.name+" ("+K.restObj.username+")"
}return K.name
},selectionHandler:function(M,L){if(L.find(".search-for").length){H.trigger("selected.autocomplete-sharepage",{searchFor:H.val()});
return 
}if(L.find(".no-results").length){this.hide();
M.preventDefault();
return 
}var K=E("span:eq(0)",L).data("properties");
if(!K.email){K=K.restObj
}H.trigger("selected.autocomplete-sharepage",{content:K});
this.hide();
M.preventDefault()
}}})
})
};
(function(A){jQuery.fn.extend({elastic:function(){var B=["paddingTop","paddingRight","paddingBottom","paddingLeft","fontSize","lineHeight","fontFamily","width","fontWeight","border-top-width","border-right-width","border-bottom-width","border-left-width","borderTopStyle","borderTopColor","borderRightStyle","borderRightColor","borderBottomStyle","borderBottomColor","borderLeftStyle","borderLeftColor"];
return this.each(function(){if(this.type!=="textarea"){return false
}var G=jQuery(this),C=jQuery("<div />").css({position:"absolute",display:"none","word-wrap":"break-word","white-space":"pre-wrap"}),I=parseInt(G.css("line-height"),10)||parseInt(G.css("font-size"),"10"),K=parseInt(G.css("height"),10)||I*3,J=parseInt(G.css("max-height"),10)||Number.MAX_VALUE,D=0;
if(J<0){J=Number.MAX_VALUE
}C.appendTo(G.parent());
var F=B.length;
while(F--){C.css(B[F].toString(),G.css(B[F].toString()))
}function H(){var M=Math.floor(parseInt(G.width(),10));
if(C.width()!==M){C.css({width:M+"px"});
E(true)
}}function L(M,O){var N=Math.floor(parseInt(M,10));
if(G.height()!==N){G.css({height:N+"px",overflow:O})
}}function E(P){var O=G.val().replace(/&/g,"&amp;").replace(/ {2}/g,"&nbsp;").replace(/<|>/g,"&gt;").replace(/\n/g,"<br />");
var M=C.html().replace(/<br>/ig,"<br />");
if(P||O+"&nbsp;"!==M){C.html(O+"&nbsp;");
if(Math.abs(C.height()+I-G.height())>3){var N=C.height()+I;
if(N>=J){L(J,"auto")
}else{if(N<=K){L(K,"hidden")
}else{L(N,"hidden")
}}}}}G.css({overflow:"hidden"});
G.bind("keyup change cut paste",function(){E()
});
A(window).bind("resize",H);
G.bind("resize",H);
G.bind("update",E);
G.bind("input paste",function(M){setTimeout(E,250)
});
E()
})
}})
})(AJS.$);
(function(E){var D,B={hideCallback:A,width:250,hideDelay:3600000,calculatePositions:function(G,N,V,R){var O;
var X;
var T;
var K=-7;
var L;
var P;
var W=N.target.offset();
var F=N.target.outerWidth();
var I=W.left+F/2;
var S=(window.pageYOffset||document.documentElement.scrollTop)+E(window).height();
var J=10;
T=W.top+N.target.outerHeight()+R.offsetY;
O=W.left+R.offsetX;
var M=W.top>G.height();
var H=(T+G.height())<S;
P=(!H&&M)||(R.onTop&&M);
var Q=E(window).width()-(O+R.width+J);
if(P){T=W.top-G.height()-8;
var U=R.displayShadow?(AJS.$.browser.msie?10:9):0;
K=G.height()-U
}L=I-O+R.arrowOffsetX;
if(R.isRelativeToMouse){if(Q<0){X=J;
O="auto";
L=V.x-(E(window).width()-R.width)
}else{O=V.x-20;
X="auto";
L=V.x-O
}}else{if(Q<0){X=J;
O="auto";
L=I-(E(window).width()-G.outerWidth())
}else{if(R.width<=F/2){L=R.width/2;
O=I-R.width/2
}}}return{displayAbove:P,popupCss:{left:O,right:X,top:T},arrowCss:{position:"absolute",left:L,right:"auto",top:K}}
}};
var A=function(){E(".dashboard-actions .explanation").hide()
};
var C=function(I,G,H){if(I.find("input").length){H();
return 
}I.append(AJS.template.load("share-content-popup").fill());
AJS.Confluence.SharePage.autocompleteUser();
var J=function(L){D.hide();
if(L){setTimeout(function(){I.empty()
},300)
}return false
};
E(document).keyup(function(L){if(L.keyCode==27){J(true);
E(document).unbind("keyup",arguments.callee);
return false
}return true
});
I.find(".close-dialog").click(function(){J(true)
});
I.find("#note").elastic();
I.find("form").submit(function(){var Q=[];
I.find(".recipients li").each(function(R,S){Q.push(E(S).attr("data-username"))
});
if(Q.length<=0){return false
}E("button,input,textarea",this).attr("disabled","disabled");
I.find(".progress-messages-icon").removeClass("error");
I.find(".progress-messages").text("Sending");
I.find(".progress-messages").attr("title","Sending");
var N=Raphael.spinner(I.find(".progress-messages-icon")[0],7,"#666");
I.find(".progress-messages-icon").css("position","absolute").css("left","0").css("margin-top","3px");
I.find(".progress-messages").css("padding-left",I.find(".progress-messages-icon").innerWidth()+5);
var Q=[];
I.find(".recipients li[data-username]").each(function(R,S){Q.push(E(S).attr("data-username"))
});
var P=[];
I.find(".recipients li[data-email]").each(function(R,S){P.push(E(S).attr("data-email"))
});
var L=[];
I.find(".recipients li[data-group]").each(function(R,S){L.push(E(S).attr("data-group"))
});
var M=I.find("#note");
var O={users:Q,emails:P,groups:L,note:M.hasClass("placeholded")?"":M.val(),entityId:AJS.params.pageId};
E.ajax({type:"POST",contentType:"application/json; charset=utf-8",url:AJS.Confluence.getContextPath()+"/rest/share-page/latest/share",data:JSON.stringify(O),dataType:"text",success:function(){setTimeout(function(){N();
I.find(".progress-messages-icon").css("width","16px");
I.find(".progress-messages-icon").css("height","16px");
I.find(".progress-messages-icon").addClass("done");
I.find(".progress-messages").text("Sent");
I.find(".progress-messages").attr("title","Sent");
setTimeout(function(){I.find(".progress-messages").text("");
I.find(".progress-messages-icon").removeClass("done");
I.find("#note").val("");
E("button,input,textarea",I).removeAttr("disabled");
J(false)
},1000)
},500)
},error:function(S,R){N();
I.find(".progress-messages-icon").css("width","16px");
I.find(".progress-messages-icon").css("height","16px");
I.find(".progress-messages-icon").addClass("error");
I.find(".progress-messages").text("Error sending");
I.find(".progress-messages").attr("title","Error sending"+": "+R);
E("button,input,textarea",I).removeAttr("disabled")
}});
return false
});
var K=I.find("#users");
var F=I.find("input.submit");
K.bind("selected.autocomplete-sharepage",function(M,L){var N=function(P,Q){var S=I.find(".recipients"),R,O;
R="li[data-"+P+'="'+Q.content[P]+'"]';
if(S.find(R).length>0){S.find(R).hide()
}else{S.append(AJS.template.load("share-content-popup-recipient-"+P).fill(Q.content))
}O=S.find(R);
O.find(".remove-recipient").click(function(){O.remove();
if(S.find("li").length==0){F.attr("disabled","true")
}D.refresh();
K.focus();
return false
});
O.fadeIn(200)
};
if(L.content.email){N("email",L)
}else{if(L.content.type=="group"){N("group",L)
}else{N("username",L)
}}D.refresh();
F.removeAttr("disabled");
K.val("");
return false
});
K.bind("open.autocomplete-sharepage",function(M,L){if(E("a:not(.no-results)",AJS.dropDown.current.links).length>0){AJS.dropDown.current.moveDown()
}});
K.keypress(function(L){if(L.keyCode==13){return false
}return true
});
E(document).bind("showLayer",function(N,M,L){if(M=="inlineDialog"&&L.popup==D){L.popup.find("#users").focus()
}});
E("#shareContentLink").parents().filter(function(){return this.scrollTop>0
}).scrollTop(0);
H()
};
AJS.toInit(function(F){D=AJS.InlineDialog(F("#shareContentLink"),"shareContentPopup",C,B)
})
})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


