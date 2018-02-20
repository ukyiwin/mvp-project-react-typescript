import * as React from 'react';
import Calendar from 'react-calendar';
// import UIkit from 'uikit/src/js/uikit';
// import { Link } from 'react-router-dom';

type Props = {
  onChange?: () => void,
  value?: Date
};

// tslint:disable-next-line:no-any
class ModCalendar extends React.Component<Props> {

  componentDidMount() {
    // UIkit.notification('MyMessage', 'danger');
  }

  render() {
    return (
      <div 
        className="uk-width-1-1 uk-margin-top"
        style={{ borderRadius: 5 }}
      >
        <Calendar 
          className="uk-card uk-card-small uk-card-default calendar" 
          tileClassName="calendar-date"
        />
      </div>
    );
  }
  
}

export default ModCalendar;
