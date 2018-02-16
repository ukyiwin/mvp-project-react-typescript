/* tslint:disable */
import * as React from 'react';
// import Immutable from 'immutable';
import { DanteEditor } from 'Dante2/es/index.js';
// import dantecss from 'Dante2/dist/DanteStyles.css';
import { Map, fromJS } from 'immutable';
import DanteImagePopover from 'Dante2/es/components/popovers/image.js';
import DanteAnchorPopover from 'Dante2/es/components/popovers/link.js';
import DanteInlineTooltip from 'Dante2/es/components/popovers/addButton.js';
import DanteTooltip from 'Dante2/es/components/popovers/toolTip.js';
import ImageBlock from 'Dante2/es/components/blocks/image.js';
import EmbedBlock from 'Dante2/es/components/blocks/embed.js';
import VideoBlock from 'Dante2/es/components/blocks/video.js';
import PlaceholderBlock from 'Dante2/es/components/blocks/placeholder.js';
import { resetBlockWithType, addNewBlockAt } from 'Dante2/es/model/index.js';

// create base element
var g = document.createElement('div');
g.setAttribute('id', 'app');
document.body.appendChild(g);
g.style.marginTop = '150px';

type Options = {
    api_key: string;
    upload_url: string;
    upload_headers: string;
    upload_formName: string;
    // tslint:disable-next-line:no-any
    image_upload_callback: any
    // tslint:disable-next-line:no-any
    image_delete_callback: any
    image_caption_placeholder: string
};

// component implementation
export default class Editor extends React.Component {

    options: object;
  // tslint:disable-next-line:no-any
  constructor(props: any) {
    super(props);
    let config = Map(fromJS(this.defaultOptions(props.config)));
    this.options = config.mergeDeep(props.config).toJS();
    this.state = {
        content: {'entityMap': {}}
    };
  }

