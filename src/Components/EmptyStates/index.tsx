import * as React from 'react';
import { Button } from 'Components/Buttons';
import Icon from 'Components/Icons';

interface Props {
    // tslint:disable-next-line:no-any
    refresh?: any;
}

export const ErrorComponent = (props: Props) => (
    <div className="uk-flex uk-flex-stretch uk-width-1-1">
        <div className="empty uk-text-center uk-width-1-1">
            <i className="redo icon" />
            <h5 className="empty-title h5">There was an error</h5>
            <p className="empty-subtitle">Click to refresh.</p>
            <div className="empty-action">
                <button className="uk-button circle button uk-button-primary" onClick={() => props.refresh}>
                    Refresh
                </button>
            </div>
        </div>
    </div>
);
interface MessageProps {
  title?: string;
  subtitle?: string;
  buttonClick?: any;
}
export const EmptyComponent = (props: MessageProps) => (
    <div className="empty uk-flex-stretch uk-align-center uk-width-1-1 uk-text-center">
        <div className="empty-icon">
            <Icon glyph="emoji" size={90} />
        </div>
        <p className="empty-title h5">{props.title ? props.title : 'You have no new article'}</p>
        <p className="empty-subtitle">{props.subtitle ? props.subtitle : 'You have no new article'}</p>
        <div className="empty-action uk-text-center middle center uk-flex uk-flex-center uk-width-1-1">
            <Button className="uk-button" color="green" onClick={() => props.buttonClick()}>Refresh</Button>
        </div>
    </div>
);

export const LoadingComponent = (props) => (
    <div
        className=" uk-flex-stretch uk-text-center uk-width-1-1"
        style={{ justifyContent: 'center', alignSelf: 'center' }}
    >
        <div className="loader uk-margin-small">
            <div className="bullet" />
            <div className="bullet" />
            <div className="bullet" />
            <div className="bullet" />
        </div>
    </div>
);
