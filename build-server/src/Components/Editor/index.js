"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
const React = require("react");
const index_js_1 = require("Dante2/es/index.js"); //'Dante2';
require("Dante2/dist/DanteStyles.css");
const immutable_1 = require("immutable");
const image_js_1 = require("Dante2/es/components/popovers/image.js");
const link_js_1 = require("Dante2/es/components/popovers/link.js");
const addButton_js_1 = require("Dante2/es/components/popovers/addButton.js");
const toolTip_js_1 = require("Dante2/es/components/popovers/toolTip.js");
const image_js_2 = require("Dante2/es/components/blocks/image.js");
const embed_js_1 = require("Dante2/es/components/blocks/embed.js");
const video_js_1 = require("Dante2/es/components/blocks/video.js");
const placeholder_js_1 = require("Dante2/es/components/blocks/placeholder.js");
const index_js_2 = require("Dante2/es/model/index.js");
// create base element
var g = document.createElement('div');
g.setAttribute("id", "map");
document.body.appendChild(g);
g.style.marginTop = "5px";
g.style.paddingTop = "5px";
class Editors extends React.Component {
    constructor(props) {
        super(props);
        let config = immutable_1.Map(immutable_1.fromJS(this.defaultOptions(props.config)));
        this.options = config.mergeDeep(props.config).toJS();
    }
    defaultOptions(options) {
        // default options
        if (options == null) {
            options = {};
        }
        let defaultOptions = {};
        defaultOptions.el = 'map';
        defaultOptions.content = "";
        defaultOptions.read_only = false;
        defaultOptions.spellcheck = false;
        defaultOptions.title_placeholder = "Title";
        defaultOptions.body_placeholder = this.props.title ? this.props.title : "Write your article";
        // @defaultOptions.api_key = "86c28a410a104c8bb58848733c82f840"
        defaultOptions.widgets = [
            {
                title: 'add an image',
                icon: 'image',
                type: 'image',
                block: image_js_2.default,
                editable: true,
                renderable: true,
                breakOnContinuous: true,
                wrapper_class: "graf graf--figure",
                selected_class: "is-selected is-mediaFocused",
                selectedFn: block => {
                    const { direction } = block.getData().toJS();
                    switch (direction) {
                        case "left":
                            return "graf--layoutOutsetLeft";
                        case "center":
                            return "";
                        case "wide":
                            return "sectionLayout--fullWidth";
                        case "fill":
                            return "graf--layoutFillWidth";
                        default:
                            return "sectionLayout--fullWidth";
                    }
                },
                handleEnterWithoutText(ctx, block) {
                    const { editorState } = ctx.state;
                    return ctx.onChange(index_js_2.addNewBlockAt(editorState, block.getKey()));
                },
                handleEnterWithText(ctx, block) {
                    const { editorState } = ctx.state;
                    return ctx.onChange(index_js_2.addNewBlockAt(editorState, block.getKey()));
                },
                widget_options: {
                    displayOnInlineTooltip: true,
                    insertion: "upload",
                    insert_block: "image"
                },
                options: {
                    upload_url: options.upload_url,
                    upload_headers: options.upload_headers,
                    upload_formName: options.upload_formName,
                    upload_callback: options.image_upload_callback,
                    image_delete_callback: options.image_delete_callback,
                    image_caption_placeholder: options.image_caption_placeholder
                }
            }, {
                icon: 'embed',
                title: 'insert embed',
                type: 'embed',
                block: embed_js_1.default,
                editable: true,
                renderable: true,
                breakOnContinuous: true,
                wrapper_class: "graf graf--mixtapeEmbed",
                selected_class: "is-selected is-mediaFocused",
                widget_options: {
                    displayOnInlineTooltip: true,
                    insertion: "placeholder",
                    insert_block: "embed"
                },
                options: {
                    endpoint: `//api.embed.ly/1/extract?key=${options.api_key}&url=`,
                    placeholder: 'Paste a link to embed content from another site (e.g. Twitter) and press Enter'
                },
                handleEnterWithoutText(ctx, block) {
                    const { editorState } = ctx.state;
                    return ctx.onChange(index_js_2.addNewBlockAt(editorState, block.getKey()));
                },
                handleEnterWithText(ctx, block) {
                    const { editorState } = ctx.state;
                    return ctx.onChange(index_js_2.addNewBlockAt(editorState, block.getKey()));
                }
            }, {
                icon: 'video',
                title: 'insert video',
                editable: true,
                type: 'video',
                block: video_js_1.default,
                renderable: true,
                breakOnContinuous: true,
                wrapper_class: "graf--figure graf--iframe",
                selected_class: " is-selected is-mediaFocused",
                widget_options: {
                    displayOnInlineTooltip: true,
                    insertion: "placeholder",
                    insert_block: "video"
                },
                options: {
                    endpoint: `//api.embed.ly/1/oembed?key=${options.api_key}&url=`,
                    placeholder: 'Paste a YouTube, Vine, Vimeo, or other video link, and press Enter',
                    caption: 'Type caption for embed (optional)'
                },
                handleEnterWithoutText(ctx, block) {
                    const { editorState } = ctx.state;
                    return ctx.onChange(index_js_2.addNewBlockAt(editorState, block.getKey()));
                },
                handleEnterWithText(ctx, block) {
                    const { editorState } = ctx.state;
                    return ctx.onChange(index_js_2.addNewBlockAt(editorState, block.getKey()));
                }
            }, {
                renderable: true,
                editable: true,
                block: placeholder_js_1.default,
                type: 'placeholder',
                wrapper_class: "is-embedable",
                selected_class: " is-selected is-mediaFocused",
                widget_options: {
                    displayOnInlineTooltip: false
                },
                handleEnterWithText(ctx, block) {
                    const { editorState } = ctx.state;
                    const data = {
                        provisory_text: block.getText(),
                        endpoint: block.getData().get('endpoint'),
                        type: block.getData().get('type')
                    };
                    return ctx.onChange(index_js_2.resetBlockWithType(editorState, data.type, data));
                }
            }
        ];
        defaultOptions.tooltips = [{
                ref: 'insert_tooltip',
                component: toolTip_js_1.default,
                displayOnSelection: true,
                selectionElements: [
                    "unstyled",
                    "blockquote",
                    "ordered-list",
                    "unordered-list",
                    "unordered-list-item",
                    "ordered-list-item",
                    "code-block",
                    'header-one',
                    'header-two',
                    'header-three',
                    'header-four'
                ],
                widget_options: {
                    block_types: [
                        // {label: 'p', style: 'unstyled'},
                        { label: 'h2', style: 'header-one', type: "block" },
                        { label: 'h3', style: 'header-two', type: "block" },
                        { label: 'h4', style: 'header-three', type: "block" },
                        { label: 'blockquote', style: 'blockquote', type: "block" },
                        { label: 'insertunorderedlist', style: 'unordered-list-item', type: "block" },
                        { label: 'insertorderedlist', style: 'ordered-list-item', type: "block" },
                        { label: 'code', style: 'code-block', type: "block" },
                        { label: 'bold', style: 'BOLD', type: "inline" },
                        { label: 'italic', style: 'ITALIC', type: "inline" }
                    ]
                }
            }, {
                ref: 'add_tooltip',
                component: addButton_js_1.default
            }, {
                ref: 'anchor_popover',
                component: link_js_1.default
            }, {
                ref: 'image_popover',
                component: image_js_1.default
            }];
        defaultOptions.xhr = {
            before_handler: null,
            success_handler: null,
            error_handler: null
        };
        defaultOptions.data_storage = {
            url: null,
            method: "POST",
            success_handler: null,
            failure_handler: null,
            interval: 1500
        };
        defaultOptions.default_wrappers = [
            { className: 'graf--p', block: 'unstyled' },
            { className: 'graf--h2', block: 'header-one' },
            { className: 'graf--h3', block: 'header-two' },
            { className: 'graf--h4', block: 'header-three' },
            { className: 'graf--blockquote', block: 'blockquote' },
            { className: 'graf--insertunorderedlist', block: 'unordered-list-item' },
            { className: 'graf--insertorderedlist', block: 'ordered-list-item' },
            { className: 'graf--code', block: 'code-block' },
            { className: 'graf--bold', block: 'BOLD' },
            { className: 'graf--italic', block: 'ITALIC' }
        ];
        defaultOptions.continuousBlocks = [
            "unstyled",
            "blockquote",
            "ordered-list",
            "unordered-list",
            "unordered-list-item",
            "ordered-list-item",
            "code-block"
        ];
        defaultOptions.key_commands = {
            "alt-shift": [{ key: 65, cmd: 'add-new-block' }],
            "alt-cmd": [{ key: 49, cmd: 'toggle_block:header-one' },
                { key: 50, cmd: 'toggle_block:header-two' },
                { key: 53, cmd: 'toggle_block:blockquote' }],
            "cmd": [{ key: 66, cmd: 'toggle_inline:BOLD' },
                { key: 73, cmd: 'toggle_inline:ITALIC' },
                { key: 75, cmd: 'insert:link' }]
        };
        defaultOptions.character_convert_mapping = {
            '> ': "blockquote",
            '*.': "unordered-list-item",
            '* ': "unordered-list-item",
            '- ': "unordered-list-item",
            '1.': "ordered-list-item",
            '# ': 'header-one',
            '##': 'header-two',
            '==': "unstyled",
            '` ': "code-block"
        };
        return defaultOptions;
    }
    componentDidMount() {
        //  // simple implementation, use the js class
        //
        //  var article = new Dante({ 
        //    el: "app", 
        //    content: demo,
        //    read_only: true,
        //    debug: true
        //  })
        //  article.render()
    }
    addState(e) {
        console.log(e);
    }
    render() {
        return (React.createElement(index_js_1.DanteEditor, { content: this.props.contentState, onChange: () => this.addState.bind(this), config: this.options }));
    }
}
exports.default = Editors;
//# sourceMappingURL=index.js.map