  defaultOptions(options: Options) {
    // default options
    /* if (options == null) {
      options = new Options();
    }*/
    let defaultOptions = {
        el: 'app',
        content: '',
        read_only: false,
        spellcheck: false,
        title_placeholder: 'Title',
        body_placeholder: 'Write your story',
        widgets: [{}],
        key_commands: [{}],
        tooltips: [{}],
        xhr: {},
        data_storage: {},
        default_wrappers: [{}],
        continuousBlocks: [{}],
        character_convert_mapping: [{}]
        
    };
    // @defaultOptions.api_key = "86c28a410a104c8bb58848733c82f840"

    defaultOptions.widgets = [
      {
        title: 'add an image',
        icon: 'image',
        type: 'image',
        block: ImageBlock,
        editable: true,
        renderable: true,
        breakOnContinuous: true,
        wrapper_class: 'graf graf--figure',
        selected_class: 'is-selected is-mediaFocused',
        selectedFn: block => {
          const { direction } = block.getData().toJS();
          switch (direction) {
            case 'left':
              return 'graf--layoutOutsetLeft';
            case 'center':
              return '';
            case 'wide':
              return 'sectionLayout--fullWidth';
            case 'fill':
              return 'graf--layoutFillWidth';
            default:
                return 'sectionLayout--fullWidth';
          }
        },
        // tslint:disable-next-line:typedef
        handleEnterWithoutText(ctx, block) {
          const { editorState } = ctx.state;
          return ctx.onChange(addNewBlockAt(editorState, block.getKey()));
        },
        // tslint:disable-next-line:typedef
        handleEnterWithText(ctx, block) {
          const { editorState } = ctx.state;
          return ctx.onChange(addNewBlockAt(editorState, block.getKey()));
        },
        widget_options: {
          displayOnInlineTooltip: true,
          insertion: 'upload',
          insert_block: 'image'
        },
        options: {
          upload_url: options.upload_url,
          upload_headers: options.upload_headers,
          upload_formName: options.upload_formName,
          upload_callback: options.image_upload_callback,
          image_delete_callback: options.image_delete_callback,
          image_caption_placeholder: options.image_caption_placeholder
        }
      },
      {
        icon: 'embed',
        title: 'insert embed',
        type: 'embed',
        block: EmbedBlock,
        editable: true,
        renderable: true,
        breakOnContinuous: true,
        wrapper_class: 'graf graf--mixtapeEmbed',
        selected_class: 'is-selected is-mediaFocused',
        widget_options: {
          displayOnInlineTooltip: true,
          insertion: 'placeholder',
          insert_block: 'embed'
        },
        options: {
          endpoint: `//api.embed.ly/1/extract?key=${ options.api_key }&url=`,
          placeholder: 'Paste a link to embed content from another site (e.g. Twitter) and press Enter'
        },
        // tslint:disable-next-line:typedef
        handleEnterWithoutText(ctx, block) {
          const { editorState } = ctx.state;
          return ctx.onChange(addNewBlockAt(editorState, block.getKey()));
        },
        // tslint:disable-next-line:typedef
        handleEnterWithText(ctx, block) {
          const { editorState } = ctx.state;
          return ctx.onChange(addNewBlockAt(editorState, block.getKey()));
        }
      },
      {
        icon: 'video',
        title: 'insert video',
        editable: true,
        type: 'video',
        block: VideoBlock,
        renderable: true,
        breakOnContinuous: true,
        wrapper_class: 'graf--figure graf--iframe',
        selected_class: ' is-selected is-mediaFocused',
        widget_options: {
          displayOnInlineTooltip: true,
          insertion: 'placeholder',
          insert_block: 'video'
        },
        options: {
          endpoint: `//api.embed.ly/1/oembed?key=${ options.api_key }&url=`,
          placeholder: 'Paste a YouTube, Vine, Vimeo, or other video link, and press Enter',
          caption: 'Type caption for embed (optional)'
        },

        // tslint:disable-next-line:typedef
        handleEnterWithoutText(ctx, block) {
          const { editorState } = ctx.state;
          return ctx.onChange(addNewBlockAt(editorState, block.getKey()));
        },

        // tslint:disable-next-line:typedef
        handleEnterWithText(ctx, block) {
          const { editorState } = ctx.state;
          return ctx.onChange(addNewBlockAt(editorState, block.getKey()));
        }
      },
      {
        renderable: true,
        editable: true,
        block: PlaceholderBlock,
        type: 'placeholder',
        wrapper_class: 'is-embedable',
        selected_class: ' is-selected is-mediaFocused',
        widget_options: {
          displayOnInlineTooltip: false
        },
        // tslint:disable-next-line:no-any
        handleEnterWithText(ctx: any, block: any) {
          const { editorState } = ctx.state;
          const data = {
            provisory_text: block.getText(),
            endpoint: block.getData().get('endpoint'),
            type: block.getData().get('type')
          };

          return ctx.onChange(resetBlockWithType(editorState, data.type, data));
        }
      }
    ];

    defaultOptions.tooltips = [{
      ref: 'insert_tooltip',
      component: DanteTooltip,
      displayOnSelection: true,
      selectionElements: [
      'unstyled', 
      'blockquote', 
      'ordered-list', 
      'unordered-list', 
      'unordered-list-item', 
      'ordered-list-item', 
      'code-block', 
      'header-one', 
      'header-two', 
      'header-three', 
      'header-four'],
      widget_options: {
        block_types: [
        // {label: 'p', style: 'unstyled'},
        { label: 'h2', style: 'header-one', type: 'block' }, 
        { label: 'h3', style: 'header-two', type: 'block' }, 
        { label: 'h4', style: 'header-three', type: 'block' }, 
        { label: 'blockquote', style: 'blockquote', type: 'block' },
        { label: 'insertunorderedlist', style: 'unordered-list-item', type: 'block' }, 
        { label: 'insertorderedlist', style: 'ordered-list-item', type: 'block' }, 
        { label: 'code', style: 'code-block', type: 'block' }, 
        { label: 'bold', style: 'BOLD', type: 'inline' }, 
        { label: 'italic', style: 'ITALIC', type: 'inline' }]
      }
    }, {
      ref: 'add_tooltip',
      component: DanteInlineTooltip
    }, {
      ref: 'anchor_popover',
      component: DanteAnchorPopover
    }, {
      ref: 'image_popover',
      component: DanteImagePopover
    }];

    defaultOptions.xhr = {
      before_handler: null,
      success_handler: null,
      error_handler: null
    };

    defaultOptions.data_storage = {
      url: null,
      method: 'POST',
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
      { className: 'graf--italic', block: 'ITALIC' }];

    defaultOptions.continuousBlocks = [
      'unstyled', 
      'blockquote', 
      'ordered-list', 
      'unordered-list', 
      'unordered-list-item', 
      'ordered-list-item', 
      'code-block'
    ];
    /*
    defaultOptions.key_commands = {
      'alt-shift': [{ key: 65, cmd: 'add-new-block' }],
      'alt-cmd': [{ key: 49, cmd: 'toggle_block:header-one' }, 
                  { key: 50, cmd: 'toggle_block:header-two' }, 
                  { key: 53, cmd: 'toggle_block:blockquote' }],
      'cmd': [{ key: 66, cmd: 'toggle_inline:BOLD' }, 
              { key: 73, cmd: 'toggle_inline:ITALIC' }, 
              { key: 75, cmd: 'insert:link' }]
    };

    defaultOptions.character_convert_mapping = {
      '> ': 'blockquote',
      '*.': 'unordered-list-item',
      '* ': 'unordered-list-item',
      '- ': 'unordered-list-item',
      '1.': 'ordered-list-item',
      '# ': 'header-one',
      '##': 'header-two',
      '==': 'unstyled',
      '` ': 'code-block'
    };
    */

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

  render() {
      // let { content } = this.state;
      return(
            <DanteEditor
                config={this.options} 
            />
        );
    }
}