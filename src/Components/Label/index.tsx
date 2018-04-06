import * as React from 'react';
import './style.scss';

interface Props {
    color?: string;
    text?: string;
}

// tslint:disable-next-line:typedef
const Label = (props: Props) => {
    return (
        <div className="un-content uk-flex uk-flex-stretch">
            <div className="un-min-content un-block-display" />
            <button
                className="uk-button uk-button-text un-block-display"
                style={{ display: 'flex', alignSelf: 'center', marginLeft: 15 }}
            >
                {props.text}
            </button>
        </div>
    );
};

export default Label;
