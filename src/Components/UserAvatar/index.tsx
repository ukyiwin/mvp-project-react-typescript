// - Import react components
import * as React from 'react';
import Avatar from 'material-ui/Avatar';

export interface UserAvatarComponentProps {

    /**
     * Use for getting url address from server
     */
  fileName: string;
    /**
     * User full name
     */
  fullName: string;
    /**
     * Avatar style
     */
  style?: {};
    /**
     * Avatar size
     */
  size?: number;
    /**
     * Trigger on touch tap
     */
  // tslint:disable-next-line:no-any
  onClick?: (event: any) => any;
}

/**
 * Create component class
 */
// tslint:disable-next-line:no-any
export class UserAvatarComponent extends React.Component<UserAvatarComponentProps> {

  /**
   * Component constructor
   * @param  {object} props is an object properties of component
   */
  constructor (props: UserAvatarComponentProps) {
    super(props);

    // Defaul state
    this.state = {
    };

    // Binding functions to `this`
  }

  /**
   * Reneder component DOM
   * @return {react element} return the DOM which rendered by component
   */
  render () {
    let { fileName, fullName, style, size, onClick } = this.props;

    return (
      <div style={{display: 'inherit'}}>
       {(fileName && fileName !== '' && fileName !== 'noImage' )
       // tslint:disable-next-line:max-line-length
       ? ( <Avatar src={fileName ? fileName : ' '} style={{...style, backgroundColor: '#ffffff', width: size || 36, height: size || 36}} onClick={onClick} />)
        // tslint:disable-next-line:max-line-length
        : (<Avatar style={{...style, backgroundColor: '#00bcd4', width: size || 36, height: size || 36}} onClick={onClick}>{fullName ? fullName.slice(0, 1) : ''}</Avatar>) }
      </div>
    );
  }
}

// - Connect component to redux store
// tslint:disable-next-line:no-any
export default UserAvatarComponent;