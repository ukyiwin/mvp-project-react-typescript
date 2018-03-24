exports.id = 0;
exports.modules = {

/***/ "./node_modules/medium-draft/lib/index.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, "/*!\n * medium-draft\n * Version - 0.6.0-beta1\n * Author - Brijesh Bittu <brijeshb42@gmail.com> (http://bitwiser.in/)\n */\n.DraftEditor-editorContainer,.DraftEditor-root,.public-DraftEditor-content{height:inherit;text-align:initial}.public-DraftEditor-content[contenteditable=true]{-webkit-user-modify:read-write-plaintext-only}.DraftEditor-root{position:relative}.DraftEditor-editorContainer{background-color:hsla(0,0%,100%,0);border-left:.1px solid transparent;position:relative;z-index:1}.public-DraftEditor-block{position:relative}.DraftEditor-alignLeft .public-DraftStyleDefault-block{text-align:left}.DraftEditor-alignLeft .public-DraftEditorPlaceholder-root{left:0;text-align:left}.DraftEditor-alignCenter .public-DraftStyleDefault-block{text-align:center}.DraftEditor-alignCenter .public-DraftEditorPlaceholder-root{margin:0 auto;text-align:center;width:100%}.DraftEditor-alignRight .public-DraftStyleDefault-block{text-align:right}.DraftEditor-alignRight .public-DraftEditorPlaceholder-root{right:0;text-align:right}.public-DraftEditorPlaceholder-root{color:#9197a3;position:absolute;z-index:1}.public-DraftEditorPlaceholder-hasFocus{color:#bdc1c9}.DraftEditorPlaceholder-hidden{display:none}.public-DraftStyleDefault-block{position:relative;white-space:pre-wrap}.public-DraftStyleDefault-ltr{direction:ltr;text-align:left}.public-DraftStyleDefault-rtl{direction:rtl;text-align:right}.public-DraftStyleDefault-listLTR{direction:ltr}.public-DraftStyleDefault-listRTL{direction:rtl}.public-DraftStyleDefault-ol,.public-DraftStyleDefault-ul{margin:16px 0;padding:0}.public-DraftStyleDefault-depth0.public-DraftStyleDefault-listLTR{margin-left:1.5em}.public-DraftStyleDefault-depth0.public-DraftStyleDefault-listRTL{margin-right:1.5em}.public-DraftStyleDefault-depth1.public-DraftStyleDefault-listLTR{margin-left:3em}.public-DraftStyleDefault-depth1.public-DraftStyleDefault-listRTL{margin-right:3em}.public-DraftStyleDefault-depth2.public-DraftStyleDefault-listLTR{margin-left:4.5em}.public-DraftStyleDefault-depth2.public-DraftStyleDefault-listRTL{margin-right:4.5em}.public-DraftStyleDefault-depth3.public-DraftStyleDefault-listLTR{margin-left:6em}.public-DraftStyleDefault-depth3.public-DraftStyleDefault-listRTL{margin-right:6em}.public-DraftStyleDefault-depth4.public-DraftStyleDefault-listLTR{margin-left:7.5em}.public-DraftStyleDefault-depth4.public-DraftStyleDefault-listRTL{margin-right:7.5em}.public-DraftStyleDefault-unorderedListItem{list-style-type:square;position:relative}.public-DraftStyleDefault-unorderedListItem.public-DraftStyleDefault-depth0{list-style-type:disc}.public-DraftStyleDefault-unorderedListItem.public-DraftStyleDefault-depth1{list-style-type:circle}.public-DraftStyleDefault-orderedListItem{list-style-type:none;position:relative}.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-listLTR:before{left:-36px;position:absolute;text-align:right;width:30px}.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-listRTL:before{position:absolute;right:-36px;text-align:left;width:30px}.public-DraftStyleDefault-orderedListItem:before{content:counter(ol0) \". \";counter-increment:ol0}.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth1:before{content:counter(ol1) \". \";counter-increment:ol1}.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth2:before{content:counter(ol2) \". \";counter-increment:ol2}.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth3:before{content:counter(ol3) \". \";counter-increment:ol3}.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth4:before{content:counter(ol4) \". \";counter-increment:ol4}.public-DraftStyleDefault-depth0.public-DraftStyleDefault-reset{counter-reset:ol0}.public-DraftStyleDefault-depth1.public-DraftStyleDefault-reset{counter-reset:ol1}.public-DraftStyleDefault-depth2.public-DraftStyleDefault-reset{counter-reset:ol2}.public-DraftStyleDefault-depth3.public-DraftStyleDefault-reset{counter-reset:ol3}.public-DraftStyleDefault-depth4.public-DraftStyleDefault-reset{counter-reset:ol4}/*! Hint.css - v2.5.0 - 2017-04-23\n* http://kushagragour.in/lab/hint/\n* Copyright (c) 2017 Kushagra Gour */[class*=hint--]{position:relative;display:inline-block}[class*=hint--]:after,[class*=hint--]:before{position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);visibility:hidden;opacity:0;z-index:1000000;pointer-events:none;transition:.3s ease;transition-delay:0s}[class*=hint--]:hover:after,[class*=hint--]:hover:before{visibility:visible;opacity:1;transition-delay:.1s}[class*=hint--]:before{content:\"\";position:absolute;background:0 0;border:6px solid transparent;z-index:1000001}[class*=hint--]:after{background:#383838;color:#fff;padding:8px 10px;font-size:12px;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;line-height:12px;white-space:nowrap;text-shadow:0 -1px 0 #000;box-shadow:4px 4px 8px rgba(0,0,0,.3)}[class*=hint--][aria-label]:after{content:attr(aria-label)}[class*=hint--][data-hint]:after{content:attr(data-hint)}[aria-label=\"\"]:after,[aria-label=\"\"]:before,[data-hint=\"\"]:after,[data-hint=\"\"]:before{display:none!important}.hint--top-left:before,.hint--top-right:before,.hint--top:before{border-top-color:#383838}.hint--bottom-left:before,.hint--bottom-right:before,.hint--bottom:before{border-bottom-color:#383838}.hint--top:after,.hint--top:before{bottom:100%;left:50%}.hint--top:before{margin-bottom:-11px;left:calc(50% - 6px)}.hint--top:after{-webkit-transform:translateX(-50%);transform:translateX(-50%)}.hint--top:hover:before{-webkit-transform:translateY(-8px);transform:translateY(-8px)}.hint--top:hover:after{-webkit-transform:translateX(-50%) translateY(-8px);transform:translateX(-50%) translateY(-8px)}.hint--bottom:after,.hint--bottom:before{top:100%;left:50%}.hint--bottom:before{margin-top:-11px;left:calc(50% - 6px)}.hint--bottom:after{-webkit-transform:translateX(-50%);transform:translateX(-50%)}.hint--bottom:hover:before{-webkit-transform:translateY(8px);transform:translateY(8px)}.hint--bottom:hover:after{-webkit-transform:translateX(-50%) translateY(8px);transform:translateX(-50%) translateY(8px)}.hint--right:before{border-right-color:#383838;margin-left:-11px;margin-bottom:-6px}.hint--right:after{margin-bottom:-14px}.hint--right:after,.hint--right:before{left:100%;bottom:50%}.hint--right:hover:after,.hint--right:hover:before{-webkit-transform:translateX(8px);transform:translateX(8px)}.hint--left:before{border-left-color:#383838;margin-right:-11px;margin-bottom:-6px}.hint--left:after{margin-bottom:-14px}.hint--left:after,.hint--left:before{right:100%;bottom:50%}.hint--left:hover:after,.hint--left:hover:before{-webkit-transform:translateX(-8px);transform:translateX(-8px)}.hint--top-left:after,.hint--top-left:before{bottom:100%;left:50%}.hint--top-left:before{margin-bottom:-11px;left:calc(50% - 6px)}.hint--top-left:after{-webkit-transform:translateX(-100%);transform:translateX(-100%);margin-left:12px}.hint--top-left:hover:before{-webkit-transform:translateY(-8px);transform:translateY(-8px)}.hint--top-left:hover:after{-webkit-transform:translateX(-100%) translateY(-8px);transform:translateX(-100%) translateY(-8px)}.hint--top-right:after,.hint--top-right:before{bottom:100%;left:50%}.hint--top-right:before{margin-bottom:-11px;left:calc(50% - 6px)}.hint--top-right:after{-webkit-transform:translateX(0);transform:translateX(0);margin-left:-12px}.hint--top-right:hover:after,.hint--top-right:hover:before{-webkit-transform:translateY(-8px);transform:translateY(-8px)}.hint--bottom-left:after,.hint--bottom-left:before{top:100%;left:50%}.hint--bottom-left:before{margin-top:-11px;left:calc(50% - 6px)}.hint--bottom-left:after{-webkit-transform:translateX(-100%);transform:translateX(-100%);margin-left:12px}.hint--bottom-left:hover:before{-webkit-transform:translateY(8px);transform:translateY(8px)}.hint--bottom-left:hover:after{-webkit-transform:translateX(-100%) translateY(8px);transform:translateX(-100%) translateY(8px)}.hint--bottom-right:after,.hint--bottom-right:before{top:100%;left:50%}.hint--bottom-right:before{margin-top:-11px;left:calc(50% - 6px)}.hint--bottom-right:after{-webkit-transform:translateX(0);transform:translateX(0);margin-left:-12px}.hint--bottom-right:hover:after,.hint--bottom-right:hover:before{-webkit-transform:translateY(8px);transform:translateY(8px)}.hint--large:after,.hint--medium:after,.hint--small:after{white-space:normal;line-height:1.4em;word-wrap:break-word}.hint--small:after{width:80px}.hint--medium:after{width:150px}.hint--large:after{width:300px}.hint--error:after{background-color:#b34e4d;text-shadow:0 -1px 0 #592726}.hint--error.hint--top-left:before,.hint--error.hint--top-right:before,.hint--error.hint--top:before{border-top-color:#b34e4d}.hint--error.hint--bottom-left:before,.hint--error.hint--bottom-right:before,.hint--error.hint--bottom:before{border-bottom-color:#b34e4d}.hint--error.hint--left:before{border-left-color:#b34e4d}.hint--error.hint--right:before{border-right-color:#b34e4d}.hint--warning:after{background-color:#c09854;text-shadow:0 -1px 0 #6c5328}.hint--warning.hint--top-left:before,.hint--warning.hint--top-right:before,.hint--warning.hint--top:before{border-top-color:#c09854}.hint--warning.hint--bottom-left:before,.hint--warning.hint--bottom-right:before,.hint--warning.hint--bottom:before{border-bottom-color:#c09854}.hint--warning.hint--left:before{border-left-color:#c09854}.hint--warning.hint--right:before{border-right-color:#c09854}.hint--info:after{background-color:#3986ac;text-shadow:0 -1px 0 #1a3c4d}.hint--info.hint--top-left:before,.hint--info.hint--top-right:before,.hint--info.hint--top:before{border-top-color:#3986ac}.hint--info.hint--bottom-left:before,.hint--info.hint--bottom-right:before,.hint--info.hint--bottom:before{border-bottom-color:#3986ac}.hint--info.hint--left:before{border-left-color:#3986ac}.hint--info.hint--right:before{border-right-color:#3986ac}.hint--success:after{background-color:#458746;text-shadow:0 -1px 0 #1a321a}.hint--success.hint--top-left:before,.hint--success.hint--top-right:before,.hint--success.hint--top:before{border-top-color:#458746}.hint--success.hint--bottom-left:before,.hint--success.hint--bottom-right:before,.hint--success.hint--bottom:before{border-bottom-color:#458746}.hint--success.hint--left:before{border-left-color:#458746}.hint--success.hint--right:before{border-right-color:#458746}.hint--always:after,.hint--always:before{opacity:1;visibility:visible}.hint--always.hint--top:before{-webkit-transform:translateY(-8px);transform:translateY(-8px)}.hint--always.hint--top:after{-webkit-transform:translateX(-50%) translateY(-8px);transform:translateX(-50%) translateY(-8px)}.hint--always.hint--top-left:before{-webkit-transform:translateY(-8px);transform:translateY(-8px)}.hint--always.hint--top-left:after{-webkit-transform:translateX(-100%) translateY(-8px);transform:translateX(-100%) translateY(-8px)}.hint--always.hint--top-right:after,.hint--always.hint--top-right:before{-webkit-transform:translateY(-8px);transform:translateY(-8px)}.hint--always.hint--bottom:before{-webkit-transform:translateY(8px);transform:translateY(8px)}.hint--always.hint--bottom:after{-webkit-transform:translateX(-50%) translateY(8px);transform:translateX(-50%) translateY(8px)}.hint--always.hint--bottom-left:before{-webkit-transform:translateY(8px);transform:translateY(8px)}.hint--always.hint--bottom-left:after{-webkit-transform:translateX(-100%) translateY(8px);transform:translateX(-100%) translateY(8px)}.hint--always.hint--bottom-right:after,.hint--always.hint--bottom-right:before{-webkit-transform:translateY(8px);transform:translateY(8px)}.hint--always.hint--left:after,.hint--always.hint--left:before{-webkit-transform:translateX(-8px);transform:translateX(-8px)}.hint--always.hint--right:after,.hint--always.hint--right:before{-webkit-transform:translateX(8px);transform:translateX(8px)}.hint--rounded:after{border-radius:4px}.hint--no-animate:after,.hint--no-animate:before{transition-duration:0s}.hint--bounce:after,.hint--bounce:before{transition:opacity .3s ease,visibility .3s ease,transform .3s cubic-bezier(.71,1.7,.77,1.24)}.md-RichEditor-root{background:#fff;box-sizing:border-box;padding:15px 30px;position:relative;line-height:1.4em}.md-RichEditor-editor{cursor:text;margin-top:10px;position:relative;margin:0 auto}.md-RichEditor-editor h3{font-size:1.3em;margin:1.2em 0}.md-RichEditor-editor .public-DraftEditor-content,.md-RichEditor-editor .public-DraftEditorPlaceholder-root{margin:0 -15px -15px;padding:15px}.md-RichEditor-editor .public-DraftEditor-content{min-height:100px}.md-RichEditor-hidePlaceholder .public-DraftEditorPlaceholder-root{display:none}.md-RichEditor-editor .md-RichEditor-blockquote{border-left:5px solid #4ca8de;color:#555;font-size:1.2em;margin:0;padding:10px 0 10px 20px;background-color:#e2f2ff}.md-RichEditor-blockquote a{text-decoration:underline}.public-DraftEditor-content .md-block:first-child{margin-top:0;padding-top:0}.md-RichEditor-editor .public-DraftStyleDefault-pre{background-color:rgba(0,0,0,.05);font-size:16px;padding:20px}.public-DraftStyleDefault-orderedListItem,.public-DraftStyleDefault-unorderedListItem{margin-bottom:10px}.md-editor-action{position:fixed;top:5px;left:5px}.md-editor-action button{display:block}.md-side-toolbar{position:absolute;z-index:1;left:-35px;top:0;transition:all .2s ease}.md-sb-button{background:none;border:1px solid #5b5b5b;color:#6d6d6d;cursor:pointer;height:30px;width:30px;border-radius:15px;font-weight:700;font-size:20px;margin-right:2px;text-align:center;transition:all .2s ease}.md-sb-button:focus{outline:none;border-color:#08c;color:#08c}.md-sb-button:hover{color:green}.md-sb-button.md-sb-img-button{background:none;background-color:#fff}.md-sb-button svg path{stroke-width:0;fill:#545454}.md-add-button.md-open-button{transform:rotate(45deg)}.md-example-appear{transform:translate3d(-38px,0,0);opacity:0}.md-example-appear.md-example-appear-active{transform:translateZ(0);opacity:1;transition:all .5s ease-in}.md-example-enter{transform:translate3d(-38px,0,0);opacity:0}.md-example-enter.md-example-enter-active{opacity:1;transform:translateZ(0);transition:all .5s ease-in}.md-example-leave{opacity:1}.md-example-leave.md-example-leave-active{opacity:.01;transition:opacity .3s ease-in}@keyframes pop-upwards{0%{transform:matrix(.97,0,0,1,0,12);opacity:0}20%{transform:matrix(.99,0,0,1,0,2);opacity:.7}40%{transform:matrix(1,0,0,1,0,-1);opacity:1}70%{transform:matrix(1,0,0,1,0,0);opacity:1}to{transform:matrix(1,0,0,1,0,0);opacity:1}}@keyframes pop-downwards{0%{transform:matrix(.97,0,0,1,0,-12);opacity:0}20%{transform:matrix(.99,0,0,1,0,-2);opacity:.7}40%{transform:matrix(1,0,0,1,0,1);opacity:1}70%{transform:matrix(1,0,0,1,0,0);opacity:1}to{transform:matrix(1,0,0,1,0,0);opacity:1}}.md-editor-toolbar{background:#323845;color:#fff;cursor:auto;border-radius:5px;z-index:2;position:absolute;transition:all .1s ease;visibility:hidden;box-shadow:0 1px 3px 0 #747171}.md-editor-toolbar.md-editor-toolbar--isopen{visibility:visible}.md-editor-toolbar.md-editor-toolbar--linkinput{animation:pop-downwards .2s forwards linear}.md-editor-toolbar:after{content:\"\";position:absolute;bottom:-5px;left:50%;margin-left:-5px;border-top:5px solid #323845;border-right:5px solid transparent;border-left:5px solid transparent}.md-editor-toolbar .md-url-input{box-sizing:border-box;border-radius:2px;display:block;width:100%;padding:5px;padding-right:11px;border:none;background:#323845;color:#fff;font-size:.9em;font-weight:100}.md-editor-toolbar .md-url-input:focus{outline:none}.md-editor-toolbar .md-url-input-close{position:absolute;right:8px;top:2.5px;font-size:20px;cursor:pointer}.md-editor-toolbar-edit-link{padding:4px 5px;font-size:.8em;width:320px}.md-editor-toolbar-edit-link a{color:#fff;text-decoration:none}.md-editor-toolbar-edit-link:after{bottom:auto;top:-5px;transform:rotate(180deg)}.md-editor-toolbar-edit-link button{background:none;border:none;color:#fff;float:right;display:inline-block;padding:0 5px;margin:5px 0;cursor:pointer}.md-editor-toolbar-edit-link button.md-editor-toolbar-edit-button{border-right:1px solid #fff}.md-RichEditor-controls{font-family:Helvetica,sans-serif;font-size:14px;display:inline-block;border-right:1px solid #555;position:relative}.md-RichEditor-controls.md-RichEditor-show-link-input{padding:6px 10px}.md-RichEditor-controls:last-child{border-right:none}.md-RichEditor-controls .md-RichEditor-linkButton{padding:0 5px;color:#fff;text-decoration:none}.md-RichEditor-styleButton{color:#fff;cursor:pointer;display:inline-block;padding:6px 10px}.md-RichEditor-styleButton:hover{color:#ff0}.md-RichEditor-styleButton:last-child{margin-right:0}.md-RichEditor-styleButton.md-RichEditor-styleButton-bold{font-weight:700}.md-RichEditor-styleButton.md-RichEditor-styleButton-italic{font-style:italic}.md-RichEditor-styleButton.md-RichEditor-styleButton-underline{text-decoration:underline}.md-RichEditor-styleButton.md-RichEditor-styleButton-strikethrough{text-decoration:line-through}.md-RichEditor-activeButton{color:#50ff4d;background:#242933}.md-RichEditor-activeButton:hover{color:#08c}.md-RichEditor-controls-block .md-RichEditor-styleButton:first-child{border-top-left-radius:5px;border-bottom-left-radius:5px}.public-DraftEditor-content .md-block-paragraph{margin:20px 0}.public-DraftEditor-content .md-block-paragraph:first-child{margin-top:0}.public-DraftEditor-content .md-block-paragraph:last-child{margin-bottom:0}.md-block-checkbox input[type=checkbox]{float:left;margin-right:10px}.md-block-atomic{margin:0}.md-block-atomic img{width:100%;border:1px solid #eee;box-sizing:border-box}.md-block-atomic-wrapper{position:relative}.md-block-atomic-controls{display:none;position:absolute;top:0;right:0;transition:all .2s ease}.md-block-atomic-controls button{display:inline-block;background-color:#eaeaea;border:none;color:#6d6d6d;cursor:pointer;height:22px;width:22px;border-radius:11px;position:absolute;z-index:1;left:-27px;font-weight:700;text-align:center;transition:all .2s ease}.md-block-atomic-controls button:focus{outline:none;border-color:#08c;color:#08c}.md-block-quote cite{display:block;margin:0}.md-block-quote cite:before{content:\"\\2013\";color:#999;float:left;font-weight:700;display:inline;margin-right:10px}.md-block-caption{display:block;position:relative;font-style:normal;padding:10px 0;font-family:Hoefler Text,Georgia,serif;margin:0 0 20px;background-color:#f7f7f7;border-radius:5px;line-height:1.2em}.md-block-caption:before{content:\"\\201C\";color:#c6dfff;display:inline;position:absolute;left:-25px;top:-5px;font-size:3em}.md-block-caption .public-DraftStyleDefault-ltr{text-align:center}.md-block-todo input[type=checkbox]{cursor:pointer;float:left;position:relative;top:4px;left:-4px}.md-block-todo .public-DraftStyleDefault-block{margin-left:18px}.md-block-todo .md-block-todo-completed{color:#949494;text-decoration:line-through}.md-block-image{margin:10px 0;background:#fbfbfb}.md-block-image img{cursor:default;max-width:100%;border:1px solid #eee;box-sizing:border-box}.md-block-image img.is-selected{box-shadow:0 0 0 3px #02b875}.md-block-image figcaption{display:block;font-size:14px;line-height:1.4;color:rgba(0,0,0,.6);letter-spacing:0;font-weight:300;font-style:normal;text-align:center;padding:5px 0}.md-block-image figcaption .public-DraftStyleDefault-block{text-align:center}.md-block-image .md-block-image-inner-container{position:relative}.md-block-image .md-block-image-toolbar-container{position:absolute;top:0;right:10px;cursor:pointer}", ""]);

// exports


/***/ }),

