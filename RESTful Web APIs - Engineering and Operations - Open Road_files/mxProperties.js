var ATLAS_RESOURCE_BASE=typeof drawioResourceRoot!=="undefined"?drawioResourceRoot:AJS.Confluence.getContextPath()+"/download/resources/com.mxgraph.confluence.plugins.diagramly:drawio-editor";var RESOURCES_PATH=ATLAS_RESOURCE_BASE+"/resources";var RESOURCE_BASE=RESOURCES_PATH+"/dia";var STENCIL_PATH=ATLAS_RESOURCE_BASE+"/stencils";var SHAPES_PATH=ATLAS_RESOURCE_BASE+"/shapes";var IMAGE_PATH=ATLAS_RESOURCE_BASE+"/images";var GRAPH_IMAGE_PATH=ATLAS_RESOURCE_BASE+"/img";var STYLE_PATH=ATLAS_RESOURCE_BASE+"/styles";var CSS_PATH=STYLE_PATH;var OPEN_FORM=ATLAS_RESOURCE_BASE+"/html/open.html";var TEMPLATE_PATH=ATLAS_RESOURCE_BASE+"/templates";var mxBasePath=ATLAS_RESOURCE_BASE+"/mxgraph";var mxLoadResources=false;var isSvgBrowser=navigator.userAgent.indexOf("MSIE")<0||document.documentMode>=9;var tapAndHoldStartsConnection=true;var showConnectorImg=true;var uiTheme="atlas";var isLocalStorage=typeof(Storage)!="undefined";var urlParams=(function(c){var b=new Object();var a=c.lastIndexOf("?");if(a>0){var e=c.substring(a+1).split("&");for(var d=0;d<e.length;d++){a=e[d].indexOf("=");if(a>0){b[e[d].substring(0,a)]=e[d].substring(a+1)}}}return b})(window.location.href);var mxLanguage=typeof LANGUAGE!=="undefined"?LANGUAGE:"en";var mxLanguageMap={bs:"Bosanski",cs:"\u010Ce\u0161tina",da:"Dansk",de:"Deutsch",en:"English",es:"Espa\u00F1ol","es-ar":"Espa\u00F1ol (Ar)",fr:"Fran\u00E7ais",id:"Indonesian",it:"Italiano",hu:"Magyar",nl:"Nederlands",no:"Norsk",pl:"Polski","pt-br":"Portugu\u00EAs (Brasil)",pt:"Portugu\u00EAs (Portugal)",ro:"Rom\u00E2n\u0103",fi:"Suomi",sv:"Svenska",tr:"T\u00FCrk\u00E7e",el:"\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC",ru:"\u0420\u0443\u0441\u0441\u043A\u0438\u0439",sr:"\u0421\u0440\u043F\u0441\u043A\u0438",uk:"\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430",th:"\u0E44\u0E17\u0E22",ar:"\u0627\u0644\u0639\u0631\u0628\u064A\u0629",zh:"\u4E2D\u6587\uFF08\u4E2D\u56FD\uFF09",ja:"\u65E5\u672C\u8A9E",ko:"\uD55C\uAD6D\uC5B4"};var mxLanguages=[];for(var lang in mxLanguageMap){if(lang!="en"){mxLanguages.push(lang)}}function mxscript(a){document.write('<script src="'+a+'"><\/script>')}if(urlParams.dev=="1"){var mxDevUrl=document.location.protocol+"//devhost.jgraph.com/mxgraph2";var drawDevUrl=document.location.protocol+"//devhost.jgraph.com/";geBasePath=mxDevUrl+"/javascript/examples/grapheditor/www/js";mxBasePath=mxDevUrl+"/javascript/src";mxscript(mxBasePath+"/js/mxClient.js");mxscript(drawDevUrl+"js/sanitizer/sanitizer.min.js");mxscript(drawDevUrl+"js/diagramly/Devel.js")}else{mxscript(ATLAS_RESOURCE_BASE+"/js/atlas.min.js")};