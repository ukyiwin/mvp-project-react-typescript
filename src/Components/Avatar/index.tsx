import * as React from 'react';

interface Props {
    url: string;
    size: number;
    square?: boolean;
    presence: boolean;
}

// tslint:disable-next-line:typedef
const Avatar = (props: Props) => {
    return (
        <figure>
            <img
                className={`mdc-elevation--z2 mdc-elevation-transition uk-border-${props.square ? 'square' : 'circle rcorners'}
                  uk-animation-kenburns uk-animation-fast`}
                src={`https://gs3.blob.core.windows.net/unizonn/${props.url}`}
                width={props.size}
                height={props.size}
                alt="img" 
                // tslint:disable-next-line:max-line-length
                style={{borderRadius: 60, borderImageWidth: 5, height: props.size + 1, width: props.size + 1, borderColor: '#454d5d', 
                backgroundColor: 'azure'}}
            />
            {props.presence ? <i className="avatar-presence online" /> : null}
        </figure>
    );
};

export default Avatar;
