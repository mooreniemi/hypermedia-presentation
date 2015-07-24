try {
if(Confluence.KeyboardShortcuts){Confluence.KeyboardShortcuts.Editor.push({context:"editor.actions",descKey:"Insert JIRA issue"+":",keys:[["Ctrl+Shift+J"]]})
};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
AJS.toInit(function(f){var e=Confluence.storageManager("comments");var a=function(){if(confirm("Are you sure you want to remove the comment?")){this.href=this.href+"&confirm=yes";return true}return false};Confluence.Comments={toggleComments:function(g){f("#page-comments").toggleClass("hidden",!g);f(".comments-show-hide").toggleClass("comments-showing",g);f(".icon.comments-show-hide").toggleClass("icon-section-closed",!g);f(".icon.comments-show-hide").toggleClass("icon-section-opened",g);e.setItem("show",g)},bindShowHideToggle:function(){f(".comments-show-hide").click(function(){Confluence.Comments.toggleComments(!f(this).hasClass("comments-showing"));return false})},bindRemoveConfirmation:function(g){f("#comment-"+g+" .comment-action-remove a").click(a)}};if(!f("#comments-section").length){return}if(AJS.isIE6){f(".logo.anonymous").each(function(){var g=document.createElement("div");g.className="replacement";AJS.applyPngFilter(g,this.src);f(this).replaceWith(g)});f(".comment-actions .comment-permalink a").each(function(){f(this).addClass("filtered");var h=f(this).css("background-image").replace(/^url\(\"?|\"?\)$/g,"");var g=h.replace("light","dark");AJS.applyPngFilter(this,h);this.style.cursor="pointer";this.style.background="none";f(this).hover(function(){AJS.applyPngFilter(this,g)},function(){AJS.applyPngFilter(this,h)})})}f("#comments-section .comment:odd").addClass("odd");f(".comment-action-remove a").click(a);if(AJS.Meta.getBoolean("show-comments")){Confluence.Comments.toggleComments(true)}else{var c=e.getItem("show");if(c!=null){Confluence.Comments.toggleComments(c=="true")}}Confluence.Comments.bindShowHideToggle();var d=f("#addcomment.comment-text"),b=f("#comments-text-editor textarea");b.focus(function(){d.addClass("active")}).blur(function(){if(!f.trim(b.val()).length){d.removeClass("active")}}).bind("reset.default-text",function(){d.removeClass("active")});f("form[name='textcommentform']").submit(function(){var g=b.val();if(!f.trim(g)){alert("Comment text is empty. Cannot create empty comments.");return false}return true});f("#add-comment-rte").click(function(){if(!b.hasClass("placeholded")){e.setItem("text-comment",f.trim(b.val()))}});if(f("#addcomment #rte").length){AJS.bind("init.rte",function(i,h){var g=e.getItem("text-comment");if(g){h.editor.setContent(g);e.setItem("text-comment","")}})}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
// This file was automatically generated from user.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.User == 'undefined') { Confluence.Templates.User = {}; }


Confluence.Templates.User.userLinkUrl = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append(soy.$$escapeHtml(""), '/display/~', soy.$$escapeUri(opt_data.username));
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.User.logo = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.profilePictureInfo['default'] && opt_data.username == opt_data.currentUsername) {
    output.append('<a ', (opt_data.canView) ? ' class="userLogoLink" data-username="' + soy.$$escapeHtml(opt_data.username) + '"' : '', ' href="', soy.$$escapeHtml(""), '/users/editmyprofilepicture.action" title="', soy.$$escapeHtml("Add a picture of yourself"), '"><img class="userLogo logo defaultLogo" src="', soy.$$escapeHtml("/s/en_GB-1988229788/4226/d7686547091e645d7b0285207c0b86be721c74eb.32/_"), '/images/icons/profilepics/add_profile_pic.png" alt="', soy.$$escapeHtml("User icon"), ': ', soy.$$escapeHtml("Add a picture of yourself"), '"></a>');
  } else {
    if (opt_data.profilePictureInfo.anonymous) {
      output.append('<img class="userLogo logo anonymous" src="', soy.$$escapeHtml("/s/en_GB-1988229788/4226/d7686547091e645d7b0285207c0b86be721c74eb.32/_"), '/images/icons/profilepics/anonymous.png" alt="', soy.$$escapeHtml("User icon"), ': ', soy.$$escapeHtml("Anonymous"), '" title="', soy.$$escapeHtml("Anonymous"), '">');
    } else if (opt_data.canView) {
      output.append('<a class="userLogoLink" data-username="', soy.$$escapeHtml(opt_data.username), '" href="');
      Confluence.Templates.User.userLinkUrl(opt_data, output);
      output.append('"><img class="userLogo logo" src="', soy.$$escapeHtml(""), soy.$$escapeHtml(opt_data.profilePictureInfo.downloadPath), '" alt="', soy.$$escapeHtml("User icon"), ': ', soy.$$escapeHtml(opt_data.username), '" title="', soy.$$escapeHtml(opt_data.username), '"></a>');
    } else {
      output.append('<img class="userLogo logo anonymous" src="', soy.$$escapeHtml("/s/en_GB-1988229788/4226/d7686547091e645d7b0285207c0b86be721c74eb.32/_"), '/images/icons/profilepics/anonymous.png" alt="', soy.$$escapeHtml("User icon"), ': ', soy.$$escapeHtml(opt_data.username), '" title="', soy.$$escapeHtml(opt_data.username), '">');
    }
  }
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.User.usernameLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.username && opt_data.username != '') {
    output.append('<a href="');
    Confluence.Templates.User.userLinkUrl(opt_data, output);
    output.append('"', (opt_data.canView) ? 'class="url fn confluence-userlink" data-username="' + soy.$$escapeHtml(opt_data.username) + '"' : 'class="url fn"', '>', (opt_data.fullName && opt_data.fullName != '') ? soy.$$escapeHtml(opt_data.fullName) : soy.$$escapeHtml(opt_data.username), '</a>');
  } else {
    output.append(soy.$$escapeHtml("Anonymous"));
  }
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.User.fullNameOrAnonymous = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.user && opt_data.user.fullName) ? soy.$$escapeHtml(opt_data.user.fullName) : soy.$$escapeHtml("Anonymous"));
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.User.usernameOrAnonymous = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.user && opt_data.user.name) ? soy.$$escapeHtml(opt_data.user.name) : soy.$$escapeHtml("Anonymous"));
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
// This file was automatically generated from icons.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Icons == 'undefined') { Confluence.Templates.Icons = {}; }


Confluence.Templates.Icons.contentIcon = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.content.type == 'trackback') ? '<a' + ((opt_data.linkColour) ? ' ' + soy.$$escapeHtml(opt_data.linkColour) : '') + ' href="' + soy.$$escapeHtml(opt_data.linkHref) + '" class="icon icon-trackback" title="' + soy.$$escapeHtml("Track back") + '">' + soy.$$escapeHtml("Track back") + ':</a>' : '<a' + ((opt_data.linkColour) ? ' ' + soy.$$escapeHtml(opt_data.linkColour) : '') + ' href="' + soy.$$escapeHtml(opt_data.linkHref) + '" class="icon ' + soy.$$escapeHtml(opt_data.iconCss) + '" title="' + soy.$$escapeHtml(opt_data.iconTitle) + '">' + soy.$$escapeHtml(opt_data.iconTitle) + '</a>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
// This file was automatically generated from comments.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Comments == 'undefined') { Confluence.Templates.Comments = {}; }


Confluence.Templates.Comments.displayReplyEditorLoadingContainer = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ol class="comment-threads"><li class="comment-thread">');
  Confluence.Templates.Comments.displayCommentEditorCommon({comment: {'ownerId': opt_data.contentId, 'parentId': opt_data.parentCommentId}, commenter: opt_data.commenter, state: 'loading', mode: 'reply'}, output);
  output.append('</li></ol>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Comments.displayTopLevelCommentEditorPlaceholder = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  Confluence.Templates.Comments.displayCommentEditorCommon({comment: {'ownerId': opt_data.contentId}, commenter: opt_data.commenter, state: 'placeholder', mode: 'add'}, output);
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Comments.editorLoadErrorMessage = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<p>', soy.$$escapeHtml(opt_data.message), '</p><p><a href="', soy.$$escapeHtml(opt_data.fallbackUrl), '">', soy.$$escapeHtml("Try again"), '</a></p>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Comments.displayCommentEditorCommon = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="quick-comment-container comment ', soy.$$escapeHtml(opt_data.mode), '">');
  Confluence.Templates.Comments.userLogo({userInfo: opt_data.commenter}, output);
  output.append('<div class="quick-comment-vertical-spacer"></div><div class="quick-comment-body"><div class="quick-comment-loading-container" style="display:', (opt_data.state == 'loading') ? 'block' : 'none', ';"><p class="quick-comment-loading-message">', soy.$$escapeHtml("Loading the Editor"), '</p></div><div id="editor-messages"></div><div id="all-messages"></div><form style="display:', (opt_data.state == 'loading') ? 'none' : 'block', ';" class="quick-comment-form aui" method="post" ');
  switch (opt_data.mode) {
    case 'add':
      output.append('name="inlinecommentform" action="', soy.$$escapeHtml(""), '/pages/doaddcomment.action?pageId=', soy.$$escapeHtml(opt_data.comment.ownerId), '"');
      break;
    case 'edit':
      output.append('name="editcommentform" action="', soy.$$escapeHtml(""), '/pages/doeditcomment.action?pageId=', soy.$$escapeHtml(opt_data.comment.ownerId), '&commentId=', soy.$$escapeHtml(opt_data.comment.id), '"');
      break;
    case 'reply':
      output.append('name="threadedcommentform"  action="', soy.$$escapeHtml(""), '/pages/doaddcomment.action?pageId=', soy.$$escapeHtml(opt_data.comment.ownerId), '&parentId=', soy.$$escapeHtml(opt_data.comment.parentId), '"');
      break;
  }
  output.append(' ><div title="', soy.$$escapeHtml("Add a Comment"), '" class="quick-comment-prompt"><span>', soy.$$escapeHtml("Write a comment\u2026"), '</span></div></form></div></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Comments.userLogo = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<p class="comment-user-logo">');
  if (opt_data.userInfo.userName == null) {
    output.append('<img class="userLogo logo anonymous" src="', soy.$$escapeHtml("/s/en_GB-1988229788/4226/d7686547091e645d7b0285207c0b86be721c74eb.32/_"), '/images/icons/profilepics/anonymous.png" alt="', soy.$$escapeHtml("User icon"), ': ', soy.$$escapeHtml("Anonymous"), '" title="', soy.$$escapeHtml("Anonymous"), '">');
  } else if (opt_data.userInfo.profilePicture.isDefault) {
    output.append('<a class="userLogoLink" data-username="', soy.$$escapeHtml(opt_data.userInfo.userName), '" href="', soy.$$escapeHtml(""), '/users/editmyprofilepicture.action" title="', soy.$$escapeHtml("Add a picture of yourself"), '"><img class="userLogo logo defaultLogo" src="', soy.$$escapeHtml("/s/en_GB-1988229788/4226/d7686547091e645d7b0285207c0b86be721c74eb.32/_"), '/images/icons/profilepics/add_profile_pic.png" alt="', soy.$$escapeHtml("User icon"), ': ', soy.$$escapeHtml("Add a picture of yourself"), '"></a>');
  } else {
    output.append('<a class="userLogoLink" data-username="', soy.$$escapeHtml(opt_data.userInfo.userName), '" href="');
    Confluence.Templates.User.userLinkUrl({username: opt_data.userInfo.userName}, output);
    output.append('"><img class="userLogo logo" src="', soy.$$escapeHtml(opt_data.userInfo.profilePicture.path), '" alt="', soy.$$escapeHtml("User icon"), ': ', soy.$$escapeHtml(opt_data.userInfo.userName), '" title="', soy.$$escapeHtml(opt_data.userInfo.userName), '"></a>');
  }
  output.append('</p>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Comments.displayComment = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.comment.parentId == 0 && opt_data.firstReply) {
    output.append('<div id="comments-section" class="pageSection group"><div class="section-header"><h2 id="comments-section-title" class="section-title"><a href="#" class="comments-show-hide comments-showing" name="comments">', soy.$$escapeHtml("1 Comment"), '</a></h2><a title="', soy.$$escapeHtml("Hide/Show Comments"), '" href="#" class="comments-show-hide icon comments-showing icon-section-opened">', soy.$$escapeHtml("Hide/Show Comments"), '</a>');
    Confluence.Templates.Comments.commentThread({comment: opt_data.comment, commenter: opt_data.commenter, highlight: opt_data.highlight, topLevel: true}, output);
    output.append('</div></div>');
  } else if (opt_data.firstReply) {
    Confluence.Templates.Comments.commentThread({comment: opt_data.comment, commenter: opt_data.commenter, highlight: opt_data.highlight, topLevel: false}, output);
  } else {
    Confluence.Templates.Comments.commentThreadItem({comment: opt_data.comment, commenter: opt_data.commenter, highlight: true}, output);
  }
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Comments.commentThread = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ol class="comment-threads', (opt_data.topLevel) ? ' top-level" id="page-comments' : '', '">');
  Confluence.Templates.Comments.commentThreadItem(opt_data, output);
  output.append('</ol>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Comments.commentThreadItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li id="comment-thread-', soy.$$escapeHtml(opt_data.comment.id), '" class="comment-thread">');
  Confluence.Templates.Comments.commentView(opt_data, output);
  output.append('</li>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Comments.commentView = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="comment', (opt_data.highlight == true) ? ' focused' : '', '" id="comment-', soy.$$escapeHtml(opt_data.comment.id), '">');
  Confluence.Templates.Comments.userLogo({userInfo: opt_data.commenter}, output);
  output.append('<div class="comment-header"><h4 class="author">', (opt_data.commenter.userName == null) ? soy.$$escapeHtml("Anonymous") : '<a href="' + soy.$$escapeHtml("") + '/display/' + soy.$$escapeUri(opt_data.commenter.userName) + '" class="url fn confluence-userlink" data-username="' + soy.$$escapeHtml(opt_data.commenter.userName) + '">' + soy.$$escapeHtml(opt_data.commenter.displayName) + '</a>', '</h4></div><div class="comment-body"><div class="comment-content wiki-content">', opt_data.comment.html, '</div><div class="comment-actions">');
  Confluence.Templates.Comments.displayCommentActions({section: 'secondary', actions: opt_data.comment.secondaryActions, commentId: opt_data.comment.id}, output);
  Confluence.Templates.Comments.displayCommentActions({section: 'primary', actions: opt_data.comment.primaryActions, commentId: opt_data.comment.id}, output);
  output.append('</div></div></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Comments.displayCommentActions = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ul class="comment-actions-', soy.$$escapeHtml(opt_data.section), '">');
  if (opt_data.actions != null) {
    var itemList207 = opt_data.actions;
    var itemListLen207 = itemList207.length;
    for (var itemIndex207 = 0; itemIndex207 < itemListLen207; itemIndex207++) {
      var itemData207 = itemList207[itemIndex207];
      output.append('<li ', (itemData207.style != null) ? ' class="' + soy.$$escapeHtml(itemData207.style) + '"' : '', '><a ', (itemData207.tooltip != null) ? ' title="' + soy.$$escapeHtml(itemData207.tooltip) + '"' : '', ' href="', soy.$$escapeHtml(itemData207.url), '" ', (itemData207.id) ? ' id="' + soy.$$escapeHtml(itemData207.id) + '-' + soy.$$escapeHtml(opt_data.commentId) + '"' : '', '><span>', soy.$$escapeHtml(itemData207.label), '</span></a></li>\n');
    }
  }
  output.append('</ul>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
// TODO this should be merged with Confluence.Comments from comments.js in the core product.
// At the moment it is kept separate because having it in a plugin is better for dev speed.
// This script is dependent on templates in comments.soy
Confluence.CommentDisplayManager = (function($) {

    var createTemplateInjectionContext = function() {
        return {
            "contextPath": AJS.Meta.get("context-path"),
            "staticResourceUrlPrefix": AJS.Meta.get("static-resource-url-prefix")
        };
    };
    
    var createTemplateParameters = function(commenter, comment, highlight) {
        return {
            "comment": comment,
            "commenter": commenter,
            "highlight": highlight,
            "context": createTemplateInjectionContext()
        };
    };
    
    return {

        /**
         * Update the comments section heading if it exists with the current number
         * of comments.
         */
        _updateCommentSectionTitle: function() {
            var $title = $("#comments-section-title");
            if ($title.length == 0) {
                return;
            }

            var count = this.commentCount();
            if (count == 1) {
                $("a", $title).text("1 Comment");
            } else {
                var text = AJS.format("{0} Comments", count);
                $("a", $title).text(text);
            }
        },
        
        /**
         * Add and focus the display on a new comment. If the comments section is not visible then it will be
         * automatically expanded.
         * 
         * @param commenter the person making the comment. This is an object with the following structure:
         * {
         *     userName:       (string)
         *     displayName:    (string)
         *     profilePicture: {
         *         isDefault: (boolean)
         *         path:      (string)
         *     }
         * }
         * @param comment the comment. This is an object with the following structure:
         * {
         *     id:               (number)
         *     html:             (string)
         *     ownerId:          (number)
         *     parentId:         (number) 0 indicates a top level comment
         *     primaryActions:    (array of actions) may be empty
         *     secondaryActions: (array of actions) may be empty
         * }
         * @param highlight true if you want the comment to appear highlighted
         * @param keepFocus true if you don't want to clear the focus
         * @returns a jQuery wrapped DOM Node which is the top container for the newly added comment.
         */
        addComment: function(commenter, comment, highlight, keepFocus) {
            var templateParams = createTemplateParameters(commenter, comment, highlight);
            
            if (!this.hasComments()) {
                templateParams.firstReply = true;
                var template = Confluence.Templates.Comments.displayComment(templateParams);
                AJS.$("#comments-section").prepend(template);
                Confluence.Comments.toggleComments(true);
                Confluence.Comments.bindShowHideToggle();
            } else {
                if (!this.isVisible()) {
                    Confluence.Comments.toggleComments(true);
                }
                
                var $appendLocation;
                
                if (comment.parentId == 0) {
                    templateParams.firstReply = false;
                    $appendLocation = AJS.$("#comments-section .comment-threads.top-level");                    
                } else {
                    var $commentThread = AJS.$("#comment-thread-" + comment.parentId);
                    var $replyThread = $commentThread.children(".commentThreads");
                    
                    if ($replyThread.length) {
                        templateParams.firstReply = false;
                        $appendLocation = $replyThread;
                    } else {
                        templateParams.firstReply = true;
                        $appendLocation = $commentThread;
                    }
                }
                if (!keepFocus) {
                    this.clearFocus();
                }
                var renderedTemplate = Confluence.Templates.Comments.displayComment(templateParams);
                $appendLocation.append(renderedTemplate);
                this._updateCommentSectionTitle();
            }
            
            Confluence.Comments.bindRemoveConfirmation(comment.id);
            var $insertedComment = this.getCommentNode(comment.id);
            // Scroll to the newly added comment.
            $insertedComment.scrollToElement();
            return $insertedComment;
        },        

        /**
         * Add or focus the display on a new comment, or update an existing comment.
         *
         * @see Confluence.CommentDisplayManager.addComment for more information.
         */
        addOrUpdateComment: function(commenter, comment, highlight, keepFocus) {
            var oldComment = this.getCommentNode(comment.id);
            if (oldComment) {
                oldComment.find('.comment-content').html(comment.html);
                if (!keepFocus) {
                    this.clearFocus();
                }
                if (highlight) {
                    oldComment.addClass('focused');
                }
                oldComment.scrollToElement();
                return oldComment;
            } else {
                return this.addComment.apply(this, arguments);
            }
        },

        /**
         * @return true if the comment section is visible.
         */
        isVisible : function() {
            return !$('#page-comments').hasClass("hidden");
        },
        
        /**
         * @return true if there are any comments displayed on the page.
         */
        hasComments: function() {
            return this.commentCount() > 0;
        },
        
        /**
         * @return the number of comments on the page.
         */
        commentCount: function() {
            return AJS.$("#comments-section .comment").not(".quick-comment-container").length;
        },
        
        /**
         * Remove the focus from all comments
         */
        clearFocus: function() {
            $(".comment").removeClass("focused");
        },
        
        /**
         * @param commentId the id of the comment required
         * @returns the jQuery wrapped DOM node for the top div of the identified comment or null if not found.
         */
        getCommentNode: function(commentId) {
            var $node = $("#comment-" + commentId);
            
            if (!$node.length) {
                return null;
            } else {
                return $node;
            }
        },
        
        /**
         * Get the id of the comment the indicated one is a reply to. If the comment is not a reply
         * then return 0.
         * 
         * @param commentId the id of the comment whos parent is required
         * @return the id of the parent comment or 0 if the comment is not a reply.
         */
        getParentId: function(commentId) {
            var $comment = getCommentNode(commentId);
            
            if ($comment != null) {
                var $parentComment = $comment.closest("div.comment");
                if ($parentComment.length) {
                    var idStr = $parentComment.attr("id");
                    var id = /\d+/.exec(idStr);
                    return parseInt(id);
                }
            }
            
            return 0;
        }
    };    
})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
AJS.$(function($) {

    $.fn.extend({
        scrollToElement: function() {
            if(!this.scrollWindowToElement()) {
                // try and scroll the closest overflow set parent (e.g. Documentation Theme)
                this.scrollOverflowContainerToElement();
            }
            return this;
        },

        /**
         * The default theme has scrollbars on the window and therefore this
         * method can make sure the supplied element is visible. However other themes don't scroll the
         * window so this method will return true if it successfully scrolls and false if it is unable
         * to move the window.
         */
        scrollWindowToElement: function() {
            var $element = this;
            function getScrollY() {
                if ('pageYOffset' in window) {  // all browsers, except IE before version 9
                    return window.pageYOffset;
                } else { // Internet Explorer before version 9
                    // we ignore zoom factor which was only an issue before IE8
                    return document.documentElement.scrollTop;
                }
            };

            var scrollY = getScrollY();

            var windowHeight;
            if (typeof(window.innerWidth) == 'number') {
                windowHeight = window.innerHeight;
            } else if (document.documentElement && document.documentElement.clientWidth) {
                // IE 6+ in 'standards compliant mode'
                windowHeight = document.documentElement.clientHeight;
            } else {
                // something old and creaky - just try to make sure the element will be visible and return true so we consider this successful
                $element[0].scrollIntoView(false);
                return true;
            }

            var elementVerticalPosition = $element.offset().top;
            var elementHeight = $element.height();

            var extra = 40; // the calculation seems to be off by 40 pixels - I don't know why (perhaps padding on $element?)

            if ((elementVerticalPosition + elementHeight + extra) > scrollY + windowHeight) {
                $element[0].scrollIntoView(false); // align to the bottom of the viewport
                window.scrollBy(0, extra);
                return scrollY != getScrollY(); // did we successfully scroll the window?
            } else {
                // no scrolling was necessary
                return true;
            }
        },

        /**
         * Find the closest parent with the CSS property overflow set to either 'scroll' or 'auto' and
         * scroll this to show the element.
         *
         * @return true if successfully found a parent to scroll.
         */
        scrollOverflowContainerToElement: function() {
            var $element = this;
            var $parent = null;

            $element.parents().each(function(index) {
                var overflow = AJS.$(this).css("overflow");
                if (overflow == "auto" || overflow == "scroll") {
                    $parent = AJS.$(this);
                    return false;
                }
            });

            if (!$parent) {
                return false;
            }

            var height = $parent.height();

            var extra = 40; // the calculation seems to be off by 40 pixels - I don't know why (perhaps padding on $element?)
            var elementVerticalPosition = $element.offset().top;
            var elementHeight = $element.height();
            var differential = height - (elementVerticalPosition + elementHeight + extra);

            if (differential < 0) {
                $parent[0].scrollTop = $parent[0].scrollTop - differential;
            }

            return true;
        }
    });
});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
// This file was automatically generated from quick-reload.soy.
// Please don't edit this file by hand.

if (typeof QuickReload == 'undefined') { var QuickReload = {}; }
if (typeof QuickReload.Templates == 'undefined') { QuickReload.Templates = {}; }


QuickReload.Templates.notice = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="qr-notice aui-message warning"></div>');
  return opt_sb ? '' : output.toString();
};


QuickReload.Templates.noticeItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="qr-notice-item"><span class="qr-notice-text"></span>&nbsp;&nbsp;<a class="qr-notice-show" href="#">', soy.$$escapeHtml(opt_data.show), '</a>&nbsp;&nbsp;<a class="qr-notice-ignore" href="#">', soy.$$escapeHtml("Ignore"), '</a></div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
Confluence.QuickReload=Confluence.QuickReload||{};
AJS.toInit(function(B){var C=Confluence.CommentDisplayManager;
function A(D){return D.comment.id
}Confluence.QuickReload.Comments=function(){return{property:"comments",singleText:function(E,D){return AJS.format("New comment from {0}",D(E.commenter))
},manyText:function(D){return AJS.format("{0} new comments",D.length)
},showText:function(){return "Show"
},filterNewResults:function(D,F){if(D.length===0||F.length===0){return F
}var E=B.map(D,A);
return B(F).filter(function(G,H){return B.inArray(A(H),E)<0
}).splice(0)
},update:function(D){C.clearFocus();
B.map(D,function(E){var G=C.getCommentNode(A(E))!=null;
var F=C.addOrUpdateComment(E.commenter,E.comment,true,true);
if(Confluence.Likes&&!G){Confluence.Likes.appendAction(B(F));
Confluence.Likes.updateComment(B(F),{})
}})
}}
}
});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
Confluence.QuickReload=Confluence.QuickReload||{};
AJS.toInit(function(A){Confluence.QuickReload.Page=function(){return{property:"page",singleText:function(C,B){return AJS.format("New edit by {0}",B(C.editor))
},manyText:function(B){return AJS.format("{0} new edits",B.length)
},showText:function(){return "Reload"
},filterNewResults:function(B,C){return C
},update:function(B){window.location.reload()
}}
}
});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
Confluence.QuickReload=Confluence.QuickReload||{};
AJS.toInit(function(B){var A=QuickReload.Templates;
Confluence.QuickReload.Notice=function(){var C=B(A.notice());
C.appendTo("body");
return{addOrUpdateText:function(H,K,E,G){var J="qr-notice-type-"+H;
var D=C.find("."+J);
if(D.length===0){D=B(A.noticeItem({show:E})).appendTo(C);
D.addClass(J);
var I=this;
var F=function(L){if(C.find(".qr-notice-text").length==1){I.hide(function(){D.remove()
})
}else{D.remove()
}L.preventDefault()
};
D.find(".qr-notice-ignore").click(F);
D.find(".qr-notice-show").click(F).click(G)
}D.find(".qr-notice-text").text(K)
},bind:function(D,E){return C.bind(D,E)
},show:function(){C.animate({opacity:"show"},600)
},hide:function(D){C.trigger("close");
C.animate({opacity:"hide"},600,D)
}}
}
});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
Confluence.QuickReload=Confluence.QuickReload||{};
AJS.toInit(function(A){Confluence.QuickReload.SmartTimer=function(H,G){var K=A.extend({min:1000*20,max:1000*60*60,multiplier:1.25,inactivity:1000*60*5},G);
var F=new Date().getTime();
var E=null;
var J=0;
A(window).focus(C);
A("body").click(C);
function I(){return(new Date().getTime()-F)<K.inactivity
}function C(){if(!I()){J=0;
B()
}F=new Date().getTime()
}function D(L){return Math.min(I()?K.min:L*K.multiplier,K.max)
}function B(){if(E){clearTimeout(E)
}E=setTimeout(function(){H();
B()
},J=D(J))
}return{start:function(){B()
},stop:function(){clearTimeout(E);
E=null
}}
}
});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
Confluence.QuickReload=Confluence.QuickReload||{};
AJS.toInit(function(H){if(AJS.DarkFeatures.isEnabled("quickreload.disabled")){return 
}if(!Confluence.CommentDisplayManager){return 
}var C=AJS.Meta.get("page-id");
if(C==undefined){return 
}var K=document.title;
var D=[new Confluence.QuickReload.Comments(),new Confluence.QuickReload.Page()];
var L=new Confluence.QuickReload.Notice();
L.bind("close",function(){document.title=K
});
var I=function(O){document.title=O+K
};
var N=function(O){if(O.results.length===1){return O.singleText(O.results[0],function(P){return P.displayName
})
}return O.manyText(O.results)
};
var B=H("meta[name='confluence-request-time']").attr("content")||new Date().getTime();
var G=false;
var M=0;
var E=function(){I(M>0?"("+M+") ":"")
};
function J(){return H("body").hasClass("contenteditor")
}function F(P,O){return Confluence.getContextPath()+"/rest/quickreload/latest/"+P+"?since="+encodeURIComponent(O)
}Confluence.QuickReload.update=function(){if(J()){Confluence.QuickReload.disable();
return 
}H.ajax({type:"GET",url:F(C,B),dataType:"json"}).done(function(P){var O=false;
B=P.time;
H.map(D,function(T){var Q=P[T.property];
T.results=T.results||[];
if(Q){var U=T.results.concat(T.filterNewResults(T.results,Q));
var R=U.length-T.results.length;
var S=R>0;
T.results=U;
if(S){L.addOrUpdateText(T.property,N(T),T.showText(),function(){T.update(T.results);
M-=T.results.length;
T.results=[];
E()
})
}O|=S;
M+=R
}});
if(O){L.show();
E()
}})
};
var A=new Confluence.QuickReload.SmartTimer(Confluence.QuickReload.update);
Confluence.QuickReload.disable=function(){G=true;
A.stop();
L.hide()
};
Confluence.QuickReload.enable=function(){G=false;
A.start()
};
A.start()
});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
AJS.bind("sidebar.finished-loading",function(){var a=AJS.Meta.get("blueprint-index-popup-key");AJS.debug("Index key for "+a);if(a){Confluence.Blueprint.showIndexPagePopup(a)}});AJS.toInit(function(a){Confluence.Blueprint.showIndexPagePopup=function(c){var e=function(j){return function(m,k,l){m.html(Confluence.Templates.Blueprints.sidebarIndexPagePopup({indexPageTitle:j.toLowerCase()}));l()}};var b=AJS.$(AJS.$("li.blueprint."+c)[0]);var i=b.text();var h=AJS.$(".icon",b);var g="blueprintIndexSidebarPopup";var d=AJS.InlineDialog(h.is(":visible")?h:AJS.$(".acs-nav-sections .quick-links-section"),g,e(i),{addActiveClass:false,hideDelay:null,noBind:true});AJS.$(document).bind("showLayer",function(j){var k=g+".inline-dialog-check";a("body").unbind("click."+k)});d.show();var f=function(j){AJS.$(document).on("click","#dismiss-index-popup",function(){j.hide();return false})}(d)}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
AJS.toInit(function(b){var a=b(".create-from-template-button");a.each(function(){if(b(this).attr("aria-disabled")=="true"){var c={live:true,gravity:"n",title:"data-tooltip",delayIn:250,delayOut:0};b(this).tooltip(c)}});a.click(function(){var d=Confluence.Blueprint.Dialog.openDialog({showDialog:false,updateHeight:false}),f=b(this).data(),i=f.spaceKey,c=f.blueprintModuleCompleteKey,e=f.templateId,h={spaceKey:i},g;if(c!=null){g=c.replace(/\.|:/g,"_")}else{g="template";h.templateId=e}AJS.trigger("analytics",{name:"create-from-template-button.click."+g,data:h});Confluence.Blueprint.Dialog.requestWebItems(i).done(function(m){var n=Confluence.Blueprint.Dialog.loadedWebitems[i];if(_.isEmpty(n)){AJS.log("create-from-template-macro: No Create dialog web items found for spaceKey >"+i+"<");return}var k=_.find(n,function(o){if(c){return o.blueprintModuleCompleteKey==c}return o.templateId==e});if(!k){AJS.log("create-from-template-macro: No Create dialog web item found for blueprintModuleCompleteKey >"+c+"< and templateId >"+e+"<");return}var l=k.itemModuleCompleteKey;k=b.extend({},k);k.title=f.title;k.spaceKey=i;Confluence.Blueprint.fireWizard(m,k,d);var j=k.howToUseTemplate&&!k.skipHowToUse;if(j||Confluence.Blueprint.hasWizard(l,k)){d.show()}}).fail(function(){AJS.log("create-from-template-macro: requestWebItems call for spaceKey >"+i+"< failed")});return false})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
// This file was automatically generated from create-from-template-macro.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Blueprints == 'undefined') { Confluence.Templates.Blueprints = {}; }
if (typeof Confluence.Templates.Blueprints.CreateFromTemplate == 'undefined') { Confluence.Templates.Blueprints.CreateFromTemplate = {}; }


Confluence.Templates.Blueprints.CreateFromTemplate.macroTemplate = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<button class=\'aui-button create-from-template-button\'', (! opt_data.hasCreatePermission) ? 'aria-disabled=\'true\' data-tooltip="' + soy.$$escapeHtml("Sorry, you don\x27t have permission to create content. Contact your space administrator to request access.") + '"' : '', (opt_data.title) ? 'data-title=\'' + soy.$$escapeHtml(opt_data.title) + '\'' : '', 'data-space-key=\'', soy.$$escapeHtml(opt_data.spaceKey), '\'', (opt_data.templateId) ? 'data-template-id=\'' + soy.$$escapeHtml(opt_data.templateId) + '\'' : '', (opt_data.blueprintModuleCompleteKey) ? 'data-blueprint-module-complete-key=\'' + soy.$$escapeHtml(opt_data.blueprintModuleCompleteKey) + '\'' : '', 'href=\'#\'>', soy.$$escapeHtml(opt_data.buttonLabel), '</button>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
(function(A){A(function(){A.tablesorter.addParser({id:"dateAttributeParser",is:function(B,D,C){return A(C).is(".content-report-table-macro .modified")
},format:function(B,D,C,E){return A(C).attr("data-sortable-date")
},type:"numeric"})
})
})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
// This file was automatically generated from content-report-table.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Plugins == 'undefined') { Confluence.Templates.Plugins = {}; }
if (typeof Confluence.Templates.Plugins.ContentReport == 'undefined') { Confluence.Templates.Plugins.ContentReport = {}; }


Confluence.Templates.Plugins.ContentReport.contentReportTable = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<table class="aui content-report-table-macro"', (opt_data.analyticsKey) ? ' data-analytics-key="' + soy.$$escapeHtml(opt_data.analyticsKey) + '"' : '', '><thead><tr><th>', soy.$$escapeHtml("Title"), '</th><th>', soy.$$escapeHtml("Creator"), '</th><th>', soy.$$escapeHtml("Modified"), '</th></tr></thead><tbody>');
  var resultList16 = opt_data.results;
  var resultListLen16 = resultList16.length;
  if (resultListLen16 > 0) {
    for (var resultIndex16 = 0; resultIndex16 < resultListLen16; resultIndex16++) {
      var resultData16 = resultList16[resultIndex16];
      output.append('<tr><td class="title"><a href="', soy.$$escapeHtml(resultData16.urlPath), '">', soy.$$escapeHtml(resultData16.title), '</a></td><td class="creator">');
      Confluence.Templates.User.usernameLink({canView: opt_data.canViewProfiles, username: resultData16.creatorName, fullName: resultData16.creatorFullName, contextPath: opt_data.contextPath}, output);
      output.append('</td><td class="modified" data-sortable-date="', soy.$$escapeHtml(resultData16.sortableDate), '">', soy.$$escapeHtml(resultData16.friendlyModificationDate), '</td></tr>');
    }
  } else {
    output.append('<tr><td colspan="3">', soy.$$escapeHtml("No content found."), '</td></tr>');
  }
  output.append('</tbody></table>', (opt_data.searchMoreResultsLinkUrl) ? '<div class="more-results"><a href="' + soy.$$escapeHtml("") + soy.$$escapeHtml(opt_data.searchMoreResultsLinkUrl) + '">' + soy.$$escapeHtml("Find more results") + '</a><div>' : '');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
AJS.$(function(A){A(".content-report-table-macro").on("click",".title a",function(D){var B=A(D.delegateTarget).data("analytics-key");
if(B){var C="content-report-table-macro.content-click."+B;
AJS.trigger("analytics",{name:C})
}})
});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
AJS.toInit(function(A){Confluence.KeyboardShortcuts&&Confluence.KeyboardShortcuts.Autoformat.push({action:"@",context:"autoformat.autocomplete",description:"Mention"})
});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
;/*
 * jQuery UI Datepicker 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Datepicker
 *
 * Depends:
 *	jquery.ui.core.js
 */
(function(d,A){function K(){this.debug=false;this._curInst=null;this._keyEvent=false;this._disabledInputs=[];this._inDialog=this._datepickerShowing=false;this._mainDivId="ui-datepicker-div";this._inlineClass="ui-datepicker-inline";this._appendClass="ui-datepicker-append";this._triggerClass="ui-datepicker-trigger";this._dialogClass="ui-datepicker-dialog";this._disableClass="ui-datepicker-disabled";this._unselectableClass="ui-datepicker-unselectable";this._currentClass="ui-datepicker-current-day";this._dayOverClass=
"ui-datepicker-days-cell-over";this.regional=[];this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su",
"Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:false,showMonthAfterYear:false,yearSuffix:""};this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:false,hideIfNoPrevNext:false,navigationAsDateFormat:false,gotoCurrent:false,changeMonth:false,changeYear:false,yearRange:"c-10:c+10",showOtherMonths:false,selectOtherMonths:false,showWeek:false,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",
minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:true,showButtonPanel:false,autoSize:false};d.extend(this._defaults,this.regional[""]);this.dpDiv=d('<div id="'+this._mainDivId+'" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')}function F(a,b){d.extend(a,b);for(var c in b)if(b[c]==
null||b[c]==A)a[c]=b[c];return a}d.extend(d.ui,{datepicker:{version:"1.8.11"}});var y=(new Date).getTime();d.extend(K.prototype,{markerClassName:"hasDatepicker",log:function(){this.debug&&console.log.apply("",arguments)},_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(a){F(this._defaults,a||{});return this},_attachDatepicker:function(a,b){var c=null;for(var e in this._defaults){var f=a.getAttribute("date:"+e);if(f){c=c||{};try{c[e]=eval(f)}catch(h){c[e]=f}}}e=a.nodeName.toLowerCase();
f=e=="div"||e=="span";if(!a.id){this.uuid+=1;a.id="dp"+this.uuid}var i=this._newInst(d(a),f);i.settings=d.extend({},b||{},c||{});if(e=="input")this._connectDatepicker(a,i);else f&&this._inlineDatepicker(a,i)},_newInst:function(a,b){return{id:a[0].id.replace(/([^A-Za-z0-9_-])/g,"\\\\$1"),input:a,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:b,dpDiv:!b?this.dpDiv:d('<div class="'+this._inlineClass+' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')}},
_connectDatepicker:function(a,b){var c=d(a);b.append=d([]);b.trigger=d([]);if(!c.hasClass(this.markerClassName)){this._attachments(c,b);c.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker",function(e,f,h){b.settings[f]=h}).bind("getData.datepicker",function(e,f){return this._get(b,f)});this._autoSize(b);d.data(a,"datepicker",b)}},_attachments:function(a,b){var c=this._get(b,"appendText"),e=this._get(b,"isRTL");b.append&&
b.append.remove();if(c){b.append=d('<span class="'+this._appendClass+'">'+c+"</span>");a[e?"before":"after"](b.append)}a.unbind("focus",this._showDatepicker);b.trigger&&b.trigger.remove();c=this._get(b,"showOn");if(c=="focus"||c=="both")a.focus(this._showDatepicker);if(c=="button"||c=="both"){c=this._get(b,"buttonText");var f=this._get(b,"buttonImage");b.trigger=d(this._get(b,"buttonImageOnly")?d("<img/>").addClass(this._triggerClass).attr({src:f,alt:c,title:c}):d('<button type="button"></button>').addClass(this._triggerClass).html(f==
""?c:d("<img/>").attr({src:f,alt:c,title:c})));a[e?"before":"after"](b.trigger);b.trigger.click(function(){d.datepicker._datepickerShowing&&d.datepicker._lastInput==a[0]?d.datepicker._hideDatepicker():d.datepicker._showDatepicker(a[0]);return false})}},_autoSize:function(a){if(this._get(a,"autoSize")&&!a.inline){var b=new Date(2009,11,20),c=this._get(a,"dateFormat");if(c.match(/[DM]/)){var e=function(f){for(var h=0,i=0,g=0;g<f.length;g++)if(f[g].length>h){h=f[g].length;i=g}return i};b.setMonth(e(this._get(a,
c.match(/MM/)?"monthNames":"monthNamesShort")));b.setDate(e(this._get(a,c.match(/DD/)?"dayNames":"dayNamesShort"))+20-b.getDay())}a.input.attr("size",this._formatDate(a,b).length)}},_inlineDatepicker:function(a,b){var c=d(a);if(!c.hasClass(this.markerClassName)){c.addClass(this.markerClassName).append(b.dpDiv).bind("setData.datepicker",function(e,f,h){b.settings[f]=h}).bind("getData.datepicker",function(e,f){return this._get(b,f)});d.data(a,"datepicker",b);this._setDate(b,this._getDefaultDate(b),
true);this._updateDatepicker(b);this._updateAlternate(b);b.dpDiv.show()}},_dialogDatepicker:function(a,b,c,e,f){a=this._dialogInst;if(!a){this.uuid+=1;this._dialogInput=d('<input type="text" id="'+("dp"+this.uuid)+'" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>');this._dialogInput.keydown(this._doKeyDown);d("body").append(this._dialogInput);a=this._dialogInst=this._newInst(this._dialogInput,false);a.settings={};d.data(this._dialogInput[0],"datepicker",a)}F(a.settings,e||{});
b=b&&b.constructor==Date?this._formatDate(a,b):b;this._dialogInput.val(b);this._pos=f?f.length?f:[f.pageX,f.pageY]:null;if(!this._pos)this._pos=[document.documentElement.clientWidth/2-100+(document.documentElement.scrollLeft||document.body.scrollLeft),document.documentElement.clientHeight/2-150+(document.documentElement.scrollTop||document.body.scrollTop)];this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px");a.settings.onSelect=c;this._inDialog=true;this.dpDiv.addClass(this._dialogClass);
this._showDatepicker(this._dialogInput[0]);d.blockUI&&d.blockUI(this.dpDiv);d.data(this._dialogInput[0],"datepicker",a);return this},_destroyDatepicker:function(a){var b=d(a),c=d.data(a,"datepicker");if(b.hasClass(this.markerClassName)){var e=a.nodeName.toLowerCase();d.removeData(a,"datepicker");if(e=="input"){c.append.remove();c.trigger.remove();b.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",
this._doKeyUp)}else if(e=="div"||e=="span")b.removeClass(this.markerClassName).empty()}},_enableDatepicker:function(a){var b=d(a),c=d.data(a,"datepicker");if(b.hasClass(this.markerClassName)){var e=a.nodeName.toLowerCase();if(e=="input"){a.disabled=false;c.trigger.filter("button").each(function(){this.disabled=false}).end().filter("img").css({opacity:"1.0",cursor:""})}else if(e=="div"||e=="span")b.children("."+this._inlineClass).children().removeClass("ui-state-disabled");this._disabledInputs=d.map(this._disabledInputs,
function(f){return f==a?null:f})}},_disableDatepicker:function(a){var b=d(a),c=d.data(a,"datepicker");if(b.hasClass(this.markerClassName)){var e=a.nodeName.toLowerCase();if(e=="input"){a.disabled=true;c.trigger.filter("button").each(function(){this.disabled=true}).end().filter("img").css({opacity:"0.5",cursor:"default"})}else if(e=="div"||e=="span")b.children("."+this._inlineClass).children().addClass("ui-state-disabled");this._disabledInputs=d.map(this._disabledInputs,function(f){return f==a?null:
f});this._disabledInputs[this._disabledInputs.length]=a}},_isDisabledDatepicker:function(a){if(!a)return false;for(var b=0;b<this._disabledInputs.length;b++)if(this._disabledInputs[b]==a)return true;return false},_getInst:function(a){try{return d.data(a,"datepicker")}catch(b){throw"Missing instance data for this datepicker";}},_optionDatepicker:function(a,b,c){var e=this._getInst(a);if(arguments.length==2&&typeof b=="string")return b=="defaults"?d.extend({},d.datepicker._defaults):e?b=="all"?d.extend({},
e.settings):this._get(e,b):null;var f=b||{};if(typeof b=="string"){f={};f[b]=c}if(e){this._curInst==e&&this._hideDatepicker();var h=this._getDateDatepicker(a,true),i=this._getMinMaxDate(e,"min"),g=this._getMinMaxDate(e,"max");F(e.settings,f);if(i!==null&&f.dateFormat!==A&&f.minDate===A)e.settings.minDate=this._formatDate(e,i);if(g!==null&&f.dateFormat!==A&&f.maxDate===A)e.settings.maxDate=this._formatDate(e,g);this._attachments(d(a),e);this._autoSize(e);this._setDateDatepicker(a,h);this._updateDatepicker(e)}},
_changeDatepicker:function(a,b,c){this._optionDatepicker(a,b,c)},_refreshDatepicker:function(a){(a=this._getInst(a))&&this._updateDatepicker(a)},_setDateDatepicker:function(a,b){if(a=this._getInst(a)){this._setDate(a,b);this._updateDatepicker(a);this._updateAlternate(a)}},_getDateDatepicker:function(a,b){(a=this._getInst(a))&&!a.inline&&this._setDateFromField(a,b);return a?this._getDate(a):null},_doKeyDown:function(a){var b=d.datepicker._getInst(a.target),c=true,e=b.dpDiv.is(".ui-datepicker-rtl");
b._keyEvent=true;if(d.datepicker._datepickerShowing)switch(a.keyCode){case 9:d.datepicker._hideDatepicker();c=false;break;case 13:c=d("td."+d.datepicker._dayOverClass+":not(."+d.datepicker._currentClass+")",b.dpDiv);c[0]?d.datepicker._selectDay(a.target,b.selectedMonth,b.selectedYear,c[0]):d.datepicker._hideDatepicker();return false;case 27:d.datepicker._hideDatepicker();break;case 33:d.datepicker._adjustDate(a.target,a.ctrlKey?-d.datepicker._get(b,"stepBigMonths"):-d.datepicker._get(b,"stepMonths"),
"M");break;case 34:d.datepicker._adjustDate(a.target,a.ctrlKey?+d.datepicker._get(b,"stepBigMonths"):+d.datepicker._get(b,"stepMonths"),"M");break;case 35:if(a.ctrlKey||a.metaKey)d.datepicker._clearDate(a.target);c=a.ctrlKey||a.metaKey;break;case 36:if(a.ctrlKey||a.metaKey)d.datepicker._gotoToday(a.target);c=a.ctrlKey||a.metaKey;break;case 37:if(a.ctrlKey||a.metaKey)d.datepicker._adjustDate(a.target,e?+1:-1,"D");c=a.ctrlKey||a.metaKey;if(a.originalEvent.altKey)d.datepicker._adjustDate(a.target,a.ctrlKey?
-d.datepicker._get(b,"stepBigMonths"):-d.datepicker._get(b,"stepMonths"),"M");break;case 38:if(a.ctrlKey||a.metaKey)d.datepicker._adjustDate(a.target,-7,"D");c=a.ctrlKey||a.metaKey;break;case 39:if(a.ctrlKey||a.metaKey)d.datepicker._adjustDate(a.target,e?-1:+1,"D");c=a.ctrlKey||a.metaKey;if(a.originalEvent.altKey)d.datepicker._adjustDate(a.target,a.ctrlKey?+d.datepicker._get(b,"stepBigMonths"):+d.datepicker._get(b,"stepMonths"),"M");break;case 40:if(a.ctrlKey||a.metaKey)d.datepicker._adjustDate(a.target,
+7,"D");c=a.ctrlKey||a.metaKey;break;default:c=false}else if(a.keyCode==36&&a.ctrlKey)d.datepicker._showDatepicker(this);else c=false;if(c){a.preventDefault();a.stopPropagation()}},_doKeyPress:function(a){var b=d.datepicker._getInst(a.target);if(d.datepicker._get(b,"constrainInput")){b=d.datepicker._possibleChars(d.datepicker._get(b,"dateFormat"));var c=String.fromCharCode(a.charCode==A?a.keyCode:a.charCode);return a.ctrlKey||a.metaKey||c<" "||!b||b.indexOf(c)>-1}},_doKeyUp:function(a){a=d.datepicker._getInst(a.target);
if(a.input.val()!=a.lastVal)try{if(d.datepicker.parseDate(d.datepicker._get(a,"dateFormat"),a.input?a.input.val():null,d.datepicker._getFormatConfig(a))){d.datepicker._setDateFromField(a);d.datepicker._updateAlternate(a);d.datepicker._updateDatepicker(a)}}catch(b){d.datepicker.log(b)}return true},_showDatepicker:function(a){a=a.target||a;if(a.nodeName.toLowerCase()!="input")a=d("input",a.parentNode)[0];if(!(d.datepicker._isDisabledDatepicker(a)||d.datepicker._lastInput==a)){var b=d.datepicker._getInst(a);
d.datepicker._curInst&&d.datepicker._curInst!=b&&d.datepicker._curInst.dpDiv.stop(true,true);var c=d.datepicker._get(b,"beforeShow");F(b.settings,c?c.apply(a,[a,b]):{});b.lastVal=null;d.datepicker._lastInput=a;d.datepicker._setDateFromField(b);if(d.datepicker._inDialog)a.value="";if(!d.datepicker._pos){d.datepicker._pos=d.datepicker._findPos(a);d.datepicker._pos[1]+=a.offsetHeight}var e=false;d(a).parents().each(function(){e|=d(this).css("position")=="fixed";return!e});if(e&&d.browser.opera){d.datepicker._pos[0]-=
document.documentElement.scrollLeft;d.datepicker._pos[1]-=document.documentElement.scrollTop}c={left:d.datepicker._pos[0],top:d.datepicker._pos[1]};d.datepicker._pos=null;b.dpDiv.empty();b.dpDiv.css({position:"absolute",display:"block",top:"-1000px"});d.datepicker._updateDatepicker(b);c=d.datepicker._checkOffset(b,c,e);b.dpDiv.css({position:d.datepicker._inDialog&&d.blockUI?"static":e?"fixed":"absolute",display:"none",left:c.left+"px",top:c.top+"px"});if(!b.inline){c=d.datepicker._get(b,"showAnim");
var f=d.datepicker._get(b,"duration"),h=function(){d.datepicker._datepickerShowing=true;var i=b.dpDiv.find("iframe.ui-datepicker-cover");if(i.length){var g=d.datepicker._getBorders(b.dpDiv);i.css({left:-g[0],top:-g[1],width:b.dpDiv.outerWidth(),height:b.dpDiv.outerHeight()})}};b.dpDiv.zIndex(d(a).zIndex()+1);d.effects&&d.effects[c]?b.dpDiv.show(c,d.datepicker._get(b,"showOptions"),f,h):b.dpDiv[c||"show"](c?f:null,h);if(!c||!f)h();b.input.is(":visible")&&!b.input.is(":disabled")&&b.input.focus();d.datepicker._curInst=
b}}},_updateDatepicker:function(a){var b=this,c=d.datepicker._getBorders(a.dpDiv);a.dpDiv.empty().append(this._generateHTML(a));var e=a.dpDiv.find("iframe.ui-datepicker-cover");e.length&&e.css({left:-c[0],top:-c[1],width:a.dpDiv.outerWidth(),height:a.dpDiv.outerHeight()});a.dpDiv.find("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a").bind("mouseout",function(){d(this).removeClass("ui-state-hover");this.className.indexOf("ui-datepicker-prev")!=-1&&d(this).removeClass("ui-datepicker-prev-hover");
this.className.indexOf("ui-datepicker-next")!=-1&&d(this).removeClass("ui-datepicker-next-hover")}).bind("mouseover",function(){if(!b._isDisabledDatepicker(a.inline?a.dpDiv.parent()[0]:a.input[0])){d(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");d(this).addClass("ui-state-hover");this.className.indexOf("ui-datepicker-prev")!=-1&&d(this).addClass("ui-datepicker-prev-hover");this.className.indexOf("ui-datepicker-next")!=-1&&d(this).addClass("ui-datepicker-next-hover")}}).end().find("."+
this._dayOverClass+" a").trigger("mouseover").end();c=this._getNumberOfMonths(a);e=c[1];e>1?a.dpDiv.addClass("ui-datepicker-multi-"+e).css("width",17*e+"em"):a.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");a.dpDiv[(c[0]!=1||c[1]!=1?"add":"remove")+"Class"]("ui-datepicker-multi");a.dpDiv[(this._get(a,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl");a==d.datepicker._curInst&&d.datepicker._datepickerShowing&&a.input&&a.input.is(":visible")&&!a.input.is(":disabled")&&
a.input[0]!=document.activeElement&&a.input.focus();if(a.yearshtml){var f=a.yearshtml;setTimeout(function(){f===a.yearshtml&&a.dpDiv.find("select.ui-datepicker-year:first").replaceWith(a.yearshtml);f=a.yearshtml=null},0)}},_getBorders:function(a){var b=function(c){return{thin:1,medium:2,thick:3}[c]||c};return[parseFloat(b(a.css("border-left-width"))),parseFloat(b(a.css("border-top-width")))]},_checkOffset:function(a,b,c){var e=a.dpDiv.outerWidth(),f=a.dpDiv.outerHeight(),h=a.input?a.input.outerWidth():
0,i=a.input?a.input.outerHeight():0,g=document.documentElement.clientWidth+d(document).scrollLeft(),j=document.documentElement.clientHeight+d(document).scrollTop();b.left-=this._get(a,"isRTL")?e-h:0;b.left-=c&&b.left==a.input.offset().left?d(document).scrollLeft():0;b.top-=c&&b.top==a.input.offset().top+i?d(document).scrollTop():0;b.left-=Math.min(b.left,b.left+e>g&&g>e?Math.abs(b.left+e-g):0);b.top-=Math.min(b.top,b.top+f>j&&j>f?Math.abs(f+i):0);return b},_findPos:function(a){for(var b=this._get(this._getInst(a),
"isRTL");a&&(a.type=="hidden"||a.nodeType!=1||d.expr.filters.hidden(a));)a=a[b?"previousSibling":"nextSibling"];a=d(a).offset();return[a.left,a.top]},_hideDatepicker:function(a){var b=this._curInst;if(!(!b||a&&b!=d.data(a,"datepicker")))if(this._datepickerShowing){a=this._get(b,"showAnim");var c=this._get(b,"duration"),e=function(){d.datepicker._tidyDialog(b);this._curInst=null};d.effects&&d.effects[a]?b.dpDiv.hide(a,d.datepicker._get(b,"showOptions"),c,e):b.dpDiv[a=="slideDown"?"slideUp":a=="fadeIn"?
"fadeOut":"hide"](a?c:null,e);a||e();if(a=this._get(b,"onClose"))a.apply(b.input?b.input[0]:null,[b.input?b.input.val():"",b]);this._datepickerShowing=false;this._lastInput=null;if(this._inDialog){this._dialogInput.css({position:"absolute",left:"0",top:"-100px"});if(d.blockUI){d.unblockUI();d("body").append(this.dpDiv)}}this._inDialog=false}},_tidyDialog:function(a){a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(a){if(d.datepicker._curInst){a=
d(a.target);a[0].id!=d.datepicker._mainDivId&&a.parents("#"+d.datepicker._mainDivId).length==0&&!a.hasClass(d.datepicker.markerClassName)&&!a.hasClass(d.datepicker._triggerClass)&&d.datepicker._datepickerShowing&&!(d.datepicker._inDialog&&d.blockUI)&&d.datepicker._hideDatepicker()}},_adjustDate:function(a,b,c){a=d(a);var e=this._getInst(a[0]);if(!this._isDisabledDatepicker(a[0])){this._adjustInstDate(e,b+(c=="M"?this._get(e,"showCurrentAtPos"):0),c);this._updateDatepicker(e)}},_gotoToday:function(a){a=
d(a);var b=this._getInst(a[0]);if(this._get(b,"gotoCurrent")&&b.currentDay){b.selectedDay=b.currentDay;b.drawMonth=b.selectedMonth=b.currentMonth;b.drawYear=b.selectedYear=b.currentYear}else{var c=new Date;b.selectedDay=c.getDate();b.drawMonth=b.selectedMonth=c.getMonth();b.drawYear=b.selectedYear=c.getFullYear()}this._notifyChange(b);this._adjustDate(a)},_selectMonthYear:function(a,b,c){a=d(a);var e=this._getInst(a[0]);e._selectingMonthYear=false;e["selected"+(c=="M"?"Month":"Year")]=e["draw"+(c==
"M"?"Month":"Year")]=parseInt(b.options[b.selectedIndex].value,10);this._notifyChange(e);this._adjustDate(a)},_clickMonthYear:function(a){var b=this._getInst(d(a)[0]);b.input&&b._selectingMonthYear&&setTimeout(function(){b.input.focus()},0);b._selectingMonthYear=!b._selectingMonthYear},_selectDay:function(a,b,c,e){var f=d(a);if(!(d(e).hasClass(this._unselectableClass)||this._isDisabledDatepicker(f[0]))){f=this._getInst(f[0]);f.selectedDay=f.currentDay=d("a",e).html();f.selectedMonth=f.currentMonth=
b;f.selectedYear=f.currentYear=c;this._selectDate(a,this._formatDate(f,f.currentDay,f.currentMonth,f.currentYear))}},_clearDate:function(a){a=d(a);this._getInst(a[0]);this._selectDate(a,"")},_selectDate:function(a,b){a=this._getInst(d(a)[0]);b=b!=null?b:this._formatDate(a);a.input&&a.input.val(b);this._updateAlternate(a);var c=this._get(a,"onSelect");if(c)c.apply(a.input?a.input[0]:null,[b,a]);else a.input&&a.input.trigger("change");if(a.inline)this._updateDatepicker(a);else{this._hideDatepicker();
this._lastInput=a.input[0];typeof a.input[0]!="object"&&a.input.focus();this._lastInput=null}},_updateAlternate:function(a){var b=this._get(a,"altField");if(b){var c=this._get(a,"altFormat")||this._get(a,"dateFormat"),e=this._getDate(a),f=this.formatDate(c,e,this._getFormatConfig(a));d(b).each(function(){d(this).val(f)})}},noWeekends:function(a){a=a.getDay();return[a>0&&a<6,""]},iso8601Week:function(a){a=new Date(a.getTime());a.setDate(a.getDate()+4-(a.getDay()||7));var b=a.getTime();a.setMonth(0);
a.setDate(1);return Math.floor(Math.round((b-a)/864E5)/7)+1},parseDate:function(a,b,c){if(a==null||b==null)throw"Invalid arguments";b=typeof b=="object"?b.toString():b+"";if(b=="")return null;var e=(c?c.shortYearCutoff:null)||this._defaults.shortYearCutoff;e=typeof e!="string"?e:(new Date).getFullYear()%100+parseInt(e,10);for(var f=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,h=(c?c.dayNames:null)||this._defaults.dayNames,i=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort,g=(c?
c.monthNames:null)||this._defaults.monthNames,j=c=-1,l=-1,u=-1,k=false,o=function(p){(p=z+1<a.length&&a.charAt(z+1)==p)&&z++;return p},m=function(p){var v=o(p);p=new RegExp("^\\d{1,"+(p=="@"?14:p=="!"?20:p=="y"&&v?4:p=="o"?3:2)+"}");p=b.substring(s).match(p);if(!p)throw"Missing number at position "+s;s+=p[0].length;return parseInt(p[0],10)},n=function(p,v,H){p=o(p)?H:v;for(v=0;v<p.length;v++)if(b.substr(s,p[v].length).toLowerCase()==p[v].toLowerCase()){s+=p[v].length;return v+1}throw"Unknown name at position "+
s;},r=function(){if(b.charAt(s)!=a.charAt(z))throw"Unexpected literal at position "+s;s++},s=0,z=0;z<a.length;z++)if(k)if(a.charAt(z)=="'"&&!o("'"))k=false;else r();else switch(a.charAt(z)){case "d":l=m("d");break;case "D":n("D",f,h);break;case "o":u=m("o");break;case "m":j=m("m");break;case "M":j=n("M",i,g);break;case "y":c=m("y");break;case "@":var w=new Date(m("@"));c=w.getFullYear();j=w.getMonth()+1;l=w.getDate();break;case "!":w=new Date((m("!")-this._ticksTo1970)/1E4);c=w.getFullYear();j=w.getMonth()+
1;l=w.getDate();break;case "'":if(o("'"))r();else k=true;break;default:r()}if(c==-1)c=(new Date).getFullYear();else if(c<100)c+=(new Date).getFullYear()-(new Date).getFullYear()%100+(c<=e?0:-100);if(u>-1){j=1;l=u;do{e=this._getDaysInMonth(c,j-1);if(l<=e)break;j++;l-=e}while(1)}w=this._daylightSavingAdjust(new Date(c,j-1,l));if(w.getFullYear()!=c||w.getMonth()+1!=j||w.getDate()!=l)throw"Invalid date";return w},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",
RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*24*60*60*1E7,formatDate:function(a,b,c){if(!b)return"";var e=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,f=(c?c.dayNames:null)||this._defaults.dayNames,h=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort;c=(c?c.monthNames:null)||this._defaults.monthNames;var i=function(o){(o=k+1<a.length&&
a.charAt(k+1)==o)&&k++;return o},g=function(o,m,n){m=""+m;if(i(o))for(;m.length<n;)m="0"+m;return m},j=function(o,m,n,r){return i(o)?r[m]:n[m]},l="",u=false;if(b)for(var k=0;k<a.length;k++)if(u)if(a.charAt(k)=="'"&&!i("'"))u=false;else l+=a.charAt(k);else switch(a.charAt(k)){case "d":l+=g("d",b.getDate(),2);break;case "D":l+=j("D",b.getDay(),e,f);break;case "o":l+=g("o",(b.getTime()-(new Date(b.getFullYear(),0,0)).getTime())/864E5,3);break;case "m":l+=g("m",b.getMonth()+1,2);break;case "M":l+=j("M",
b.getMonth(),h,c);break;case "y":l+=i("y")?b.getFullYear():(b.getYear()%100<10?"0":"")+b.getYear()%100;break;case "@":l+=b.getTime();break;case "!":l+=b.getTime()*1E4+this._ticksTo1970;break;case "'":if(i("'"))l+="'";else u=true;break;default:l+=a.charAt(k)}return l},_possibleChars:function(a){for(var b="",c=false,e=function(h){(h=f+1<a.length&&a.charAt(f+1)==h)&&f++;return h},f=0;f<a.length;f++)if(c)if(a.charAt(f)=="'"&&!e("'"))c=false;else b+=a.charAt(f);else switch(a.charAt(f)){case "d":case "m":case "y":case "@":b+=
"0123456789";break;case "D":case "M":return null;case "'":if(e("'"))b+="'";else c=true;break;default:b+=a.charAt(f)}return b},_get:function(a,b){return a.settings[b]!==A?a.settings[b]:this._defaults[b]},_setDateFromField:function(a,b){if(a.input.val()!=a.lastVal){var c=this._get(a,"dateFormat"),e=a.lastVal=a.input?a.input.val():null,f,h;f=h=this._getDefaultDate(a);var i=this._getFormatConfig(a);try{f=this.parseDate(c,e,i)||h}catch(g){this.log(g);e=b?"":e}a.selectedDay=f.getDate();a.drawMonth=a.selectedMonth=
f.getMonth();a.drawYear=a.selectedYear=f.getFullYear();a.currentDay=e?f.getDate():0;a.currentMonth=e?f.getMonth():0;a.currentYear=e?f.getFullYear():0;this._adjustInstDate(a)}},_getDefaultDate:function(a){return this._restrictMinMax(a,this._determineDate(a,this._get(a,"defaultDate"),new Date))},_determineDate:function(a,b,c){var e=function(h){var i=new Date;i.setDate(i.getDate()+h);return i},f=function(h){try{return d.datepicker.parseDate(d.datepicker._get(a,"dateFormat"),h,d.datepicker._getFormatConfig(a))}catch(i){}var g=
(h.toLowerCase().match(/^c/)?d.datepicker._getDate(a):null)||new Date,j=g.getFullYear(),l=g.getMonth();g=g.getDate();for(var u=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,k=u.exec(h);k;){switch(k[2]||"d"){case "d":case "D":g+=parseInt(k[1],10);break;case "w":case "W":g+=parseInt(k[1],10)*7;break;case "m":case "M":l+=parseInt(k[1],10);g=Math.min(g,d.datepicker._getDaysInMonth(j,l));break;case "y":case "Y":j+=parseInt(k[1],10);g=Math.min(g,d.datepicker._getDaysInMonth(j,l));break}k=u.exec(h)}return new Date(j,
l,g)};if(b=(b=b==null||b===""?c:typeof b=="string"?f(b):typeof b=="number"?isNaN(b)?c:e(b):new Date(b.getTime()))&&b.toString()=="Invalid Date"?c:b){b.setHours(0);b.setMinutes(0);b.setSeconds(0);b.setMilliseconds(0)}return this._daylightSavingAdjust(b)},_daylightSavingAdjust:function(a){if(!a)return null;a.setHours(a.getHours()>12?a.getHours()+2:0);return a},_setDate:function(a,b,c){var e=!b,f=a.selectedMonth,h=a.selectedYear;b=this._restrictMinMax(a,this._determineDate(a,b,new Date));a.selectedDay=
a.currentDay=b.getDate();a.drawMonth=a.selectedMonth=a.currentMonth=b.getMonth();a.drawYear=a.selectedYear=a.currentYear=b.getFullYear();if((f!=a.selectedMonth||h!=a.selectedYear)&&!c)this._notifyChange(a);this._adjustInstDate(a);if(a.input)a.input.val(e?"":this._formatDate(a))},_getDate:function(a){return!a.currentYear||a.input&&a.input.val()==""?null:this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay))},_generateHTML:function(a){var b=new Date;b=this._daylightSavingAdjust(new Date(b.getFullYear(),
b.getMonth(),b.getDate()));var c=this._get(a,"isRTL"),e=this._get(a,"showButtonPanel"),f=this._get(a,"hideIfNoPrevNext"),h=this._get(a,"navigationAsDateFormat"),i=this._getNumberOfMonths(a),g=this._get(a,"showCurrentAtPos"),j=this._get(a,"stepMonths"),l=i[0]!=1||i[1]!=1,u=this._daylightSavingAdjust(!a.currentDay?new Date(9999,9,9):new Date(a.currentYear,a.currentMonth,a.currentDay)),k=this._getMinMaxDate(a,"min"),o=this._getMinMaxDate(a,"max");g=a.drawMonth-g;var m=a.drawYear;if(g<0){g+=12;m--}if(o){var n=
this._daylightSavingAdjust(new Date(o.getFullYear(),o.getMonth()-i[0]*i[1]+1,o.getDate()));for(n=k&&n<k?k:n;this._daylightSavingAdjust(new Date(m,g,1))>n;){g--;if(g<0){g=11;m--}}}a.drawMonth=g;a.drawYear=m;n=this._get(a,"prevText");n=!h?n:this.formatDate(n,this._daylightSavingAdjust(new Date(m,g-j,1)),this._getFormatConfig(a));n=this._canAdjustMonth(a,-1,m,g)?'<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_'+y+".datepicker._adjustDate('#"+a.id+"', -"+j+", 'M');\" title=\""+n+'"><span class="ui-icon ui-icon-circle-triangle-'+
(c?"e":"w")+'">'+n+"</span></a>":f?"":'<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+n+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"e":"w")+'">'+n+"</span></a>";var r=this._get(a,"nextText");r=!h?r:this.formatDate(r,this._daylightSavingAdjust(new Date(m,g+j,1)),this._getFormatConfig(a));f=this._canAdjustMonth(a,+1,m,g)?'<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_'+y+".datepicker._adjustDate('#"+a.id+"', +"+j+", 'M');\" title=\""+r+'"><span class="ui-icon ui-icon-circle-triangle-'+
(c?"w":"e")+'">'+r+"</span></a>":f?"":'<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+r+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"w":"e")+'">'+r+"</span></a>";j=this._get(a,"currentText");r=this._get(a,"gotoCurrent")&&a.currentDay?u:b;j=!h?j:this.formatDate(j,r,this._getFormatConfig(a));h=!a.inline?'<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_'+y+'.datepicker._hideDatepicker();">'+this._get(a,
"closeText")+"</button>":"";e=e?'<div class="ui-datepicker-buttonpane ui-widget-content">'+(c?h:"")+(this._isInRange(a,r)?'<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_'+y+".datepicker._gotoToday('#"+a.id+"');\">"+j+"</button>":"")+(c?"":h)+"</div>":"";h=parseInt(this._get(a,"firstDay"),10);h=isNaN(h)?0:h;j=this._get(a,"showWeek");r=this._get(a,"dayNames");this._get(a,"dayNamesShort");var s=this._get(a,"dayNamesMin"),z=
this._get(a,"monthNames"),w=this._get(a,"monthNamesShort"),p=this._get(a,"beforeShowDay"),v=this._get(a,"showOtherMonths"),H=this._get(a,"selectOtherMonths");this._get(a,"calculateWeek");for(var L=this._getDefaultDate(a),I="",D=0;D<i[0];D++){for(var M="",E=0;E<i[1];E++){var N=this._daylightSavingAdjust(new Date(m,g,a.selectedDay)),t=" ui-corner-all",x="";if(l){x+='<div class="ui-datepicker-group';if(i[1]>1)switch(E){case 0:x+=" ui-datepicker-group-first";t=" ui-corner-"+(c?"right":"left");break;case i[1]-
1:x+=" ui-datepicker-group-last";t=" ui-corner-"+(c?"left":"right");break;default:x+=" ui-datepicker-group-middle";t="";break}x+='">'}x+='<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix'+t+'">'+(/all|left/.test(t)&&D==0?c?f:n:"")+(/all|right/.test(t)&&D==0?c?n:f:"")+this._generateMonthYearHeader(a,g,m,k,o,D>0||E>0,z,w)+'</div><table class="ui-datepicker-calendar"><thead><tr>';var B=j?'<th class="ui-datepicker-week-col">'+this._get(a,"weekHeader")+"</th>":"";for(t=0;t<7;t++){var q=
(t+h)%7;B+="<th"+((t+h+6)%7>=5?' class="ui-datepicker-week-end"':"")+'><span title="'+r[q]+'">'+s[q]+"</span></th>"}x+=B+"</tr></thead><tbody>";B=this._getDaysInMonth(m,g);if(m==a.selectedYear&&g==a.selectedMonth)a.selectedDay=Math.min(a.selectedDay,B);t=(this._getFirstDayOfMonth(m,g)-h+7)%7;B=l?6:Math.ceil((t+B)/7);q=this._daylightSavingAdjust(new Date(m,g,1-t));for(var O=0;O<B;O++){x+="<tr>";var P=!j?"":'<td class="ui-datepicker-week-col">'+this._get(a,"calculateWeek")(q)+"</td>";for(t=0;t<7;t++){var G=
p?p.apply(a.input?a.input[0]:null,[q]):[true,""],C=q.getMonth()!=g,J=C&&!H||!G[0]||k&&q<k||o&&q>o;P+='<td class="'+((t+h+6)%7>=5?" ui-datepicker-week-end":"")+(C?" ui-datepicker-other-month":"")+(q.getTime()==N.getTime()&&g==a.selectedMonth&&a._keyEvent||L.getTime()==q.getTime()&&L.getTime()==N.getTime()?" "+this._dayOverClass:"")+(J?" "+this._unselectableClass+" ui-state-disabled":"")+(C&&!v?"":" "+G[1]+(q.getTime()==u.getTime()?" "+this._currentClass:"")+(q.getTime()==b.getTime()?" ui-datepicker-today":
""))+'"'+((!C||v)&&G[2]?' title="'+G[2]+'"':"")+(J?"":' onclick="DP_jQuery_'+y+".datepicker._selectDay('#"+a.id+"',"+q.getMonth()+","+q.getFullYear()+', this);return false;"')+">"+(C&&!v?"&#xa0;":J?'<span class="ui-state-default">'+q.getDate()+"</span>":'<a class="ui-state-default'+(q.getTime()==b.getTime()?" ui-state-highlight":"")+(q.getTime()==u.getTime()?" ui-state-active":"")+(C?" ui-priority-secondary":"")+'" href="#">'+q.getDate()+"</a>")+"</td>";q.setDate(q.getDate()+1);q=this._daylightSavingAdjust(q)}x+=
P+"</tr>"}g++;if(g>11){g=0;m++}x+="</tbody></table>"+(l?"</div>"+(i[0]>0&&E==i[1]-1?'<div class="ui-datepicker-row-break"></div>':""):"");M+=x}I+=M}I+=e+(d.browser.msie&&parseInt(d.browser.version,10)<7&&!a.inline?'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>':"");a._keyEvent=false;return I},_generateMonthYearHeader:function(a,b,c,e,f,h,i,g){var j=this._get(a,"changeMonth"),l=this._get(a,"changeYear"),u=this._get(a,"showMonthAfterYear"),k='<div class="ui-datepicker-title">',
o="";if(h||!j)o+='<span class="ui-datepicker-month">'+i[b]+"</span>";else{i=e&&e.getFullYear()==c;var m=f&&f.getFullYear()==c;o+='<select class="ui-datepicker-month" onchange="DP_jQuery_'+y+".datepicker._selectMonthYear('#"+a.id+"', this, 'M');\" onclick=\"DP_jQuery_"+y+".datepicker._clickMonthYear('#"+a.id+"');\">";for(var n=0;n<12;n++)if((!i||n>=e.getMonth())&&(!m||n<=f.getMonth()))o+='<option value="'+n+'"'+(n==b?' selected="selected"':"")+">"+g[n]+"</option>";o+="</select>"}u||(k+=o+(h||!(j&&
l)?"&#xa0;":""));a.yearshtml="";if(h||!l)k+='<span class="ui-datepicker-year">'+c+"</span>";else{g=this._get(a,"yearRange").split(":");var r=(new Date).getFullYear();i=function(s){s=s.match(/c[+-].*/)?c+parseInt(s.substring(1),10):s.match(/[+-].*/)?r+parseInt(s,10):parseInt(s,10);return isNaN(s)?r:s};b=i(g[0]);g=Math.max(b,i(g[1]||""));b=e?Math.max(b,e.getFullYear()):b;g=f?Math.min(g,f.getFullYear()):g;for(a.yearshtml+='<select class="ui-datepicker-year" onchange="DP_jQuery_'+y+".datepicker._selectMonthYear('#"+
a.id+"', this, 'Y');\" onclick=\"DP_jQuery_"+y+".datepicker._clickMonthYear('#"+a.id+"');\">";b<=g;b++)a.yearshtml+='<option value="'+b+'"'+(b==c?' selected="selected"':"")+">"+b+"</option>";a.yearshtml+="</select>";if(d.browser.mozilla)k+='<select class="ui-datepicker-year"><option value="'+c+'" selected="selected">'+c+"</option></select>";else{k+=a.yearshtml;a.yearshtml=null}}k+=this._get(a,"yearSuffix");if(u)k+=(h||!(j&&l)?"&#xa0;":"")+o;k+="</div>";return k},_adjustInstDate:function(a,b,c){var e=
a.drawYear+(c=="Y"?b:0),f=a.drawMonth+(c=="M"?b:0);b=Math.min(a.selectedDay,this._getDaysInMonth(e,f))+(c=="D"?b:0);e=this._restrictMinMax(a,this._daylightSavingAdjust(new Date(e,f,b)));a.selectedDay=e.getDate();a.drawMonth=a.selectedMonth=e.getMonth();a.drawYear=a.selectedYear=e.getFullYear();if(c=="M"||c=="Y")this._notifyChange(a)},_restrictMinMax:function(a,b){var c=this._getMinMaxDate(a,"min");a=this._getMinMaxDate(a,"max");b=c&&b<c?c:b;return b=a&&b>a?a:b},_notifyChange:function(a){var b=this._get(a,
"onChangeMonthYear");if(b)b.apply(a.input?a.input[0]:null,[a.selectedYear,a.selectedMonth+1,a])},_getNumberOfMonths:function(a){a=this._get(a,"numberOfMonths");return a==null?[1,1]:typeof a=="number"?[1,a]:a},_getMinMaxDate:function(a,b){return this._determineDate(a,this._get(a,b+"Date"),null)},_getDaysInMonth:function(a,b){return 32-this._daylightSavingAdjust(new Date(a,b,32)).getDate()},_getFirstDayOfMonth:function(a,b){return(new Date(a,b,1)).getDay()},_canAdjustMonth:function(a,b,c,e){var f=this._getNumberOfMonths(a);
c=this._daylightSavingAdjust(new Date(c,e+(b<0?b:f[0]*f[1]),1));b<0&&c.setDate(this._getDaysInMonth(c.getFullYear(),c.getMonth()));return this._isInRange(a,c)},_isInRange:function(a,b){var c=this._getMinMaxDate(a,"min");a=this._getMinMaxDate(a,"max");return(!c||b.getTime()>=c.getTime())&&(!a||b.getTime()<=a.getTime())},_getFormatConfig:function(a){var b=this._get(a,"shortYearCutoff");b=typeof b!="string"?b:(new Date).getFullYear()%100+parseInt(b,10);return{shortYearCutoff:b,dayNamesShort:this._get(a,
"dayNamesShort"),dayNames:this._get(a,"dayNames"),monthNamesShort:this._get(a,"monthNamesShort"),monthNames:this._get(a,"monthNames")}},_formatDate:function(a,b,c,e){if(!b){a.currentDay=a.selectedDay;a.currentMonth=a.selectedMonth;a.currentYear=a.selectedYear}b=b?typeof b=="object"?b:this._daylightSavingAdjust(new Date(e,c,b)):this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return this.formatDate(this._get(a,"dateFormat"),b,this._getFormatConfig(a))}});d.fn.datepicker=
function(a){if(!this.length)return this;if(!d.datepicker.initialized){d(document).mousedown(d.datepicker._checkExternalClick).find("body").append(d.datepicker.dpDiv);d.datepicker.initialized=true}var b=Array.prototype.slice.call(arguments,1);if(typeof a=="string"&&(a=="isDisabled"||a=="getDate"||a=="widget"))return d.datepicker["_"+a+"Datepicker"].apply(d.datepicker,[this[0]].concat(b));if(a=="option"&&arguments.length==2&&typeof arguments[1]=="string")return d.datepicker["_"+a+"Datepicker"].apply(d.datepicker,
[this[0]].concat(b));return this.each(function(){typeof a=="string"?d.datepicker["_"+a+"Datepicker"].apply(d.datepicker,[this].concat(b)):d.datepicker._attachDatepicker(this,a)})};d.datepicker=new K;d.datepicker.initialized=false;d.datepicker.uuid=(new Date).getTime();d.datepicker.version="1.8.11";window["DP_jQuery_"+y]=d})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/*
 * jQuery UI Position 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Position
 */
(function(c){c.ui=c.ui||{};var n=/left|center|right/,o=/top|center|bottom/,t=c.fn.position,u=c.fn.offset;c.fn.position=function(b){if(!b||!b.of)return t.apply(this,arguments);b=c.extend({},b);var a=c(b.of),d=a[0],g=(b.collision||"flip").split(" "),e=b.offset?b.offset.split(" "):[0,0],h,k,j;if(d.nodeType===9){h=a.width();k=a.height();j={top:0,left:0}}else if(d.setTimeout){h=a.width();k=a.height();j={top:a.scrollTop(),left:a.scrollLeft()}}else if(d.preventDefault){b.at="left top";h=k=0;j={top:b.of.pageY,
left:b.of.pageX}}else{h=a.outerWidth();k=a.outerHeight();j=a.offset()}c.each(["my","at"],function(){var f=(b[this]||"").split(" ");if(f.length===1)f=n.test(f[0])?f.concat(["center"]):o.test(f[0])?["center"].concat(f):["center","center"];f[0]=n.test(f[0])?f[0]:"center";f[1]=o.test(f[1])?f[1]:"center";b[this]=f});if(g.length===1)g[1]=g[0];e[0]=parseInt(e[0],10)||0;if(e.length===1)e[1]=e[0];e[1]=parseInt(e[1],10)||0;if(b.at[0]==="right")j.left+=h;else if(b.at[0]==="center")j.left+=h/2;if(b.at[1]==="bottom")j.top+=
k;else if(b.at[1]==="center")j.top+=k/2;j.left+=e[0];j.top+=e[1];return this.each(function(){var f=c(this),l=f.outerWidth(),m=f.outerHeight(),p=parseInt(c.curCSS(this,"marginLeft",true))||0,q=parseInt(c.curCSS(this,"marginTop",true))||0,v=l+p+(parseInt(c.curCSS(this,"marginRight",true))||0),w=m+q+(parseInt(c.curCSS(this,"marginBottom",true))||0),i=c.extend({},j),r;if(b.my[0]==="right")i.left-=l;else if(b.my[0]==="center")i.left-=l/2;if(b.my[1]==="bottom")i.top-=m;else if(b.my[1]==="center")i.top-=
m/2;i.left=Math.round(i.left);i.top=Math.round(i.top);r={left:i.left-p,top:i.top-q};c.each(["left","top"],function(s,x){c.ui.position[g[s]]&&c.ui.position[g[s]][x](i,{targetWidth:h,targetHeight:k,elemWidth:l,elemHeight:m,collisionPosition:r,collisionWidth:v,collisionHeight:w,offset:e,my:b.my,at:b.at})});c.fn.bgiframe&&f.bgiframe();f.offset(c.extend(i,{using:b.using}))})};c.ui.position={fit:{left:function(b,a){var d=c(window);d=a.collisionPosition.left+a.collisionWidth-d.width()-d.scrollLeft();b.left=
d>0?b.left-d:Math.max(b.left-a.collisionPosition.left,b.left)},top:function(b,a){var d=c(window);d=a.collisionPosition.top+a.collisionHeight-d.height()-d.scrollTop();b.top=d>0?b.top-d:Math.max(b.top-a.collisionPosition.top,b.top)}},flip:{left:function(b,a){if(a.at[0]!=="center"){var d=c(window);d=a.collisionPosition.left+a.collisionWidth-d.width()-d.scrollLeft();var g=a.my[0]==="left"?-a.elemWidth:a.my[0]==="right"?a.elemWidth:0,e=a.at[0]==="left"?a.targetWidth:-a.targetWidth,h=-2*a.offset[0];b.left+=
a.collisionPosition.left<0?g+e+h:d>0?g+e+h:0}},top:function(b,a){if(a.at[1]!=="center"){var d=c(window);d=a.collisionPosition.top+a.collisionHeight-d.height()-d.scrollTop();var g=a.my[1]==="top"?-a.elemHeight:a.my[1]==="bottom"?a.elemHeight:0,e=a.at[1]==="top"?a.targetHeight:-a.targetHeight,h=-2*a.offset[1];b.top+=a.collisionPosition.top<0?g+e+h:d>0?g+e+h:0}}}};if(!c.offset.setOffset){c.offset.setOffset=function(b,a){if(/static/.test(c.curCSS(b,"position")))b.style.position="relative";var d=c(b),
g=d.offset(),e=parseInt(c.curCSS(b,"top",true),10)||0,h=parseInt(c.curCSS(b,"left",true),10)||0;g={top:a.top-g.top+e,left:a.left-g.left+h};"using"in a?a.using.call(b,g):d.css(g)};c.fn.offset=function(b){var a=this[0];if(!a||!a.ownerDocument)return null;if(b)return this.each(function(){c.offset.setOffset(this,b)});return u.call(this)}}})(jQuery);
;/*
 * jQuery UI Droppable 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Droppables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	jquery.ui.mouse.js
 *	jquery.ui.draggable.js
 */
(function(d){d.widget("ui.droppable",{widgetEventPrefix:"drop",options:{accept:"*",activeClass:false,addClasses:true,greedy:false,hoverClass:false,scope:"default",tolerance:"intersect"},_create:function(){var a=this.options,b=a.accept;this.isover=0;this.isout=1;this.accept=d.isFunction(b)?b:function(c){return c.is(b)};this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight};d.ui.ddmanager.droppables[a.scope]=d.ui.ddmanager.droppables[a.scope]||[];d.ui.ddmanager.droppables[a.scope].push(this);
a.addClasses&&this.element.addClass("ui-droppable")},destroy:function(){for(var a=d.ui.ddmanager.droppables[this.options.scope],b=0;b<a.length;b++)a[b]==this&&a.splice(b,1);this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable");return this},_setOption:function(a,b){if(a=="accept")this.accept=d.isFunction(b)?b:function(c){return c.is(b)};d.Widget.prototype._setOption.apply(this,arguments)},_activate:function(a){var b=d.ui.ddmanager.current;this.options.activeClass&&
this.element.addClass(this.options.activeClass);b&&this._trigger("activate",a,this.ui(b))},_deactivate:function(a){var b=d.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass);b&&this._trigger("deactivate",a,this.ui(b))},_over:function(a){var b=d.ui.ddmanager.current;if(!(!b||(b.currentItem||b.element)[0]==this.element[0]))if(this.accept.call(this.element[0],b.currentItem||b.element)){this.options.hoverClass&&this.element.addClass(this.options.hoverClass);
this._trigger("over",a,this.ui(b))}},_out:function(a){var b=d.ui.ddmanager.current;if(!(!b||(b.currentItem||b.element)[0]==this.element[0]))if(this.accept.call(this.element[0],b.currentItem||b.element)){this.options.hoverClass&&this.element.removeClass(this.options.hoverClass);this._trigger("out",a,this.ui(b))}},_drop:function(a,b){var c=b||d.ui.ddmanager.current;if(!c||(c.currentItem||c.element)[0]==this.element[0])return false;var e=false;this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function(){var g=
d.data(this,"droppable");if(g.options.greedy&&!g.options.disabled&&g.options.scope==c.options.scope&&g.accept.call(g.element[0],c.currentItem||c.element)&&d.ui.intersect(c,d.extend(g,{offset:g.element.offset()}),g.options.tolerance)){e=true;return false}});if(e)return false;if(this.accept.call(this.element[0],c.currentItem||c.element)){this.options.activeClass&&this.element.removeClass(this.options.activeClass);this.options.hoverClass&&this.element.removeClass(this.options.hoverClass);this._trigger("drop",
a,this.ui(c));return this.element}return false},ui:function(a){return{draggable:a.currentItem||a.element,helper:a.helper,position:a.position,offset:a.positionAbs}}});d.extend(d.ui.droppable,{version:"1.8.11"});d.ui.intersect=function(a,b,c){if(!b.offset)return false;var e=(a.positionAbs||a.position.absolute).left,g=e+a.helperProportions.width,f=(a.positionAbs||a.position.absolute).top,h=f+a.helperProportions.height,i=b.offset.left,k=i+b.proportions.width,j=b.offset.top,l=j+b.proportions.height;
switch(c){case "fit":return i<=e&&g<=k&&j<=f&&h<=l;case "intersect":return i<e+a.helperProportions.width/2&&g-a.helperProportions.width/2<k&&j<f+a.helperProportions.height/2&&h-a.helperProportions.height/2<l;case "pointer":return d.ui.isOver((a.positionAbs||a.position.absolute).top+(a.clickOffset||a.offset.click).top,(a.positionAbs||a.position.absolute).left+(a.clickOffset||a.offset.click).left,j,i,b.proportions.height,b.proportions.width);case "touch":return(f>=j&&f<=l||h>=j&&h<=l||f<j&&h>l)&&(e>=
i&&e<=k||g>=i&&g<=k||e<i&&g>k);default:return false}};d.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(a,b){var c=d.ui.ddmanager.droppables[a.options.scope]||[],e=b?b.type:null,g=(a.currentItem||a.element).find(":data(droppable)").andSelf(),f=0;a:for(;f<c.length;f++)if(!(c[f].options.disabled||a&&!c[f].accept.call(c[f].element[0],a.currentItem||a.element))){for(var h=0;h<g.length;h++)if(g[h]==c[f].element[0]){c[f].proportions.height=0;continue a}c[f].visible=c[f].element.css("display")!=
"none";if(c[f].visible){e=="mousedown"&&c[f]._activate.call(c[f],b);c[f].offset=c[f].element.offset();c[f].proportions={width:c[f].element[0].offsetWidth,height:c[f].element[0].offsetHeight}}}},drop:function(a,b){var c=false;d.each(d.ui.ddmanager.droppables[a.options.scope]||[],function(){if(this.options){if(!this.options.disabled&&this.visible&&d.ui.intersect(a,this,this.options.tolerance))c=c||this._drop.call(this,b);if(!this.options.disabled&&this.visible&&this.accept.call(this.element[0],a.currentItem||
a.element)){this.isout=1;this.isover=0;this._deactivate.call(this,b)}}});return c},drag:function(a,b){a.options.refreshPositions&&d.ui.ddmanager.prepareOffsets(a,b);d.each(d.ui.ddmanager.droppables[a.options.scope]||[],function(){if(!(this.options.disabled||this.greedyChild||!this.visible)){var c=d.ui.intersect(a,this,this.options.tolerance);if(c=!c&&this.isover==1?"isout":c&&this.isover==0?"isover":null){var e;if(this.options.greedy){var g=this.element.parents(":data(droppable):eq(0)");if(g.length){e=
d.data(g[0],"droppable");e.greedyChild=c=="isover"?1:0}}if(e&&c=="isover"){e.isover=0;e.isout=1;e._out.call(e,b)}this[c]=1;this[c=="isout"?"isover":"isout"]=0;this[c=="isover"?"_over":"_out"].call(this,b);if(e&&c=="isout"){e.isout=0;e.isover=1;e._over.call(e,b)}}}})}}})(jQuery);
;/*
 * jQuery UI Resizable 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Resizables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(e){e.widget("ui.resizable",e.ui.mouse,{widgetEventPrefix:"resize",options:{alsoResize:false,animate:false,animateDuration:"slow",animateEasing:"swing",aspectRatio:false,autoHide:false,containment:false,ghost:false,grid:false,handles:"e,s,se",helper:false,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:1E3},_create:function(){var b=this,a=this.options;this.element.addClass("ui-resizable");e.extend(this,{_aspectRatio:!!a.aspectRatio,aspectRatio:a.aspectRatio,originalElement:this.element,
_proportionallyResizeElements:[],_helper:a.helper||a.ghost||a.animate?a.helper||"ui-resizable-helper":null});if(this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)){/relative/.test(this.element.css("position"))&&e.browser.opera&&this.element.css({position:"relative",top:"auto",left:"auto"});this.element.wrap(e('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),
top:this.element.css("top"),left:this.element.css("left")}));this.element=this.element.parent().data("resizable",this.element.data("resizable"));this.elementIsWrapper=true;this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")});this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0});this.originalResizeStyle=
this.originalElement.css("resize");this.originalElement.css("resize","none");this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"}));this.originalElement.css({margin:this.originalElement.css("margin")});this._proportionallyResize()}this.handles=a.handles||(!e(".ui-resizable-handle",this.element).length?"e,s,se":{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",
nw:".ui-resizable-nw"});if(this.handles.constructor==String){if(this.handles=="all")this.handles="n,e,s,w,se,sw,ne,nw";var c=this.handles.split(",");this.handles={};for(var d=0;d<c.length;d++){var f=e.trim(c[d]),g=e('<div class="ui-resizable-handle '+("ui-resizable-"+f)+'"></div>');/sw|se|ne|nw/.test(f)&&g.css({zIndex:++a.zIndex});"se"==f&&g.addClass("ui-icon ui-icon-gripsmall-diagonal-se");this.handles[f]=".ui-resizable-"+f;this.element.append(g)}}this._renderAxis=function(h){h=h||this.element;for(var i in this.handles){if(this.handles[i].constructor==
String)this.handles[i]=e(this.handles[i],this.element).show();if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){var j=e(this.handles[i],this.element),k=0;k=/sw|ne|nw|se|n|s/.test(i)?j.outerHeight():j.outerWidth();j=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join("");h.css(j,k);this._proportionallyResize()}e(this.handles[i])}};this._renderAxis(this.element);this._handles=e(".ui-resizable-handle",this.element).disableSelection();
this._handles.mouseover(function(){if(!b.resizing){if(this.className)var h=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);b.axis=h&&h[1]?h[1]:"se"}});if(a.autoHide){this._handles.hide();e(this.element).addClass("ui-resizable-autohide").hover(function(){e(this).removeClass("ui-resizable-autohide");b._handles.show()},function(){if(!b.resizing){e(this).addClass("ui-resizable-autohide");b._handles.hide()}})}this._mouseInit()},destroy:function(){this._mouseDestroy();var b=function(c){e(c).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};
if(this.elementIsWrapper){b(this.element);var a=this.element;a.after(this.originalElement.css({position:a.css("position"),width:a.outerWidth(),height:a.outerHeight(),top:a.css("top"),left:a.css("left")})).remove()}this.originalElement.css("resize",this.originalResizeStyle);b(this.originalElement);return this},_mouseCapture:function(b){var a=false;for(var c in this.handles)if(e(this.handles[c])[0]==b.target)a=true;return!this.options.disabled&&a},_mouseStart:function(b){var a=this.options,c=this.element.position(),
d=this.element;this.resizing=true;this.documentScroll={top:e(document).scrollTop(),left:e(document).scrollLeft()};if(d.is(".ui-draggable")||/absolute/.test(d.css("position")))d.css({position:"absolute",top:c.top,left:c.left});e.browser.opera&&/relative/.test(d.css("position"))&&d.css({position:"relative",top:"auto",left:"auto"});this._renderProxy();c=m(this.helper.css("left"));var f=m(this.helper.css("top"));if(a.containment){c+=e(a.containment).scrollLeft()||0;f+=e(a.containment).scrollTop()||0}this.offset=
this.helper.offset();this.position={left:c,top:f};this.size=this._helper?{width:d.outerWidth(),height:d.outerHeight()}:{width:d.width(),height:d.height()};this.originalSize=this._helper?{width:d.outerWidth(),height:d.outerHeight()}:{width:d.width(),height:d.height()};this.originalPosition={left:c,top:f};this.sizeDiff={width:d.outerWidth()-d.width(),height:d.outerHeight()-d.height()};this.originalMousePosition={left:b.pageX,top:b.pageY};this.aspectRatio=typeof a.aspectRatio=="number"?a.aspectRatio:
this.originalSize.width/this.originalSize.height||1;a=e(".ui-resizable-"+this.axis).css("cursor");e("body").css("cursor",a=="auto"?this.axis+"-resize":a);d.addClass("ui-resizable-resizing");this._propagate("start",b);return true},_mouseDrag:function(b){var a=this.helper,c=this.originalMousePosition,d=this._change[this.axis];if(!d)return false;c=d.apply(this,[b,b.pageX-c.left||0,b.pageY-c.top||0]);if(this._aspectRatio||b.shiftKey)c=this._updateRatio(c,b);c=this._respectSize(c,b);this._propagate("resize",
b);a.css({top:this.position.top+"px",left:this.position.left+"px",width:this.size.width+"px",height:this.size.height+"px"});!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize();this._updateCache(c);this._trigger("resize",b,this.ui());return false},_mouseStop:function(b){this.resizing=false;var a=this.options,c=this;if(this._helper){var d=this._proportionallyResizeElements,f=d.length&&/textarea/i.test(d[0].nodeName);d=f&&e.ui.hasScroll(d[0],"left")?0:c.sizeDiff.height;
f=f?0:c.sizeDiff.width;f={width:c.helper.width()-f,height:c.helper.height()-d};d=parseInt(c.element.css("left"),10)+(c.position.left-c.originalPosition.left)||null;var g=parseInt(c.element.css("top"),10)+(c.position.top-c.originalPosition.top)||null;a.animate||this.element.css(e.extend(f,{top:g,left:d}));c.helper.height(c.size.height);c.helper.width(c.size.width);this._helper&&!a.animate&&this._proportionallyResize()}e("body").css("cursor","auto");this.element.removeClass("ui-resizable-resizing");
this._propagate("stop",b);this._helper&&this.helper.remove();return false},_updateCache:function(b){this.offset=this.helper.offset();if(l(b.left))this.position.left=b.left;if(l(b.top))this.position.top=b.top;if(l(b.height))this.size.height=b.height;if(l(b.width))this.size.width=b.width},_updateRatio:function(b){var a=this.position,c=this.size,d=this.axis;if(b.height)b.width=c.height*this.aspectRatio;else if(b.width)b.height=c.width/this.aspectRatio;if(d=="sw"){b.left=a.left+(c.width-b.width);b.top=
null}if(d=="nw"){b.top=a.top+(c.height-b.height);b.left=a.left+(c.width-b.width)}return b},_respectSize:function(b){var a=this.options,c=this.axis,d=l(b.width)&&a.maxWidth&&a.maxWidth<b.width,f=l(b.height)&&a.maxHeight&&a.maxHeight<b.height,g=l(b.width)&&a.minWidth&&a.minWidth>b.width,h=l(b.height)&&a.minHeight&&a.minHeight>b.height;if(g)b.width=a.minWidth;if(h)b.height=a.minHeight;if(d)b.width=a.maxWidth;if(f)b.height=a.maxHeight;var i=this.originalPosition.left+this.originalSize.width,j=this.position.top+
this.size.height,k=/sw|nw|w/.test(c);c=/nw|ne|n/.test(c);if(g&&k)b.left=i-a.minWidth;if(d&&k)b.left=i-a.maxWidth;if(h&&c)b.top=j-a.minHeight;if(f&&c)b.top=j-a.maxHeight;if((a=!b.width&&!b.height)&&!b.left&&b.top)b.top=null;else if(a&&!b.top&&b.left)b.left=null;return b},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var b=this.helper||this.element,a=0;a<this._proportionallyResizeElements.length;a++){var c=this._proportionallyResizeElements[a];if(!this.borderDif){var d=
[c.css("borderTopWidth"),c.css("borderRightWidth"),c.css("borderBottomWidth"),c.css("borderLeftWidth")],f=[c.css("paddingTop"),c.css("paddingRight"),c.css("paddingBottom"),c.css("paddingLeft")];this.borderDif=e.map(d,function(g,h){g=parseInt(g,10)||0;h=parseInt(f[h],10)||0;return g+h})}e.browser.msie&&(e(b).is(":hidden")||e(b).parents(":hidden").length)||c.css({height:b.height()-this.borderDif[0]-this.borderDif[2]||0,width:b.width()-this.borderDif[1]-this.borderDif[3]||0})}},_renderProxy:function(){var b=
this.options;this.elementOffset=this.element.offset();if(this._helper){this.helper=this.helper||e('<div style="overflow:hidden;"></div>');var a=e.browser.msie&&e.browser.version<7,c=a?1:0;a=a?2:-1;this.helper.addClass(this._helper).css({width:this.element.outerWidth()+a,height:this.element.outerHeight()+a,position:"absolute",left:this.elementOffset.left-c+"px",top:this.elementOffset.top-c+"px",zIndex:++b.zIndex});this.helper.appendTo("body").disableSelection()}else this.helper=this.element},_change:{e:function(b,
a){return{width:this.originalSize.width+a}},w:function(b,a){return{left:this.originalPosition.left+a,width:this.originalSize.width-a}},n:function(b,a,c){return{top:this.originalPosition.top+c,height:this.originalSize.height-c}},s:function(b,a,c){return{height:this.originalSize.height+c}},se:function(b,a,c){return e.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[b,a,c]))},sw:function(b,a,c){return e.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[b,a,
c]))},ne:function(b,a,c){return e.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[b,a,c]))},nw:function(b,a,c){return e.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[b,a,c]))}},_propagate:function(b,a){e.ui.plugin.call(this,b,[a,this.ui()]);b!="resize"&&this._trigger(b,a,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,
originalPosition:this.originalPosition}}});e.extend(e.ui.resizable,{version:"1.8.11"});e.ui.plugin.add("resizable","alsoResize",{start:function(){var b=e(this).data("resizable").options,a=function(c){e(c).each(function(){var d=e(this);d.data("resizable-alsoresize",{width:parseInt(d.width(),10),height:parseInt(d.height(),10),left:parseInt(d.css("left"),10),top:parseInt(d.css("top"),10),position:d.css("position")})})};if(typeof b.alsoResize=="object"&&!b.alsoResize.parentNode)if(b.alsoResize.length){b.alsoResize=
b.alsoResize[0];a(b.alsoResize)}else e.each(b.alsoResize,function(c){a(c)});else a(b.alsoResize)},resize:function(b,a){var c=e(this).data("resizable");b=c.options;var d=c.originalSize,f=c.originalPosition,g={height:c.size.height-d.height||0,width:c.size.width-d.width||0,top:c.position.top-f.top||0,left:c.position.left-f.left||0},h=function(i,j){e(i).each(function(){var k=e(this),q=e(this).data("resizable-alsoresize"),p={},r=j&&j.length?j:k.parents(a.originalElement[0]).length?["width","height"]:["width",
"height","top","left"];e.each(r,function(n,o){if((n=(q[o]||0)+(g[o]||0))&&n>=0)p[o]=n||null});if(e.browser.opera&&/relative/.test(k.css("position"))){c._revertToRelativePosition=true;k.css({position:"absolute",top:"auto",left:"auto"})}k.css(p)})};typeof b.alsoResize=="object"&&!b.alsoResize.nodeType?e.each(b.alsoResize,function(i,j){h(i,j)}):h(b.alsoResize)},stop:function(){var b=e(this).data("resizable"),a=b.options,c=function(d){e(d).each(function(){var f=e(this);f.css({position:f.data("resizable-alsoresize").position})})};
if(b._revertToRelativePosition){b._revertToRelativePosition=false;typeof a.alsoResize=="object"&&!a.alsoResize.nodeType?e.each(a.alsoResize,function(d){c(d)}):c(a.alsoResize)}e(this).removeData("resizable-alsoresize")}});e.ui.plugin.add("resizable","animate",{stop:function(b){var a=e(this).data("resizable"),c=a.options,d=a._proportionallyResizeElements,f=d.length&&/textarea/i.test(d[0].nodeName),g=f&&e.ui.hasScroll(d[0],"left")?0:a.sizeDiff.height;f={width:a.size.width-(f?0:a.sizeDiff.width),height:a.size.height-
g};g=parseInt(a.element.css("left"),10)+(a.position.left-a.originalPosition.left)||null;var h=parseInt(a.element.css("top"),10)+(a.position.top-a.originalPosition.top)||null;a.element.animate(e.extend(f,h&&g?{top:h,left:g}:{}),{duration:c.animateDuration,easing:c.animateEasing,step:function(){var i={width:parseInt(a.element.css("width"),10),height:parseInt(a.element.css("height"),10),top:parseInt(a.element.css("top"),10),left:parseInt(a.element.css("left"),10)};d&&d.length&&e(d[0]).css({width:i.width,
height:i.height});a._updateCache(i);a._propagate("resize",b)}})}});e.ui.plugin.add("resizable","containment",{start:function(){var b=e(this).data("resizable"),a=b.element,c=b.options.containment;if(a=c instanceof e?c.get(0):/parent/.test(c)?a.parent().get(0):c){b.containerElement=e(a);if(/document/.test(c)||c==document){b.containerOffset={left:0,top:0};b.containerPosition={left:0,top:0};b.parentData={element:e(document),left:0,top:0,width:e(document).width(),height:e(document).height()||document.body.parentNode.scrollHeight}}else{var d=
e(a),f=[];e(["Top","Right","Left","Bottom"]).each(function(i,j){f[i]=m(d.css("padding"+j))});b.containerOffset=d.offset();b.containerPosition=d.position();b.containerSize={height:d.innerHeight()-f[3],width:d.innerWidth()-f[1]};c=b.containerOffset;var g=b.containerSize.height,h=b.containerSize.width;h=e.ui.hasScroll(a,"left")?a.scrollWidth:h;g=e.ui.hasScroll(a)?a.scrollHeight:g;b.parentData={element:a,left:c.left,top:c.top,width:h,height:g}}}},resize:function(b){var a=e(this).data("resizable"),c=a.options,
d=a.containerOffset,f=a.position;b=a._aspectRatio||b.shiftKey;var g={top:0,left:0},h=a.containerElement;if(h[0]!=document&&/static/.test(h.css("position")))g=d;if(f.left<(a._helper?d.left:0)){a.size.width+=a._helper?a.position.left-d.left:a.position.left-g.left;if(b)a.size.height=a.size.width/c.aspectRatio;a.position.left=c.helper?d.left:0}if(f.top<(a._helper?d.top:0)){a.size.height+=a._helper?a.position.top-d.top:a.position.top;if(b)a.size.width=a.size.height*c.aspectRatio;a.position.top=a._helper?
d.top:0}a.offset.left=a.parentData.left+a.position.left;a.offset.top=a.parentData.top+a.position.top;c=Math.abs((a._helper?a.offset.left-g.left:a.offset.left-g.left)+a.sizeDiff.width);d=Math.abs((a._helper?a.offset.top-g.top:a.offset.top-d.top)+a.sizeDiff.height);f=a.containerElement.get(0)==a.element.parent().get(0);g=/relative|absolute/.test(a.containerElement.css("position"));if(f&&g)c-=a.parentData.left;if(c+a.size.width>=a.parentData.width){a.size.width=a.parentData.width-c;if(b)a.size.height=
a.size.width/a.aspectRatio}if(d+a.size.height>=a.parentData.height){a.size.height=a.parentData.height-d;if(b)a.size.width=a.size.height*a.aspectRatio}},stop:function(){var b=e(this).data("resizable"),a=b.options,c=b.containerOffset,d=b.containerPosition,f=b.containerElement,g=e(b.helper),h=g.offset(),i=g.outerWidth()-b.sizeDiff.width;g=g.outerHeight()-b.sizeDiff.height;b._helper&&!a.animate&&/relative/.test(f.css("position"))&&e(this).css({left:h.left-d.left-c.left,width:i,height:g});b._helper&&!a.animate&&
/static/.test(f.css("position"))&&e(this).css({left:h.left-d.left-c.left,width:i,height:g})}});e.ui.plugin.add("resizable","ghost",{start:function(){var b=e(this).data("resizable"),a=b.options,c=b.size;b.ghost=b.originalElement.clone();b.ghost.css({opacity:0.25,display:"block",position:"relative",height:c.height,width:c.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof a.ghost=="string"?a.ghost:"");b.ghost.appendTo(b.helper)},resize:function(){var b=e(this).data("resizable");
b.ghost&&b.ghost.css({position:"relative",height:b.size.height,width:b.size.width})},stop:function(){var b=e(this).data("resizable");b.ghost&&b.helper&&b.helper.get(0).removeChild(b.ghost.get(0))}});e.ui.plugin.add("resizable","grid",{resize:function(){var b=e(this).data("resizable"),a=b.options,c=b.size,d=b.originalSize,f=b.originalPosition,g=b.axis;a.grid=typeof a.grid=="number"?[a.grid,a.grid]:a.grid;var h=Math.round((c.width-d.width)/(a.grid[0]||1))*(a.grid[0]||1);a=Math.round((c.height-d.height)/
(a.grid[1]||1))*(a.grid[1]||1);if(/^(se|s|e)$/.test(g)){b.size.width=d.width+h;b.size.height=d.height+a}else if(/^(ne)$/.test(g)){b.size.width=d.width+h;b.size.height=d.height+a;b.position.top=f.top-a}else{if(/^(sw)$/.test(g)){b.size.width=d.width+h;b.size.height=d.height+a}else{b.size.width=d.width+h;b.size.height=d.height+a;b.position.top=f.top-a}b.position.left=f.left-h}}});var m=function(b){return parseInt(b,10)||0},l=function(b){return!isNaN(parseInt(b,10))}})(jQuery);
;/*
 * jQuery UI Selectable 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Selectables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(e){e.widget("ui.selectable",e.ui.mouse,{options:{appendTo:"body",autoRefresh:true,distance:0,filter:"*",tolerance:"touch"},_create:function(){var c=this;this.element.addClass("ui-selectable");this.dragged=false;var f;this.refresh=function(){f=e(c.options.filter,c.element[0]);f.each(function(){var d=e(this),b=d.offset();e.data(this,"selectable-item",{element:this,$element:d,left:b.left,top:b.top,right:b.left+d.outerWidth(),bottom:b.top+d.outerHeight(),startselected:false,selected:d.hasClass("ui-selected"),
selecting:d.hasClass("ui-selecting"),unselecting:d.hasClass("ui-unselecting")})})};this.refresh();this.selectees=f.addClass("ui-selectee");this._mouseInit();this.helper=e("<div class='ui-selectable-helper'></div>")},destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item");this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable");this._mouseDestroy();return this},_mouseStart:function(c){var f=this;this.opos=[c.pageX,
c.pageY];if(!this.options.disabled){var d=this.options;this.selectees=e(d.filter,this.element[0]);this._trigger("start",c);e(d.appendTo).append(this.helper);this.helper.css({left:c.clientX,top:c.clientY,width:0,height:0});d.autoRefresh&&this.refresh();this.selectees.filter(".ui-selected").each(function(){var b=e.data(this,"selectable-item");b.startselected=true;if(!c.metaKey){b.$element.removeClass("ui-selected");b.selected=false;b.$element.addClass("ui-unselecting");b.unselecting=true;f._trigger("unselecting",
c,{unselecting:b.element})}});e(c.target).parents().andSelf().each(function(){var b=e.data(this,"selectable-item");if(b){var g=!c.metaKey||!b.$element.hasClass("ui-selected");b.$element.removeClass(g?"ui-unselecting":"ui-selected").addClass(g?"ui-selecting":"ui-unselecting");b.unselecting=!g;b.selecting=g;(b.selected=g)?f._trigger("selecting",c,{selecting:b.element}):f._trigger("unselecting",c,{unselecting:b.element});return false}})}},_mouseDrag:function(c){var f=this;this.dragged=true;if(!this.options.disabled){var d=
this.options,b=this.opos[0],g=this.opos[1],h=c.pageX,i=c.pageY;if(b>h){var j=h;h=b;b=j}if(g>i){j=i;i=g;g=j}this.helper.css({left:b,top:g,width:h-b,height:i-g});this.selectees.each(function(){var a=e.data(this,"selectable-item");if(!(!a||a.element==f.element[0])){var k=false;if(d.tolerance=="touch")k=!(a.left>h||a.right<b||a.top>i||a.bottom<g);else if(d.tolerance=="fit")k=a.left>b&&a.right<h&&a.top>g&&a.bottom<i;if(k){if(a.selected){a.$element.removeClass("ui-selected");a.selected=false}if(a.unselecting){a.$element.removeClass("ui-unselecting");
a.unselecting=false}if(!a.selecting){a.$element.addClass("ui-selecting");a.selecting=true;f._trigger("selecting",c,{selecting:a.element})}}else{if(a.selecting)if(c.metaKey&&a.startselected){a.$element.removeClass("ui-selecting");a.selecting=false;a.$element.addClass("ui-selected");a.selected=true}else{a.$element.removeClass("ui-selecting");a.selecting=false;if(a.startselected){a.$element.addClass("ui-unselecting");a.unselecting=true}f._trigger("unselecting",c,{unselecting:a.element})}if(a.selected)if(!c.metaKey&&
!a.startselected){a.$element.removeClass("ui-selected");a.selected=false;a.$element.addClass("ui-unselecting");a.unselecting=true;f._trigger("unselecting",c,{unselecting:a.element})}}}});return false}},_mouseStop:function(c){var f=this;this.dragged=false;e(".ui-unselecting",this.element[0]).each(function(){var d=e.data(this,"selectable-item");d.$element.removeClass("ui-unselecting");d.unselecting=false;d.startselected=false;f._trigger("unselected",c,{unselected:d.element})});e(".ui-selecting",this.element[0]).each(function(){var d=
e.data(this,"selectable-item");d.$element.removeClass("ui-selecting").addClass("ui-selected");d.selecting=false;d.selected=true;d.startselected=true;f._trigger("selected",c,{selected:d.element})});this._trigger("stop",c);this.helper.remove();return false}});e.extend(e.ui.selectable,{version:"1.8.11"})})(jQuery);
;/*
 * jQuery UI Accordion 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Accordion
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 */
(function(c){c.widget("ui.accordion",{options:{active:0,animated:"slide",autoHeight:true,clearStyle:false,collapsible:false,event:"click",fillSpace:false,header:"> li > :first-child,> :not(li):even",icons:{header:"ui-icon-triangle-1-e",headerSelected:"ui-icon-triangle-1-s"},navigation:false,navigationFilter:function(){return this.href.toLowerCase()===location.href.toLowerCase()}},_create:function(){var a=this,b=a.options;a.running=0;a.element.addClass("ui-accordion ui-widget ui-helper-reset").children("li").addClass("ui-accordion-li-fix");
a.headers=a.element.find(b.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion",function(){b.disabled||c(this).addClass("ui-state-hover")}).bind("mouseleave.accordion",function(){b.disabled||c(this).removeClass("ui-state-hover")}).bind("focus.accordion",function(){b.disabled||c(this).addClass("ui-state-focus")}).bind("blur.accordion",function(){b.disabled||c(this).removeClass("ui-state-focus")});a.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom");
if(b.navigation){var d=a.element.find("a").filter(b.navigationFilter).eq(0);if(d.length){var h=d.closest(".ui-accordion-header");a.active=h.length?h:d.closest(".ui-accordion-content").prev()}}a.active=a._findActive(a.active||b.active).addClass("ui-state-default ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top");a.active.next().addClass("ui-accordion-content-active");a._createIcons();a.resize();a.element.attr("role","tablist");a.headers.attr("role","tab").bind("keydown.accordion",
function(f){return a._keydown(f)}).next().attr("role","tabpanel");a.headers.not(a.active||"").attr({"aria-expanded":"false","aria-selected":"false",tabIndex:-1}).next().hide();a.active.length?a.active.attr({"aria-expanded":"true","aria-selected":"true",tabIndex:0}):a.headers.eq(0).attr("tabIndex",0);c.browser.safari||a.headers.find("a").attr("tabIndex",-1);b.event&&a.headers.bind(b.event.split(" ").join(".accordion ")+".accordion",function(f){a._clickHandler.call(a,f,this);f.preventDefault()})},_createIcons:function(){var a=
this.options;if(a.icons){c("<span></span>").addClass("ui-icon "+a.icons.header).prependTo(this.headers);this.active.children(".ui-icon").toggleClass(a.icons.header).toggleClass(a.icons.headerSelected);this.element.addClass("ui-accordion-icons")}},_destroyIcons:function(){this.headers.children(".ui-icon").remove();this.element.removeClass("ui-accordion-icons")},destroy:function(){var a=this.options;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-accordion-disabled ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("tabIndex");
this.headers.find("a").removeAttr("tabIndex");this._destroyIcons();var b=this.headers.next().css("display","").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-accordion-disabled ui-state-disabled");if(a.autoHeight||a.fillHeight)b.css("height","");return c.Widget.prototype.destroy.call(this)},_setOption:function(a,b){c.Widget.prototype._setOption.apply(this,arguments);a=="active"&&this.activate(b);if(a=="icons"){this._destroyIcons();
b&&this._createIcons()}if(a=="disabled")this.headers.add(this.headers.next())[b?"addClass":"removeClass"]("ui-accordion-disabled ui-state-disabled")},_keydown:function(a){if(!(this.options.disabled||a.altKey||a.ctrlKey)){var b=c.ui.keyCode,d=this.headers.length,h=this.headers.index(a.target),f=false;switch(a.keyCode){case b.RIGHT:case b.DOWN:f=this.headers[(h+1)%d];break;case b.LEFT:case b.UP:f=this.headers[(h-1+d)%d];break;case b.SPACE:case b.ENTER:this._clickHandler({target:a.target},a.target);
a.preventDefault()}if(f){c(a.target).attr("tabIndex",-1);c(f).attr("tabIndex",0);f.focus();return false}return true}},resize:function(){var a=this.options,b;if(a.fillSpace){if(c.browser.msie){var d=this.element.parent().css("overflow");this.element.parent().css("overflow","hidden")}b=this.element.parent().height();c.browser.msie&&this.element.parent().css("overflow",d);this.headers.each(function(){b-=c(this).outerHeight(true)});this.headers.next().each(function(){c(this).height(Math.max(0,b-c(this).innerHeight()+
c(this).height()))}).css("overflow","auto")}else if(a.autoHeight){b=0;this.headers.next().each(function(){b=Math.max(b,c(this).height("").height())}).height(b)}return this},activate:function(a){this.options.active=a;a=this._findActive(a)[0];this._clickHandler({target:a},a);return this},_findActive:function(a){return a?typeof a==="number"?this.headers.filter(":eq("+a+")"):this.headers.not(this.headers.not(a)):a===false?c([]):this.headers.filter(":eq(0)")},_clickHandler:function(a,b){var d=this.options;
if(!d.disabled)if(a.target){a=c(a.currentTarget||b);b=a[0]===this.active[0];d.active=d.collapsible&&b?false:this.headers.index(a);if(!(this.running||!d.collapsible&&b)){var h=this.active;j=a.next();g=this.active.next();e={options:d,newHeader:b&&d.collapsible?c([]):a,oldHeader:this.active,newContent:b&&d.collapsible?c([]):j,oldContent:g};var f=this.headers.index(this.active[0])>this.headers.index(a[0]);this.active=b?c([]):a;this._toggle(j,g,e,b,f);h.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(d.icons.headerSelected).addClass(d.icons.header);
if(!b){a.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").children(".ui-icon").removeClass(d.icons.header).addClass(d.icons.headerSelected);a.next().addClass("ui-accordion-content-active")}}}else if(d.collapsible){this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(d.icons.headerSelected).addClass(d.icons.header);this.active.next().addClass("ui-accordion-content-active");var g=this.active.next(),
e={options:d,newHeader:c([]),oldHeader:d.active,newContent:c([]),oldContent:g},j=this.active=c([]);this._toggle(j,g,e)}},_toggle:function(a,b,d,h,f){var g=this,e=g.options;g.toShow=a;g.toHide=b;g.data=d;var j=function(){if(g)return g._completed.apply(g,arguments)};g._trigger("changestart",null,g.data);g.running=b.size()===0?a.size():b.size();if(e.animated){d={};d=e.collapsible&&h?{toShow:c([]),toHide:b,complete:j,down:f,autoHeight:e.autoHeight||e.fillSpace}:{toShow:a,toHide:b,complete:j,down:f,autoHeight:e.autoHeight||
e.fillSpace};if(!e.proxied)e.proxied=e.animated;if(!e.proxiedDuration)e.proxiedDuration=e.duration;e.animated=c.isFunction(e.proxied)?e.proxied(d):e.proxied;e.duration=c.isFunction(e.proxiedDuration)?e.proxiedDuration(d):e.proxiedDuration;h=c.ui.accordion.animations;var i=e.duration,k=e.animated;if(k&&!h[k]&&!c.easing[k])k="slide";h[k]||(h[k]=function(l){this.slide(l,{easing:k,duration:i||700})});h[k](d)}else{if(e.collapsible&&h)a.toggle();else{b.hide();a.show()}j(true)}b.prev().attr({"aria-expanded":"false",
"aria-selected":"false",tabIndex:-1}).blur();a.prev().attr({"aria-expanded":"true","aria-selected":"true",tabIndex:0}).focus()},_completed:function(a){this.running=a?0:--this.running;if(!this.running){this.options.clearStyle&&this.toShow.add(this.toHide).css({height:"",overflow:""});this.toHide.removeClass("ui-accordion-content-active");if(this.toHide.length)this.toHide.parent()[0].className=this.toHide.parent()[0].className;this._trigger("change",null,this.data)}}});c.extend(c.ui.accordion,{version:"1.8.11",
animations:{slide:function(a,b){a=c.extend({easing:"swing",duration:300},a,b);if(a.toHide.size())if(a.toShow.size()){var d=a.toShow.css("overflow"),h=0,f={},g={},e;b=a.toShow;e=b[0].style.width;b.width(parseInt(b.parent().width(),10)-parseInt(b.css("paddingLeft"),10)-parseInt(b.css("paddingRight"),10)-(parseInt(b.css("borderLeftWidth"),10)||0)-(parseInt(b.css("borderRightWidth"),10)||0));c.each(["height","paddingTop","paddingBottom"],function(j,i){g[i]="hide";j=(""+c.css(a.toShow[0],i)).match(/^([\d+-.]+)(.*)$/);
f[i]={value:j[1],unit:j[2]||"px"}});a.toShow.css({height:0,overflow:"hidden"}).show();a.toHide.filter(":hidden").each(a.complete).end().filter(":visible").animate(g,{step:function(j,i){if(i.prop=="height")h=i.end-i.start===0?0:(i.now-i.start)/(i.end-i.start);a.toShow[0].style[i.prop]=h*f[i.prop].value+f[i.prop].unit},duration:a.duration,easing:a.easing,complete:function(){a.autoHeight||a.toShow.css("height","");a.toShow.css({width:e,overflow:d});a.complete()}})}else a.toHide.animate({height:"hide",
paddingTop:"hide",paddingBottom:"hide"},a);else a.toShow.animate({height:"show",paddingTop:"show",paddingBottom:"show"},a)},bounceslide:function(a){this.slide(a,{easing:a.down?"easeOutBounce":"swing",duration:a.down?1E3:200})}}})})(jQuery);
;/*
 * jQuery UI Autocomplete 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Autocomplete
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	jquery.ui.position.js
 */
(function(d){var e=0;d.widget("ui.autocomplete",{options:{appendTo:"body",autoFocus:false,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null},pending:0,_create:function(){var a=this,b=this.element[0].ownerDocument,g;this.element.addClass("ui-autocomplete-input").attr("autocomplete","off").attr({role:"textbox","aria-autocomplete":"list","aria-haspopup":"true"}).bind("keydown.autocomplete",function(c){if(!(a.options.disabled||a.element.attr("readonly"))){g=
false;var f=d.ui.keyCode;switch(c.keyCode){case f.PAGE_UP:a._move("previousPage",c);break;case f.PAGE_DOWN:a._move("nextPage",c);break;case f.UP:a._move("previous",c);c.preventDefault();break;case f.DOWN:a._move("next",c);c.preventDefault();break;case f.ENTER:case f.NUMPAD_ENTER:if(a.menu.active){g=true;c.preventDefault()}case f.TAB:if(!a.menu.active)return;a.menu.select(c);break;case f.ESCAPE:a.element.val(a.term);a.close(c);break;default:clearTimeout(a.searching);a.searching=setTimeout(function(){if(a.term!=
a.element.val()){a.selectedItem=null;a.search(null,c)}},a.options.delay);break}}}).bind("keypress.autocomplete",function(c){if(g){g=false;c.preventDefault()}}).bind("focus.autocomplete",function(){if(!a.options.disabled){a.selectedItem=null;a.previous=a.element.val()}}).bind("blur.autocomplete",function(c){if(!a.options.disabled){clearTimeout(a.searching);a.closing=setTimeout(function(){a.close(c);a._change(c)},150)}});this._initSource();this.response=function(){return a._response.apply(a,arguments)};
this.menu=d("<ul></ul>").addClass("ui-autocomplete").appendTo(d(this.options.appendTo||"body",b)[0]).mousedown(function(c){var f=a.menu.element[0];d(c.target).closest(".ui-menu-item").length||setTimeout(function(){d(document).one("mousedown",function(h){h.target!==a.element[0]&&h.target!==f&&!d.ui.contains(f,h.target)&&a.close()})},1);setTimeout(function(){clearTimeout(a.closing)},13)}).menu({focus:function(c,f){f=f.item.data("item.autocomplete");false!==a._trigger("focus",c,{item:f})&&/^key/.test(c.originalEvent.type)&&
a.element.val(f.value)},selected:function(c,f){var h=f.item.data("item.autocomplete"),i=a.previous;if(a.element[0]!==b.activeElement){a.element.focus();a.previous=i;setTimeout(function(){a.previous=i;a.selectedItem=h},1)}false!==a._trigger("select",c,{item:h})&&a.element.val(h.value);a.term=a.element.val();a.close(c);a.selectedItem=h},blur:function(){a.menu.element.is(":visible")&&a.element.val()!==a.term&&a.element.val(a.term)}}).zIndex(this.element.zIndex()+1).css({top:0,left:0}).hide().data("menu");
d.fn.bgiframe&&this.menu.element.bgiframe()},destroy:function(){this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup");this.menu.element.remove();d.Widget.prototype.destroy.call(this)},_setOption:function(a,b){d.Widget.prototype._setOption.apply(this,arguments);a==="source"&&this._initSource();if(a==="appendTo")this.menu.element.appendTo(d(b||"body",this.element[0].ownerDocument)[0]);a==="disabled"&&
b&&this.xhr&&this.xhr.abort()},_initSource:function(){var a=this,b,g;if(d.isArray(this.options.source)){b=this.options.source;this.source=function(c,f){f(d.ui.autocomplete.filter(b,c.term))}}else if(typeof this.options.source==="string"){g=this.options.source;this.source=function(c,f){a.xhr&&a.xhr.abort();a.xhr=d.ajax({url:g,data:c,dataType:"json",autocompleteRequest:++e,success:function(h){this.autocompleteRequest===e&&f(h)},error:function(){this.autocompleteRequest===e&&f([])}})}}else this.source=
this.options.source},search:function(a,b){a=a!=null?a:this.element.val();this.term=this.element.val();if(a.length<this.options.minLength)return this.close(b);clearTimeout(this.closing);if(this._trigger("search",b)!==false)return this._search(a)},_search:function(a){this.pending++;this.element.addClass("ui-autocomplete-loading");this.source({term:a},this.response)},_response:function(a){if(!this.options.disabled&&a&&a.length){a=this._normalize(a);this._suggest(a);this._trigger("open")}else this.close();
this.pending--;this.pending||this.element.removeClass("ui-autocomplete-loading")},close:function(a){clearTimeout(this.closing);if(this.menu.element.is(":visible")){this.menu.element.hide();this.menu.deactivate();this._trigger("close",a)}},_change:function(a){this.previous!==this.element.val()&&this._trigger("change",a,{item:this.selectedItem})},_normalize:function(a){if(a.length&&a[0].label&&a[0].value)return a;return d.map(a,function(b){if(typeof b==="string")return{label:b,value:b};return d.extend({label:b.label||
b.value,value:b.value||b.label},b)})},_suggest:function(a){var b=this.menu.element.empty().zIndex(this.element.zIndex()+1);this._renderMenu(b,a);this.menu.deactivate();this.menu.refresh();b.show();this._resizeMenu();b.position(d.extend({of:this.element},this.options.position));this.options.autoFocus&&this.menu.next(new d.Event("mouseover"))},_resizeMenu:function(){var a=this.menu.element;a.outerWidth(Math.max(a.width("").outerWidth(),this.element.outerWidth()))},_renderMenu:function(a,b){var g=this;
d.each(b,function(c,f){g._renderItem(a,f)})},_renderItem:function(a,b){return d("<li></li>").data("item.autocomplete",b).append(d("<a></a>").text(b.label)).appendTo(a)},_move:function(a,b){if(this.menu.element.is(":visible"))if(this.menu.first()&&/^previous/.test(a)||this.menu.last()&&/^next/.test(a)){this.element.val(this.term);this.menu.deactivate()}else this.menu[a](b);else this.search(null,b)},widget:function(){return this.menu.element}});d.extend(d.ui.autocomplete,{escapeRegex:function(a){return a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,
"\\$&")},filter:function(a,b){var g=new RegExp(d.ui.autocomplete.escapeRegex(b),"i");return d.grep(a,function(c){return g.test(c.label||c.value||c)})}})})(jQuery);
(function(d){d.widget("ui.menu",{_create:function(){var e=this;this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({role:"listbox","aria-activedescendant":"ui-active-menuitem"}).click(function(a){if(d(a.target).closest(".ui-menu-item a").length){a.preventDefault();e.select(a)}});this.refresh()},refresh:function(){var e=this;this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","menuitem").children("a").addClass("ui-corner-all").attr("tabindex",
-1).mouseenter(function(a){e.activate(a,d(this).parent())}).mouseleave(function(){e.deactivate()})},activate:function(e,a){this.deactivate();if(this.hasScroll()){var b=a.offset().top-this.element.offset().top,g=this.element.attr("scrollTop"),c=this.element.height();if(b<0)this.element.attr("scrollTop",g+b);else b>=c&&this.element.attr("scrollTop",g+b-c+a.height())}this.active=a.eq(0).children("a").addClass("ui-state-hover").attr("id","ui-active-menuitem").end();this._trigger("focus",e,{item:a})},
deactivate:function(){if(this.active){this.active.children("a").removeClass("ui-state-hover").removeAttr("id");this._trigger("blur");this.active=null}},next:function(e){this.move("next",".ui-menu-item:first",e)},previous:function(e){this.move("prev",".ui-menu-item:last",e)},first:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},last:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},move:function(e,a,b){if(this.active){e=this.active[e+"All"](".ui-menu-item").eq(0);
e.length?this.activate(b,e):this.activate(b,this.element.children(a))}else this.activate(b,this.element.children(a))},nextPage:function(e){if(this.hasScroll())if(!this.active||this.last())this.activate(e,this.element.children(".ui-menu-item:first"));else{var a=this.active.offset().top,b=this.element.height(),g=this.element.children(".ui-menu-item").filter(function(){var c=d(this).offset().top-a-b+d(this).height();return c<10&&c>-10});g.length||(g=this.element.children(".ui-menu-item:last"));this.activate(e,
g)}else this.activate(e,this.element.children(".ui-menu-item").filter(!this.active||this.last()?":first":":last"))},previousPage:function(e){if(this.hasScroll())if(!this.active||this.first())this.activate(e,this.element.children(".ui-menu-item:last"));else{var a=this.active.offset().top,b=this.element.height();result=this.element.children(".ui-menu-item").filter(function(){var g=d(this).offset().top-a+b-d(this).height();return g<10&&g>-10});result.length||(result=this.element.children(".ui-menu-item:first"));
this.activate(e,result)}else this.activate(e,this.element.children(".ui-menu-item").filter(!this.active||this.first()?":last":":first"))},hasScroll:function(){return this.element.height()<this.element.attr("scrollHeight")},select:function(e){this._trigger("selected",e,{item:this.active})}})})(jQuery);
;/*
 * jQuery UI Button 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Button
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 */
(function(a){var g,i=function(b){a(":ui-button",b.target.form).each(function(){var c=a(this).data("button");setTimeout(function(){c.refresh()},1)})},h=function(b){var c=b.name,d=b.form,f=a([]);if(c)f=d?a(d).find("[name='"+c+"']"):a("[name='"+c+"']",b.ownerDocument).filter(function(){return!this.form});return f};a.widget("ui.button",{options:{disabled:null,text:true,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset.button").bind("reset.button",
i);if(typeof this.options.disabled!=="boolean")this.options.disabled=this.element.attr("disabled");this._determineButtonType();this.hasTitle=!!this.buttonElement.attr("title");var b=this,c=this.options,d=this.type==="checkbox"||this.type==="radio",f="ui-state-hover"+(!d?" ui-state-active":"");if(c.label===null)c.label=this.buttonElement.html();if(this.element.is(":disabled"))c.disabled=true;this.buttonElement.addClass("ui-button ui-widget ui-state-default ui-corner-all").attr("role","button").bind("mouseenter.button",
function(){if(!c.disabled){a(this).addClass("ui-state-hover");this===g&&a(this).addClass("ui-state-active")}}).bind("mouseleave.button",function(){c.disabled||a(this).removeClass(f)}).bind("focus.button",function(){a(this).addClass("ui-state-focus")}).bind("blur.button",function(){a(this).removeClass("ui-state-focus")});d&&this.element.bind("change.button",function(){b.refresh()});if(this.type==="checkbox")this.buttonElement.bind("click.button",function(){if(c.disabled)return false;a(this).toggleClass("ui-state-active");
b.buttonElement.attr("aria-pressed",b.element[0].checked)});else if(this.type==="radio")this.buttonElement.bind("click.button",function(){if(c.disabled)return false;a(this).addClass("ui-state-active");b.buttonElement.attr("aria-pressed",true);var e=b.element[0];h(e).not(e).map(function(){return a(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed",false)});else{this.buttonElement.bind("mousedown.button",function(){if(c.disabled)return false;a(this).addClass("ui-state-active");
g=this;a(document).one("mouseup",function(){g=null})}).bind("mouseup.button",function(){if(c.disabled)return false;a(this).removeClass("ui-state-active")}).bind("keydown.button",function(e){if(c.disabled)return false;if(e.keyCode==a.ui.keyCode.SPACE||e.keyCode==a.ui.keyCode.ENTER)a(this).addClass("ui-state-active")}).bind("keyup.button",function(){a(this).removeClass("ui-state-active")});this.buttonElement.is("a")&&this.buttonElement.keyup(function(e){e.keyCode===a.ui.keyCode.SPACE&&a(this).click()})}this._setOption("disabled",
c.disabled)},_determineButtonType:function(){this.type=this.element.is(":checkbox")?"checkbox":this.element.is(":radio")?"radio":this.element.is("input")?"input":"button";if(this.type==="checkbox"||this.type==="radio"){var b=this.element.parents().filter(":last"),c="label[for="+this.element.attr("id")+"]";this.buttonElement=b.find(c);if(!this.buttonElement.length){b=b.length?b.siblings():this.element.siblings();this.buttonElement=b.filter(c);if(!this.buttonElement.length)this.buttonElement=b.find(c)}this.element.addClass("ui-helper-hidden-accessible");
(b=this.element.is(":checked"))&&this.buttonElement.addClass("ui-state-active");this.buttonElement.attr("aria-pressed",b)}else this.buttonElement=this.element},widget:function(){return this.buttonElement},destroy:function(){this.element.removeClass("ui-helper-hidden-accessible");this.buttonElement.removeClass("ui-button ui-widget ui-state-default ui-corner-all ui-state-hover ui-state-active  ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only").removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());
this.hasTitle||this.buttonElement.removeAttr("title");a.Widget.prototype.destroy.call(this)},_setOption:function(b,c){a.Widget.prototype._setOption.apply(this,arguments);if(b==="disabled")c?this.element.attr("disabled",true):this.element.removeAttr("disabled");this._resetButton()},refresh:function(){var b=this.element.is(":disabled");b!==this.options.disabled&&this._setOption("disabled",b);if(this.type==="radio")h(this.element[0]).each(function(){a(this).is(":checked")?a(this).button("widget").addClass("ui-state-active").attr("aria-pressed",
true):a(this).button("widget").removeClass("ui-state-active").attr("aria-pressed",false)});else if(this.type==="checkbox")this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed",true):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed",false)},_resetButton:function(){if(this.type==="input")this.options.label&&this.element.val(this.options.label);else{var b=this.buttonElement.removeClass("ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only"),
c=a("<span></span>").addClass("ui-button-text").html(this.options.label).appendTo(b.empty()).text(),d=this.options.icons,f=d.primary&&d.secondary,e=[];if(d.primary||d.secondary){if(this.options.text)e.push("ui-button-text-icon"+(f?"s":d.primary?"-primary":"-secondary"));d.primary&&b.prepend("<span class='ui-button-icon-primary ui-icon "+d.primary+"'></span>");d.secondary&&b.append("<span class='ui-button-icon-secondary ui-icon "+d.secondary+"'></span>");if(!this.options.text){e.push(f?"ui-button-icons-only":
"ui-button-icon-only");this.hasTitle||b.attr("title",c)}}else e.push("ui-button-text-only");b.addClass(e.join(" "))}}});a.widget("ui.buttonset",{options:{items:":button, :submit, :reset, :checkbox, :radio, a, :data(button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(b,c){b==="disabled"&&this.buttons.button("option",b,c);a.Widget.prototype._setOption.apply(this,arguments)},refresh:function(){this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return a(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass("ui-corner-left").end().filter(":last").addClass("ui-corner-right").end().end()},
destroy:function(){this.element.removeClass("ui-buttonset");this.buttons.map(function(){return a(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy");a.Widget.prototype.destroy.call(this)}})})(jQuery);
;/*
 * jQuery UI Dialog 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Dialog
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *  jquery.ui.button.js
 *	jquery.ui.draggable.js
 *	jquery.ui.mouse.js
 *	jquery.ui.position.js
 *	jquery.ui.resizable.js
 */
(function(c,j){var k={buttons:true,height:true,maxHeight:true,maxWidth:true,minHeight:true,minWidth:true,width:true},l={maxHeight:true,maxWidth:true,minHeight:true,minWidth:true};c.widget("ui.dialog",{options:{autoOpen:true,buttons:{},closeOnEscape:true,closeText:"close",dialogClass:"",draggable:true,hide:null,height:"auto",maxHeight:false,maxWidth:false,minHeight:150,minWidth:150,modal:false,position:{my:"center",at:"center",collision:"fit",using:function(a){var b=c(this).css(a).offset().top;b<0&&
c(this).css("top",a.top-b)}},resizable:true,show:null,stack:true,title:"",width:300,zIndex:1E3},_create:function(){this.originalTitle=this.element.attr("title");if(typeof this.originalTitle!=="string")this.originalTitle="";this.options.title=this.options.title||this.originalTitle;var a=this,b=a.options,d=b.title||"&#160;",e=c.ui.dialog.getTitleId(a.element),g=(a.uiDialog=c("<div></div>")).appendTo(document.body).hide().addClass("ui-dialog ui-widget ui-widget-content ui-corner-all "+b.dialogClass).css({zIndex:b.zIndex}).attr("tabIndex",
-1).css("outline",0).keydown(function(i){if(b.closeOnEscape&&i.keyCode&&i.keyCode===c.ui.keyCode.ESCAPE){a.close(i);i.preventDefault()}}).attr({role:"dialog","aria-labelledby":e}).mousedown(function(i){a.moveToTop(false,i)});a.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(g);var f=(a.uiDialogTitlebar=c("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(g),h=c('<a href="#"></a>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role",
"button").hover(function(){h.addClass("ui-state-hover")},function(){h.removeClass("ui-state-hover")}).focus(function(){h.addClass("ui-state-focus")}).blur(function(){h.removeClass("ui-state-focus")}).click(function(i){a.close(i);return false}).appendTo(f);(a.uiDialogTitlebarCloseText=c("<span></span>")).addClass("ui-icon ui-icon-closethick").text(b.closeText).appendTo(h);c("<span></span>").addClass("ui-dialog-title").attr("id",e).html(d).prependTo(f);if(c.isFunction(b.beforeclose)&&!c.isFunction(b.beforeClose))b.beforeClose=
b.beforeclose;f.find("*").add(f).disableSelection();b.draggable&&c.fn.draggable&&a._makeDraggable();b.resizable&&c.fn.resizable&&a._makeResizable();a._createButtons(b.buttons);a._isOpen=false;c.fn.bgiframe&&g.bgiframe()},_init:function(){this.options.autoOpen&&this.open()},destroy:function(){var a=this;a.overlay&&a.overlay.destroy();a.uiDialog.hide();a.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body");a.uiDialog.remove();a.originalTitle&&
a.element.attr("title",a.originalTitle);return a},widget:function(){return this.uiDialog},close:function(a){var b=this,d,e;if(false!==b._trigger("beforeClose",a)){b.overlay&&b.overlay.destroy();b.uiDialog.unbind("keypress.ui-dialog");b._isOpen=false;if(b.options.hide)b.uiDialog.hide(b.options.hide,function(){b._trigger("close",a)});else{b.uiDialog.hide();b._trigger("close",a)}c.ui.dialog.overlay.resize();if(b.options.modal){d=0;c(".ui-dialog").each(function(){if(this!==b.uiDialog[0]){e=c(this).css("z-index");
isNaN(e)||(d=Math.max(d,e))}});c.ui.dialog.maxZ=d}return b}},isOpen:function(){return this._isOpen},moveToTop:function(a,b){var d=this,e=d.options;if(e.modal&&!a||!e.stack&&!e.modal)return d._trigger("focus",b);if(e.zIndex>c.ui.dialog.maxZ)c.ui.dialog.maxZ=e.zIndex;if(d.overlay){c.ui.dialog.maxZ+=1;d.overlay.$el.css("z-index",c.ui.dialog.overlay.maxZ=c.ui.dialog.maxZ)}a={scrollTop:d.element.attr("scrollTop"),scrollLeft:d.element.attr("scrollLeft")};c.ui.dialog.maxZ+=1;d.uiDialog.css("z-index",c.ui.dialog.maxZ);
d.element.attr(a);d._trigger("focus",b);return d},open:function(){if(!this._isOpen){var a=this,b=a.options,d=a.uiDialog;a.overlay=b.modal?new c.ui.dialog.overlay(a):null;a._size();a._position(b.position);d.show(b.show);a.moveToTop(true);b.modal&&d.bind("keypress.ui-dialog",function(e){if(e.keyCode===c.ui.keyCode.TAB){var g=c(":tabbable",this),f=g.filter(":first");g=g.filter(":last");if(e.target===g[0]&&!e.shiftKey){f.focus(1);return false}else if(e.target===f[0]&&e.shiftKey){g.focus(1);return false}}});
c(a.element.find(":tabbable").get().concat(d.find(".ui-dialog-buttonpane :tabbable").get().concat(d.get()))).eq(0).focus();a._isOpen=true;a._trigger("open");return a}},_createButtons:function(a){var b=this,d=false,e=c("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),g=c("<div></div>").addClass("ui-dialog-buttonset").appendTo(e);b.uiDialog.find(".ui-dialog-buttonpane").remove();typeof a==="object"&&a!==null&&c.each(a,function(){return!(d=true)});if(d){c.each(a,function(f,
h){h=c.isFunction(h)?{click:h,text:f}:h;f=c('<button type="button"></button>').attr(h,true).unbind("click").click(function(){h.click.apply(b.element[0],arguments)}).appendTo(g);c.fn.button&&f.button()});e.appendTo(b.uiDialog)}},_makeDraggable:function(){function a(f){return{position:f.position,offset:f.offset}}var b=this,d=b.options,e=c(document),g;b.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(f,h){g=
d.height==="auto"?"auto":c(this).height();c(this).height(c(this).height()).addClass("ui-dialog-dragging");b._trigger("dragStart",f,a(h))},drag:function(f,h){b._trigger("drag",f,a(h))},stop:function(f,h){d.position=[h.position.left-e.scrollLeft(),h.position.top-e.scrollTop()];c(this).removeClass("ui-dialog-dragging").height(g);b._trigger("dragStop",f,a(h));c.ui.dialog.overlay.resize()}})},_makeResizable:function(a){function b(f){return{originalPosition:f.originalPosition,originalSize:f.originalSize,
position:f.position,size:f.size}}a=a===j?this.options.resizable:a;var d=this,e=d.options,g=d.uiDialog.css("position");a=typeof a==="string"?a:"n,e,s,w,se,sw,ne,nw";d.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:d.element,maxWidth:e.maxWidth,maxHeight:e.maxHeight,minWidth:e.minWidth,minHeight:d._minHeight(),handles:a,start:function(f,h){c(this).addClass("ui-dialog-resizing");d._trigger("resizeStart",f,b(h))},resize:function(f,h){d._trigger("resize",f,b(h))},stop:function(f,
h){c(this).removeClass("ui-dialog-resizing");e.height=c(this).height();e.width=c(this).width();d._trigger("resizeStop",f,b(h));c.ui.dialog.overlay.resize()}}).css("position",g).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")},_minHeight:function(){var a=this.options;return a.height==="auto"?a.minHeight:Math.min(a.minHeight,a.height)},_position:function(a){var b=[],d=[0,0],e;if(a){if(typeof a==="string"||typeof a==="object"&&"0"in a){b=a.split?a.split(" "):[a[0],a[1]];if(b.length===
1)b[1]=b[0];c.each(["left","top"],function(g,f){if(+b[g]===b[g]){d[g]=b[g];b[g]=f}});a={my:b.join(" "),at:b.join(" "),offset:d.join(" ")}}a=c.extend({},c.ui.dialog.prototype.options.position,a)}else a=c.ui.dialog.prototype.options.position;(e=this.uiDialog.is(":visible"))||this.uiDialog.show();this.uiDialog.css({top:0,left:0}).position(c.extend({of:window},a));e||this.uiDialog.hide()},_setOptions:function(a){var b=this,d={},e=false;c.each(a,function(g,f){b._setOption(g,f);if(g in k)e=true;if(g in
l)d[g]=f});e&&this._size();this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option",d)},_setOption:function(a,b){var d=this,e=d.uiDialog;switch(a){case "beforeclose":a="beforeClose";break;case "buttons":d._createButtons(b);break;case "closeText":d.uiDialogTitlebarCloseText.text(""+b);break;case "dialogClass":e.removeClass(d.options.dialogClass).addClass("ui-dialog ui-widget ui-widget-content ui-corner-all "+b);break;case "disabled":b?e.addClass("ui-dialog-disabled"):e.removeClass("ui-dialog-disabled");
break;case "draggable":var g=e.is(":data(draggable)");g&&!b&&e.draggable("destroy");!g&&b&&d._makeDraggable();break;case "position":d._position(b);break;case "resizable":(g=e.is(":data(resizable)"))&&!b&&e.resizable("destroy");g&&typeof b==="string"&&e.resizable("option","handles",b);!g&&b!==false&&d._makeResizable(b);break;case "title":c(".ui-dialog-title",d.uiDialogTitlebar).html(""+(b||"&#160;"));break}c.Widget.prototype._setOption.apply(d,arguments)},_size:function(){var a=this.options,b,d,e=
this.uiDialog.is(":visible");this.element.show().css({width:"auto",minHeight:0,height:0});if(a.minWidth>a.width)a.width=a.minWidth;b=this.uiDialog.css({height:"auto",width:a.width}).height();d=Math.max(0,a.minHeight-b);if(a.height==="auto")if(c.support.minHeight)this.element.css({minHeight:d,height:"auto"});else{this.uiDialog.show();a=this.element.css("height","auto").height();e||this.uiDialog.hide();this.element.height(Math.max(a,d))}else this.element.height(Math.max(a.height-b,0));this.uiDialog.is(":data(resizable)")&&
this.uiDialog.resizable("option","minHeight",this._minHeight())}});c.extend(c.ui.dialog,{version:"1.8.11",uuid:0,maxZ:0,getTitleId:function(a){a=a.attr("id");if(!a){this.uuid+=1;a=this.uuid}return"ui-dialog-title-"+a},overlay:function(a){this.$el=c.ui.dialog.overlay.create(a)}});c.extend(c.ui.dialog.overlay,{instances:[],oldInstances:[],maxZ:0,events:c.map("focus,mousedown,mouseup,keydown,keypress,click".split(","),function(a){return a+".dialog-overlay"}).join(" "),create:function(a){if(this.instances.length===
0){setTimeout(function(){c.ui.dialog.overlay.instances.length&&c(document).bind(c.ui.dialog.overlay.events,function(d){if(c(d.target).zIndex()<c.ui.dialog.overlay.maxZ)return false})},1);c(document).bind("keydown.dialog-overlay",function(d){if(a.options.closeOnEscape&&d.keyCode&&d.keyCode===c.ui.keyCode.ESCAPE){a.close(d);d.preventDefault()}});c(window).bind("resize.dialog-overlay",c.ui.dialog.overlay.resize)}var b=(this.oldInstances.pop()||c("<div></div>").addClass("ui-widget-overlay")).appendTo(document.body).css({width:this.width(),
height:this.height()});c.fn.bgiframe&&b.bgiframe();this.instances.push(b);return b},destroy:function(a){var b=c.inArray(a,this.instances);b!=-1&&this.oldInstances.push(this.instances.splice(b,1)[0]);this.instances.length===0&&c([document,window]).unbind(".dialog-overlay");a.remove();var d=0;c.each(this.instances,function(){d=Math.max(d,this.css("z-index"))});this.maxZ=d},height:function(){var a,b;if(c.browser.msie&&c.browser.version<7){a=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight);
b=Math.max(document.documentElement.offsetHeight,document.body.offsetHeight);return a<b?c(window).height()+"px":a+"px"}else return c(document).height()+"px"},width:function(){var a,b;if(c.browser.msie&&c.browser.version<7){a=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth);b=Math.max(document.documentElement.offsetWidth,document.body.offsetWidth);return a<b?c(window).width()+"px":a+"px"}else return c(document).width()+"px"},resize:function(){var a=c([]);c.each(c.ui.dialog.overlay.instances,
function(){a=a.add(this)});a.css({width:0,height:0}).css({width:c.ui.dialog.overlay.width(),height:c.ui.dialog.overlay.height()})}});c.extend(c.ui.dialog.overlay.prototype,{destroy:function(){c.ui.dialog.overlay.destroy(this.$el)}})})(jQuery);
;/*
 * jQuery UI Slider 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Slider
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(d){d.widget("ui.slider",d.ui.mouse,{widgetEventPrefix:"slide",options:{animate:false,distance:0,max:100,min:0,orientation:"horizontal",range:false,step:1,value:0,values:null},_create:function(){var b=this,a=this.options;this._mouseSliding=this._keySliding=false;this._animateOff=true;this._handleIndex=null;this._detectOrientation();this._mouseInit();this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget ui-widget-content ui-corner-all");a.disabled&&this.element.addClass("ui-slider-disabled ui-disabled");
this.range=d([]);if(a.range){if(a.range===true){this.range=d("<div></div>");if(!a.values)a.values=[this._valueMin(),this._valueMin()];if(a.values.length&&a.values.length!==2)a.values=[a.values[0],a.values[0]]}else this.range=d("<div></div>");this.range.appendTo(this.element).addClass("ui-slider-range");if(a.range==="min"||a.range==="max")this.range.addClass("ui-slider-range-"+a.range);this.range.addClass("ui-widget-header")}d(".ui-slider-handle",this.element).length===0&&d("<a href='#'></a>").appendTo(this.element).addClass("ui-slider-handle");
if(a.values&&a.values.length)for(;d(".ui-slider-handle",this.element).length<a.values.length;)d("<a href='#'></a>").appendTo(this.element).addClass("ui-slider-handle");this.handles=d(".ui-slider-handle",this.element).addClass("ui-state-default ui-corner-all");this.handle=this.handles.eq(0);this.handles.add(this.range).filter("a").click(function(c){c.preventDefault()}).hover(function(){a.disabled||d(this).addClass("ui-state-hover")},function(){d(this).removeClass("ui-state-hover")}).focus(function(){if(a.disabled)d(this).blur();
else{d(".ui-slider .ui-state-focus").removeClass("ui-state-focus");d(this).addClass("ui-state-focus")}}).blur(function(){d(this).removeClass("ui-state-focus")});this.handles.each(function(c){d(this).data("index.ui-slider-handle",c)});this.handles.keydown(function(c){var e=true,f=d(this).data("index.ui-slider-handle"),h,g,i;if(!b.options.disabled){switch(c.keyCode){case d.ui.keyCode.HOME:case d.ui.keyCode.END:case d.ui.keyCode.PAGE_UP:case d.ui.keyCode.PAGE_DOWN:case d.ui.keyCode.UP:case d.ui.keyCode.RIGHT:case d.ui.keyCode.DOWN:case d.ui.keyCode.LEFT:e=
false;if(!b._keySliding){b._keySliding=true;d(this).addClass("ui-state-active");h=b._start(c,f);if(h===false)return}break}i=b.options.step;h=b.options.values&&b.options.values.length?(g=b.values(f)):(g=b.value());switch(c.keyCode){case d.ui.keyCode.HOME:g=b._valueMin();break;case d.ui.keyCode.END:g=b._valueMax();break;case d.ui.keyCode.PAGE_UP:g=b._trimAlignValue(h+(b._valueMax()-b._valueMin())/5);break;case d.ui.keyCode.PAGE_DOWN:g=b._trimAlignValue(h-(b._valueMax()-b._valueMin())/5);break;case d.ui.keyCode.UP:case d.ui.keyCode.RIGHT:if(h===
b._valueMax())return;g=b._trimAlignValue(h+i);break;case d.ui.keyCode.DOWN:case d.ui.keyCode.LEFT:if(h===b._valueMin())return;g=b._trimAlignValue(h-i);break}b._slide(c,f,g);return e}}).keyup(function(c){var e=d(this).data("index.ui-slider-handle");if(b._keySliding){b._keySliding=false;b._stop(c,e);b._change(c,e);d(this).removeClass("ui-state-active")}});this._refreshValue();this._animateOff=false},destroy:function(){this.handles.remove();this.range.remove();this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider");
this._mouseDestroy();return this},_mouseCapture:function(b){var a=this.options,c,e,f,h,g;if(a.disabled)return false;this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};this.elementOffset=this.element.offset();c=this._normValueFromMouse({x:b.pageX,y:b.pageY});e=this._valueMax()-this._valueMin()+1;h=this;this.handles.each(function(i){var j=Math.abs(c-h.values(i));if(e>j){e=j;f=d(this);g=i}});if(a.range===true&&this.values(1)===a.min){g+=1;f=d(this.handles[g])}if(this._start(b,
g)===false)return false;this._mouseSliding=true;h._handleIndex=g;f.addClass("ui-state-active").focus();a=f.offset();this._clickOffset=!d(b.target).parents().andSelf().is(".ui-slider-handle")?{left:0,top:0}:{left:b.pageX-a.left-f.width()/2,top:b.pageY-a.top-f.height()/2-(parseInt(f.css("borderTopWidth"),10)||0)-(parseInt(f.css("borderBottomWidth"),10)||0)+(parseInt(f.css("marginTop"),10)||0)};this.handles.hasClass("ui-state-hover")||this._slide(b,g,c);return this._animateOff=true},_mouseStart:function(){return true},
_mouseDrag:function(b){var a=this._normValueFromMouse({x:b.pageX,y:b.pageY});this._slide(b,this._handleIndex,a);return false},_mouseStop:function(b){this.handles.removeClass("ui-state-active");this._mouseSliding=false;this._stop(b,this._handleIndex);this._change(b,this._handleIndex);this._clickOffset=this._handleIndex=null;return this._animateOff=false},_detectOrientation:function(){this.orientation=this.options.orientation==="vertical"?"vertical":"horizontal"},_normValueFromMouse:function(b){var a;
if(this.orientation==="horizontal"){a=this.elementSize.width;b=b.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)}else{a=this.elementSize.height;b=b.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)}a=b/a;if(a>1)a=1;if(a<0)a=0;if(this.orientation==="vertical")a=1-a;b=this._valueMax()-this._valueMin();return this._trimAlignValue(this._valueMin()+a*b)},_start:function(b,a){var c={handle:this.handles[a],value:this.value()};if(this.options.values&&this.options.values.length){c.value=
this.values(a);c.values=this.values()}return this._trigger("start",b,c)},_slide:function(b,a,c){var e;if(this.options.values&&this.options.values.length){e=this.values(a?0:1);if(this.options.values.length===2&&this.options.range===true&&(a===0&&c>e||a===1&&c<e))c=e;if(c!==this.values(a)){e=this.values();e[a]=c;b=this._trigger("slide",b,{handle:this.handles[a],value:c,values:e});this.values(a?0:1);b!==false&&this.values(a,c,true)}}else if(c!==this.value()){b=this._trigger("slide",b,{handle:this.handles[a],
value:c});b!==false&&this.value(c)}},_stop:function(b,a){var c={handle:this.handles[a],value:this.value()};if(this.options.values&&this.options.values.length){c.value=this.values(a);c.values=this.values()}this._trigger("stop",b,c)},_change:function(b,a){if(!this._keySliding&&!this._mouseSliding){var c={handle:this.handles[a],value:this.value()};if(this.options.values&&this.options.values.length){c.value=this.values(a);c.values=this.values()}this._trigger("change",b,c)}},value:function(b){if(arguments.length){this.options.value=
this._trimAlignValue(b);this._refreshValue();this._change(null,0)}return this._value()},values:function(b,a){var c,e,f;if(arguments.length>1){this.options.values[b]=this._trimAlignValue(a);this._refreshValue();this._change(null,b)}if(arguments.length)if(d.isArray(arguments[0])){c=this.options.values;e=arguments[0];for(f=0;f<c.length;f+=1){c[f]=this._trimAlignValue(e[f]);this._change(null,f)}this._refreshValue()}else return this.options.values&&this.options.values.length?this._values(b):this.value();
else return this._values()},_setOption:function(b,a){var c,e=0;if(d.isArray(this.options.values))e=this.options.values.length;d.Widget.prototype._setOption.apply(this,arguments);switch(b){case "disabled":if(a){this.handles.filter(".ui-state-focus").blur();this.handles.removeClass("ui-state-hover");this.handles.attr("disabled","disabled");this.element.addClass("ui-disabled")}else{this.handles.removeAttr("disabled");this.element.removeClass("ui-disabled")}break;case "orientation":this._detectOrientation();
this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation);this._refreshValue();break;case "value":this._animateOff=true;this._refreshValue();this._change(null,0);this._animateOff=false;break;case "values":this._animateOff=true;this._refreshValue();for(c=0;c<e;c+=1)this._change(null,c);this._animateOff=false;break}},_value:function(){var b=this.options.value;return b=this._trimAlignValue(b)},_values:function(b){var a,c;if(arguments.length){a=this.options.values[b];
return a=this._trimAlignValue(a)}else{a=this.options.values.slice();for(c=0;c<a.length;c+=1)a[c]=this._trimAlignValue(a[c]);return a}},_trimAlignValue:function(b){if(b<=this._valueMin())return this._valueMin();if(b>=this._valueMax())return this._valueMax();var a=this.options.step>0?this.options.step:1,c=(b-this._valueMin())%a;alignValue=b-c;if(Math.abs(c)*2>=a)alignValue+=c>0?a:-a;return parseFloat(alignValue.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},
_refreshValue:function(){var b=this.options.range,a=this.options,c=this,e=!this._animateOff?a.animate:false,f,h={},g,i,j,l;if(this.options.values&&this.options.values.length)this.handles.each(function(k){f=(c.values(k)-c._valueMin())/(c._valueMax()-c._valueMin())*100;h[c.orientation==="horizontal"?"left":"bottom"]=f+"%";d(this).stop(1,1)[e?"animate":"css"](h,a.animate);if(c.options.range===true)if(c.orientation==="horizontal"){if(k===0)c.range.stop(1,1)[e?"animate":"css"]({left:f+"%"},a.animate);
if(k===1)c.range[e?"animate":"css"]({width:f-g+"%"},{queue:false,duration:a.animate})}else{if(k===0)c.range.stop(1,1)[e?"animate":"css"]({bottom:f+"%"},a.animate);if(k===1)c.range[e?"animate":"css"]({height:f-g+"%"},{queue:false,duration:a.animate})}g=f});else{i=this.value();j=this._valueMin();l=this._valueMax();f=l!==j?(i-j)/(l-j)*100:0;h[c.orientation==="horizontal"?"left":"bottom"]=f+"%";this.handle.stop(1,1)[e?"animate":"css"](h,a.animate);if(b==="min"&&this.orientation==="horizontal")this.range.stop(1,
1)[e?"animate":"css"]({width:f+"%"},a.animate);if(b==="max"&&this.orientation==="horizontal")this.range[e?"animate":"css"]({width:100-f+"%"},{queue:false,duration:a.animate});if(b==="min"&&this.orientation==="vertical")this.range.stop(1,1)[e?"animate":"css"]({height:f+"%"},a.animate);if(b==="max"&&this.orientation==="vertical")this.range[e?"animate":"css"]({height:100-f+"%"},{queue:false,duration:a.animate})}}});d.extend(d.ui.slider,{version:"1.8.11"})})(jQuery);
;/*
 * jQuery UI Tabs 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Tabs
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 */
(function(d,p){function u(){return++v}function w(){return++x}var v=0,x=0;d.widget("ui.tabs",{options:{add:null,ajaxOptions:null,cache:false,cookie:null,collapsible:false,disable:null,disabled:[],enable:null,event:"click",fx:null,idPrefix:"ui-tabs-",load:null,panelTemplate:"<div></div>",remove:null,select:null,show:null,spinner:"<em>Loading&#8230;</em>",tabTemplate:"<li><a href='#{href}'><span>#{label}</span></a></li>"},_create:function(){this._tabify(true)},_setOption:function(b,e){if(b=="selected")this.options.collapsible&&
e==this.options.selected||this.select(e);else{this.options[b]=e;this._tabify()}},_tabId:function(b){return b.title&&b.title.replace(/\s/g,"_").replace(/[^\w\u00c0-\uFFFF-]/g,"")||this.options.idPrefix+u()},_sanitizeSelector:function(b){return b.replace(/:/g,"\\:")},_cookie:function(){var b=this.cookie||(this.cookie=this.options.cookie.name||"ui-tabs-"+w());return d.cookie.apply(null,[b].concat(d.makeArray(arguments)))},_ui:function(b,e){return{tab:b,panel:e,index:this.anchors.index(b)}},_cleanup:function(){this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function(){var b=
d(this);b.html(b.data("label.tabs")).removeData("label.tabs")})},_tabify:function(b){function e(g,f){g.css("display","");!d.support.opacity&&f.opacity&&g[0].style.removeAttribute("filter")}var a=this,c=this.options,h=/^#.+/;this.list=this.element.find("ol,ul").eq(0);this.lis=d(" > li:has(a[href])",this.list);this.anchors=this.lis.map(function(){return d("a",this)[0]});this.panels=d([]);this.anchors.each(function(g,f){var i=d(f).attr("href"),l=i.split("#")[0],q;if(l&&(l===location.toString().split("#")[0]||
(q=d("base")[0])&&l===q.href)){i=f.hash;f.href=i}if(h.test(i))a.panels=a.panels.add(a.element.find(a._sanitizeSelector(i)));else if(i&&i!=="#"){d.data(f,"href.tabs",i);d.data(f,"load.tabs",i.replace(/#.*$/,""));i=a._tabId(f);f.href="#"+i;f=a.element.find("#"+i);if(!f.length){f=d(c.panelTemplate).attr("id",i).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(a.panels[g-1]||a.list);f.data("destroy.tabs",true)}a.panels=a.panels.add(f)}else c.disabled.push(g)});if(b){this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all");
this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");this.lis.addClass("ui-state-default ui-corner-top");this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom");if(c.selected===p){location.hash&&this.anchors.each(function(g,f){if(f.hash==location.hash){c.selected=g;return false}});if(typeof c.selected!=="number"&&c.cookie)c.selected=parseInt(a._cookie(),10);if(typeof c.selected!=="number"&&this.lis.filter(".ui-tabs-selected").length)c.selected=
this.lis.index(this.lis.filter(".ui-tabs-selected"));c.selected=c.selected||(this.lis.length?0:-1)}else if(c.selected===null)c.selected=-1;c.selected=c.selected>=0&&this.anchors[c.selected]||c.selected<0?c.selected:0;c.disabled=d.unique(c.disabled.concat(d.map(this.lis.filter(".ui-state-disabled"),function(g){return a.lis.index(g)}))).sort();d.inArray(c.selected,c.disabled)!=-1&&c.disabled.splice(d.inArray(c.selected,c.disabled),1);this.panels.addClass("ui-tabs-hide");this.lis.removeClass("ui-tabs-selected ui-state-active");
if(c.selected>=0&&this.anchors.length){a.element.find(a._sanitizeSelector(a.anchors[c.selected].hash)).removeClass("ui-tabs-hide");this.lis.eq(c.selected).addClass("ui-tabs-selected ui-state-active");a.element.queue("tabs",function(){a._trigger("show",null,a._ui(a.anchors[c.selected],a.element.find(a._sanitizeSelector(a.anchors[c.selected].hash))[0]))});this.load(c.selected)}d(window).bind("unload",function(){a.lis.add(a.anchors).unbind(".tabs");a.lis=a.anchors=a.panels=null})}else c.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"));
this.element[c.collapsible?"addClass":"removeClass"]("ui-tabs-collapsible");c.cookie&&this._cookie(c.selected,c.cookie);b=0;for(var j;j=this.lis[b];b++)d(j)[d.inArray(b,c.disabled)!=-1&&!d(j).hasClass("ui-tabs-selected")?"addClass":"removeClass"]("ui-state-disabled");c.cache===false&&this.anchors.removeData("cache.tabs");this.lis.add(this.anchors).unbind(".tabs");if(c.event!=="mouseover"){var k=function(g,f){f.is(":not(.ui-state-disabled)")&&f.addClass("ui-state-"+g)},n=function(g,f){f.removeClass("ui-state-"+
g)};this.lis.bind("mouseover.tabs",function(){k("hover",d(this))});this.lis.bind("mouseout.tabs",function(){n("hover",d(this))});this.anchors.bind("focus.tabs",function(){k("focus",d(this).closest("li"))});this.anchors.bind("blur.tabs",function(){n("focus",d(this).closest("li"))})}var m,o;if(c.fx)if(d.isArray(c.fx)){m=c.fx[0];o=c.fx[1]}else m=o=c.fx;var r=o?function(g,f){d(g).closest("li").addClass("ui-tabs-selected ui-state-active");f.hide().removeClass("ui-tabs-hide").animate(o,o.duration||"normal",
function(){e(f,o);a._trigger("show",null,a._ui(g,f[0]))})}:function(g,f){d(g).closest("li").addClass("ui-tabs-selected ui-state-active");f.removeClass("ui-tabs-hide");a._trigger("show",null,a._ui(g,f[0]))},s=m?function(g,f){f.animate(m,m.duration||"normal",function(){a.lis.removeClass("ui-tabs-selected ui-state-active");f.addClass("ui-tabs-hide");e(f,m);a.element.dequeue("tabs")})}:function(g,f){a.lis.removeClass("ui-tabs-selected ui-state-active");f.addClass("ui-tabs-hide");a.element.dequeue("tabs")};
this.anchors.bind(c.event+".tabs",function(){var g=this,f=d(g).closest("li"),i=a.panels.filter(":not(.ui-tabs-hide)"),l=a.element.find(a._sanitizeSelector(g.hash));if(f.hasClass("ui-tabs-selected")&&!c.collapsible||f.hasClass("ui-state-disabled")||f.hasClass("ui-state-processing")||a.panels.filter(":animated").length||a._trigger("select",null,a._ui(this,l[0]))===false){this.blur();return false}c.selected=a.anchors.index(this);a.abort();if(c.collapsible)if(f.hasClass("ui-tabs-selected")){c.selected=
-1;c.cookie&&a._cookie(c.selected,c.cookie);a.element.queue("tabs",function(){s(g,i)}).dequeue("tabs");this.blur();return false}else if(!i.length){c.cookie&&a._cookie(c.selected,c.cookie);a.element.queue("tabs",function(){r(g,l)});a.load(a.anchors.index(this));this.blur();return false}c.cookie&&a._cookie(c.selected,c.cookie);if(l.length){i.length&&a.element.queue("tabs",function(){s(g,i)});a.element.queue("tabs",function(){r(g,l)});a.load(a.anchors.index(this))}else throw"jQuery UI Tabs: Mismatching fragment identifier.";
d.browser.msie&&this.blur()});this.anchors.bind("click.tabs",function(){return false})},_getIndex:function(b){if(typeof b=="string")b=this.anchors.index(this.anchors.filter("[href$="+b+"]"));return b},destroy:function(){var b=this.options;this.abort();this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs");this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");this.anchors.each(function(){var e=
d.data(this,"href.tabs");if(e)this.href=e;var a=d(this).unbind(".tabs");d.each(["href","load","cache"],function(c,h){a.removeData(h+".tabs")})});this.lis.unbind(".tabs").add(this.panels).each(function(){d.data(this,"destroy.tabs")?d(this).remove():d(this).removeClass("ui-state-default ui-corner-top ui-tabs-selected ui-state-active ui-state-hover ui-state-focus ui-state-disabled ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide")});b.cookie&&this._cookie(null,b.cookie);return this},add:function(b,
e,a){if(a===p)a=this.anchors.length;var c=this,h=this.options;e=d(h.tabTemplate.replace(/#\{href\}/g,b).replace(/#\{label\}/g,e));b=!b.indexOf("#")?b.replace("#",""):this._tabId(d("a",e)[0]);e.addClass("ui-state-default ui-corner-top").data("destroy.tabs",true);var j=c.element.find("#"+b);j.length||(j=d(h.panelTemplate).attr("id",b).data("destroy.tabs",true));j.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide");if(a>=this.lis.length){e.appendTo(this.list);j.appendTo(this.list[0].parentNode)}else{e.insertBefore(this.lis[a]);
j.insertBefore(this.panels[a])}h.disabled=d.map(h.disabled,function(k){return k>=a?++k:k});this._tabify();if(this.anchors.length==1){h.selected=0;e.addClass("ui-tabs-selected ui-state-active");j.removeClass("ui-tabs-hide");this.element.queue("tabs",function(){c._trigger("show",null,c._ui(c.anchors[0],c.panels[0]))});this.load(0)}this._trigger("add",null,this._ui(this.anchors[a],this.panels[a]));return this},remove:function(b){b=this._getIndex(b);var e=this.options,a=this.lis.eq(b).remove(),c=this.panels.eq(b).remove();
if(a.hasClass("ui-tabs-selected")&&this.anchors.length>1)this.select(b+(b+1<this.anchors.length?1:-1));e.disabled=d.map(d.grep(e.disabled,function(h){return h!=b}),function(h){return h>=b?--h:h});this._tabify();this._trigger("remove",null,this._ui(a.find("a")[0],c[0]));return this},enable:function(b){b=this._getIndex(b);var e=this.options;if(d.inArray(b,e.disabled)!=-1){this.lis.eq(b).removeClass("ui-state-disabled");e.disabled=d.grep(e.disabled,function(a){return a!=b});this._trigger("enable",null,
this._ui(this.anchors[b],this.panels[b]));return this}},disable:function(b){b=this._getIndex(b);var e=this.options;if(b!=e.selected){this.lis.eq(b).addClass("ui-state-disabled");e.disabled.push(b);e.disabled.sort();this._trigger("disable",null,this._ui(this.anchors[b],this.panels[b]))}return this},select:function(b){b=this._getIndex(b);if(b==-1)if(this.options.collapsible&&this.options.selected!=-1)b=this.options.selected;else return this;this.anchors.eq(b).trigger(this.options.event+".tabs");return this},
load:function(b){b=this._getIndex(b);var e=this,a=this.options,c=this.anchors.eq(b)[0],h=d.data(c,"load.tabs");this.abort();if(!h||this.element.queue("tabs").length!==0&&d.data(c,"cache.tabs"))this.element.dequeue("tabs");else{this.lis.eq(b).addClass("ui-state-processing");if(a.spinner){var j=d("span",c);j.data("label.tabs",j.html()).html(a.spinner)}this.xhr=d.ajax(d.extend({},a.ajaxOptions,{url:h,success:function(k,n){e.element.find(e._sanitizeSelector(c.hash)).html(k);e._cleanup();a.cache&&d.data(c,
"cache.tabs",true);e._trigger("load",null,e._ui(e.anchors[b],e.panels[b]));try{a.ajaxOptions.success(k,n)}catch(m){}},error:function(k,n){e._cleanup();e._trigger("load",null,e._ui(e.anchors[b],e.panels[b]));try{a.ajaxOptions.error(k,n,b,c)}catch(m){}}}));e.element.dequeue("tabs");return this}},abort:function(){this.element.queue([]);this.panels.stop(false,true);this.element.queue("tabs",this.element.queue("tabs").splice(-2,2));if(this.xhr){this.xhr.abort();delete this.xhr}this._cleanup();return this},
url:function(b,e){this.anchors.eq(b).removeData("cache.tabs").data("load.tabs",e);return this},length:function(){return this.anchors.length}});d.extend(d.ui.tabs,{version:"1.8.11"});d.extend(d.ui.tabs.prototype,{rotation:null,rotate:function(b,e){var a=this,c=this.options,h=a._rotate||(a._rotate=function(j){clearTimeout(a.rotation);a.rotation=setTimeout(function(){var k=c.selected;a.select(++k<a.anchors.length?k:0)},b);j&&j.stopPropagation()});e=a._unrotate||(a._unrotate=!e?function(j){j.clientX&&
a.rotate(null)}:function(){t=c.selected;h()});if(b){this.element.bind("tabsshow",h);this.anchors.bind(c.event+".tabs",e);h()}else{clearTimeout(a.rotation);this.element.unbind("tabsshow",h);this.anchors.unbind(c.event+".tabs",e);delete this._rotate;delete this._unrotate}return this}})})(jQuery);
;/*
 * jQuery UI Progressbar 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Progressbar
 *
 * Depends:
 *   jquery.ui.core.js
 *   jquery.ui.widget.js
 */
(function(b,d){b.widget("ui.progressbar",{options:{value:0,max:100},min:0,_create:function(){this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min,"aria-valuemax":this.options.max,"aria-valuenow":this._value()});this.valueDiv=b("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);this.oldValue=this._value();this._refreshValue()},destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
this.valueDiv.remove();b.Widget.prototype.destroy.apply(this,arguments)},value:function(a){if(a===d)return this._value();this._setOption("value",a);return this},_setOption:function(a,c){if(a==="value"){this.options.value=c;this._refreshValue();this._value()===this.options.max&&this._trigger("complete")}b.Widget.prototype._setOption.apply(this,arguments)},_value:function(){var a=this.options.value;if(typeof a!=="number")a=0;return Math.min(this.options.max,Math.max(this.min,a))},_percentage:function(){return 100*
this._value()/this.options.max},_refreshValue:function(){var a=this.value(),c=this._percentage();if(this.oldValue!==a){this.oldValue=a;this._trigger("change")}this.valueDiv.toggleClass("ui-corner-right",a===this.options.max).width(c.toFixed(0)+"%");this.element.attr("aria-valuenow",a)}});b.extend(b.ui.progressbar,{version:"1.8.11"})})(jQuery);
;/*
 * jQuery UI Effects 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/
 */
jQuery.effects||function(f,j){function n(c){var a;if(c&&c.constructor==Array&&c.length==3)return c;if(a=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(c))return[parseInt(a[1],10),parseInt(a[2],10),parseInt(a[3],10)];if(a=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(c))return[parseFloat(a[1])*2.55,parseFloat(a[2])*2.55,parseFloat(a[3])*2.55];if(a=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(c))return[parseInt(a[1],
16),parseInt(a[2],16),parseInt(a[3],16)];if(a=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(c))return[parseInt(a[1]+a[1],16),parseInt(a[2]+a[2],16),parseInt(a[3]+a[3],16)];if(/rgba\(0, 0, 0, 0\)/.exec(c))return o.transparent;return o[f.trim(c).toLowerCase()]}function s(c,a){var b;do{b=f.curCSS(c,a);if(b!=""&&b!="transparent"||f.nodeName(c,"body"))break;a="backgroundColor"}while(c=c.parentNode);return n(b)}function p(){var c=document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle,
a={},b,d;if(c&&c.length&&c[0]&&c[c[0]])for(var e=c.length;e--;){b=c[e];if(typeof c[b]=="string"){d=b.replace(/\-(\w)/g,function(g,h){return h.toUpperCase()});a[d]=c[b]}}else for(b in c)if(typeof c[b]==="string")a[b]=c[b];return a}function q(c){var a,b;for(a in c){b=c[a];if(b==null||f.isFunction(b)||a in t||/scrollbar/.test(a)||!/color/i.test(a)&&isNaN(parseFloat(b)))delete c[a]}return c}function u(c,a){var b={_:0},d;for(d in a)if(c[d]!=a[d])b[d]=a[d];return b}function k(c,a,b,d){if(typeof c=="object"){d=
a;b=null;a=c;c=a.effect}if(f.isFunction(a)){d=a;b=null;a={}}if(typeof a=="number"||f.fx.speeds[a]){d=b;b=a;a={}}if(f.isFunction(b)){d=b;b=null}a=a||{};b=b||a.duration;b=f.fx.off?0:typeof b=="number"?b:b in f.fx.speeds?f.fx.speeds[b]:f.fx.speeds._default;d=d||a.complete;return[c,a,b,d]}function m(c){if(!c||typeof c==="number"||f.fx.speeds[c])return true;if(typeof c==="string"&&!f.effects[c])return true;return false}f.effects={};f.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor",
"borderTopColor","borderColor","color","outlineColor"],function(c,a){f.fx.step[a]=function(b){if(!b.colorInit){b.start=s(b.elem,a);b.end=n(b.end);b.colorInit=true}b.elem.style[a]="rgb("+Math.max(Math.min(parseInt(b.pos*(b.end[0]-b.start[0])+b.start[0],10),255),0)+","+Math.max(Math.min(parseInt(b.pos*(b.end[1]-b.start[1])+b.start[1],10),255),0)+","+Math.max(Math.min(parseInt(b.pos*(b.end[2]-b.start[2])+b.start[2],10),255),0)+")"}});var o={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,
0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,
211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]},r=["add","remove","toggle"],t={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};f.effects.animateClass=function(c,a,b,
d){if(f.isFunction(b)){d=b;b=null}return this.queue("fx",function(){var e=f(this),g=e.attr("style")||" ",h=q(p.call(this)),l,v=e.attr("className");f.each(r,function(w,i){c[i]&&e[i+"Class"](c[i])});l=q(p.call(this));e.attr("className",v);e.animate(u(h,l),a,b,function(){f.each(r,function(w,i){c[i]&&e[i+"Class"](c[i])});if(typeof e.attr("style")=="object"){e.attr("style").cssText="";e.attr("style").cssText=g}else e.attr("style",g);d&&d.apply(this,arguments)});h=f.queue(this);l=h.splice(h.length-1,1)[0];
h.splice(1,0,l);f.dequeue(this)})};f.fn.extend({_addClass:f.fn.addClass,addClass:function(c,a,b,d){return a?f.effects.animateClass.apply(this,[{add:c},a,b,d]):this._addClass(c)},_removeClass:f.fn.removeClass,removeClass:function(c,a,b,d){return a?f.effects.animateClass.apply(this,[{remove:c},a,b,d]):this._removeClass(c)},_toggleClass:f.fn.toggleClass,toggleClass:function(c,a,b,d,e){return typeof a=="boolean"||a===j?b?f.effects.animateClass.apply(this,[a?{add:c}:{remove:c},b,d,e]):this._toggleClass(c,
a):f.effects.animateClass.apply(this,[{toggle:c},a,b,d])},switchClass:function(c,a,b,d,e){return f.effects.animateClass.apply(this,[{add:a,remove:c},b,d,e])}});f.extend(f.effects,{version:"1.8.11",save:function(c,a){for(var b=0;b<a.length;b++)a[b]!==null&&c.data("ec.storage."+a[b],c[0].style[a[b]])},restore:function(c,a){for(var b=0;b<a.length;b++)a[b]!==null&&c.css(a[b],c.data("ec.storage."+a[b]))},setMode:function(c,a){if(a=="toggle")a=c.is(":hidden")?"show":"hide";return a},getBaseline:function(c,
a){var b;switch(c[0]){case "top":b=0;break;case "middle":b=0.5;break;case "bottom":b=1;break;default:b=c[0]/a.height}switch(c[1]){case "left":c=0;break;case "center":c=0.5;break;case "right":c=1;break;default:c=c[1]/a.width}return{x:c,y:b}},createWrapper:function(c){if(c.parent().is(".ui-effects-wrapper"))return c.parent();var a={width:c.outerWidth(true),height:c.outerHeight(true),"float":c.css("float")},b=f("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",
border:"none",margin:0,padding:0});c.wrap(b);b=c.parent();if(c.css("position")=="static"){b.css({position:"relative"});c.css({position:"relative"})}else{f.extend(a,{position:c.css("position"),zIndex:c.css("z-index")});f.each(["top","left","bottom","right"],function(d,e){a[e]=c.css(e);if(isNaN(parseInt(a[e],10)))a[e]="auto"});c.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})}return b.css(a).show()},removeWrapper:function(c){if(c.parent().is(".ui-effects-wrapper"))return c.parent().replaceWith(c);
return c},setTransition:function(c,a,b,d){d=d||{};f.each(a,function(e,g){unit=c.cssUnit(g);if(unit[0]>0)d[g]=unit[0]*b+unit[1]});return d}});f.fn.extend({effect:function(c){var a=k.apply(this,arguments),b={options:a[1],duration:a[2],callback:a[3]};a=b.options.mode;var d=f.effects[c];if(f.fx.off||!d)return a?this[a](b.duration,b.callback):this.each(function(){b.callback&&b.callback.call(this)});return d.call(this,b)},_show:f.fn.show,show:function(c){if(m(c))return this._show.apply(this,arguments);
else{var a=k.apply(this,arguments);a[1].mode="show";return this.effect.apply(this,a)}},_hide:f.fn.hide,hide:function(c){if(m(c))return this._hide.apply(this,arguments);else{var a=k.apply(this,arguments);a[1].mode="hide";return this.effect.apply(this,a)}},__toggle:f.fn.toggle,toggle:function(c){if(m(c)||typeof c==="boolean"||f.isFunction(c))return this.__toggle.apply(this,arguments);else{var a=k.apply(this,arguments);a[1].mode="toggle";return this.effect.apply(this,a)}},cssUnit:function(c){var a=this.css(c),
b=[];f.each(["em","px","%","pt"],function(d,e){if(a.indexOf(e)>0)b=[parseFloat(a),e]});return b}});f.easing.jswing=f.easing.swing;f.extend(f.easing,{def:"easeOutQuad",swing:function(c,a,b,d,e){return f.easing[f.easing.def](c,a,b,d,e)},easeInQuad:function(c,a,b,d,e){return d*(a/=e)*a+b},easeOutQuad:function(c,a,b,d,e){return-d*(a/=e)*(a-2)+b},easeInOutQuad:function(c,a,b,d,e){if((a/=e/2)<1)return d/2*a*a+b;return-d/2*(--a*(a-2)-1)+b},easeInCubic:function(c,a,b,d,e){return d*(a/=e)*a*a+b},easeOutCubic:function(c,
a,b,d,e){return d*((a=a/e-1)*a*a+1)+b},easeInOutCubic:function(c,a,b,d,e){if((a/=e/2)<1)return d/2*a*a*a+b;return d/2*((a-=2)*a*a+2)+b},easeInQuart:function(c,a,b,d,e){return d*(a/=e)*a*a*a+b},easeOutQuart:function(c,a,b,d,e){return-d*((a=a/e-1)*a*a*a-1)+b},easeInOutQuart:function(c,a,b,d,e){if((a/=e/2)<1)return d/2*a*a*a*a+b;return-d/2*((a-=2)*a*a*a-2)+b},easeInQuint:function(c,a,b,d,e){return d*(a/=e)*a*a*a*a+b},easeOutQuint:function(c,a,b,d,e){return d*((a=a/e-1)*a*a*a*a+1)+b},easeInOutQuint:function(c,
a,b,d,e){if((a/=e/2)<1)return d/2*a*a*a*a*a+b;return d/2*((a-=2)*a*a*a*a+2)+b},easeInSine:function(c,a,b,d,e){return-d*Math.cos(a/e*(Math.PI/2))+d+b},easeOutSine:function(c,a,b,d,e){return d*Math.sin(a/e*(Math.PI/2))+b},easeInOutSine:function(c,a,b,d,e){return-d/2*(Math.cos(Math.PI*a/e)-1)+b},easeInExpo:function(c,a,b,d,e){return a==0?b:d*Math.pow(2,10*(a/e-1))+b},easeOutExpo:function(c,a,b,d,e){return a==e?b+d:d*(-Math.pow(2,-10*a/e)+1)+b},easeInOutExpo:function(c,a,b,d,e){if(a==0)return b;if(a==
e)return b+d;if((a/=e/2)<1)return d/2*Math.pow(2,10*(a-1))+b;return d/2*(-Math.pow(2,-10*--a)+2)+b},easeInCirc:function(c,a,b,d,e){return-d*(Math.sqrt(1-(a/=e)*a)-1)+b},easeOutCirc:function(c,a,b,d,e){return d*Math.sqrt(1-(a=a/e-1)*a)+b},easeInOutCirc:function(c,a,b,d,e){if((a/=e/2)<1)return-d/2*(Math.sqrt(1-a*a)-1)+b;return d/2*(Math.sqrt(1-(a-=2)*a)+1)+b},easeInElastic:function(c,a,b,d,e){c=1.70158;var g=0,h=d;if(a==0)return b;if((a/=e)==1)return b+d;g||(g=e*0.3);if(h<Math.abs(d)){h=d;c=g/4}else c=
g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(a-=1))*Math.sin((a*e-c)*2*Math.PI/g))+b},easeOutElastic:function(c,a,b,d,e){c=1.70158;var g=0,h=d;if(a==0)return b;if((a/=e)==1)return b+d;g||(g=e*0.3);if(h<Math.abs(d)){h=d;c=g/4}else c=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*a)*Math.sin((a*e-c)*2*Math.PI/g)+d+b},easeInOutElastic:function(c,a,b,d,e){c=1.70158;var g=0,h=d;if(a==0)return b;if((a/=e/2)==2)return b+d;g||(g=e*0.3*1.5);if(h<Math.abs(d)){h=d;c=g/4}else c=g/(2*Math.PI)*Math.asin(d/
h);if(a<1)return-0.5*h*Math.pow(2,10*(a-=1))*Math.sin((a*e-c)*2*Math.PI/g)+b;return h*Math.pow(2,-10*(a-=1))*Math.sin((a*e-c)*2*Math.PI/g)*0.5+d+b},easeInBack:function(c,a,b,d,e,g){if(g==j)g=1.70158;return d*(a/=e)*a*((g+1)*a-g)+b},easeOutBack:function(c,a,b,d,e,g){if(g==j)g=1.70158;return d*((a=a/e-1)*a*((g+1)*a+g)+1)+b},easeInOutBack:function(c,a,b,d,e,g){if(g==j)g=1.70158;if((a/=e/2)<1)return d/2*a*a*(((g*=1.525)+1)*a-g)+b;return d/2*((a-=2)*a*(((g*=1.525)+1)*a+g)+2)+b},easeInBounce:function(c,
a,b,d,e){return d-f.easing.easeOutBounce(c,e-a,0,d,e)+b},easeOutBounce:function(c,a,b,d,e){return(a/=e)<1/2.75?d*7.5625*a*a+b:a<2/2.75?d*(7.5625*(a-=1.5/2.75)*a+0.75)+b:a<2.5/2.75?d*(7.5625*(a-=2.25/2.75)*a+0.9375)+b:d*(7.5625*(a-=2.625/2.75)*a+0.984375)+b},easeInOutBounce:function(c,a,b,d,e){if(a<e/2)return f.easing.easeInBounce(c,a*2,0,d,e)*0.5+b;return f.easing.easeOutBounce(c,a*2-e,0,d,e)*0.5+d*0.5+b}})}(jQuery);
;/*
 * jQuery UI Effects Blind 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Blind
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(b){b.effects.blind=function(c){return this.queue(function(){var a=b(this),g=["position","top","bottom","left","right"],f=b.effects.setMode(a,c.options.mode||"hide"),d=c.options.direction||"vertical";b.effects.save(a,g);a.show();var e=b.effects.createWrapper(a).css({overflow:"hidden"}),h=d=="vertical"?"height":"width";d=d=="vertical"?e.height():e.width();f=="show"&&e.css(h,0);var i={};i[h]=f=="show"?d:0;e.animate(i,c.duration,c.options.easing,function(){f=="hide"&&a.hide();b.effects.restore(a,
g);b.effects.removeWrapper(a);c.callback&&c.callback.apply(a[0],arguments);a.dequeue()})})}})(jQuery);
;/*
 * jQuery UI Effects Bounce 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Bounce
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(e){e.effects.bounce=function(b){return this.queue(function(){var a=e(this),l=["position","top","bottom","left","right"],h=e.effects.setMode(a,b.options.mode||"effect"),d=b.options.direction||"up",c=b.options.distance||20,m=b.options.times||5,i=b.duration||250;/show|hide/.test(h)&&l.push("opacity");e.effects.save(a,l);a.show();e.effects.createWrapper(a);var f=d=="up"||d=="down"?"top":"left";d=d=="up"||d=="left"?"pos":"neg";c=b.options.distance||(f=="top"?a.outerHeight({margin:true})/3:a.outerWidth({margin:true})/
3);if(h=="show")a.css("opacity",0).css(f,d=="pos"?-c:c);if(h=="hide")c/=m*2;h!="hide"&&m--;if(h=="show"){var g={opacity:1};g[f]=(d=="pos"?"+=":"-=")+c;a.animate(g,i/2,b.options.easing);c/=2;m--}for(g=0;g<m;g++){var j={},k={};j[f]=(d=="pos"?"-=":"+=")+c;k[f]=(d=="pos"?"+=":"-=")+c;a.animate(j,i/2,b.options.easing).animate(k,i/2,b.options.easing);c=h=="hide"?c*2:c/2}if(h=="hide"){g={opacity:0};g[f]=(d=="pos"?"-=":"+=")+c;a.animate(g,i/2,b.options.easing,function(){a.hide();e.effects.restore(a,l);e.effects.removeWrapper(a);
b.callback&&b.callback.apply(this,arguments)})}else{j={};k={};j[f]=(d=="pos"?"-=":"+=")+c;k[f]=(d=="pos"?"+=":"-=")+c;a.animate(j,i/2,b.options.easing).animate(k,i/2,b.options.easing,function(){e.effects.restore(a,l);e.effects.removeWrapper(a);b.callback&&b.callback.apply(this,arguments)})}a.queue("fx",function(){a.dequeue()});a.dequeue()})}})(jQuery);
;/*
 * jQuery UI Effects Clip 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Clip
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(b){b.effects.clip=function(e){return this.queue(function(){var a=b(this),i=["position","top","bottom","left","right","height","width"],f=b.effects.setMode(a,e.options.mode||"hide"),c=e.options.direction||"vertical";b.effects.save(a,i);a.show();var d=b.effects.createWrapper(a).css({overflow:"hidden"});d=a[0].tagName=="IMG"?d:a;var g={size:c=="vertical"?"height":"width",position:c=="vertical"?"top":"left"};c=c=="vertical"?d.height():d.width();if(f=="show"){d.css(g.size,0);d.css(g.position,
c/2)}var h={};h[g.size]=f=="show"?c:0;h[g.position]=f=="show"?0:c/2;d.animate(h,{queue:false,duration:e.duration,easing:e.options.easing,complete:function(){f=="hide"&&a.hide();b.effects.restore(a,i);b.effects.removeWrapper(a);e.callback&&e.callback.apply(a[0],arguments);a.dequeue()}})})}})(jQuery);
;/*
 * jQuery UI Effects Drop 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Drop
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(c){c.effects.drop=function(d){return this.queue(function(){var a=c(this),h=["position","top","bottom","left","right","opacity"],e=c.effects.setMode(a,d.options.mode||"hide"),b=d.options.direction||"left";c.effects.save(a,h);a.show();c.effects.createWrapper(a);var f=b=="up"||b=="down"?"top":"left";b=b=="up"||b=="left"?"pos":"neg";var g=d.options.distance||(f=="top"?a.outerHeight({margin:true})/2:a.outerWidth({margin:true})/2);if(e=="show")a.css("opacity",0).css(f,b=="pos"?-g:g);var i={opacity:e==
"show"?1:0};i[f]=(e=="show"?b=="pos"?"+=":"-=":b=="pos"?"-=":"+=")+g;a.animate(i,{queue:false,duration:d.duration,easing:d.options.easing,complete:function(){e=="hide"&&a.hide();c.effects.restore(a,h);c.effects.removeWrapper(a);d.callback&&d.callback.apply(this,arguments);a.dequeue()}})})}})(jQuery);
;/*
 * jQuery UI Effects Explode 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Explode
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(j){j.effects.explode=function(a){return this.queue(function(){var c=a.options.pieces?Math.round(Math.sqrt(a.options.pieces)):3,d=a.options.pieces?Math.round(Math.sqrt(a.options.pieces)):3;a.options.mode=a.options.mode=="toggle"?j(this).is(":visible")?"hide":"show":a.options.mode;var b=j(this).show().css("visibility","hidden"),g=b.offset();g.top-=parseInt(b.css("marginTop"),10)||0;g.left-=parseInt(b.css("marginLeft"),10)||0;for(var h=b.outerWidth(true),i=b.outerHeight(true),e=0;e<c;e++)for(var f=
0;f<d;f++)b.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-f*(h/d),top:-e*(i/c)}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:h/d,height:i/c,left:g.left+f*(h/d)+(a.options.mode=="show"?(f-Math.floor(d/2))*(h/d):0),top:g.top+e*(i/c)+(a.options.mode=="show"?(e-Math.floor(c/2))*(i/c):0),opacity:a.options.mode=="show"?0:1}).animate({left:g.left+f*(h/d)+(a.options.mode=="show"?0:(f-Math.floor(d/2))*(h/d)),top:g.top+
e*(i/c)+(a.options.mode=="show"?0:(e-Math.floor(c/2))*(i/c)),opacity:a.options.mode=="show"?1:0},a.duration||500);setTimeout(function(){a.options.mode=="show"?b.css({visibility:"visible"}):b.css({visibility:"visible"}).hide();a.callback&&a.callback.apply(b[0]);b.dequeue();j("div.ui-effects-explode").remove()},a.duration||500)})}})(jQuery);
;/*
 * jQuery UI Effects Fade 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Fade
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(b){b.effects.fade=function(a){return this.queue(function(){var c=b(this),d=b.effects.setMode(c,a.options.mode||"hide");c.animate({opacity:d},{queue:false,duration:a.duration,easing:a.options.easing,complete:function(){a.callback&&a.callback.apply(this,arguments);c.dequeue()}})})}})(jQuery);
;/*
 * jQuery UI Effects Fold 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Fold
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(c){c.effects.fold=function(a){return this.queue(function(){var b=c(this),j=["position","top","bottom","left","right"],d=c.effects.setMode(b,a.options.mode||"hide"),g=a.options.size||15,h=!!a.options.horizFirst,k=a.duration?a.duration/2:c.fx.speeds._default/2;c.effects.save(b,j);b.show();var e=c.effects.createWrapper(b).css({overflow:"hidden"}),f=d=="show"!=h,l=f?["width","height"]:["height","width"];f=f?[e.width(),e.height()]:[e.height(),e.width()];var i=/([0-9]+)%/.exec(g);if(i)g=parseInt(i[1],
10)/100*f[d=="hide"?0:1];if(d=="show")e.css(h?{height:0,width:g}:{height:g,width:0});h={};i={};h[l[0]]=d=="show"?f[0]:g;i[l[1]]=d=="show"?f[1]:0;e.animate(h,k,a.options.easing).animate(i,k,a.options.easing,function(){d=="hide"&&b.hide();c.effects.restore(b,j);c.effects.removeWrapper(b);a.callback&&a.callback.apply(b[0],arguments);b.dequeue()})})}})(jQuery);
;/*
 * jQuery UI Effects Highlight 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Highlight
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(b){b.effects.highlight=function(c){return this.queue(function(){var a=b(this),e=["backgroundImage","backgroundColor","opacity"],d=b.effects.setMode(a,c.options.mode||"show"),f={backgroundColor:a.css("backgroundColor")};if(d=="hide")f.opacity=0;b.effects.save(a,e);a.show().css({backgroundImage:"none",backgroundColor:c.options.color||"#ffff99"}).animate(f,{queue:false,duration:c.duration,easing:c.options.easing,complete:function(){d=="hide"&&a.hide();b.effects.restore(a,e);d=="show"&&!b.support.opacity&&
this.style.removeAttribute("filter");c.callback&&c.callback.apply(this,arguments);a.dequeue()}})})}})(jQuery);
;/*
 * jQuery UI Effects Pulsate 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Pulsate
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(d){d.effects.pulsate=function(a){return this.queue(function(){var b=d(this),c=d.effects.setMode(b,a.options.mode||"show");times=(a.options.times||5)*2-1;duration=a.duration?a.duration/2:d.fx.speeds._default/2;isVisible=b.is(":visible");animateTo=0;if(!isVisible){b.css("opacity",0).show();animateTo=1}if(c=="hide"&&isVisible||c=="show"&&!isVisible)times--;for(c=0;c<times;c++){b.animate({opacity:animateTo},duration,a.options.easing);animateTo=(animateTo+1)%2}b.animate({opacity:animateTo},duration,
a.options.easing,function(){animateTo==0&&b.hide();a.callback&&a.callback.apply(this,arguments)});b.queue("fx",function(){b.dequeue()}).dequeue()})}})(jQuery);
;/*
 * jQuery UI Effects Scale 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Scale
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(c){c.effects.puff=function(b){return this.queue(function(){var a=c(this),e=c.effects.setMode(a,b.options.mode||"hide"),g=parseInt(b.options.percent,10)||150,h=g/100,i={height:a.height(),width:a.width()};c.extend(b.options,{fade:true,mode:e,percent:e=="hide"?g:100,from:e=="hide"?i:{height:i.height*h,width:i.width*h}});a.effect("scale",b.options,b.duration,b.callback);a.dequeue()})};c.effects.scale=function(b){return this.queue(function(){var a=c(this),e=c.extend(true,{},b.options),g=c.effects.setMode(a,
b.options.mode||"effect"),h=parseInt(b.options.percent,10)||(parseInt(b.options.percent,10)==0?0:g=="hide"?0:100),i=b.options.direction||"both",f=b.options.origin;if(g!="effect"){e.origin=f||["middle","center"];e.restore=true}f={height:a.height(),width:a.width()};a.from=b.options.from||(g=="show"?{height:0,width:0}:f);h={y:i!="horizontal"?h/100:1,x:i!="vertical"?h/100:1};a.to={height:f.height*h.y,width:f.width*h.x};if(b.options.fade){if(g=="show"){a.from.opacity=0;a.to.opacity=1}if(g=="hide"){a.from.opacity=
1;a.to.opacity=0}}e.from=a.from;e.to=a.to;e.mode=g;a.effect("size",e,b.duration,b.callback);a.dequeue()})};c.effects.size=function(b){return this.queue(function(){var a=c(this),e=["position","top","bottom","left","right","width","height","overflow","opacity"],g=["position","top","bottom","left","right","overflow","opacity"],h=["width","height","overflow"],i=["fontSize"],f=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],k=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],
p=c.effects.setMode(a,b.options.mode||"effect"),n=b.options.restore||false,m=b.options.scale||"both",l=b.options.origin,j={height:a.height(),width:a.width()};a.from=b.options.from||j;a.to=b.options.to||j;if(l){l=c.effects.getBaseline(l,j);a.from.top=(j.height-a.from.height)*l.y;a.from.left=(j.width-a.from.width)*l.x;a.to.top=(j.height-a.to.height)*l.y;a.to.left=(j.width-a.to.width)*l.x}var d={from:{y:a.from.height/j.height,x:a.from.width/j.width},to:{y:a.to.height/j.height,x:a.to.width/j.width}};
if(m=="box"||m=="both"){if(d.from.y!=d.to.y){e=e.concat(f);a.from=c.effects.setTransition(a,f,d.from.y,a.from);a.to=c.effects.setTransition(a,f,d.to.y,a.to)}if(d.from.x!=d.to.x){e=e.concat(k);a.from=c.effects.setTransition(a,k,d.from.x,a.from);a.to=c.effects.setTransition(a,k,d.to.x,a.to)}}if(m=="content"||m=="both")if(d.from.y!=d.to.y){e=e.concat(i);a.from=c.effects.setTransition(a,i,d.from.y,a.from);a.to=c.effects.setTransition(a,i,d.to.y,a.to)}c.effects.save(a,n?e:g);a.show();c.effects.createWrapper(a);
a.css("overflow","hidden").css(a.from);if(m=="content"||m=="both"){f=f.concat(["marginTop","marginBottom"]).concat(i);k=k.concat(["marginLeft","marginRight"]);h=e.concat(f).concat(k);a.find("*[width]").each(function(){child=c(this);n&&c.effects.save(child,h);var o={height:child.height(),width:child.width()};child.from={height:o.height*d.from.y,width:o.width*d.from.x};child.to={height:o.height*d.to.y,width:o.width*d.to.x};if(d.from.y!=d.to.y){child.from=c.effects.setTransition(child,f,d.from.y,child.from);
child.to=c.effects.setTransition(child,f,d.to.y,child.to)}if(d.from.x!=d.to.x){child.from=c.effects.setTransition(child,k,d.from.x,child.from);child.to=c.effects.setTransition(child,k,d.to.x,child.to)}child.css(child.from);child.animate(child.to,b.duration,b.options.easing,function(){n&&c.effects.restore(child,h)})})}a.animate(a.to,{queue:false,duration:b.duration,easing:b.options.easing,complete:function(){a.to.opacity===0&&a.css("opacity",a.from.opacity);p=="hide"&&a.hide();c.effects.restore(a,
n?e:g);c.effects.removeWrapper(a);b.callback&&b.callback.apply(this,arguments);a.dequeue()}})})}})(jQuery);
;/*
 * jQuery UI Effects Shake 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Shake
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(d){d.effects.shake=function(a){return this.queue(function(){var b=d(this),j=["position","top","bottom","left","right"];d.effects.setMode(b,a.options.mode||"effect");var c=a.options.direction||"left",e=a.options.distance||20,l=a.options.times||3,f=a.duration||a.options.duration||140;d.effects.save(b,j);b.show();d.effects.createWrapper(b);var g=c=="up"||c=="down"?"top":"left",h=c=="up"||c=="left"?"pos":"neg";c={};var i={},k={};c[g]=(h=="pos"?"-=":"+=")+e;i[g]=(h=="pos"?"+=":"-=")+e*2;k[g]=
(h=="pos"?"-=":"+=")+e*2;b.animate(c,f,a.options.easing);for(e=1;e<l;e++)b.animate(i,f,a.options.easing).animate(k,f,a.options.easing);b.animate(i,f,a.options.easing).animate(c,f/2,a.options.easing,function(){d.effects.restore(b,j);d.effects.removeWrapper(b);a.callback&&a.callback.apply(this,arguments)});b.queue("fx",function(){b.dequeue()});b.dequeue()})}})(jQuery);
;/*
 * jQuery UI Effects Slide 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Slide
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(c){c.effects.slide=function(d){return this.queue(function(){var a=c(this),h=["position","top","bottom","left","right"],f=c.effects.setMode(a,d.options.mode||"show"),b=d.options.direction||"left";c.effects.save(a,h);a.show();c.effects.createWrapper(a).css({overflow:"hidden"});var g=b=="up"||b=="down"?"top":"left";b=b=="up"||b=="left"?"pos":"neg";var e=d.options.distance||(g=="top"?a.outerHeight({margin:true}):a.outerWidth({margin:true}));if(f=="show")a.css(g,b=="pos"?isNaN(e)?"-"+e:-e:e);
var i={};i[g]=(f=="show"?b=="pos"?"+=":"-=":b=="pos"?"-=":"+=")+e;a.animate(i,{queue:false,duration:d.duration,easing:d.options.easing,complete:function(){f=="hide"&&a.hide();c.effects.restore(a,h);c.effects.removeWrapper(a);d.callback&&d.callback.apply(this,arguments);a.dequeue()}})})}})(jQuery);
;/*
 * jQuery UI Effects Transfer 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Transfer
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(e){e.effects.transfer=function(a){return this.queue(function(){var b=e(this),c=e(a.options.to),d=c.offset();c={top:d.top,left:d.left,height:c.innerHeight(),width:c.innerWidth()};d=b.offset();var f=e('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(a.options.className).css({top:d.top,left:d.left,height:b.innerHeight(),width:b.innerWidth(),position:"absolute"}).animate(c,a.duration,a.options.easing,function(){f.remove();a.callback&&a.callback.apply(b[0],arguments);
b.dequeue()})})}})(jQuery);
;
/*
 * jQuery UI Menu (not officially released, minified manually with http://marijnhaverbeke.nl/uglifyjs)
 *
 * Version/date of Atlassian copy unknown, sometime previous to 2011.04.14
 * 
 * This widget isn't yet finished and the API is subject to change. We plan to finish
 * it for the next release. You're welcome to give it a try anyway and give us feedback,
 * as long as you're okay with migrating your code later on. We can help with that, too.
 *
 * Copyright (c) 2010 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI/Menu
 *
 * Depends:
 *	jquery.ui.core.js
 *  jquery.ui.widget.js
 */
(function(a){a.widget("ui.menu",{_create:function(){var b=this;this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({role:"listbox","aria-activedescendant":"ui-active-menuitem"}).click(function(c){!a(c.target).closest(".ui-menu-item a").length||(c.preventDefault(),b.select(c))}),this.refresh()},refresh:function(){var b=this,c=this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","menuitem");c.children("a").addClass("ui-corner-all").attr("tabindex",-1).mouseenter(function(c){b.activate(c,a(this).parent())}).mouseleave(function(){b.deactivate()})},activate:function(a,b){this.deactivate();if(this.hasScroll()){var c=b.offset().top-this.element.offset().top,d=this.element.attr("scrollTop"),e=this.element.height();c<0?this.element.attr("scrollTop",d+c):c>e&&this.element.attr("scrollTop",d+c-e+b.height())}this.active=b.eq(0).children("a").addClass("ui-state-hover").attr("id","ui-active-menuitem").end(),this._trigger("focus",a,{item:b})},deactivate:function(){!this.active||(this.active.children("a").removeClass("ui-state-hover").removeAttr("id"),this._trigger("blur"),this.active=null)},next:function(a){this.move("next",".ui-menu-item:first",a)},previous:function(a){this.move("prev",".ui-menu-item:last",a)},first:function(){return this.active&&!this.active.prev().length},last:function(){return this.active&&!this.active.next().length},move:function(a,b,c){if(!this.active)this.activate(c,this.element.children(b));else{var d=this.active[a+"All"](".ui-menu-item").eq(0);d.length?this.activate(c,d):this.activate(c,this.element.children(b))}},nextPage:function(b){if(this.hasScroll()){if(!this.active||this.last()){this.activate(b,this.element.children(":first"));return}var c=this.active.offset().top,d=this.element.height(),e=this.element.children("li").filter(function(){var b=a(this).offset().top-c-d+a(this).height();return b<10&&b>-10});e.length||(e=this.element.children(":last")),this.activate(b,e)}else this.activate(b,this.element.children(!this.active||this.last()?":first":":last"))},previousPage:function(b){if(this.hasScroll()){if(!this.active||this.first()){this.activate(b,this.element.children(":last"));return}var c=this.active.offset().top,d=this.element.height();result=this.element.children("li").filter(function(){var b=a(this).offset().top-c+d-a(this).height();return b<10&&b>-10}),result.length||(result=this.element.children(":first")),this.activate(b,result)}else this.activate(b,this.element.children(!this.active||this.first()?":last":":first"))},hasScroll:function(){return this.element.height()<this.element.attr("scrollHeight")},select:function(a){this._trigger("selected",a,{item:this.active})}})})(jQuery)

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
var DragnDropSupport=(function(){var c,a;try{c=new XMLHttpRequest();a=!!(c.sendAsBinary||c.upload)&&!(jQuery.browser.mozilla&&jQuery.browser.version.indexOf("1.9.1")>-1)}catch(b){a=false}c=null;return{hasXhrSupport:a}})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
AJS.DragAndDrop={};(function(b){var c,a=/^\w+:\/\/[^\/?#]+/.exec(location.href);AJS.DragAndDropUtils={hasXhrOrGearsSupport:function(){return(AJS.DragAndDropUtils.hasXhrSupport||AJS.DragAndDropUtils.isGearsInstalledNoPrompt())},hasXhrSupport:DragnDropSupport.hasXhrSupport,base:a,init:function(d){d&&d(DragnDropSupport.hasXhrSupport)},bindDragEnter:function(d,f){if(d.addEventListener){f=(this.isFireFox35OrLater()?this.firefox35DragEnterAndOverCallbackWrapper(f):f);f&&d.addEventListener("dragenter",f,false)}else{if(d.attachEvent){var e=this.ieDragEnterAndDragOverCallbackWrapper(f);d.attachEvent("ondragenter",e);b(window).unload(function(){d.detachEvent("ondragenter",e)})}}},bindDragOver:function(d,f){if(d.addEventListener){if(this.isFireFox35OrLater()){f=this.firefox35DragEnterAndOverCallbackWrapper(f)}else{if(b.browser.safari){f=this.safariDragOverCallbackWrapper(f)}}f&&d.addEventListener("dragover",f,false)}else{if(d.attachEvent){var e=this.ieDragEnterAndDragOverCallbackWrapper(f);d.attachEvent("ondragover",e);b(window).unload(function(){d.detachEvent("ondragover",e)})}}},bindDragLeave:function(d,e){if(!e){return}if(b.browser.safari||this.isFireFox35OrLater()){d.addEventListener("dragleave",e,false)}else{if(b.browser.mozilla){d.addEventListener("dragexit",e,false)}else{if(b.browser.msie){d.attachEvent("ondragleave",e);b(window).unload(function(){d.detachEvent("ondragleave",e)})}}}},bindDrop:function(e,g){if(b.browser.mozilla){var d=(this.isFireFox35OrLater()?"drop":"dragdrop");e.addEventListener(d,this.mozillaDropCallbackWrapper(g),false)}else{if(b.browser.msie){if(g){var f=function(h){g(h);AJS.DragAndDropUtils.stopPropagation(h)};e.attachEvent("ondrop",f);b(window).unload(function(){e.detachEvent("ondrop",f)})}}else{if(b.browser.safari){g&&e.addEventListener("drop",function(h){g(h);AJS.DragAndDropUtils.stopPropagation(h)},false)}}}},niceSize:function(d){var g=[" B"," kB"," MB"," GB"," TB"," PB"," EB"," ZB"," YB"];for(var e=0,f=g.length;e<f;e++){if(d<Math.pow(2,10*(e+1))){return(!e?d:(d/Math.pow(2,10*e)).toFixed(2))+g[e]
}}return(d/Math.pow(2,10*(e+1))).toFixed(2)+g[g.length-1]},ieDragEnterAndDragOverCallbackWrapper:function(d){return function(f){f=f||window.event;if(!f){return}d&&d(f);b.browser.msie&&(f.returnValue=false)}},safariDragOverCallbackWrapper:function(d){return function(f){f=f||window.event;if(!f){return}if(f.target.type=="file"){return}d&&d(f);(b.inArray("public.file-url",f.dataTransfer.types)!=-1)&&f.preventDefault()}},mozillaDropCallbackWrapper:function(d){return function(f){if(!f){return}d&&d(f);f.preventDefault();if(AJS.DragAndDropUtils.isFireFox35OrLater()){AJS.DragAndDropUtils.firefox35FileDataInEvent(f)&&f.stopPropagation()}else{f.stopPropagation()}}},firefox35DragEnterAndOverCallbackWrapper:function(d){return function(f){if(!f){return}d&&d(f);AJS.DragAndDropUtils.firefox35FileDataInEvent(f)&&f.preventDefault()}},firefox35FileDataInEvent:function(d){return b.inArray("application/x-moz-file",d.dataTransfer.types)!=-1},stopPropagation:function(d){d=d||window.event;if(!d){return}if(d.stopPropagation){d.stopPropagation()}else{d.cancelBubble=true}},preventDefault:function(d){d=d||window.event;if(!d){return}if(d.preventDefault){d.preventDefault()}else{d.returnValue=false}},isGearsInstalledNoPrompt:function(){try{return !!window.google&&!!google.gears&&!!google.gears.factory.create("beta.desktop")}catch(d){return false}},isGearsInstalledWithPermissions:function(d){var e={returnUrl:location.href};d=b.extend({},e,d);if(AJS.DragAndDropUtils.isGearsInstalledNoPrompt()){return google.gears.factory.getPermission("Confluence",Confluence.getContextPath()+"/images/logo/confluence_64.png","Allow Confluence to use Google Gears to perform drag-and-drop file uploads?")}else{AJS.log("Gears installation prompt is disabled, since it has been discontinued");return false}},isFireFox35OrLater:function(){return !this.isFireFox30()&&b.browser.version.indexOf("1.9.")!=-1},isFireFox30:function(){return b.browser.version.indexOf("1.9.0")!=-1},isIE9:function(){if(AJS.$.browser.msie){var d=parseFloat(AJS.$.browser.version);
if(d>=9&&d<10){return true}}return false},enableDropZoneOn:function(d,e){if(!d){throw new Error("Cannot enable drop zone on invalid container. Received: "+d)}e=e||AJS.DragAndDrop.defaultDropHandler;this.bindDragEnter(d);this.bindDragOver(d);this.bindDragLeave(d);this.bindDrop(d,e)},getFilesFromDropEvent:function(f){if(AJS.DragAndDropUtils.isFolderDropEvent(f)){AJS.DragAndDropUtils.displayMessageDialog("No files were found in the items dragged onto this window. It is possible that you may have dragged a folder - this is not supported. \u003cp>\u003cstrong>Note to Mac OSX users:\u003c\/strong> Some items may appear as files but are actually folders and are therefore not supported. Examples include iWork and Keynote files.\u003c\/p>");return[]}var g=this.getDesktopInstance().getDragData(f,"application/x-gears-files");var d;try{d=g&&g.files}catch(h){AJS.log("Error retrieving file data from drop event")}return d||[]},isFolderDropEvent:function(d){try{return(this.getDesktopInstance().getDragData(d,"application/x-gears-files")||{}).count==0}catch(f){AJS.log("Error retrieving file data from drop event")}},displayMessageDialog:function(e){var d=new AJS.Dialog(600,200,"drag-and-drop-message-dialog");d.addHeader("Drag & Drop").addPanel("Panel 1","<div>"+e+"</div>").addButton("Done",function(f){d.remove()});d.show()},getDesktopInstance:function(){if(!c){c=google.gears.factory.create("beta.desktop")}return c}}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
(function(){var f=0,k=[],m={},i={},a={"<":"lt",">":"gt","&":"amp",'"':"quot","'":"#39"},l=/[<>&\"\']/g,b,c=window.setTimeout,d={},e;function h(){this.returnValue=false}function j(){this.cancelBubble=true}(function(n){var o=n.split(/,/),p,r,q;for(p=0;p<o.length;p+=2){q=o[p+1].split(/ /);for(r=0;r<q.length;r++){i[q[r]]=o[p]}}})("application/msword,doc dot,application/pdf,pdf,application/pgp-signature,pgp,application/postscript,ps ai eps,application/rtf,rtf,application/vnd.ms-excel,xls xlb,application/vnd.ms-powerpoint,ppt pps pot,application/zip,zip,application/x-shockwave-flash,swf swfl,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,xlsx,application/vnd.openxmlformats-officedocument.spreadsheetml.template,xltx,application/vnd.openxmlformats-officedocument.presentationml.presentation,pptx,application/vnd.openxmlformats-officedocument.presentationml.slideshow,ppsx,application/vnd.openxmlformats-officedocument.presentationml.template,potx,application/vnd.openxmlformats-officedocument.wordprocessingml.document,docx,application/vnd.openxmlformats-officedocument.wordprocessingml.template,dotx,audio/mpeg,mpga mpega mp2 mp3,audio/x-wav,wav,audio/mp4,m4a,image/bmp,bmp,image/gif,gif,image/jpeg,jpeg jpg jpe,image/photoshop,psd,image/png,png,image/svg+xml,svg svgz,image/tiff,tiff tif,text/html,htm html xhtml,text/rtf,rtf,video/mpeg,mpeg mpg mpe,video/quicktime,qt mov,video/mp4,mp4,video/x-m4v,m4v,video/x-flv,flv,video/x-ms-wmv,wmv,video/avi,avi,video/webm,webm,video/vnd.rn-realvideo,rv,text/csv,csv,text/plain,asc txt text diff log,application/octet-stream,exe");var g={VERSION:"@@version@@",STOPPED:1,STARTED:2,QUEUED:1,UPLOADING:2,FAILED:4,DONE:5,GENERIC_ERROR:-100,HTTP_ERROR:-200,IO_ERROR:-300,SECURITY_ERROR:-400,INIT_ERROR:-500,FILE_SIZE_ERROR:-600,FILE_EXTENSION_ERROR:-601,IMAGE_FORMAT_ERROR:-700,IMAGE_MEMORY_ERROR:-701,IMAGE_DIMENSIONS_ERROR:-702,mimeTypes:i,ua:(function(){var r=navigator,q=r.userAgent,s=r.vendor,o,n,p;o=/WebKit/.test(q);p=o&&s.indexOf("Apple")!==-1;
n=window.opera&&window.opera.buildNumber;return{windows:navigator.platform.indexOf("Win")!==-1,ie:!o&&!n&&(/MSIE/gi).test(q)&&(/Explorer/gi).test(r.appName),webkit:o,gecko:!o&&/Gecko/.test(q),safari:p,opera:!!n}}()),extend:function(n){g.each(arguments,function(o,p){if(p>0){g.each(o,function(r,q){n[q]=r})}});return n},getElement:function(n){return n&&n.nodeType==1?n:document.getElementById(n)},cleanName:function(n){var o,p;p=[/[\300-\306]/g,"A",/[\340-\346]/g,"a",/\307/g,"C",/\347/g,"c",/[\310-\313]/g,"E",/[\350-\353]/g,"e",/[\314-\317]/g,"I",/[\354-\357]/g,"i",/\321/g,"N",/\361/g,"n",/[\322-\330]/g,"O",/[\362-\370]/g,"o",/[\331-\334]/g,"U",/[\371-\374]/g,"u"];for(o=0;o<p.length;o+=2){n=n.replace(p[o],p[o+1])}n=n.replace(/\s+/g,"_");n=n.replace(/[^a-z0-9_\-\.]+/gi,"");return n},addRuntime:function(n,o){o.name=n;k[n]=o;k.push(o);return o},guid:function(){var n=new Date().getTime().toString(32),o;for(o=0;o<5;o++){n+=Math.floor(Math.random()*65535).toString(32)}return(g.guidPrefix||"p")+n+(f++).toString(32)},buildUrl:function(o,n){var p="";g.each(n,function(r,q){p+=(p?"&":"")+encodeURIComponent(q)+"="+encodeURIComponent(r)});if(p){o+=(o.indexOf("?")>0?"&":"?")+p}return o},each:function(q,r){var p,o,n;if(q){p=q.length;if(p===b){for(o in q){if(q.hasOwnProperty(o)){if(r(q[o],o)===false){return}}}}else{for(n=0;n<p;n++){if(r(q[n],n)===false){return}}}}},formatSize:function(n){if(n===b||/\D/.test(n)){return g.translate("N/A")}if(n>1073741824){return Math.round(n/1073741824,1)+" GB"}if(n>1048576){return Math.round(n/1048576,1)+" MB"}if(n>1024){return Math.round(n/1024,1)+" KB"}return n+" b"},getPos:function(o,s){var t=0,r=0,v,u=document,p,q;o=o;s=s||u.body;function n(B){var z,A,w=0,C=0;if(B){A=B.getBoundingClientRect();z=u.compatMode==="CSS1Compat"?u.documentElement:u.body;w=A.left+z.scrollLeft;C=A.top+z.scrollTop}return{x:w,y:C}}if(o&&o.getBoundingClientRect&&(navigator.userAgent.indexOf("MSIE")>0&&u.documentMode!==8)){p=n(o);q=n(s);return{x:p.x-q.x,y:p.y-q.y}}v=o;while(v&&v!=s&&v.nodeType){t+=v.offsetLeft||0;
r+=v.offsetTop||0;v=v.offsetParent}v=o.parentNode;while(v&&v!=s&&v.nodeType){t-=v.scrollLeft||0;r-=v.scrollTop||0;v=v.parentNode}return{x:t,y:r}},getSize:function(n){return{w:n.offsetWidth||n.clientWidth,h:n.offsetHeight||n.clientHeight}},parseSize:function(n){var o;if(typeof(n)=="string"){n=/^([0-9]+)([mgk]?)$/.exec(n.toLowerCase().replace(/[^0-9mkg]/g,""));o=n[2];n=+n[1];if(o=="g"){n*=1073741824}if(o=="m"){n*=1048576}if(o=="k"){n*=1024}}return n},xmlEncode:function(n){return n?(""+n).replace(l,function(o){return a[o]?"&"+a[o]+";":o}):n},toArray:function(p){var o,n=[];for(o=0;o<p.length;o++){n[o]=p[o]}return n},addI18n:function(n){return g.extend(m,n)},translate:function(n){return m[n]||n},isEmptyObj:function(n){if(n===b){return true}for(var o in n){return false}return true},hasClass:function(p,o){var n;if(p.className==""){return false}n=new RegExp("(^|\\s+)"+o+"(\\s+|$)");return n.test(p.className)},addClass:function(o,n){if(!g.hasClass(o,n)){o.className=o.className==""?n:o.className.replace(/\s+$/,"")+" "+n}},removeClass:function(p,o){var n=new RegExp("(^|\\s+)"+o+"(\\s+|$)");p.className=p.className.replace(n,function(r,q,s){return q===" "&&s===" "?" ":""})},getStyle:function(o,n){if(o.currentStyle){return o.currentStyle[n]}else{if(window.getComputedStyle){return window.getComputedStyle(o,null)[n]}}},addEvent:function(s,n,t){var r,q,p,o;o=arguments[3];n=n.toLowerCase();if(e===b){e="Plupload_"+g.guid()}if(s.addEventListener){r=t;s.addEventListener(n,r,false)}else{if(s.attachEvent){r=function(){var u=window.event;if(!u.target){u.target=u.srcElement}u.preventDefault=h;u.stopPropagation=j;t(u)};s.attachEvent("on"+n,r)}}if(s[e]===b){s[e]=g.guid()}if(!d.hasOwnProperty(s[e])){d[s[e]]={}}q=d[s[e]];if(!q.hasOwnProperty(n)){q[n]=[]}q[n].push({func:r,orig:t,key:o})},removeEvent:function(s,n){var q,t,p;if(typeof(arguments[2])=="function"){t=arguments[2]}else{p=arguments[2]}n=n.toLowerCase();if(s[e]&&d[s[e]]&&d[s[e]][n]){q=d[s[e]][n]}else{return}for(var o=q.length-1;o>=0;o--){if(q[o].key===p||q[o].orig===t){if(s.detachEvent){s.detachEvent("on"+n,q[o].func)
}else{if(s.removeEventListener){s.removeEventListener(n,q[o].func,false)}}q[o].orig=null;q[o].func=null;q.splice(o,1);if(t!==b){break}}}if(!q.length){delete d[s[e]][n]}if(g.isEmptyObj(d[s[e]])){delete d[s[e]];try{delete s[e]}catch(r){s[e]=b}}},removeAllEvents:function(o){var n=arguments[1];if(o[e]===b||!o[e]){return}g.each(d[o[e]],function(q,p){g.removeEvent(o,p,n)})}};g.Uploader=function(q){var o={},t,s=[],p;t=new g.QueueProgress();q=g.extend({chunk_size:0,multipart:true,multi_selection:true,file_data_name:"file",filters:[]},q);function r(){var v,w=0,u;if(this.state==g.STARTED){for(u=0;u<s.length;u++){if(!v&&s[u].status==g.QUEUED){v=s[u];v.status=g.UPLOADING;if(this.trigger("BeforeUpload",v)){this.trigger("UploadFile",v)}}else{w++}}if(w==s.length){this.stop();this.trigger("UploadComplete",s)}}}function n(){var v,u;t.reset();for(v=0;v<s.length;v++){u=s[v];if(u.size!==b){t.size+=u.size;t.loaded+=u.loaded}else{t.size=b}if(u.status==g.DONE){t.uploaded++}else{if(u.status==g.FAILED){t.failed++}else{t.queued++}}}if(t.size===b){t.percent=s.length>0?Math.ceil(t.uploaded/s.length*100):0}else{t.bytesPerSec=Math.ceil(t.loaded/((+new Date()-p||1)/1000));t.percent=t.size>0?Math.ceil(t.loaded/t.size*100):0}}g.extend(this,{state:g.STOPPED,runtime:"",features:{},files:s,settings:q,total:t,id:g.guid(),init:function(){var z=this,A,w,v,y=0,x;if(typeof(q.preinit)=="function"){q.preinit(z)}else{g.each(q.preinit,function(C,B){z.bind(B,C)})}q.page_url=q.page_url||document.location.pathname.replace(/\/[^\/]+$/g,"/");if(!/^(\w+:\/\/|\/)/.test(q.url)){q.url=q.page_url+q.url}q.chunk_size=g.parseSize(q.chunk_size);q.max_file_size=g.parseSize(q.max_file_size);z.bind("FilesAdded",function(B,E){var D,C,G=0,H,F=q.filters;if(F&&F.length){H=[];g.each(F,function(I){g.each(I.extensions.split(/,/),function(J){if(/^\s*\*\s*$/.test(J)){H.push("\\.*")}else{H.push("\\."+J.replace(new RegExp("["+("/^$.*+?|()[]{}\\".replace(/./g,"\\$&"))+"]","g"),"\\$&"))}})});H=new RegExp(H.join("|")+"$","i")}for(D=0;D<E.length;
D++){C=E[D];C.loaded=0;C.percent=0;C.status=g.QUEUED;if(H&&!H.test(C.name)){B.trigger("Error",{code:g.FILE_EXTENSION_ERROR,message:g.translate("File extension error."),file:C});continue}if(C.size!==b&&C.size>q.max_file_size){B.trigger("Error",{code:g.FILE_SIZE_ERROR,message:g.translate("File size error."),file:C});continue}s.push(C);G++}if(G){c(function(){z.trigger("QueueChanged");z.refresh()},1)}else{return false}});if(q.unique_names){z.bind("UploadFile",function(B,C){var E=C.name.match(/\.([^.]+)$/),D="tmp";if(E){D=E[1]}C.target_name=C.id+"."+D})}z.bind("UploadProgress",function(B,C){C.percent=C.size>0?Math.ceil(C.loaded/C.size*100):100;n()});z.bind("StateChanged",function(B){if(B.state==g.STARTED){p=(+new Date())}else{if(B.state==g.STOPPED){for(A=B.files.length-1;A>=0;A--){if(B.files[A].status==g.UPLOADING){B.files[A].status=g.QUEUED;n()}}}}});z.bind("QueueChanged",n);z.bind("Error",function(B,C){if(C.file){C.file.status=g.FAILED;n();if(B.state==g.STARTED){c(function(){r.call(z)},1)}}});z.bind("FileUploaded",function(B,C){C.status=g.DONE;C.loaded=C.size;B.trigger("UploadProgress",C);c(function(){r.call(z)},1)});if(q.runtimes){w=[];x=q.runtimes.split(/\s?,\s?/);for(A=0;A<x.length;A++){if(k[x[A]]){w.push(k[x[A]])}}}else{w=k}function u(){var E=w[y++],D,B,C;if(E){D=E.getFeatures();B=z.settings.required_features;if(B){B=B.split(",");for(C=0;C<B.length;C++){if(!D[B[C]]){u();return}}}E.init(z,function(F){if(F&&F.success){z.features=D;z.runtime=E.name;z.trigger("Init",{runtime:E.name});z.trigger("PostInit");z.refresh()}else{u()}})}else{z.trigger("Error",{code:g.INIT_ERROR,message:g.translate("Init error.")})}}u();if(typeof(q.init)=="function"){q.init(z)}else{g.each(q.init,function(C,B){z.bind(B,C)})}},refresh:function(){this.trigger("Refresh")},start:function(){if(this.state!=g.STARTED){this.state=g.STARTED;this.trigger("StateChanged");r.call(this)}},stop:function(){if(this.state!=g.STOPPED){this.state=g.STOPPED;this.trigger("StateChanged")}},getFile:function(v){var u;for(u=s.length-1;
u>=0;u--){if(s[u].id===v){return s[u]}}},removeFile:function(v){var u;for(u=s.length-1;u>=0;u--){if(s[u].id===v.id){return this.splice(u,1)[0]}}},splice:function(y,w){function u(){for(var z=s.length-1;z>=0;z--){if(s[z].status==g.QUEUED||s[z].status==g.UPLOADING){return true}}return false}var x;x=s.splice(y===b?0:y,w===b?s.length:w);this.trigger("FilesRemoved",x);this.trigger("QueueChanged");if(!u()){var v=this;c(function(){v.trigger("UploadComplete")})}return x},trigger:function(v){var x=o[v.toLowerCase()],w,u;if(x){u=Array.prototype.slice.call(arguments);u[0]=this;for(w=0;w<x.length;w++){if(x[w].func.apply(x[w].scope,u)===false){return false}}}return true},hasEventListener:function(u){return !!o[u.toLowerCase()]},bind:function(u,w,v){var x;u=u.toLowerCase();x=o[u]||[];x.push({func:w,scope:v||this});o[u]=x},unbind:function(u){u=u.toLowerCase();var x=o[u],v,w=arguments[1];if(x){if(w!==b){for(v=x.length-1;v>=0;v--){if(x[v].func===w){x.splice(v,1);break}}}else{x=[]}if(!x.length){delete o[u]}}},unbindAll:function(){var u=this;g.each(o,function(w,v){u.unbind(v)})},destroy:function(){this.trigger("Destroy");this.unbindAll()}})};g.File=function(q,o,p){var n=this;n.id=q;n.name=o;n.size=p;n.loaded=0;n.percent=0;n.status=0};g.Runtime=function(){this.getFeatures=function(){};this.init=function(n,o){}};g.QueueProgress=function(){var n=this;n.size=0;n.loaded=0;n.uploaded=0;n.failed=0;n.queued=0;n.percent=0;n.bytesPerSec=0;n.reset=function(){n.size=n.loaded=n.uploaded=n.failed=n.queued=n.percent=n.bytesPerSec=0}};g.runtimes={};window.plupload=g})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
AJS.toInit(function(b){var c;function a(){var f=document.getElementById("fileuploadShim");if(!f){f=document.createElement("div");f.setAttribute("id","fileuploadShim");document.body.appendChild(f)}var e=new plupload.Uploader({runtimes:"html5",dragdrop:true,drop_element:b("body")[0],browse_button:f.getAttribute("id"),multipart:false,stop_propagation:true,max_file_size:+AJS.Meta.get("global-settings-attachment-max-size")}),d=function(){c=new AJS.DragAndDropProgressDialog()};c=null;e.init();AJS.DragAndDrop.defaultDropHandler=null;e.bind("FilesAdded",function(g,l){e.stop();!c&&d();for(var j=0,k=l.length;j<k;j++){var h=l[j];if(h.status!==plupload.FAILED){c.render({workId:h.id,status:h.status,file:h})}}e.start()});e.bind("BeforeUpload",function(g,j){if(AJS.Editor&&AJS.Editor.isVisible()){return}var i=AJS.DragAndDropUtils.base+Confluence.getContextPath()+"/plugins/drag-and-drop/upload.action";var h=AJS.Meta.get("page-id");var k=h!=0?{pageId:h}:{draftId:AJS.Meta.get("draft-id")},l=j.name.substr(j.name.lastIndexOf(".")+1);k.filename=j.name;k.size=j.size;k.mimeType=plupload.mimeTypes[l.toLowerCase()]||"application/x-upload-data";k.spaceKey=AJS.Meta.get("space-key");g.settings.url=plupload.buildUrl(i,k);c.cancelListeners.push(function(o,m){var n=g.getFile(m.workId);n&&g.removeFile(n);c.renderError(m.workId,"File was manually removed from the queue.")});c.show()});e.bind("UploadProgress",function(g,h){c.renderUpdateToBytesUploaded(h.id,h.loaded,h.size);c.hideCloseButton()});e.bind("FileUploaded",function(g,i,h){if(h.status===0){c.renderError(i.id,"The server is not responding. Please check that it is running.")}else{c.renderComplete(i.id)}});e.bind("FilesRemoved",function(g,j){for(var h=0,k=j.length;h<k;h++){if(j[h].status==plupload.CANCELLED){c.renderCancelled(j[h].id)}}});e.bind("Error",function(h,i){var g,j;if(i.response){try{g=AJS.$.parseJSON(i.response);j=g.actionErrors[0]}catch(k){if(k.name==="SyntaxError"){j="Invalid response recieved from the server."}else{j=i.message
}}}else{j=i.message;if(i.code==plupload.FILE_SIZE_ERROR){j=AJS.format("File of size {0} exceeds maximum upload limit of {1}",AJS.DragAndDropUtils.niceSize(i.file.size).toString(),AJS.DragAndDropUtils.niceSize(AJS.Meta.get("global-settings-attachment-max-size")).toString());!c&&d();c.render({workId:i.file.id,status:i.file.status,file:i.file,errorMessage:j});c.show()}}c.renderError(i.file.id,j)});e.bind("UploadComplete",function(){if(!e.total.queued){c.showCloseButton();if(!c.hasErrors()){setTimeout(function(){c.hide();c.clearRenderOutput();window.location.reload()},1000)}}})}AJS.DragAndDropUtils.hasXhrSupport&&a()});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
AJS.ObservableArrayList=function(){this._data=[];this._pushObservers=[]};AJS.ObservableArrayList.prototype={push:function(a){this._data.push(a);this._notifyPushObservers(a)},length:function(){return this._data.length},remove:function(b,a){return this._remove.call(this._data,b,a)},_remove:function(c,b){var a=this.slice((b||c)+1||this.length);this.length=c<0?this.length+c:c;return this.push.apply(this,a)},shift:function(){return this._data.shift()},removeByPredicate:function(b){var d=[],a=this._data.length;for(var c=0;c<a;c++){if(!b(this._data[c])){d.push(this._data[c])}}this._data=d;return a-this._data.length},addPushObserver:function(a){if(AJS.$.isFunction(a)){this._pushObservers.push(a)}else{throw new Error("Attempting to add an observer that is not a function: "+a)}},_notifyPushObservers:function(c){for(var a=0,b=this._pushObservers.length;a<b;a++){this._pushObservers[a](c)}}};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
(function(h,k,j,e){var c={},g;function m(o,p){var n;if("FileReader" in h){n=new FileReader();n.readAsDataURL(o);n.onload=function(){p(n.result)}}else{return p(o.getAsDataURL())}}function l(o,p){var n;if("FileReader" in h){n=new FileReader();n.readAsBinaryString(o);n.onload=function(){p(n.result)}}else{return p(o.getAsBinary())}}function d(r,p,n,v){var q,o,u,s,t=this;m(c[r.id],function(w){q=k.createElement("canvas");q.style.display="none";k.body.appendChild(q);o=q.getContext("2d");u=new Image();u.onerror=u.onabort=function(){v({success:false})};u.onload=function(){var B,x,z,y,A;if(!p.width){p.width=u.width}if(!p.height){p.height=u.height}s=Math.min(p.width/u.width,p.height/u.height);if(s<1||(s===1&&n==="image/jpeg")){B=Math.round(u.width*s);x=Math.round(u.height*s);q.width=B;q.height=x;o.drawImage(u,0,0,B,x);if(n==="image/jpeg"){y=new f(atob(w.substring(w.indexOf("base64,")+7)));if(y.headers&&y.headers.length){A=new a();if(A.init(y.get("exif")[0])){A.setExif("PixelXDimension",B);A.setExif("PixelYDimension",x);y.set("exif",A.getBinary());if(t.hasEventListener("ExifData")){t.trigger("ExifData",r,A.EXIF())}if(t.hasEventListener("GpsData")){t.trigger("GpsData",r,A.GPS())}}}if(p.quality){try{w=q.toDataURL(n,p.quality/100)}catch(C){w=q.toDataURL(n)}}}else{w=q.toDataURL(n)}w=w.substring(w.indexOf("base64,")+7);w=atob(w);if(y&&y.headers&&y.headers.length){w=y.restore(w);y.purge()}q.parentNode.removeChild(q);v({success:true,data:w})}else{v({success:false})}};u.src=w})}j.runtimes.Html5=j.addRuntime("html5",{getFeatures:function(){var s,o,r,q,p,n;o=r=p=n=false;if(h.XMLHttpRequest){s=new XMLHttpRequest();r=!!s.upload;o=!!(s.sendAsBinary||s.upload)}if(o){q=!!(s.sendAsBinary||(h.Uint8Array&&h.ArrayBuffer));p=!!(File&&(File.prototype.getAsDataURL||h.FileReader)&&q);n=!!(File&&(File.prototype.mozSlice||File.prototype.webkitSlice||File.prototype.slice))}g=j.ua.safari&&j.ua.windows&&navigator.userAgent&&navigator.userAgent.indexOf("Version/4")>0;return{html5:o,dragdrop:(function(){var t=k.createElement("div");
return("draggable" in t)||("ondragstart" in t&&"ondrop" in t)}()),jpgresize:p,pngresize:p,multipart:p||!!h.FileReader||!!h.FormData,canSendBinary:q,cantSendBlobInFormData:!!(j.ua.gecko&&h.FormData&&h.FileReader&&!FileReader.prototype.readAsArrayBuffer),progress:r,chunks:n,multi_selection:!(j.ua.safari&&j.ua.windows),triggerDialog:(j.ua.gecko&&h.FormData||j.ua.webkit)}},init:function(p,q){var n;function o(v){var t,s,u=[],w,r={};for(s=0;s<v.length;s++){t=v[s];if(r[t.name]){continue}r[t.name]=true;w=j.guid();c[w]=t;if(t.fileSize>0||t.size>0){u.push(new j.File(w,t.fileName||t.name,t.fileSize||t.size))}}if(u.length){p.trigger("FilesAdded",u)}}n=this.getFeatures();if(!n.html5){q({success:false});return}p.upload=function(r){o(r)};p.bind("Init",function(v){var F,E,B=[],u,C,s=v.settings.filters,t,A,r=k.body,D;F=k.createElement("div");F.id=v.id+"_html5_container";j.extend(F.style,{position:"absolute",background:p.settings.shim_bgcolor||"transparent",width:"100px",height:"100px",overflow:"hidden",zIndex:99999,opacity:p.settings.shim_bgcolor?"":0});F.className="plupload html5";if(p.settings.container){r=k.getElementById(p.settings.container);if(j.getStyle(r,"position")==="static"){r.style.position="relative"}}r.appendChild(F);no_type_restriction:for(u=0;u<s.length;u++){t=s[u].extensions.split(/,/);for(C=0;C<t.length;C++){if(t[C]==="*"){B=[];break no_type_restriction}A=j.mimeTypes[t[C]];if(A){B.push(A)}}}F.innerHTML='<input id="'+p.id+'_html5"  style="font-size:999px" type="file" accept="'+B.join(",")+'" '+(p.settings.multi_selection&&p.features.multi_selection?'multiple="multiple"':"")+" />";F.scrollTop=100;D=k.getElementById(p.id+"_html5");if(v.features.triggerDialog){j.extend(D.style,{position:"absolute",width:"100%",height:"100%"})}else{j.extend(D.style,{cssFloat:"right",styleFloat:"right"})}D.onchange=function(){o(this.files);this.value=""};E=k.getElementById(v.settings.browse_button);if(E){var x=v.settings.browse_button_hover,z=v.settings.browse_button_active,w=v.features.triggerDialog?E:F;
if(x){j.addEvent(w,"mouseover",function(){j.addClass(E,x)},v.id);j.addEvent(w,"mouseout",function(){j.removeClass(E,x)},v.id)}if(z){j.addEvent(w,"mousedown",function(){j.addClass(E,z)},v.id);j.addEvent(k.body,"mouseup",function(){j.removeClass(E,z)},v.id)}if(v.features.triggerDialog){j.addEvent(E,"click",function(y){k.getElementById(v.id+"_html5").click();y.preventDefault()},v.id)}}});p.bind("PostInit",function(){var r=j.getElement(p.settings.drop_element),s,t=false;if(r){if(g){j.addEvent(r,"dragenter",function(x){var w,u,v;w=k.getElementById(p.id+"_drop");if(!w){w=k.createElement("input");w.setAttribute("type","file");w.setAttribute("id",p.id+"_drop");w.setAttribute("multiple","multiple");j.addEvent(w,"change",function(){o(this.files);j.removeEvent(w,"change",p.id);w.parentNode.removeChild(w)},p.id);r.appendChild(w);t=true}u=j.getPos(r,k.getElementById(p.settings.container));v=j.getSize(r);if(j.getStyle(r,"position")==="static"){j.extend(r.style,{position:"relative"})}j.extend(w.style,{position:"absolute",display:"block",top:0,left:0,width:v.w+"px",height:v.h+"px",opacity:0})},p.id);j.addEvent(r,"dragleave",function(u){if(!t){s&&s.parentElement.removeChild(s);s=null}t=false});return}j.addEvent(r,"dragover",function(u){u.preventDefault()},p.id);j.addEvent(r,"drop",function(v){var u=v.dataTransfer;if(u&&u.files){o(u.files)}s&&s.parentElement.removeChild(s);s=null;v.preventDefault();if(p.settings.stop_propagation){if(v.cancelBubble){v.cancelBubble=true}else{v.stopPropagation()}}},p.id)}});p.bind("Refresh",function(r){var s,t,u,w,v;s=k.getElementById(p.settings.browse_button);if(s){t=j.getPos(s,k.getElementById(r.settings.container));u=j.getSize(s);w=k.getElementById(p.id+"_html5_container");j.extend(w.style,{top:t.y+"px",left:t.x+"px",width:u.w+"px",height:u.h+"px"});if(p.features.triggerDialog){if(j.getStyle(s,"position")==="static"){j.extend(s.style,{position:"relative"})}v=parseInt(j.getStyle(s,"z-index"),10);if(isNaN(v)){v=0}j.extend(s.style,{zIndex:v});j.extend(w.style,{zIndex:v-1})
}}});p.bind("UploadFile",function(r,t){var u=r.settings,x,s;function w(z,C,y){var A;if(File.prototype.slice){try{z.slice();return z.slice(C,y)}catch(B){return z.slice(C,y-C)}}else{if(A=File.prototype.webkitSlice||File.prototype.mozSlice){return A.call(z,C,y)}else{return null}}}function v(z){var C=0,B=0,y=("FileReader" in h)?new FileReader:null;function A(){var H,L,J,K,G,I,E,D=r.settings.url;function F(V){var S=0,T=new XMLHttpRequest,W=T.upload,M="----pluploadboundary"+j.guid(),N,O="--",U="\r\n",Q="";if(W){W.onprogress=function(X){t.loaded=Math.min(t.size,B+X.loaded-S);r.trigger("UploadProgress",t)}}T.onreadystatechange=function(){var X,Z;if(T.readyState==4){try{X=T.status}catch(Y){X=0}if(X>=400){r.trigger("Error",{code:j.HTTP_ERROR,message:j.translate("HTTP Error."),file:t,status:X,response:T.responseText||""})}else{if(J){Z={chunk:C,chunks:J,response:T.responseText,status:X};r.trigger("ChunkUploaded",t,Z);B+=I;if(Z.cancelled){t.status=j.FAILED;return}t.loaded=Math.min(t.size,(C+1)*G)}else{t.loaded=t.size}r.trigger("UploadProgress",t);V=H=N=Q=null;if(!J||++C>=J){t.status=j.DONE;r.trigger("FileUploaded",t,{response:T.responseText,status:X})}else{A()}}T=null}};if(r.settings.multipart&&n.multipart){K.name=t.target_name||t.name;T.open("post",D,true);j.each(r.settings.headers,function(Y,X){T.setRequestHeader(X,Y)});if(typeof(V)!=="string"&&!!h.FormData){N=new FormData();j.each(j.extend(K,r.settings.multipart_params),function(Y,X){N.append(X,Y)});N.append(r.settings.file_data_name,V);T.send(N);return}if(typeof(V)==="string"){T.setRequestHeader("Content-Type","multipart/form-data; boundary="+M);j.each(j.extend(K,r.settings.multipart_params),function(Y,X){Q+=O+M+U+'Content-Disposition: form-data; name="'+X+'"'+U+U;Q+=unescape(encodeURIComponent(Y))+U});E=j.mimeTypes[t.name.replace(/^.+\.([^.]+)/,"$1").toLowerCase()]||"application/octet-stream";Q+=O+M+U+'Content-Disposition: form-data; name="'+r.settings.file_data_name+'"; filename="'+unescape(encodeURIComponent(t.name))+'"'+U+"Content-Type: "+E+U+U+V+U+O+M+O+U;
S=Q.length-V.length;V=Q;if(T.sendAsBinary){T.sendAsBinary(V)}else{if(n.canSendBinary){var R=new Uint8Array(V.length);for(var P=0;P<V.length;P++){R[P]=(V.charCodeAt(P)&255)}T.send(R.buffer)}}return}}D=j.buildUrl(r.settings.url,j.extend(K,r.settings.multipart_params));T.open("post",D,true);T.setRequestHeader("Content-Type","application/octet-stream");if(V.encoding){T.setRequestHeader("Content-Encoding",V.encoding)}j.each(r.settings.headers,function(Y,X){T.setRequestHeader(X,Y)});T.send(V.getData?V.getData():V)}if(t.status==j.DONE||t.status==j.FAILED||r.state==j.STOPPED){return}K={name:t.target_name||t.name};if(u.chunk_size&&t.size>u.chunk_size&&(n.chunks||typeof(z)=="string")){G=u.chunk_size;J=Math.ceil(t.size/G);I=Math.min(G,t.size-(C*G));if(typeof(z)=="string"){H=z.substring(C*G,C*G+I)}else{H=w(z,C*G,C*G+I)}K.chunk=C;K.chunks=J}else{I=t.size;H=z}if(typeof(H)!=="string"&&y&&n.cantSendBlobInFormData&&n.chunks&&r.settings.chunk_size){y.onload=function(){F(y.result)};y.readAsBinaryString(H)}else{F(H)}}A()}x=c[t.id];if(n.jpgresize&&r.settings.resize&&/\.(png|jpg|jpeg)$/i.test(t.name)){d.call(r,t,r.settings.resize,/\.png$/i.test(t.name)?"image/png":"image/jpeg",function(y){if(y.success){t.size=y.data.length;v(y.data)}else{v(x)}})}else{v(x)}});p.bind("Destroy",function(r){var t,u,s=k.body,v={inputContainer:r.id+"_html5_container",inputFile:r.id+"_html5",browseButton:r.settings.browse_button,dropElm:r.settings.drop_element};for(t in v){u=k.getElementById(v[t]);if(u){j.removeAllEvents(u,r.id)}}j.removeAllEvents(k.body,r.id);if(r.settings.container){s=k.getElementById(r.settings.container)}s.removeChild(k.getElementById(v.inputContainer))});q({success:true})}});function b(){var q=false,o;function r(t,v){var s=q?0:-8*(v-1),w=0,u;for(u=0;u<v;u++){w|=(o.charCodeAt(t+u)<<Math.abs(s+u*8))}return w}function n(u,s,t){var t=arguments.length===3?t:o.length-s-1;o=o.substr(0,s)+u+o.substr(t+s)}function p(t,u,w){var x="",s=q?0:-8*(w-1),v;for(v=0;v<w;v++){x+=String.fromCharCode((u>>Math.abs(s+v*8))&255)
}n(x,t,w)}return{II:function(s){if(s===e){return q}else{q=s}},init:function(s){q=false;o=s},SEGMENT:function(s,u,t){switch(arguments.length){case 1:return o.substr(s,o.length-s-1);case 2:return o.substr(s,u);case 3:n(t,s,u);break;default:return o}},BYTE:function(s){return r(s,1)},SHORT:function(s){return r(s,2)},LONG:function(s,t){if(t===e){return r(s,4)}else{p(s,t,4)}},SLONG:function(s){var t=r(s,4);return(t>2147483647?t-4294967296:t)},STRING:function(s,t){var u="";for(t+=s;s<t;s++){u+=String.fromCharCode(r(s,1))}return u}}}function f(s){var u={65505:{app:"EXIF",name:"APP1",signature:"Exif\0"},65506:{app:"ICC",name:"APP2",signature:"ICC_PROFILE\0"},65517:{app:"IPTC",name:"APP13",signature:"Photoshop 3.0\0"}},t=[],r,n,p=e,q=0,o;r=new b();r.init(s);if(r.SHORT(0)!==65496){return}n=2;o=Math.min(1048576,s.length);while(n<=o){p=r.SHORT(n);if(p>=65488&&p<=65495){n+=2;continue}if(p===65498||p===65497){break}q=r.SHORT(n+2)+2;if(u[p]&&r.STRING(n+4,u[p].signature.length)===u[p].signature){t.push({hex:p,app:u[p].app.toUpperCase(),name:u[p].name.toUpperCase(),start:n,length:q,segment:r.SEGMENT(n,q)})}n+=q}r.init(null);return{headers:t,restore:function(y){r.init(y);var w=new f(y);if(!w.headers){return false}for(var x=w.headers.length;x>0;x--){var z=w.headers[x-1];r.SEGMENT(z.start,z.length,"")}w.purge();n=r.SHORT(2)==65504?4+r.SHORT(4):2;for(var x=0,v=t.length;x<v;x++){r.SEGMENT(n,0,t[x].segment);n+=t[x].length}return r.SEGMENT()},get:function(x){var y=[];for(var w=0,v=t.length;w<v;w++){if(t[w].app===x.toUpperCase()){y.push(t[w].segment)}}return y},set:function(y,x){var z=[];if(typeof(x)==="string"){z.push(x)}else{z=x}for(var w=ii=0,v=t.length;w<v;w++){if(t[w].app===y.toUpperCase()){t[w].segment=z[ii];t[w].length=z[ii].length;ii++}if(ii>=z.length){break}}},purge:function(){t=[];r.init(null)}}}function a(){var q,n,o={},t;q=new b();n={tiff:{274:"Orientation",34665:"ExifIFDPointer",34853:"GPSInfoIFDPointer"},exif:{36864:"ExifVersion",40961:"ColorSpace",40962:"PixelXDimension",40963:"PixelYDimension",36867:"DateTimeOriginal",33434:"ExposureTime",33437:"FNumber",34855:"ISOSpeedRatings",37377:"ShutterSpeedValue",37378:"ApertureValue",37383:"MeteringMode",37384:"LightSource",37385:"Flash",41986:"ExposureMode",41987:"WhiteBalance",41990:"SceneCaptureType",41988:"DigitalZoomRatio",41992:"Contrast",41993:"Saturation",41994:"Sharpness"},gps:{0:"GPSVersionID",1:"GPSLatitudeRef",2:"GPSLatitude",3:"GPSLongitudeRef",4:"GPSLongitude"}};
t={ColorSpace:{1:"sRGB",0:"Uncalibrated"},MeteringMode:{0:"Unknown",1:"Average",2:"CenterWeightedAverage",3:"Spot",4:"MultiSpot",5:"Pattern",6:"Partial",255:"Other"},LightSource:{1:"Daylight",2:"Fliorescent",3:"Tungsten",4:"Flash",9:"Fine weather",10:"Cloudy weather",11:"Shade",12:"Daylight fluorescent (D 5700 - 7100K)",13:"Day white fluorescent (N 4600 -5400K)",14:"Cool white fluorescent (W 3900 - 4500K)",15:"White fluorescent (WW 3200 - 3700K)",17:"Standard light A",18:"Standard light B",19:"Standard light C",20:"D55",21:"D65",22:"D75",23:"D50",24:"ISO studio tungsten",255:"Other"},Flash:{0:"Flash did not fire.",1:"Flash fired.",5:"Strobe return light not detected.",7:"Strobe return light detected.",9:"Flash fired, compulsory flash mode",13:"Flash fired, compulsory flash mode, return light not detected",15:"Flash fired, compulsory flash mode, return light detected",16:"Flash did not fire, compulsory flash mode",24:"Flash did not fire, auto mode",25:"Flash fired, auto mode",29:"Flash fired, auto mode, return light not detected",31:"Flash fired, auto mode, return light detected",32:"No flash function",65:"Flash fired, red-eye reduction mode",69:"Flash fired, red-eye reduction mode, return light not detected",71:"Flash fired, red-eye reduction mode, return light detected",73:"Flash fired, compulsory flash mode, red-eye reduction mode",77:"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",79:"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",89:"Flash fired, auto mode, red-eye reduction mode",93:"Flash fired, auto mode, return light not detected, red-eye reduction mode",95:"Flash fired, auto mode, return light detected, red-eye reduction mode"},ExposureMode:{0:"Auto exposure",1:"Manual exposure",2:"Auto bracket"},WhiteBalance:{0:"Auto white balance",1:"Manual white balance"},SceneCaptureType:{0:"Standard",1:"Landscape",2:"Portrait",3:"Night scene"},Contrast:{0:"Normal",1:"Soft",2:"Hard"},Saturation:{0:"Normal",1:"Low saturation",2:"High saturation"},Sharpness:{0:"Normal",1:"Soft",2:"Hard"},GPSLatitudeRef:{N:"North latitude",S:"South latitude"},GPSLongitudeRef:{E:"East longitude",W:"West longitude"}};
function p(u,C){var w=q.SHORT(u),z,F,G,B,A,v,x,D,E=[],y={};for(z=0;z<w;z++){x=v=u+12*z+2;G=C[q.SHORT(x)];if(G===e){continue}B=q.SHORT(x+=2);A=q.LONG(x+=2);x+=4;E=[];switch(B){case 1:case 7:if(A>4){x=q.LONG(x)+o.tiffHeader}for(F=0;F<A;F++){E[F]=q.BYTE(x+F)}break;case 2:if(A>4){x=q.LONG(x)+o.tiffHeader}y[G]=q.STRING(x,A-1);continue;case 3:if(A>2){x=q.LONG(x)+o.tiffHeader}for(F=0;F<A;F++){E[F]=q.SHORT(x+F*2)}break;case 4:if(A>1){x=q.LONG(x)+o.tiffHeader}for(F=0;F<A;F++){E[F]=q.LONG(x+F*4)}break;case 5:x=q.LONG(x)+o.tiffHeader;for(F=0;F<A;F++){E[F]=q.LONG(x+F*4)/q.LONG(x+F*4+4)}break;case 9:x=q.LONG(x)+o.tiffHeader;for(F=0;F<A;F++){E[F]=q.SLONG(x+F*4)}break;case 10:x=q.LONG(x)+o.tiffHeader;for(F=0;F<A;F++){E[F]=q.SLONG(x+F*4)/q.SLONG(x+F*4+4)}break;default:continue}D=(A==1?E[0]:E);if(t.hasOwnProperty(G)&&typeof D!="object"){y[G]=t[G][D]}else{y[G]=D}}return y}function s(){var v=e,u=o.tiffHeader;q.II(q.SHORT(u)==18761);if(q.SHORT(u+=2)!==42){return false}o.IFD0=o.tiffHeader+q.LONG(u+=2);v=p(o.IFD0,n.tiff);o.exifIFD=("ExifIFDPointer" in v?o.tiffHeader+v.ExifIFDPointer:e);o.gpsIFD=("GPSInfoIFDPointer" in v?o.tiffHeader+v.GPSInfoIFDPointer:e);return true}function r(w,u,z){var B,y,x,A=0;if(typeof(u)==="string"){var v=n[w.toLowerCase()];for(hex in v){if(v[hex]===u){u=hex;break}}}B=o[w.toLowerCase()+"IFD"];y=q.SHORT(B);for(i=0;i<y;i++){x=B+12*i+2;if(q.SHORT(x)==u){A=x+8;break}}if(!A){return false}q.LONG(A,z);return true}return{init:function(u){o={tiffHeader:10};if(u===e||!u.length){return false}q.init(u);if(q.SHORT(0)===65505&&q.STRING(4,5).toUpperCase()==="EXIF\0"){return s()}return false},EXIF:function(){var u;u=p(o.exifIFD,n.exif);if(u.ExifVersion){u.ExifVersion=String.fromCharCode(u.ExifVersion[0],u.ExifVersion[1],u.ExifVersion[2],u.ExifVersion[3])}return u},GPS:function(){var u;u=p(o.gpsIFD,n.gps);if(u.GPSVersionID){u.GPSVersionID=u.GPSVersionID.join(".")}return u},setExif:function(u,v){if(u!=="PixelXDimension"&&u!=="PixelYDimension"){return false}return r("exif",u,v)},getBinary:function(){return q.SEGMENT()
}}}})(window,document,plupload);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
(function(a){AJS.DragAndDropProgressDialog=function(b){var c=this;var d={header:"Attach File(s)",width:600,height:400};this._options=a.extend({},d,b);this.id="drag-and-drop-progress-dialog";this._dialog=new AJS.Dialog(this._options.width,this._options.height,this.id);this._dialog.addHeader(this._options.header).addPanel("Panel 1",AJS.DragAndDrop.Templates.uploadFileStatusContainer()).addButton("Done",function(){c.hide();c.clearRenderOutput()},"all-file-uploads-complete");this._dialog.getCurrentPanel().setPadding(0);this._$closeButton=a(".all-file-uploads-complete");a(document).keydown(function(f){if(f.which==27){if(!c._$closeButton.prop("disabled")){c.hide();c.clearRenderOutput()}return AJS.stopEvent(f)}});this._$container=a("#upload-statuses");this._workIdsOfFilesInProgress=[];this.cancelListeners=[];this.onShowListeners=[];this._hidden=true;this.hasErrorMessage=false};AJS.DragAndDropProgressDialog.prototype={show:function(){if(this._hidden){this._dialog.show();this._hidden=false;a.each(this.onShowListeners,function(b,c){c()})}this.hideCloseButton()},hide:function(){if(!this._hidden){this._dialog.hide();this._hidden=true}},_getProgressElementId:function(b){return"file-"+b+"-progress"},render:function(c){this._workIdsOfFilesInProgress.push(c.workId);this._$container.append(AJS.DragAndDrop.Templates.fileStatus({filename:c.file.name,progressElementId:this._getProgressElementId(c.workId),workId:c.workId,showCancel:(c.status==plupload.QUEUED)}));var b=a("#"+this._getProgressElementId(c.workId));b.progressbar({value:0});if(c.status==plupload.QUEUED){a("#file-upload-cancel-"+c.workId).click((function(d){return function(f){a.each(d,function(e,g){g(f,c)})}})(this.cancelListeners))}else{this.renderError(c.workId,c.errorMessage)}},renderError:function(e,d){if(a.inArray(e,this._workIdsOfFilesInProgress)==-1){throw new Error("No file status found with id: "+e)}var b=a("#file-status-block-"+e);var c=b.attr("data-filename");b.html(aui.message.warning({content:d,titleContent:c}));
this.hasErrorMessage=true},hasErrors:function(){return this.hasErrorMessage},renderUpdateToBytesUploaded:function(h,g,b){if(a.inArray(h,this._workIdsOfFilesInProgress)==-1){throw new Error("No file status found with id: "+h)}var d=AJS.DragAndDropUtils.niceSize(g);var f=a("#file-"+h+"-uploaded");if(!!f.length){f.text(d)}else{a("#file-upload-progress-text-"+h).html(AJS.DragAndDrop.Templates.uploadFileStatusProgressMessage({fileId:h,uploadedSizeNice:d,totalSizeNice:AJS.DragAndDropUtils.niceSize(b)}))}var e=Math.round(g*100/b);var c=a("#"+this._getProgressElementId(h));c.progressbar("option","value",e)},renderComplete:function(b){if(a.inArray(b,this._workIdsOfFilesInProgress)==-1){throw new Error("No file status found with id: "+b)}a("#cancel-or-success-placeholder-"+b).html(AJS.DragAndDrop.Templates.uploadFileStatusSuccessIcon())},renderCancelled:function(c){if(a.inArray(c,this._workIdsOfFilesInProgress)==-1){throw new Error("No file status found with id: "+c)}var b=a("#"+this._getProgressElementId(c));if(b.progressbar("option","value")==0){b.progressbar("option","value",100)}b.progressbar("disable");a("#file-upload-progress-text-"+c).html("Cancelled.");a("#cancel-or-success-placeholder-"+c).hide()},clearRenderOutput:function(){this.showCloseButton();this._$container.empty();this._workIdsOfFilesInProgress=[]},hideCloseButton:function(){this._$closeButton.hide()},showCloseButton:function(){this._$closeButton.show()}}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
// This file was automatically generated from drag-and-drop.soy.
// Please don't edit this file by hand.

if (typeof AJS == 'undefined') { var AJS = {}; }
if (typeof AJS.DragAndDrop == 'undefined') { AJS.DragAndDrop = {}; }
if (typeof AJS.DragAndDrop.Templates == 'undefined') { AJS.DragAndDrop.Templates = {}; }


AJS.DragAndDrop.Templates.fileStatus = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li id="file-status-block-', soy.$$escapeHtml(opt_data.workId), '" data-filename="', soy.$$escapeHtml(opt_data.filename), '"><label>', soy.$$escapeHtml(opt_data.filename), '</label><div class="file-upload-progress-block"><div class="aui-progressbar" id="', soy.$$escapeHtml(opt_data.progressElementId), '"><div id="file-upload-progress-text-', soy.$$escapeHtml(opt_data.workId), '" class="file-upload-progress-text">', soy.$$escapeHtml("Waiting in queue"), '</div></div>', (opt_data.showCancel) ? '<div id="cancel-or-success-placeholder-' + soy.$$escapeHtml(opt_data.workId) + '" class="cancel-or-success-placeholder ui-state-default"><span id="file-upload-cancel-' + soy.$$escapeHtml(opt_data.workId) + '" class="aui-icon aui-icon-small aui-iconfont-remove" title="' + soy.$$escapeHtml("Cancel Upload") + '">' + soy.$$escapeHtml("Cancel") + '</span></div>' : '', '</div></li>');
  return opt_sb ? '' : output.toString();
};


AJS.DragAndDrop.Templates.uploadFileStatusContainer = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ul id="upload-statuses"></ul>');
  return opt_sb ? '' : output.toString();
};


AJS.DragAndDrop.Templates.uploadFileStatusSuccessIcon = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span class=\'aui-icon aui-icon-small aui-iconfont-success\'></span>');
  return opt_sb ? '' : output.toString();
};


AJS.DragAndDrop.Templates.uploadFileStatusProgressMessage = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span id="file-', soy.$$escapeHtml(opt_data.fileId), '-uploaded">', soy.$$escapeHtml(opt_data.uploadedSizeNice), '</span> ', soy.$$escapeHtml("of"), ' ', soy.$$escapeHtml(opt_data.totalSizeNice));
  return opt_sb ? '' : output.toString();
};


AJS.DragAndDrop.Templates.dropZone = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="attachments-drop-zone"><div class="drop-zone-image"></div><div class="drop-zone-text">', soy.$$escapeHtml("Drop files here to attach them"), '</div></div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
AJS.toInit(function(a){AJS.DragAndDropUtils.init(function(b){var c=a("body")[0];if(!b&&!AJS.DragAndDropUtils.isIE9()){AJS.DragAndDropUtils.enableDropZoneOn(c)}})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
(function(E){function C(K){var F,L;
if(K.offsetX===undefined){var J=0,I=0,H=K.target,G;
do{if(H.scrollTop!=0||H.scrollLeft!=0){G=H
}J+=H.offsetLeft;
I+=H.offsetTop;
H=H.offsetParent
}while(H&&H!=H.offsetParent);
F=K.pageX+(G?G.scrollLeft:0)-J;
L=K.pageY+(G?G.scrollTop:0)-I
}else{F=K.offsetX;
L=K.offsetY
}return F>=3&&F<=14&&L>=3&&L<=14
}function B(F){return F.currentTarget===F.target
}var D,A=false;
E(window).bind("beforeunload",function(){A=true
});
E(document).delegate("ul.inline-task-list > li[data-inline-task-id]",{click:function(J){if(B(J)&&C(J)){var I=E(J.target).toggleClass("checked"),F=I.hasClass("checked")?"CHECKED":"UNCHECKED",H=I.data("inline-task-id"),K=I.closest("ul").attr("data-inline-tasks-content-id")||AJS.params.pageId,G=AJS.contextPath()+"/rest/inlinetasks/1/task/"+K+"/"+H+"/";
E.ajax({type:"POST",url:G,data:{status:F,trigger:"VIEW_PAGE"},dataType:"text",timeout:30000,error:function(M,N,L){if(A||N=="timeout"){return 
}AJS.log("Inline Task #"+H+" was not persisted to "+F+" because of "+L+" (status: "+N+")");
I.toggleClass("checked");
D=D||Confluence.InlineTasks.Notice();
D.show()
}})
}},mousemove:function(F){if(B(F)){if(C(F)){E(F.target).addClass("hover")
}else{E(F.target).removeClass("hover")
}}},mouseout:function(F){if(B(F)){E(F.target).removeClass("hover")
}},mousedown:function(F){if(B(F)&&C(F)){E(F.target).addClass("active")
}},mouseup:function(F){if(B(F)&&C(F)){E(F.target).removeClass("active")
}}})
})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
Confluence.InlineTasks=Confluence.InlineTasks||{};
AJS.toInit(function(B){var A=Confluence.InlineTasks.Templates;
Confluence.InlineTasks.Notice=function(){var C=B(A.notice());
C.appendTo("body");
C.find(".notice-close").click(function(){C.hide()
});
return{show:function(){C.show();
return this
},hide:function(D){C.hide();
return this
}}
}
});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
// This file was automatically generated from inline-tasks.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.InlineTasks == 'undefined') { Confluence.InlineTasks = {}; }
if (typeof Confluence.InlineTasks.Templates == 'undefined') { Confluence.InlineTasks.Templates = {}; }


Confluence.InlineTasks.Templates.notice = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="aui-message error" id="inline-tasks-notice">', "Oops! Your task change couldn\x27t be saved. \x3cbr/\x3eThere could be a few reasons for this.", '&nbsp;&nbsp;<a href="', soy.$$escapeHtml("http://docs.atlassian.com/confluence/docs-51/Failed+Update+to+Task+List"), '" class="notice-learn-more">', soy.$$escapeHtml("Learn more"), '</a>&nbsp;&nbsp;<a href="#" class="notice-close">', soy.$$escapeHtml("Dismiss"), '</a></div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
Confluence.Likes = Confluence.Likes || {};


} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
(function ($) {

    var LIKE = 0,
        UNLIKE = 1,
        likesDialog,
        /**
         * A hash of contentId to likes data (used to facilitate "instant like").
         *
         * The "data" value must contain: "content_type" string and a "likes" array. e.g.
         * {
         *     likes: [ { name: "fred" } ],
         *     "content_type": "page"
         * }
         */
        likesCache = {};

    function getRestUrl(contentId) {
        return Confluence.getContextPath() + "/rest/likes/1.0/content/" + contentId + "/likes";
    }

    var isPageGadget = AJS.PageGadget || (window.parent.AJS && window.parent.AJS.PageGadget);
    !isPageGadget && AJS.toInit(function () {

        AJS.I18n.get("com.atlassian.confluence.plugins.confluence-like", function () {

            var remoteUser = AJS.Meta.get("remote-user") || "",
                remoteUserIsAnonymous = remoteUser.length === 0;

            /**
             * @param data a hash with a "likes" and "content_type" as required properties.
             * @param contentId
             * @param $summaryContainer
             */
            function updateLikeSummary(data, contentId, $summaryContainer) {
                var summary = Confluence.Likes.LikeSummaryFactory.getLikeSummary(data.likes, contentId, remoteUser);

                if (!summary.key) {
                    if (remoteUser.length > 0 && (data["content_type"] == "page" || data["content_type"] == "blogpost")) {
                        summary.key = "likes.bethefirst";
                    }
                }

                var summaryText = AJS.I18n.getText(summary.key, summary.args);

                if (summaryText && summaryText.length > 0) {
                    $summaryContainer.html(summaryText);
                } else {
                    $summaryContainer.empty();
                }

                if (!summaryText) {
                    return;
                }

                $summaryContainer.find(".likes").click(function () {
                    var contentId = $(this).attr("data-content-id");

                    if (likesDialog) {
                        likesDialog.remove();
                        likesDialog = undefined;
                    }

                    likesDialog = new AJS.Dialog(400, 365, 'likes-dialog');
                    likesDialog.addHeader("People who like this");
                    likesDialog.addPanel("Panel 1", "<div class='spinner-container'></div>");
                    likesDialog.addCancel("Close", function (dialog) {
                        dialog.remove();
                        likesDialog = undefined;
                    });
                    likesDialog.getCurrentPanel().setPadding(0);

                    // CONF-7330: make likes dialog non-modal
                    function callWithAJSDimDisabled(thisArg, functionArg, parametersArg) {
                        var dimFunctionReference = AJS.dim, // copy reference to original dim function
                            noop = function () {};

                        AJS.dim = noop;
                        try {
                            functionArg.apply(thisArg, parametersArg || []);
                        } finally {
                            AJS.dim = dimFunctionReference;
                        }
                    }

                    callWithAJSDimDisabled(likesDialog, likesDialog.show);

                    $.ajax({
                        type: "GET",
                        url: getRestUrl(contentId),
                        data: {
                            expand: "user",
                            max: 50
                        },
                        dataType: "json"
                    }).done(function (data) {
                        if (!likesDialog.popup.element.is(":visible")) {
                            return;
                        }

                        data.remoteUser = remoteUser;
                        likesDialog.getCurrentPanel().html(Confluence.Templates.Likes.likesDialog(data));

                        $("#likes-dialog").find(".likes-dialog-follow-button").click(function () {
                            var $button = $(this);
                            $.ajax({
                                type: "PUT",
                                url: Confluence.getContextPath() + "/rest/likes/1.0/user/" + AJS.Meta.get("remote-user") + "/following?username=" + $button.attr("data-username"),
                                contentType: "application/json",
                                dataType: "json"
                            }).done(function () {
                                $button.replaceWith("Following");
                            });
                        });

                    });

                    return false;
                });

                Confluence.Binder.userHover(); // to ensure user hover over user links work

                if (data["content_type"] == "comment") {
                    $summaryContainer.prepend("<span class='comment-action-separator'>•</span><span class='small-like-icon'></span>");
                }
            }

            function createHandlerFor(type, contentId, contentType) {
                if (type === undefined) {
                    throw new Error("type is required");
                }
                if (contentId === undefined) {
                    throw new Error("contentId is required");
                }
                if (contentType === undefined) {
                    throw new Error("contentType is required");
                }

                return function () {
                    if (typeof this !== "object" || !this.nodeType || this.nodeType !== 1 || this.nodeName != "A") {
                        throw new Error("this handler should be bound to a DOM anchor element");
                    }

                    var $likeLink = $(this),
                        callee = arguments.callee,
                        $summaryContainer = $likeLink.next(".like-summary");

                    $.ajax({
                        type: type === LIKE ? "POST" : "DELETE",
                        url: getRestUrl(contentId),
                        data: {
                            "atlassian-token": AJS.Meta.get("atlassian-token")
                        },
                        dataType: "json",
                        timeout: 5000
                    }).fail(function () {
                        var $likeError = $summaryContainer.siblings(".like-error"),
                            likeErrorI18nKey = "likes." + (type === LIKE ? "like" : "unlike") + ".failed";

                        if ($likeError.length === 0) {
                            $summaryContainer.after("<span class='like-error' title='" + AJS.I18n.getText(likeErrorI18nKey) + "'></span>");
                        } else {
                            $likeError.attr("title", AJS.I18n.getText(likeErrorI18nKey));
                        }
                    }).success(function () {
                        $summaryContainer.attr("liked", type === LIKE);
                        $summaryContainer.parent().find(".like-error").remove();
                    });

                    // instantly update like link and summary
                    $likeLink
                        .unbind("click", callee)
                        .bind("click", type === LIKE ? createHandlerFor(UNLIKE, contentId, contentType) : createHandlerFor(LIKE, contentId, contentType))
                        .html(type === LIKE ? "Unlike" : "Like");

                    likesCache[contentId] = likesCache[contentId] || {
                        content_type: contentType,
                        likes: []
                    };

                    if (type === LIKE) { // simulate an immediate "like"
                        likesCache[contentId].likes.push({
                            user: { name: remoteUser }
                        });
                    } else { // simulate an immediate "unlike"
                        likesCache[contentId].likes = $.grep(likesCache[contentId].likes, function (like) {
                            return like.user.name != remoteUser;
                        });
                    }

                    updateLikeSummary(likesCache[contentId], contentId, $summaryContainer);

                    return false;
                }
            }

            var $contentLikeSection = $(Confluence.Templates.Likes.likeSection({
                showLikeButton: !remoteUserIsAnonymous
            }));

            $("<div id='likes-and-labels-container' />")
                .insertBefore("#labels-section")
                .append($contentLikeSection)
                .append($("#labels-section"));

            if (AJS.Meta.get("page-id"))
            {
                $.ajax({
                    type: "GET",
                    url: getRestUrl(AJS.Meta.get("page-id")),
                    dataType: "json"
                }).done(function (data) {
                    if (AJS.Meta.get("remote-user")) {
                        var existingLike = $.grep(data.likes, function (like) {
                            return like.user.name == AJS.Meta.get("remote-user");
                        }).length > 0;

                        var contentType = data["content_type"];
                        $contentLikeSection.find(".like-button")
                            .click(existingLike ? createHandlerFor(UNLIKE, AJS.Meta.get("page-id"), contentType) : createHandlerFor(LIKE, AJS.Meta.get("page-id"), contentType))
                            .html(existingLike ? "Unlike" : "Like");
                    }

                    var $likeSummary = $contentLikeSection.find(".like-summary");

                    updateLikeSummary(data, data["content_id"], $likeSummary);

                    if ($likeSummary.html() == "" && remoteUserIsAnonymous) {
                        $contentLikeSection.hide();
                    }

                    likesCache[data["content_id"]] = data;
                });
            }

            Confluence.Likes.appendAction = function($comments) {
        	/* CONFDEV-13029: Get in between comment-action-remove and comment-date, will just append in case selector doesn't match. */
        	var commentActionsPrimaryItems = $comments.find(".comment-actions-primary");
        	var commentDateItem = commentActionsPrimaryItems.find("li[class~='comment-date']");
        	var commentLikeItemText = $(Confluence.Templates.Likes.commentLikeSection({showLikeButton: !remoteUserIsAnonymous}));
        	if(commentDateItem.length == 0) {
        	    commentActionsPrimaryItems.find("li:last-child").after(commentLikeItemText);
        	} else {
        	    commentDateItem.before(commentLikeItemText);
        	}
            };
            Confluence.Likes.reload = function() {
                if (AJS.Meta.get("page-id"))
                {
                    $.ajax({
                        type: "GET",
                        url: Confluence.getContextPath() + "/rest/likes/1.0/content/" + AJS.Meta.get("page-id") + "/comment-likes",
                        dataType: "json"
                    }).done(function(data) {
                        $.each(data, function (contentId, innerData) {
                            var $comment = $("#comment-" + contentId);

                            var $likeSummary = $comment.find(".like-summary");
                            updateLikeSummary(innerData, contentId, $likeSummary);

                            likesCache[contentId] = innerData;
                        });

                        remoteUserIsAnonymous && $("#page-comments").find(".like-summary:empty").each(function () {
                            $(this).closest(".comment-action-like").hide();
                        });

                        $("#page-comments .comment").each(function () {
                            Confluence.Likes.updateComment($(this), data);
                        });
                    });
                }
            };
            Confluence.Likes.updateComment = function($comment, data) {
                var id = $comment.attr("id");
                if (!id) {
                    return true; // comment should have an ID attribute, if not skip
                }

                var commentId = (/^comment-(\d+)$/.exec(id) || [])[1];
                if (!commentId) {
                    throw new Error("Expecting ID attribute of comment to be in format \"comment-XXX\", found: " + id);
                }

                var existingLike = data[commentId] && AJS.Meta.get("remote-user") && $.grep(data[commentId].likes, function (like) {
                    return like.user.name == AJS.Meta.get("remote-user");
                }).length > 0;

                $comment.find(".like-button")
                    .click(existingLike ? createHandlerFor(UNLIKE, commentId, "comment") : createHandlerFor(LIKE, commentId, "comment"))
                    .html(existingLike ? "Unlike" : "Like");

            };
            Confluence.Likes.appendAction($("#page-comments"));
            Confluence.Likes.reload();
        }, function () {
            throw new Error("Error downloading translation files for likes plugin.");
        });
    });

})(AJS.$);

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
(function ($) {

    /**
     * Maximum number of likes from a person's network to promote (read: show the full names of upfront) in the "like" summary
     */
    var MAX_PROMOTED = 3;

    Confluence.Likes.LikeSummaryFactory = {
        /**
         * Returns an i18n message that can be translated into a like summary
         * @param likes a collection of likes
         * @param contentId the content id
         * @param remoteUser the remote user (logged in user)
         */
        getLikeSummary: function (likes, contentId, remoteUser) {
            if (!likes || likes.length === 0) {
                return { key: "" };
            }

            if (!contentId) {
                throw new Error("contentId is required.");
            }

            var me,
                promoted = [], // "promoted" is defined as the user's full name is shown in the summary rather than hidden in the dialog triggered by "X others"
                nonPromoted = [];

            $.each(likes, function (i, like) {
                if (like.user && like.user.name == remoteUser) {
                    me = like;
                } else if (promoted.length < MAX_PROMOTED && like.user.followedByRemoteUser) {
                    promoted.push(like);
                } else {
                    nonPromoted.push(like);
                }
            });

            var i18nKey = ["likes.summary"],
                i18nArgs = [];

            if (me != null) {
                i18nKey.push(".you");
            }

            if (promoted.length > 0) {
                i18nKey.push(".");
                i18nKey.push(promoted.length);
                i18nKey.push(".promoted");

                $.each(promoted, function (i, like) {
                    i18nArgs.push(Confluence.Templates.Likes.userLink(like));
                });
            }

            if (nonPromoted.length == 1) {
                i18nKey.push(".1.non-promoted");
                i18nArgs.push(Confluence.Templates.Likes.userLink(nonPromoted[0]));
            } else if (nonPromoted.length > 1) {
                i18nKey.push(".x.non-promoted");
                i18nArgs.push(nonPromoted.length);
                i18nArgs.push("class=\"likes\" data-content-id=\"" + contentId + "\"");
            }

            return {
                key: i18nKey.join(""),
                args: i18nArgs.length === 0 ? undefined : i18nArgs
            };
        }
    };
})(jQuery);

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
// This file was automatically generated from like.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Likes == 'undefined') { Confluence.Templates.Likes = {}; }


Confluence.Templates.Likes.likeSection = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="likes-section">', (opt_data.showLikeButton) ? '<a href="" class="like-button">' + soy.$$escapeHtml("Like") + '</a>' : '', '<span class="like-summary"></span></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Likes.commentLikeSection = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li class="comment-action-like">', (opt_data.showLikeButton) ? '<a href="" class="like-button">' + soy.$$escapeHtml("Like") + '</a>' : '', '<span class="like-summary"></span></li>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Likes.likesDialog = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="likes-dialog-body"><ol>');
  var likeList20 = opt_data.likes;
  var likeListLen20 = likeList20.length;
  for (var likeIndex20 = 0; likeIndex20 < likeListLen20; likeIndex20++) {
    var likeData20 = likeList20[likeIndex20];
    output.append('<li><div class="avatar-container"><a href="', soy.$$escapeHtml(likeData20.user.url), '"><img class="like-user-avatar" src="', soy.$$escapeHtml(likeData20.user.avatarUrl), '"></a></div><div class="like-user"><a class="like-user-link" href="', soy.$$escapeHtml(likeData20.user.url), '">', soy.$$escapeHtml(likeData20.user.fullName), '</a></div><div class="follow-button-container aui-toolbar"><ul class="toolbar-group"><li class="toolbar-item">', (likeData20.user.followedByRemoteUser) ? soy.$$escapeHtml("Following") : (opt_data.remoteUser && opt_data.remoteUser.length > 0) ? '<button data-username="' + soy.$$escapeHtml(likeData20.user.name) + '" class="likes-dialog-follow-button toolbar-trigger">' + soy.$$escapeHtml("Follow") + '</button>' : '', '</li></ul></div></li>');
  }
  output.append('</ol></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Likes.userLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a href="', soy.$$escapeHtml(opt_data.user.url), '" class="confluence-userlink" data-username="', soy.$$escapeHtml(opt_data.user.name), '">', soy.$$escapeHtml(opt_data.user.fullName), '</a>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
AJS.toInit(function(E){var D="confluence.space-ia.nav";
if(window.sessionStorage){B();
E(".main-links-section a").click(C("main-links"));
E(".quick-links-section a").click(C("quick-links"));
E('.ia-secondary-container[data-tree-type="settings"] .acs-tree-item a').click(C("context-nav.advanced"));
E('.ia-secondary-container[data-tree-type="blogs"] .acs-tree-item a').click(C("context-nav.blog"));
E(".ia-secondary-container .child-item a").click(C("context-nav.children"));
E(".ia-secondary-container .create-child-page-link").click(C("context-nav.create"));
E(".ia-secondary-container .more-children-link").click(A("context-nav.more-children"));
var F=E(document);
F.bind("sidebar.flyout-triggered",function(H,G){A("flyout-triggered."+G.flyout)()
});
F.on("click",".acs-side-bar-flyout .acs-nav-item-link",C("flyout.quick-links"));
F.on("click",".acs-side-bar-flyout .child-item a",C("flyout.children"));
F.on("click",".acs-side-bar-flyout .create-child-page-link",C("flyout.create"))
}function B(){var G=sessionStorage[D];
if(!G){var H=AJS.Meta.get("base-url");
if(H&&document.referrer&&document.referrer.indexOf(H)==0){G="other"
}}if(G){AJS.trigger("analyticsEvent",{name:"space-ia-nav",data:{linkType:G}})
}delete sessionStorage[D]
}function C(G){return function(){if(!(G.indexOf("flyout")==0)&&E(".acs-side-bar.collapsed").length){G+="-collapsed"
}sessionStorage[D]=G;
return true
}
}function A(G){return function(){AJS.trigger("analyticsEvent",{name:"space-ia-nav",data:{linkType:G}})
}
}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
(function($){

$(function(){
    /**
     * We work hard here to keep the cheap and expensive parts separated.
     * We call enable on a delay but keep both methods exposed globally so that we can re-init/enable
     * sortable tables on a page should we modify the dom dramatically.
     */
    var tables;
    Confluence.SortableTables = {
        init: function(){
            tables = $('table');

            tables = tables.filter(function(){
                var cells = $(this).find('td, th'),
                    firstRowCells = this.rows.length && $(this.rows[0].cells),
                    cell, eventData;

                eventData = jQuery.Event("makeSortable.SortableTables");
                $(this).trigger(eventData);
                if (eventData.isDefaultPrevented()) {
                    return false;
                }

                if (!firstRowCells || firstRowCells.length === 0) { //there are no rows or no cells
                    return false;
                }
                //no colspan or rowspans > 1
                for (var i = 0, len = cells.length; i < len; i++) {
                    cell = cells[i];
                    if(cell.rowSpan != 1 || cell.colSpan != 1) {
                        return false;
                    }
                }

                //Header contains an inner table, not sortable
                if($(this.rows[0]).find('table').length){
                    return false;
                }

                // at least one cell in first row is not a th or have a class of nohighlight, not sortable
                if (firstRowCells.filter('th').length != firstRowCells.length || firstRowCells.hasClass('nohighlight'))
                    return false;

                // single row tables are not sortable
                return this.rows[1];
            });
        },
        enable: function(){
            tables.each(function(){
                // Changing this to use live dom nodes or something other than a document fragment has a
                // significant performance penalty. Modify with care.
                var body = this.removeChild(this.children[0]),
                    rows = $(body.children),
                    firstRow = Array.prototype.shift.call(rows),
                    fragment = document.createDocumentFragment(),
                    head = document.createElement("thead");

                fragment.appendChild(head);
                head.appendChild(firstRow);
                fragment.appendChild(body);

                this.appendChild(fragment);
            });

            tables.tablesorter({
                "cssHeader" : 'sortableHeader',
                "delayInit" : true,
                "textExtraction" : function(node){
                    //Do the text trim manually since our version of jQuery fails at this.
                    return AJS.trim($(node).text());
                },
                "dateFormat": getDateFormat()
            });
        }
    };
    Confluence.SortableTables.init();
    setTimeout(Confluence.SortableTables.enable, 100);
});

//Sortable tables friendly date format
function getDateFormat(){
    var dateFormat = AJS.Meta.get('date.format'),
        firstCharacter, retVal;

    if (dateFormat && dateFormat.length !== 0) {
        //we can assume enough from the first character
        firstCharacter = dateFormat.toLowerCase()[0];
        if (firstCharacter === 'm') {
            retVal = 'mmddyyyy';
        } else if (firstCharacter === 'd') {
            retVal = 'ddmmyyyy';
        } else if (firstCharacter === 'y') {
            retVal = 'yyyymmdd';
        }
    }
    return retVal;
}
})(AJS.$);

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
﻿/*!
* TableSorter 2.3.10 - Client-side table sorting with ease!
* @requires jQuery v1.2.6+
*
* Copyright (c) 2007 Christian Bach
* Examples and docs at: http://tablesorter.com
* Dual licensed under the MIT and GPL licenses:
* http://www.opensource.org/licenses/mit-license.php
* http://www.gnu.org/licenses/gpl.html
*
* @type jQuery
* @name tablesorter
* @cat Plugins/Tablesorter
* @author Christian Bach/christian.bach@polyester.se
* @contributor Rob Garrison/https://github.com/Mottie/tablesorter
*/
!(function($) {
	$.extend({
		tablesorter: new function() {

			this.version = "2.3.10";

			var parsers = [], widgets = [];
			this.defaults = {

				// appearance
				widthFixed       : false,      // adds colgroup to fix widths of columns

				// functionality
				cancelSelection  : true,       // prevent text selection in the header
				dateFormat       : "mmddyyyy", // other options: "ddmmyyy" or "yyyymmdd"
				sortMultiSortKey : "shiftKey", // key used to select additional columns
				usNumberFormat   : true,       // false for German "1.234.567,89" or French "1 234 567,89"
				delayInit        : false,      // if false, the parsed table contents will not update until the first sort.

				// sort options
				headers          : {},         // set sorter, string, empty, locked order, sortInitialOrder, filter, etc.
				ignoreCase       : true,       // ignore case while sorting
				sortForce        : null,       // column(s) first sorted; always applied
				sortList         : [],         // Initial sort order; applied initially; updated when manually sorted
				sortAppend       : null,       // column(s) sorted last; always applied

				sortInitialOrder : "asc",      // sort direction on first click
				sortLocaleCompare: false,      // replace equivalent character (accented characters)
				sortReset        : false,      // third click on the header will reset column to default - unsorted
				sortRestart      : false,      // restart sort to "sortInitialOrder" when clicking on previously unsorted columns

				emptyTo          : "bottom",   // sort empty cell to bottom, top, none, zero
				stringTo         : "max",      // sort strings in numerical column as max, min, top, bottom, zero
				textExtraction   : "simple",   // text extraction method/function - function(node, table, cellIndex){}
				textSorter       : null,       // use custom text sorter - function(a,b){ return a.sort(b); } // basic sort

				// widget options
				widgets: [],                   // method to add widgets, e.g. widgets: ['zebra']
				widgetOptions    : {
					zebra : [ "even", "odd" ]    // zebra widget alternating row class names
				},
				initWidgets      : true,       // apply widgets on tablesorter initialization

				// callbacks
				initialized      : null,       // function(table){},
				onRenderHeader   : null,       // function(index){},

				// css class names
				tableClass       : 'tablesorter',
				cssAsc           : "tablesorter-headerSortUp",
				cssChildRow      : "expand-child",
				cssDesc          : "tablesorter-headerSortDown",
				cssHeader        : "tablesorter-header",
				cssInfoBlock     : "tablesorter-infoOnly", // don't sort tbody with this class name

				// selectors
				selectorHeaders  : '> thead th',
				selectorRemove   : "tr.remove-me",

				// advanced
				debug            : false,

				// Internal variables
				headerList: [],
				empties: {},
				strings: {},
				parsers: []

				// deprecated; but retained for backwards compatibility
				// widgetZebra: { css: ["even", "odd"] }

			};

			/* debuging utils */
			function log(s) {
				if (typeof console !== "undefined" && typeof console.log !== "undefined") {
					console.log(s);
				} else {
					alert(s);
				}
			}

			function benchmark(s, d) {
				log(s + " (" + (new Date().getTime() - d.getTime()) + "ms)");
			}

			this.benchmark = benchmark;
			this.hasInitialized = false;

			function getElementText(table, node, cellIndex) {
				if (!node) { return ""; }
				var c = table.config,
					t = c.textExtraction, text = "";
				if (t === "simple") {
					if (c.supportsTextContent) {
						text = node.textContent; // newer browsers support this
					} else {
						if (node.childNodes[0] && node.childNodes[0].hasChildNodes()) {
							text = node.childNodes[0].innerHTML;
						} else {
							text = node.innerHTML;
						}
					}
				} else {
					if (typeof(t) === "function") {
						text = t(node, table, cellIndex);
					} else if (typeof(t) === "object" && t.hasOwnProperty(cellIndex)) {
						text = t[cellIndex](node, table, cellIndex);
					} else {
						text = c.supportsTextContent ? node.textContent : $(node).text();
					}
				}
				return $.trim(text);
			}

			/* parsers utils */
			function getParserById(name) {
				var i, l = parsers.length;
				for (i = 0; i < l; i++) {
					if (parsers[i].id.toLowerCase() === (name.toString()).toLowerCase()) {
						return parsers[i];
					}
				}
				return false;
			}

			function detectParserForColumn(table, rows, rowIndex, cellIndex) {
				var i, l = parsers.length,
				node = false,
				nodeValue = '',
				keepLooking = true;
				while (nodeValue === '' && keepLooking) {
					rowIndex++;
					if (rows[rowIndex]) {
						node = rows[rowIndex].cells[cellIndex];
						nodeValue = getElementText(table, node, cellIndex);
						if (table.config.debug) {
							log('Checking if value was empty on row ' + rowIndex + ', column: ' + cellIndex + ': ' + nodeValue);
						}
					} else {
						keepLooking = false;
					}
				}
				for (i = 1; i < l; i++) {
					if (parsers[i].is(nodeValue, table, node)) {
						return parsers[i];
					}
				}
				// 0 is always the generic parser (text)
				return parsers[0];
			}

			function buildParserCache(table, $headers) {
				var c = table.config,
					tb = $(table.tBodies).filter(':not(.' + c.cssInfoBlock + ')'),
					ts = $.tablesorter, rows, list, l, i, h, m, ch, cl, p, parsersDebug = "";
				if ( tb.length === 0) { return; } // In the case of empty tables
				rows = tb[0].rows;
				if (rows[0]) {
					list = [];
					l = rows[0].cells.length;
					for (i = 0; i < l; i++) {
						// tons of thanks to AnthonyM1229 for working out the following selector (issue #74) to make this work in IE8!
						h = $headers.filter(':not([colspan])[data-column="'+i+'"]:last,[colspan="1"][data-column="'+i+'"]:last');
						ch = c.headers[i];
						// get column parser
						p = getParserById( ts.getData(h, ch, 'sorter') );
						// empty cells behaviour - keeping emptyToBottom for backwards compatibility.
						c.empties[i] = ts.getData(h, ch, 'empty') || c.emptyTo || (c.emptyToBottom ? 'bottom' : 'top' );
						// text strings behaviour in numerical sorts
						c.strings[i] = ts.getData(h, ch, 'string') || c.stringTo || 'max';
						if (!p) {
							p = detectParserForColumn(table, rows, -1, i);
						}
						if (c.debug) {
							parsersDebug += "column:" + i + "; parser:" + p.id + "; string:" + c.strings[i] + '; empty: ' + c.empties[i] + "\n";
						}
						list.push(p);
					}
				}
				if (c.debug) {
					log(parsersDebug);
				}
				return list;
			}

			/* utils */
			function buildCache(table) {
				var b = table.tBodies,
				tc = table.config,
				totalRows,
				totalCells,
				parsers = tc.parsers,
				t, i, j, k, c, cols, cacheTime;
				tc.cache = {};
				if (tc.debug) {
					cacheTime = new Date();
				}
				for (k = 0; k < b.length; k++) {
					tc.cache[k] = { row: [], normalized: [] };
					// ignore tbodies with class name from css.cssInfoBlock
					if (!$(b[k]).hasClass(tc.cssInfoBlock)) {
						$(b[k]).addClass('tablesorter-hidden');
						totalRows = (b[k] && b[k].rows.length) || 0;
						totalCells = (b[k].rows[0] && b[k].rows[0].cells.length) || 0;
						for (i = 0; i < totalRows; ++i) {
							/** Add the table data to main data array */
							c = $(b[k].rows[i]);
							cols = [];
							// if this is a child row, add it to the last row's children and continue to the next row
							if (c.hasClass(tc.cssChildRow)) {
								tc.cache[k].row[tc.cache[k].row.length - 1] = tc.cache[k].row[tc.cache[k].row.length - 1].add(c);
								// go to the next for loop
								continue;
							}
							tc.cache[k].row.push(c);
							for (j = 0; j < totalCells; ++j) {
								t = getElementText(table, c[0].cells[j], j);
								// allow parsing if the string is empty, previously parsing would change it to zero,
								// in case the parser needs to extract data from the table cell attributes
								cols.push( parsers[j].format(t, table, c[0].cells[j], j) );
							}
							cols.push(tc.cache[k].normalized.length); // add position for rowCache
							tc.cache[k].normalized.push(cols);
						}
						$(b[k]).removeClass('tablesorter-hidden');
					}
				}
				if (tc.debug) {
					benchmark("Building cache for " + totalRows + " rows", cacheTime);
				}
			}

			function getWidgetById(name) {
				var i, w, l = widgets.length;
				for (i = 0; i < l; i++) {
					w = widgets[i];
					if (w && w.hasOwnProperty('id') && w.id.toLowerCase() === name.toLowerCase()) {
						return w;
					}
				}
			}

			function applyWidget(table, init) {
				var tc = table.config, c = tc.widgets,
				time, i, w, l = c.length;
				if (tc.debug) {
					time = new Date();
				}
				for (i = 0; i < l; i++) {
					w = getWidgetById(c[i]);
					if ( w ) {
						if (init === true && w.hasOwnProperty('init')) {
							w.init(table, widgets, w);
						} else if (!init && w.hasOwnProperty('format')) {
							w.format(table);
						}
					}
				}
				if (tc.debug) {
					benchmark("Completed " + (init === true ? "initializing" : "applying") + " widgets", time);
				}
			}

			// init flag (true) used by pager plugin to prevent widget application
			function appendToTable(table, init) {
				var c = table.config,
				b = table.tBodies,
				rows = [],
				r, n, totalRows, checkCell, c2 = c.cache,
				f, i, j, k, l, pos, appendTime;
				if (c.debug) {
					appendTime = new Date();
				}
				for (k = 0; k < b.length; k++) {
					if (!$(b[k]).hasClass(c.cssInfoBlock)){
						$(b[k]).addClass('tablesorter-hidden');
						f = document.createDocumentFragment();
						r = c2[k].row;
						n = c2[k].normalized;
						totalRows = n.length;
						checkCell = totalRows ? (n[0].length - 1) : 0;
						for (i = 0; i < totalRows; i++) {
							pos = n[i][checkCell];
							rows.push(r[pos]);
							// removeRows used by the pager plugin
							if (!c.appender || !c.removeRows) {
								l = r[pos].length;
								for (j = 0; j < l; j++) {
									f.appendChild(r[pos][j]);
								}
							}
						}
						table.tBodies[k].appendChild(f);
						$(b[k]).removeClass('tablesorter-hidden');
					}
				}
				if (c.appender) {
					c.appender(table, rows);
				}
				if (c.debug) {
					benchmark("Rebuilt table", appendTime);
				}
				// apply table widgets
				if (!init) { applyWidget(table); }
				// trigger sortend
				$(table).trigger("sortEnd", table);
			}

			// computeTableHeaderCellIndexes from:
			// http://www.javascripttoolbox.com/lib/table/examples.php
			// http://www.javascripttoolbox.com/temp/table_cellindex.html
			function computeThIndexes(t) {
				var matrix = [],
				lookup = {},
				trs = $(t).find('thead:eq(0) tr'),
				i, j, k, l, c, cells, rowIndex, cellId, rowSpan, colSpan, firstAvailCol, matrixrow;
				for (i = 0; i < trs.length; i++) {
					cells = trs[i].cells;
					for (j = 0; j < cells.length; j++) {
						c = cells[j];
						rowIndex = c.parentNode.rowIndex;
						cellId = rowIndex + "-" + c.cellIndex;
						rowSpan = c.rowSpan || 1;
						colSpan = c.colSpan || 1;
						if (typeof(matrix[rowIndex]) === "undefined") {
							matrix[rowIndex] = [];
						}
						// Find first available column in the first row
						for (k = 0; k < matrix[rowIndex].length + 1; k++) {
							if (typeof(matrix[rowIndex][k]) === "undefined") {
								firstAvailCol = k;
								break;
							}
						}
						lookup[cellId] = firstAvailCol;
						// add data-column
						$(c).attr({ 'data-column' : firstAvailCol }); // 'data-row' : rowIndex
						for (k = rowIndex; k < rowIndex + rowSpan; k++) {
							if (typeof(matrix[k]) === "undefined") {
								matrix[k] = [];
							}
							matrixrow = matrix[k];
							for (l = firstAvailCol; l < firstAvailCol + colSpan; l++) {
								matrixrow[l] = "x";
							}
						}
					}
				}
				return lookup;
			}

			function formatSortingOrder(v) {
				// look for "d" in "desc" order; return true
				return (/^d/i.test(v) || v === 1);
			}


			function buildHeaders(table) {
				var header_index = computeThIndexes(table), ch, $t,
					$th, lock, time, $tableHeaders, c = table.config, ts = $.tablesorter;
					c.headerList = [];
				if (c.debug) {
					time = new Date();
				}
				$tableHeaders = $(table).find(c.selectorHeaders)
				.each(function(index) {
					$t = $(this);
					ch = c.headers[index];
					this.innerHTML = '<div class="tablesorter-header-inner">' + this.innerHTML + '</div>'; // faster than wrapInner
					if (c.onRenderHeader) { c.onRenderHeader.apply($t, [index]); }
					this.column = header_index[this.parentNode.rowIndex + "-" + this.cellIndex];
					this.order = formatSortingOrder( ts.getData($t, ch, 'sortInitialOrder') || c.sortInitialOrder ) ? [1,0,2] : [0,1,2];
					this.count = -1; // set to -1 because clicking on the header automatically adds one
					if (ts.getData($t, ch, 'sorter') === 'false') { this.sortDisabled = true; }
					this.lockedOrder = false;
					lock = ts.getData($t, ch, 'lockedOrder') || false;
					if (typeof(lock) !== 'undefined' && lock !== false) {
						this.order = this.lockedOrder = formatSortingOrder(lock) ? [1,1,1] : [0,0,0];
					}
					if (!this.sortDisabled) {
						$th = $t.addClass(c.cssHeader);
					}
					// add cell to headerList
					c.headerList[index] = this;
					// add to parent in case there are multiple rows
					$t.parent().addClass(c.cssHeader);
				});
				if (table.config.debug) {
					benchmark("Built headers:", time);
					log($tableHeaders);
				}
				return $tableHeaders;
			}

			function isValueInArray(v, a) {
				var i, l = a.length;
				for (i = 0; i < l; i++) {
					if (a[i][0] === v) {
						return true;
					}
				}
				return false;
			}

			function setHeadersCss(table, $headers, list) {
				var f, h = [], i, j, l, css = [table.config.cssDesc, table.config.cssAsc];
				// remove all header information
				$headers
					.removeClass(css.join(' '))
					.each(function() {
						if (!this.sortDisabled) {
							h[this.column] = $(this);
						}
					});
				l = list.length;
				for (i = 0; i < l; i++) {
					if (list[i][1] === 2) { continue; } // direction = 2 means reset!
					if (h[list[i][0]]) {
						// add class if cell exists - fix for issue #78
						h[list[i][0]].addClass(css[list[i][1]]);
					}
					// multicolumn sorting updating
					f = $headers.filter('[data-column="' + list[i][0] + '"]');
					if (l > 1 && f.length) {
						for (j = 0; j < f.length; j++) {
							if (!f[j].sortDisabled) {
								$(f[j]).addClass(css[list[i][1]]);
							}
						}
					}
				}
			}

			function fixColumnWidth(table) {
				if (table.config.widthFixed) {
					var colgroup = $('<colgroup>');
					$("tr:first td", table.tBodies[0]).each(function() {
						colgroup.append($('<col>').css('width', $(this).width()));
					});
					$(table).prepend(colgroup);
				}
			}

			function updateHeaderSortCount(table, sortList) {
				var i, s, o, c = table.config,
				l = sortList.length;
				for (i = 0; i < l; i++) {
					s = sortList[i];
					o = c.headerList[s[0]];
					if (o) { // prevents error if sorton array is wrong
						o.count = s[1] % (c.sortReset ? 3 : 2);
					}
				}
			}

			function getCachedSortType(parsers, i) {
				return (parsers && parsers[i]) ? parsers[i].type || '' : '';
			}

			/* sorting methods - reverted sorting method back to version 2.0.3 */
			function multisort(table, sortList) {
				var dynamicExp, col, mx = 0, dir = 0, tc = table.config,
				l = sortList.length, bl = table.tBodies.length,
				sortTime, i, j, k, c, cache, lc, s, e, order, orgOrderCol;
				if (tc.debug) { sortTime = new Date(); }
				for (k = 0; k < bl; k++) {
					dynamicExp = "var sortWrapper = function(a,b) {";
					cache = tc.cache[k];
					lc = cache.normalized.length;
					for (i = 0; i < l; i++) {
						c = sortList[i][0];
						order = sortList[i][1];
						// fallback to natural sort since it is more robust
						s = /n/i.test(getCachedSortType(tc.parsers, c)) ? "Numeric" : "Text";
						s += order === 0 ? "" : "Desc";
						e = "e" + i;
						// get max column value (ignore sign)
						if (/Numeric/.test(s) && tc.strings[c]) {
							for (j = 0; j < lc; j++) {
								col = Math.abs(parseFloat(cache.normalized[j][c]));
								mx = Math.max( mx, isNaN(col) ? 0 : col );
							}
							// sort strings in numerical columns
							if (typeof(tc.string[tc.strings[c]]) === 'boolean') {
								dir = (order === 0 ? 1 : -1) * (tc.string[tc.strings[c]] ? -1 : 1);
							} else {
								dir = (tc.strings[c]) ? tc.string[tc.strings[c]] || 0 : 0;
							}
						}
						dynamicExp += "var " + e + " = sort" + s + "(table,a[" + c + "],b[" + c + "]," + c + "," + mx +  "," + dir + "); ";
						dynamicExp += "if (" + e + ") { return " + e + "; } ";
						dynamicExp += "else { ";
					}
					// if value is the same keep orignal order
					orgOrderCol = (cache.normalized && cache.normalized[0]) ? cache.normalized[0].length - 1 : 0;
					dynamicExp += "return a[" + orgOrderCol + "]-b[" + orgOrderCol + "];";
					for (i=0; i < l; i++) {
						dynamicExp += "}; ";
					}
					dynamicExp += "return 0; ";
					dynamicExp += "}; ";
					eval(dynamicExp);
					cache.normalized.sort(sortWrapper); // sort using eval expression
				}
				if (tc.debug) { benchmark("Sorting on " + sortList.toString() + " and dir " + order+ " time", sortTime); }
			}

			// Natural sort - https://github.com/overset/javascript-natural-sort
			function sortText(table, a, b, col) {
				if (a === b) { return 0; }
				var c = table.config, e = c.string[ (c.empties[col] || c.emptyTo ) ],
					r = $.tablesorter.regex, xN, xD, yN, yD, xF, yF, i, mx;
				if (a === '' && e !== 0) { return (typeof(e) === 'boolean') ? (e ? -1 : 1) : -e || -1; }
				if (b === '' && e !== 0) { return (typeof(e) === 'boolean') ? (e ? 1 : -1) : e || 1; }
				if (typeof c.textSorter === 'function') { return c.textSorter(a, b, table, col); }
				// chunk/tokenize
				xN = a.replace(r[0], '\0$1\0').replace(/\0$/, '').replace(/^\0/, '').split('\0');
				yN = b.replace(r[0], '\0$1\0').replace(/\0$/, '').replace(/^\0/, '').split('\0');
				// numeric, hex or date detection
				xD = parseInt(a.match(r[2])) || (xN.length !== 1 && a.match(r[1]) && Date.parse(a));
				yD = parseInt(b.match(r[2])) || (xD && b.match(r[1]) && Date.parse(b)) || null;
				// first try and sort Hex codes or Dates
				if (yD) {
					if ( xD < yD ) { return -1; }
					if ( xD > yD ) { return 1; }
				}
				mx = Math.max(xN.length, yN.length);
				// natural sorting through split numeric strings and default strings
				for (i = 0; i < mx; i++) {
					// find floats not starting with '0', string or 0 if not defined (Clint Priest)
					xF = (!(xN[i] || '').match(r[3]) && parseFloat(xN[i])) || xN[i] || 0;
					yF = (!(yN[i] || '').match(r[3]) && parseFloat(yN[i])) || yN[i] || 0;
					// handle numeric vs string comparison - number < string - (Kyle Adams)
					if (isNaN(xF) !== isNaN(yF)) { return (isNaN(xF)) ? 1 : -1; }
					// rely on string comparison if different types - i.e. '02' < 2 != '02' < '2'
					if (typeof xF !== typeof yF) {
						xF += '';
						yF += '';
					}
					if (xF < yF) { return -1; }
					if (xF > yF) { return 1; }
				}
				return 0;
			}

			function sortTextDesc(table, a, b, col) {
				if (a === b) { return 0; }
				var c = table.config, e = c.string[ (c.empties[col] || c.emptyTo ) ];
				if (a === '' && e !== 0) { return (typeof(e) === 'boolean') ? (e ? -1 : 1) : e || 1; }
				if (b === '' && e !== 0) { return (typeof(e) === 'boolean') ? (e ? 1 : -1) : -e || -1; }
				if (typeof c.textSorter === 'function') { return c.textSorter(b, a, table, col); }
				return sortText(table, b, a);
			}

			// return text string value by adding up ascii value
			// so the text is somewhat sorted when using a digital sort
			// this is NOT an alphanumeric sort
			function getTextValue(a, mx, d) {
				if (mx) {
					// make sure the text value is greater than the max numerical value (mx)
					var i, l = a.length, n = mx + d;
					for (i = 0; i < l; i++) {
						n += a.charCodeAt(i);
					}
					return d * n;
				}
				return 0;
			}

			function sortNumeric(table, a, b, col, mx, d) {
				if (a === b) { return 0; }
				var c = table.config, e = c.string[ (c.empties[col] || c.emptyTo ) ];
				if (a === '' && e !== 0) { return (typeof(e) === 'boolean') ? (e ? -1 : 1) : -e || -1; }
				if (b === '' && e !== 0) { return (typeof(e) === 'boolean') ? (e ? 1 : -1) : e || 1; }
				if (isNaN(a)) { a = getTextValue(a, mx, d); }
				if (isNaN(b)) { b = getTextValue(b, mx, d); }
				return a - b;
			}

			function sortNumericDesc(table, a, b, col, mx, d) {
				if (a === b) { return 0; }
				var c = table.config, e = c.string[ (c.empties[col] || c.emptyTo ) ];
				if (a === '' && e !== 0) { return (typeof(e) === 'boolean') ? (e ? -1 : 1) : e || 1; }
				if (b === '' && e !== 0) { return (typeof(e) === 'boolean') ? (e ? 1 : -1) : -e || -1; }
				if (isNaN(a)) { a = getTextValue(a, mx, d); }
				if (isNaN(b)) { b = getTextValue(b, mx, d); }
				return b - a;
			}

			function checkResort($table, flag, callback) {
				var t = $table[0];
				if (flag !== false) {
					$table.trigger("sorton", [t.config.sortList, function(){
						$table.trigger('updateComplete');
						if (typeof callback === "function") {
							callback(t);
						}
					}]);
				} else {
					$table.trigger('updateComplete');
					if (typeof callback === "function") {
						callback(t);
					}
				}
			}

			/* public methods */
			this.construct = function(settings) {
				return this.each(function() {
					// if no thead or tbody quit.
					if (!this.tHead || this.tBodies.length === 0) { return; }
					// declare
					var $headers, $cell, $this,
						c, i, j, k, a, s, o, downTime,
						m = $.metadata;
					// new blank config object
					this.config = {};
					// merge and extend.
					c = $.extend(true, this.config, $.tablesorter.defaults, settings);

					if (c.debug) { $.data( this, 'startoveralltimer', new Date()); }
					// store common expression for speed
					$this = $(this).addClass(c.tableClass);
					// save the settings where they read
					$.data(this, "tablesorter", c);
					c.supportsTextContent = $('<span>x</span>')[0].textContent === 'x';
					// digit sort text location; keeping max+/- for backwards compatibility
					c.string = { 'max': 1, 'min': -1, 'max+': 1, 'max-': -1, 'zero': 0, 'none': 0, 'null': 0, 'top': true, 'bottom': false };
					// build headers
					$headers = buildHeaders(this);
					// try to auto detect column type, and store in tables config
					c.parsers = buildParserCache(this, $headers);
					// build the cache for the tbody cells
					// delayInit will delay building the cache until the user starts a sort
					if (!c.delayInit) { buildCache(this); }
					// fixate columns if the users supplies the fixedWidth option
					fixColumnWidth(this);
					// apply event handling to headers
					// this is to big, perhaps break it out?
					$headers.bind('mousedown.tablesorter mouseup.tablesorter', function(e, external) {
						if (e.type === 'mousedown') {
							downTime = new Date().getTime();
							return !c.cancelSelection;
						}
						// prevent resizable widget from initializing a sort (long clicks are ignored)
						if (external !== true && (new Date().getTime() - downTime > 500)) { return false; }
						if (c.delayInit && !c.cache) { buildCache($this[0]); }
						if (!this.sortDisabled) {
							// Only call sortStart if sorting is enabled.
							$this.trigger("sortStart", $this[0]);
							// store exp, for speed
							$cell = $(this);
							k = !e[c.sortMultiSortKey];
							// get current column sort order
							this.count = (this.count + 1) % (c.sortReset ? 3 : 2);
							// reset all sorts on non-current column - issue #30
							if (c.sortRestart) {
								i = this;
								$headers.each(function() {
									// only reset counts on columns that weren't just clicked on and if not included in a multisort
									if (this !== i && (k || !$(this).is('.' + c.cssDesc + ',.' + c.cssAsc))) {
										this.count = -1;
									}
								});
							}
							// get current column index
							i = this.column;
							// user only wants to sort on one column
							if (k) {
								// flush the sort list
								c.sortList = [];
								if (c.sortForce !== null) {
									a = c.sortForce;
									for (j = 0; j < a.length; j++) {
										if (a[j][0] !== i) {
											c.sortList.push(a[j]);
										}
									}
								}
								// add column to sort list
								o = this.order[this.count];
								if (o < 2) {
									c.sortList.push([i, o]);
									// add other columns if header spans across multiple
									if (this.colSpan > 1) {
										for (j = 1; j < this.colSpan; j++) {
											c.sortList.push([i+j, o]);
										}
									}
								}
								// multi column sorting
							} else {
								// the user has clicked on an already sorted column.
								if (isValueInArray(i, c.sortList)) {
									// reverse the sorting direction for all tables.
									for (j = 0; j < c.sortList.length; j++) {
										s = c.sortList[j];
										o = c.headerList[s[0]];
										if (s[0] === i) {
											s[1] = o.order[o.count];
											if (s[1] === 2) {
												c.sortList.splice(j,1);
												o.count = -1;
											}
										}
									}
								} else {
									// add column to sort list array
									o = this.order[this.count];
									if (o < 2) {
										c.sortList.push([i, o]);
										// add other columns if header spans across multiple
										if (this.colSpan > 1) {
											for (j = 1; j < this.colSpan; j++) {
												c.sortList.push([i+j, o]);
											}
										}
									}
								}
							}
							if (c.sortAppend !== null) {
								a = c.sortAppend;
								for (j = 0; j < a.length; j++) {
									if (a[j][0] !== i) {
										c.sortList.push(a[j]);
									}
								}
							}
							// sortBegin event triggered immediately before the sort
							$this.trigger("sortBegin", $this[0]);
							// set css for headers
							setHeadersCss($this[0], $headers, c.sortList);
							multisort($this[0], c.sortList);
							appendToTable($this[0]);
							// stop normal event by returning false
							return false;
						}
					});
					if (c.cancelSelection) {
						// cancel selection
						$headers.each(function() {
							this.onselectstart = function() {
								return false;
							};
						});
					}
					// apply easy methods that trigger binded events
					$this
					.bind("update", function(e, resort, callback) {
						// remove rows/elements before update
						$(c.selectorRemove, this).remove();
						// rebuild parsers.
						c.parsers = buildParserCache(this, $headers);
						// rebuild the cache map
						buildCache(this);
						checkResort($this, resort, callback);
					})
					.bind("updateCell", function(e, cell, resort, callback) {
						// get position from the dom.
						var t = this, $tb = $(this).find('tbody'), row, pos,
						// update cache - format: function(s, table, cell, cellIndex)
						tbdy = $tb.index( $(cell).closest('tbody') );
						row = $tb.eq(tbdy).find('tr').index( $(cell).closest('tr') );
						pos = [ row, cell.cellIndex];
						t.config.cache[tbdy].normalized[pos[0]][pos[1]] = c.parsers[pos[1]].format( getElementText(t, cell, pos[1]), t, cell, pos[1] );
						checkResort($this, resort, callback);
					})
					.bind("addRows", function(e, $row, resort, callback) {
						var i, rows = $row.filter('tr').length,
						dat = [], l = $row[0].cells.length, t = this,
						tbdy = $(this).find('tbody').index( $row.closest('tbody') );
						// add each row
						for (i = 0; i < rows; i++) {
							// add each cell
							for (j = 0; j < l; j++) {
								dat[j] = c.parsers[j].format( getElementText(t, $row[i].cells[j], j), t, $row[i].cells[j], j );
							}
							// add the row index to the end
							dat.push(c.cache[tbdy].row.length);
							// update cache
							c.cache[tbdy].row.push([$row[i]]);
							c.cache[tbdy].normalized.push(dat);
							dat = [];
						}
						// resort using current settings
						checkResort($this, resort, callback);
					})
					.bind("sorton", function(e, list, callback, init) {
						$(this).trigger("sortStart", this);
						var l = c.headerList.length;
						c.sortList = [];
						$.each(list, function(i,v){
							// make sure column exists
							if (v[0] < l) { c.sortList.push(list[i]); }
						});
						// update header count index
						updateHeaderSortCount(this, c.sortList);
						// set css for headers
						setHeadersCss(this, $headers, c.sortList);
						// sort the table and append it to the dom
						multisort(this, c.sortList);
						appendToTable(this, init);
						if (typeof callback === "function") {
							callback(this);
						}
					})
					.bind("appendCache", function(e, init) {
						appendToTable(this, init);
					})
					.bind("applyWidgetId", function(e, id) {
						getWidgetById(id).format(this);
					})
					.bind("applyWidgets", function(e, init) {
						// apply widgets
						applyWidget(this, init);
					})
					.bind("destroy", function(e,c){
						$.tablesorter.destroy(this, c);
					});

					// get sort list from jQuery data or metadata
					if ($this.data() && typeof $this.data().sortlist !== 'undefined') {
						c.sortList = $this.data().sortlist;
					} else if (m && ($this.metadata() && $this.metadata().sortlist)) {
						c.sortList = $this.metadata().sortlist;
					}
					// apply widget init code
					applyWidget(this, true);
					// if user has supplied a sort list to constructor.
					if (c.sortList.length > 0) {
						$this.trigger("sorton", [c.sortList, {}, !c.initWidgets]);
					} else if (c.initWidgets) {
						// apply widget format
						applyWidget(this);
					}

					// initialized
					this.hasInitialized = true;
					if (c.debug) {
						$.tablesorter.benchmark("Overall initialization time", $.data( this, 'startoveralltimer'));
					}
					$this.trigger('tablesorter-initialized', this);
					if (typeof c.initialized === 'function') { c.initialized(this); }
				});
			};

			this.destroy = function(table, removeClasses){
				var $t = $(table), c = table.config;
				// remove widget added rows
				$t.find('thead:first tr:not(.' + c.cssHeader + ')').remove();
				// remove resizer widget stuff
				$t.find('thead:first .tablesorter-resizer').remove();
				// disable tablesorter
				$t
					.unbind('update updateCell addRows sorton appendCache applyWidgetId applyWidgets destroy mouseup mouseleave')
					.find(c.selectorHeaders)
					.unbind('click mousedown mousemove mouseup')
					.removeClass(c.cssHeader + ' ' + c.cssAsc + ' ' + c.cssDesc);
				if (removeClasses !== false) {
					$t.removeClass(c.tableClass);
				}
			};

			this.addParser = function(parser) {
				var i, l = parsers.length, a = true;
				for (i = 0; i < l; i++) {
					if (parsers[i].id.toLowerCase() === parser.id.toLowerCase()) {
						a = false;
					}
				}
				if (a) {
					parsers.push(parser);
				}
			};
			this.addWidget = function(widget) {
				widgets.push(widget);
			};

			this.formatFloat = function(s, table) {
				if (typeof(s) !== 'string' || s === '') { return s; }
				if (table.config.usNumberFormat !== false) {
					// US Format - 1,234,567.89 -> 1234567.89
					s = s.replace(/,/g,'');
				} else {
					// German Format = 1.234.567,89 -> 1234567.89
					// French Format = 1 234 567,89 -> 1234567.89
					s = s.replace(/[\s|\.]/g,'').replace(/,/g,'.');
				}
				if(/^\s*\([.\d]+\)/.test(s)) {
					s = s.replace(/^\s*\(/,'-').replace(/\)/,'');
				}
				var i = parseFloat(s);
				// return the text instead of zero
				return isNaN(i) ? $.trim(s) : i;
			};
			this.isDigit = function(s) {
				// replace all unwanted chars and match.
				return (/^[\-+(]?\d+[)]?$/).test(s.replace(/[,.'\s]/g, ''));
			};

			// regex used in natural sort
			this.regex = [
				/(^-?[0-9]+(\.?[0-9]*)[df]?e?[0-9]?$|^0x[0-9a-f]+$|[0-9]+)/gi, // chunk/tokenize numbers & letters
				/(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/, //date
				/^0x[0-9a-f]+$/i, // hex
				/^0/ // leading zeros
			];
			// used when replacing accented characters during sorting
			this.characterEquivalents = {
				"a" : "\u00e1\u00e0\u00e2\u00e3\u00e4", // áàâãä
				"A" : "\u00c1\u00c0\u00c2\u00c3\u00c4", // ÁÀÂÃÄ
				"c" : "\u00e7", // ç
				"C" : "\u00c7", // Ç
				"e" : "\u00e9\u00e8\u00ea\u00eb", // éèêë
				"E" : "\u00c9\u00c8\u00ca\u00cb", // ÉÈÊË
				"i" : "\u00ed\u00ec\u0130\u00ee\u00ef", // íìİîï
				"I" : "\u00cd\u00cc\u0130\u00ce\u00cf", // ÍÌİÎÏ
				"o" : "\u00f3\u00f2\u00f4\u00f5\u00f6", // óòôõö
				"O" : "\u00d3\u00d2\u00d4\u00d5\u00d6", // ÓÒÔÕÖ
				"S" : "\u00df", // ß
				"u" : "\u00fa\u00f9\u00fb\u00fc", // úùûü
				"U" : "\u00da\u00d9\u00db\u00dc" // ÚÙÛÜ
			};
			this.replaceAccents = function(s) {
				var a, acc = '[', eq = this.characterEquivalents;
				if (!this.characterRegex) {
					this.characterRegexArray = {};
					for (a in eq) {
						if (typeof a === 'string') {
							acc += eq[a];
							this.characterRegexArray[a] = new RegExp('[' + eq[a] + ']', 'g');
						}
					}
					this.characterRegex = new RegExp(acc + ']');
				}
				if (this.characterRegex.test(s)) {
					for (a in eq) {
						if (typeof a === 'string') {
							s = s.replace( this.characterRegexArray[a], a );
						}
					}
				}
				return s;
			};

			// get sorter, string, empty, etc options for each column from
			// jQuery data, metadata, header option or header class name ("sorter-false")
			// priority = jQuery data > meta > headers option > header class name
			this.getData = function(h, ch, key) {
				var val = '', $h = $(h), m, cl;
				if (!$h.length) { return ''; }
				m = $.metadata ? $h.metadata() : false;
				cl = ' ' + ($h.attr('class') || '');
				if ($h.data() && ( typeof $h.data(key) !== 'undefined' || typeof $h.data(key.toLowerCase()) !== 'undefined') ){
					// "data-lockedOrder" is assigned to "lockedorder"; but "data-locked-order" is assigned to "lockedOrder"
					// "data-sort-initial-order" is assigned to "sortInitialOrder"
					val += $h.data(key) || $h.data(key.toLowerCase());
				} else if (m && typeof m[key] !== 'undefined') {
					val += m[key];
				} else if (ch && typeof ch[key] !== 'undefined') {
					val += ch[key];
				} else if (cl && cl.match(' ' + key + '-')) {
					// include sorter class name "sorter-text", etc
					val = cl.match( new RegExp(' ' + key + '-(\\w+)') )[1] || '';
				}
				return $.trim(val);
			};

			this.clearTableBody = function(table) {
				$(table.tBodies).filter(':not(.' + table.config.cssInfoBlock + ')').empty();
			};

		}
	})();

	// make shortcut
	var ts = $.tablesorter;

	// extend plugin scope
	$.fn.extend({
		tablesorter: ts.construct
	});

	// add default parsers
	ts.addParser({
		id: "text",
		is: function(s, table, node) {
			return true;
		},
		format: function(s, table, cell, cellIndex) {
			var c = table.config;
			s = $.trim( c.ignoreCase ? s.toLocaleLowerCase() : s );
			return c.sortLocaleCompare ? ts.replaceAccents(s) : s;
		},
		type: "text"
	});

	ts.addParser({
		id: "currency",
		is: function(s) {
			return (/^\(?[\u00a3$\u20ac\u00a4\u00a5\u00a2?.]\d+/).test(s); // £$€¤¥¢
		},
		format: function(s, table) {
			return ts.formatFloat(s.replace(/[^\w,. \-()]/g, ""), table);
		},
		type: "numeric"
	});

	ts.addParser({
		id: "ipAddress",
		is: function(s) {
			return (/^\d{2,3}[\.]\d{2,3}[\.]\d{2,3}[\.]\d{2,3}$/).test(s);
		},
		format: function(s, table) {
			var i, item, a = s.split("."),
			r = "",
			l = a.length;
			for (i = 0; i < l; i++) {
				item = a[i];
				if (item.length === 2) {
					r += "0" + item;
				} else {
					r += item;
				}
			}
			return ts.formatFloat(r, table);
		},
		type: "numeric"
	});

	ts.addParser({
		id: "url",
		is: function(s) {
			return (/^(https?|ftp|file):\/\//).test(s);
		},
		format: function(s) {
			return $.trim(s.replace(/(https?|ftp|file):\/\//, ''));
		},
		type: "text"
	});

	ts.addParser({
		id: "isoDate",
		is: function(s) {
			return (/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/).test(s);
		},
		format: function(s, table) {
			return ts.formatFloat((s !== "") ? (new Date(s.replace(/-/g, "/")).getTime() || "") : "", table);
		},
		type: "numeric"
	});

	ts.addParser({
		id: "percent",
		is: function(s) {
			return (/\d%\)?$/).test(s);
		},
		format: function(s, table) {
			return ts.formatFloat(s.replace(/%/g, ""), table);
		},
		type: "numeric"
	});

	ts.addParser({
		id: "usLongDate",
		is: function(s) {
			return s.match(/^[A-Za-z]{3,10}\.? [0-9]{1,2}, ([0-9]{4}|'?[0-9]{2}) (([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(AM|PM)))$/);
		},
		format: function(s, table) {
			return ts.formatFloat( (new Date(s).getTime() || ''), table);
		},
		type: "numeric"
	});

	ts.addParser({
		id: "shortDate", // "mmddyyyy", "ddmmyyyy" or "yyyymmdd"
		is: function(s) {
			// testing for ####-##-#### - so it's not perfect
			return (/^(\d{2}|\d{4})[\/\-\,\.\s+]\d{2}[\/\-\.\,\s+](\d{2}|\d{4})$/).test(s);
		},
		format: function(s, table, cell, cellIndex) {
			var c = table.config, ci = c.headerList[cellIndex],
			format = ci.shortDateFormat;
			if (typeof format === 'undefined') {
				// cache header formatting so it doesn't getData for every cell in the column
				format = ci.shortDateFormat = ts.getData( ci, c.headers[cellIndex], 'dateFormat') || c.dateFormat;
			}
			s = s.replace(/\s+/g," ").replace(/[\-|\.|\,]/g, "/");
			if (format === "mmddyyyy") {
				s = s.replace(/(\d{1,2})[\/\s](\d{1,2})[\/\s](\d{4})/, "$3/$1/$2");
			} else if (format === "ddmmyyyy") {
				s = s.replace(/(\d{1,2})[\/\s](\d{1,2})[\/\s](\d{4})/, "$3/$2/$1");
			} else if (format === "yyyymmdd") {
				s = s.replace(/(\d{4})[\/\s](\d{1,2})[\/\s](\d{1,2})/, "$1/$2/$3");
			}
			return ts.formatFloat( (new Date(s).getTime() || ''), table);
		},
		type: "numeric"
	});

	ts.addParser({
		id: "time",
		is: function(s) {
			return (/^(([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(am|pm)))$/).test(s);
		},
		format: function(s, table) {
			return ts.formatFloat( (new Date("2000/01/01 " + s).getTime() || ''), table);
		},
		type: "numeric"
	});

	ts.addParser({
		id: "digit",
		is: function(s) {
			return ts.isDigit(s);
		},
		format: function(s, table) {
			return ts.formatFloat(s.replace(/[^\w,. \-()]/g, ""), table);
		},
		type: "numeric"
	});

	ts.addParser({
		id: "metadata",
		is: function(s) {
			return false;
		},
		format: function(s, table, cell) {
			var c = table.config,
			p = (!c.parserMetadataName) ? 'sortValue' : c.parserMetadataName;
			return $(cell).metadata()[p];
		},
		type: "numeric"
	});

	// add default widgets
	ts.addWidget({
		id: "zebra",
		format: function(table) {
			var $tb, $tv, $tr, row, even, time, k, l,
			c = table.config,
			child = new RegExp(c.cssChildRow, 'i'),
			b = $(table).children('tbody:not(.' + c.cssInfoBlock + ')'),
			css = [ "even", "odd" ];
			// maintain backwards compatibility
			css = c.widgetZebra && c.hasOwnProperty('css') ? c.widgetZebra.css :
				(c.widgetOptions && c.widgetOptions.hasOwnProperty('zebra')) ? c.widgetOptions.zebra : css;
			if (c.debug) {
				time = new Date();
			}
			for (k = 0; k < b.length; k++ ) {
				// loop through the visible rows
				$tb = $(b[k]);
				l = $tb.children('tr').length;
				if (l > 1) {
					row = 0;
					$tv = $tb.find('tr:visible');
					$tb.addClass('tablesorter-hidden');
					// revered back to using jQuery each - strangely it's the fastest method
					$tv.each(function(){
						$tr = $(this);
						// style children rows the same way the parent row was styled
						if (!child.test(this.className)) { row++; }
						even = (row % 2 === 0);
						$tr.removeClass(css[even ? 1 : 0]).addClass(css[even ? 0 : 1]);
					});
					$tb.removeClass('tablesorter-hidden');
				}
			}
			if (c.debug) {
				ts.benchmark("Applying Zebra widget", time);
			}
		}
	});

})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/*
 * jQuery.splitter.js - two-pane splitter window plugin
 *
 * version 1.51 (2009/01/09)
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */

/**
 * The splitter() plugin implements a two-pane resizable splitter window.
 * The selected elements in the jQuery object are converted to a splitter;
 * each selected element should have two child elements, used for the panes
 * of the splitter. The plugin adds a third child element for the splitbar.
 *
 * For more details see: http://methvin.com/splitter/
 *
 *
 * @example $('#MySplitter').splitter();
 * @desc Create a vertical splitter with default settings
 *
 * @example $('#MySplitter').splitter({type: 'h', accessKey: 'M'});
 * @desc Create a horizontal splitter resizable via Alt+Shift+M
 *
 * @name splitter
 * @type jQuery
 * @param Object options Options for the splitter (not required)
 * @cat Plugins/Splitter
 * @return jQuery
 * @author Dave Methvin (dave.methvin@gmail.com)
 */
 ;(function($){
 var Z_INDEX = 4; // This is a hackish number, set somewhere in-between some page panels vs. the z-index of the browse menu.
 $.fn.splitter = function(args){
    args = args || {};
    return this.each(function() {
        var zombie;        // left-behind splitbar for outline resizes
        function startSplitMouse(evt) {
            if ( opts.outline )
                zombie = zombie || bar.clone(false).insertAfter(A);
            panes.css("-webkit-user-select", "none");    // Safari selects A/B text on a move
            bar.addClass(opts.activeClass);
            A._posSplit = A[0][opts.pxSplit] - evt[opts.eventPos];
            $(document)
                .bind("mousemove", doSplitMouse)
                .bind("mouseup", endSplitMouse);
        }
        function doSplitMouse(evt) {
            var newPos = A._posSplit+evt[opts.eventPos];
            if ( opts.outline ) {
                newPos = Math.max(0, Math.min(newPos, splitter._DA - bar._DA));
                bar.css(opts.origin, newPos);
            } else {
                resplit(newPos);
            }
        }
        function endSplitMouse(evt) {
            bar.removeClass(opts.activeClass);
            var newPos = A._posSplit+evt[opts.eventPos];
            if ( opts.outline ) {
                zombie.remove(); zombie = null;
                resplit(newPos);
            }
            panes.css("-webkit-user-select", "text");    // let Safari select text again
            $(document)
                .unbind("mousemove", doSplitMouse)
                .unbind("mouseup", endSplitMouse);
        }
        function resplit(newPos) {
            // Constrain new splitbar position to fit pane size limits
            newPos = Math.max(A._min, splitter._DA - B._max,
                    Math.min(newPos, A._max, splitter._DA - bar._DA - B._min));
            // Resize/position the two panes
            bar._DA = bar[0][opts.pxSplit];        // bar size may change during dock
            bar.css(opts.origin, newPos).css(opts.fixed, splitter._DF);
            A.css(opts.origin, 0).css(opts.split, newPos).css(opts.fixed,  splitter._DF);
            B.css(opts.origin, newPos+bar._DA)
                .css(opts.split, splitter._DA-bar._DA-newPos).css(opts.fixed,  splitter._DF);
            // IE fires resize for us; all others pay cash
            if ( !$.browser.msie )
                panes.trigger("resize");
        }
        function dimSum(jq, dims) {
            // Opera returns -1 for missing min/max width, turn into 0
            var sum = 0;
            for ( var i=1; i < arguments.length; i++ )
                sum += Math.max(parseInt(jq.css(arguments[i])) || 0, 0);
            return sum;
        }

        // Determine settings based on incoming opts, element classes, and defaults
        var vh = (args.splitHorizontal? 'h' : args.splitVertical? 'v' : args.type) || 'v';
        var opts = $.extend({
            activeClass: 'active',    // class name for active splitter
            pxPerKey: 8,            // splitter px moved per keypress
            tabIndex: 0,            // tab order indicator
            accessKey: ''            // accessKey for splitbar
        },{
            v: {                    // Vertical splitters:
                keyLeft: 39, keyRight: 37, cursor: ($.browser.msie) ? "e-resize" : "ew-resize",
                splitbarClass: "vsplitbar", outlineClass: "voutline",
                type: 'v', eventPos: "pageX", origin: "left",
                split: "width",  pxSplit: "offsetWidth",  side1: "Left", side2: "Right",
                fixed: "height", pxFixed: "offsetHeight", side3: "Top",  side4: "Bottom"
            },
            h: {                    // Horizontal splitters:
                keyTop: 40, keyBottom: 38,  cursor: ($.browser.msie) ? "n-resize" : "ns-resize",
                splitbarClass: "hsplitbar", outlineClass: "houtline",
                type: 'h', eventPos: "pageY", origin: "top",
                split: "height", pxSplit: "offsetHeight", side1: "Top",  side2: "Bottom",
                fixed: "width",  pxFixed: "offsetWidth",  side3: "Left", side4: "Right"
            }
        }[vh], args);

        // Create jQuery object closures for splitter and both panes
        var splitter = $(this).css({position: "relative"});
        var panes = splitter.children().css({
            position: "absolute",             // positioned inside splitter container
            "-moz-outline-style": "none"    // don't show dotted outline
        });
        var A = $(panes[0]);        // left  or top
        var B = $(panes[1]);        // right or bottom

        // Focuser element, provides keyboard support; title is shown by Opera accessKeys
        var focuser = $('<a href="javascript:void(0)"></a>')
            .attr({accessKey: opts.accessKey, tabIndex: opts.tabIndex, title: opts.splitbarClass})
            .bind($.browser.opera?"click":"focus", function(){ this.focus(); bar.addClass(opts.activeClass) })
            .bind("keydown", function(e){
                var key = e.which || e.keyCode;
                var dir = key==opts["key"+opts.side1]? 1 : key==opts["key"+opts.side2]? -1 : 0;
                if ( dir )
                    resplit(A[0][opts.pxSplit]+dir*opts.pxPerKey, false);
            })
            .bind("blur", function(){ bar.removeClass(opts.activeClass) });

        // Splitbar element, can be already in the doc or we create one
        var bar = $(panes[2] || '<div></div>')
            .insertAfter(A).css("z-index", Z_INDEX).append(focuser)
            .attr({"class": opts.splitbarClass, unselectable: "on"})
            .css({position: "absolute",    "user-select": "none", "-webkit-user-select": "none",
                "-khtml-user-select": "none", "-moz-user-select": "none"})
            .bind("mousedown", startSplitMouse);
        // Use our cursor unless the style specifies a non-default cursor
        if ( /^(auto|default|)$/.test(bar.css("cursor")) )
            bar.css("cursor", opts.cursor);

        // Cache several dimensions for speed, rather than re-querying constantly
        bar._DA = bar[0][opts.pxSplit];
        splitter._PBF = $.boxModel? dimSum(splitter, "border"+opts.side3+"Width", "border"+opts.side4+"Width") : 0;
        splitter._PBA = $.boxModel? dimSum(splitter, "border"+opts.side1+"Width", "border"+opts.side2+"Width") : 0;
        A._pane = opts.side1;
        B._pane = opts.side2;
        $.each([A,B], function(){
            this._min = opts["min"+this._pane] || dimSum(this, "min-"+opts.split);
            this._max = opts["max"+this._pane] || dimSum(this, "max-"+opts.split) || 9999;
            this._init = opts["size"+this._pane]===true ?
                parseInt($.curCSS(this[0],opts.split)) : opts["size"+this._pane];
        });

        // Determine initial position, get from cookie if specified
        var initPos = A._init;
        if ( !isNaN(B._init) )    // recalc initial B size as an offset from the top or left side
            initPos = splitter[0][opts.pxSplit] - splitter._PBA - B._init - bar._DA;
        if ( opts.cookie ) {
            if ( !$.cookie )
                alert('jQuery.splitter(): jQuery cookie plugin required');
            var ckpos = parseInt($.cookie(opts.cookie));
            if ( !isNaN(ckpos) )
                initPos = ckpos;
            $(window).bind("unload", function(){
                var state = String(bar.css(opts.origin));    // current location of splitbar
                $.cookie(opts.cookie, state, {expires: opts.cookieExpires || 365,
                    path: opts.cookiePath || document.location.pathname});
            });
        }
        if ( isNaN(initPos) )    // King Solomon's algorithm
            initPos = Math.round((splitter[0][opts.pxSplit] - splitter._PBA - bar._DA)/2);

        var resizeHandler = function(e){
            var top = splitter.offset().top;
            //TODO: a quick hack to get the splitter to be the right height in ondemand due to the footer difference
            var footer = $("#footer, #studio-footer").outerHeight(true);
            if (!footer)
                footer = 24;
            var wh = $(window).height()-footer;
            splitter.css("height", Math.max(wh-top-splitter._hadjust, splitter._hmin)+"px");
            // ATLASSIAN - only resize components if the window has been resized, or this has been called directly.
            if (!e || e.target == window) splitter.trigger("resize");
        };
        args.update = function (isBound) {
            splitter._hadjust = dimSum(splitter, "borderTopWidth", "borderBottomWidth", "marginBottom");
            splitter._hmin = Math.max(dimSum(splitter, "minHeight"), 20);
            isBound && $(window).bind("resize", resizeHandler);
            resizeHandler();
        };
        // Resize event propagation and splitter sizing
        if ( opts.anchorToWindow ) {
            // Account for margin or border on the splitter container and enforce min height
            args.update(true);
        }
        else if ( opts.resizeToWidth && !$.browser.msie )
            $(window).bind("resize", function(){
                splitter.trigger("resize");
            });

        // Resize event handler; triggered immediately to set initial position
        splitter.bind("resize", function(e, size){
            // Custom events bubble in jQuery 1.3; don't Yo Dawg
            if ( e.target != this ) return;
            // Determine new width/height of splitter container
            splitter._DF = splitter[0][opts.pxFixed] - splitter._PBF;
            splitter._DA = splitter[0][opts.pxSplit] - splitter._PBA;
            // Bail if splitter isn't visible or content isn't there yet
            if ( splitter._DF <= 0 || splitter._DA <= 0 ) return;
            // Re-divvy the adjustable dimension; maintain size of the preferred pane
            resplit(!isNaN(size)? size : (!(opts.sizeRight||opts.sizeBottom)? A[0][opts.pxSplit] :
                splitter._DA-B[0][opts.pxSplit]-bar._DA));
        }).trigger("resize" , [initPos]);
    });
};
})(jQuery);

/*Places focus on the main content section of pages*/
/* TODO - CONFDEV-2045 Clean up this code */
window.placeFocus = function () {

    var mainSection = document.getElementById('splitter-content');
    // Don't focus when there is an editor on the page.
    if(mainSection && AJS.$("#wysiwyg").length == 0)
    {
        mainSection.focus();
    }
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
AJS.toInit(function($) {
    // This code runs on every page, but we only want it to run in the Doc theme.
    if ($("#com-atlassian-confluence").hasClass("theme-documentation")) {
        var quickSearchQuery = $("#quick-search-query");

        var siteSearchForm = quickSearchQuery.closest("form");
        var spaceKey = $("fieldset input[name='spaceSearch']", siteSearchForm).val() === "true" ? $("#confluence-space-key").attr("content") : "";

        siteSearchForm.submit(function() {
            var query = quickSearchQuery.val();

            if (query.search(/all:/gi) >= 0) {
                quickSearchQuery.val($.trim(query.replace(/all:/gi, '')));
            }
        });

        var quickNav = AJS.defaultIfUndefined("Atlassian.SearchableApps.QuickNav", { defaultValue: Confluence.QuickNav });

        AJS.log("Applying doc-theme quick search");
        quickNav.addDropDownPostProcess(function (dropDown) {
            if (spaceKey) {
                var searchFor = $("a.search-for", dropDown);
                searchFor.attr("href", searchFor.attr("href") + "&where=" + encodeURIComponent(spaceKey));
            }
        });
        quickNav.setMakeParams(function(value) {
            var params = { query : value };

            if (params.query.search(/all:/gi) >= 0) {
                $("input[name='where']", siteSearchForm).val("");
                params.query = $.trim(params.query.replace(/all:/gi, ''));
                if (!params.query)
                    params.query = "ALL";
            } else if (spaceKey) {
                params.spaceKey = spaceKey;
            }

            return params;
        });

        // DOC-79 - We need to overwrite the tooltip that Confluence appended to the quick search box when each page finish loading.
        quickSearchQuery.mouseover(function() {
            if(spaceKey) {
                quickSearchQuery.attr("title", $("input[name='tooltip']", siteSearchForm).val());
            }
        });
    }
});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
AJS.toInit(function(){if(Confluence&&Confluence.Blueprint&&Confluence.Blueprint.register){Confluence.Blueprint.register("com.mxgraph.confluence.plugins.diagramly:drawio-blueprint-item",function(b,c,a){window.location=Confluence.getContextPath()+"/pages/createpage.action?spaceKey="+encodeURIComponent(c)+"&newSpaceKey="+encodeURIComponent(c)+(b.getParentPageId()?"&fromPageId="+b.getParentPageId():"")+"&diagramlyBlueprint=1"})}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
AJS.toInit(function(A){AJS.I18n.get("com.atlassian.confluence.plugins.share-page")
});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
AJS.Confluence.EditorLoader = (function($) {
    var _loadingTimeout = 12000;
    
    var editorLoadingStatus = {
        loaded: false,
        inProgress: false,
        errorMessage: null,
        
        started: function() {
            this.inProgress = true;
        },
        
        successful: function() {
            this.inProgress = false;
            this.loaded = true;
        },
        
        error: function(message) {
            this.inProgress = false;
            this.errorMessage = message;
        },
        
        /**
         * Should we attempt to load or is there a load already in progress, already completed 
         * or previously failed?
         * 
         * @return true if loading should be attempted.
         */
        allowLoad : function() {
            return !this.loaded
                && !this.inProgress
                && this.errorMessage == null;
        }
    };
    
    /**
     * An object that tracks events that should change the state of the editor which occur
     * when the editor is deactivated. These changes will apply to the editor when it is
     * next activated.
     */
    var stateChangeEventListener = {
        _listening: false,
            
        _queuedHandlers: [],
            
        _watchHandler: function() {
            Confluence.Editor.UI.toggleWatchPage(false);            
        },
        
        _unwatchHandler: function() {
            Confluence.Editor.UI.toggleWatchPage(true);
        },
        
        _createQueueAdder: function(handler) {
            return function() {
                if (stateChangeEventListener._listening) {
                    stateChangeEventListener._queuedHandlers.push(handler);
                }
            }  
        },
            
        /**
         * bind to all the relevant events. 
         */
        bind: function() {
            AJS.bind("watchpage.pageoperation", this._createQueueAdder(this._watchHandler));
            AJS.bind("unwatchpage.pageoperation", this._createQueueAdder(this._unwatchHandler));
        },
        
        /**
         * @param listening if true then listen and queue handlers (i.e. the editor is deactivated). If false
         * then ignore any events. The editor is active and will handle them itself.
         */
        setListening: function(listening) {
            this._listening = listening;
        },
        
        /**
         * Apply and then clear all the queued handlers. 
         */
        applyHandlers: function() {
            var handler = this._queuedHandlers.pop();
            while (handler) {
                handler();
                handler = this._queuedHandlers.pop();
            }
        }
    };
    
    stateChangeEventListener.setListening(true);
    stateChangeEventListener.bind();
    
    /** An array of functions to be called when an Editor load completes successfully. */
    var onLoadSuccess = [];

    /** An array of functions to be called when an Editor load fails. */
    var onLoadError = [];
            
    /**
     * Check if a _load should be allowed and make the appropriate callback if it shouldn't.
     * 
     * @return true if load is guarded (shouldn't be allowed); false if a load should be permitted.
     */
    var loadGuard = function(successCallback, errorCallback) {
        if (!editorLoadingStatus.allowLoad()) {
            if (editorLoadingStatus.errorMessage) {
                if (errorCallback) {
                    errorCallback(editorLoadingStatus.errorMessage);
                } else {
                    AJS.log("EditorLoader: loadGuard - previous load failed.");
                }
            } else if (editorLoadingStatus.inProgress) {
                // record the other callbacks for later (if they were supplied)
                if (successCallback) {
                    onLoadSuccess.push(successCallback);                        
                }
                
                if (errorCallback) {
                    onLoadError.push(errorCallback);
                }
            } else if (editorLoadingStatus.loaded) {
                if (successCallback) {
                    //So that the promise has time to have callbacks registered.
                    setTimeout(successCallback, 0);
                } else {
                    AJS.log("EditorLoader: loadGuard - editor is already loaded.");
                }
            }
            
            return true;
        }            
    };
    
    /**
     * Note, this methods doesn't do any encoding so don't add anything here you shouldn't.
     */
    var appendUrlParameter = function(url, name, value) {
        if (url.indexOf("?") == -1) {
            url += "?";
        } else {
            url += "&";
        }
        
        return url + name + "=" + value;
    };
    
    /**
     * @return an object with two properties; jsUrls is an array of Javascript URLs and cssTags is an array of HTML formatted CSS
     * Link elements (including conditional comments)
     */
    var getResources = function() {
        // TODO conditionals are basically comments - is inserting comment nodes into the DOM 
        // a valid way to load them. Test on IE, etc
        var resourceTags = AJS.Meta.get("editor.loader.resources");
        var $resources = $(resourceTags);
        var jsUrls = [];
        var cssTags = []; // link elements and comments containing conditional CSS
        
        // Separate the resources into CSS tags and JS urls.
        for (var i = 0; i < $resources.length; i++) {
            var resource = $resources[i];
            // nodeType 8 is Node.COMMENT_NODE
            if (resource.nodeType == 8 && resource.nodeValue.indexOf("text/css") != -1) {
                cssTags.push(resource);
            } else if (resource.nodeType == 1) {
                if (resource.nodeName == "LINK") {
                    cssTags.push(resource);
                } else if (resource.nodeName == "SCRIPT" && resource.getAttribute("type") == "text/javascript") {
                    jsUrls.push(resource.src);
                }
            }
        }
        
        return {
            "jsUrls": jsUrls,
            "cssTags" : cssTags
        };
    };
    
    /**
     * Derive the base url for the Editor based on the array of urls provided.
     * 
     * @param urls an array of Javascript urls for the Editor
     * @return the baseUrl.
     */
    var getBaseUrl = function(urls) {
        var baseUrl = null;
        for (var i = 0; i < urls.length && baseUrl == null; i++) {
            var url = urls[i];
            // try to use part of a URL that would indicate this is definitely the editor scripts (but which couldn't be
            // confused with context part, etc)
            if (/editor,/.test(url)) {
                baseUrl = url;
            }
        }
        
        return baseUrl;
    };
    
    /**
     * Load the HTML and resources required by the Editor. (Note that the Editor is not necessarily initialised unless
     * the provided callback does it.)
     * 
     * @param successCallback a function called if the Editor is successfully loaded.
     * @param errorCallback a function called if there is a failure while loading the Editor (takes a message string parameter).
     */
    var loadEditor = function(successCallback, errorCallback) {
        if (loadGuard(successCallback, errorCallback)) {
            return;
        }
        
        editorLoadingStatus.started();
        
        if (successCallback) {
            onLoadSuccess.push(successCallback);                        
        }
        
        if (errorCallback) {
            onLoadError.push(errorCallback);
        }            
        
        var resources = getResources();
            
        AJS.Meta.set("rte.src.url", getBaseUrl(resources.jsUrls));

        // An object providing tracking of the various AJAX requests involved in loading
        var loadTracker = {
            countDown: resources.jsUrls.length + 1, // the number of scripts to be loaded plus the template
            errorMessages: [],
            success: function() {
                this.loaded();
            },
            
            error: function(message) {
                this.errorMessages.push(message);
                this.loaded();
            },
            
            loaded: function() {
                this.countDown--;
                if (this.countDown == 0) {
                    if (this.errorMessages.length == 0) {
                        editorLoadingStatus.successful();
                        AJS.log("EditorLoader: Finished loading the editor.");
                        
                        $.each(onLoadSuccess, function(i, func) {
                            func();
                        });                                            
                    } else {
                        var joinedMessages = this.errorMessages.join();
                        editorLoadingStatus.error(joinedMessages);   
                        AJS.log("EditorLoader: Error while loading the editor: " + joinedMessages);
                        
                        $.each(onLoadError, function(i, func) {
                            func(joinedMessages);
                        });                                        
                    }

                    AJS.log("EditorLoader: all 'after load' callbacks have been called.");

                    // can clear callback arrays - we don't need them any more
                    onLoadSuccess = null;
                    onLoadError = null;                        
                }
            } 
        };
        
        var loadCallback = function() {
            loadTracker.success();
        };
        
        var loadErrorCallback = function(jqXHR, textStatus, errorThrown) {
            var message = "";
            if (textStatus) {
                message = textStatus;
            }
            
            if (errorThrown) {
                message = message + ": " + errorThrown;                    
            }
            
            loadTracker.error(message);
        };
        
        var originalTimeout = $.ajaxSetup().timeout;
        $.ajaxSetup({ timeout: _loadingTimeout });
        
        // Create a hidden container to load the Editor DOM into
        var $preloadContainer = getPreloadContainer(); 
        $("body").append($preloadContainer);

        // Load the Editor template if on a page
        if (AJS.Meta.get("page-id"))
        {
            $preloadContainer.load(Confluence.getContextPath() + "/plugins/editor-loader/editor.action",
                {
                    pageId: AJS.Data.get("page-id"),
                    spaceKey: AJS.Data.get("space-key"),
                    atl_after_login_redirect: window.location.pathname // the URL that an anonymous user will be redirect to after logging in
                },
                function(response, status, xhr) {
                    if (status == "success" || status == "notmodified") {
                        // move any metadata into the head (which is the only legal place for meta tags).
                        var metadataTemplate = AJS.renderTemplate("dynamic-editor-metadata");
                        $("head").append(metadataTemplate);
                        AJS.populateParameters();
                        AJS.log("EditorLoader: Finished loading the editor template.");
                        loadCallback();
                    } else {
                        loadErrorCallback(xhr, "Error loading the Editor template: " + xhr.status + " - " + xhr.statusText, null);
                    }
                });
        }
        else
        {
            loadCallback();
        }
        
        // CONFDEV-7632 - with web resource batching turned off (or simply more than one script) we cannot 
        // load all scripts asynchronously. Scripts may have cross dependencies so we pretty much need to load 
        // them in serial in the same order the would be found in the batch for them to work.
        AJS.log("EditorLoader: " + resources.jsUrls.length + " scripts to be loaded.");

        var originalCacheSetting = $.ajaxSetup().cache;
        $.ajaxSetup({ cache: true });
        
        var ajaxSettings = {
            dataType: "script",
            error: loadErrorCallback,
            success: loadCallback                
        };
        
        if ($.browser.msie) {
            // without this setting window.execScript would be used which makes debugging
            // very difficult.
            ajaxSettings.crossDomain = true;
        }
        
        if (resources.jsUrls.length > 1) {
            var $head = $("head");
            $.each(resources.jsUrls, function(index, jsUrl) {
                var $script = $("<script></script>");
                $script.attr("src", jsUrl);
                $head.append($script);
                setTimeout(loadCallback); // calling loadCallback in the same 'event' seems to cause weird problems in Firefox on Linux.            
            });
        } else {
            // To avoid CONFDEV-8038 prefer this mechanism for the normal (single batched resource) case.
            $.each(resources.jsUrls, function(index, jsUrl) {
                ajaxSettings.url = jsUrl;
                $.ajax(ajaxSettings);
            });            
        }

        $.ajaxSetup({
            cache: originalCacheSetting,
            timeout: originalTimeout 
        });
        
        // TODO don't append the CSS until the Editor is actually activated to avoid risk of style clashes
        $.each(resources.cssTags, function(index, tag) {
            $("head").append(tag);
        });
        
        AJS.log("EditorLoader: Finished inserting the editor CSS tags.");
    };
    
    /**
     * Create the callback used to transfer the editor DOM and initialise the editor.
     * This callback will only be used the first time the editor is activated. Subsequent
     * activations will make use of _createReactivationCallback.
     * 
     * @param $container jQuery wrapped Element which the Editor HTML will be appended to.
     * @param loader
     * @returns {Function}
     */
    var createFirstActivationCallback = function($container, loader) {
        return function() {
            loader.notify('dom loaded');
            var $preloadContainer = getPreloadContainer();
            $container.append($preloadContainer.children());
            $preloadContainer.show();

            AJS.bind("init.rte", function() {
                loader.resolve();
                setTimeout(function(){
                    stateChangeEventListener.setListening(false);
                    stateChangeEventListener.applyHandlers();
                    AJS.trigger("add-bindings.keyboardshortcuts");
                    AJS.trigger("active.dynamic.rte");
                }, 0);
            });
            AJS.Rte.BootstrapManager.initialise();
        };            
    };
    
    /**
     * Create the callback used to activate the editor when it has been active previously.
     * 
     * @param $container
     * @param loader
     * @returns {Function}
     */
    var createReactivationCallback = function($container, loader) {
        return function() {
            var $preloadContainer = getPreloadContainer();
            if ($preloadContainer.parent()[0] != $container[0]) {
                $container.append($preloadContainer);                    
            }
            
            $preloadContainer.show();
            AJS.Rte.getEditor().focus();
            loader.resolve();
            stateChangeEventListener.setListening(false);
            stateChangeEventListener.applyHandlers();            
            AJS.trigger("add-bindings.keyboardshortcuts");
            AJS.trigger("active.dynamic.rte");
        };
    };
    
    /**
     * @returns the jQuery wrapped Element that contains the editor DOM, or create and return a new hidden div
     * if there is none found
     */
    var getPreloadContainer = function() {
        var $container = $("#editor-preload-container");
        if (!$container.length) {
            $container = $("<div id=\"editor-preload-container\" style=\"display: none;\"></div>");
        }
        
        return $container;
    };
    
    return {
        /** The maximum wait in milliseconds for the Editor to load */
        loadingTimeout: _loadingTimeout,
        
        /**
         * @returns true if there is already an active editor; otherwise false
         */
        isEditorActive: function() {
           var $container = $("#editor-preload-container");
           return $container.length && $container.is(":visible");
        },
        
        /**
         * Load the Editor into a hidden Element on the page if it hasn't already been loaded. 
         * The Editor is not initialised, its HTML, CSS and Javascript is simply loaded ready for
         * later activation.
         */
        load: loadEditor,
        
        /**
         * Activate the editor upon the given container.
         * <p/>
         * If the editor has not finished loading when this method is called then the activation
         * will occur asynchronously (when the load completes). If the editor is already loaded
         * then the success callback will occur immediately.
         * <p/>
         * If the editor has failed to load then the errorCallback will be called.
         * <p/>
         * Note that the Editor DOM is simply transferred from a current hidden location to the supplied
         * container. If you want to perform any kind of transition then you should ensure the container is
         * hidden and perform the reveal in the successCallback you provide.
         * 
         * @param container jQuery wrapped Element to display the Editor inside.
         */
        activate: function($container) {
            var loader = new $.Deferred(),
                loadCallback = null;
            //successCallback, errorCallback
            if (this.isEditorActive()) {
                //done or fail callbacks should do nothing, return an empty promise
                return new $.Deferred().promise();
            }
            
            if (editorLoadingStatus.errorMessage) {
                loader.reject(editorLoadingStatus.errorMessage)
                return loader.promise();
            }
            
            AJS.trigger("remove-bindings.keyboardshortcuts");
            // shortcuts will be added again in the callback below

            if (editorLoadingStatus.loaded && AJS.Rte && AJS.Rte.BootstrapManager && AJS.Rte.BootstrapManager.isInitComplete()) {
                loadCallback = createReactivationCallback($container, loader);
            } else {
                loadCallback = createFirstActivationCallback($container, loader);
            }

            loadEditor(loadCallback, function(){
                loader.rejectWith(this, arguments);
            });
            return loader.promise();
        },
  
        /**
         * Remove the editor from the container it was previously activated upon. deactivate must be called before an Editor can be activated
         * on another container.
         */
        deactivate: function() {
            if (this.isEditorActive()) {
                stateChangeEventListener.setListening(false);
                
                // remove all keyboard bindings and then re-bind so that we don't have editor bindings 
                // (our context enablement calculation will differ once the editor is no longer visible)
                AJS.trigger("remove-bindings.keyboardshortcuts");
                
                // This interferes with the key buffering during launch and since ajax submission is disabled
                // it is not necessary at the moment.
                // AJS.Rte.Content.setHtml("");
                // AJS.Rte.Content.editorResetContentChanged();
                var $preloadContainer = getPreloadContainer();
                $preloadContainer.hide();
                
                // Move the preload container to the body of the document in case the client plans to do 
                // anything untoward with the container now.
                // TODO You can't actually move the editor's iframe around: http://stackoverflow.com/a/2542043 so I need a new plan
                // $("body").append($preloadContainer);
                
                AJS.trigger("add-bindings.keyboardshortcuts");
            }
        },
        
        /**
         * @return the immediate parent of the currently active editor as a jQuery wrapped Element. If an editor is not
         * currently active then null will be returned.
         */
        getEditorForm: function() {
            if (this.isEditorActive()) {
                return $(tinymce.activeEditor.getContainer()).closest('form');
            } else {
                return null;
            }
        }        
    };
})(AJS.$);


} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
// TODO Move this to core Confluence and modify it to also take a TinyMCE Editor as a block object
// This could then also be used by the find and replace plugin (which is currently duplicating
// most of this).
AJS.Confluence.BlockAndBuffer = {
        
        _cancelKeyboardFunction: function(e) {
            e.preventDefault();
            e.stopPropagation();
        },
        
        /* Handle UTF-16 surrogate pair character codes */
        _surrogatePairFixedFromCharCode: function(code) {  
            if (code > 0xFFFF) {  
                code -= 0x10000;  
                return String.fromCharCode(0xD800 + (code >> 10), 0xDC00 +  (code & 0x3FF));  
            }  
            else {  
                return String.fromCharCode(code);  
            }  
        },
        
        /*
         * Buffer any character codes being typed and also prevent
         * the event that is instigating them. 
         */
        _bufferTextFunction: function(e, buffer) {
            AJS.Confluence.BlockAndBuffer._cancelKeyboardFunction(e);
            
            var keyCode = e.which;
            // IE8 doesn't have charCode for keypress event
            if (!keyCode) {
                keyCode = e.charCode ? e.charCode : e.keyCode;
            }

            // Firefox and Opera wrongly raise keypress for control characters
            if (keyCode !== 13 && keyCode < 48) {
                return;
            }

            buffer.push(keyCode);
        },
        
        
        /**
         * @return the buffered text the user may have entered
         */
        _unblock: function($jq, keycodeBuffer, blockFunc) {
            
            $jq.unbind("keypress", blockFunc);
            
            var bufferedText = "";
            for (var i = 0; i < keycodeBuffer.length; i++) {
                bufferedText += AJS.Confluence.BlockAndBuffer._surrogatePairFixedFromCharCode(keycodeBuffer[i]);
            }

            return bufferedText;
        },
        
        /* -------------------------- Public API -------------------------- */
        
        /**
         * Block keys on the supplied jQuery DOM object. 
         * 
         * @param $jq jQuery wrapped Element.
         * @return the zero argument unblock function you should run when you want to cancel the block. This will return
         * the buffer as a String.
         */
        block: function($jq) {
            var keycodeBuffer = [];

            var bufferText = function(e) {
                AJS.Confluence.BlockAndBuffer._bufferTextFunction(e, keycodeBuffer);
                e.preventDefault();
            };
            
            $jq.keypress(bufferText);
            
            return function() {
                return AJS.Confluence.BlockAndBuffer._unblock($jq, keycodeBuffer, bufferText);
            };
        }
};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
(function($){

/**
 * Depends on AJS.Confluence.EditorLoader.
 */
$(function(){
    // Pre-load the editor (is there actually any point in having this delayed/in a different event loop?)
    setTimeout(function() {

        // Useful for development if you have batching turned off and aren't testing Comments.
        if (AJS.DarkFeatures.isEnabled('disable-quick-edit')) {
            AJS.log("disable-quick-edit is turned on; run AJS.Confluence.EditorLoader.load() manually.");
            return;
        }

        AJS.log("QuickComment: instigated background loading of the comment editor.");
        AJS.Confluence.EditorLoader.load();
    }, 1000);
    $.each(enableQueue, Function.call);
    ready = true;

});

//Common code used by handlers
var handlers = [],
    ready = false,
    enableQueue = [],
    activated = false;

AJS.Confluence.QuickEdit = {
    register: function(handler){
        handlers.push(handler);
        if(ready){
            handler.enable();
        } else {
            enableQueue.push(handler.enable);
        }
    },
    disableHandlers: function(){
        $.each(handlers, function(i, current){
            return current.disable();
        })
    },
    enableHandlers: function(){
        $.each(handlers, function(i, current){
            return current.enable();
        })
    },
    /**
     * An object that binds actions to the save bar as necessary
     */
    SaveBarBinder: {
        _saveHandler: null,
        _cancelHandler: null,

        bind: function(saveHandler, cancelHandler) {
            if (!AJS.Confluence.QuickEdit.SaveBarBinder.hasBound()) {
                AJS.Confluence.QuickEdit.SaveBarBinder._saveHandler = saveHandler;
                Confluence.Editor.addSaveHandler(saveHandler);
                AJS.Confluence.QuickEdit.SaveBarBinder._cancelHandler = cancelHandler;
                Confluence.Editor.addCancelHandler(cancelHandler);
            }
        },

        /**
         * @returns true if we have already bound save or cancel handlers. Otherwise false.
         */
        hasBound: function() {
            return AJS.Confluence.QuickEdit.SaveBarBinder._saveHandler != null || AJS.Confluence.QuickEdit.SaveBarBinder._cancelHandler != null;
        }
    },

    /**
     * Activate the dynamic editor on the supplied container.
     *
     * @param $container the container containing the necessary structure to activate the
     * editor within.
     * @param saveHandler the function to be called when save is activated on the editor
     * @param cancelHandler the function to be called when the editor is cancelled.
     * @param transition the function to be called to handle the UI involved in transitioning from placeholder
     * to editor. This function should take the parameters $form, $loadingContainer, $spacer.
     * @param fallbackUrl the url presented to the user if there is an error activating the editor
     */
    activateEditor: function($container, saveHandler, cancelHandler, transition, fallbackUrl) {
        var $form = $(".quick-comment-form", $container);
        var $loadingContainer = $(".quick-comment-loading-container", $container);
        var $spacer = $(".quick-comment-vertical-spacer", $container);

        // Prevent multiple activation (e.g. due to popstate events fired by Chrome)
        if(activated) {
            return;
        }

        activated = true;

        if(!$form.length) {
            // bad page - cannot quick edit / comment, redirect to fallbackUrl
            AJS.log('Editor form cannot be found - defaulting to normal edit');
            AJS.trigger('analyticsEvent', {name: 'quick-edit-failure' });
            window.location = fallbackUrl;
            return;
        }

        var cancelLoadingMessage;

        var unblocker = AJS.Confluence.BlockAndBuffer.block($(document));

        /**
         * Display the given error message inside the provided container.
         */
        var displayError = function(message, fallbackUrl) {
            $loadingContainer.hide();
            $(".quick-comment-body", $container).append("<div class=\"quick-comment-error-box\"></div>");
            AJS.messages.error(".quick-comment-error-box", {
                title: "Error loading the comment editor",
                body: Confluence.Templates.Comments.editorLoadErrorMessage({ message: message, fallbackUrl: fallbackUrl}),
                closeable: false
            });
        };

        // If loading fails
        var errorTimeoutId = setTimeout(function() {
            cancelLoadingMessage(false);
            unblocker();
            displayError("Timeout while waiting for the editor resources to load.", fallbackUrl);
        }, AJS.Confluence.EditorLoader.loadingTimeout + 1000);

        var cancelTimeoutMessage = function() {
            clearTimeout(errorTimeoutId);
        };

        var setEditorText = function(text) {
            var editor = AJS.Rte.getEditor();
            text = text || "";
            var body = $(AJS.Rte.getEditor().getBody());
            var firstExistingLine = body.children(':first').text();
            var restHtml = $('<div></div>').append(body.children().not(':first')).html();
            var lines = text.split('\r');
            var html = '';
            var i, l, line;
            for(i = 0, l = lines.length; i < l; i++) {
                line = lines[i];
                if(i == lines.length - 1)
                    line += firstExistingLine;
                if(line)
                    html += '<p>' + $('<p></p>').text(line).html() + '</p>';
                else
                    html += '<p><br></p>';
            }
            html += restHtml;

            editor.setContent(html, {format : 'html'});

            // ensure cursor is placed after any text that is added
            var selNode = body.find('p').last()[0];
            var sel = editor.selection;
            sel.select(selNode, true);
            sel.collapse(false);
            sel.normalize();
        }

        var successCallback = function() {
            cancelLoadingMessage(true);
            cancelTimeoutMessage();

            $(".quick-comment-prompt", $container).hide();
            $loadingContainer.hide();
            $(".quick-comment-body", $container).addClass("comment-body");
            $form.fadeIn("fast", function() {
                $spacer.hide();
                AJS.Confluence.QuickEdit.SaveBarBinder.bind(saveHandler, cancelHandler);

                setEditorText(unblocker());

                // Duplicated from EditorLoader but Firefox requires the RTE focus
                // to be set after the RTE has become visible
                AJS.Rte.getEditor().focus();
            });
            AJS.trigger('quickedit.success');
        };

        var errorCallback = function(message) {
            cancelLoadingMessage(false);
            cancelTimeoutMessage(); // we have more specific error. Don't show this one.
            unblocker();
            displayError(message, fallbackUrl);
        };

        var editorActivated = AJS.Confluence.EditorLoader.activate($form);
        editorActivated.progress(function(){
            cancelLoadingMessage = transition($form, $loadingContainer, $spacer);
        });
        editorActivated.always(function(){
            if (!cancelLoadingMessage) {
                cancelLoadingMessage = transition($form, $loadingContainer, $spacer);
            }
        });
        editorActivated.done(successCallback);
        editorActivated.fail(errorCallback);
    }
};

})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
(function($) {
    /**
     * Common QuickComment code, for actual handler implementations see the comment/ directory
     */
    $(function() {
        // Customise the initialisation of AppLinks so that it won't start until the editor is initialised.
        AJS.AppLinksInitialisationBinder = function(f) {
            AJS.bind("init.rte", f);
        };
    });

    var QuickEdit = AJS.Confluence.QuickEdit;
    QuickEdit.QuickComment = {
        /**
         * A success handler that will reload the page focused on the new comment.
         */
        reloadPageSaveCommentHandler: function(data) {
            var baseUrl = getBaseUrl();
            baseUrl.addQueryParam("focusedCommentId", data.id);

            var reloadUrl = baseUrl.toString();
            window.location.href = baseUrl.toString() + "#comment-" + data.id;
        },

        cancelHandler: function() {
            AJS.Rte.Content.editorResetContentChanged();
            window.location.reload();
        },
        /**
         * Most templates require a commenter parameter. This function creates it.
         * 
         * @param $userLogoImg an img representing a user log to create commenter details from
         */
        createCommenterParam: function($userLogoImg) {
            var userLogoSrc = $userLogoImg.attr("src");

            var userName = AJS.Meta.get("remote-user");
            if (userName != null && userName.length == 0) {
                userName = null;
            }
            
            return {
                "userName": userName,
                displayName: AJS.Meta.get("user-display-name"),
                profilePicture: {
                    isDefault: $userLogoImg.hasClass("defaultLogo"),
                    path: userLogoSrc
                }
            };
        },
        
        /**
         * Create a save handler which is a function taking a single event that is to be called
         * when the save operation is activated on the editor.
         * 
         * @param successHandler the function to be called if save is successful. Takes a single argument which is the 
         * data returned from the save. 
         * @param errorHandler a function taking a single message parameter which is called if the save fails.
         * @return a function taking an event parameter which is suitable for use as a save handler for the editor
         */
        createSaveHandler: function(successHandler, errorHandler) {
            var quickComment = this;
            return function(event) {
                if (!Confluence.Editor.UI.toggleSavebarBusy(true)) {
                    AJS.log("QuickComment: subsequent save operation attempted but ignored.");
                    return;
                }
                
                if (AJS.Rte.Content.isEmpty()) {
                    AJS.Confluence.EditorNotification.notify("warning", "Comment text is empty. Cannot create empty comments.", 8);
                    return;                
                } 

                // TODO add better progress indication rather than just changing save button to "saving"

                // TODO Not required because we aren't dynamically adding comments yet
                // Learn about the users current profile picture from their avatar already rendered beside the editor
                // var commenter = quickComment.createCommenterParam(AJS.Confluence.EditorLoader.getEditorForm().closest(".quick-comment-container").find(".userLogo"));

                // Check for a parent comment. 
                var parentCommentId = 0;
                var $form = AJS.Confluence.EditorLoader.getEditorForm();
                if ($form.is("form")) {
                    var action = $form.attr("action");
                    var match = action.match(/parentId=(\d+)/);
                    if (match && match.length > 1) {
                        parentCommentId = parseInt(match[1]);
                    }                    
                }
                
                var $watchPage = $("#watchPage", $form);
                var watch = false;
                if ($watchPage.length) {
                    watch = $watchPage[0].checked;
                }

                // captcha
                var $captchaIdInput = AJS.$('input[name="captchaId"]', $form);
                var captchaId = null;
                if ($captchaIdInput.length) {
                    captchaId = $captchaIdInput.val();
                }
                var $captchaResponseInput = AJS.$('input[name="captchaResponse"]', $form);
                var captchaResponse = null;
                if ($captchaResponseInput.length) {
                    captchaResponse = $captchaResponseInput.val();
                }
                var captcha = {
                    id: captchaId,
                    response: captchaResponse
                };
                
                var changeCaptchaErrorHandler = function(message) {
                    errorHandler(message);
                    var $img = $("img.captcha-image", $form);
                    if ($img.length) {
                        // update captcha with new id
                        var captchaId = +Math.random();
                        $img[0].src = AJS.contextPath() + "/jcaptcha?id=" + captchaId;
                        $captchaIdInput.val(captchaId);
                        $captchaResponseInput.val("");
                    }
                };
                
                Confluence.Editor.CommentManager.saveComment(Confluence.getContentId(), parentCommentId, AJS.Rte.Content.getHtml(),
                        watch, captcha, successHandler, changeCaptchaErrorHandler);
            };
        },
        
        /*
         * Provide feedback to the user that their click has done something (has caused the editor to begin 
         * loading) and set up a timer to show a message if loading is taking too long.
         * 
         * @return a zero argument function that can be used to cancel the 'placeholder' timer. So
         * if activation completes quickly enough you can use this function to cancel the display of
         * the editor placeholder
         */
        loadingTransition: function($form, $loadingContainer, $spacer) {
            // CONFDEV-10526 - Change to 'comment' as it is by default page or blog
            AJS.Meta.set('content-type', 'comment');
            AJS.Meta.set('draft-type', '');
            AJS.Meta.set('save-drafts', false);

            // make sure AJS.params and AJS.Meta share the same value (until CONFDEV-15654 is resolved)
            AJS.params.contentType = 'comment';
            AJS.params.draftType = '';
            AJS.params.saveDrafts = false;

            // Update other values accordingly
            AJS.Meta.set('use-inline-tasks', 'false');

            $spacer.show(); // show the space to ensure the page is long enough to us to scroll to where there editor will be.
            $form.hide();
            $loadingContainer.show();
            
            // if loading is too slow then we will switch to showing a message
            var loadingTimeoutId = setTimeout(function() {
                $(".quick-comment-loading-message", $loadingContainer).show();
            }, 400);        
                    
            return function() {
                // CONFDEV-10529 Make sure edit is loaded before trying to manipulate it's DOM.
                $('#rte-button-save-draft').parent().remove();
                $('#editor-precursor').children().eq(0).hide();
                $('#pagelayout-menu').parent().hide();
                $('#rte-button-tasklist').remove();
                $('#rte-insert-tasklist').parent().remove();
                var saveBar = $('#rte-savebar');
                saveBar.find('.toolbar-split-left').hide();
                //ensures that the row containing draft status & hints doesn't take up space
                saveBar.find('#draft-status').parent().parent().hide();
                saveBar.find('#notifyWatchers').parent().hide();
                saveBar.find('#versionComment').parent().hide();

                // Required for chrome as it will add 10px padding if this is not hidden when effectively empty
                var minorEdit = saveBar.find('#toolbar-group-minor-edit');
                var minorEditChildren = minorEdit.children();
                // Can't use :hidden selector in jQuery as the editor is not visible yet.
                function isHidden() {
                    return $(this).css('display') === 'none';
                }
                if(minorEditChildren.length === minorEditChildren.filter(isHidden).length) {
                    minorEdit.hide();
                }

                // we will use AJAX not form submission for comments.
                Confluence.Editor.removeAllSubmitHandlers();
                Confluence.Editor.addSubmitHandler(function(e) {
                    e.preventDefault();
                    return false;
                });
                clearTimeout(loadingTimeoutId);

                // The comment editor should always use compact mode, so enable compact mode's CSS.
                $("head").append(AJS.Meta.get("editor.loader.comment.resources"));

            };
        },
        
        saveCommentErrorHandler: function(message) {
            Confluence.Editor.UI.toggleSavebarBusy(false);
            // recognise some common error conditions
            var displayMessage = "Failed to save the comment:" + " " + message;

            if (message && message.search(/captcha/i) != -1) {
                displayMessage = "The typed word did not match the text in the picture.";
            } 
            
            AJS.Confluence.EditorNotification.notify("error", displayMessage, 30);
        }
    };

    /**
     * Return an object representing the base URL.
     */
    var getBaseUrl = function() {
        // stripping ':' from protocol and '/' from pathname to handle cross browser inconsistency
        var baseUrl = window.location.protocol.replace(/:$/,"") + "://" + window.location.host + "/" +  window.location.pathname.replace(/^\//,"");

        var search = window.location.search.replace(/^\?/,""); // drop the leading '?'
        search = search.replace(/\&?focusedCommentId=\d+/,"");
        search = search.replace(/^\&/,"");

        return {
            url : baseUrl,

            search: search,

            addQueryParam : function(name, value) {
                if (!this.search) {
                    this.search = name + "=" + value;
                } else {
                    this.search = this.search + "&" + name + "=" + value;
                }
            },

            toString: function() {
                return this.url + "?" + this.search;
            }
        };
    }
})(AJS.$);

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
(function($){
    var QuickEdit = AJS.Confluence.QuickEdit;
    var QuickComment = QuickEdit.QuickComment;

    // we override 'm' rather than change it in the keyboard-shortcuts plugin. This way if the quick-comment
    // plugin is disabled we still have the original behaviour.
    AJS.bind("initialize.keyboardshortcuts", function() {
        AJS.whenIType("m").moveToAndClick(".quick-comment-prompt");
    });

    /**
     * topLevelHandler for use by QuickEdit
     */
    var topLevelHandler = {

        /**
         * Called to handle the triggering of a top level comment editor.
         * This is expected to called in the context where 'this' is the activated element.
         *
         * @param e the event triggering the activation
         */
        activateEventHandler: function(e) {
            QuickEdit.disableHandlers();

            var $container = $(this).closest(".quick-comment-container");

            var saveHandler = QuickComment.createSaveHandler(QuickComment.reloadPageSaveCommentHandler, QuickComment.saveCommentErrorHandler);

            var fallbackUrl = $("#add-comment-rte").attr("href");
            return QuickEdit.activateEditor($container, saveHandler, QuickComment.cancelHandler, topLevelHandler.loadingTransition, fallbackUrl);
        },

        enable: function() {
            $("#comments-section").delegate(".quick-comment-prompt", "click", topLevelHandler.activateEventHandler);
            $("#add-comment-rte").removeClass("full-load"); //Ensure that the original shortcut isn't also activated.
        },

        /**
         * Ensure all top level comment place holders are disable and remove all handlers.
         */
        disable: function() {
            $("#comments-section").undelegate(".quick-comment-prompt", "click");

            /*
             * Shortcuts are added and removed as the editor is activated and deactivated so
             * bind to this event so we keey the 'm' shortcut for ourselves.
             */
            AJS.bind("add-bindings.keyboardshortcuts", function() {
                AJS.whenIType("m").moveToAndClick(".quick-comment-prompt");
            });
        },

        /**
         * Ensure the entirety of the comment editor will be in view. This relies on the
         * fact that the 'add comment' editor is always at the bottom of the page. If it sat
         * higher on the page this method would always result in the comment editor being
         * scrolled to the top of the page.
         */
        loadingTransition: function($form, $loadingContainer, $spacer) {
            var cancelLoadingMessage = QuickComment.loadingTransition($form, $loadingContainer, $spacer);
            $spacer[0].scrollIntoView();
            return cancelLoadingMessage;
        }
    };

    QuickEdit.register(topLevelHandler);
})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
(function($){
    var QuickEdit = AJS.Confluence.QuickEdit;
    var QuickComment = QuickEdit.QuickComment;

    /**
     * replyHandler for use by QuickEdit
     */
    var replyHandler = {

        /**
         * Will display the editor structure when reply is activated. Expects 'this' to be the DOM element
         * that was activated.
         *
         * @param e the event triggering the activation
         */
        activateEventHandler: function(e) {
            QuickEdit.disableHandlers();

            var $thread = $(this).closest(".comment-thread");
            var $comment = $(this).closest("div.comment");

            var $placeHolderLogo = $(".quick-comment-container img.userLogo");
            var commenter = QuickComment.createCommenterParam($placeHolderLogo);

            var match = $comment.attr("id").match(/comment-(\d+)/);
            var parentCommentId = 0;
            if (match) {
                parentCommentId = parseInt(match[1]);
            } else {
                AJS.log("replyHandler: activateEventHandler - could not extract a parent comment Id from the comment id " + $comment.attr("id"));
            }

            var params = {
                "contentId": Confluence.getContentId(),
                "parentCommentId": parentCommentId,
                "commenter": commenter,
                "context": {
                    "contextPath": AJS.Meta.get("context-path"),
                    "staticResourceUrlPrefix": AJS.Meta.get("static-resource-url-prefix")
                }
            };

            //since we're creating a new quick-comment-form from template we should ensure the old one isn't found by selectors.
            $(".quick-comment-form").removeClass("quick-comment-form");
            var template = Confluence.Templates.Comments.displayReplyEditorLoadingContainer(params);
            $comment.after(template);

            // Confluence.Editor.getCurrentForm requires this to match the name of the form
            // (which is important for the binding of the submit handler)
            var $container = $(".quick-comment-container", $thread);

            var formName = $("form", $container).attr("name");
            AJS.Meta.set("form-name", formName);

            var saveHandler = QuickComment.createSaveHandler(QuickComment.reloadPageSaveCommentHandler, QuickComment.saveCommentErrorHandler);

            var fallbackUrl = $("#reply-comment-" + parentCommentId).attr("href");

            QuickEdit.activateEditor($container, saveHandler, QuickComment.cancelHandler, replyHandler.loadingTransition, fallbackUrl);
            e.stopPropagation();
            return false;
        },

        enable: function() {
            $("#comments-section").delegate(".action-reply-comment", "click", replyHandler.activateEventHandler);
        },

        disable: function() {
            $("#comments-section").undelegate(".action-reply-comment", "click");
        },

        /**
         * Ensure the entirety of the comment editor will be in view.
         * Only scroll the page if it is necessary to fit the comment editor in and attempt to
         * scroll only enough to keep the editor in view.
         */
        loadingTransition: function($form, $loadingContainer, $spacer) {
            var cancelLoadingMessage = QuickComment.loadingTransition($form, $loadingContainer, $spacer);
            var $container = $loadingContainer.closest(".quick-comment-container");
            if (!scrollWindowToElement($container)) {
                // try and scroll the closest overflow set parent (e.g. Documentation Theme)
                scrollOverflowContainerToElement($container);
            }

            return cancelLoadingMessage;
        }
    };
    QuickEdit.register(replyHandler);


    /*****************
     * Utility methods
     ********/

    /**
     * Find the closest parent with the CSS property overflow set to either 'scroll' or 'auto' and
     * scroll this to show the element.
     *
     * @return true if successfully found a parent to scroll.
     */
    function scrollOverflowContainerToElement($element) {
        var $parent = null;

        $element.parents().each(function(index) {
            var overflow = $(this).css("overflow");
            if (overflow == "auto" || overflow == "scroll") {
                $parent = $(this);
                return false;
            }
        });

        if (!$parent) {
            return false;
        }

        var height = $parent.height();

        var extra = 40; // the calculation seems to be off by 40 pixels - I don't know why (perhaps padding on $element?)
        var elementVerticalPosition = $element.offset().top;
        var elementHeight = $element.height();
        var differential = height - (elementVerticalPosition + elementHeight + extra);

        if (differential < 0) {
            $parent[0].scrollTop = $parent[0].scrollTop - differential;
        }

        return true;
    }

    /**
     * The default theme has scrollbars on the window and therefore this
     * method can make sure the supplied element is visible. However other themes don't scroll the
     * window so this method will return true if it successfully scrolls and false if it is unable
     * to move the window.
     */
    function scrollWindowToElement($element) {
        function getScrollY() {
            if ('pageYOffset' in window) {  // all browsers, except IE before version 9
                return window.pageYOffset;
            } else { // Internet Explorer before version 9
                // we ignore zoom factor which was only an issue before IE8
                return document.documentElement.scrollTop;
            }
        }

        var scrollY = getScrollY();

        var windowHeight;
        if (typeof(window.innerWidth) == 'number') {
            windowHeight = window.innerHeight;
        } else if (document.documentElement && document.documentElement.clientWidth) {
            // IE 6+ in 'standards compliant mode'
            windowHeight = document.documentElement.clientHeight;
        } else {
            // something old and creaky - just try to make sure the element will be visible and return true so we consider this successful
            $element[0].scrollIntoView(false);
            return true;
        }

        var elementVerticalPosition = $element.offset().top;
        var elementHeight = $element.height();

        var extra = 40; // the calculation seems to be off by 40 pixels - I don't know why (perhaps padding on $element?)

        if ((elementVerticalPosition + elementHeight + extra) > scrollY + windowHeight) {
            $element[0].scrollIntoView(false); // align to the bottom of the viewport
            window.scrollBy(0, extra);
            return scrollY != getScrollY(); // did we successfully scroll the window?
        } else {
            // no scrolling was necessary
            return true;
        }
    }
})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
(function ($) {

    var QuickEdit = AJS.Confluence.QuickEdit,
        container,
        editAnchor;

    function saveHandler() {
        //we don't have to implement anything here, it's a single page save
        AJS.log('Quick Edit page save.');
    }

    function cancelHandler() {
        //No need for implementation, it's just a link.
        AJS.log('Quick Edit cancel.');
    }

    function loadingTransition(form) {
        var contentId = Confluence.getContentId(),
            formAction = AJS.Data.get('content-type') === 'page' ? 'doeditpage' : 'doeditblogpost';
        formAction = Confluence.getContextPath() + '/pages/' + formAction + '.action?pageId=' + contentId;
        AJS.$('.ia-splitter-left').remove();
        try {
            AJS.$('#main').unwrap();
        } catch (e) {
            //this try catch is here in case a plugin puts scripts in the body which throw exceptions on unwrap.
        }
        //Don't need the editor to resize
        AJS.$("#wysiwyg").removeClass('resize');
        AJS.$('#rte').removeClass('editor-default').addClass('editor-fullheight');
        //hide stuff we don't need
        $('#watchPage').parent().parent().hide();
        container.children().remove();
        //There should be a way to remove editor-container all together but I don't have time to look into it right now.
        $('.editor-container').children().eq(0).unwrap();
        //we have to modify a lot of stuff here, would be better if the vm or soy templates set these things correctly.
        form.attr({"class": "editor aui", "action": formAction, "name": "editpageform", "id": "editpageform", "style": ""});
        container.append(form);
        container.removeClass('view').addClass('edit');
        $('body').addClass('contenteditor edit');

        return function (success) {
            AJS.populateParameters();
            var failure = function () {
                console.log('We experienced a problem click here to edit.');
                AJS.trigger('analyticsEvent', {name: 'quick-edit-failure' });
                // Redirect to "slow edit" if we fail to load the content (likely a session timeout - user needs to login)
                window.location = $('#editPageLink').attr('href');
            };
            if (success) {
                var url = Confluence.getContextPath() + "/rest/tinymce/1/content/" + contentId + ".json";
                var xhr = $.ajax({
                    url:url,
                    cache:false
                });
                xhr.success(function (data) {
                    var ed = tinymce.activeEditor;
                    ed.setContent(data.editorContent);
                    // CONFDEV-13487 - Update permissions fields
                    if (data.permissions){
                        for (var perm in data.permissions) {
                            $("#" + perm).attr('value', data.permissions[perm]);
                        }
                    }
                    //Ensure the user can type immediately.
                    ed.execCommand('selectAll');
                    ed.selection.collapse(true);
                    ed.selection.getRng().startContainer.focus();
                    //Ensure first undo step doesn't blow away the content we just set.
                    ed.undoManager.clear();
                    ed.undoManager.add();
                    $('#originalVersion').val(data.pageVersion);
                    // Update token in case of session timeout and user is using "remember me"
                    AJS.Meta.set('atl-token', data.atlToken);
                    AJS.$('input[name="atl_token"]').val(data.atlToken);

                    // Add history item for main editor so pressing back
                    // worked like it used to.
                    if (supportsPushState) {
                        var editLink = $("#editPageLink").attr("href");

                        if (editLink != window.location.pathname + window.location.search) {
                            history.pushState({ quickEdit: true }, "", editLink);
                        }
                    } else {
                        window.location.hash = "editor";
                    }
                    statePushed = true;

					AJS.trigger('analyticsEvent', {name: 'quick-edit-success' });
                });
                xhr.error(failure);
            } else {
                failure();
            }
        };
    }

    var QuickPageEdit = {
        /**
         * Handle the triggering of edit
         *
         * @param e the event triggering the activation
         */
        activateEventHandler:function (e) {
            if (e.metaKey || e.shiftKey || e.ctrlKey || e.altKey) {
                return;
            }
            e.preventDefault();
            QuickEdit.disableHandlers();
            var fallbackUrl = editAnchor.attr("href");
            AJS.Confluence.QuickEdit.activateEditor(container, saveHandler, cancelHandler, loadingTransition, fallbackUrl);
        },

        enable:function () {
            //don't enable/disable outside of default theme note that we can't check this until DOM ready which happens after the dark feature checks below.
            if ($('body').is('.theme-default')) {
                AJS.log("QuickPageEdit enabled");
                if (!editAnchor || editAnchor.length === 0) {
                    //first enable
                    editAnchor = $("#editPageLink");
                    editAnchor.removeClass('full-load'); // prevent default shortcut from operating
                    container = $('#content');
                }
                AJS.bind("initialize.keyboardshortcuts", function () {
                    //This is here in case keyboard shortcuts are initialized after dom ready.
                    AJS.whenIType("e").moveToAndClick(editAnchor);
                });
                editAnchor.one('click', QuickPageEdit.activateEventHandler);
            }
        },

        activateEditor: function() {
            AJS.Confluence.QuickEdit.activateEditor(container, saveHandler, cancelHandler, loadingTransition, "");
        },

        disable:function () {
            //don't enable/disable outside of default theme
            if ($('body').is('.theme-default')) {
                AJS.log("QuickPageEdit disabled.");
                editAnchor.unbind();
            }
        }
    };

    if (!($.browser.msie && +$.browser.version < 9)) {
        QuickEdit.register(QuickPageEdit);

        // Does this browser support `history.pushState` ?
        var supportsPushState = !!window.history.pushState;

        // Has a pushed state occurred? This is necessary
        // as Chrome and Firefox treat the `popstate`
        // event differently.
        var statePushed = false;

        // Handle quick edit history
        // Activating quick edit will now create a
        // history item. It falls back to hash if
        // `history.pushState` isn't supported.
        var initialUrl = location.href;

        var handlePageStateChange = function() {
            if ((supportsPushState && history.state && history.state.quickEdit)
                || window.location.hash == "#editor") {
                QuickPageEdit.activateEditor();
                statePushed = true;
            } else if (statePushed && location.href == initialUrl) {
                // I don't use reload() because that will
                // make the browser confirmation tell the
                // user they are reloading, which isn't
                // what they're expecting.
                window.location = window.location;
            }

        };

        $(window).bind(supportsPushState ? "popstate" : "hashchange", handlePageStateChange);

        // IE9 freaks out and doesn't display the editor
        // if you attempt to display it now.
        setTimeout(function() {
            ! supportsPushState && handlePageStateChange();
        }, 0);

    }
})(AJS.$);

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
AJS.bind("init.rte", function() {

    /**
     * A Manager that handles comment operations, as instigated by the Editor. This caveat basically means that
     * this manager deals with Editor formatted content. This Manager will deal with both handling the server side
     * operations involved in working with comments as well as also handling the displaying of comment operations by
     * delegating to the Confluence.CommentDisplayManager.
     */
    Confluence.Editor.CommentManager = (function($) {
        
        function getAddNewCommentUrl(contentId, actions) {
            var url = Confluence.getContextPath() + "/rest/tinymce/1/content/" + contentId + "/comment";
            if (actions) {
                url += "?actions=true";
            }
            
            return url;
        };
        
        function getReplyToCommentUrl(contentId, parentCommentId, actions) {
            var url = Confluence.getContextPath() + "/rest/tinymce/1/content/" + contentId + "/comments/" + parentCommentId + "/comment";
            if (actions) {
                url += "?actions=true";
            }
            
            return url;
        };
        
        return {
            
            /**
             * Save a new comment and display it if successful.
             * 
             * @param contentId the id of the content being commented on
             * @param parentId the of the comment being replied to. This should be 0 if this is not a reply
             * @param editorHtml editor formatted HTML which is the body of the comment
             * @param watch if true then start watching the content that is being commented on.
             * @param captcha the supplied captcha value (may be null if there is none supplied).
             * @param highlight true if you want the comment to appear highlighted
             * @param commenter the person making the comment. This is an object with the following structure:
             * {
             *     userName: (string),
             *     displayName: (string),
             *     profilePicture: {
             *         isDefault: (boolean),
             *         path: (string)
             *     }
             * }
             * @param successCallback a function taking a single parameter which represents the server returned comment that 
             * is called on success. The parameter has the structure:
             * {
             *    id: (number) the id of the comment
             *    html: (HTML string) the rendered content of the comment
             *    ownerId: (number) the id of the content commented upon
             *    parentId: (number) the id of the comment this one is in reply to
             * }
             * @param errorCallback a function taking a single parameters which describes the error returned
             */
            addComment: function(contentId, parentId, editorHtml, watch, captcha, highlight, commenter, successCallback, errorCallback) {
                var saveCommentSuccessHandler = function(data) {
                    Confluence.CommentDisplayManager.addComment(commenter, data, highlight);                
                    successCallback(data);
                };
                
                Confluence.Editor.CommentManager.saveComment(contentId, parentId, editorHtml, saveCommentSuccessHandler, errorCallback);                
            },
            
            /**
             * Save a new comment. If you also want to display the saved comment you should call addComment.
             * 
             * @param contentId the id of the content being commented on
             * @param parentId the of the comment being replied to. This should be 0 if this is not a reply
             * @param editorHtml editor formatted HTML which is the body of the comment
             * @param watch if true then start watching the content that is being commented on.
             * @param captcha the supplied captcha object
             * @param successCallback a function taking a single parameter which represents the server returned comment that 
             * is called on success. The parameter has the structure:
             * {
             *    id: (number) the id of the comment
             *    html: (HTML string) the rendered content of the comment
             *    ownerId: (number) the id of the content commented upon
             *    parentId: (number) the id of the comment this one is in reply to
             * }
             * @param errorCallback a function taking a single parameters which describes the error returned
             */            
            saveComment: function(contentId, parentId, editorHtml, watch, captcha, successCallback, errorCallback) {
                var url = null;
                if (parentId) {
                    url = getReplyToCommentUrl(contentId, parentId, true);
                } else {
                    url = getAddNewCommentUrl(contentId, true);
                }                
                
                var saveCommentSuccessHandler = function(data, textStatus, jqXHR) {
                    successCallback(data);
                };                
                
                var saveCommentErrorHandler = function(jqXHR, textStatus, errorThrown) {
                    var message = textStatus + ": " + errorThrown;
                    if (jqXHR.responseText) {
                        message = message + " - " + jqXHR.responseText;
                    }
                    errorCallback(message);
                };       
                
                var ajaxData = {
                    type: "POST",
                    url: url,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    data: {
                        "html": editorHtml,
                        "watch": watch
                    },
                    dataType : "json",
                    cache: false,
                    headers: {
                        "X-Atlassian-Token" : "nocheck"  
                    },
                    success : saveCommentSuccessHandler,
                    error : saveCommentErrorHandler,
                    timeout: 120000
                }; 
                
                if (captcha && captcha.id) {
                    ajaxData.headers["X-Atlassian-Captcha-Id"] = captcha.id;
                    ajaxData.headers["X-Atlassian-Captcha-Response"] = captcha.response;
                }
                
                AJS.$.ajax(ajaxData);  
            }
        };    
    })(AJS.$);
});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
// This file was automatically generated from sidebar.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Sidebar == 'undefined') { Confluence.Templates.Sidebar = {}; }


Confluence.Templates.Sidebar.headerStyles = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.sidebarWidth) ? '<style>.ia-fixed-sidebar, .ia-splitter-left {width: ' + soy.$$escapeHtml(opt_data.sidebarWidth) + 'px;}.theme-default .ia-splitter #main {margin-left: ' + soy.$$escapeHtml(opt_data.sidebarWidth) + 'px;}.acs-side-bar {visibility: hidden;}</style>' : '');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Sidebar.sidebar = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="acs-side-bar ia-scrollable-section"><div class="acs-side-bar-space-info tipsy-enabled" data-configure-tooltip="', soy.$$escapeHtml("Edit Space Details"), '"><div class="avatar"><div class="space-logo ', (false == 'true') ? 'project-shortcut-dialog-trigger' : '', '" data-key="', soy.$$escapeHtml(opt_data.space.key), '" data-name="', soy.$$escapeHtml(opt_data.space.name), '" data-entity-type="confluence.space"><div class="avatar-img-container"><div class="avatar-img-wrapper"><a href="', soy.$$escapeHtml(opt_data.space.homeUrl), '" title="', soy.$$escapeHtml(opt_data.space.name), '"><img class="avatar-img" src="', soy.$$escapeHtml(opt_data.space.logoUrl), '" alt="', soy.$$escapeHtml(opt_data.space.name), '"></a></div></div></div></div><div class="name"><a href="', soy.$$escapeHtml(opt_data.space.homeUrl), '" title="', soy.$$escapeHtml(opt_data.space.name), '">', soy.$$escapeHtml(opt_data.space.name), '</a></div><div class="flyout-handle icon"></div></div><div class="acs-nav-wrapper"><div class="acs-nav">');
  Confluence.Templates.Sidebar.renderLinks(opt_data, output);
  output.append('</div></div>');
  if (opt_data.contextualNav) {
    Confluence.Templates.Sidebar.contextualNav(opt_data, output);
  }
  output.append('<div class="hidden"><a href="', soy.$$escapeHtml(opt_data.space.browseSpaceUrl), '" id="space-pages-link"></a><script type="text/x-template" title="logo-config-content"><h2>', soy.$$escapeHtml("Space Details"), '</h2>', (opt_data.space.personalSpaceBelongsToUser) ? '<div class="personal-space-logo-hint">' + AJS.format("Your profile picture is used as the logo for your personal space. \x3ca href\x3d\x22{0}\x22 target\x3d\x22_blank\x22\x3eChange your profile picture\x3c/a\x3e.","" + '/users/editmyprofilepicture.action') + '</div>' : '', (! opt_data.space.personal) ? '<form id="crop-photo-form" class="aui" method="post" action="#"><div id="sidebar-logo-messages"></div><fieldset><div class="field-group"><label for="spaceName">' + soy.$$escapeHtml("Name") + '</label><input autocomplete="off" name="spaceName" id="spaceName" class="text" maxlength="255" value="{spaceName}"><input type="hidden" name="spaceKey" id="spaceKey" value="' + soy.$$escapeHtml(opt_data.space.key) + '"><input type="hidden" name="offsetX" id="avatar-offsetX" value="-1"><input type="hidden" name="offsetY" id="avatar-offsetY" value="-1"><input type="hidden" name="width" id="avatar-width" value="-1"><input type="hidden" name="logoType" id="logoType" value="' + ((opt_data.space.customLogo) ? 'custom' : 'default') + '" data-last-value="' + ((opt_data.space.customLogo) ? 'custom' : 'default') + '"></div></fieldset></form><form id="upload-logo-form" class="aui" method="POST" action="#" enctype="multipart/form-data"><fieldset class="group"><legend><span>' + soy.$$escapeHtml("Logo") + '</span></legend><div class="field-group"><input class="upload" type="file" id="upload-logo-input" name="upload-logo-input"></div><small ' + ((! opt_data.space.customLogo) ? 'class="hidden"' : '') + '><a href="#" id="reset-logo">' + soy.$$escapeHtml("Reset to default logo") + '</a></small><div id="image-holder" /></fieldset></form>' : '', '<div id="space-details-actions" class="buttons-container"><div class="buttons"><button class="aui-button save">', soy.$$escapeHtml("Save"), '</button><a href="#" class="aui-button aui-button-link cancel">', soy.$$escapeHtml("Cancel"), '</a></div></div><\/script></div></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Sidebar.renderLinks = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="acs-nav-sections">');
  if (opt_data.mainLinks.length) {
    Confluence.Templates.Sidebar.renderLinksSection({links: opt_data.mainLinks, includeConfigureLink: false, sectionClass: 'main-links-section', collectorToHighlight: opt_data.collectorToHighlight}, output);
  }
  if (opt_data.quickLinks.length) {
    output.append('<h5>', soy.$$escapeHtml("Space Shortcuts"), '</h5>');
    Confluence.Templates.Sidebar.renderLinksSection({links: opt_data.quickLinks, includeConfigureLink: false, sectionClass: 'quick-links-section tipsy-enabled', collectorToHighlight: null}, output);
  } else if (opt_data.hasConfigurePermission) {
    output.append('<h5>', soy.$$escapeHtml("Space Shortcuts"), '</h5><p class="tip">', AJS.format("Here you can add shortcut links to the most important content for your team or project. \x3ca href\x3d\x22{0}\x22 class\x3d\x22{1}\x22\x3eConfigure sidebar\x3c/a\x3e.",'','configure-sidebar'), '</p>');
  }
  if (opt_data.advancedLinks.length) {
    output.append('<hr>');
    Confluence.Templates.Sidebar.renderLinksSection({links: opt_data.advancedLinks, includeConfigureLink: opt_data.hasConfigurePermission, sectionClass: 'advanced-links-section tipsy-enabled', collectorToHighlight: opt_data.collectorToHighlight, highlightSection: opt_data.collectorToHighlight == 'spacebar-advanced'}, output);
  }
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Sidebar.renderLinksSection = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.links.length) {
    output.append('<div class="', soy.$$escapeHtml(opt_data.sectionClass), ' ', (opt_data.highlightSection) ? ' current-section' : '', '"><ul class="acs-nav-list">');
    var linkList135 = opt_data.links;
    var linkListLen135 = linkList135.length;
    for (var linkIndex135 = 0; linkIndex135 < linkListLen135; linkIndex135++) {
      var linkData135 = linkList135[linkIndex135];
      output.append('<li class="acs-nav-item ', soy.$$escapeHtml(linkData135.styleClass), (opt_data.collectorToHighlight && linkData135.collectorKey == opt_data.collectorToHighlight) ? ' current-item' : '', '"', (linkData135.collectorKey) ? 'data-collector-key="' + soy.$$escapeHtml(linkData135.collectorKey) + '"' : '', '><a class="acs-nav-item-link tipsy-enabled" href="', soy.$$escapeHtml(linkData135.url), '" data-collapsed-tooltip="', soy.$$escapeHtml(linkData135.tooltip), '"><span class="icon"></span><span class="acs-nav-item-label">', soy.$$escapeHtml(linkData135.title), '</span></a></li>');
    }
    output.append((opt_data.includeConfigureLink) ? '<li class="acs-nav-item configure"><a id="acs-configure-link" class="acs-nav-item-link" href="" data-collapsed-tooltip="' + soy.$$escapeHtml("Configure sidebar") + '"><span class="icon"></span><span class="acs-nav-item-label">' + soy.$$escapeHtml("Configure sidebar") + '</span></a></li>' : '', '</ul></div>');
  }
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Sidebar.contextualNav = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="ia-secondary-container tipsy-enabled" data-tree-type="', (opt_data.forBlogs) ? 'blogs' : (opt_data.forSettings) ? 'settings' : 'pages', '"><hr>');
  if (opt_data.forBlogs) {
    output.append('<div class="ia-secondary-header"><h5 class="ia-secondary-header-title blog"><span class="icon"></span><span class="label">', soy.$$escapeHtml("Blog"), '</span></h5></div><div class="ia-secondary-content">');
    Confluence.Templates.Sidebar.pagetreeList({pagetree: opt_data.contextualNav}, output);
    output.append('</div>');
  } else if (opt_data.forSettings) {
    output.append('<div class="ia-secondary-header"><h5 class="ia-secondary-header-title settings"><span class="label">', soy.$$escapeHtml("Advanced"), '</span></h5></div><div class="ia-secondary-content">');
    Confluence.Templates.Sidebar.pagetreeList({pagetree: opt_data.contextualNav}, output);
    output.append('</div>');
  } else {
    output.append('<div class="ia-secondary-header">');
    Confluence.Templates.Sidebar.Pages.header({parentPage: opt_data.contextualNav.parentPage}, output);
    output.append('</div><div class="ia-secondary-content">');
    Confluence.Templates.Sidebar.Pages.render({children: opt_data.contextualNav, createPermission: opt_data.hasCreatePermission}, output);
    output.append('</div>');
  }
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Sidebar.pagetreeList = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ul class="', (opt_data.isSubtree) ? 'ia-subpagetree' : 'ia-pagetree', '">');
  var itemList206 = opt_data.pagetree;
  var itemListLen206 = itemList206.length;
  for (var itemIndex206 = 0; itemIndex206 < itemListLen206; itemIndex206++) {
    var itemData206 = itemList206[itemIndex206];
    Confluence.Templates.Sidebar.pagetreeItem(itemData206, output);
  }
  output.append('</ul>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Sidebar.throbber = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="content-container"><div class="throbber-container"><div class="throbber"><div class="spinner"></div><span>', soy.$$escapeHtml("Loading..."), '</span></div></div></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Sidebar.treeThrobber = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<ul class="ia-subpagetree"><li class="acs-tree-item leaf"><span class="node-title">', soy.$$escapeHtml("Loading..."), '</span></li></ul>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Sidebar.pagetreeItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li class="acs-tree-item', (opt_data.hasChildren) ? (opt_data.children.length) ? ' opened' : ' closed' : ' leaf', (opt_data.groupType) ? ' grouping' : '', (opt_data.active) ? ' current-item' : '', '"', (opt_data.pageId) ? ' data-page-id="' + soy.$$escapeHtml(opt_data.pageId) + '"' : '', (opt_data.groupType) ? ' data-group-type="' + soy.$$escapeHtml(opt_data.groupType) + '" data-group-value="' + soy.$$escapeHtml(opt_data.groupValue) + '"' : '', '>', (! opt_data.groupType) ? '<a href="' + soy.$$escapeHtml(opt_data.url) + '">' : '', '<span class="icon ', (opt_data.hasChildren) ? (opt_data.children.length) ? 'icon-section-opened' : 'icon-section-closed' : '', '"></span><span class="node-title navigation-pseudo-link">', soy.$$escapeHtml(opt_data.title), '</span>', (! opt_data.groupType) ? '</a>' : '');
  if (opt_data.children && opt_data.children.length > 0) {
    Confluence.Templates.Sidebar.pagetreeList({pagetree: opt_data.children, isSubtree: true}, output);
  }
  output.append('</li>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
// This file was automatically generated from sidebar-pages.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Sidebar == 'undefined') { Confluence.Templates.Sidebar = {}; }
if (typeof Confluence.Templates.Sidebar.Pages == 'undefined') { Confluence.Templates.Sidebar.Pages = {}; }


Confluence.Templates.Sidebar.Pages.render = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.children.initialPages.length) {
    output.append('<ul class="children">');
    Confluence.Templates.Sidebar.Pages.renderChildren({children: opt_data.children.initialPages}, output);
    output.append('</ul>');
    if (opt_data.children.remainingPages.length) {
      output.append('<ul class="more-children">');
      Confluence.Templates.Sidebar.Pages.renderChildren({children: opt_data.children.remainingPages}, output);
      output.append('</ul><a class="more-children-link" href=""><span class="icon"></span><span class="label">', soy.$$escapeHtml(AJS.format("{0} more children",opt_data.children.remainingPages.length)), '</span></a>');
    }
  }
  output.append((opt_data.createPermission && opt_data.children.createLink) ? '<a class="create-child-page-link" href="' + soy.$$escapeHtml(opt_data.children.createLink) + '"><span class="icon"></span><span class="label">' + soy.$$escapeHtml("Create child page") + '</span></a>' : '');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Sidebar.Pages.header = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.parentPage) ? '<h5 class="ia-secondary-header-title wiki' + ((opt_data.parentPage.active) ? ' current-item' : '') + '"><span class="icon"></span><span class="label">' + soy.$$escapeHtml(opt_data.parentPage.title) + '</span></h5>' : '');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Sidebar.Pages.renderChildren = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var childList35 = opt_data.children;
  var childListLen35 = childList35.length;
  for (var childIndex35 = 0; childIndex35 < childListLen35; childIndex35++) {
    var childData35 = childList35[childIndex35];
    output.append('<li class="child-item" data-page-id="', soy.$$escapeHtml(childData35.pageId), '"><span class="icon"></span><a href="', soy.$$escapeHtml(childData35.url), '" title="', soy.$$escapeHtml(childData35.title), '"><span class="label">', soy.$$escapeHtml(childData35.title), '</span></a></li>');
  }
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
(function(A){Confluence.Sidebar={};
AJS.toInit(function(G){var S=G(window);
var g=G(document);
var X=Math.min(285,S.width()/3);
var h=285;
var f=150;
var T=55;
var Q=AJS.contextPath();
var M=Q.length?Q:"/";
var P=AJS.Meta.get("space-key");
var B=AJS.Meta.get("use-keyboard-shortcuts")?" "+"(\u2002\'[\'\u2002)":"";
var F="Collapse sidebar"+B;
var U="Expand sidebar"+B;
var E=G(".ia-splitter").children();
var i=G(".ia-splitter-left");
if(i.length<1){return 
}var N=G(".acs-side-bar");
var Z=i.find(".ia-fixed-sidebar");
var C=G("<div>",{"class":"ia-splitter-handle tipsy-enabled","data-tooltip":F}).appendTo(Z);
G("<div>",{"class":"ia-splitter-handle-highlight"}).appendTo(C);
var H=G(".ia-secondary-container");
var b=G("#footer, #studio-footer");
Confluence.Sidebar.throbberDiv=I;
H.length&&e(H.attr("data-tree-type"));
S.scroll(Y);
S.resize(Y);
S.on("touchend",Y);
g.ready(Y);
AJS.bind("confluence.header-resized",Y);
Confluence.Sidebar.applyTooltip=V;
L();
AJS.bind("sidebar.exit-configure-mode",L);
var J=G.cookie("confluence-sidebar.width")||X,D=J>f?J:T;
K(D);
W();
N.css("visibility","visible");
Y();
O();
Confluence.Sidebar.createFlyouts(N);
AJS.trigger("sidebar.finished-loading");
AJS.bind("sidebar.enter-configure-mode",j);
AJS.bind("sidebar.exit-configure-mode",a);
function V(k,m){var l={live:true,gravity:"w",title:"data-tooltip",delayIn:500,delayOut:0,offset:5};
G(k).tooltip(m?G.extend(l,m):l)
}function L(){G(".acs-side-bar .quick-links-section").attr("data-collapsed-tooltip","Space Shortcuts");
G(".acs-side-bar .advanced-links-section").attr("data-collapsed-tooltip","Space tools");
if(H.attr("data-tree-type")=="pages"){G(".acs-side-bar .ia-secondary-container").attr("data-collapsed-tooltip","Child pages");
V(".acs-side-bar.collapsed .ia-secondary-container.tipsy-enabled",{title:"data-collapsed-tooltip"})
}V(".ia-splitter-handle.tipsy-enabled");
V(".acs-side-bar.collapsed .quick-links-section.tipsy-enabled, .acs-side-bar.collapsed .acs-nav-item > a.tipsy-enabled, .acs-side-bar.collapsed .advanced-links-section.tipsy-enabled",{title:"data-collapsed-tooltip"});
V(".configure-mode .acs-side-bar-space-info.tipsy-enabled",{title:"data-configure-tooltip"});
N.on("mousedown click",function(){G(".tipsy").remove()
});
AJS.bind("sidebar.disable-tooltip",l);
AJS.bind("sidebar.enable-all-tooltips",k);
function l(p,o){var m=G(o).closest(".tipsy-enabled");
if(m.size()!=1){return 
}m.removeClass("tipsy-enabled").addClass("tipsy-disabled").attr("title","");
var n=m.data("tipsy");
if(n){n.hoverState="out"
}G(".tipsy").remove()
}function k(){G(".tipsy-disabled").removeClass("tipsy-disabled").addClass("tipsy-enabled")
}}function W(){g.on("mousewheel",".ia-scrollable-section",function(n,o){var m=G(this).scrollTop();
var l=G(this).get(0).scrollHeight-G(this).innerHeight()-1;
if((o>0&&m<=0)||(o<0&&m>=l)){n.preventDefault()
}else{if(G.browser.msie){n.preventDefault();
var k=30;
G(this).scrollTop(m+(-1*o*k))
}}n.stopPropagation()
})
}function I(){var l=G(Confluence.Templates.Sidebar.throbber()),m=l.find(".spinner"),k=Raphael.spinner(m[0],10,"#666");
l.find(".throbber").bind("remove",function(){k()
});
return l
}function e(k){if(k==="blogs"){d(N,R)
}else{if(k==="pages"){Confluence.Sidebar.Pages.installHandlers(N)
}}}function R(n,o){var m=n.attr("data-group-type");
var k=n.attr("data-group-value");
var l=Q+"/rest/ia/1.0/pagetree/blog/subtree";
G.get(l,{spaceKey:P,groupType:m,groupValue:k}).done(o)
}function d(k,l){k.delegate(".acs-tree-item > .icon, .acs-tree-item > .node-title","click",function(){var q=G(this);
var p=q.parent();
var m=p.find("> .icon");
if(p.hasClass("opened")){p.children("ul").hide();
p.removeClass("opened").addClass("closed");
m.removeClass("icon-section-opened").addClass("icon-section-closed")
}else{if(p.hasClass("closed")){var n=p.children("ul");
if(n.length){n.show()
}else{var o=G(Confluence.Templates.Sidebar.treeThrobber());
p.append(o);
l(p,function(s){var r=G(Confluence.Templates.Sidebar.pagetreeList({pagetree:s,isSubtree:true}));
o.remove();
r.appendTo(p)
})
}p.removeClass("closed").addClass("opened");
m.removeClass("icon-section-closed").addClass("icon-section-opened")
}}})
}function Y(){var k=i.offset().top,l=S.scrollTop(),m=S.scrollLeft();
if(l<0){return 
}if(l>(g.height()-S.height())){return 
}if(m<0){return 
}if(m>(g.width()-S.width())){return 
}Z.css({top:Math.max(k-l,0)+"px",left:Math.min(m*-1,0)+"px"})
}function c(){b.css("margin-left",Z.outerWidth()+"px")
}function O(){var n=G("body");
var l=false;
var m=false;
var o=function(p){m=true;
p.preventDefault();
E.one("selectstart",function(r){r.preventDefault()
});
var q=function(){if(Z.width()<=f){K(T)
}m=false;
n.off("mousemove.ia-splitter")
};
l=false;
n.on("mousemove.ia-splitter",function(r){if(Confluence.Sidebar.Configure.mode&&r.pageX<h){return 
}K(r.pageX);
l=true
});
n.one("mouseup mouseleave",q)
};
C.on("mousedown.ia-splitter",function(p){o(p)
}).click(function(){if(!l){k()
}else{l=false
}});
function k(){if(Confluence.Sidebar.Configure.mode){return 
}if(Z.width()>T){X=Z.width();
K(T)
}else{K(X)
}}}function K(k){k=Math.max(k,T);
G.cookie("confluence-sidebar.width",k,{path:M});
if(k<=f){N.addClass("collapsed");
C.attr("data-tooltip",U)
}else{if(N.hasClass("collapsed")){N.removeClass("collapsed");
C.attr("data-tooltip",F)
}}Z.width(k);
E.eq(1).css("margin-left",k+"px");
c()
}function j(){if(Z.width()<h){Confluence.Sidebar.widthBeforeConfiguring=Z.width();
K(h)
}}function a(){if(Confluence.Sidebar.widthBeforeConfiguring){K(Confluence.Sidebar.widthBeforeConfiguring);
Confluence.Sidebar.widthBeforeConfiguring=undefined
}}})
})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
(function(A){AJS.Confluence.ConfigurableNav=AJS.RestfulTable.extend({initialize:function(C){var B=this;
B.options=A.extend(true,C,{model:AJS.RestfulTable.EntryModel,Collection:Backbone.Collection.extend({url:C.resources.self,model:AJS.RestfulTable.EntryModel}),columns:[{id:"title"}]});
B._events=AJS.RestfulTable.Events;
B.classNames=AJS.RestfulTable.ClassNames;
B.dataKeys=AJS.RestfulTable.DataKeys;
B.$table=C.$el.addClass(this.classNames.RESTFUL_TABLE).addClass(this.classNames.ALLOW_HOVER).addClass("aui").addClass(B.classNames.LOADING);
B.$table.prepend('<colgroup><col span="1" class="aui-restfultable-order"><col span="1"><col span="1" class="aui-restfultable-operations"></colgroup>');
B.$tbody=A("<tbody/>");
B._models=this._createCollection();
B._rowClass=AJS.Confluence.ConfigurableNav.Row;
B.editRows=[];
B.enableReordering();
B._models.bind("remove",function(D){A.each(B.getRows(),function(E,F){if(F.model===D){if(F.hasFocus()&&B._createRow){B._createRow.trigger(B._events.FOCUS)
}B.removeRow(F)
}})
});
A.get(B.options.resources.all,function(D){B.populate(D)
});
Confluence.Sidebar.applyTooltip(".hide-link, .show-link, .delete-link",{gravity:"ne"})
},enableReordering:function(){var B=this;
this.$tbody.sortable({handle:"."+this.classNames.DRAG_HANDLE,helper:function(E,C){var D=C.clone(true).addClass(B.classNames.MOVEABLE);
D.children().each(function(F){A(this).width(C.children().eq(F).width())
});
return D
},start:function(C,D){var E=D.placeholder.find("td");
D.item.addClass(B.classNames.MOVEABLE).children().each(function(F){A(this).width(E.eq(F).width())
});
D.placeholder.html('<td colspan="'+B.getColumnCount()+'">&nbsp;</td>').css("visibility","visible");
B.getRowFromElement(D.item[0]).trigger(B._events.MODAL)
},stop:function(C,D){if(jQuery(D.item[0]).is(":visible")){D.item.removeClass(B.classNames.MOVEABLE).children().attr("style","");
D.placeholder.removeClass(B.classNames.ROW);
B.getRowFromElement(D.item[0]).trigger(B._events.MODELESS)
}},update:function(E,G){var C,D,F={},H=B.getRowFromElement(G.item[0]);
if(H){if(B.options.reverseOrder){D=G.item.next();
if(!D.length){F.position="First"
}else{C=B.getRowFromElement(D).model;
F.after=C.url()
}}else{D=G.item.prev();
if(!D.length){F.position="First"
}else{C=B.getRowFromElement(D).model;
F.after=C.url()
}}F.spaceKey=AJS.Meta.get("space-key");
A.ajax({url:H.model.url()+"/move",type:"POST",dataType:"json",contentType:"application/json",data:JSON.stringify(F),complete:function(){H.hideLoading()
},success:function(I){AJS.triggerEvtForInst(B._events.REORDER_SUCCESS,B,[I])
},error:function(J){var I=A.parseJSON(J.responseText||J.data);
AJS.triggerEvtForInst(B._events.SERVER_ERROR,B,[I,J])
}});
H.showLoading()
}},axis:"y",delay:0,containment:"document",cursor:"move",scroll:true,zIndex:8000});
this.$tbody.bind("selectstart mousedown",function(C){return !A(C.target).is("."+B.classNames.DRAG_HANDLE)
})
}});
AJS.Confluence.ConfigurableNav.ReadView=AJS.RestfulTable.CustomReadView.extend({render:function(B){return _.template('<span class="acs-nav-item-link" title="<%=title%>"><span class="icon"></span><span class="acs-nav-item-label"><%=title%></span></span>',{title:AJS.escapeHtml(B.title)})
}});
AJS.Confluence.ConfigurableNav.Row=AJS.RestfulTable.Row.extend({render:function(){var B=this,D=this.model.toJSON(),E=A("<td class='aui-restfultable-operations' />").append(this.renderOperations(D.canHide,D.hidden)),C=A('<td class="'+this.classNames.ORDER+'"/>').append(this.renderDragHandle());
B.$el.attr("data-id",this.model.id);
B.$el.append(C);
A.each(B.columns,function(F,G){var H,J=A("<td />"),I=D[G.id];
if(I){B.$el.attr("data-"+G.id,I)
}H=new AJS.Confluence.ConfigurableNav.ReadView().render(D);
J.append(H);
B.$el.append(J)
});
B.$el.append(E);
D.canHide&&D.hidden&&B.$el.addClass("hidden-link");
B.$el.addClass(this.classNames.ROW+" "+B.classNames.READ_ONLY+" acs-nav-item "+D.styleClass);
B.trigger(this._events.RENDER,this.$el,D);
B.$el.trigger(this._events.CONTENT_REFRESHED,[B.$el]);
return B
},renderOperations:function(F,E){var C=this,B=A('<a href="#" class="aui-icon aui-icon-small"/>');
if(F){function D(G){if(G.hasClass("hide-link")){G.attr("data-tooltip","Hide Link")
}else{G.attr("data-tooltip","Show Link")
}}B.addClass(E?"show-link":"hide-link").click(function(G){G.preventDefault();
A.ajax({url:C.model.url()+(E?"/show":"/hide"),type:"POST",dataType:"json",contentType:"application/json",data:JSON.stringify({spaceKey:AJS.Meta.get("space-key")})}).done(function(){B.closest(".acs-nav-item").toggleClass("hidden-link");
B.toggleClass("hide-link").toggleClass("show-link");
D(B)
})
});
D(B)
}else{B.addClass("delete-link").click(function(G){G.preventDefault();
C.destroy()
}).attr("data-tooltip","Remove Link")
}return B
},destroy:function(){this.model.destroy({data:{spaceKey:AJS.Meta.get("space-key")}})
}})
})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
(function(A){Confluence.Sidebar.Pages={installHandlers:function(B){B.find(".more-children-link").click(function(C){C.preventDefault();
B.find("ul.more-children").show();
A(this).hide()
})
},collapsedContent:function(){var B=A(".ia-secondary-header h5");
var C=A(".acs-side-bar .ia-secondary-content");
return A("<div>").append(B.clone()).append(C.find("ul.children").clone()).append(C.find("ul.more-children").clone()).append(C.find(".create-child-page-link").clone()).html()
}}
})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
AJS.$(function(E){Confluence.Sidebar.Configure={mode:false};
var C=AJS.Meta.get("context-path"),J=AJS.Meta.get("space-key"),M=E(".acs-side-bar"),K=M.find(".ia-secondary-container"),D=M.find(".project-shortcut-dialog-trigger"),B,O,N;
E.ajaxSetup({cache:false});
E("#acs-configure-link, a.configure-sidebar").click(function(Q){Q.preventDefault();
I()
});
function I(){Confluence.Sidebar.Configure.mode=true;
N=E(".acs-nav-sections .acs-nav-item.current-item").data("collector-key");
M.addClass("configure-mode");
B=Confluence.Sidebar.throbberDiv();
B.height(E(".acs-nav-sections").height());
E(".acs-nav-sections").replaceWith(B);
K.hide();
O=E('<div class="acs-nav-sections"></div>').hide();
B.after(O);
Confluence.Sidebar.Configure.$mainLinks=E('<table id="acs-nav-list-main" class="acs-nav-list"></table>');
Confluence.Sidebar.Configure.$quickLinks=E('<table id="acs-nav-list-quick" class="acs-nav-list"></table>');
O.append(Confluence.Sidebar.Configure.$mainLinks).append(Confluence.Sidebar.Configure.$quickLinks);
var T=E('<button class="aui-style aui-button aui-button-primary acs-done-link">'+"Done"+"</button>");
T.click(function(V){V.preventDefault();
P()
});
var U=E('<button class="aui-style aui-button acs-add-link">'+"Add link"+"</button>");
var S=E('<div class="buttons-wrapper"></div>');
S.append(T).append(U);
O.append(S);
G(false);
A();
L();
H();
var R={};
var Q=function(){B.replaceWith(O);
O.show()
};
Confluence.Sidebar.Configure.$mainLinks.one(AJS.RestfulTable.Events.INITIALIZED,function(){R.main=true;
R.quick&&Q()
});
Confluence.Sidebar.Configure.$quickLinks.one(AJS.RestfulTable.Events.INITIALIZED,function(){R.quick=true;
R.main&&Q()
});
Confluence.Sidebar.Configure.Logo.bind();
AJS.trigger("sidebar.enter-configure-mode")
}function P(){M.removeClass("configure-mode");
B=Confluence.Sidebar.throbberDiv();
B.height(O.height());
O.replaceWith(B);
G(true);
F();
K.show().css("display","");
var Q=function(){var S=E(Confluence.Templates.Sidebar.renderLinks({mainLinks:R.main,quickLinks:R.quick.reverse(),advancedLinks:R.advanced,hasConfigurePermission:true,collectorToHighlight:N}));
B.replaceWith(S);
E("#acs-configure-link, a.configure-sidebar").click(function(T){T.preventDefault();
I()
});
Confluence.Sidebar.Configure.mode=false;
AJS.trigger("sidebar.exit-configure-mode")
};
var R={};
E.get(C+"/rest/ia/1.0/link/main",{spaceKey:J,includeHidden:false}).done(function(S){R.main=S;
R.quick&&R.advanced&&Q()
});
E.get(C+"/rest/ia/1.0/link/quick",{spaceKey:J}).done(function(S){R.quick=S;
R.main&&R.advanced&&Q()
});
E.get(C+"/rest/ia/1.0/link/advanced",{spaceKey:J}).done(function(S){R.advanced=S;
R.main&&R.quick&&Q()
});
Confluence.Sidebar.Configure.Logo.unbind()
}function A(){var Q=new E.Deferred();
E(".acs-add-link").click(function(R){Q.done(function(){R.preventDefault();
Confluence.Sidebar.LinkAdapter.hijackLinkBrowser();
Confluence.Editor.LinkBrowser.open();
E("#recentlyviewed-panel-id").click()
})
});
if(AJS.Meta.get("space-key")){AJS.Confluence.EditorLoader.load(function(){Q.resolve()
},function(){AJS.log("Attempted to load editor for space ia side bar. Loading the editor failed.");
Q.reject()
})
}else{Q.resolve()
}}function L(){var S=E("<h5>"+"Space Shortcuts"+"</h5>");
var Q=Confluence.Sidebar.Configure.$quickLinks;
var T=E('<p class="tip">'+"Click \"Add link\" to add links to the sidebar."+"</p>").hide();
Q.before(S).after(T);
var R=function(){if(Confluence.Sidebar.Configure.QuickLinks.isEmpty()){Q.hide();
T.show()
}else{T.hide();
Q.show()
}};
AJS.bindEvt(AJS.RestfulTable.Events.INITIALIZED,R);
AJS.bindEvt(AJS.RestfulTable.Events.ROW_ADDED,R);
AJS.bindEvt(AJS.RestfulTable.Events.ROW_REMOVED,R)
}function H(){Confluence.Sidebar.Configure.MainLinks=new AJS.Confluence.ConfigurableNav({$el:E("#acs-nav-list-main"),resources:{all:C+"/rest/ia/1.0/link/main?spaceKey="+J+"&includeHidden=true",self:C+"/rest/ia/1.0/link"}});
Confluence.Sidebar.Configure.QuickLinks=new AJS.Confluence.ConfigurableNav({$el:E("#acs-nav-list-quick"),resources:{all:C+"/rest/ia/1.0/link/quick?spaceKey="+J,self:C+"/rest/ia/1.0/link"},reverseOrder:true})
}function F(){Confluence.Sidebar.Configure.MainLinks.remove();
Confluence.Sidebar.Configure.MainLinks.unbind();
Confluence.Sidebar.Configure.QuickLinks.remove();
Confluence.Sidebar.Configure.QuickLinks.unbind();
E(AJS).unbind(AJS.RestfulTable.Events.INITIALIZED);
E(AJS).unbind(AJS.RestfulTable.Events.ROW_ADDED);
E(AJS).unbind(AJS.RestfulTable.Events.ROW_REMOVED)
}function G(Q){D.length&&D.toggleClass("project-shortcut-dialog-trigger",Q)
}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
(function(D){var B,C;
Confluence.Sidebar.createFlyouts=function(H){B=G(D(".collapsed .quick-links-section"),function(){return D(".acs-side-bar .quick-links-section").html()
},"sidebar-quick-links-flyout",{flyout:"quick-links"});
A();
AJS.bind("sidebar.exit-configure-mode",A);
var I=H.find(".ia-secondary-container");
if(I.length&&I.attr("data-tree-type")=="pages"){C=G(D(".collapsed .ia-secondary-header-title.wiki"),Confluence.Sidebar.Pages.collapsedContent,"sidebar-children-flyout",{flyout:"children"})
}};
function G(H,K,J,M){var L=function(O,N,P){D(O).addClass("acs-side-bar-flyout ia-scrollable-section");
D(O).empty().append(K());
AJS.trigger("sidebar.flyout-triggered",M);
P();
D(N).one("click",function(Q){if(D("#inline-dialog-"+J).is(":visible")){setTimeout(function(){I.hide()
},0)
}});
AJS.trigger("sidebar.disable-tooltip",N)
};
var I=AJS.InlineDialog(H,J,L,{getArrowPath:E,calculatePositions:F,useLiveEvents:true,hideDelay:null,hideCallback:function(){AJS.trigger("sidebar.enable-all-tooltips")
}});
D(window).scroll(function(){I.hide()
});
return I
}function F(I,L,Q,H){var R=L.target.offset();
var P=L.target.width();
var M=L.target.height();
var O={top:R.top+M/2-15,left:R.left+P+5,right:"auto"};
var J=D(window);
var N=20;
O.maxHeight=J.height()+J.scrollTop()-O.top-N;
if(D.browser.msie&&parseInt(D.browser.version,10)<=8){O.maxHeight-=40
}var K={top:9,left:-7};
return{displayAbove:false,popupCss:O,arrowCss:K}
}function E(){return"M8,16 L0,8,8,0"
}function A(){$settingsLink=D(".advanced-links-section li.settings a");
D(".acs-side-bar").on("click",".collapsed .advanced-links-section",function(){window.location.href=$settingsLink.attr("href")
})
}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */
(function(a){function d(b){var c=b||window.event,d=[].slice.call(arguments,1),e=0,f=!0,g=0,h=0;return b=a.event.fix(c),b.type="mousewheel",c.wheelDelta&&(e=c.wheelDelta/120),c.detail&&(e=-c.detail/3),h=e,c.axis!==undefined&&c.axis===c.HORIZONTAL_AXIS&&(h=0,g=-1*e),c.wheelDeltaY!==undefined&&(h=c.wheelDeltaY/120),c.wheelDeltaX!==undefined&&(g=-1*c.wheelDeltaX/120),d.unshift(b,e,g,h),(a.event.dispatch||a.event.handle).apply(this,d)}var b=["DOMMouseScroll","mousewheel"];if(a.event.fixHooks)for(var c=b.length;c;)a.event.fixHooks[b[--c]]=a.event.mouseHooks;a.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var a=b.length;a;)this.addEventListener(b[--a],d,!1);else this.onmousewheel=d},teardown:function(){if(this.removeEventListener)for(var a=b.length;a;)this.removeEventListener(b[--a],d,!1);else this.onmousewheel=null}},a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
(function(A){Confluence.Sidebar.LinkAdapter={setLink:function(D){var C=AJS.Meta.get("context-path");
var E=Confluence.unescapeEntities(D.getHtml());
var B={spaceKey:AJS.Meta.get("space-key"),pageId:D.attrs["data-linked-resource-id"],customTitle:E==D.getDefaultAlias()?"":E,url:D.attrs.href};
A.ajax({type:"POST",url:C+"/rest/ia/1.0/link",data:A.toJSON(B),dataType:"json",contentType:"application/json",success:function(F){AJS.Confluence.Sidebar.Configure.QuickLinks.addRow({id:F.id,title:F.title,styleClass:F.styleClass,canHide:F.canHide,hidden:F.hidden})
}})
},getLink:function(){return Confluence.Link.fromData({attrs:{},body:{isEditable:true,isImage:false,html:"",imgName:"",text:""}})
},hijackedLinkBrowser:false,hijackLinkBrowser:function(){var B=Confluence.Sidebar.LinkAdapter;
if(!B.hijackedLinkBrowser){B.storeBookmark=AJS.Rte.BookmarkManager.storeBookmark;
B.restoreBookmark=AJS.Rte.BookmarkManager.restoreBookmark;
AJS.Rte.BookmarkManager.storeBookmark=A.noop;
AJS.Rte.BookmarkManager.restoreBookmark=A.noop;
B.oldLinkAdapter=Confluence.Editor.LinkAdapter;
Confluence.Editor.LinkAdapter=B;
B.$oldTabItems=A("#link-browser-tab-items div");
B.$oldTabItems.each(function(){console.log("while iterating over tab items: "+A(this));
var C=A(this).text();
if(C!="search"&&C!="recentlyviewed"&&C!="weblink"){A(this).remove()
}});
B.hijackedLinkBrowser=true
}},releaseLinkBrowser:function(){var B=Confluence.Sidebar.LinkAdapter;
if(B.hijackedLinkBrowser){AJS.Rte.BookmarkManager.storeBookmark=B.storeBookmark;
AJS.Rte.BookmarkManager.restoreBookmark=B.restoreBookmark;
A("#link-browser-tab-items").empty().append(B.$oldTabItems);
Confluence.Editor.LinkAdapter=B.oldLinkAdapter;
B.hijackedLinkBrowser=false
}}};
AJS.bind("closed.link-browser",function(){if(Confluence.Sidebar.LinkAdapter.hijackedLinkBrowser){Confluence.Sidebar.LinkAdapter.releaseLinkBrowser()
}});
AJS.bind("updated.link-browser-recently-viewed",function(){var C=AJS.Meta.get("page-title"),B=AJS.Meta.get("space-name");
if(C&&B){A("#insert-link-dialog .recently-viewed-panel .data-table tr").each(function(){var D=A(this);
if(D.find(".title-field").text()==C&&D.find(".space-field").text()==B){D.click()
}})
}})
})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
AJS.$(function(G){Confluence.Sidebar.Configure.Logo={};
var E=AJS.Meta.get("context-path"),F=AJS.Meta.get("space-key");
Confluence.Sidebar.Configure.Logo.bind=function(){G(".acs-side-bar-space-info").on("click.configurelogo",function(I){H();
I.preventDefault();
return false
})
};
Confluence.Sidebar.Configure.Logo.unbind=function(){G("#inline-dialog-space-logo-config .cancel").click();
G(".acs-side-bar-space-info").off("click.configurelogo")
};
var C,A,D=G(".acs-side-bar-space-info div.name a").text(),B=false;
function H(){var K=function(T,S,V){var R=G("#logoType").val();
var U=G("img.avatar-img").attr("src");
G(T).addClass("acs-side-bar-flyout");
G(T).empty();
T.html(AJS.template.load("logo-config-content").fill({spaceName:D}));
O(R,U,R,U);
Q(R);
B=false;
T.unbind("mouseover mouseout");
AJS.trigger("sidebar.disable-tooltip",S);
V()
};
A=false;
if(!C){C=AJS.InlineDialog(G(".acs-side-bar-space-info"),"space-logo-config",K,{getArrowPath:P,calculatePositions:L,useLiveEvents:true,preHideCallback:function(){return A
},hideCallback:function(){AJS.trigger("sidebar.enable-all-tooltips")
},hideDelay:null,noBind:true,width:635})
}function L(S,U,Y,R){var Z=U.target.offset();
var X=U.target.width();
var V=U.target.height();
var W={top:Z.top+V/2-15,left:Z.left+X+5,right:"auto"};
var T={top:9,left:-7};
return{displayAbove:false,popupCss:W,arrowCss:T}
}function P(){return"M8,16 L0,8,8,0"
}C.show();
function Q(R){if(R){G("#reset-logo").parent().toggleClass("hidden",R!=="custom")
}}function O(W,T,V,R){var S=G("#logoType");
var U=G("img.avatar-img");
if(W){S.val(W)
}if(T){U.attr("src",encodeURI(T));
U.hide(0,function(){U.show()
});
Q(W)
}if(V){S.attr("data-last-value",V)
}if(R){U.attr("data-last-value",R)
}}G("#reset-logo").click(function(){G.ajax({dataType:"json",contentType:"application/json",url:E+"/rest/ia/1.0/space/defaultLogo.json",error:function(R){J("An error has occurred while uploading the logo")
},success:function(S,T,U,R){O("default",E+S.logoDownloadPath);
B=true;
G("#image-holder").empty();
if(G.browser.msie){G("#upload-logo-input").replaceWith(G("#upload-logo-input").clone(true))
}else{G("#upload-logo-input").val("")
}}})
});
G("#inline-dialog-space-logo-config .cancel").click(function(){var R=G("#logoType").attr("data-last-value");
var S=G("img.avatar-img").attr("data-last-value");
O(R,S,R,S);
B=false;
A=true;
C.hide()
});
G("#inline-dialog-space-logo-config .save").click(function(){var R=G("#crop-photo-form"),S=G(this);
S.text("Saving...");
G.ajax({type:"POST",dataType:"json",contentType:"application/json",data:AJS.$.toJSON({spaceKey:G("#spaceKey",R).val(),spaceName:G("#spaceName",R).val(),offsetX:G("#avatar-offsetX",R).val(),offsetY:G("#avatar-offsetY",R).val(),width:G("#avatar-width",R).val(),logoType:G("#logoType",R).val()+(B?"":"-current")}),url:E+"/rest/ia/1.0/space/setLogo.json",resetForm:false,error:function(T){J("An error has occurred while uploading the logo")
},success:function(U,V,W,T){O(U.logoType,E+U.logoDownloadPath,U.logoType,E+U.logoDownloadPath);
B=false;
D=U.name;
$spaceTitle=G(".acs-side-bar-space-info div.name a");
$spaceTitle.attr("title",D);
$spaceTitle.text(D);
A=true;
C.hide()
},complete:function(){S.text("Save")
}})
});
G("#upload-logo-form").ajaxForm();
G("#crop-photo-form").ajaxForm();
G("#upload-logo-input").change(function(R){G(this).val()&&G("#upload-logo-form").ajaxSubmit({dataType:"text",data:{contentId:"upload-logo-input"},url:E+"/rest/ia/1.0/space/uploadLogo",resetForm:false,beforeSubmit:function(){var S=G("#image-holder");
S.html('<div class="loading-area"><span class="throbber"></span> <span class="upload-text"></span> </div>');
var U=S.find(".throbber");
var T=Raphael.spinner(U[0],7,"#666");
U.bind("remove",T);
G(".upload-text",S).text("Uploading...")
},error:function(S){G("#image-holder").empty();
J("An error has occurred while uploading the logo")
},success:function(T,U,V,S){T=G.parseJSON(T);
if(T&&T.downloadPath){M(E+T.downloadPath);
O("custom");
B=true
}else{G("#image-holder").empty();
if(T&&T.errorMessage){J(T.errorMessage)
}else{J("An error has occurred while uploading the logo")
}}}})
});
function M(S){var U=G("#image-holder");
var T=G("<img>",{id:"uploaded-space-logo",src:S}).hide();
var X=48;
var W=G("#avatar-offsetX"),V=G("#avatar-offsetY"),R=G("#avatar-width");
W.val("-1");
V.val("-1");
R.val("-1");
T.load(function(){if(T.height()<X||T.width()<X){N(T)
}else{I(T,X,W,V,R);
T.trigger("load.jcloader")
}});
U.empty().append(T)
}function N(R){R.show().wrap('<div class="small-logo-container"><div class="small-logo-wrapper"></div></div>')
}function I(S,W,V,U,R){function T(X){V.val(Math.floor(X.x));
U.val(Math.floor(X.y));
R.val(Math.floor(X.w))
}S.Jcrop({setSelect:[10,10,100,100],minSize:[W,W],boxWidth:450,boxHeight:400,aspectRatio:1,bgOpacity:0.5,onSelect:T,onChange:T,drawBorders:false,createHandles:["n","e","s","w"],allowSelect:false})
}function J(R){AJS.messages.error("#sidebar-logo-messages",{title:R});
G("#sidebar-logo-messages .icon-close").on("click",function(S){S.stopPropagation()
})
}}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
(function(A){A.Jcrop=function(E,c){var j=A.extend({},A.Jcrop.defaults),AH,AU,AJ=false;
function N(AV){return AV+"px"
}function e(AV){return j.baseClass+"-"+AV
}function f(){return A.fx.step.hasOwnProperty("backgroundColor")
}function g(AV){var AW=A(AV).offset();
return[AW.left,AW.top]
}function h(AV){return[(AV.pageX-AH[0]),(AV.pageY-AH[1])]
}function b(AV){if(typeof (AV)!=="object"){AV={}
}j=A.extend(j,AV);
A.each(["onChange","onSelect","onRelease","onDblClick"],function(AW,AX){if(typeof (j[AX])!=="function"){j[AX]=function(){}
}})
}function G(AX,AZ){AH=g(AS);
q.setCursor(AX==="move"?AX:AX+"-resize");
if(AX==="move"){return q.activateHandlers(s(AZ),R)
}var AV=AD.getFixed();
var AW=T(AX);
var AY=AD.getCorner(T(AW));
AD.setPressed(AD.getCorner(AW));
AD.setCurrent(AY);
q.activateHandlers(i(AX,AV),R)
}function i(AW,AV){return function(AX){if(!j.aspectRatio){switch(AW){case"e":AX[1]=AV.y2;
break;
case"w":AX[1]=AV.y2;
break;
case"n":AX[0]=AV.x2;
break;
case"s":AX[0]=AV.x2;
break
}}else{switch(AW){case"e":AX[1]=AV.y+1;
break;
case"w":AX[1]=AV.y+1;
break;
case"n":AX[0]=AV.x+1;
break;
case"s":AX[0]=AV.x+1;
break
}}AD.setCurrent(AX);
z.update()
}
}function s(AW){var AV=AW;
AR.watchKeys();
return function(AX){AD.moveOffset([AX[0]-AV[0],AX[1]-AV[1]]);
AV=AX;
z.update()
}
}function T(AV){switch(AV){case"n":return"sw";
case"s":return"nw";
case"e":return"nw";
case"w":return"ne";
case"ne":return"sw";
case"nw":return"se";
case"se":return"nw";
case"sw":return"ne"
}}function C(AV){return function(AW){if(j.disabled){return false
}if((AV==="move")&&!j.allowMove){return false
}AH=g(AS);
S=true;
G(AV,h(AW));
AW.stopPropagation();
AW.preventDefault();
return false
}
}function v(AZ,AW,AY){var AV=AZ.width(),AX=AZ.height();
if((AV>AW)&&AW>0){AV=AW;
AX=(AW/AZ.width())*AZ.height()
}if((AX>AY)&&AY>0){AX=AY;
AV=(AY/AZ.height())*AZ.width()
}n=AZ.width()/AV;
F=AZ.height()/AX;
AZ.width(AV).height(AX)
}function AB(AV){return{x:AV.x*n,y:AV.y*F,x2:AV.x2*n,y2:AV.y2*F,w:AV.w*n,h:AV.h*F}
}function R(AW){var AV=AD.getFixed();
if((AV.w>j.minSelect[0])&&(AV.h>j.minSelect[1])){z.enableHandles();
z.done()
}else{z.release()
}q.setCursor(j.allowSelect?"crosshair":"default")
}function AG(AV){if(j.disabled){return false
}if(!j.allowSelect){return false
}S=true;
AH=g(AS);
z.disableHandles();
q.setCursor("crosshair");
var AW=h(AV);
AD.setPressed(AW);
z.update();
q.activateHandlers(AQ,R);
AR.watchKeys();
AV.stopPropagation();
AV.preventDefault();
return false
}function AQ(AV){AD.setCurrent(AV);
z.update()
}function AI(){var AW=A("<div></div>").addClass(e("tracker"));
if(A.browser.msie){var AV=A("<div></div>");
AV.css({opacity:0,backgroundColor:"white",height:"100%",width:"100%"});
AW.append(AV)
}return AW
}if(A.browser.msie&&(A.browser.version.split(".")[0]==="6")){AJ=true
}if(typeof (E)!=="object"){E=A(E)[0]
}if(typeof (c)!=="object"){c={}
}b(c);
var J={border:"none",visibility:"visible",margin:0,padding:0,position:"absolute",top:0,left:0};
var AA=A(E),AL=true;
if(E.tagName=="IMG"){if(AA[0].width!=0&&AA[0].height!=0){AA.width(AA[0].width);
AA.height(AA[0].height)
}else{var W=new Image();
W.src=AA[0].src;
AA.width(W.width);
AA.height(W.height)
}var AS=AA.clone().removeAttr("id").css(J).show();
AS.width(AA.width());
AS.height(AA.height());
AA.after(AS).hide()
}else{AS=AA.css(J).show();
AL=false;
if(j.shade===null){j.shade=true
}}v(AS,j.boxWidth,j.boxHeight);
var r=AS.width(),p=AS.height(),AC=A("<div />").width(r).height(p).addClass(e("holder")).css({position:"relative",backgroundColor:j.bgColor}).insertAfter(AA).append(AS);
if(j.addClass){AC.addClass(j.addClass)
}var k=A("<div />"),M=A("<div />").width("100%").height("100%").css({zIndex:310,position:"absolute",overflow:"hidden"}),m=A("<div />").width("100%").height("100%").css("zIndex",320),a=A("<div />").css({position:"absolute",zIndex:600}).dblclick(function(){var AV=AD.getFixed();
j.onDblClick.call(I,AV)
}).insertBefore(AS).append(M,m);
if(AL){k=A("<img />").attr("src",AS.attr("src")).css(J).width(r).height(p),M.append(k)
}if(AJ){a.css({overflowY:"hidden"})
}var V=j.boundary;
var B=AI().width(r+(V*2)).height(p+(V*2)).css({position:"absolute",top:N(-V),left:N(-V),zIndex:290}).mousedown(AG);
var AP=j.bgColor,AE=j.bgOpacity,Z,AN,Q,u,n,F,P=true,S,d,AF;
AH=g(AS);
var t=(function(){function AV(){var Ac={},Aa=["touchstart","touchmove","touchend"],Ab=document.createElement("div"),AZ;
try{for(AZ=0;
AZ<Aa.length;
AZ++){var AX=Aa[AZ];
AX="on"+AX;
var AY=(AX in Ab);
if(!AY){Ab.setAttribute(AX,"return;");
AY=typeof Ab[AX]=="function"
}Ac[Aa[AZ]]=AY
}return Ac.touchstart&&Ac.touchend&&Ac.touchmove
}catch(Ad){return false
}}function AW(){if((j.touchSupport===true)||(j.touchSupport===false)){return j.touchSupport
}else{return AV()
}}return{createDragger:function(AX){return function(AY){AY.pageX=AY.originalEvent.changedTouches[0].pageX;
AY.pageY=AY.originalEvent.changedTouches[0].pageY;
if(j.disabled){return false
}if((AX==="move")&&!j.allowMove){return false
}S=true;
G(AX,h(AY));
AY.stopPropagation();
AY.preventDefault();
return false
}
},newSelection:function(AX){AX.pageX=AX.originalEvent.changedTouches[0].pageX;
AX.pageY=AX.originalEvent.changedTouches[0].pageY;
return AG(AX)
},isSupported:AV,support:AW()}
}());
var AD=(function(){var AX=0,Ai=0,AW=0,Ah=0,Aa,AY;
function Ac(Al){Al=AZ(Al);
AW=AX=Al[0];
Ah=Ai=Al[1]
}function Ab(Al){Al=AZ(Al);
Aa=Al[0]-AW;
AY=Al[1]-Ah;
AW=Al[0];
Ah=Al[1]
}function Ak(){return[Aa,AY]
}function AV(An){var Am=An[0],Al=An[1];
if(0>AX+Am){Am-=Am+AX
}if(0>Ai+Al){Al-=Al+Ai
}if(p<Ah+Al){Al+=p-(Ah+Al)
}if(r<AW+Am){Am+=r-(AW+Am)
}AX+=Am;
AW+=Am;
Ai+=Al;
Ah+=Al
}function Ad(Al){var Am=Aj();
switch(Al){case"ne":return[Am.x2,Am.y];
case"nw":return[Am.x,Am.y];
case"se":return[Am.x2,Am.y2];
case"sw":return[Am.x,Am.y2]
}}function Aj(){if(!j.aspectRatio){return Ag()
}var An=j.aspectRatio,Au=j.minSize[0]/n,Am=j.maxSize[0]/n,Ax=j.maxSize[1]/F,Ao=AW-AX,Aw=Ah-Ai,Ap=Math.abs(Ao),Aq=Math.abs(Aw),As=Ap/Aq,Al,At,Av,Ar;
if(Am===0){Am=r*10
}if(Ax===0){Ax=p*10
}if(As<An){At=Ah;
Av=Aq*An;
Al=Ao<0?AX-Av:Av+AX;
if(Al<0){Al=0;
Ar=Math.abs((Al-AX)/An);
At=Aw<0?Ai-Ar:Ar+Ai
}else{if(Al>r){Al=r;
Ar=Math.abs((Al-AX)/An);
At=Aw<0?Ai-Ar:Ar+Ai
}}}else{Al=AW;
Ar=Ap/An;
At=Aw<0?Ai-Ar:Ai+Ar;
if(At<0){At=0;
Av=Math.abs((At-Ai)*An);
Al=Ao<0?AX-Av:Av+AX
}else{if(At>p){At=p;
Av=Math.abs(At-Ai)*An;
Al=Ao<0?AX-Av:Av+AX
}}}if(Al>AX){if(Al-AX<Au){Al=AX+Au
}else{if(Al-AX>Am){Al=AX+Am
}}if(At>Ai){At=Ai+(Al-AX)/An
}else{At=Ai-(Al-AX)/An
}}else{if(Al<AX){if(AX-Al<Au){Al=AX-Au
}else{if(AX-Al>Am){Al=AX-Am
}}if(At>Ai){At=Ai+(AX-Al)/An
}else{At=Ai-(AX-Al)/An
}}}if(Al<0){AX-=Al;
Al=0
}else{if(Al>r){AX-=Al-r;
Al=r
}}if(At<0){Ai-=At;
At=0
}else{if(At>p){Ai-=At-p;
At=p
}}return Af(Ae(AX,Ai,Al,At))
}function AZ(Al){if(Al[0]<0){Al[0]=0
}if(Al[1]<0){Al[1]=0
}if(Al[0]>r){Al[0]=r
}if(Al[1]>p){Al[1]=p
}return[Al[0],Al[1]]
}function Ae(Ao,Aq,An,Ap){var As=Ao,Ar=An,Am=Aq,Al=Ap;
if(An<Ao){As=An;
Ar=Ao
}if(Ap<Aq){Am=Ap;
Al=Aq
}return[As,Am,Ar,Al]
}function Ag(){var Am=AW-AX,Al=Ah-Ai,An;
if(Z&&(Math.abs(Am)>Z)){AW=(Am>0)?(AX+Z):(AX-Z)
}if(AN&&(Math.abs(Al)>AN)){Ah=(Al>0)?(Ai+AN):(Ai-AN)
}if(u/F&&(Math.abs(Al)<u/F)){Ah=(Al>0)?(Ai+u/F):(Ai-u/F)
}if(Q/n&&(Math.abs(Am)<Q/n)){AW=(Am>0)?(AX+Q/n):(AX-Q/n)
}if(AX<0){AW-=AX;
AX-=AX
}if(Ai<0){Ah-=Ai;
Ai-=Ai
}if(AW<0){AX-=AW;
AW-=AW
}if(Ah<0){Ai-=Ah;
Ah-=Ah
}if(AW>r){An=AW-r;
AX-=An;
AW-=An
}if(Ah>p){An=Ah-p;
Ai-=An;
Ah-=An
}if(AX>r){An=AX-p;
Ah-=An;
Ai-=An
}if(Ai>p){An=Ai-p;
Ah-=An;
Ai-=An
}return Af(Ae(AX,Ai,AW,Ah))
}function Af(Al){return{x:Al[0],y:Al[1],x2:Al[2],y2:Al[3],w:Al[2]-Al[0],h:Al[3]-Al[1]}
}return{flipCoords:Ae,setPressed:Ac,setCurrent:Ab,getOffset:Ak,moveOffset:AV,getCorner:Ad,getFixed:Aj}
}());
var D=(function(){var Aa=false,Af=A("<div />").css({position:"absolute",zIndex:240,opacity:0}),AZ={top:Ab(),left:Ab().height(p),right:Ab().height(p),bottom:Ab()};
function Ah(Ai,Aj){AZ.left.css({height:N(Aj)});
AZ.right.css({height:N(Aj)})
}function AX(){return Ac(AD.getFixed())
}function Ac(Ai){AZ.top.css({left:N(Ai.x),width:N(Ai.w),height:N(Ai.y)});
AZ.bottom.css({top:N(Ai.y2),left:N(Ai.x),width:N(Ai.w),height:N(p-Ai.y2)});
AZ.right.css({left:N(Ai.x2),width:N(r-Ai.x2)});
AZ.left.css({width:N(Ai.x)})
}function Ab(){return A("<div />").css({position:"absolute",backgroundColor:j.shadeColor||j.bgColor}).appendTo(Af)
}function AY(){if(!Aa){Aa=true;
Af.insertBefore(AS);
AX();
z.setBgOpacity(1,0,1);
k.hide();
Ae(j.shadeColor||j.bgColor,1);
if(z.isAwake()){AW(j.bgOpacity,1)
}else{AW(1,1)
}}}function Ae(Ai,Aj){H(AV(),Ai,Aj)
}function Ag(){if(Aa){Af.remove();
k.show();
Aa=false;
if(z.isAwake()){z.setBgOpacity(j.bgOpacity,1,1)
}else{z.setBgOpacity(1,1,1);
z.disableHandles()
}H(AC,0,1)
}}function AW(Aj,Ai){if(Aa){if(j.bgFade&&!Ai){Af.animate({opacity:1-Aj},{queue:false,duration:j.fadeTime})
}else{Af.css({opacity:1-Aj})
}}}function Ad(){j.shade?AY():Ag();
if(z.isAwake()){AW(j.bgOpacity)
}}function AV(){return Af.children()
}return{update:AX,updateRaw:Ac,getShades:AV,setBgColor:Ae,enable:AY,disable:Ag,resize:Ah,refresh:Ad,opacity:AW}
}());
var z=(function(){var Ag,Ap=370,Ac={},As={},AX={},AZ=false;
function Ad(Aw){var Ax=A("<div />").css({position:"absolute",opacity:j.borderOpacity}).addClass(e(Aw));
M.append(Ax);
return Ax
}function AY(Aw,Ax){var Ay=A("<div />").mousedown(C(Aw)).css({cursor:Aw+"-resize",position:"absolute",zIndex:Ax}).addClass("ord-"+Aw);
if(t.support){Ay.bind("touchstart.jcrop",t.createDragger(Aw))
}m.append(Ay);
return Ay
}function Ah(Aw){var Ax=j.handleSize;
return AY(Aw,Ap++).css({opacity:j.handleOpacity}).width(Ax).height(Ax).addClass(e("handle"))
}function An(Aw){return AY(Aw,Ap++).addClass("jcrop-dragbar")
}function Ak(Aw){var Ax;
for(Ax=0;
Ax<Aw.length;
Ax++){AX[Aw[Ax]]=An(Aw[Ax])
}}function Ao(Aw){var Ax,Ay;
for(Ay=0;
Ay<Aw.length;
Ay++){switch(Aw[Ay]){case"n":Ax="hline";
break;
case"s":Ax="hline bottom";
break;
case"e":Ax="vline right";
break;
case"w":Ax="vline";
break
}Ac[Aw[Ay]]=Ad(Ax)
}}function Aj(Aw){var Ax;
for(Ax=0;
Ax<Aw.length;
Ax++){As[Aw[Ax]]=Ah(Aw[Ax])
}}function Af(Aw,Ax){if(!j.shade){k.css({top:N(-Ax),left:N(-Aw)})
}a.css({top:N(Ax),left:N(Aw)})
}function Av(Aw,Ax){a.width(Aw).height(Ax)
}function Aa(){var Aw=AD.getFixed();
AD.setPressed([Aw.x,Aw.y]);
AD.setCurrent([Aw.x2,Aw.y2]);
At()
}function At(Aw){if(Ag){return Ae(Aw)
}}function Ae(Aw){var Ax=AD.getFixed();
Av(Ax.w,Ax.h);
Af(Ax.x,Ax.y);
if(j.shade){D.updateRaw(Ax)
}Ag||Au();
if(Aw){j.onSelect.call(I,AB(Ax))
}else{j.onChange.call(I,AB(Ax))
}}function AW(Ax,Ay,Aw){if(!Ag&&!Ay){return 
}if(j.bgFade&&!Aw){AS.animate({opacity:Ax},{queue:false,duration:j.fadeTime})
}else{AS.css("opacity",Ax)
}}function Au(){a.show();
if(j.shade){D.opacity(AE)
}else{AW(AE,true)
}Ag=true
}function Aq(){Ar();
a.hide();
if(j.shade){D.opacity(1)
}else{AW(1)
}Ag=false;
j.onRelease.call(I)
}function AV(){if(AZ){m.show()
}}function Al(){AZ=true;
if(j.allowResize){m.show();
return true
}}function Ar(){AZ=false;
m.hide()
}function Am(Aw){if(d===Aw){Ar()
}else{Al()
}}function Ai(){Am(false);
Aa()
}if(j.dragEdges&&A.isArray(j.createDragbars)){Ak(j.createDragbars)
}if(A.isArray(j.createHandles)){Aj(j.createHandles)
}if(j.drawBorders&&A.isArray(j.createBorders)){Ao(j.createBorders)
}A(document).bind("touchstart.jcrop-ios",function(Aw){if(A(Aw.currentTarget).hasClass("jcrop-tracker")){Aw.stopPropagation()
}});
var Ab=AI().mousedown(C("move")).css({cursor:"move",position:"absolute",zIndex:360});
if(t.support){Ab.bind("touchstart.jcrop",t.createDragger("move"))
}M.append(Ab);
Ar();
return{updateVisible:At,update:Ae,release:Aq,refresh:Aa,isAwake:function(){return Ag
},setCursor:function(Aw){Ab.css("cursor",Aw)
},enableHandles:Al,enableOnly:function(){AZ=true
},showHandles:AV,disableHandles:Ar,animMode:Am,setBgOpacity:AW,done:Ai}
}());
var q=(function(){var AW=function(){},AY=function(){},AX=j.trackDocument;
function Af(){B.css({zIndex:450});
if(t.support){A(document).bind("touchmove.jcrop",Ae).bind("touchend.jcrop",Ab)
}if(AX){A(document).bind("mousemove.jcrop",AV).bind("mouseup.jcrop",AZ)
}}function Ad(){B.css({zIndex:290});
A(document).unbind(".jcrop")
}function AV(Ag){AW(h(Ag));
return false
}function AZ(Ag){Ag.preventDefault();
Ag.stopPropagation();
if(S){S=false;
AY(h(Ag));
if(z.isAwake()){j.onSelect.call(I,AB(AD.getFixed()))
}Ad();
AW=function(){};
AY=function(){}
}return false
}function Aa(Ah,Ag){S=true;
AW=Ah;
AY=Ag;
Af();
return false
}function Ae(Ag){Ag.pageX=Ag.originalEvent.changedTouches[0].pageX;
Ag.pageY=Ag.originalEvent.changedTouches[0].pageY;
return AV(Ag)
}function Ab(Ag){Ag.pageX=Ag.originalEvent.changedTouches[0].pageX;
Ag.pageY=Ag.originalEvent.changedTouches[0].pageY;
return AZ(Ag)
}function Ac(Ag){B.css("cursor",Ag)
}if(!AX){B.mousemove(AV).mouseup(AZ).mouseout(AZ)
}AS.before(B);
return{activateHandlers:Aa,setCursor:Ac}
}());
var AR=(function(){var AY=A('<input type="radio" />').css({position:"fixed",left:"-120px",width:"12px"}),Aa=A("<div />").css({position:"absolute",overflow:"hidden"}).append(AY);
function AW(){if(j.keySupport){AY.show();
AY.focus()
}}function AZ(Ab){AY.hide()
}function AX(Ac,Ab,Ad){if(j.allowMove){AD.moveOffset([Ab,Ad]);
z.updateVisible(true)
}Ac.preventDefault();
Ac.stopPropagation()
}function AV(Ac){if(Ac.ctrlKey||Ac.metaKey){return true
}AF=Ac.shiftKey?true:false;
var Ab=AF?10:1;
switch(Ac.keyCode){case 37:AX(Ac,-Ab,0);
break;
case 39:AX(Ac,Ab,0);
break;
case 38:AX(Ac,0,-Ab);
break;
case 40:AX(Ac,0,Ab);
break;
case 27:if(j.allowSelect){z.release()
}break;
case 9:return true
}return false
}if(j.keySupport){AY.keydown(AV).blur(AZ);
if(AJ||!j.fixedSupport){AY.css({position:"absolute",left:"-20px"});
Aa.append(AY).insertBefore(AS)
}else{AY.insertBefore(AS)
}}return{watchKeys:AW}
}());
function L(AV){AC.removeClass().addClass(e("holder")).addClass(AV)
}function U(Ao,Ac){var Ai=Ao[0]/n,AX=Ao[1]/F,Ah=Ao[2]/n,AW=Ao[3]/F;
if(d){return 
}var Ag=AD.flipCoords(Ai,AX,Ah,AW),Am=AD.getFixed(),Aj=[Am.x,Am.y,Am.x2,Am.y2],AZ=Aj,AY=j.animationDelay,Al=Ag[0]-Aj[0],Ab=Ag[1]-Aj[1],Ak=Ag[2]-Aj[2],Aa=Ag[3]-Aj[3],Af=0,Ad=j.swingSpeed;
x=AZ[0];
y=AZ[1];
Ah=AZ[2];
AW=AZ[3];
z.animMode(true);
var AV;
function Ae(){window.setTimeout(An,AY)
}var An=(function(){return function(){Af+=(100-Af)/Ad;
AZ[0]=x+((Af/100)*Al);
AZ[1]=y+((Af/100)*Ab);
AZ[2]=Ah+((Af/100)*Ak);
AZ[3]=AW+((Af/100)*Aa);
if(Af>=99.8){Af=100
}if(Af<100){AO(AZ);
Ae()
}else{z.done();
if(typeof (Ac)==="function"){Ac.call(I)
}}}
}());
Ae()
}function l(AV){AO([AV[0]/n,AV[1]/F,AV[2]/n,AV[3]/F]);
j.onSelect.call(I,AB(AD.getFixed()));
z.enableHandles()
}function AO(AV){AD.setPressed([AV[0],AV[1]]);
AD.setCurrent([AV[2],AV[3]]);
z.update()
}function K(){return AB(AD.getFixed())
}function AM(){return AD.getFixed()
}function X(AV){b(AV);
o()
}function Y(){j.disabled=true;
z.disableHandles();
z.setCursor("default");
q.setCursor("default")
}function w(){j.disabled=false;
o()
}function O(){z.done();
q.activateHandlers(null,null)
}function AK(){AC.remove();
AA.show();
A(E).removeData("Jcrop")
}function AT(AW,AX){z.release();
Y();
var AV=new Image();
AV.onload=function(){var AY=AV.width;
var Aa=AV.height;
var Ab=j.boxWidth;
var AZ=j.boxHeight;
AS.width(AY).height(Aa);
AS.attr("src",AW);
k.attr("src",AW);
v(AS,Ab,AZ);
r=AS.width();
p=AS.height();
k.width(r).height(p);
B.width(r+(V*2)).height(p+(V*2));
AC.width(r).height(p);
D.resize(r,p);
w();
if(typeof (AX)==="function"){AX.call(I)
}};
AV.src=AW
}function H(AY,AV,AW){var AX=AV||j.bgColor;
if(j.bgFade&&f()&&j.fadeTime&&!AW){AY.animate({backgroundColor:AX},{queue:false,duration:j.fadeTime})
}else{AY.css("backgroundColor",AX)
}}function o(AV){if(j.allowResize){if(AV){z.enableOnly()
}else{z.enableHandles()
}}else{z.disableHandles()
}q.setCursor(j.allowSelect?"crosshair":"default");
z.setCursor(j.allowMove?"move":"default");
if(j.hasOwnProperty("trueSize")){n=j.trueSize[0]/r;
F=j.trueSize[1]/p
}if(j.hasOwnProperty("setSelect")){l(j.setSelect);
z.done();
delete (j.setSelect)
}D.refresh();
if(j.bgColor!=AP){H(j.shade?D.getShades():AC,j.shade?(j.shadeColor||j.bgColor):j.bgColor);
AP=j.bgColor
}if(AE!=j.bgOpacity){AE=j.bgOpacity;
if(j.shade){D.refresh()
}else{z.setBgOpacity(AE)
}}Z=j.maxSize[0]||0;
AN=j.maxSize[1]||0;
Q=j.minSize[0]||0;
u=j.minSize[1]||0;
if(j.hasOwnProperty("outerImage")){AS.attr("src",j.outerImage);
delete (j.outerImage)
}z.refresh()
}if(t.support){B.bind("touchstart.jcrop",t.newSelection)
}m.hide();
o(true);
var I={setImage:AT,animateTo:U,setSelect:l,setOptions:X,tellSelect:K,tellScaled:AM,setClass:L,disable:Y,enable:w,cancel:O,release:z.release,destroy:AK,focus:AR.watchKeys,getBounds:function(){return[r*n,p*F]
},getWidgetSize:function(){return[r,p]
},getScaleFactor:function(){return[n,F]
},getOptions:function(){return j
},ui:{holder:AC,selection:a}};
if(A.browser.msie){AC.bind("selectstart",function(){return false
})
}AA.data("Jcrop",I);
return I
};
A.fn.Jcrop=function(B,D){var C;
this.each(function(){if(A(this).data("Jcrop")){if(B==="api"){return A(this).data("Jcrop")
}else{A(this).data("Jcrop").setOptions(B)
}}else{if(this.tagName=="IMG"){A.Jcrop.Loader(this,function(){A(this).css({display:"block",visibility:"hidden"});
C=A.Jcrop(this,B);
if(A.isFunction(D)){D.call(C)
}})
}else{A(this).css({display:"block",visibility:"hidden"});
C=A.Jcrop(this,B);
if(A.isFunction(D)){D.call(C)
}}}});
return this
};
A.Jcrop.Loader=function(F,G,C){var D=A(F),B=D[0];
function E(){if(B.complete){D.unbind(".jcloader");
if(A.isFunction(G)){G.call(B)
}}else{window.setTimeout(E,50)
}}D.bind("load.jcloader",E).bind("error.jcloader",function(H){D.unbind(".jcloader");
if(A.isFunction(C)){C.call(B)
}});
if(B.complete&&A.isFunction(G)){D.unbind(".jcloader");
G.call(B)
}};
A.Jcrop.defaults={allowSelect:true,allowMove:true,allowResize:true,trackDocument:true,baseClass:"jcrop",addClass:null,bgColor:"black",bgOpacity:0.6,bgFade:false,borderOpacity:0.4,handleOpacity:0.5,handleSize:7,aspectRatio:0,keySupport:true,createHandles:["n","s","e","w","nw","ne","se","sw"],createDragbars:["n","s","e","w"],createBorders:["n","s","e","w"],drawBorders:true,dragEdges:true,fixedSupport:true,touchSupport:null,shade:null,boxWidth:0,boxHeight:0,boundary:2,fadeTime:400,animationDelay:20,swingSpeed:3,minSelect:[0,0],maxSize:[0,0],minSize:[0,0],onChange:function(){},onSelect:function(){},onDblClick:function(){},onRelease:function(){}}
}(jQuery));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
// This file was automatically generated from how-to.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Blueprints == 'undefined') { Confluence.Blueprints = {}; }
if (typeof Confluence.Blueprints.Requirements == 'undefined') { Confluence.Blueprints.Requirements = {}; }


Confluence.Blueprints.Requirements.howTo = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<h1>', soy.$$escapeHtml("With Product Requirements you can\u2026"), '</h1><ol class="howto-steps"><li class="howto-step"><div><h3>', soy.$$escapeHtml("Define document properties"), '</h3><p>', soy.$$escapeHtml("Document properties, like \x27Status\x27 and \x27Stakeholders\x27, make it easy to organize and sort your product requirements."), '</p></div></li><li class="howto-step"><div><h3>', soy.$$escapeHtml("Write your product requirements"), '</h3><p>', soy.$$escapeHtml("A structured, yet flexible template keeps your product requirements consistently formatted."), '</p></div></li><li class="howto-step"><div><h3>', soy.$$escapeHtml("Track all your product requirements"), '</h3><p>', soy.$$escapeHtml("Find all your product requirements on a single page which you can sort by defined properties like release and status."), '</p></div></li></ol>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
// This file was automatically generated from recently.soy.
// Please don't edit this file by hand.

if (typeof RY == 'undefined') { var RY = {}; }
if (typeof RY.Templates == 'undefined') { RY.Templates = {}; }


RY.Templates.body = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="recently-viewed" class="aui-group"><div class="aui-item"><div class="top"><div class="filter-placeholder"></div></div><div class="pages"></div></div></div>');
  return opt_sb ? '' : output.toString();
};


RY.Templates.pageCollection = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="groups"></div><div class="empty"></div>');
  return opt_sb ? '' : output.toString();
};


RY.Templates.pageGroup = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<h3>', soy.$$escapeHtml(opt_data.title), '</h3><ul/>');
  return opt_sb ? '' : output.toString();
};


RY.Templates.pageItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="page-icon"><a href=', soy.$$escapeHtmlAttributeNospace(soy.$$filterNormalizeUri(opt_data.href)), ' class="icon icon-', soy.$$escapeHtmlAttribute(opt_data.type), '"></a></div><div class="page-title"><a class="ellipsis" href=', soy.$$escapeHtmlAttributeNospace(soy.$$filterNormalizeUri(opt_data.href)), '>', soy.$$escapeHtml(opt_data.title), ' - ', soy.$$escapeHtml(opt_data.space), '</a></div>');
  return opt_sb ? '' : output.toString();
};


RY.Templates.filterView = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<form class="aui"><input class="filter-input text" type="text" placeholder="', "Filter", '"></form>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
var RY=RY||{};(function(){var b=new Date();var c=new Date(b).getTime();var a=new Date(b.getFullYear(),b.getMonth(),b.getDate()).getTime();var d=new Date(b.getFullYear(),b.getMonth(),b.getDate()-1).getTime();RY.util={analytics:{trackDialogOpen:function(){AJS.trigger("analytics",{name:"recently-viewed-dialog-open"})},trackPageOpen:function(){AJS.trigger("analytics",{name:"recently-viewed-page-open"})}},quote:function(e){return(e).replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")},diffInDays:function(g,f){var e=1000*60*60*24;return Math.floor((g-f)/e)},daysSince:function(e){if(e>=a){return 0}else{if(e>=d){return 1}else{return RY.util.diffInDays(c,e)}}},formatDate:function(e){if(e>=a){e="Today"}else{if(e>=d){e="Yesterday"}else{var f=RY.util.diffInDays(c,e);e=AJS.format("{0} days ago",f)}}return e},wait:function(h,j,f){var i,k,e;var g=function(){k=setTimeout(function(){h.apply(f,e)},j)};return function(){e=arguments;var l=new Date();if(i&&l-i<j){clearTimeout(k)}g();i=l}}}}());
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
var RY=RY||{};RY.RecentPageStorage=function(h){var f="com.atlassian.confluence.plugins.recently.viewed.pages.v1";var d=100;var c={};var b=function(){var i=function(k,l){if(k==="lastSeen"&&_.isString(l)){if(AJS.$.browser.msie){l=l.replace(/\-/g,"/");l=l.replace(/T.*$/,"")}return new Date(l).getTime()}else{return l}};try{c=JSON.parse(h.getItem(f),i)||{}}catch(j){c={}}return c};var g=function(){var i=_.values(c);var k=i.length-d;if(k>0){var j=_.sortBy(i,function(l){return l.lastSeen});_.times(k,function(){var l=j.shift();delete c[l.id]})}};var e=function(){g();try{h.setItem(f,JSON.stringify(c))}catch(i){}};this.addCurrentPage=function(i){if(!(i.id&&i.title)){return}b();a(i);e()};var a=function(i){var j=c[i.id];if(!j){c[i.id]=j={}}j=_.extend(j,i);j.lastSeen=new Date().getTime();j.count=j.count+1||1};this.getPages=function(){return _.values(b())}};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
var RY=RY||{};RY.FilterView=Backbone.View.extend({template:RY.Templates.filterView,className:"filter",events:{"input .filter-input":"onInput","keyup .filter-input":"onInput","keydown .filter-input":"onKeydown"},initialize:function(){_.bindAll(this);this.navigationEvents=this.options.navigationEvents;this.onInput=RY.util.wait(this.onInput,100,this)},render:function(){this.$el.html(this.template());this.$input=this.$(".filter-input");return this},onInput:function(a){if(a&&_.contains([37,38,39,40],a.which)){return}this.search()},onKeydown:function(a){switch(a.which){case 13:this.navigationEvents.trigger("select");a.preventDefault();a.stopPropagation();break;case 38:this.navigationEvents.trigger("previous");a.preventDefault();break;case 40:this.navigationEvents.trigger("next");a.preventDefault();break}},search:function(){var a=this.$input.val();this.collection.search(a);this.navigationEvents.trigger("reset")}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
var RY=RY||{};RY.Page=Backbone.Model.extend({href:function(){return AJS.contextPath()+"/pages/viewpage.action?pageId="+this.get("id")},daysSinceLastSeen:function(){return RY.util.daysSince(this.get("lastSeen"))}},{typeForCurrentPage:function(){if(AJS.$("body").hasClass("view-blog-post")){return"blog"}else{return"page"}}});RY.PageCollection=Backbone.Collection.extend({model:RY.Page,search:function(b){var a;if(AJS.$.trim(b).length===0){a=this.models}else{var c=b.match(/[^\s-]+/g);a=this.filter(function(f){var g=f.get("title");var e=f.get("space");var d=(g+e).toLowerCase();return _.all(c,function(h){return d.indexOf(h.toLowerCase())!==-1})})}this.trigger("filter",a);return a},comparator:function(a){return -(a.get("lastSeen"))}});RY.PageView=Backbone.View.extend({tagName:"li",className:"ry-page",template:RY.Templates.pageItem,initialize:function(){_.bindAll(this);this.model.on("activate",this.activate,this);this.model.on("deactivate",this.deactivate,this)},hide:function(){this.$el.hide().removeClass("shown")},show:function(){this.$el.show().addClass("shown")},render:function(){var a=this.model.toJSON();a.href=this.model.href();this.$el.html(this.template(a));return this}});RY.PageGroupView=Backbone.View.extend({className:"group",template:RY.Templates.pageGroup,initialize:function(){_.bindAll(this);this.title=this.options.title;this.modelViews={}},hide:function(){this.$el.hide()},hideAll:function(){this.$el.removeClass("border").hide();_.invoke(_.values(this.modelViews),"hide")},show:function(){this.$el.show()},showBorder:function(){this.$el.addClass("border")},showPages:function(a){var c=this;var b=false;_.each(a,function(e){var d=c.modelViews[e.cid];if(d){b=true;d.show()}});if(b){this.show()}return b},add:function(b){var a=new RY.PageView({model:b});this.modelViews[b.cid]=a;this.$list.append(a.render().el)},render:function(){this.$el.html(this.template({title:this.title}));this.$list=this.$("ul");return this}});RY.PageNavigator=function(b,f,d){var h=null;var g=null;function c(j){var i=h.index(h.filter(".highlight"));h.eq(i).removeClass("highlight");j+=i;if(j<0){j=h.length-1}if(j>=h.length){j=0}g=h.eq(j);g.addClass("highlight")}function a(){h.filter(".highlight").removeClass("highlight")}function e(){if(!g.length){return}var l=f;var m=l.children();var k=l.height();var j=g.outerHeight(true);var i=g.position().top;if(i<0){if(h.index(g)===0){l.scrollTop(0);return}l.scrollTop(g.offset().top-m.offset().top)}else{if(i>k){l.scrollTop(g.offset().top-m.offset().top-k+j)}}}d.on("reset",function(){h=b.find("li.shown");a()},this);d.on("select",function(){if(g){RY.util.analytics.trackPageOpen();var i=g.find(".page-title a").attr("href");window.location=i}},this);d.on("previous",function(){c(-1);e()},this);d.on("next",function(){c(1);e()},this)};RY.PageCollectionView=Backbone.View.extend({template:RY.Templates.pageCollection,events:{"click .page-title a":RY.util.analytics.trackPageOpen},initialize:function(){_.bindAll(this);this.modelViews={};this.collection.on("reset",this.addAll,this);this.collection.on("filter",this.filter,this)},checkEmpty:function(a){var d=this.collection.isEmpty();var b=a.length===0;if(d||b){var c;if(d){c="Sorry mate, looks like you haven\'t visited any pages yet."}else{c="Your search did not match any pages"}this.showEmptyMessage(c)}else{this.clearEmptyMessage()}},filter:function(b){this.checkEmpty(b);var a=[this.$today,this.$yesterday,this.$older];_.invoke(a,"hideAll");var c=[];_.each(a,function(e){var d=e.showPages(b);if(d){c.push(e)}});if(c.length>1){c.pop();_.invoke(c,"showBorder")}},_groupForPage:function(a){var b=a.daysSinceLastSeen();if(b===0){return this.$today}else{if(b===1){return this.$yesterday}else{return this.$older}}},addOne:function(a){var b=this._groupForPage(a);b.add(a)},showEmptyMessage:function(a){this.$(".empty").html(AJS.$("<p>").text(a))},clearEmptyMessage:function(){this.$(".empty").html("")},addAll:function(){this.collection.each(this.addOne);this.filter(this.collection.models)},render:function(){this.$el.html(this.template());this.$today=new RY.PageGroupView({title:"Today"});this.$yesterday=new RY.PageGroupView({title:"Yesterday"});this.$older=new RY.PageGroupView({title:"Older"});var a=this.$(".groups");a.append(this.$today.render().el);a.append(this.$yesterday.render().el);a.append(this.$older.render().el);return this}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
var RY=RY||{};AJS.toInit(function(b){function a(){if(_.isUndefined(window.localStorage)){return}AJS.I18n.get("com.atlassian.confluence.plugins.recently-viewed-plugin");var c=new RY.RecentPageStorage(window.localStorage);c.addCurrentPage({id:AJS.Meta.get("page-id"),title:AJS.Meta.get("page-title"),space:AJS.Meta.get("space-name"),type:RY.Page.typeForCurrentPage()});b("#view-user-history-link").unbind("click");b("#view-user-history-link").click(function(j){j.preventDefault();var k=new AJS.Dialog({width:600,height:500,id:"recently-viewed-dialog",closeOnOutsideClick:true});var g=b(RY.Templates.body());k.addHeader("Recently Viewed Pages");k.addPanel("SinglePanel",g);k.addLink("Close",function(e){e.hide()});var f=b("<div>",{"class":"dialog-tip"}).text("Hint: type \"g\" and then \"r\" anywhere to quickly open this menu");k.popup.element.find(".dialog-button-panel").append(f);var h=_.extend({},Backbone.Events);var i=new RY.PageCollection();var m=new RY.PageCollectionView({collection:i});var d=new RY.FilterView({collection:i,navigationEvents:h});var l=new RY.PageNavigator(m.$el,g.parent(),h);g.find(".pages").html(m.render().el);g.find(".filter-placeholder").replaceWith(d.render().el);i.reset(c.getPages());k.gotoPanel(0);k.show();RY.util.analytics.trackDialogOpen()});RY.testData=function(){_.times(150,function(d){c.addCurrentPage({id:"page"+d,title:Math.random()+"",space:"myspace",type:Math.random()>0.5?"page":"blog"})})}}setTimeout(a,100)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {

// This has been added to directly to confluence to make it into confluence 5.0; it should be remove
// once contentReady is in AUI.

(function($) {

    var EVENT = 'content.ready'; // event name used in underlying event implementation

    // Check it's not already defined, eg when it's added to AUI plugin
    if (AJS.contentReady) {
        return;
    }

    /**
     * Binds an event handler to be called when content is ready.
     *
     * Usage:
     *
     * AJS.contentReady(fn)
     * called whenever content is ready
     *
     * AJS.contentReady(selector, fn)
     * called whenever content has been added that matches the given selector.
     * If the selector matches no elements, the handler will not be called.
     *
     * fn is always called with the first argument as a jQuery element.
     * Optional arguments can be passed by the triggering code.
     */
    AJS.contentReady = function() {
        var handler, boundSelector;
        if (1 === arguments.length) {
            handler = arguments[0];
        }
        else if (2 === arguments.length) {
            boundSelector = arguments[0];
            handler = arguments[1];
        }
        $(AJS).on(EVENT, function(e) {
            var args = Array.prototype.slice.call(arguments, 1),
                $element = args[0];
            if (boundSelector) {
                var $matched;
                if ($element.is(boundSelector)) {
                    $matched = $element;
                }
                else {
                    $matched = $element.find(boundSelector);
                }
                if ($matched.length) {
                    args[0] = $matched;
                    handler.apply(this, args);
                }
            }
            else {
                handler.apply(this, args);
            }
        });
    };

    /**
     * Triggers all bound contentReady event handlers.
     *
     * Usage:
     *
     * AJS.triggerContentReady($el, args...)
     * Calls all contentReady event handlers with the given element.
     * The $el argument is jQuery element and is required.
     * args... are optional arguments passed through to event handlers.
     */
    AJS.triggerContentReady = function() {
        $(AJS).trigger(EVENT, arguments);
    };

    /**
     * contentReady is always triggered on document ready. It is triggered with the body as the context.
     * Developers can set AJS.contentReady.onReadyArgs as a single value or array; these are passed
     * to handlers that are executed on ready.
     */
    $(function() {
        var args = [$("body")];
        if (AJS.contentReady.onReadyArgs) {
            args = args.concat(AJS.contentReady.onReadyArgs);
        }
        AJS.triggerContentReady.apply(this, args);
    });

}(AJS.$));

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
var _gaq=_gaq||[];AJS.$(function(){_gaq.push(["navlinks._setAccount","UA-20272869-14"]);_gaq.push(["navlinks._setDomainName","none"]);_gaq.push(["navlinks._setAllowLinker",true]);_gaq.push(["navlinks._trackPageview"]);AJS.$.ajax(AJS.contextPath()+"/rest/nav-links-analytics-data/1.0/",{success:function(a){_gaq.push(["navlinks._setCustomVar",1,"isUserAdmin",a.isUserAdmin?"true":"false",2])}})});(function(a){function b(e,g,d,c,f){AJS.log("Firing analytics event"+(c?" - synchronous":""));AJS.log("  Category: "+e);AJS.log("  Action:   "+g);AJS.log("  Label:    "+d);if(f!==undefined){AJS.log("  Value:    "+f)}}a.trackEvent=function(d,f,c,e){if(e===undefined){b(d,f,c,false);_gaq.push(["navlinks._trackEvent",d,f,c])}else{b(d,f,c,false,e);_gaq.push(["navlinks._trackEvent",d,f,c,e])}if(AJS.EventQueue){AJS.EventQueue.push({name:d+"."+f,properties:{label:c,value:e}})}};a.getCurrentApplication=function(){if(window.Confluence!==undefined){return"confluence"}else{if(window.BAMBOO!==undefined){return"bamboo"}else{if(window.JIRA!==undefined){return"jira"}else{return""}}}}}(window.NL=(window.NL||{})));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
(function(c,b){function a(g,d,f){try{b.trackEvent("helpmenu",g,d,f)}catch(h){AJS.log("failed to track analytics event, category: helpmenu, action: "+g+", label: "+d+", value: "+f)}}c(function(){var d=c("#system-help-menu-content,#help-menu-link-content,#bamboo\\.global\\.header-help\\.menu");d.bind({"aui-dropdown2-show":function(f){a("show","")},"aui-dropdown2-hide":function(f){a("hide","")}}).find("a").unbind(".analytics").bind("click.analytics",function(){var e=this.attributes.href;a("linkFollowed",typeof e==="object"?e.value:e)}).addClass("interactive")})}(jQuery,window.NL=(window.NL||{})));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
// This file was automatically generated from appswitcher.soy.
// Please don't edit this file by hand.

if (typeof navlinks == 'undefined') { var navlinks = {}; }
if (typeof navlinks.templates == 'undefined') { navlinks.templates = {}; }
if (typeof navlinks.templates.appswitcher == 'undefined') { navlinks.templates.appswitcher = {}; }


navlinks.templates.appswitcher.linkSection = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.list.length > 0) {
    output.append('<div class="aui-nav-heading sidebar-section-header">', soy.$$escapeHtml(opt_data.title), '</div><ul class="aui-nav nav-links">');
    var linkList8 = opt_data.list;
    var linkListLen8 = linkList8.length;
    for (var linkIndex8 = 0; linkIndex8 < linkListLen8; linkIndex8++) {
      var linkData8 = linkList8[linkIndex8];
      navlinks.templates.appswitcher.applicationsItem(linkData8, output);
    }
    output.append('</ul>');
  }
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher.applicationsItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li class="nav-link"><a href="', soy.$$escapeHtml(opt_data.link), '" class="interactive', (opt_data.self) ? ' checked' : '', '" title="', soy.$$escapeHtml(opt_data.link), '"><span class="nav-link-label">', soy.$$escapeHtml(opt_data.label), '</span></a></li>');
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher.shortcutsItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li class="nav-link"><a href="', soy.$$escapeHtml(opt_data.link), '" class="interactive', (opt_data.self) ? ' checked' : '', '" title="', soy.$$escapeHtml(opt_data.link), '"><span class="nav-link-label">', soy.$$escapeHtml(opt_data.label), '</span>', (opt_data.showDescription && opt_data.description) ? '<span class="nav-link-description">' + soy.$$escapeHtml(opt_data.description) + '</span>' : '', '</a></li>');
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher.error = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="app-switcher-error">', "Something went wrong, please \x3cspan class\x3d\x22app-switcher-retry\x22\x3etry again\x3c/span\x3e.", '</div>');
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher.sidebarContents = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="aui-page-panel-nav"><nav class="aui-navgroup aui-navgroup-vertical"><div class="app-switcher-section app-switcher-applications"><div class="aui-nav-heading">', soy.$$escapeHtml("Application Links"), '</div><div class="app-switcher-loading">', "Loading\x26hellip;", '</div></div><div class="app-switcher-section app-switcher-shortcuts"><div class="aui-nav-heading">', soy.$$escapeHtml("Shortcuts"), '</div><div class="app-switcher-loading">', "Loading\x26hellip;", '</div></div></nav></div>');
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher.trigger = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span class="aui-icon aui-icon-small aui-iconfont-appswitcher">', soy.$$escapeHtml("Linked Applications"), '</span>');
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher.projectHeaderSection = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="app-switcher-title">');
  aui.avatar.avatar({size: 'large', avatarImageUrl: opt_data.avatarUrl, isProject: true, title: opt_data.name}, output);
  output.append('<div class="sidebar-project-name">', soy.$$escapeHtml(opt_data.name), '</div></div>');
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher.cogDropdown = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var dropdownList__soy74 = new soy.StringBuilder();
  navlinks.templates.appswitcher.dropdownList({list: opt_data.links}, dropdownList__soy74);
  dropdownList__soy74 = dropdownList__soy74.toString();
  aui.dropdown2.dropdown2({menu: {'id': opt_data.id, 'content': dropdownList__soy74, 'extraClasses': 'aui-style-default sidebar-customize-section'}, trigger: {'showIcon': false, 'content': '<span class="aui-icon aui-icon-small aui-iconfont-configure"></span>', 'container': '#app-switcher'}}, output);
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher.dropdownList = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ul class="sidebar-admin-links">');
  var linkList82 = opt_data.list;
  var linkListLen82 = linkList82.length;
  for (var linkIndex82 = 0; linkIndex82 < linkListLen82; linkIndex82++) {
    var linkData82 = linkList82[linkIndex82];
    output.append('<li class="nav-link"><a href="', soy.$$escapeHtml(linkData82.href), '" title="', soy.$$escapeHtml(linkData82.title), '"><span class="nav-link-label">', soy.$$escapeHtml(linkData82.label), '</span></a></li>');
  }
  output.append('</ul>');
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher.switcher = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (true) {
    if (AJS.DarkFeatures.isEnabled('rotp.sidebar')) {
      var sidebarContents__soy97 = new soy.StringBuilder();
      navlinks.templates.appswitcher.sidebarContents(null, sidebarContents__soy97);
      sidebarContents__soy97 = sidebarContents__soy97.toString();
      var triggerContent__soy99 = new soy.StringBuilder();
      navlinks.templates.appswitcher.trigger(null, triggerContent__soy99);
      triggerContent__soy99 = triggerContent__soy99.toString();
      navlinks.templates.appswitcher.sidebar({sidebar: {'id': 'app-switcher', 'content': sidebarContents__soy97}, trigger: {'showIcon': false, 'content': triggerContent__soy99}}, output);
      output.append('<script>\n                (function (NL) {\n                    var initialise = function () {\n                        new NL.SideBar({\n                            sidebarContents: \'#app-switcher\'\n                        });\n                    };\n                    if (NL.SideBar) {\n                        initialise();\n                    } else {\n                        NL.onInit = initialise;\n                    }\n                }(window.NL = (window.NL || {})));\n                window.NL.isUserAdmin = ', soy.$$escapeHtml(false), '<\/script>');
    } else {
      navlinks.templates.appswitcher_old.switcher(null, output);
    }
  }
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher.sidebar = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a class="sidebar-trigger app-switcher-trigger" aria-owns="', soy.$$escapeHtml(opt_data.sidebar.id), '" aria-haspopup="true">', opt_data.trigger.content, '</a><div id=', soy.$$escapeHtml(opt_data.sidebar.id), ' class="app-switcher-sidebar aui-style-default sidebar-offscreen">', opt_data.sidebar.content, '</div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
(function(c,a){a.SideBar=function(d){var e=this;this.$sidebar=null;d=c.extend({sidebarContents:null},d);this.getLinks=function(){return c.ajax({url:AJS.contextPath()+"/rest/menu/latest/appswitcher",cache:false,dataType:"json"}).done(this.updateAppLinks).fail(this.showAppSwitcherError)};this.populateProjectHeader=function(g,f){e.getSidebar().find(".app-switcher-shortcuts .aui-nav-heading").after(navlinks.templates.appswitcher.projectHeaderSection({avatarUrl:f,name:g}))};this.getProjectData=function(){var f=c(".project-shortcut-dialog-trigger"),g=f.data("key"),h=f.data("entity-type");if(f.size()==0||!g||!h){c(".app-switcher-shortcuts").remove();return}var j,i;i=c.ajax({url:AJS.contextPath()+"/rest/project-shortcuts/1.0/local/"+g,cache:false,data:{entityType:h},dataType:"json"});j=c.ajax({url:AJS.contextPath()+"/rest/project-shortcuts/1.0/remote/"+g,cache:false,data:{entityType:h},dataType:"json"});c.when(i,j).then(function(l,k){e.updateProjectShortcuts(l,k,{key:g,entityType:h,name:f.data("name"),avatarUrl:f.find("img").prop("src")})},e.showProjectShortcutsError)};this.getSidebar=function(){if(!this.$sidebar){this.$sidebar=c(d.sidebarContents)}return this.$sidebar};this.addApplicationsCog=function(){c(".app-switcher-applications .aui-nav-heading").before(navlinks.templates.appswitcher.cogDropdown({id:"sidebar-applications-admin-dropdown",links:[{href:AJS.contextPath()+"/plugins/servlet/customize-application-navigator",label:"Customize navigator",title:"Add new entries, hide existing or restrict who sees what"},{href:AJS.contextPath()+"/plugins/servlet/applinks/listApplicationLinks",label:"Manage application links",title:"Link to more Atlassian applications"}]}))};this.addProjectShortcutsCog=function(f,h){var g=[{href:AJS.contextPath()+"/plugins/servlet/custom-content-links-admin?entityKey="+f,label:"Customize shortcuts",title:""}];if(e.entityMappings[h]){g.push({href:e.generateEntityLinksUrl(f,e.entityMappings[h]),label:"Manage product links",title:""})}e.getSidebar().find(".app-switcher-shortcuts .aui-nav-heading").before(navlinks.templates.appswitcher.cogDropdown({id:"sidebar-project-shortcuts-admin-dropdown",links:g}))};this.updateAppLinks=function(f){c(function(){e.getSidebar().find(".app-switcher-applications").html(navlinks.templates.appswitcher.linkSection({title:"Application Links",list:f}));if(a.isUserAdmin){e.addApplicationsCog()}e.bindAnalyticsHandlers(e.getSidebar(),f)})};this.updateProjectShortcuts=function(i,g,h){var j=i[0].shortcuts,f=g[0].shortcuts;e.getSidebar().find(".app-switcher-shortcuts").html(navlinks.templates.appswitcher.linkSection({title:"Shortcuts",list:j.concat(f)}));if(a.isUserAdmin){e.addProjectShortcutsCog(h.key,h.entityType)}e.populateProjectHeader(h.name,h.avatarUrl);e.bindAnalyticsHandlers(e.getSidebar(),data)};this.entityMappings={"confluence.space":"com.atlassian.applinks.api.application.confluence.ConfluenceSpaceEntityType","jira.project":"com.atlassian.applinks.api.application.jira.JiraProjectEntityType","bamboo.project":"com.atlassian.applinks.api.application.bamboo.BambooProjectEntityType","stash.project":"com.atlassian.applinks.api.application.stash.StashProjectEntityType"};this.generateEntityLinksUrl=function(f,g){if(g===e.entityMappings["confluence.space"]){return AJS.contextPath()+"/spaces/listentitylinks.action?typeId="+g+"&key="+f}else{return AJS.contextPath()+"/plugins/servlet/applinks/listEntityLinks/"+g+"/"+f}};this.showAppSwitcherError=function(){c(function(){var f=e.getSidebar();f.find(".app-switcher-applications .app-switcher-loading").replaceWith(navlinks.templates.appswitcher.error());f.off(".appswitcher").on("click.appswitcher",".app-switcher-retry",c.proxy(e.retryLoading,e))})};this.showProjectShortcutsError=function(){c(function(){var f=e.getSidebar();f.find(".app-switcher-shortcuts .app-switcher-loading").replaceWith(navlinks.templates.appswitcher.error());f.off(".appswitcher").on("click.appswitcher",".app-switcher-retry",c.proxy(e.retryLoading,e))})};this.retryLoading=function(f){this.getSidebar().html(navlinks.templates.appswitcher.sidebarContents());this.getLinks();this.getProjectData();f&&f.stopPropagation()};this.trackEvent=function(h,f,g){try{a.trackEvent("appswitcher-new",h,f,g)}catch(i){AJS.log("failed to track analytics event, category: appswitcher, action: "+h+", label: "+f+", value: "+g)}};this.bindAnalyticsHandlers=function(f,g){};this.getLinks();c(this.getProjectData);this.toggleSidebar=function(h){var i=e.getSidebar(),g=c("body"),f=c(window.document);if(!g.hasClass("app-switcher-open")){var k=c("#header");i.css("left",-i.width());i.parent("body").length||i.appendTo("body");b({data:i});i.animate({left:0},300);function j(l){var n=l.target&&c(l.target),m=l.keyCode;if(l.originalEvent===h.originalEvent){return}if(n&&!m&&!(n.closest(i).length||n.closest(k).length)&&h.which==1&&!(l.shiftKey||l.ctrlKey||l.metaKey)){e.toggleSidebar()}else{if(m===27){e.toggleSidebar()}}}f.on("click.appSwitcher",j);f.on("keydown.appSwitcher",j);f.on("scroll.appSwitcher",i,b)}else{f.off(".appSwitcher")}g.toggleClass("app-switcher-open")};c("#header").on("click",".app-switcher-trigger",this.toggleSidebar)};function b(f){var d=c(document).scrollTop(),g=c("#header"),e=(g.height()+g.offset().top)-d;if(e>=0){f.data.css({top:e,position:"fixed"})}else{f.data.css({top:0,left:0,position:"fixed"})}}if(a.onInit){a.onInit()}}(jQuery,window.NL=(window.NL||{})));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
(function(b,a){a.AppSwitcher=function(c){var d=AJS.contextPath()+"/plugins/servlet/customize-application-navigator";var e=this;this.$dropdown=null;c=b.extend({dropdownContents:null},c);this.getLinks=function(){return b.ajax({url:AJS.contextPath()+"/rest/menu/latest/appswitcher",cache:false,dataType:"json"}).done(this.updateDropdown).fail(this.showError)};this.getDropdown=function(){if(!this.$dropdown){this.$dropdown=b(c.dropdownContents)}return this.$dropdown};this.updateDropdown=function(f){b(function(){e.getDropdown().html(navlinks.templates.appswitcher_old.applications({apps:f,showAdminLink:a.isUserAdmin,adminLink:d}));e.bindAnalyticsHandlers(e.getDropdown(),f)})};this.showError=function(){b(function(){e.getDropdown().html(navlinks.templates.appswitcher_old.error()).off(".appswitcher").on("click.appswitcher",".app-switcher-retry",b.proxy(e.retryLoading,e))})};this.retryLoading=function(f){this.getDropdown().html(navlinks.templates.appswitcher_old.loading());this.getLinks();f&&f.stopPropagation()};this.trackEvent=function(h,f,g){try{a.trackEvent("appswitcher-new",h,f,g)}catch(i){AJS.log("failed to track analytics event, category: appswitcher, action: "+h+", label: "+f+", value: "+g)}};this.bindAnalyticsHandlers=function(i,h){function g(){var l=0;for(var j in h){var k=h[j];if(k.custom){l+=1}}return l}var f=g();i.on({"aui-dropdown2-show":function(j){e.trackEvent("show",a.getCurrentApplication(),h.length)},"aui-dropdown2-hide":function(j){e.trackEvent("hide",a.getCurrentApplication(),h.length)}});i.off(".analytics").on("click.analytics","a",function(j){e.trackEvent("appSelected",b(this).attr("href"),h.length)})};this.getLinks()};if(a.onInit){a.onInit()}}(jQuery,window.NL=(window.NL||{})));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
// This file was automatically generated from appswitcher_old.soy.
// Please don't edit this file by hand.

if (typeof navlinks == 'undefined') { var navlinks = {}; }
if (typeof navlinks.templates == 'undefined') { navlinks.templates = {}; }
if (typeof navlinks.templates.appswitcher_old == 'undefined') { navlinks.templates.appswitcher_old = {}; }


navlinks.templates.appswitcher_old.applications = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  navlinks.templates.appswitcher_old.applicationsSection({list: opt_data.apps, listClass: 'nav-links', showDescription: opt_data.showDescription}, output);
  if (opt_data.custom) {
    navlinks.templates.appswitcher_old.applicationsSection({list: opt_data.custom, showDescription: opt_data.showDescription}, output);
  }
  if (opt_data.showAdminLink) {
    navlinks.templates.appswitcher_old.adminSection(opt_data, output);
  }
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher_old.applicationsSection = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.list.length > 0) {
    var param19 = new soy.StringBuilder('<ul', (opt_data.listClass) ? ' class="' + soy.$$escapeHtml(opt_data.listClass) + '"' : '', '>');
    var linkList27 = opt_data.list;
    var linkListLen27 = linkList27.length;
    for (var linkIndex27 = 0; linkIndex27 < linkListLen27; linkIndex27++) {
      var linkData27 = linkList27[linkIndex27];
      navlinks.templates.appswitcher_old.applicationsItem(soy.$$augmentData(linkData27, {showDescription: opt_data.showDescription}), param19);
    }
    param19.append('</ul>');
    aui.dropdown2.section({content: param19.toString()}, output);
  }
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher_old.applicationsItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li class="nav-link', (opt_data.self) ? ' nav-link-local' : '', '"><a href="', soy.$$escapeHtml(opt_data.link), '" class="aui-dropdown2-radio interactive', (opt_data.self) ? ' checked' : '', '" title="', soy.$$escapeHtml(opt_data.link), '"><span class="nav-link-label">', soy.$$escapeHtml(opt_data.label), '</span>', (opt_data.showDescription && opt_data.description) ? '<span class="nav-link-description">' + soy.$$escapeHtml(opt_data.description) + '</span>' : '', '</a></li>');
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher_old.adminSection = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.dropdown2.section({content: '<ul class="nav-links"><li><a class="nav-link-edit-wrapper" href="' + soy.$$escapeHtml(opt_data.adminLink) + '"><span class="nav-link-edit">' + "Configure\x26hellip;" + '</span></a></li></ul>'}, output);
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher_old.error = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="app-switcher-error">', "Something went wrong, please \x3cspan class\x3d\x22app-switcher-retry\x22\x3etry again\x3c/span\x3e.", '</div>');
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher_old.loading = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="app-switcher-loading">', "Loading\x26hellip;", '</div>');
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher_old.trigger = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span class="aui-icon aui-icon-small aui-iconfont-appswitcher">', soy.$$escapeHtml("Linked Applications"), '</span>');
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher_old.switcher = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (true) {
    var loadingContent__soy81 = new soy.StringBuilder();
    navlinks.templates.appswitcher_old.loading(null, loadingContent__soy81);
    loadingContent__soy81 = loadingContent__soy81.toString();
    var triggerContent__soy83 = new soy.StringBuilder();
    navlinks.templates.appswitcher_old.trigger(null, triggerContent__soy83);
    triggerContent__soy83 = triggerContent__soy83.toString();
    aui.dropdown2.dropdown2({menu: {'id': 'app-switcher', 'content': loadingContent__soy81, 'extraClasses': 'aui-style-default'}, trigger: {'showIcon': false, 'content': triggerContent__soy83, 'extraClasses': 'app-switcher-trigger'}}, output);
    output.append('<script>\n            (function (NL) {\n                var initialise = function () {\n                    // For some milestones of AUI, the atlassian soy namespace was renamed to aui. Handle that here by ensuring that window.atlassian is defined.\n                    window.atlassian = window.atlassian || window.aui;\n                    new NL.AppSwitcher({\n                        dropdownContents: \'#app-switcher\'\n                    });\n                };\n                if (NL.AppSwitcher) {\n                    initialise();\n                } else {\n                    NL.onInit = initialise;\n                }\n            }(window.NL = (window.NL || {})));\n            window.NL.isUserAdmin = ', soy.$$escapeHtml(false), '<\/script>');
  }
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
var NavLinks=(function(a){a.ApplicationHeader=function(b){b.Cog=(function(){var c=function(){var d=AJS.$("#system-admin-menu-content");if(d.length>0){return d}var e=AJS.$("#admin-menu-link-content");if(e.length>0){return e}return AJS.$("#bamboo\\.global\\.header-admin\\.menu")};return{getDropdown:c}}());return b}(a.ApplicationHeader||{});return a}(NavLinks||{}));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
// This file was automatically generated from projectshortcuts.soy.
// Please don't edit this file by hand.

if (typeof navlinks == 'undefined') { var navlinks = {}; }
if (typeof navlinks.templates == 'undefined') { navlinks.templates = {}; }
if (typeof navlinks.templates.projectshortcuts == 'undefined') { navlinks.templates.projectshortcuts = {}; }


navlinks.templates.projectshortcuts.dialogContent = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.localShortcuts && opt_data.localShortcuts.length > 0) {
    navlinks.templates.projectshortcuts.dialogContentShortcuts({shortcuts: opt_data.localShortcuts, listClass: 'projectshortcut-links'}, output);
  }
  if (opt_data.remoteShortcuts != null) {
    if (opt_data.remoteShortcuts.length > 0) {
      output.append('<h2 class="projectshortcuts-heading">Related Links</h2>');
      navlinks.templates.projectshortcuts.dialogContentShortcuts(soy.$$augmentData(opt_data.remoteShortcuts, {shortcuts: opt_data.remoteShortcuts, listClass: 'projectshortcut-links'}), output);
    }
  } else {
    navlinks.templates.projectshortcuts.dialogLoading(null, output);
  }
  return opt_sb ? '' : output.toString();
};


navlinks.templates.projectshortcuts.headingWrapper = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="project-dialog-header-wrapper"><div class="project-header"><img class="project-img" src="', soy.$$escapeHtml(opt_data.logoUrl), '"><h2 class="dialog-title">', soy.$$escapeHtml(opt_data.title), '</h2></div><div class="project-content-wrapper">', opt_data.contentHtml, '</div></div>');
  return opt_sb ? '' : output.toString();
};


navlinks.templates.projectshortcuts.dialogContentShortcuts = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ul', (opt_data.listClass) ? ' class="' + soy.$$escapeHtml(opt_data.listClass) + '"' : '', '>');
  var shortcutList35 = opt_data.shortcuts;
  var shortcutListLen35 = shortcutList35.length;
  for (var shortcutIndex35 = 0; shortcutIndex35 < shortcutListLen35; shortcutIndex35++) {
    var shortcutData35 = shortcutList35[shortcutIndex35];
    output.append('<li', (shortcutIndex35 == shortcutListLen35 - 1) ? ' class="last"' : '', '>');
    navlinks.templates.projectshortcuts.dialogContentShortcut(shortcutData35, output);
    output.append('</li>');
  }
  output.append('</ul>');
  return opt_sb ? '' : output.toString();
};


navlinks.templates.projectshortcuts.dialogContentShortcut = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a href="', soy.$$escapeHtml(opt_data.link), '"', (opt_data.tooltip) ? ' title="' + soy.$$escapeHtml(opt_data.tooltip) + '"' : '', '>', soy.$$escapeHtml(opt_data.label), '</a>');
  return opt_sb ? '' : output.toString();
};


navlinks.templates.projectshortcuts.dialogLoading = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="projectshortcuts-loading">', (opt_data != null && opt_data.text) ? soy.$$escapeHtml(opt_data.text) : '', '</div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
(function(e,h){var j,l={},o="key",b="name",k="entity-type";function n(r,p,q){try{h.trackEvent("projectshortcuts",r,p,q)}catch(s){AJS.log("failed to track analytics event, category: projectshortcuts, action: "+r+", label: "+p+", value: "+q)}}function f(u){var p=e(this),q=p.data(o),s=p.data(b),r=p.data(k);if(typeof q==="undefined"){return}u.preventDefault();j=new AJS.Dialog({width:600,keypressListener:function(w){if(w.which==jQuery.ui.keyCode.ESCAPE){j.remove()}},id:"project-shortcuts-dialog"}).addCancel("Close",function(){j.remove();n("hide",h.getCurrentApplication())}).addPanel("",navlinks.templates.projectshortcuts.headingWrapper({title:s,logoUrl:i(),contentHtml:navlinks.templates.projectshortcuts.dialogLoading({text:"Retrieving links…"})})).show();c(j);if(!l[q]){l[q]={entity:{title:s},localShortcuts:null,remoteShortcuts:null};d(AJS.contextPath()+"/rest/project-shortcuts/1.0/local/"+q,{entityType:r}).done(v);d(AJS.contextPath()+"/rest/project-shortcuts/1.0/remote/"+q,{entityType:r}).done(t).error(function(){e(".projectshortcuts-loading",j.getCurrentPanel()).html("<div class='aui-message error'>"+"Could not retrieve remote project shortcuts"+"</div>")})}else{m(l[q])}function v(w){l[q].localShortcuts=w.shortcuts;m(l[q])}function t(w){l[q].remoteShortcuts=w.shortcuts;m(l[q])}n("show",h.getCurrentApplication())}function i(){return e(".project-shortcut-dialog-trigger img").attr("src")}function g(p){p.getCurrentPanel().body.find("a").unbind(".analytics").bind("click.analytics",function(){var q=this.attributes.href;n("navLinkFollowed",typeof q==="object"?q.value:q)})}function m(p){if(p.localShortcuts){j.getCurrentPanel().html(navlinks.templates.projectshortcuts.headingWrapper({title:p.entity.title,logoUrl:i(),contentHtml:navlinks.templates.projectshortcuts.dialogContent(p)}));g(j);c(j)}}function a(r){var q=210;if(!r||r.length<=q){return r}var p=q;while(p>0&&r.charAt(p)!=" "){p--}if(p==0){p=q}r=r.substring(0,p);if(r.length>=p){r=r+"..."}return r}function c(p){var s=p.popup.element,r=s.find(".dialog-panel-body"),q=s.find(".dialog-components");r.height("auto");s.height(q.outerHeight()-1);e(".aui-shadow").remove()}function d(p,q){return e.ajax({url:p,cache:false,data:q,dataType:"json"})}e(document).on("click",".project-shortcut-dialog-trigger",f)}(jQuery,window.NL=(window.NL||{})));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
AJS.Popups=AJS.Popups||{};AJS.Popups.DisplayController=function(){var c=[];var a=false;var b=false;AJS.toInit(function(){setTimeout(function(){AJS.Popups.DisplayController.render()},0)});return{request:function(d){c.push(d);if(a&&b===false){this.render()}},render:function(){c.sort(function(e,d){return e.weight-d.weight});a=true;if(c.length!==0){b=true;c[0].show()}}}}();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
jQuery(function(a){a(".clickable").live("click",function(c){if(a(c.target).closest("a[href]").length===0&&a(c.target).closest(".clickable").length===1){var b=a(this).attr("href")||a("a[href]:first",this).attr("href");if(b){location.href=b}}})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
(function(global, AJS, $) {

  var AP = global._AP = global._AP || {};

  var enc = encodeURIComponent;

  var $global = $(global);

  var idSeq = 0;

  /**
   * Constructs a new AUI dialog wrapper for a Remotable Plugin. The dialog has a single content panel containing a single
   * iframe. The iframe's content is retrieved from the Remotable Plugin via a redirect URl from the host Atlassian app,
   * which the request to the Remotable Plugin to be signed with outgoing OAuth credentials.
   *
   * @param contentUrl The URL (relative to the Atlassian app root) that will retrieve the content to display,
   *           eg. "/plugins/servlet/remotable-plugins/app-key/macro".
   * @param options Options to configure the behaviour and appearance of the dialog.
   */
  AP.makeDialog = function (contentUrl, options) {
    var $nexus;

    var defaultOptions = {
      // These options really _should_ be provided by the caller, or else the dialog is pretty pointless

      // Dialog header
      header: "Remotable Plugins Dialog Title",

      // These options may be overridden by the caller, but the defaults are OK
      headerClass: "ap-dialog-header",
      // Default width and height of the dialog
      width: "50%",
      height: "50%"
    };

    var dialogId = options.id || "ap-dialog-" + (idSeq += 1);
    var mergedOptions = $.extend({id: dialogId}, defaultOptions, options);
    mergedOptions.width = parseDimension(mergedOptions.width, $global.width());
    mergedOptions.height = parseDimension(mergedOptions.height, $global.height());

    var dialog = new AJS.Dialog(mergedOptions.width, mergedOptions.height, mergedOptions.id);
    dialog.addHeader(mergedOptions.header, mergedOptions.headerClass);

    var hasClosed = false;
    function closeDialog() {
      if (hasClosed) return;
      $nexus
        .trigger("ra.iframe.destroy")
        .removeData("ra.dialog.buttons")
        .unbind();
      dialog.remove();
      hasClosed = true;
    }

    // the dialog automatically closes on ESC. but we also want to do our clean up
    $(document).keydown(function(e){ if (e.keyCode === 27) { closeDialog(); }});

    var placeholderContent = "<div class='ap-servlet-placeholder'></div>";
    dialog.addPanel(null, placeholderContent, "ap-dialog-content");
    var $dialog = $("#" + dialogId);
    $nexus = $dialog.find(".ap-servlet-placeholder");

    return {
      id: dialogId,
      show: function() {
        dialog.show();

        var $panelBody = $dialog.find(".ap-dialog-content");
        contentUrl += (contentUrl.indexOf("?") > 0 ? "&" : "?") + "dialog=1";
        contentUrl = setDimension(contentUrl, "width", $panelBody.width());
        contentUrl = setDimension(contentUrl, "height", $panelBody.height());

        var timeout = setTimeout(function () {
          $nexus
            .append("<div class='ap-dialog-loading hidden'>&nbsp;</div>")
            .find(".ap-dialog-loading").height($panelBody.height()).fadeIn();
        }, 500);

        function preventTimeout() {
          if (timeout) {
            clearTimeout(timeout);
            timeout = null;
          }
        }

        function enableButtons() {
          buttons.setEnabled(true);
        }

        var buttons = makeButtons(dialog, [{
          name: "submit",
          displayName: "Submit",
          type: "Button",
          actions: {
            done: closeDialog
          }
        }, {
          name: "cancel",
          displayName: "Cancel",
          type: "Link",
          actions: {
            done: closeDialog,
            fail: enableButtons
          },
          noDisable: true
        }]);

        var iframeCreated = false;
        buttons.getButton("cancel").click(function () {
          if (!iframeCreated) {
            // default cancel handler should only run before the iframe is created and takes over
            closeDialog();
          }
        });

        $nexus
          .data("ra.dialog.buttons", buttons)
          .bind("ra.dialog.close", closeDialog)
          .bind("ra.iframe.create", function () { iframeCreated = true; })
          .bind("ra.iframe.init", enableButtons);
        // @todo should we instead start with all but cancel set to hidden, showing when iframe is inited?
        buttons.setEnabled(false);

        $.ajax(contentUrl, {
          dataType: "html",
          success: function(data) {
            preventTimeout();
            $nexus.html(data);
          },
          error: function(xhr, status, ex) {
            preventTimeout();
            var title = "Unable to load plugin content.  Please try again later.";
            $nexus.html("<div class='aui-message error' style='margin: 10px'></div>");
            $nexus.find(".error").append("<p class='title'>" + title + "</p>");
            var msg = status + (ex ? ": " + ex.toString() : "");
            $nexus.find(".error").append(msg);
            AJS.log(msg);
          }
        });
      }
    };
  };

  function makeButtons(dialog, specs) {
    var buttons = {},
        controls;
    $.each(specs, function () {
      var $dialog = $(dialog.popup.element),
          spec = this,
          className = "ap-dialog-" + spec.name,
          disabledAttr = "disabled",
          disabledClass = "ap-link-disabled",
          isEnabled = true;
      function dispatch(result) {
        var name = result ? "done" : "fail";
        spec.actions && spec.actions[name] && spec.actions[name]();
      }
      function handler() {
        // ignore clicks on disabled links
        if (buttons[spec.name].$el().hasClass(disabledClass)) return;
        $dialog.find("." + className).trigger("ra.dialog.click", dispatch);
      }
      dialog["add" + spec.type](spec.displayName, handler, className);
      buttons[spec.name] = {
        $el: function () { return $dialog.find("." + className); },
        isEnabled: function () { return isEnabled; },
        setEnabled: function (enabled) {
          if (!spec.noDisable) {
            var $button = this.$el();
            if (enabled) {
              if (spec.type === "Button") {
                $button.removeAttr(disabledAttr);
              }
              else {
                $button.addClass(disabledClass);
              }
            }
            else {
              if (spec.type === "Button") {
                $button.attr(disabledAttr, true);
              }
              else {
                $button.removeClass(disabledClass);
              }
            }
          }
        },
        click: function (listener) {
          if (listener) {
            this.$el().bind("ra.dialog.click", listener);
          }
          else {
            dispatch(true);
          }
        }
      };
    });
    controls = {
      each: function (it) {
        $.each(buttons, it);
      },
      setEnabled: function (enabled) {
        this.each(function () {
          this.setEnabled(enabled);
        });
      },
      getButton: function (name) {
        return buttons[name];
      }
    };
    return controls;
  }

  function parseDimension(value, viewport) {
    if (typeof value === "string") {
      var percent = value.indexOf("%") === value.length - 1;
      value = parseInt(value, 10);
      if (percent) value = value / 100 * viewport;
    }
    return value;
  }

  function setDimension(url, name, value) {
    name = enc(name);
    if (url.indexOf(name + "=")) {
      url = url.replace(new RegExp(name + "=[^&]+"), function () {
        return name + "=" + enc(value);
      });
    }
    else {
      url += "&" + name + "=" + enc(value);
    }
    return url;
  }

})(this, AJS, AJS.$);

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
AJS.toInit(function ($) {

  var AP = _AP;

  function createEventHandler() {
    return function(event) {
      event.preventDefault();
      var $el = $(event.target);
      var href = $el.attr("href");
      var options = {header: $el.text()};
      var re = /[?&](width|height)=([^&]+)/g, match;
      while (match = re.exec(href)) {
        options[match[1]] = decodeURIComponent(match[2]);
      }
      AP.makeDialog(href, options).show();
    };
  }
  // jquery 1.7 or later
  if ($().on) {
    // Connect any web items to the dialog.  Necessary to bind to dynamic action cogs in JIRA
    $(window.document).on("click", ".ap-dialog", createEventHandler());
  } else {
    // Bind to all static links
    var $dialogWebItems = $(".ap-dialog");
    $dialogWebItems.each(function (index, el) {
      var $el = $(el);
      $el.click(createEventHandler());
    });
  }

});

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
try{if(AJS&&AJS.Confluence&&AJS.Confluence.Blueprint){AJS.Confluence.Blueprint.setDirectCallback("com.balsamiq.confluence.plugins.mockups:blueprint-item",function(B,A){A.finalUrl=Confluence.getContextPath()+"/pages/createpage.action?spaceKey="+encodeURIComponent(A.spaceKey)+"&openBalsamiq=true"
})
}}catch(err){if(console&&console.log){console.log("Error loading blueprintcallback.js");
console.log(err)
}};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
// This file was automatically generated from templates.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.FileList == 'undefined') { Confluence.Templates.FileList = {}; }


Confluence.Templates.FileList.dialogForm = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<form action="#" method="post" id="file-list-form" class="aui"><fieldset><div class="field-group"><label for="file-list-page-title">', soy.$$escapeHtml("Name"), '<span class="aui-icon icon-required"> required</span></label><input id="file-list-page-title" class="text long-field" type="text" name="title" placeholder="', soy.$$escapeHtml("Title of your file list"), '" maxlength="255"><div class="error"></div></div><div class="field-group"><label for="file-list-page-description">', soy.$$escapeHtml("Description"), '</label><textarea id="file-list-page-description" class="textarea long-field" name="description" rows="6" placeholder="', soy.$$escapeHtml("Description which will appear at the top of file list"), '"></textarea></div><div class="field-group"><label for="file-list-restrictions">', soy.$$escapeHtml("Restrictions"), '</label><input id="file-list-restrictions" class="text long-field autocomplete-multiuser" type="text" name="viewPermissionsUsers" placeholder="', soy.$$escapeHtml("Restrict to users"), '"></div></fieldset></form>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
(function(b){function c(h,g){var d=h.find("#file-list-page-title"),f=b.trim(d.val()),e;if(!f){e="Name is required."}else{if(!Confluence.Blueprint.canCreatePage(g,f)){e="A page with this name already exists."}}if(e){d.focus().siblings(".error").html(e);return false}return true}function a(d,e){return c(e.$container,e.wizardData.spaceKey)}Confluence.Blueprint.setWizard("com.atlassian.confluence.plugins.confluence-business-blueprints:file-list-item",function(d){d.on("submit.file-list-page1",a)})})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
// This file was automatically generated from how-to.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Blueprints == 'undefined') { Confluence.Blueprints = {}; }
if (typeof Confluence.Blueprints.Meeting == 'undefined') { Confluence.Blueprints.Meeting = {}; }
if (typeof Confluence.Blueprints.Meeting.Notes == 'undefined') { Confluence.Blueprints.Meeting.Notes = {}; }


Confluence.Blueprints.Meeting.Notes.howTo = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<h1>', soy.$$escapeHtml("With Meeting Notes you can..."), '</h1><ol class="howto-steps"><li class="howto-step"><div><h3>', soy.$$escapeHtml("Crowd-source your agenda"), '</h3><p>', soy.$$escapeHtml("Distribute an agenda and keep meetings focused."), '</p></div></li><li class="howto-step"><div><h3>', soy.$$escapeHtml("Capture meeting minutes"), '</h3><p>', soy.$$escapeHtml("Take notes and make them available to everyone."), '</p></div></li><li class="howto-step"><div><h3>', soy.$$escapeHtml("Create and assign tasks"), '</h3><p>', soy.$$escapeHtml("Assign action items for attendees to work on afterward."), '</p></div></li></ol>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
// This file was automatically generated from user-mention.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Meeting == 'undefined') { Confluence.Templates.Meeting = {}; }
if (typeof Confluence.Templates.Meeting.Notes == 'undefined') { Confluence.Templates.Meeting.Notes = {}; }


Confluence.Templates.Meeting.Notes.userMention = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.username) ? '<li><p><ac:link><ri:user ri:username="' + soy.$$escapeHtml(opt_data.username) + '" /></ac:link></p></li><li><p><ac:placeholder ac:type="mention">' + soy.$$escapeHtml("@mention a person to add them as an attendee and they will be notified.") + '</ac:placeholder></p></li>' : '<li><p><ac:placeholder ac:type="mention">' + soy.$$escapeHtml("@mention a person to add them as an attendee and they will be notified.") + '</ac:placeholder></p></li>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
// This file was automatically generated from decisions-templates.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Blueprints == 'undefined') { Confluence.Blueprints = {}; }
if (typeof Confluence.Blueprints.Decisions == 'undefined') { Confluence.Blueprints.Decisions = {}; }


Confluence.Blueprints.Decisions.dialogForm = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<form action="#" method="post" id="decisions-form" class="aui"><fieldset><div class="field-group"><label for="decisions-status">', soy.$$escapeHtml("Status"), '</label><select class="select long-field" id="decisions-status" name="status"><option value="GREY">', soy.$$escapeHtml("Not Started"), '</option><option value="YELLOW">', soy.$$escapeHtml("In Progress"), '</option><option value="GREEN">', soy.$$escapeHtml("Decided"), '</option></select></div><div class="field-group"><label for="decisions-page-title">', soy.$$escapeHtml("Decision"), '<span class="aui-icon icon-required"> required</span></label><input id="decisions-page-title" class="text long-field" type="text" name="title" placeholder="', soy.$$escapeHtml("What are you deciding?"), '" maxlength="255"><div class="error"></div></div><div class="field-group"><label for="decisions-owner">', soy.$$escapeHtml("Owner"), '</label><input id="decisions-owner" type="text" class="text long-field autocomplete-multiuser" name="owner" placeholder="', soy.$$escapeHtml("Who should make the final decision?"), '"></div><div class="field-group"><label for="decisions-stakeholders">', soy.$$escapeHtml("Stakeholders"), '</label><input id="decisions-stakeholders" class="text long-field autocomplete-multiuser" type="text" name="stakeholders" placeholder="', soy.$$escapeHtml("Who needs to help make this decision?"), '"></div><div class="field-group"><label for="decisions-due-date">', soy.$$escapeHtml("Due date"), '</label><input id="decisions-due-date" class="datepicker-field date-field text" type="text" name="due-date" size="10" autocomplete="off"></div><div class="field-group"><label for="decisions-background">', soy.$$escapeHtml("Background"), '</label><textarea id="decisions-background" class="textarea long-field" rows="3" name="background" placeholder="', soy.$$escapeHtml("What details are important in making this decision?"), '"></textarea></div><div class="field-group"><label for="decisions-final-decision">', soy.$$escapeHtml("Outcome"), '</label><textarea id="decisions-final-decision" class="textarea long-field" rows="3" name="final-decision" placeholder="', soy.$$escapeHtml("What did you decide?"), '"></textarea></div></fieldset></form>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.Decisions.mentionXml = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var nameList35 = opt_data.names;
  var nameListLen35 = nameList35.length;
  for (var nameIndex35 = 0; nameIndex35 < nameListLen35; nameIndex35++) {
    var nameData35 = nameList35[nameIndex35];
    output.append('<ac:link><ri:user ri:username="', soy.$$escapeHtml(nameData35), '" /></ac:link>&nbsp;');
  }
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.Decisions.mentionsPlaceholder = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ac:placeholder ac:type="mention">', soy.$$escapeHtml(opt_data.placeholderText), '</ac:placeholder>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.Decisions.placeholder = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ac:placeholder>', soy.$$escapeHtml(opt_data.placeholderText), '</ac:placeholder>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.Decisions.statusTemplate = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ac:macro ac:name="status"><ac:parameter ac:name="title">', soy.$$escapeHtml(opt_data.status), '</ac:parameter><ac:parameter ac:name="colour">', soy.$$escapeHtml(opt_data.statusColour), '</ac:parameter></ac:macro>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.Decisions.detailsSummaryMacro = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ac:macro ac:name="detailssummary"><ac:parameter ac:name="label">', soy.$$escapeHtml(opt_data.label), '</ac:parameter><ac:parameter ac:name="spaces">', soy.$$escapeHtml(opt_data.spaces), '</ac:parameter><ac:parameter ac:name="firstcolumn">', soy.$$escapeHtml(opt_data.firstcolumn), '</ac:parameter><ac:parameter ac:name="headings">', soy.$$escapeHtml(opt_data.headings), '</ac:parameter></ac:macro>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.Decisions.createFromTemplateMacro = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ac:macro ac:name="create-from-template"><ac:parameter ac:name="blueprintModuleCompleteKey">', soy.$$escapeHtml(opt_data.moduleKey), '</ac:parameter><ac:parameter ac:name="buttonLabel">', soy.$$escapeHtml(opt_data.buttonLabel), '</ac:parameter><ac:parameter ac:name="spaceKey">', soy.$$escapeHtml(opt_data.spaceKey), '</ac:parameter><ac:parameter ac:name="templateName">', soy.$$escapeHtml(opt_data.templateName), '</ac:parameter></ac:macro>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
(function(c){function d(i,h){var e=i.find("#decisions-page-title"),g=c.trim(e.val()),f;if(!g){f="Decision is required."}else{if(!Confluence.Blueprint.canCreatePage(h,g)){f="A page with this name already exists."}}if(f){e.focus().siblings(".error").html(f);return false}return true}function a(e,f){return d(f.$container,f.wizardData.spaceKey)}function b(e,f){c("#decisions-due-date").datepicker({dateFormat:"yy/mm/dd"});c("#decisions-status").on("change",function(){var h=c("#decisions-final-decision");var g=c("label[for=decisions-final-decision]");if(c(this).find(":selected").val()=="GREEN"){h.css({display:"inline"});g.css({display:"inline"})}else{h.css({display:"none"});g.css({display:"none"})}})}Confluence.Blueprint.setWizard("com.atlassian.confluence.plugins.confluence-business-blueprints:decisions-blueprint-item",function(e){e.on("post-render.decisions-page1",b);e.on("submit.decisions-page1",a)})})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


