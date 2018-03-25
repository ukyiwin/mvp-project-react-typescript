import * as React from 'react';

export const LoadingComponent = () => {
    return <div className="uk-position-center">
                <div className="loader uk-margin-small">
                    <div className="bullet" />
                    <div className="bullet" />
                    <div className="bullet" />
                    <div className="bullet" />
                </div>
            </div>;
};

export default LoadingComponent;