/***/ "./node_modules/react-select-plus/dist/react-select-plus.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, "/**\n * React Select Plus\n * =================\n * MIT License: https://github.com/HubSpot/react-select-plus\n*/\n.Select {\n  position: relative;\n}\n.Select input::-webkit-contacts-auto-fill-button,\n.Select input::-webkit-credentials-auto-fill-button {\n  display: none !important;\n}\n.Select input::-ms-clear {\n  display: none !important;\n}\n.Select input::-ms-reveal {\n  display: none !important;\n}\n.Select,\n.Select div,\n.Select input,\n.Select span {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.Select.is-disabled .Select-arrow-zone {\n  cursor: default;\n  pointer-events: none;\n  opacity: 0.35;\n}\n.Select.is-disabled > .Select-control {\n  background-color: #f9f9f9;\n}\n.Select.is-disabled > .Select-control:hover {\n  box-shadow: none;\n}\n.Select.is-open > .Select-control {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n  background: #fff;\n  border-color: #b3b3b3 #ccc #d9d9d9;\n}\n.Select.is-open > .Select-control .Select-arrow {\n  top: -2px;\n  border-color: transparent transparent #999;\n  border-width: 0 5px 5px;\n}\n.Select.is-searchable.is-open > .Select-control {\n  cursor: text;\n}\n.Select.is-searchable.is-focused:not(.is-open) > .Select-control {\n  cursor: text;\n}\n.Select.is-focused > .Select-control {\n  background: #fff;\n}\n.Select.is-focused:not(.is-open) > .Select-control {\n  border-color: #007eff;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 3px rgba(0, 126, 255, 0.1);\n  background: #fff;\n}\n.Select.has-value.is-clearable.Select--single > .Select-control .Select-value {\n  padding-right: 42px;\n}\n.Select.has-value.Select--single > .Select-control .Select-value .Select-value-label,\n.Select.has-value.is-pseudo-focused.Select--single > .Select-control .Select-value .Select-value-label {\n  color: #333;\n}\n.Select.has-value.Select--single > .Select-control .Select-value a.Select-value-label,\n.Select.has-value.is-pseudo-focused.Select--single > .Select-control .Select-value a.Select-value-label {\n  cursor: pointer;\n  text-decoration: none;\n}\n.Select.has-value.Select--single > .Select-control .Select-value a.Select-value-label:hover,\n.Select.has-value.is-pseudo-focused.Select--single > .Select-control .Select-value a.Select-value-label:hover,\n.Select.has-value.Select--single > .Select-control .Select-value a.Select-value-label:focus,\n.Select.has-value.is-pseudo-focused.Select--single > .Select-control .Select-value a.Select-value-label:focus {\n  color: #007eff;\n  outline: none;\n  text-decoration: underline;\n}\n.Select.has-value.Select--single > .Select-control .Select-value a.Select-value-label:focus,\n.Select.has-value.is-pseudo-focused.Select--single > .Select-control .Select-value a.Select-value-label:focus {\n  background: #fff;\n}\n.Select.has-value.is-pseudo-focused .Select-input {\n  opacity: 0;\n}\n.Select.is-open .Select-arrow,\n.Select .Select-arrow-zone:hover > .Select-arrow {\n  border-top-color: #666;\n}\n.Select.Select--rtl {\n  direction: rtl;\n  text-align: right;\n}\n.Select-control {\n  background-color: #fff;\n  border-color: #d9d9d9 #ccc #b3b3b3;\n  border-radius: 4px;\n  border: 1px solid #ccc;\n  color: #333;\n  cursor: default;\n  display: table;\n  border-spacing: 0;\n  border-collapse: separate;\n  height: 36px;\n  outline: none;\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n}\n.Select-control:hover {\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);\n}\n.Select-control .Select-input:focus {\n  outline: none;\n  background: #fff;\n}\n.Select-placeholder,\n.Select--single > .Select-control .Select-value {\n  bottom: 0;\n  color: #aaa;\n  left: 0;\n  line-height: 34px;\n  padding-left: 10px;\n  padding-right: 10px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.Select-input {\n  height: 34px;\n  padding-left: 10px;\n  padding-right: 10px;\n  vertical-align: middle;\n}\n.Select-input > input {\n  width: 100%;\n  background: none transparent;\n  border: 0 none;\n  box-shadow: none;\n  cursor: default;\n  display: inline-block;\n  font-family: inherit;\n  font-size: inherit;\n  margin: 0;\n  outline: none;\n  line-height: 17px;\n  /* For IE 8 compatibility */\n  padding: 8px 0 12px;\n  /* For IE 8 compatibility */\n  -webkit-appearance: none;\n}\n.is-focused .Select-input > input {\n  cursor: text;\n}\n.has-value.is-pseudo-focused .Select-input {\n  opacity: 0;\n}\n.Select-control:not(.is-searchable) > .Select-input {\n  outline: none;\n}\n.Select-loading-zone {\n  cursor: pointer;\n  display: table-cell;\n  position: relative;\n  text-align: center;\n  vertical-align: middle;\n  width: 16px;\n}\n.Select-loading {\n  -webkit-animation: Select-animation-spin 400ms infinite linear;\n  -o-animation: Select-animation-spin 400ms infinite linear;\n  animation: Select-animation-spin 400ms infinite linear;\n  width: 16px;\n  height: 16px;\n  box-sizing: border-box;\n  border-radius: 50%;\n  border: 2px solid #ccc;\n  border-right-color: #333;\n  display: inline-block;\n  position: relative;\n  vertical-align: middle;\n}\n.Select-clear-zone {\n  -webkit-animation: Select-animation-fadeIn 200ms;\n  -o-animation: Select-animation-fadeIn 200ms;\n  animation: Select-animation-fadeIn 200ms;\n  color: #999;\n  cursor: pointer;\n  display: table-cell;\n  position: relative;\n  text-align: center;\n  vertical-align: middle;\n  width: 17px;\n}\n.Select-clear-zone:hover {\n  color: #D0021B;\n}\n.Select-clear {\n  display: inline-block;\n  font-size: 18px;\n  line-height: 1;\n}\n.Select--multi .Select-clear-zone {\n  width: 17px;\n}\n.Select-arrow-zone {\n  cursor: pointer;\n  display: table-cell;\n  position: relative;\n  text-align: center;\n  vertical-align: middle;\n  width: 25px;\n  padding-right: 5px;\n}\n.Select--rtl .Select-arrow-zone {\n  padding-right: 0;\n  padding-left: 5px;\n}\n.Select-arrow {\n  border-color: #999 transparent transparent;\n  border-style: solid;\n  border-width: 5px 5px 2.5px;\n  display: inline-block;\n  height: 0;\n  width: 0;\n  position: relative;\n}\n.Select-control > *:last-child {\n  padding-right: 5px;\n}\n.Select--multi .Select-multi-value-wrapper {\n  display: inline-block;\n}\n.Select .Select-aria-only {\n  position: absolute;\n  display: inline-block;\n  height: 1px;\n  width: 1px;\n  margin: -1px;\n  clip: rect(0, 0, 0, 0);\n  overflow: hidden;\n  float: left;\n}\n@-webkit-keyframes Select-animation-fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes Select-animation-fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.Select-menu-outer {\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border-top-color: #e6e6e6;\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);\n  box-sizing: border-box;\n  margin-top: -1px;\n  max-height: 200px;\n  position: absolute;\n  top: 100%;\n  width: 100%;\n  z-index: 1;\n  -webkit-overflow-scrolling: touch;\n}\n.Select-menu {\n  max-height: 198px;\n  overflow-y: auto;\n}\n.Select-option-group-label {\n  box-sizing: border-box;\n  background-color: #fff;\n  color: #666666;\n  font-weight: bold;\n  cursor: default;\n  display: block;\n  padding: 8px 10px;\n}\n.Select-option-group-label ~ .Select-option,\n.Select-option-group-label ~ .Select-option-group {\n  padding-left: 20px;\n}\n.Select-option {\n  box-sizing: border-box;\n  background-color: #fff;\n  color: #666666;\n  cursor: pointer;\n  display: block;\n  padding: 8px 10px;\n}\n.Select-option:last-child {\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n.Select-option.is-selected {\n  background-color: #f5faff;\n  /* Fallback color for IE 8 */\n  background-color: rgba(0, 126, 255, 0.04);\n  color: #333;\n}\n.Select-option.is-focused {\n  background-color: #ebf5ff;\n  /* Fallback color for IE 8 */\n  background-color: rgba(0, 126, 255, 0.08);\n  color: #333;\n}\n.Select-option.is-disabled {\n  color: #cccccc;\n  cursor: default;\n}\n.Select-noresults {\n  box-sizing: border-box;\n  color: #999999;\n  cursor: default;\n  display: block;\n  padding: 8px 10px;\n}\n.Select--multi .Select-input {\n  vertical-align: middle;\n  margin-left: 10px;\n  padding: 0;\n}\n.Select--multi.Select--rtl .Select-input {\n  margin-left: 0;\n  margin-right: 10px;\n}\n.Select--multi.has-value .Select-input {\n  margin-left: 5px;\n}\n.Select--multi .Select-value {\n  background-color: #ebf5ff;\n  /* Fallback color for IE 8 */\n  background-color: rgba(0, 126, 255, 0.08);\n  border-radius: 2px;\n  border: 1px solid #c2e0ff;\n  /* Fallback color for IE 8 */\n  border: 1px solid rgba(0, 126, 255, 0.24);\n  color: #007eff;\n  display: inline-block;\n  font-size: 0.9em;\n  line-height: 1.4;\n  margin-left: 5px;\n  margin-top: 5px;\n  vertical-align: top;\n}\n.Select--multi .Select-value-icon,\n.Select--multi .Select-value-label {\n  display: inline-block;\n  vertical-align: middle;\n}\n.Select--multi .Select-value-label {\n  border-bottom-right-radius: 2px;\n  border-top-right-radius: 2px;\n  cursor: default;\n  padding: 2px 5px;\n}\n.Select--multi a.Select-value-label {\n  color: #007eff;\n  cursor: pointer;\n  text-decoration: none;\n}\n.Select--multi a.Select-value-label:hover {\n  text-decoration: underline;\n}\n.Select--multi .Select-value-icon {\n  cursor: pointer;\n  border-bottom-left-radius: 2px;\n  border-top-left-radius: 2px;\n  border-right: 1px solid #c2e0ff;\n  /* Fallback color for IE 8 */\n  border-right: 1px solid rgba(0, 126, 255, 0.24);\n  padding: 1px 5px 3px;\n}\n.Select--multi .Select-value-icon:hover,\n.Select--multi .Select-value-icon:focus {\n  background-color: #d8eafd;\n  /* Fallback color for IE 8 */\n  background-color: rgba(0, 113, 230, 0.08);\n  color: #0071e6;\n}\n.Select--multi .Select-value-icon:active {\n  background-color: #c2e0ff;\n  /* Fallback color for IE 8 */\n  background-color: rgba(0, 126, 255, 0.24);\n}\n.Select--multi.Select--rtl .Select-value {\n  margin-left: 0;\n  margin-right: 5px;\n}\n.Select--multi.Select--rtl .Select-value-icon {\n  border-right: none;\n  border-left: 1px solid #c2e0ff;\n  /* Fallback color for IE 8 */\n  border-left: 1px solid rgba(0, 126, 255, 0.24);\n}\n.Select--multi.is-disabled .Select-value {\n  background-color: #fcfcfc;\n  border: 1px solid #e3e3e3;\n  color: #333;\n}\n.Select--multi.is-disabled .Select-value-icon {\n  cursor: not-allowed;\n  border-right: 1px solid #e3e3e3;\n}\n.Select--multi.is-disabled .Select-value-icon:hover,\n.Select--multi.is-disabled .Select-value-icon:focus,\n.Select--multi.is-disabled .Select-value-icon:active {\n  background-color: #fcfcfc;\n}\n@keyframes Select-animation-spin {\n  to {\n    transform: rotate(1turn);\n  }\n}\n@-webkit-keyframes Select-animation-spin {\n  to {\n    -webkit-transform: rotate(1turn);\n  }\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/Assets/bg2.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/bg2.06dc0c29.svg";

/***/ }),

/***/ "./src/Assets/bg4.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/bg4.edbe02ce.svg";

/***/ }),

/***/ "./src/Assets/bg8.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/bg8.4e730845.svg";

/***/ }),

/***/ "./src/Components/ArticleList/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Components_ArticleItem__ = __webpack_require__("./src/Components/ArticleItem/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_infinite_scroller__ = __webpack_require__("react-infinite-scroller");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_infinite_scroller___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_infinite_scroller__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Components_EmptyStates__ = __webpack_require__("./src/Components/EmptyStates/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Graphql_Query__ = __webpack_require__("./src/Graphql/Query/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_content_loader__ = __webpack_require__("react-content-loader");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_content_loader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_content_loader__);







