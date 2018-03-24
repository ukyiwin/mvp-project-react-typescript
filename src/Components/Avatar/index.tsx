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
                className={`uk-border-${props.square ? 'square' : 'circle'}
         uk-animation-kenburns uk-animation-fast`}
                src={props.url}
                width={props.size}
                height={props.size}
                alt="img"
            />
            {props.presence ? <i className="avatar-presence online" /> : null}
        </figure>
    );
};

export default Avatar;
