
type Props = {
  url: string,
  size?: number,
  circle?: boolean
};

// tslint:disable-next-line:typedef
const Avatar = (props: Props) => {
  return (
    <figure className="avatar avatar-xl">
      <img 
        width={props.size} 
        height={props.size} 
        src={props.url} 
      />
      <i className="avatar-presence online"/>
    </figure>
  );
};