// const MyFacebookLoader = () => <Facebook />;
const MyLoader = () => (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_react_content_loader___default.a, { height: 200, width: 400, speed: 2, primaryColor: '#f3f3f3', secondaryColor: '#ecebeb' },
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("rect", { x: "70", y: "15", rx: "4", ry: "4", width: "117", height: "6.4" }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("rect", { x: "70", y: "35", rx: "3", ry: "3", width: "85", height: "6.4" }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("rect", { x: "1", y: "136", rx: "3", ry: "3", width: "350", height: "6.4" }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("rect", { x: "-1", y: "118", rx: "3", ry: "3", width: "380", height: "6.4" }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("rect", { x: "0", y: "150", rx: "3", ry: "3", width: "201", height: "6.4" }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("circle", { cx: "30", cy: "30", r: "30" }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("rect", { x: "-0.5", y: "70.27", rx: "0", ry: "0", width: "348", height: "16" }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("rect", { x: "1.5", y: "89.27", rx: "0", ry: "0", width: "217", height: "12" }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("rect", { x: "2.5", y: "175", rx: "0", ry: "0", width: "61", height: "18" }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("rect", { x: "72.5", y: "175", rx: "0", ry: "0", width: "55", height: "18" }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("rect", { x: "136.5", y: "175.27", rx: "0", ry: "0", width: "56", height: "18" }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("rect", { x: "358.5", y: "177.27", rx: "0", ry: "0", width: "25", height: "16" }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("rect", { x: "325.5", y: "177.27", rx: "0", ry: "0", width: "23", height: "16" })));
const ArticleList = Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_5_Graphql_Query__["e" /* ARTICLES */], {
    props: ({ data }) => (Object.assign({}, data)),
});
/* harmony default export */ __webpack_exports__["a"] = (ArticleList(({ loading, articles, error }) => {
    // tslint:disable-next-line:jsx-wrap-multiline
    if (loading) {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_Components_EmptyStates__["b" /* LoadingComponent */], null);
    }
    if (error) {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_Components_EmptyStates__["a" /* ErrorComponent */], null);
    }
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_infinite_scroller___default.a, { pageStart: 0, hasMore: true || false, loader: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-padding-small", style: { backgroundColor: '#fff' } },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](MyLoader, null)) }, articles.map((article) => (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { key: article.id },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_Components_ArticleItem__["a" /* default */], { article: article }))))));
}));


/***/ }),

/***/ "./src/Components/CommentEditor/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_medium_draft_lib_index_css__ = __webpack_require__("./node_modules/medium-draft/lib/index.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_medium_draft_lib_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_medium_draft_lib_index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css__ = __webpack_require__("./src/Components/CommentEditor/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_medium_draft__ = __webpack_require__("medium-draft");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_medium_draft___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_medium_draft__);




class CommentEditor extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    // tslint:disable-next-line:typedef
    constructor(props) {
        super(props);
        this.state = {
            editorState: Object(__WEBPACK_IMPORTED_MODULE_3_medium_draft__["createEditorState"])(),
        };
        this.onChange = (editorState) => {
            this.setState({ editorState });
        };
    }
    componentDidMount() {
        // this.refs.editor.focus();
    }
    render() {
        const { editorState } = this.state;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-1" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_medium_draft__["Editor"], { ref: (ref) => this.editor = ref, editorState: editorState, onChange: this.onChange, placeholder: "Write you comment..." })));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CommentEditor;



/***/ }),

/***/ "./src/Components/CommentEditor/style.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".md-RichEditor-root {\n  background: #fff;\n  box-sizing: border-box;\n  padding: 5px 5px;\n  position: relative;\n  line-height: 1.4em; }\n\n.md-RichEditor-editor {\n  cursor: text;\n  margin-top: 10px;\n  position: relative;\n  margin: 0 auto; }\n  .md-RichEditor-editor h3 {\n    font-size: 1.3em;\n    margin: 1.2em 0; }\n\n.md-RichEditor-editor .public-DraftEditorPlaceholder-root,\n.md-RichEditor-editor .public-DraftEditor-content {\n  margin: 0px -15px -15px;\n  padding: 15px; }\n\n.md-RichEditor-editor .public-DraftEditor-content {\n  min-height: 70px; }\n\n.md-RichEditor-hidePlaceholder .public-DraftEditorPlaceholder-root {\n  display: none; }\n\n.md-RichEditor-editor .md-RichEditor-blockquote {\n  border-left: 5px solid #4CA8DE;\n  color: #555;\n  font-size: 1.2em;\n  margin: 0;\n  padding: 10px 0 10px 20px;\n  background-color: #E2F2FF; }\n\n.md-RichEditor-blockquote a {\n  text-decoration: underline; }\n\n.public-DraftEditor-content .md-block:first-child {\n  margin-top: 0;\n  padding-top: 0; }\n\n.md-RichEditor-editor .public-DraftStyleDefault-pre {\n  background-color: rgba(0, 0, 0, 0.05);\n  font-size: 16px;\n  padding: 20px; }\n\n.public-DraftStyleDefault-unorderedListItem,\n.public-DraftStyleDefault-orderedListItem {\n  margin-bottom: 10px; }\n\n.md-editor-action {\n  position: fixed;\n  top: 5px;\n  left: 5px; }\n  .md-editor-action button {\n    display: block; }\n", ""]);

// exports


/***/ }),

/***/ "./src/Components/ConnectBox/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_infinite_scroller__ = __webpack_require__("react-infinite-scroller");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_infinite_scroller___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_infinite_scroller__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Components_EmptyStates__ = __webpack_require__("./src/Components/EmptyStates/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Graphql_Query__ = __webpack_require__("./src/Graphql/Query/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Components_PersonItem__ = __webpack_require__("./src/Components/PersonItem/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_Components_Label__ = __webpack_require__("./src/Components/Label/index.tsx");







const ConnectBox = Object(__WEBPACK_IMPORTED_MODULE_1_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_4_Graphql_Query__["e" /* ARTICLES */], {
    props: ({ data }) => (Object.assign({}, data)),
});
/* harmony default export */ __webpack_exports__["a"] = (ConnectBox(({ loading, articles, error, refetch }) => {
    if (loading) {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_Components_EmptyStates__["b" /* LoadingComponent */], null);
    }
    if (error) {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_Components_EmptyStates__["a" /* ErrorComponent */], { refresh: refetch });
    }
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-card person" },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_Components_Label__["a" /* default */], { text: "Suggested Connection" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_infinite_scroller___default.a, { pageStart: 0, hasMore: false }, articles.map((article, i) => (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { key: article.id, className: "box" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_PersonItem__["a" /* default */]
            // tslint:disable-next-line:max-line-length
            , { 
                // tslint:disable-next-line:max-line-length
                url: 
                // tslint:disable-next-line:max-line-length
                'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGNpcmNsZSBzdHlsZT0iZmlsbDojNzFFMkVGOyIgY3g9IjI1NiIgY3k9IjI1NiIgcj0iMjU2Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiMzOEM2RDk7IiBkPSJNMjI1LjcyNiw0MzkuNTQ2bDY5LjQ2OCw2OS40NjhDNDE3Ljk3NSw0OTAuMTUxLDUxMiwzODQuMDU3LDUxMiwyNTYgIGMwLTAuNjgxLTAuMDIxLTEuMzU4LTAuMDI2LTIuMDM4TDM1OC44NiwxMDAuODQ4TDIyNS43MjYsNDM5LjU0NnoiLz4KPHJlY3QgeD0iMjEzLjMzMyIgeT0iMjkyLjIxOSIgc3R5bGU9ImZpbGw6I0ZDRDA4ODsiIHdpZHRoPSI4NS4zMzMiIGhlaWdodD0iODUuMzMzIi8+CjxyZWN0IHg9IjI1Ni4yOTMiIHk9IjI5Mi4yMTkiIHN0eWxlPSJmaWxsOiNEREFCNjI7IiB3aWR0aD0iNDIuMzc5IiBoZWlnaHQ9Ijg1LjMzMyIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRDlFREVDOyIgZD0iTTM1Ny43NjQsMzYwLjVsLTQ1LjIyLTkuMDQ0bC03Ljk5Mi0xMS42NjZjLTEuNDk2LTIuMTg0LTQuMzI3LTMuMDA3LTYuNzU5LTEuOTY1TDI1NiwzNTUuODMgIGwtNDEuNTQzLTE3Ljk4N2MtMi40MTUtMS4wNTMtNS4yMzktMC4yNjItNi43NTQsMS44OTNsLTguMjQ3LDExLjcxOWwtNDUuMjIsOS4wNDRjLTIzLjAyNCw0LjYwNi0zOS41OTYsMjQuODIxLTM5LjU5Niw0OC4zdjYwLjY0NyAgQzE1NS4xNDgsNDk2LjMyOCwyMDMuNzQsNTEyLDI1Niw1MTJzMTAwLjg1Mi0xNS42NzIsMTQxLjM2LTQyLjU1NXYtNjAuNjQ3QzM5Ny4zNiwzODUuMzE5LDM4MC43ODcsMzY1LjEwNCwzNTcuNzY0LDM2MC41eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojQzdEOEQ3OyIgZD0iTTM5Ny4zNiw0MDguNzk4YzAtMjMuNDgtMTYuNTc0LTQzLjY5Ni0zOS41OTYtNDguM2wtNDUuMjItOS4wNDRsLTcuOTkyLTExLjY2NiAgYy0xLjQ5Ni0yLjE4NC00LjMyNy0zLjAwNy02Ljc1OS0xLjk2NWwtNDEuNTAzLDE3Ljg4djE1Ni4yODljNTIuMTQ4LTAuMDU3LDEwMC42MzgtMTUuNzE3LDE0MS4wNzItNDIuNTQ5di02MC42NDVIMzk3LjM2eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRkZFREI1OyIgZD0iTTM0Ny41MzEsMjA1LjQ0YzAuNDU5LTQuMjQ0LDAuNjk4LTguNDI4LDAuNjk4LTEyLjUwOWMwLTUzLjk3NC00MS4yOTMtOTcuNzI4LTkyLjIyOS05Ny43MjggIHMtOTIuMjI5LDQzLjc1My05Mi4yMjksOTcuNzI4YzAsNC4wOCwwLjI0LDguMjY0LDAuNjk4LDEyLjUwOWMtOC45NDUsMi4zMjYtMTMuMjAyLDE2LjA4Ny05LjUwNiwzMC44MTcgIGMzLjcwOCwxNC43NzYsMTQuMDE0LDI0LjkyMSwyMy4wMTgsMjIuNjYxYzAuODIxLTAuMjA1LDEuNTg2LTAuNTM4LDIuMzI2LTAuOTI3YzE2LjY2NywzMy40NTIsNDQuMzUxLDYwLjU5NCw3NS42OTMsNjAuNTk0ICBzNTkuMDI3LTI3LjEzOSw3NS42OTMtNjAuNTk0YzAuNzQsMC4zOSwxLjUwNSwwLjcyMiwyLjMyNiwwLjkyN2M5LjAwNCwyLjI2LDE5LjMwOS03Ljg4NSwyMy4wMTgtMjIuNjYxICBDMzYwLjczMiwyMjEuNTI3LDM1Ni40NzYsMjA3Ljc2MywzNDcuNTMxLDIwNS40NHoiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0U4Q0Y4OTsiIGQ9Ik0zNDcuNTMxLDIwNS40NGMwLjQ1OS00LjI0NCwwLjY5OC04LjQyOCwwLjY5OC0xMi41MDljMC01My44NzItNDEuMTM4LTk3LjU1Ni05MS45NDEtOTcuNzIxdjIyMy4zNjUgIGMzMS4yMjMtMC4xNjcsNTguNzktMjcuMjM2LDc1LjQwNS02MC41ODVjMC43NCwwLjM5LDEuNTA1LDAuNzIyLDIuMzI2LDAuOTI3YzkuMDA0LDIuMjYsMTkuMzA5LTcuODg1LDIzLjAxOC0yMi42NjEgIEMzNjAuNzMyLDIyMS41MjcsMzU2LjQ3NiwyMDcuNzYzLDM0Ny41MzEsMjA1LjQ0eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojNDk0OTQ4OyIgZD0iTTIwNC4xNCwxNzAuNjY3YzAsMCw0MC4wODEsMzguMzU3LDEyMS45NjYsMjQuNTY2YzAsMCw3Ljk0LTEuOTk4LDIxLjQyNSwxMC4yMDcgIGMwLDAsMjQuNjkxLTUxLjU4MSwxMS4zMzEtMTA0LjU5MWMwLDAtNDMuNTI5LDUuNjAzLTYyLjkyMy02LjQ2NWMtMTkuMzk0LTEyLjA2Ny03MS4xMTEtMjQuOTk3LTgyLjc0NywxMS4yMDUgIGMwLDAtMzcuNDk1LTQuNzQxLTQ3LjgzOCwzNC4wNDdjLTEwLjM0MywzOC43ODgtMC44ODMsNjUuODAzLTAuODgzLDY1LjgwM1MxODMuODg0LDE1OC41OTksMjA0LjE0LDE3MC42Njd6Ii8+CjxnPgoJPHBhdGggc3R5bGU9ImZpbGw6IzMzMzMzMzsiIGQ9Ik0zNTguODYsMTAwLjg0OGMwLDAtNDMuNTI5LDUuNjAzLTYyLjkyMy02LjQ2NWMtOC44MDktNS40ODItMjQuMjg4LTExLjEyNC0zOS42NS0xMi4yNzZ2MTEyLjUwOSAgIGMxOC4zNTgsMy45MjcsNDEuNjA1LDUuMzY4LDY5LjgxOCwwLjYxNWMwLDAsNy45NC0xLjk5OCwyMS40MjUsMTAuMjA3QzM0Ny41MzEsMjA1LjQ0LDM3Mi4yMjEsMTUzLjg1OSwzNTguODYsMTAwLjg0OHoiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiMzMzMzMzM7IiBkPSJNMjY3LjkxLDUxMS42OTdjMzAuNDg0LTEuMzk4LDU5LjU2NC04LjEzNSw4Ni4zNTQtMTkuMjg3VjM1OS44bC0zNC45MDctNi45ODJMMjY3LjkxLDUxMS42OTd6Ii8+CjwvZz4KPGc+Cgk8cGF0aCBzdHlsZT0iZmlsbDojNDk0OTQ4OyIgZD0iTTI0NC4wOSw1MTEuNjk3Yy0zMC40ODQtMS4zOTgtNTkuNTY0LTguMTM1LTg2LjM1NC0xOS4yODdWMzU5LjhsMzQuOTA3LTYuOTgyTDI0NC4wOSw1MTEuNjk3eiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6IzQ5NDk0ODsiIGQ9Ik0yOTAuMjQ1LDM1NS45MjRsLTI0LjA2MSw4LjgxNGMtMC4zOTgtMS4yNDUtMS41NTItMi4xNTEtMi45MjktMi4xNTFoLTEzLjY0OCAgIGMtMS4zNywwLTIuNTIsMC45LTIuOTI0LDIuMTM2bC0yNC4wMTctOC43OTljLTQuMTYtMS41MjQtOC41NjYsMS41NTUtOC41NjYsNS45ODV2MzAuMzk2YzAsNC40MjksNC40MDYsNy41MDksOC41NjYsNS45ODUgICBsMjQuMDE3LTguNzk5YzAuNDAzLDEuMjM2LDEuNTUyLDIuMTM2LDIuOTI0LDIuMTM2aDEzLjY0OGMxLjM3NywwLDIuNTI5LTAuOTA3LDIuOTI5LTIuMTUxbDI0LjA2MSw4LjgxNCAgIGM0LjE2LDEuNTI0LDguNTY2LTEuNTU1LDguNTY2LTUuOTg1VjM2MS45MUMyOTguODExLDM1Ny40NzksMjk0LjQwNSwzNTQuNDAxLDI5MC4yNDUsMzU1LjkyNHoiLz4KPC9nPgo8cGF0aCBzdHlsZT0iZmlsbDojMzMzMzMzOyIgZD0iTTI5MC4yNDUsMzU1LjkyNGwtMjQuMDYxLDguODE0Yy0wLjM5OC0xLjI0NS0xLjU1Mi0yLjE1MS0yLjkyOS0yLjE1MWgtNi45Njh2MjkuMDQxaDYuOTY4ICBjMS4zNzcsMCwyLjUyOS0wLjkwNywyLjkyOS0yLjE1MWwyNC4wNjEsOC44MTRjNC4xNiwxLjUyNCw4LjU2Ni0xLjU1NSw4LjU2Ni01Ljk4NVYzNjEuOTEgIEMyOTguODExLDM1Ny40NzksMjk0LjQwNSwzNTQuNDAxLDI5MC4yNDUsMzU1LjkyNHoiLz4KPGc+Cgk8Y2lyY2xlIHN0eWxlPSJmaWxsOiNBREFEQUQ7IiBjeD0iMjU2IiBjeT0iNDEwLjI5IiByPSI0LjMxIi8+Cgk8Y2lyY2xlIHN0eWxlPSJmaWxsOiNBREFEQUQ7IiBjeD0iMjU2IiBjeT0iNDMzLjEzMSIgcj0iNC4zMSIvPgoJPGNpcmNsZSBzdHlsZT0iZmlsbDojQURBREFEOyIgY3g9IjI1NiIgY3k9IjQ1NS45NzMiIHI9IjQuMzEiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K', name: `${article.author.firstname} ${article.author.lastname}` })))))));
}));


/***/ }),

/***/ "./src/Components/Editor2/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_medium_draft_lib_index_css__ = __webpack_require__("./node_modules/medium-draft/lib/index.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_medium_draft_lib_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_medium_draft_lib_index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_medium_draft__ = __webpack_require__("medium-draft");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_medium_draft___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_medium_draft__);



class UnizonnEditor extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    // tslint:disable-next-line:typedef
    constructor(props) {
        super(props);
        this.state = {
            editorState: Object(__WEBPACK_IMPORTED_MODULE_2_medium_draft__["createEditorState"])(),
        };
        this.onChange = (editorState) => {
            this.setState({ editorState });
        };
    }
    componentDidMount() {
        // this.refs.editor.focus();
    }
    render() {
        const { editorState } = this.state;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_medium_draft__["Editor"], { ref: (ref) => this.editor = ref, editorState: editorState, onChange: this.onChange }));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = UnizonnEditor;



/***/ }),

/***/ "./src/Components/InputBoxLogin/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Graphql_Query__ = __webpack_require__("./src/Graphql/Query/index.ts");




// tslint:disable-next-line:no-any
class InputBoxLogin extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.state = {
            text: '',
            loading: false,
        };
        this.checkUser = (e) => {
            e.preventDefault();
            this.setState({ loading: true });
            this.props.client
                .query({
                query: __WEBPACK_IMPORTED_MODULE_3_Graphql_Query__["h" /* USER_EXIST */],
                variables: {
                    email: this.state.text,
                },
            })
                .then(({ data }) => {
                data.userExist
                    ? this.props.history.push({
                        pathname: '/login',
                        email: this.state.text,
                    })
                    : this.props.history.push({
                        pathname: '/signup',
                        email: this.state.text,
                    });
                this.setState({ loading: false });
            })
                .catch((error) => {
                this.setState({ loading: false });
            });
        };
    }
    render() {
        const { loading } = this.state;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h1", { className: "uk-heading-primary uk-text-bold uk-text-uppercase" }, "unizonn"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { className: " uk-text-center uk-margin uk-text-bold" }, "Friendly and inclusive community for students and academia"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-flex-stretch" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("form", { onSubmit: this.checkUser, className: "uk-margin uk-flex-stretch", "uk-margin": true },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin uk-flex uk-width-1-1", "uk-margin": true },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { "uk-form-custom": "target: true", className: "uk-width-3-4@m uk-width-1-1@s" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { type: "email", onChange: (e) => this.setState({ text: e.target.value }), value: this.state.text, required: true, className: "uk-input uk-box-shadow-hover-small uk-responsive-width uk-form-large", placeholder: "Enter email to signin or signup" })),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-4@m uk-width-1-1@s" }, loading ? (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { "data-uk-spinner": "ratio: 1", style: { marginLeft: 15, color: 'green' } })) : (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "uk-button uk-button-primary uk-button-large", type: "submit" }, "GETSTARTED"))))))));
    }
}
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["withRouter"])(Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["compose"])(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["withApollo"], Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_3_Graphql_Query__["h" /* USER_EXIST */], {
    name: 'userExist',
    options: { variables: { email: '' } },
}))(InputBoxLogin)));


/***/ }),

/***/ "./src/Components/InterestItem/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

