try {
AJS.toInit(function(A){Confluence.Plugins.PagetreeMacro.bind(A)
});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
(function(){var A=function(M){this.$=M;
var H=this.$;
var b=999;
var c=true;
var K=false;
var W={};
var D={};
var N=function(k,j,f,i,e){if(j==undefined||j==null){j=!B(k)
}if(f==undefined||f==null){f=0
}if(!L(k,j)){var h=H("#children"+k);
if(Z(h)){var g=H("#plusminus"+k);
if(j==c){g.removeClass("icon-section-closed").addClass("icon-section-opened")
}else{g.removeClass("icon-section-opened").addClass("icon-section-closed")
}if(j==c){if(e==false){h.slideDown(300)
}else{h.removeClass("plugin-pagetree-hide-children");
h.animate({opacity:1})
}}else{if(e==false){h.slideUp(300)
}else{h.animate({opacity:0},{complete:function(){h.addClass("plugin-pagetree-hide-children")
}})
}}if(i){R(k)
}}else{J(k,new Array(),f,"",i,e)
}}if(i){R(k)
}};
var Z=function(e){return e.children("ul[id]").length>0
};
var B=function(f){var e=H("#plusminus"+f);
return(e.length>0)?(e.hasClass("icon-minus")||e.hasClass("icon-section-opened")):K
};
var L=function(f,e){return B(f)==e
};
var I=function(h,g,f){a(h,c,g,f)
};
var X=function(h,g,f){a(h,K,g,f)
};
var a=function(k,i,h,g){G(k);
var j=H("#"+k);
var f=j.find("div.plugin_pagetree_children_container");
f.each(function(e){var l=V(this.id);
N(l,i,b,e==f.length-1,g)
});
h.preventDefault();
h.stopPropagation()
};
var V=function(e){if(!e||e==undefined){return null
}if(e.indexOf("plusminus")!=-1){return e.substring("plusminus".length)
}if(e.indexOf("children")!=-1){return e.substring("children".length)
}return null
};
var C=function(e){if(!e||e==undefined){return null
}return S(e)[1]
};
var S=function(e){if(!e||e==undefined){return null
}return e.split("-")
};
var G=function(f){var e=C(f);
H("div.plugin_pagetree").each(function(g){if(g==e){H(this).find("span.plugin_pagetree_status").removeClass("hidden");
H(this).find("div.plugin_pagetree_expandcollapse").addClass("hidden")
}})
};
var R=function(f){var e=C(f);
H("div.plugin_pagetree").each(function(g){if(g==e){H(this).find("span.plugin_pagetree_status").addClass("hidden");
H(this).find("div.plugin_pagetree_expandcollapse").removeClass("hidden")
}})
};
var F=function(k,e,h,g,j,f){var i=W[k];
if(e=="Orphan"){i+="&hasRoot=false&spaceKey="+j
}else{i+="&hasRoot=true&pageId="+e
}i+="&treeId="+k+"&startDepth="+g+"&mobile="+f;
H.each(h,function(){i+="&ancestors="+this
});
if(f==false){i=(AJS.params.serverUrl||"")+i
}return i
};
var Q=function(g){var f=g;
var e=null;
H("div.plugin_pagetree").each(function(h){if(h==f){e=H(this)
}});
return e
};
var P=function(e){var f=e.children("fieldset");
var g=new Object();
if(f.length>0){f.children("input").each(function(){g[this.name]=this.value
})
}return g
};
var O=function(e){var g=e.children("fieldset");
var h=new Array();
if(g.length>0){var f=g.children("fieldset");
if(f.length>0){f.children("input").each(function(){h.push(this.value)
})
}}return h
};
var E=function(g,f){var e=H("a.plugin_pagetree_childtoggle",g);
e.each(function(){var h=H(this);
h.attr("href","#").bind("click",function(k){var i=h.parent().parent().children("div.plugin_pagetree_children_container");
var j=i.attr("id");
var l=j.substring(8);
N(l,null,null,null,f);
k.preventDefault();
k.stopPropagation()
})
})
};
var U=function(e){var f=H(document.createElement("div"));
f.html(e);
return f.find("ul[id^='child_ul']").length
};
var J=function(m,g,q,o,i,f){var p=m;
var j=i;
var e=S(m);
var h=e[0];
var l=e[1];
var k=H("#children"+m);
var n=P(Q(l));
k.html("<ul>"+n["i18n-pagetree.loading"]+"</ul>");
H.ajax({type:"GET",url:F(l,h,g,q,o,f),dataType:"text",success:function(r){if(U(r)){k.html(r);
if(k.children().length&&k.hasClass("hidden")){k.removeClass("hidden")
}E(k,f);
H("#plusminus"+p).addClass("icon-section-opened").removeClass("icon-section-closed");
H("#childrenspan"+D[parseInt(l)]+"-"+l).css("font-weight","bold");
if(j){R(p)
}T(k);
if(AJS.PageGadget&&AJS.PageGadget.contentsUpdated){AJS.PageGadget.contentsUpdated()
}}else{window.location=n.loginUrl
}},error:function(r){if(r.status=="403"){k.text(n["i18n-pagetree.error.permission"])
}else{k.text(n["i18n-pagetree.error.general"])
}}})
};
var T=function(e){H("div.plugin_pagetree_children_container:empty",e).addClass("hidden")
};
var Y=function(e,j){var h=P(e);
var k=h.noRoot=="true";
var g=k?"Orphan-"+j:h.rootPageId+"-"+j;
var f=h.mobile=="true";
W[j]=h.treeRequestId;
if(f==false){D[j]=AJS.params.pageId
}else{D[j]=H("div.content-container").parent().attr("data-content-id")
}e.children("fieldset").each(function(){var l=H(this);
l.children("input[treeId]").attr("value",j);
l.children("input[rootPage]").attr("value",g)
});
if(k){e.find("div.plugin_pagetree_children").attr("id","childrenOrphan-"+j);
e.find("a.plugin_pagetree_expandall").click(function(l){I("childrenOrphan-"+j,l,f);
return false
});
e.find("a.plugin_pagetree_collapseall").click(function(l){X("childrenOrphan-"+j,l,f);
return false
})
}else{e.find("div.plugin_pagetree_children").attr("id","children"+g);
e.find("a.plugin_pagetree_expandall").click(function(l){I("children"+g,l,f);
return false
});
e.find("a.plugin_pagetree_collapseall").click(function(l){X("children"+g,l,f);
return false
})
}var i=O(e);
J(g,i,h.startDepth,h.spaceKey,"",f)
};
this.initPageTrees=function(){H("div.plugin_pagetree").each(function(e){Y(H(this),e)
});
d()
};
var d=function(){var e=self.placeFocus;
if(e){self.placeFocus=function(){var f=H("form[name='pagetreesearchform']");
f.attr("name","inlinecommentform");
e();
f.attr("name","pagetreesearchform")
}
}};
H(".open-flyout-to-search").bind("click",function(e){if(H(".fly-out-open").length){setTimeout(function(){ConfluenceMobile.flyout.hide()
},400)
}else{setTimeout(function(){ConfluenceMobile.flyout.show()
},400)
}e.stopPropagation();
e.preventDefault()
})
};
Confluence=Confluence||{};
Confluence.Plugins=Confluence.Plugins||{};
Confluence.Plugins.PagetreeMacro={bind:function(B){var C=new A(B);
C.initPageTrees()
}}
})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


