import * as React from 'react';
import MultiGroup from 'multiscroll-reactjs/src/components/multigroup';
import Pages from 'Utils/pageGrouper';

export default class HomePublic extends React.Component {

    render() {
        return(
            <div>
                <MultiGroup animTime={1.5}>
                    <div>
                        <div>
                            <Pages pg="1" side="left" />
                        </div>
                        <div>
                            <Pages pg="1" side="right" />
                        </div>
                    </div>
                    <div >
                        <div>
                            <Pages pg="2" side="left" />

                        </div>
                        <div>
                            <Pages pg="2" side="right" />
                        </div>
                    </div>
                </MultiGroup>
            </div>
        );
    }
}