// tslint:disable-next-line:typedef
const InterestItem = (props) => {
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { key: props.key, className: "uk-tile uk-tile-secondary", style: { backgroundImage: props.url } },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: `uk-button ${props.checked ? 'uk-button-secondary uk-light' : 'uk-button-default uk-dark'} 
        uk-button-small uk-align-center`, onClick: () => props.onClickAdd(props.id) }, props.name)));
};
/* harmony default export */ __webpack_exports__["a"] = (InterestItem);


/***/ }),

/***/ "./src/Components/Layouts/MainLayout/Profile/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Components_ProfileLeft__ = __webpack_require__("./src/Components/ProfileLeft/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_css__ = __webpack_require__("./src/Components/Layouts/MainLayout/Profile/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4____ = __webpack_require__("./src/Components/Layouts/MainLayout/index.tsx");
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};





const ProfileLayout = (props) => {
    const { component: Component, isAuthenticated, exact, refreshToken } = props, rest = __rest(props, ["component", "isAuthenticated", "exact", "refreshToken"]);
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4____["a" /* EmptyLayout */], Object.assign({}, rest, { isAuthenticated: isAuthenticated, exact: exact !== null ? exact : true, component: (matchProps) => isAuthenticated ? (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-1" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-cover-container uk-height-medium uk-card uk-card-default uk-background-primary" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("canvas", { width: "", height: "" }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: "https://getuikit.com/docs/images/photo.jpg", alt: "cover image", "uk-cover": "ratio: 1", className: "uk-blend-hard-darken" })),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-card uk-card-default uk-padding-small" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-text-right" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { "uk-switcher": "animation: uk-animation-fade" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "uk-button uk-button-text uk-margin-right", type: "button" }, "Post"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "uk-button uk-button-text uk-margin-right", type: "button" }, "Connections"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "uk-button uk-button-text uk-margin-right", type: "button" }, "Activity"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "uk-button uk-button-secondary uk-button-small" }, "Edit Profile")))),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-flex uk-flex-stretch uk-width-1-1" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-3" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_Components_ProfileLeft__["a" /* default */], null)),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-2-3" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Component, Object.assign({}, matchProps, { refreshToken: refreshToken })))))) : (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Redirect"], { to: { pathname: '/' } })) })));
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["withRouter"])(ProfileLayout));


/***/ }),

/***/ "./src/Components/Layouts/MainLayout/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_Components_Layouts_MainLayout_Public__ = __webpack_require__("./src/Components/Layouts/MainLayout/Public/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Components_Layouts_MainLayout_Private__ = __webpack_require__("./src/Components/Layouts/MainLayout/Private/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Components_Layouts_MainLayout_Normal__ = __webpack_require__("./src/Components/Layouts/MainLayout/Normal/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Components_Layouts_MainLayout_Profile__ = __webpack_require__("./src/Components/Layouts/MainLayout/Profile/index.tsx");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0_Components_Layouts_MainLayout_Public__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1_Components_Layouts_MainLayout_Private__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2_Components_Layouts_MainLayout_Normal__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3_Components_Layouts_MainLayout_Profile__["a"]; });







/***/ }),

/***/ "./src/Components/Map/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose__ = __webpack_require__("recompose");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_google_maps__ = __webpack_require__("react-google-maps");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_google_maps___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_google_maps__);



const MapComponent = Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["withProps"])({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places',
    loadingElement: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { height: `100%` } }),
    containerElement: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { height: `400px` } }),
    mapElement: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { height: `100%` } }),
}), __WEBPACK_IMPORTED_MODULE_2_react_google_maps__["withScriptjs"], __WEBPACK_IMPORTED_MODULE_2_react_google_maps__["withGoogleMap"])((props) => (
// tslint:disable-next-line:jsx-wrap-multiline
__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], null,
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_google_maps__["GoogleMap"], { defaultZoom: 8, defaultCenter: {
            lat: props.lat,
            lng: props.lng,
        } }, props.isMarkerShown && (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_google_maps__["Marker"], { position: { lat: props.lat, lng: props.lng }, onClick: props.onMarkerClick }))))));
/* harmony default export */ __webpack_exports__["a"] = (MapComponent);


/***/ }),

/***/ "./src/Components/ProfileLeft/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Graphql_Query__ = __webpack_require__("./src/Graphql/Query/index.ts");




// tslint:disable-next-line:no-any
class ProfileLeft extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.state = {
            text: '',
            loading: false,
        };
        this.checkUser = (e) => {
            e.preventDefault();
            this.setState({ loading: true });
            this.props.client
                .query({
                query: __WEBPACK_IMPORTED_MODULE_3_Graphql_Query__["h" /* USER_EXIST */],
                variables: {
                    email: this.state.text,
                },
            })
                .then(({ data }) => {
                data.userExist
                    ? this.props.history.push({
                        pathname: '/login',
                        email: this.state.text,
                    })
                    : this.props.history.push({
                        pathname: '/signup',
                        email: this.state.text,
                    });
                this.setState({ loading: false });
            })
                .catch((error) => {
                this.setState({ loading: false });
            });
        };
    }
    render() {
        // const { loading } = this.state;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-card uk-card-default uk-width-1-1" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h1", null, "Rex Raphael"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h1", null, "21 Connections"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, "Xfullstack Engineer, Dev Ops Manager, with great love for javascript and nodejs"))));
    }
}
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["withRouter"])(Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["compose"])(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["withApollo"], Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_3_Graphql_Query__["h" /* USER_EXIST */], {
    name: 'user',
    options: { variables: { email: '' } },
}))(ProfileLeft)));


/***/ }),

/***/ "./src/Components/TopInterest/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Components_InterestItemSlim__ = __webpack_require__("./src/Components/InterestItemSlim/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Components_EmptyStates__ = __webpack_require__("./src/Components/EmptyStates/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Graphql_Query__ = __webpack_require__("./src/Graphql/Query/index.ts");





const TopInterest = Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_4_Graphql_Query__["d" /* ALL_INTEREST */], {
    props: ({ data }) => (Object.assign({}, data)),
});
/* harmony default export */ __webpack_exports__["a"] = (TopInterest(({ loading, allInterest, error }) => {
    if (loading) {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_Components_EmptyStates__["b" /* LoadingComponent */], null);
    }
    if (error) {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_Components_EmptyStates__["a" /* ErrorComponent */], null);
    }
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "tags-wrapper undefined" }, allInterest.map((interest, i) => (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_Components_InterestItemSlim__["a" /* default */], { key: interest.id, url: interest.avatar, name: interest.name })))));
}));


/***/ }),

/***/ "./src/Containers/App/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_helmet__ = __webpack_require__("react-helmet");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Components_Layouts_MainLayout__ = __webpack_require__("./src/Components/Layouts/MainLayout/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Components_Layouts_Header__ = __webpack_require__("./src/Components/Layouts/Header/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Components_Loading__ = __webpack_require__("./src/Components/Loading/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_Components_Layouts_SideBar__ = __webpack_require__("./src/Components/Layouts/SideBar/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_Graphql_Query__ = __webpack_require__("./src/Graphql/Query/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_Theme_application_css__ = __webpack_require__("./src/Theme/application.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_Theme_application_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_Theme_application_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__style_scss__ = __webpack_require__("./src/Containers/App/style.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_loadable__ = __webpack_require__("react-loadable");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_loadable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_react_loadable__);


// import { asyncComponent } from 'react-async-component';

// import NotFound from '../NotFound';






// import Profile from '../Profile';



const Home = __WEBPACK_IMPORTED_MODULE_11_react_loadable___default()({
    loader: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/Home/index.tsx")),
    loading: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Loading__["a" /* default */], null),
});
const NotFound = __WEBPACK_IMPORTED_MODULE_11_react_loadable___default()({
    loader: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/NotFound/index.tsx")),
    loading: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Loading__["a" /* default */], null),
});
const Profile = __WEBPACK_IMPORTED_MODULE_11_react_loadable___default()({
    loader: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/Profile/index.tsx")),
    loading: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Loading__["a" /* default */], null),
});
const PublicHome = __WEBPACK_IMPORTED_MODULE_11_react_loadable___default()({
    loader: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/HomePublic/index.tsx")),
    loading: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Loading__["a" /* default */], null),
});
const Login = __WEBPACK_IMPORTED_MODULE_11_react_loadable___default()({
    loader: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/Auth/Login/index.tsx")),
    loading: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Loading__["a" /* default */], null),
});
const Signup = __WEBPACK_IMPORTED_MODULE_11_react_loadable___default()({
    loader: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/Auth/Signup/index.tsx")),
    loading: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Loading__["a" /* default */], null),
});
const ArticleDetail = __WEBPACK_IMPORTED_MODULE_11_react_loadable___default()({
    loader: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/ArticleDetail/index.tsx")),
    loading: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Loading__["a" /* default */], null),
});
const Interest = __WEBPACK_IMPORTED_MODULE_11_react_loadable___default()({
    loader: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/Auth/Signup/interest.tsx")),
    loading: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Loading__["a" /* default */], null),
});
const Maps = __WEBPACK_IMPORTED_MODULE_11_react_loadable___default()({
    loader: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/Maps/index.tsx")),
    loading: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Loading__["a" /* default */], null),
});
const Compose = __WEBPACK_IMPORTED_MODULE_11_react_loadable___default()({
    loader: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/ComposeArticle/index.tsx")),
    loading: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Loading__["a" /* default */], null),
});
const Message = __WEBPACK_IMPORTED_MODULE_11_react_loadable___default()({
    loader: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/Message/index.tsx")),
    loading: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Loading__["a" /* default */], null),
});
const Forum = __WEBPACK_IMPORTED_MODULE_11_react_loadable___default()({
    loader: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/Forum/index.tsx")),
    loading: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Loading__["a" /* default */], null),
});
const FinishSignup = __WEBPACK_IMPORTED_MODULE_11_react_loadable___default()({
    loader: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/Auth/Signup/finishSignup.tsx")),
    loading: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Loading__["a" /* default */], null),
});
const SignupProfile = __WEBPACK_IMPORTED_MODULE_11_react_loadable___default()({
    loader: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/Auth/Signup/signupProfile.tsx")),
    loading: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Loading__["a" /* default */], null),
});
class App extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.state = {
            isAuthenticated: false,
            token: '',
            expireToken: false,
            avatar: '',
            me: {
                id: '',
                firstname: '',
                lastname: '',
                email: '',
            },
        };
        this.refreshToken = (token) => {
            this.setState({
                token,
            });
            if (token !== '' && token !== undefined) {
                this.setState({
                    isAuthenticated: true,
                });
                // this.loadMe();
            }
        };
        this._logout = () => {
            // localStorage.removeItem(AUTH_TOKEN);
            this.setState({ isAuthenticated: false });
            this.setState({ token: '' });
            this.setState({ expireToken: false });
        };
    }
    componentWillMount() {
        /* const token = localStorage.getItem(AUTH_TOKEN);
        if (token !== null && token !== undefined) {
            const expired = isTokenExpired(token);
            if (!expired) {
                this.setState({ isAuthenticated: true });
                this.setState({ token });
                this.setState({ expireToken: expired });
                this.loadMe();
            } else {
                localStorage.removeItem(AUTH_TOKEN);
                this.setState({ isAuthenticated: false });
                this.setState({ token: '' });
                this.setState({ expireToken: false });
            }
        }*/
    }
    componentDidMount() {
        // this.props.
        // tslint:disable-next-line:no-console
        console.log(this.props.me);
    }
    loadMe() {
        this.props.client
            .query({
            query: __WEBPACK_IMPORTED_MODULE_7_Graphql_Query__["g" /* ME */],
        })
            .then(({ data }) => {
            // tslint:disable-next-line:no-console
            console.log(data.me);
            this.setState({ me: data.me });
            if (data.me.completedProfile === 1) {
                this.props.history.replace('/add/profile');
            }
            else if (data.me.completedProfile === 2) {
                this.props.history.replace('/add/interest');
            }
            this.setState({ avatar: data.me.avata.url });
            // tslint:disable-next-line:no-console
            console.log(this.state.avatar);
        })
            .catch((error) => {
            // localStorage.removeItem(AUTH_TOKEN);
            if (error) {
                // tslint:disable-next-line:no-console
                console.log('grooom');
                // this.setState({isAuthenticated: false});
                this.setState({ token: '' });
                this.setState({ expireToken: false });
            }
        });
    }
    render() {
        const { isAuthenticated } = this.state;
        // const userAuthed = token ? true : false;
        // tslint:disable-next-line:no-console
        console.log(isAuthenticated);
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-offcanvas-content bg-muted", style: { minHeight: '90vh', backgroundColor: '#e4e6eb' } },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_helmet__["Helmet"], null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("title", null, "Unizonn Here"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", { name: "an inclusive community", content: "Unizonn community" })),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_Components_Layouts_Header__["a" /* PrivateHeader */], { avatar: this.state.avatar, isAuthenticated: isAuthenticated, logout: this._logout }),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Switch"], null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { exact: true, path: "/", render: () => isAuthenticated ? (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_Components_Layouts_MainLayout__["b" /* PrivateLayout */], { component: Home, isAuthenticated: isAuthenticated })) : (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_Components_Layouts_MainLayout__["d" /* PublicLayout */], { component: PublicHome, isAuthenticated: isAuthenticated })) }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_Components_Layouts_MainLayout__["b" /* PrivateLayout */], { component: Home, path: "/home", isAuthenticated: isAuthenticated }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_Components_Layouts_MainLayout__["d" /* PublicLayout */], { component: Login, refreshToken: this.refreshToken, path: "/login", isAuthenticated: isAuthenticated }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_Components_Layouts_MainLayout__["d" /* PublicLayout */], { component: Login, exact: true, refreshToken: this.refreshToken, path: "/login/:email", isAuthenticated: isAuthenticated }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_Components_Layouts_MainLayout__["d" /* PublicLayout */], { component: Signup, refreshToken: this.refreshToken, path: "/signup", isAuthenticated: isAuthenticated }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_Components_Layouts_MainLayout__["d" /* PublicLayout */], { component: Signup, exact: true, refreshToken: this.refreshToken, path: "/signup/:email", isAuthenticated: isAuthenticated }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_Components_Layouts_MainLayout__["a" /* EmptyLayout */], { component: FinishSignup, path: "/signup/complete", isAuthenticated: isAuthenticated }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_Components_Layouts_MainLayout__["a" /* EmptyLayout */], { exact: true, component: SignupProfile, path: "/add/profile", isAuthenticated: isAuthenticated }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_Components_Layouts_MainLayout__["a" /* EmptyLayout */], { path: "/article/:slug", isAuthenticated: isAuthenticated, component: ArticleDetail }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_Components_Layouts_MainLayout__["a" /* EmptyLayout */], { component: Interest, path: "/add/interest", isAuthenticated: isAuthenticated }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_Components_Layouts_MainLayout__["a" /* EmptyLayout */], { component: Maps, path: "/library", isAuthenticated: isAuthenticated }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_Components_Layouts_MainLayout__["a" /* EmptyLayout */], { component: Message, path: "/message", isAuthenticated: isAuthenticated }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_Components_Layouts_MainLayout__["a" /* EmptyLayout */], { component: Forum, path: "/Forum", isAuthenticated: isAuthenticated }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_Components_Layouts_MainLayout__["a" /* EmptyLayout */], { component: Compose, path: "/write", isAuthenticated: isAuthenticated }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_Components_Layouts_MainLayout__["c" /* ProfileLayout */], { component: Profile, path: "/profile", isAuthenticated: isAuthenticated }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_Components_Layouts_MainLayout__["c" /* ProfileLayout */], { component: Profile, path: "/profile/:id", isAuthenticated: isAuthenticated }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { component: NotFound, path: "*" }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_Components_Layouts_MainLayout__["b" /* PrivateLayout */], { path: "/logout", isAuthenticated: isAuthenticated, render: () => this._logout() })),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_Components_Layouts_SideBar__["a" /* default */], null)));
    }
}
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["withRouter"])(Object(__WEBPACK_IMPORTED_MODULE_8_react_apollo__["compose"])(__WEBPACK_IMPORTED_MODULE_8_react_apollo__["withApollo"], Object(__WEBPACK_IMPORTED_MODULE_8_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_7_Graphql_Query__["g" /* ME */]))(App)));


/***/ }),

