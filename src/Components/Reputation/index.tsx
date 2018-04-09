import * as React from 'react';
import { truncateNumber } from 'Utils/utils';
import Icon from '../Icons';
import { ReputationWrapper, ReputationLabel } from './style';

interface Props {
  size?: 'mini' | 'default' | 'large';
  reputation: number;
  tipText?: string;
  tipLocation?: string;
  ignoreClick?: boolean;
}

class Reputation extends React.Component<Props> {
  open = (e) => {
    const { reputation, ignoreClick } = this.props;
    e.preventDefault();
    if (ignoreClick) { return; }
  }

  render() {
    const {
      tipText = 'Reputation',
      tipLocation = 'top-right',
      reputation,
    } = this.props;

    if (reputation === undefined || reputation === null) { return null; }

    const renderedReputation = reputation > 0 ? reputation : 0;

    return (
      <ReputationWrapper
        onClick={this.open}
        tipText={`${tipText}`}
        tipLocation={tipLocation}
      >
        <Icon glyph="rep" size={24} />

        <ReputationLabel>
          {truncateNumber(renderedReputation, 1)}
        </ReputationLabel>
      </ReputationWrapper>
    );
  }
}

export default Reputation;
