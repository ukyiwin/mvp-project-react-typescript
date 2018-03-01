import glamorous from 'glamorous';

const SharedDiv = glamorous.div({
  textAlign: 'center',
  justifyContent: 'center',
  alignContent: 'center',
  alignItems: 'center',
  paddingLeft: 50,
  paddingRight: 50
});

const BigH1 = glamorous.h3({
  textAlign: 'left',
  fontFamily: 'brandon-grotesque',
  fontSize: 80,
  color: 'white',
  lineHeight: '1.15em',
  fontWeight: 900,
  margin: 0,
  textTransform: 'uppercase',
  textShadow: '0 0.3rem 0.9rem rgba(0,0,0,.4)',
  letterSpacing: -3,
});

export {
  BigH1,
  SharedDiv
};