/***/ "./src/Containers/ArticleDetail/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Components_Avatar__ = __webpack_require__("./src/Components/Avatar/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Components_ArticleItem__ = __webpack_require__("./src/Components/ArticleItem/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Components_CommentEditor__ = __webpack_require__("./src/Components/CommentEditor/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_Components_TopInterest__ = __webpack_require__("./src/Components/TopInterest/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_Components_LikeButton__ = __webpack_require__("./src/Components/LikeButton/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_Components_PopoverLink__ = __webpack_require__("./src/Components/PopoverLink/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_timeago__ = __webpack_require__("react-timeago");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_timeago___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_timeago__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__style_css__ = __webpack_require__("./src/Containers/ArticleDetail/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_Graphql_Query__ = __webpack_require__("./src/Graphql/Query/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_Components_Label__ = __webpack_require__("./src/Components/Label/index.tsx");













class ArticleDetail extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.state = {
            // tslint:disable-next-line:no-object-literal-type-assertion
            currentArticle: {},
            loading: true,
        };
    }
    componentWillMount() {
        const { match: { params } } = this.props;
        // tslint:disable-next-line:no-console
        console.log(params);
        if (params.slug) {
            this.fetchArticleandOthers(params.slug);
        }
        else {
            this.props.history.goBack();
        }
    }
    // tslint:disable-next-line:typedef
    componentDidUpdate(prevProps) {
        // tslint:disable-next-line:no-console
        console.log(prevProps);
        const oldId = prevProps.match.params.slug;
        const newId = this.props.match.params.slug;
        // tslint:disable-next-line:no-console
        console.log(oldId);
        if (newId !== oldId) {
            this.fetchArticleandOthers(oldId);
        }
    }
    fetchArticleandOthers(slugOrId) {
        this.props.client
            .query({
            query: __WEBPACK_IMPORTED_MODULE_11_Graphql_Query__["f" /* GET_ARTICLE_BY_ID */],
            variables: {
                id: slugOrId,
            },
        })
            .then((result) => {
            // tslint:disable-next-line:no-console
            console.log(result.data.getArticleById);
            this.setState({ currentArticle: result.data.getArticleById, loading: false });
        })
            .catch((err) => {
            // tslint:disable-next-line:no-console
            console.log(err);
            this.props.history.replace('/not-found');
        });
    }
    componentWillUnmount() {
        // allows us to ignore
    }
    renderArticle(article) {
        const { author } = article;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-card uk-card-small uk-width-1-1", style: { borderRadius: 1, marginBottom: 22, padding: 10, backgroundColor: '#fff' } },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-1 post-metadata uk-padding-remove-bottom uk-padding-small" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-grid-small uk-flex uk-width-4-5", "uk-grid": true },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-auto" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_Components_Avatar__["a" /* default */], { url: 'https://getuikit.com/docs/images/avatar.jpg', size: 50, presence: false })),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-auto post-info" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8_Components_PopoverLink__["a" /* default */], { bigger: true, link: article.id },
                            author.firstname,
                            " ",
                            author.lastname),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { className: "uk-text-meta uk-margin-remove-top" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("time", { dateTime: article.createdAt },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_9_react_timeago___default.a, { className: "timeago", date: article.createdAt }),
                                " ago \u0095",
                                ' ',
                                article.body.lengthInMinutes())))),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-5 uk-flex-center" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "uk-button uk-button-primary uk-button-small" }, "Connect"))),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-card-body uk-padding-remove-vertical", style: { paddingTop: 10, borderBottom: 1 } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h5", { className: "uk-text-medium uk-text-bold uk-text-break", style: { fontSize: 23, fontFamily: 'Open Sans' } }, article.title),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { style: { color: '#212121', fontSize: 17 } }, article.body)),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-padding-small" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_Components_TopInterest__["a" /* default */], null)),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "post-stats clearfix uk-padding-small uk-padding-remove-horizontal", style: { paddingTop: 10, paddingBottom: 1 } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-flex pull-left uk-padding-small" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7_Components_LikeButton__["a" /* default */], { liked: true, likeCount: 2 }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { className: "response-count uk-margin-left" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { "uk-icon": "icon:  forward; ratio: 1.2" }),
                        "Share")),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-flex  response-count pull-right uk-padding-small" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "dropdown" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "uk-button uk-button-text uk-margin-right", type: "button" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { "uk-icon": "icon: more; ratio: 1.0" })),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { "data-uk-drop": "mode: click; pos: bottom-right" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("ul", { className: "menu" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { className: "menu-item uk-padding-small" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#", className: "uk-text-bold" },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { "uk-icon": "icon: plus-circle; ratio: 1" }),
                                        " Activity")),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { className: "menu-item uk-padding-small" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#", className: "uk-text-bold" },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { "uk-icon": "icon: warning; ratio: 1" }),
                                        " Don't like this")),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { className: "menu-item uk-padding-small" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#", className: "uk-text-bold" },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { "uk-icon": "icon: info; ratio: 1" }),
                                        " Report"))))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "uk-button uk-button-text" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { "uk-icon": "icon: bookmark; ratio: 1.2" }),
                        " Favourite")))));
    }
    renderCommentBox() {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-card uk-card-small uk-width-1-1", style: { borderRadius: 1, marginBottom: 30, padding: 10, backgroundColor: '#fff' } },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-grid-small uk-flex", "uk-grid": true, style: { padding: 0, marginTop: 3 } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-auto" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_Components_Avatar__["a" /* default */], { url: 'https://getuikit.com/docs/images/avatar.jpg', size: 30, presence: false })),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-auto post-info" }, "John Doe")),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_CommentEditor__["a" /* default */], null),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "uk-button uk-button-primary uk-button-small uk-text-right" }, "Comment")));
    }
    renderComment() {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("article", { className: "uk-comment uk-visible-toggle uk-padding-small", style: { backgroundColor: '#fff', marginBottom: 10 } },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("header", { className: "uk-comment-header uk-position-relative" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-grid-medium uk-flex-middle", "data-uk-grid": true },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-auto" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_Components_Avatar__["a" /* default */], { url: "https://getuikit.com/docs/images/avatar.jpg", size: 40, presence: false })),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-expand" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h4", { className: "uk-comment-title uk-margin-remove" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { className: "uk-link-reset", href: "#" }, "Author")),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { className: "uk-comment-meta uk-margin-remove-top" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { className: "uk-link-reset", href: "#" }, "12 days ago")))),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-position-top-right uk-position-small uk-hidden-hover" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { className: "uk-link-muted", href: "#" }, "Reply"))),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-comment-body" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."))));
    }
    renderCommentList() {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-card uk-card-small uk-card-small uk-width-1-1", style: { backgroundColor: 'transparent' } },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_12_Components_Label__["a" /* default */], { text: "Comment responses" }),
            this.renderComment(),
            this.renderComment(),
            this.renderComment(),
            this.renderComment(),
            this.renderComment(),
            this.renderComment()));
    }
    render() {
        if (this.state.loading) {
            // tslint:disable-next-line:jsx-wrap-multiline
            return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-position-center" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "loader uk-margin-small" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "bullet" }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "bullet" }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "bullet" }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "bullet" }))));
        }
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-1 uk-padding" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "uk-button uk-button-primary uk-button-small uk-margin-bottom-right", onClick: () => this.props.history.goBack() }, "Go Back"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-1 uk-grid uk-flex-stretch" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-2-3@m uk-width-3-3@s" },
                    this.renderArticle(this.state.currentArticle),
                    this.renderCommentBox(),
                    this.renderCommentList()),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-3@m uk-width-1-1@s" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_12_Components_Label__["a" /* default */], { text: "Similar articles" }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_Components_ArticleItem__["a" /* default */], { article: this.state.currentArticle, small: true }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_Components_ArticleItem__["a" /* default */], { article: this.state.currentArticle, small: true }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_Components_ArticleItem__["a" /* default */], { article: this.state.currentArticle, small: true })))));
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["withRouter"])(Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["compose"])(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["withApollo"])(ArticleDetail)));


/***/ }),

