import * as React from 'react';
// import * as $ from 'jquery';
import { PageOne, BigH1 } from 'Components/Pages';
import { Button, TextField, withStyles } from 'material-ui';
import { WithStyles } from 'material-ui';
import { StyleRulesCallback } from 'material-ui/styles';
import './style.css';
import { purple } from 'material-ui/colors';
import withRoot from 'Utils/withRoot';

type classNames = 'container' | 'formControl' | 'inputLabelFocused' 
| 'inputInkbar'| 'textFieldRoot'| 'textFieldInput'| 'textFieldFormLabel';

const styles: StyleRulesCallback<classNames> = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControl: {
    margin: theme.spacing.unit,
  },
  inputLabelFocused: {
    color: purple[500],
  },
  inputInkbar: {
    '&:after': {
      backgroundColor: purple[500],
    },
  },
  textFieldRoot: {
    padding: 0,
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  textFieldInput: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 12px',
    width: 'calc(100% - 14px)',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  textFieldFormLabel: {
    fontSize: 18,
  },
});

type Props = {
  classes?: object,
};

class HomePublic extends React.Component<Props & WithStyles<classNames>> {

  offsetTarget: number;
  state = {
    strokeDashOffset: 0,
    pinPin: false,
    pinUnpin: false
  };

  componentWillMount() {
    // dhsj
  }

  componentDidMount() {
    $('#fullpage').fullpage({
      anchors: ['First', 'Second', 'Third'],
      sectionsColor: ['teal', 'purple', 'orange'],
      fitToSection: true,
      interlockedSlides: false,
      dragAndMove: true,
      offsetSections: true,
      parallax: true,
      parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
      lazyLoading: true,
      navigation: true,
      navigationPosition: 'right',
      navigationTooltips: ['First', 'Second', 'Third']
    });
  }

  componentWillUnmount() {
    $('#fullpage').fullpage({
      navigation: false,
    });
  }
  // tslint:disable-next-line:typedef
  componentDidUpdate(prevProps, prevState, prevContext) {
    $('#fullpage').fullpage({
      anchors: ['First', 'Second', 'Third'],
      sectionsColor: ['teal', 'purple', 'orange'],
      fitToSection: true,
      interlockedSlides: false,
      dragAndMove: true,
      offsetSections: true,
      parallax: true,
      parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
      lazyLoading: true,
      navigation: true,
      navigationPosition: 'right',
      navigationTooltips: ['First', 'Second', 'Third']
    });
  }
  render() {
    const { classes } = this.props;

    return(
      <div id="fullpage">
        <div className="section " id="section0">
          <div className="intro">
            <h1><BigH1 style={{textAlign: 'center'}}>THIS IS UNIZONN</BigH1></h1>
            <h2 
              style={{ fontFamily: 'brandon-grotesque', fontSize: 20, 
              textAlign: 'center',
              marginBottom: 20}}
            >
              Join a thriving and fun community of students 
              <br/>
              and academia worldwide, get started today
            </h2>
            <TextField
              placeholder="Email"
              InputProps={{
                disableUnderline: true,
                classes: {
                  root: classes.textFieldRoot,
                  input: classes.textFieldInput,
                },
              }}
              InputLabelProps={{
                shrink: true,
                className: classes.textFieldFormLabel,
              }}
            />
            <ul style={{justifyContent: 'space-between', alignContent: 'space-between', marginTop: 20}}>
              <li>
                <Button variant={'raised'} className="section-1-button" color={'secondary'}>
                  Get started
                </Button>
              </li>
            </ul>
          </div>
        </div>
        <div className="section" id="section1">
          <div className="slide" id="slide1">
            <div className="intro">
            <h1>Slide 1</h1>
            </div>
          </div>
      
            <div className="slide" id="slide2">
            <h1>Slide 2</h1>
          </div>
        </div>
        <div className="section" id="section2">
          <div className="intro">
            <PageOne />
          </div>
        </div>
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(HomePublic));