/***/ "./src/Containers/ArticleDetail/style.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./src/Containers/Auth/Login/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_helmet__ = __webpack_require__("react-helmet");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Graphql_Mutation__ = __webpack_require__("./src/Graphql/Mutation/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Utils_helpers__ = __webpack_require__("./src/Utils/helpers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_uikit__ = __webpack_require__("uikit");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_uikit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_uikit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__style_css__ = __webpack_require__("./src/Containers/Auth/Login/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__constants__ = __webpack_require__("./src/constants.ts");









class Login extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.state = {
            show: false,
            email: '',
            password: '',
            everFocusedEmail: false,
            everFocusedPassword: false,
            inFocus: '',
            loading: false,
        };
        this.handleEmailChange = (evt) => {
            this.setState({ email: evt.target.value });
        };
        this.handlePasswordChange = (evt) => {
            this.setState({ password: evt.target.value });
        };
        this.handleSubmit = (evt) => {
            evt.preventDefault();
            if (!this.canBeSubmitted()) {
                return;
            }
            this.setState({ loading: true });
            const { email, password } = this.state;
            this.props
                .login({
                variables: {
                    email,
                    password,
                },
            })
                .then((result) => {
                const token = result.data.login.token;
                const user = result.data.login.user;
                localStorage.setItem(__WEBPACK_IMPORTED_MODULE_8__constants__["a" /* AUTH_TOKEN */], token);
                localStorage.setItem(__WEBPACK_IMPORTED_MODULE_8__constants__["b" /* CURRENT_USER */], result.data.login.user);
                this.props.refreshToken(token);
                this.setState({ loading: false });
                if (user.completedProfile === 1) {
                    this.props.history.replace('/add/profile');
                }
                else {
                    this.props.history.replace('/');
                }
            })
                .catch((err) => {
                this.setState({ loading: false });
                __WEBPACK_IMPORTED_MODULE_6_uikit__["notification"](`Error: ${err.message}`, { status: 'danger', pos: 'top-right' });
            });
        };
    }
    componentWillMount() {
        const email = this.props.location.email;
        if (email) {
            this.setState({ email });
        }
    }
    canBeSubmitted() {
        const errors = Object(__WEBPACK_IMPORTED_MODULE_5_Utils_helpers__["a" /* validateLogin */])(this.state.email, this.state.password);
        const isDisabled = Object.keys(errors).some((x) => errors[x]);
        return !isDisabled;
    }
    render() {
        const errors = Object(__WEBPACK_IMPORTED_MODULE_5_Utils_helpers__["a" /* validateLogin */])(this.state.email, this.state.password);
        const isDisabled = Object.keys(errors).some((x) => errors[x]);
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-flex uk-flex-stretch", "data-uk-grid": true, style: { height: '100vh', backgroundColor: '#ffffff' } },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_helmet__["Helmet"], null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("title", null, "Unizonn | Login"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", { name: "an inclusive community", content: "Unizonn login" })),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-2-5 sideBg uk-visible@m", id: "sideBg" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-flex uk-flex-stretch uk-flex-middle" }, ".")),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-container uk-width-3-5@m uk-width-1-1@s uk-flex\n          uk-flex-stretch uk-flex-middle uk-box-shadow-small" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("form", { className: "uk-form-vertical uk-width-1-1 uk-margin-large uk-padding-large uk-padding-remove-vertical", onSubmit: this.handleSubmit },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", { className: "uk-heading-primary uk-align-center" }, "Login ")),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-inline uk-width-1-1" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "uk-form-icon", "uk-icon": "icon: user" }),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { className: `uk-input ${errors.password ? 'uk-form-danger' : ''} `, type: "email", value: this.state.email, required: true, onChange: this.handleEmailChange }))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-inline uk-width-1-1" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "uk-form-icon", "uk-icon": "icon: lock" }),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { className: `uk-input ${errors.password ? 'uk-form-danger' : ''} `, type: "password", value: this.state.password, required: true, onChange: this.handlePasswordChange }))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { className: `uk-button uk-button-text}` }, "Forgot password?")),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" }, this.state.loading ? (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-spinner uk-icon", "data-uk-spinner": "ratio: 1", style: { color: 'green' } })) : (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: `uk-button uk-button-primary uk-width-1-1
                    uk-align-right ${isDisabled ? 'disabled' : 'disabled'}`, type: "submit" }, "LOGIN"))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("hr", { className: "uk-divider-icon" }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { className: `uk-button uk-button-text}` }, "Don't have an account?"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"], { className: `uk-button uk-button-secondary
                 uk-align-right`, to: "/signup" }, "Sign up now"))))));
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["withRouter"])(Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["compose"])(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["withApollo"], Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_4_Graphql_Mutation__["c" /* LOGIN_USER */], {
    name: 'login',
}))(Login)));


/***/ }),

/***/ "./src/Containers/Auth/Login/style.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, "#sideBg {\n  background: url(" + __webpack_require__("./src/Assets/bg8.svg") + "), url(" + __webpack_require__("./src/Assets/bg4.svg") + "), url(" + __webpack_require__("./src/Assets/bg2.svg") + ") 40px;\n  background-position: right bottom, right top, bottom right;\n  background-repeat: no-repeat, no-repeat, repeat-x;\n  background-size: auto, auto, 60%; }\n\n.sideBg {\n  background: url(" + __webpack_require__("./src/Assets/bg8.svg") + "), url(" + __webpack_require__("./src/Assets/bg4.svg") + "), url(" + __webpack_require__("./src/Assets/bg2.svg") + ") 40px;\n  background-position: right bottom, right top, bottom right;\n  background-repeat: no-repeat, no-repeat, repeat-x;\n  background-size: auto, auto, 60%; }\n", ""]);

// exports


/***/ }),

/***/ "./src/Containers/Auth/Signup/finishSignup.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css__ = __webpack_require__("./src/Containers/Auth/Signup/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__style_css__);



class FinishPage extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    render() {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-1", style: { height: '100vh', backgroundColor: 'teal' } }, "Finihesd"));
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["withRouter"])(FinishPage));


/***/ }),

/***/ "./src/Containers/Auth/Signup/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Graphql_Mutation__ = __webpack_require__("./src/Graphql/Mutation/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Utils_helpers__ = __webpack_require__("./src/Utils/helpers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_uikit__ = __webpack_require__("uikit");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_uikit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_uikit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants__ = __webpack_require__("./src/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__style_css__ = __webpack_require__("./src/Containers/Auth/Signup/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__style_css__);








class Signup extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.state = {
            show: false,
            email: '',
            username: '',
            password: '',
            confirmPassword: '',
            gender: '',
            userType: '',
            firstname: '',
            lastname: '',
            everFocusedEmail: false,
            everFocusedPassword: false,
            inFocus: '',
            loading: false,
        };
        this.handleEmailChange = (evt) => {
            this.setState({ email: evt.target.value });
        };
        this.handlePasswordChange = (evt) => {
            this.setState({ password: evt.target.value });
        };
        this.handleConPasswordChange = (evt) => {
            this.setState({ confirmPassword: evt.target.value });
        };
        this.handleUsernameChange = (evt) => {
            this.setState({ username: evt.target.value });
        };
        this.handleFnameChange = (evt) => {
            this.setState({ firstname: evt.target.value });
        };
        this.handleLnameChange = (evt) => {
            this.setState({ lastname: evt.target.value });
        };
        this.handleUserTypeChange = (evt) => {
            this.setState({ userType: evt.target.value });
        };
        this.handleGenderChange = (evt) => {
            this.setState({ gender: evt.target.value });
        };
        this.handleSubmit = (evt) => {
            evt.preventDefault();
            if (!this.canBeSubmitted()) {
                return;
            }
            this.setState({ loading: true });
            const { email, password, username, firstname, lastname, gender, userType } = this.state;
            this.props
                .signup({
                variables: {
                    email,
                    password,
                    username,
                    firstname,
                    lastname,
                    userType,
                    gender,
                },
            })
                .then((result) => {
                const token = result.data.signup.token;
                localStorage.setItem(__WEBPACK_IMPORTED_MODULE_6__constants__["a" /* AUTH_TOKEN */], token);
                localStorage.setItem(__WEBPACK_IMPORTED_MODULE_6__constants__["b" /* CURRENT_USER */], result.data.signup.user);
                this.props.refreshToken(token);
                this.setState({ loading: false });
                this.props.history.replace('/add/profile');
            })
                .catch((err) => {
                this.setState({ loading: false });
                __WEBPACK_IMPORTED_MODULE_5_uikit__["notification"](`${err.message}`, { status: 'danger', pos: 'top-right' });
            });
        };
    }
    canBeSubmitted() {
        const errors = Object(__WEBPACK_IMPORTED_MODULE_4_Utils_helpers__["c" /* validateSignup */])(this.state.email, this.state.password, this.state.username, this.state.confirmPassword, this.state.firstname, this.state.lastname, this.state.gender, this.state.userType);
        const isDisabled = Object.keys(errors).some((x) => errors[x]);
        return !isDisabled;
    }
    componentWillMount() {
        const email = this.props.location.email;
        if (email) {
            this.setState({ email });
        }
    }
    render() {
        const errors = Object(__WEBPACK_IMPORTED_MODULE_4_Utils_helpers__["c" /* validateSignup */])(this.state.email, this.state.password, this.state.username, this.state.confirmPassword, this.state.firstname, this.state.lastname, this.state.gender, this.state.userType);
        const isDisabled = Object.keys(errors).some((x) => errors[x]);
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-flex uk-flex-stretch", "data-uk-grid": true, style: { backgroundColor: '#ffffff' } },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-2-5 uk-visible@m sideBg uk-flex uk-flex-middle ", id: "sideBg" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-position-relative uk-visible-toggle uk-light", "data-uk-slideshow": "animation: scale" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("ul", { className: "uk-slideshow-items" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: "https://getuikit.com/docs/images/photo.jpg", alt: "", "uk-cover": true })),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: "https://getuikit.com/docs/images/dark.jpg", alt: "", "data-uk-cover": true })),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: "https://getuikit.com/docs/images/light.jpg", alt: "", "data-uk-cover": true }))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { className: "uk-position-center-left uk-position-small uk-hidden-hover", href: "#", "data-uk-slidenav-previous": true, "data-uk-slideshow-item": "previous" }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { className: "uk-position-center-right uk-position-small uk-hidden-hover", href: "#", "data-uk-slidenav-next": true, "data-uk-slideshow-item": "next" }))),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-container uk-width-3-5@m uk-width-1-1@s uk-flex\n          uk-flex-stretch uk-flex-middle uk-box-shadow-small" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("form", { className: "uk-form-horizontal uk-width-1-1 uk-margin-large uk-padding-large uk-padding-remove-vertical", onSubmit: this.handleSubmit },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin", style: { marginTop: 40 } },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", { className: "uk-heading-primary uk-align-center" }, "Signup ")),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("label", { className: "uk-form-label", htmlFor: "firstname" }, "Username"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-form-controls" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { id: "firstname", className: `uk-input ${errors.username ? 'uk-form-danger' : ''} `, type: "text", value: this.state.username, required: true, onChange: this.handleUsernameChange }))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("label", { className: "uk-form-label", htmlFor: "firstname" }, "Firstname"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-form-controls" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { id: "firstname", className: `uk-input ${errors.firstname ? 'uk-form-danger' : ''} `, type: "text", value: this.state.firstname, required: true, onChange: this.handleFnameChange }))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("label", { className: "uk-form-label", htmlFor: "lastname" }, "Lastname"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-form-controls" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { id: "lastname", className: `uk-input ${errors.lastname ? 'uk-form-danger' : ''} `, type: "text", value: this.state.lastname, required: true, onChange: this.handleLnameChange }))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("label", { className: "uk-form-label", htmlFor: "email" }, "Email"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-form-controls" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { id: "email", className: `uk-input ${errors.email ? 'uk-form-danger' : ''} `, type: "email", value: this.state.email, required: true, onChange: this.handleEmailChange }))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("label", { className: "uk-form-label", htmlFor: "form-horizontal-text" }, "Password"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-form-controls" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { className: `uk-input ${errors.password ? 'uk-form-danger' : ''} `, type: "password", id: "password", value: this.state.password, required: true, onChange: this.handlePasswordChange }))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("label", { className: "uk-form-label", htmlFor: "confirmPassword" }, "Confirm Password"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-form-controls" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { className: `uk-input ${errors.confirmPassword ? 'uk-form-danger' : ''} `, type: "password", id: "confirmPassword", value: this.state.confirmPassword, required: true, onChange: this.handleConPasswordChange }))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("label", { className: "uk-form-label", htmlFor: "form-horizontal-text" }, "Gender"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-form-controls" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("select", { className: "uk-select", value: this.state.gender, required: true, onChange: this.handleGenderChange },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("option", { value: "" }, "Select sex"),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("option", { value: "Male" }, "Male"),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("option", { value: "Female" }, "Female")))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("label", { className: "uk-form-label", htmlFor: "form-horizontal-text" }, "I am a"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-form-controls" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("select", { className: "uk-select", value: this.state.userType, required: true, onChange: this.handleUserTypeChange },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("option", { value: "" }, "Select one"),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("option", { value: "Student" }, "Student"),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("option", { value: "Lecturer" }, "Lecturer")))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" }, this.state.loading ? (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { "data-uk-spinner": "ratio: 1" })) : (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: `uk-button uk-button-primary uk-width-1-1 ${isDisabled ? 'disabled' : 'disabled'}`, type: "submit" }, "Sign Up"))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("hr", { className: "uk-divider-icon" }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { className: `uk-button uk-button-text}` }, "Already have an account?"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"], { className: `uk-button uk-button-secondary
                 uk-align-right`, to: "/login" }, "Login now"))))));
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["withRouter"])(Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["compose"])(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["withApollo"], Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_3_Graphql_Mutation__["d" /* SIGNUP_USER */], {
    name: 'signup',
}))(Signup)));


/***/ }),

/***/ "./src/Containers/Auth/Signup/interest.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_stack_grid__ = __webpack_require__("react-stack-grid");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_stack_grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_stack_grid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_uikit__ = __webpack_require__("uikit");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_uikit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_uikit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Graphql_Query__ = __webpack_require__("./src/Graphql/Query/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_Components_InterestItem__ = __webpack_require__("./src/Components/InterestItem/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_Graphql_Mutation__ = __webpack_require__("./src/Graphql/Mutation/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__style_css__ = __webpack_require__("./src/Containers/Auth/Signup/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__style_css__);






// import { User } from 'CustomTypings/schema';



class InterestPage extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.state = {
            show: false,
            selected: ['1'],
            loading: false,
        };
        this.onSelectAdd = (id) => {
            const temp = this.state.selected;
            const index = this.state.selected.indexOf(id);
            if (index === -1) {
                temp.push(id);
            }
            else {
                temp.splice(index, 1);
            }
            this.setState({ selected: temp });
        };
        this.onSelectRemove = (id) => {
            this.state.selected.indexOf(id);
        };
    }
    // tslint:disable-next-line:no-any
    save() {
        // tslint:disable-next-line:no-console
        console.log(this.state.selected);
        let inter = [];
        inter = this.state.selected;
        this.props.client
            .mutate({
            mutation: __WEBPACK_IMPORTED_MODULE_7_Graphql_Mutation__["a" /* ADD_INTERESTS */],
            variables: {
                interests: inter,
            },
        })
            .then((result) => {
            console.log(result);
            this.props.history.push('/signup/complete');
        })
            .catch((err) => {
            __WEBPACK_IMPORTED_MODULE_4_uikit__["notification"](`${err.message}`, { status: 'danger', pos: 'top-right' });
        });
    }
    render() {
        // tslint:disable-next-line:no-console
        console.log(this.props.interests.allInterest);
        if (this.props.interests.loading) {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null, "Loading");
        }
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-1", style: { height: '100vh', backgroundColor: '#ffffff' } },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h1", { className: "uk-postion-top-center uk-text-center", style: { marginTop: 50 } }, "Lets pick your interest"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { className: "uk-postion-top-center uk-text-center uk-padding" }, "Select minimum of 5 interest"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_stack_grid___default.a, { columnWidth: 200 }, this.props.interests.allInterest.map((data, i) => (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_Components_InterestItem__["a" /* default */], { key: i, name: data.name, id: data.id, url: data.avatar, checked: this.state.selected.indexOf(data.id) === -1 ? false : true, onClickAdd: this.onSelectAdd })))),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-padding-small", style: { position: 'fixed', bottom: 0, right: 40 } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "uk-button uk-button-primary", disabled: this.state.selected.length > 1 ? false : true, onClick: () => this.save() }, "SAVE INTEREST"))));
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["withRouter"])(Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["compose"])(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["withApollo"], Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_5_Graphql_Query__["d" /* ALL_INTEREST */], { name: 'interests' }), Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_7_Graphql_Mutation__["a" /* ADD_INTERESTS */], { name: 'addInterests' }))(InterestPage)));


/***/ }),

/***/ "./src/Containers/Auth/Signup/signupProfile.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_uikit__ = __webpack_require__("uikit");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_uikit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_uikit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Graphql_Query__ = __webpack_require__("./src/Graphql/Query/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Utils_helpers__ = __webpack_require__("./src/Utils/helpers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_Graphql_Mutation__ = __webpack_require__("./src/Graphql/Mutation/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__style_css__ = __webpack_require__("./src/Containers/Auth/Signup/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__style_css__);








class SignupProfile extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.state = {
            show: false,
            country: '',
            photo: '',
            url: '',
            countryList: [],
            institution: '',
            institutionList: [],
            department: '',
            departmentList: [],
            everFocusedInstitution: false,
            everFocusedCountry: false,
            inFocus: '',
            loading: false,
        };
        this.handleInstChange = (evt) => {
            this.setState({ institution: evt.target.value });
            this.getDepartment(evt.target.value);
        };
        this.handleDeptChange = (evt) => {
            this.setState({ department: evt.target.value });
        };
        this.handleCountryChange = (evt) => {
            this.setState({ country: evt.target.value });
            this.getInstitution(evt.target.value);
        };
        this.handleSubmit = (evt) => {
            evt.preventDefault();
            if (!this.canBeSubmitted()) {
                return;
            }
            this.setState({ loading: true });
            this.props
                .addProfile({
                variables: {
                    photoId: this.state.photo,
                    countryId: this.state.country,
                    institutionId: this.state.institution,
                    departmentId: this.state.department,
                },
            })
                .then((result) => {
                this.props.history.replace('/add/interest');
            })
                .catch((err) => {
                // Err catch block
            });
        };
    }
    canBeSubmitted() {
        const errors = Object(__WEBPACK_IMPORTED_MODULE_5_Utils_helpers__["b" /* validateProfile */])(this.state.photo, this.state.country, this.state.institution, this.state.department);
        const isDisabled = Object.keys(errors).some((x) => errors[x]);
        return !isDisabled;
    }
    getCountry() {
        this.props.client
            .query({
            query: __WEBPACK_IMPORTED_MODULE_4_Graphql_Query__["a" /* ALL_COUNTRIES */],
        })
            .then((result) => {
            // tslint:disable-next-line:no-console
            console.log(result.data.getCountry);
            this.setState({ countryList: result.data.getCountry });
        })
            .catch((err) => {
            // jkjk
        });
    }
    getInstitution(value) {
        this.props.client
            .query({
            query: __WEBPACK_IMPORTED_MODULE_4_Graphql_Query__["c" /* ALL_INSTITUTION */],
            variables: {
                idCountry: value,
            },
        })
            .then((result) => {
            // tslint:disable-next-line:no-console
            console.log(result);
            this.setState({ institutionList: result.data.getInstitution });
        })
            .catch((err) => {
            // jkjk
        });
    }
    getDepartment(value) {
        this.props.client
            .query({
            query: __WEBPACK_IMPORTED_MODULE_4_Graphql_Query__["b" /* ALL_DEPARTMENTS */],
            variables: {
                idInstitutions: value,
            },
        })
            .then((result) => {
            this.setState({ departmentList: result.data.getDepartment });
        })
            .catch((err) => {
            // jkjk
        });
    }
    componentWillMount() {
        const email = this.props.location.email;
        if (email) {
            this.setState({ email });
        }
        this.getCountry();
    }
    componentDidMount() {
        const bar = document.getElementById('js-progressbar');
        __WEBPACK_IMPORTED_MODULE_3_uikit__["upload"]('.js-upload', {
            url: 'https://uniserver.now.sh/upload',
            multiple: false,
            name: 'data',
            dataType: 'json',
            beforeSend() {
                // fd
            },
            beforeAll() {
                // fd
            },
            load() {
                // fd
            },
            error() {
                // tslint:disable-next-line:no-console
                console.log('error', arguments);
            },
            complete() {
                // tslint:disable-next-line:no-console
                console.log('complete', arguments);
            },
            // tslint:disable-next-line:typedef
            loadStart(e) {
                // tslint:disable-next-line:no-console
                console.log('loadStart', arguments);
                if (bar) {
                    bar.removeAttribute('hidden');
                    bar.max = e.total;
                    bar.value = e.loaded;
                }
            },
            // tslint:disable-next-line:typedef
            progress(e) {
                // tslint:disable-next-line:no-console
                console.log('progress', arguments);
                if (bar) {
                    bar.max = e.total;
                    bar.value = e.loaded;
                }
            },
            // tslint:disable-next-line:typedef
            loadEnd(e) {
                // tslint:disable-next-line:no-console
                console.log('loadEnd', arguments);
                if (bar) {
                    bar.max = e.total;
                    bar.value = e.loaded;
                }
            },
            completeAll: (result, response) => {
                // tslint:disable-next-line:no-console
                console.log('completeAll', result.response);
                const data = JSON.parse(result.response);
                this.setState({ photo: data.id, url: data.url });
                setTimeout(() => {
                    if (bar) {
                        bar.setAttribute('hidden', 'hidden');
                    }
                }, 1000);
            },
        });
    }
    render() {
        const errors = Object(__WEBPACK_IMPORTED_MODULE_5_Utils_helpers__["b" /* validateProfile */])(this.state.photo, this.state.country, this.state.institution, this.state.department);
        const isDisabled = Object.keys(errors).some((x) => errors[x]);
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-flex uk-flex-stretch", "data-uk-grid": true, style: { height: '100vh', backgroundColor: '#ffffff' } },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-2-5 uk-visible@m sideBg uk-flex uk-flex-middle ", id: "sideBg" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-position-relative uk-visible-toggle uk-light", "data-uk-slideshow": "animation: scale" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("ul", { className: "uk-slideshow-items" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: "https://getuikit.com/docs/images/photo.jpg", alt: "", "uk-cover": true })),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: "https://getuikit.com/docs/images/dark.jpg", alt: "", "data-uk-cover": true })),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: "https://getuikit.com/docs/images/light.jpg", alt: "", "data-uk-cover": true }))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { className: "uk-position-center-left uk-position-small uk-hidden-hover", href: "#", "data-uk-slidenav-previous": true, "data-uk-slideshow-item": "previous" }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { className: "uk-position-center-right uk-position-small uk-hidden-hover", href: "#", "data-uk-slidenav-next": true, "data-uk-slideshow-item": "next" }))),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-container uk-width-3-5@m uk-width-1-1@s uk-flex\n          uk-flex-stretch uk-flex-middle uk-box-shadow-small" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("form", { className: "uk-form-horizontal uk-width-1-1 uk-margin-large uk-padding-large uk-padding-remove-vertical", onSubmit: this.handleSubmit },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", { className: "uk-heading-primary uk-align-center" }, "You're Almost done ")),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "js-upload uk-placeholder uk-text-center" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { "uk-icon": "icon: cloud-upload" }),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "uk-text-middle" }, "Attach photo by dropping it here or "),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { "uk-form-custom": "" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { type: "file", multiple: false }),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "uk-link" }, "selecting one"))),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { className: "uk-border-circle", src: this.state.url, width: "90", height: "90" }),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("progress", { id: "js-progressbar", className: "uk-progress", value: "0", max: "100", hidden: true })),
                    this.state.department,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("label", { className: "uk-form-label", htmlFor: "firstname" }, "Country"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-form-controls" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("select", { className: "uk-select", value: this.state.country, required: true, onChange: this.handleCountryChange },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("option", { value: "" }, "Select country"),
                                this.state.countryList.map((country, i) => (
                                // tslint:disable-next-line:jsx-key
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("option", { key: i, value: country.id }, country.name)))))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("label", { className: "uk-form-label", htmlFor: "lastname" }, "Institution"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-form-controls" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("select", { className: "uk-select", value: this.state.institution, required: true, onChange: this.handleInstChange },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("option", { value: "" }, "Select institution"),
                                this.state.institutionList.map((institution, i) => (
                                // tslint:disable-next-line:jsx-key
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("option", { key: i, value: institution.id }, institution.title)))))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("label", { className: "uk-form-label", htmlFor: "email" }, "Course"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-form-controls" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("select", { className: "uk-select", value: this.state.department, required: true, onChange: this.handleDeptChange },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("option", { value: "" }, "Select course"),
                                this.state.departmentList.map((course, i) => (
                                // tslint:disable-next-line:jsx-key
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("option", { key: i, value: course.id }, course.name)))))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" }, this.state.loading ? (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { "data-uk-spinner": "ratio: 1" })) : (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: `uk-button uk-button-primary uk-width-1-1 ${isDisabled ? 'disabled' : 'disabled'}`, disabled: isDisabled, type: "submit" }, "SAVE & NEXT"))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("hr", { className: "uk-divider-icon" })))));
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["withRouter"])(Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["compose"])(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["withApollo"], Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_4_Graphql_Query__["a" /* ALL_COUNTRIES */], { name: 'country' }), Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_6_Graphql_Mutation__["b" /* ADD_PROFILE */], { name: 'addProfile' }), Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_6_Graphql_Mutation__["b" /* ADD_PROFILE */], {
    name: 'addProfile',
}))(SignupProfile)));


/***/ }),

/***/ "./src/Containers/Auth/Signup/style.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, "#sideBg {\n  background: url(" + __webpack_require__("./src/Assets/bg8.svg") + "), url(" + __webpack_require__("./src/Assets/bg4.svg") + "), url(" + __webpack_require__("./src/Assets/bg2.svg") + ") 40px;\n  background-position: right bottom, right top, bottom right;\n  background-repeat: no-repeat, no-repeat, repeat-x;\n  background-size: auto, auto, 60%; }\n\n.sideBg {\n  background: url(" + __webpack_require__("./src/Assets/bg8.svg") + "), url(" + __webpack_require__("./src/Assets/bg4.svg") + "), url(" + __webpack_require__("./src/Assets/bg2.svg") + ") 40px;\n  background-position: right bottom, right top, bottom right;\n  background-repeat: no-repeat, no-repeat, repeat-x;\n  background-size: auto, auto, 60%; }\n", ""]);

// exports


/***/ }),

/***/ "./src/Containers/ChatDetail/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet__ = __webpack_require__("react-helmet");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_anchor_ui_message_list__ = __webpack_require__("anchor-ui/message-list");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_anchor_ui_message_list___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_anchor_ui_message_list__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_anchor_ui_message_input__ = __webpack_require__("anchor-ui/message-input");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_anchor_ui_message_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_anchor_ui_message_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_anchor_ui_message__ = __webpack_require__("anchor-ui/message");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_anchor_ui_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_anchor_ui_message__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_anchor_ui_button__ = __webpack_require__("anchor-ui/button");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_anchor_ui_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_anchor_ui_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_anchor_ui_icons_icon_emoji__ = __webpack_require__("anchor-ui/icons/icon-emoji");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_anchor_ui_icons_icon_emoji___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_anchor_ui_icons_icon_emoji__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_anchor_ui_emoji_menu__ = __webpack_require__("anchor-ui/emoji-menu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_anchor_ui_emoji_menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_anchor_ui_emoji_menu__);








// import emojione from 'emojione';
/*const createMarkup = text => ({
  __html: emojione.toImage(text)
});*/
class ChatDetail extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.state = {
            open: false,
            emoji: '',
        };
        this.toggleMenu = () => this.setState({ open: !this.state.open });
        this.sendEmoji = (emoj) => {
            const tempStr = this.state.emoji + emoj.shortname;
            this.setState({ emoji: tempStr });
        };
        this.handleChange = (evt) => {
            this.setState({ emoji: evt.target.value });
        };
        // This is called by both enter and click
        this.handleSendMessage = () => {
            // Assuming there is a function/prop which actually sends the message
            // const { sendMessage } = this.props;
            // Grab input value from state. This is set by handleChange
            // const { emoji } = this.state;
            // sendMessage(value);
        };
    }
    render() {
        const { open, emoji } = this.state;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_helmet__["Helmet"], null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("title", null, "Unizonn | Chat"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", { name: "an inclusive community", content: "Unizonn community" })),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-1" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_anchor_ui_message_list___default.a, { style: { height: '77vh', flex: 1, backgroundColor: 'aliceblue' } },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_anchor_ui_message___default.a, { body: "Helloo man" }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_anchor_ui_message___default.a, { body: "Helloo man" }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_anchor_ui_message___default.a, { body: "Helloo man" }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_anchor_ui_message___default.a, { body: "Helloo man" }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_anchor_ui_message___default.a, { body: "Helloo man" }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_anchor_ui_message___default.a, { body: "Helloo man" }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_anchor_ui_message___default.a, { body: "Helloo man" }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_anchor_ui_message___default.a, { body: "Helloo man" }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_anchor_ui_message___default.a, { body: "Helloo man" })),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "input-box uk-width-auto" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_anchor_ui_message_input___default.a, { placeholder: "Enter message", multiLine: true, style: { margin: 0 }, value: emoji, sendMessage: this.handleSendMessage, onChange: (event) => this.handleChange(event), leftButton: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_anchor_ui_button___default.a
                        // tslint:disable-next-line:jsx-boolean-value
                        , { 
                            // tslint:disable-next-line:jsx-boolean-value
                            iconButton: true, onClick: this.toggleMenu },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_anchor_ui_icons_icon_emoji___default.a, null)) }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("section", null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7_anchor_ui_emoji_menu___default.a, { sendEmoji: (event, emoj) => this.sendEmoji(emoj), open: open, hideMenu: this.toggleMenu }))))));
    }
}
/* harmony export (immutable) */ __webpack_exports__["default"] = ChatDetail;



/***/ }),

/***/ "./src/Containers/ComposeArticle/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Components_Editor2__ = __webpack_require__("./src/Components/Editor2/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_select_plus__ = __webpack_require__("react-select-plus");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_select_plus___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_select_plus__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Graphql_Query__ = __webpack_require__("./src/Graphql/Query/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_select_plus_dist_react_select_plus_css__ = __webpack_require__("./node_modules/react-select-plus/dist/react-select-plus.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_select_plus_dist_react_select_plus_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_select_plus_dist_react_select_plus_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__style_css__ = __webpack_require__("./src/Containers/ComposeArticle/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__style_css__);

// import Editor from 'Components/Editor';







class ComposeWrite extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.state = {
            title: null,
            body: null,
            category: [],
            removeSelected: true,
            value: [],
        };
        this.handleChange = (value) => {
            this.setState({ value });
            // console.log(`Selected: ${selectedOption.label}`);
        };
    }
    addInterestContent() {
        this.props.client
            .query({
            query: __WEBPACK_IMPORTED_MODULE_3_Graphql_Query__["d" /* ALL_INTEREST */],
        })
            .then((result) => {
            // tslint:disable-next-line:no-any
            const tempList = [];
            result.data.allInterest.map((interest) => {
                const temp = { value: interest.id, label: interest.name };
                tempList.push(temp);
            });
            // tslint:disable-next-line:no-console
            console.log(result);
            this.setState({ category: tempList });
        });
    }
    componentDidMount() {
        this.addInterestContent();
    }
    render() {
        const { value, category, title } = this.state;
        // tslint:disable-next-line:no-console
        console.log(title);
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-1" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-flex uk-padding-large" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-2-3@m uk-width-1-1@s" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-card uk-card-small uk-card-default", style: { paddingTop: 10 } }, "jkjk"),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-card uk-card-large uk-card-default", style: { minHeight: '60vh', paddingTop: 10 } },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_Components_Editor2__["a" /* default */], null))),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-3@m uk-width-1-1@s uk-padding-small uk-padding-remove-vertical" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-1 uk-margin-small-bottom" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "uk-button uk-button-secondary uk-width-1-2", type: "button" }, "Go Back"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "uk-button uk-button-primary uk-width-1-2", type: "button" }, "Publish")),
                    !this.props.allInterest.loading ? (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_select_plus___default.a, { name: "form-field-name", value: value, onChange: this.handleChange, placeholder: "Add categories or interest", multi: true, closeOnSelect: true, removeSelected: this.state.removeSelected, simpleValue: false, options: category })) : null))));
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_4_react_router_dom__["withRouter"])(Object(__WEBPACK_IMPORTED_MODULE_5_react_apollo__["compose"])(__WEBPACK_IMPORTED_MODULE_5_react_apollo__["withApollo"], Object(__WEBPACK_IMPORTED_MODULE_5_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_3_Graphql_Query__["d" /* ALL_INTEREST */], {
    name: 'allInterest',
}))(ComposeWrite)));


/***/ }),

/***/ "./src/Containers/ComposeArticle/style.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./src/Containers/Forum/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_helmet__ = __webpack_require__("react-helmet");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_async_component__ = __webpack_require__("react-async-component");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_async_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_async_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Components_EmptyStates__ = __webpack_require__("./src/Components/EmptyStates/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_anchor_ui_theme_provider__ = __webpack_require__("anchor-ui/theme-provider");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_anchor_ui_theme_provider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_anchor_ui_theme_provider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_anchor_ui_search_box__ = __webpack_require__("anchor-ui/search-box");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_anchor_ui_search_box___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_anchor_ui_search_box__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_anchor_ui_list__ = __webpack_require__("anchor-ui/list");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_anchor_ui_list___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_anchor_ui_list__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_anchor_ui_list_item__ = __webpack_require__("anchor-ui/list-item");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_anchor_ui_list_item___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_anchor_ui_list_item__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_anchor_ui_channel_header__ = __webpack_require__("anchor-ui/channel-header");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_anchor_ui_channel_header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_anchor_ui_channel_header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_anchor_ui_button__ = __webpack_require__("anchor-ui/button");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_anchor_ui_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_anchor_ui_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_anchor_ui_icons_icon_channels__ = __webpack_require__("anchor-ui/icons/icon-channels");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_anchor_ui_icons_icon_channels___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_anchor_ui_icons_icon_channels__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_anchor_ui_icons_icon_people__ = __webpack_require__("anchor-ui/icons/icon-people");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_anchor_ui_icons_icon_people___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_anchor_ui_icons_icon_people__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__style_css__ = __webpack_require__("./src/Containers/Forum/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__style_css__);














// import { compose } from 'react-apollo';
const ChatDetail = Object(__WEBPACK_IMPORTED_MODULE_3_react_async_component__["asyncComponent"])({
    resolve: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/ChatDetail/index.tsx")),
    LoadingComponent: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_Components_EmptyStates__["b" /* LoadingComponent */], null),
    ErrorComponent: ({ error }) => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null, error.message) // Optional
});
const items = [{
        primaryText: 'Rex Raphael',
        secondaryText: 'Been long brava',
        image: 'http://www.ghgh.gh/hjh.png'
    }, {
        primaryText: 'Rex Raphael',
        secondaryText: 'Been long brava',
        image: 'http://www.ghgh.gh/hjh.png'
    }, {
        primaryText: 'Rex Raphael',
        secondaryText: 'Been long brava',
        image: 'http://www.ghgh.gh/hjh.png'
    }, {
        primaryText: 'Rex Raphael',
        secondaryText: 'Been long brava',
        image: 'http://www.ghgh.gh/hjh.png'
    }, {
        primaryText: 'Rex Raphael',
        secondaryText: 'Been long brava',
        image: 'http://www.ghgh.gh/hjh.png'
    }, {
        primaryText: 'Rex Raphael',
        secondaryText: 'Been long brava',
        image: 'http://www.ghgh.gh/hjh.png'
    }, {
        primaryText: 'Rex Raphael',
        secondaryText: 'Been long brava',
        image: 'http://www.ghgh.gh/hjh.png'
    }];
class Forum extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    render() {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_anchor_ui_theme_provider___default.a, { color: "#f2912c" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "App" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_helmet__["Helmet"], null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("title", null, "Unizonn | Forum"),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", { name: "an inclusive community", content: "Unizonn community" })),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { height: '91vh', width: '100vw' }, className: "uk-width-1-1 uk-flex" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { id: "chat-list", className: "uk-width-1-4 un-border-right", style: { backgroundColor: '#ffffff' } },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_anchor_ui_search_box___default.a, { placeholder: "Search for channels and chat" }),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7_anchor_ui_list___default.a, { id: "chat-list", header: "Channels", style: { height: '43.1vh' } }, items.map((item, index) => (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8_anchor_ui_list_item___default.a, { key: index, primaryText: item.primaryText, avatar: item.image })))),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7_anchor_ui_list___default.a, { id: "chat-list", header: "Direct Chat", style: { height: '40vh' } }, items.map((item, index) => (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8_anchor_ui_list_item___default.a, { key: index, primaryText: item.primaryText, secondaryText: item.secondaryText, avatar: item.image }))))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-expand" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_9_anchor_ui_channel_header___default.a, { name: "Channel", rightButton: 
                            // tslint:disable-next-line:jsx-boolean-value
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_10_anchor_ui_button___default.a, { iconButton: true },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_12_anchor_ui_icons_icon_people___default.a, null)), leftButton: 
                            // tslint:disable-next-line:jsx-boolean-value
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_10_anchor_ui_button___default.a, { iconButton: true },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_11_anchor_ui_icons_icon_channels___default.a, null)) }),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-1 uk-flex", style: {} },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { component: ChatDetail, exact: true, path: "/forum/:id" })))))));
    }
}
/* harmony export (immutable) */ __webpack_exports__["default"] = Forum;

/*
export default withRouter(compose(
  withApollo,
  graphql<Response, InputProps, Props>(GET_C, {
    name: 'login'})
)(Forum));*/ 


/***/ }),

/***/ "./src/Containers/Forum/style.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".input-box {\n  background-color: ivory;\n  bottom: 0;\n  width: 75vw;\n  position: fixed;\n  margin: auto; }\n\n.raised {\n  box-shadow: 0px 5px 3px -6px rgba(119, 119, 119, 0.8);\n  -webkit-box-shadow: 0px 5px 3px -6px rgba(119, 119, 119, 0.8);\n  -moz-box-shadow: 0px 5px 3px -6px rgba(119, 119, 119, 0.8); }\n\n.un-border-bottom {\n  border-bottom: 1px solid #868686;\n  box-shadow: 0px 5px 3px -3px rgba(119, 119, 119, 0.7);\n  -webkit-box-shadow: 0px 5px 3px -3px rgba(119, 119, 119, 0.7);\n  -moz-box-shadow: 0px 5px 3px -3px rgba(119, 119, 119, 0.7); }\n\n.un-border-right {\n  border-right: 1px solid #868686;\n  box-shadow: 5px 0px 3px -3px rgba(119, 119, 119, 0.8);\n  -webkit-box-shadow: 5px 0px 3px -3px rgba(119, 119, 119, 0.8);\n  -moz-box-shadow: 5px 0px 3px -3px rgba(119, 119, 119, 0.8); }\n\n.un-border-left {\n  border-left: 1px solid #868686;\n  box-shadow: -5px 0px 3px -3px rgba(119, 119, 119, 0.8);\n  -webkit-box-shadow: -5px 0px 3px -3px rgba(119, 119, 119, 0.8);\n  -moz-box-shadow: -5px 0px 3px -3px rgba(119, 119, 119, 0.8); }\n", ""]);

// exports


/***/ }),

/***/ "./src/Containers/Maps/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Components_Map__ = __webpack_require__("./src/Components/Map/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_helmet__ = __webpack_require__("react-helmet");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_geolocated__ = __webpack_require__("react-geolocated");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_geolocated___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_geolocated__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style_css__ = __webpack_require__("./src/Containers/Maps/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Components_Label__ = __webpack_require__("./src/Components/Label/index.tsx");






class Maps extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    componentDidMount() {
        window.anima();
    }
    render() {
        const { coords } = this.props;
        let lat = coords ? coords.latitude : -10.0;
        let lng = coords ? coords.longitude : -19.0;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-1 uk-background-default" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_helmet__["Helmet"], null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("title", null, "Unizonn | Library"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", { name: "an inclusive community", content: "Unizonn community" })),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-card uk-card-default", style: { minHeight: 300 } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_Components_Map__["a" /* default */], { lat: lat, lng: lng, isMarkerShown: true })),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-padding-large uk-padding-remove-vertical" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("section", { className: "content" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h4", { className: " uk-text-middle uk-flex uk-padding-small", style: { marginLeft: 90 } }, "Near Libraries"),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Label__["a" /* default */], { text: "Sorting from the closest" }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "grid grid--effect-rigel" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#", className: "grid__item grid__item--c1" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "stack" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "stack__deco" }),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "stack__deco" }),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "stack__deco" }),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "stack__deco" }),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "stack__figure" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { className: "stack__img", src: "https://tympanus.net/Development/StackMotionHoverEffects/img/2.png", alt: "Image" }))),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "grid__item-caption uk-card uk-card-default uk-padding-small" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", { className: "grid__item-title uk-text-bold" }, "First State Library"),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "column column--left" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "column__text" }, "Distance"),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "column__text" }, "Review")),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "column column--right" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "column__text" }, "20 meters"),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "column__text" }, "4.5")))),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#", className: "grid__item grid__item--c1" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "stack" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "stack__deco" }),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "stack__deco" }),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "stack__deco" }),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "stack__deco" }),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "stack__figure" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { className: "stack__img", src: "https://tympanus.net/Development/StackMotionHoverEffects/img/2.png", alt: "Image" }))),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "grid__item-caption uk-card uk-card-default uk-padding-small" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", { className: "grid__item-title uk-text-bold" }, "City Library"),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "column column--left" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "column__text" }, "Distance"),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "column__text" }, "Review")),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "column column--right" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "column__text" }, "9.1 meters"),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "column__text" }, "3")))),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#", className: "grid__item grid__item--c1" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "stack" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "stack__deco" }),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "stack__deco" }),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "stack__deco" }),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "stack__deco" }),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "stack__figure" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { className: "stack__img", src: "https://tympanus.net/Development/StackMotionHoverEffects/img/2.png", alt: "Image" }))),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "grid__item-caption uk-card uk-card-default uk-padding-small" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", { className: "grid__item-title uk-text-bold" }, "Library de Anglon"),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "column column--left" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "column__text" }, "Distance"),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "column__text" }, "Review")),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "column column--right" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "column__text" }, "50.8 meters"),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "column__text" }, "5.0")))))))));
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_3_react_geolocated__["geolocated"])({
    positionOptions: {
        enableHighAccuracy: true,
    },
    userDecisionTimeout: 1000,
})(Maps));


/***/ }),

/***/ "./src/Containers/Maps/style.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, "*,\n*::after,\n*::before {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\na {\n  text-decoration: none;\n  color: #ff3d53;\n  outline: none;\n  transition: color 0.2s; }\n\na:hover,\na:focus {\n  color: #050505; }\n\n.hidden {\n  position: absolute;\n  overflow: hidden;\n  width: 0;\n  height: 0;\n  pointer-events: none; }\n\n/* Icons */\n.icon {\n  display: block;\n  width: 1.5em;\n  height: 1.5em;\n  margin: 0 auto;\n  fill: currentColor; }\n\n.message-mobile {\n  font-size: 0.85em;\n  display: none;\n  width: 100%;\n  padding: 0.5em;\n  text-align: center;\n  background: #ff3d53; }\n\n/* Header */\n.codrops-header {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: center;\n  width: 100%;\n  padding: 1.5em 1.5em 4em;\n  text-align: left; }\n\n.codrops-header__title {\n  font-size: 1.15em;\n  margin: 0;\n  padding: 0 0.5em; }\n\n.codrops-header__tagline {\n  font-size: 0.85em;\n  width: 100%;\n  margin: 0;\n  color: #000000; }\n\n.codrops-header__tagline::before {\n  content: '> '; }\n\n.github {\n  font-size: 0.85em;\n  font-weight: bold;\n  margin: 0 0 0 auto; }\n\n/* Top Navigation Style */\n.codrops-links {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  white-space: nowrap; }\n\n.codrops-links::after {\n  content: '';\n  position: absolute;\n  top: 20%;\n  left: 50%;\n  width: 1px;\n  height: 60%;\n  background: #b0adad;\n  transform: rotate3d(0, 0, 1, 22.5deg); }\n\n.codrops-icon {\n  display: inline-block;\n  margin: 0.25em 0 0.25em 0.25em;\n  padding: 0.35em 0 0.35em 0.35em; }\n\n.codrops-icon:first-child {\n  margin: 0.25em 0.25em 0.25em 0;\n  padding: 0.35em 0.35em 0.35em 0; }\n\n/* Content */\n.content {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  padding: 0 0 1em; }\n\n.content:not(:first-child) {\n  padding: 4em 0; }\n\n.content.content--padded {\n  padding: 4em 0 8em; }\n\n.content__title {\n  font-size: 0.85em;\n  position: absolute;\n  top: 18%;\n  left: 2em;\n  width: 5em;\n  margin: 0.75em 0;\n  color: #000000; }\n\n/* Grid */\n.grid {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  padding: 0 7em;\n  perspective: 800px;\n  perspective-origin: 50% 100%; }\n\n.grid__item {\n  position: relative;\n  display: block;\n  flex: none;\n  width: 250px;\n  margin: 1.5em 2vw;\n  cursor: default;\n  transform-style: preserve-3d; }\n\n.grid__item:hover,\n.grid__item:focus {\n  outline: none; }\n\n.grid__item--c1,\n.grid__item--c1:hover,\n.grid__item--c1:focus {\n  color: #52649e; }\n\n.grid__item--c2,\n.grid__item--c2:hover,\n.grid__item--c2:focus {\n  color: #ee7074; }\n\n.grid__item--c3,\n.grid__item--c3:hover,\n.grid__item--c3:focus {\n  color: #f7f295; }\n\n.stack {\n  position: relative;\n  width: 100%;\n  height: 200px;\n  transform-style: preserve-3d; }\n\n.stack__deco {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: currentColor;\n  transform-origin: 50% 100%; }\n\n.stack__deco:first-child {\n  opacity: 0.2; }\n\n.stack__deco:nth-child(2) {\n  opacity: 0.4; }\n\n.stack__deco:nth-child(3) {\n  opacity: 0.6; }\n\n.stack__deco:nth-child(4) {\n  opacity: 0.8; }\n\n.stack__figure {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  transform-origin: 50% 100%; }\n\n.stack__img {\n  position: relative;\n  display: block;\n  flex: none; }\n\n.grid__item-caption {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  transform-style: preserve-3d; }\n\n.grid__item-title {\n  font-size: 1.15em;\n  width: 100%;\n  margin: 1em 0;\n  text-align: left;\n  color: #1a1a1a; }\n\n.column {\n  width: 50%;\n  padding: 0 0.5em;\n  opacity: 0; }\n\n.column--left {\n  text-align: right; }\n\n.column--right {\n  text-align: left; }\n\n.column__text {\n  font-size: 0.85em;\n  display: block;\n  color: #000; }\n\n.column--left .column__text {\n  font-weight: bold; }\n\n.column--right .column__text {\n  color: #b0adad; }\n\n/* Individual effects */\n/* Vega */\n.grid--effect-vega .column {\n  opacity: 1; }\n\n/* Castor */\n.grid--effect-castor .stack__figure,\n.grid--effect-castor .stack__deco {\n  transform-origin: 50% 50%; }\n\n.grid--effect-castor .column {\n  opacity: 1; }\n\n/* Hamal */\n.grid--effect-hamal {\n  perspective: none; }\n\n.grid--effect-hamal .column {\n  opacity: 1; }\n\n/* polaris */\n.grid--effect-polaris {\n  perspective-origin: 100% -100%; }\n\n.grid--effect-polaris .column {\n  opacity: 1; }\n\n/* Alphard */\n.grid--effect-alphard {\n  perspective: none; }\n\n.grid--effect-alphard .column {\n  opacity: 1; }\n\n.grid--effect-alphard .stack__figure,\n.grid--effect-alphard .stack__deco {\n  transform-origin: 50% 150%; }\n\n/* Altair */\n.grid--effect-altair {\n  perspective-origin: 50% -50%; }\n\n.grid--effect-altair .column {\n  opacity: 1; }\n\n.grid--effect-altair .stack__figure,\n.grid--effect-altair .stack__deco {\n  transform-origin: 50% 100%; }\n\n/* rigel */\n.grid--effect-rigel {\n  perspective-origin: 50% 100%; }\n\n.grid--effect-rigel .column {\n  opacity: 1; }\n\n/* Canopus */\n.grid--effect-canopus {\n  perspective-origin: 50% 0%; }\n\n.grid--effect-canopus .column {\n  opacity: 1; }\n\n.grid--effect-canopus .stack__figure,\n.grid--effect-canopus .stack__deco {\n  transform-origin: 50% 100%; }\n\n/* pollux */\n.grid--effect-pollux {\n  perspective: 1000px;\n  perspective-origin: 50% -70%; }\n\n.grid--effect-pollux .column {\n  opacity: 1; }\n\n.grid--effect-pollux .stack__figure,\n.grid--effect-pollux .stack__deco {\n  transform-origin: 50% 50%; }\n\n.grid--effect-pollux .grid__item-caption > .grid__item-title {\n  transform-origin: 50% -200%; }\n\n/* deneb */\n.grid--effect-deneb {\n  perspective: none; }\n\n.grid--effect-deneb .stack__figure,\n.grid--effect-deneb .stack__deco {\n  transform-origin: 50% 50%; }\n\n.grid--effect-deneb .grid__item-caption > .column {\n  transform-origin: 50% -200%; }\n\n/* Related demos */\n.content.content--related {\n  font-weight: bold;\n  justify-content: center;\n  min-height: 0;\n  padding-bottom: 10em;\n  text-align: center;\n  background: #5d5d66; }\n\n.content--related a {\n  color: #000000; }\n\n.content--related a:hover,\n.content--related a:focus {\n  color: #000; }\n\n.content--related p:first-child {\n  padding: 6em 0 2em; }\n\n.content--related p {\n  width: 100%;\n  color: #37373e; }\n\n.media-item {\n  font-size: 0.85em;\n  display: inline-block;\n  padding: 1em 2vw;\n  vertical-align: top;\n  transition: color 0.3s; }\n\n.media-item__img {\n  max-width: 100%;\n  opacity: 0.6;\n  transition: opacity 0.3s; }\n\n.media-item:hover .media-item__img,\n.media-item:focus .media-item__img {\n  opacity: 1; }\n\n.media-item__title {\n  font-size: 1em;\n  margin: 0;\n  padding: 0.5em; }\n\n@media screen and (max-width: 42em) {\n  .codrops-header {\n    display: block;\n    text-align: center; }\n  .github {\n    width: 100%;\n    margin: 0;\n    padding: 0.5em 0; }\n  .message-mobile {\n    display: block; } }\n", ""]);

// exports


/***/ }),

/***/ "./src/Containers/Message/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet__ = __webpack_require__("react-helmet");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css__ = __webpack_require__("./src/Containers/Message/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__style_css__);



class Messages extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.state = {
            messages: [],
            is_typing: false
        };
    }
    render() {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "container" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_helmet__["Helmet"], null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("title", null, "Unizonn | Chat"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", { name: "an inclusive community", content: "Unizonn community" })),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "app-wrapper" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-flex uk-height-1-1 uk-height-match" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-3 uk-height-1-1" }, "hjhjh"),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-2-3 uk-height-1-1" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-padding-large" },
                            "hjhjhjh",
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "" }, "jjhjhj")))))));
    }
}
/* harmony export (immutable) */ __webpack_exports__["default"] = Messages;



/***/ }),

/***/ "./src/Containers/Message/style.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".positioning {\n  height: 100%;\n  right: 0px;\n  top: 0px;\n  transition: width 0.4s ease-in-out; }\n\n.details-pane {\n  width: 0%;\n  position: absolute;\n  height: 100%;\n  right: 0px;\n  top: 0px;\n  transition: width 0.4s ease-in-out; }\n\n@media (max-device-width: 1390px) {\n  .chat-list-pane {\n    width: 36%;\n    height: 100%;\n    float: left;\n    display: flex;\n    flex-direction: column;\n    border-color: #50ce31;\n    border-right-width: 1px;\n    border-right-style: solid;\n    transition: width 0.4s ease-in-out; } }\n\n@media (max-device-width: 767px) {\n  .chat-list-pane {\n    width: 40%;\n    height: 100%;\n    float: left;\n    display: flex;\n    flex-direction: column;\n    border-color: #50ce31;\n    border-right-width: 1px;\n    border-right-style: solid;\n    transition: width 0.4s ease-in-out; } }\n\n@media (max-device-width: 480px) {\n  .chat-list-pane {\n    width: 100%;\n    height: 100%;\n    float: left;\n    display: flex;\n    flex-direction: column;\n    border-color: #50ce31;\n    border-right-width: 1px;\n    border-right-style: solid;\n    transition: width 0.4s ease-in-out; } }\n\n@media (max-device-width: 1390px) {\n  .chat-list-close {\n    width: 30%; } }\n\n@media (max-device-width: 767px) {\n  .chat-list-close {\n    width: 30%; } }\n\n@media (max-device-width: 1390px) {\n  .chat-pane {\n    width: 64%;\n    height: 100%;\n    float: left;\n    display: flex;\n    flex-direction: column;\n    transition: width 0.4s ease-in-out; } }\n\n@media (max-device-width: 767px) {\n  .chat-pane {\n    width: 60%;\n    height: 100%;\n    float: left;\n    display: flex;\n    flex-direction: column;\n    transition: width 0.4s ease-in-out; } }\n\n@media (max-device-width: 480px) {\n  .chat-pane {\n    width: 0%;\n    position: absolute;\n    z-index: 50;\n    height: 100%;\n    width: 100%;\n    top: 0;\n    right: 0;\n    display: flex;\n    flex-direction: column;\n    transition: width 0.4s ease-in-out; } }\n\n@media (max-device-width: 1390px) {\n  .chat-close {\n    width: 40%; } }\n\n@media (max-device-width: 480px) {\n  .chat-close {\n    width: 100%; } }\n\n@media (max-device-width: 1390px) {\n  .details-pane-open {\n    width: 30%;\n    height: 100%;\n    float: left;\n    transition: width 0.4s ease-in-out; } }\n\n@media (max-device-width: 767px) {\n  .details-pane-open {\n    width: 60%;\n    height: 100%;\n    float: left;\n    transition: width 0.4s ease-in-out; } }\n\n@media (max-device-width: 480px) {\n  .details-pane-open {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    z-index: 100;\n    right: 0px;\n    top: 0px;\n    transition: width 0.4s ease-in-out; } }\n\n.details-pane-close {\n  display: none; }\n\n@media (max-device-width: 1390px) {\n  .open-chat {\n    display: none; } }\n\n@media (max-device-width: 767px) {\n  .open-chat {\n    display: none; } }\n\n@media (max-device-width: 480px) {\n  .open-chat {\n    display: inherit; } }\n", ""]);

// exports


/***/ }),

/***/ "./src/Containers/NotFound/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css__ = __webpack_require__("./src/Containers/NotFound/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_css__);


class NotFound extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    render() {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "App" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("header", { className: "App-header" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h1", { className: "App-title" }, " Welcome to Unizonn "))));
    }
}
/* harmony export (immutable) */ __webpack_exports__["default"] = NotFound;



/***/ }),

/***/ "./src/Containers/NotFound/style.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./src/Containers/Profile/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet__ = __webpack_require__("react-helmet");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css__ = __webpack_require__("./src/Containers/Profile/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__style_css__);



class Profile extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.state = {
            messages: [],
            is_typing: false
        };
    }
    render() {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-flex uk-height-1-1 uk-height-match" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_helmet__["Helmet"], null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("title", null, "Unizonn | My Profile"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", { name: "an inclusive community", content: "Unizonn community" })),
            "dhjdhjh"));
    }
}
/* harmony export (immutable) */ __webpack_exports__["default"] = Profile;



/***/ }),

/***/ "./src/Containers/Profile/style.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./src/Graphql/Mutation/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_tag__ = __webpack_require__("graphql-tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Graphql_Fragment__ = __webpack_require__("./src/Graphql/Fragment/index.ts");


/**
 * @description user registration for graphql mutation
 */
const SIGNUP_USER = __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default.a `
  mutation signupUser($email: String!, $password: String!, $username: String!,, $firstname: String!,
   $lastname: String!, $userType: String!, $gender: String! ){
    signup( email: $email, password: $password, username: $username, firstname: $firstname,
      lastname: $lastname, type: $userType, gender: $gender) {
      token,
      user{
        ...userFragment
      }
    }
  }
  ${__WEBPACK_IMPORTED_MODULE_1_Graphql_Fragment__["b" /* USER_FRAGMENT */]}
`;
/* harmony export (immutable) */ __webpack_exports__["d"] = SIGNUP_USER;

/**
 * @description user login for graphql mutation
 * @augments email, password
 */
const LOGIN_USER = __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default.a `
  mutation loginUser($email: String!, $password: String!){
    login( email: $email, password: $password ) {
      token,
      user{
        ...userFragment
      }
    }
  }
  ${__WEBPACK_IMPORTED_MODULE_1_Graphql_Fragment__["b" /* USER_FRAGMENT */]}
`;
/* harmony export (immutable) */ __webpack_exports__["c"] = LOGIN_USER;

const ADD_PROFILE = __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default.a `
  mutation addProfile($photoId: ID!, $countryId: ID!, $institutionId: ID!, $departmentId: ID!){
    addProfile(photoId: $photoId, countryId: $countryId, institutionId: $institutionId, departmentId: $departmentId){
      ...userFragment
    }
  }
  ${__WEBPACK_IMPORTED_MODULE_1_Graphql_Fragment__["b" /* USER_FRAGMENT */]}
`;
/* harmony export (immutable) */ __webpack_exports__["b"] = ADD_PROFILE;

const ADD_INTERESTS = __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default.a `
  mutation addInterest($interests: [String!]!){
    addInterest(interests: $interests){
      ...userFragment
    }
  }
  ${__WEBPACK_IMPORTED_MODULE_1_Graphql_Fragment__["b" /* USER_FRAGMENT */]}
`;
/* harmony export (immutable) */ __webpack_exports__["a"] = ADD_INTERESTS;

const CREATE_ARTICLE = __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default.a `
  mutation createArticle($title: String, $body: String, $tags: [String!]!, $category: [String!]!){
    createArticle(title: $title, body: $body, tags: $tags, category: $category ){
      ...articleFragment
    }
  }
  ${__WEBPACK_IMPORTED_MODULE_1_Graphql_Fragment__["a" /* ARTICLE_FRAGMENT */]}
`;
/* unused harmony export CREATE_ARTICLE */

const PUBLISH_ARTICLE = __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default.a `
  mutation publishArticle($id: ID!){
    publishArticle(id: $id){
      ...articleFragment
    }
  }
  ${__WEBPACK_IMPORTED_MODULE_1_Graphql_Fragment__["a" /* ARTICLE_FRAGMENT */]}
`;
/* unused harmony export PUBLISH_ARTICLE */



/***/ }),

/***/ "./src/Graphql/Query/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_tag__ = __webpack_require__("graphql-tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Graphql_Fragment__ = __webpack_require__("./src/Graphql/Fragment/index.ts");


/**
 * @description user registration for graphql mutation
 */
const SIGNUP_USER = __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default.a `
  mutation signupUser($email: String!, $password: String, $firstname: String,
   $lastname: String, $userType: String!, $gender: String! ){
    signup( email: $email, password: $password, firstname: $firstname,
      lastname: $lastname, userType: $userType, gender: $gender) {
      token,
      user{
        id
      }
    }
  }
`;
/* unused harmony export SIGNUP_USER */

/**
 * @description user login for graphql mutation
 */
const LOGIN_USER = __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default.a `
  mutation loginUser($email: String!, $password: String, $firstname: String,
   $lastname: String, $userType: String!, $gender: String! ){
    login( email: $email, password: $password ) {
      token,
      user{
        id
      }
    }
  }
`;
/* unused harmony export LOGIN_USER */

/**
 * @description check if user exist by email
 */
const USER_EXIST = __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default.a `
  query userExist($email: String!){
    userExist( email: $email)
  }
`;
/* harmony export (immutable) */ __webpack_exports__["h"] = USER_EXIST;

/**
 * @description check if current user article
 */
const ARTICLES = __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default.a `
  query articles {
    articles{
      ...articleFragment
    }
  }
  ${__WEBPACK_IMPORTED_MODULE_1_Graphql_Fragment__["a" /* ARTICLE_FRAGMENT */]}
`;
/* harmony export (immutable) */ __webpack_exports__["e"] = ARTICLES;

/**
 * @description get one article by id
 */
const GET_ARTICLE_BY_ID = __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default.a `
  query getArticleById($id: ID!){
    getArticleById(id: $id){
      ...articleFragment
    }
  }
  ${__WEBPACK_IMPORTED_MODULE_1_Graphql_Fragment__["a" /* ARTICLE_FRAGMENT */]}
`;
/* harmony export (immutable) */ __webpack_exports__["f"] = GET_ARTICLE_BY_ID;

/**
 * @description get one article by slug
 */
const GET_ARTICLE_BY_SLUG = __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default.a `
  query getArticleBySlug($slug: ID!){
    getArticleBySlug(slug: $slug){
      ...articleFragment
    }
  }
  ${__WEBPACK_IMPORTED_MODULE_1_Graphql_Fragment__["a" /* ARTICLE_FRAGMENT */]}
`;
/* unused harmony export GET_ARTICLE_BY_SLUG */

/**
 * @description check if current user article
 */
const ME = __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default.a `
  query me {
    me{
      ...userFragment
      connectTo{
        to{
          email
          id
          firstname
          lastname
          username
        }
        from{
          email
          id
          firstname
          lastname
          username
        }
      }
      articles{
        id
        title
        body
      }
    }
  }
  ${__WEBPACK_IMPORTED_MODULE_1_Graphql_Fragment__["b" /* USER_FRAGMENT */]}
`;
/* harmony export (immutable) */ __webpack_exports__["g"] = ME;

/**
 * @description get all countries
 */
const ALL_COUNTRIES = __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default.a `
  query allcountries{
    getCountry{
      id
      name
      shortName
    }
  }
`;
/* harmony export (immutable) */ __webpack_exports__["a"] = ALL_COUNTRIES;

/**
 * @description get all departments in institution
 */
const ALL_DEPARTMENTS = __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default.a `
  query getDepartment($idInstitutions: ID!){
    getDepartment(idInstitutions: $idInstitutions){
      id
      name
    }
  }
`;
/* harmony export (immutable) */ __webpack_exports__["b"] = ALL_DEPARTMENTS;

/**
 * @description get all departments
 */
const ALL_INSTITUTION = __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default.a `
  query getInstitution($idCountry: ID!){
    getInstitution(idCountry: $idCountry){
      id
      title
    }
  }
`;
/* harmony export (immutable) */ __webpack_exports__["c"] = ALL_INSTITUTION;

/**
 * @description get all interest
 */
const ALL_INTEREST = __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default.a `
  query allInterest{
    allInterest{
      id
      name
      avatar
      createdAt
    }
  }
`;
/* harmony export (immutable) */ __webpack_exports__["d"] = ALL_INTEREST;

/**
 * @description get all interest
 */
const ALL_CHAT = __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default.a `
  query getAllChat{
    getAllChat{
      id
      name
      avatar
      createdAt
    }
  }
`;
/* unused harmony export ALL_CHAT */



/***/ }),

/***/ "./src/Utils/helpers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = validateLogin;
/* harmony export (immutable) */ __webpack_exports__["c"] = validateSignup;
/* harmony export (immutable) */ __webpack_exports__["b"] = validateProfile;
// tslint:disable-next-line:only-arrow-functions
function validateLogin(email, password) {
    // true means invalid, so our conditions got reversed
    return {
        email: email.length === 0,
        password: password.length === 0,
    };
}
// tslint:disable-next-line:only-arrow-functions
function validateSignup(email, password, username, confirmPassword, firstname, lastname, gender, userType) {
    // true means invalid, so our conditions got reversed
    return {
        email: email.length === 0,
        username: username.length === 0,
        password: password.length === 0,
        confirmPassword: confirmPassword.length === 0 && confirmPassword !== password,
        lastname: lastname.length === 0,
        gender: gender.length === 0,
        userType: userType.length === 0,
        firstname: firstname.length === 0,
    };
}
// tslint:disable-next-line:only-arrow-functions
function validateProfile(photo, country, institution, department) {
    // true means invalid, so our conditions got reversed
    return {
        photo: photo.length === 0,
        country: country.length === 0,
        institution: institution.length === 0,
        department: department.length === 0,
    };
}


/***/ }),

/***/ "./src/constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const AUTH_TOKEN = 'token';
/* harmony export (immutable) */ __webpack_exports__["a"] = AUTH_TOKEN;

const CURRENT_USER = 'current_user';
/* harmony export (immutable) */ __webpack_exports__["b"] = CURRENT_USER;



/***/ }),

/***/ "anchor-ui/button":
/***/ (function(module, exports) {

module.exports = require("anchor-ui/button");

/***/ }),

/***/ "anchor-ui/channel-header":
/***/ (function(module, exports) {

module.exports = require("anchor-ui/channel-header");

/***/ }),

/***/ "anchor-ui/emoji-menu":
/***/ (function(module, exports) {

module.exports = require("anchor-ui/emoji-menu");

/***/ }),

/***/ "anchor-ui/icons/icon-channels":
/***/ (function(module, exports) {

module.exports = require("anchor-ui/icons/icon-channels");

/***/ }),

/***/ "anchor-ui/icons/icon-emoji":
/***/ (function(module, exports) {

module.exports = require("anchor-ui/icons/icon-emoji");

/***/ }),

/***/ "anchor-ui/icons/icon-people":
/***/ (function(module, exports) {

module.exports = require("anchor-ui/icons/icon-people");

/***/ }),

/***/ "anchor-ui/list":
/***/ (function(module, exports) {

module.exports = require("anchor-ui/list");

/***/ }),

/***/ "anchor-ui/list-item":
/***/ (function(module, exports) {

module.exports = require("anchor-ui/list-item");

/***/ }),

/***/ "anchor-ui/message":
/***/ (function(module, exports) {

module.exports = require("anchor-ui/message");

/***/ }),

/***/ "anchor-ui/message-input":
/***/ (function(module, exports) {

module.exports = require("anchor-ui/message-input");

/***/ }),

/***/ "anchor-ui/message-list":
/***/ (function(module, exports) {

module.exports = require("anchor-ui/message-list");

/***/ }),

/***/ "anchor-ui/search-box":
/***/ (function(module, exports) {

module.exports = require("anchor-ui/search-box");

/***/ }),

/***/ "anchor-ui/theme-provider":
/***/ (function(module, exports) {

module.exports = require("anchor-ui/theme-provider");

/***/ }),

/***/ "medium-draft":
/***/ (function(module, exports) {

module.exports = require("medium-draft");

/***/ }),

/***/ "react-async-component":
/***/ (function(module, exports) {

module.exports = require("react-async-component");

/***/ }),

/***/ "react-geolocated":
/***/ (function(module, exports) {

module.exports = require("react-geolocated");

/***/ }),

/***/ "react-google-maps":
/***/ (function(module, exports) {

module.exports = require("react-google-maps");

/***/ }),

/***/ "react-select-plus":
/***/ (function(module, exports) {

module.exports = require("react-select-plus");

/***/ }),

/***/ "react-stack-grid":
/***/ (function(module, exports) {

module.exports = require("react-stack-grid");

/***/ }),

/***/ "recompose":
/***/ (function(module, exports) {

module.exports = require("recompose");

/***/ }),

/***/ "uikit":
/***/ (function(module, exports) {

module.exports = require("uikit");

/***/ })

};
//# sourceMappingURL=0.28e5b421ac505fde0497.hot-update.js.map