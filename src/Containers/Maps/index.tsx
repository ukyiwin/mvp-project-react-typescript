import * as React from 'react';
import MapComponent from 'Components/Map';
import { Helmet } from 'react-helmet';
import { Query } from 'react-apollo';
import { geolocated, GeolocatedProps } from 'react-geolocated';
import './style.scss';
import Label from 'Components/Label';
import { MyLoader } from 'Components/ArticleList';
import { ErrorComponent, EmptyComponent } from 'Components/EmptyStates';
import LibraryItem from 'Components/LibraryItem';
import { GET_LIBRARY } from 'Graphql/Query';
// tslint:disable
type Props = {
  name?: string
};

class Maps extends React.Component<Props & GeolocatedProps> {

  render() {
    const {coords} = this.props;
    let lat = coords ? coords.latitude : -10.0;
    let lng = coords ? coords.longitude : -19.0;
    return (
      <div className="uk-width-1-1 uk-background-default">
        <Helmet>
          <title>Unizonn | Library</title>
          <meta name="an inclusive community" content="Unizonn community" />
        </Helmet>
        <div className="segment uk-card uk-card-default" style={{minHeight: 290}}>
          <MapComponent 
            lat={lat}
            lng={lng}
            isMarkerShown={true}
          />
        </div>
        <div className="uk-padding-large uk-padding-remove-vertical">
          <section className="content">
            <h4 
              className=" uk-text-middle uk-flex uk-padding-small"
              style={{marginLeft: 90}}
            >Near Libraries
            </h4>
            <Label text="Sorting from the closest" />
            <Query query={GET_LIBRARY}>
              {({data, error, loading, refetch}) => {
                if(loading) {
                  return <MyLoader />
                }
                if(error) {
                  return <ErrorComponent />
                }
                if(data.getLibrary.length === 0) {
                  return <EmptyComponent 
                    title="Oops!!! sorry" 
                    subtitle="Sorry there is no library found near you. Contact us if this information needs to be updated"
                    buttonClick={() => refetch()}
                    />
                }
                return (
                  <div className="uk-flex uk-flex-between grid grid--effect-rigel">
                    {data.getLibrary.map((library, i) => (
                      <LibraryItem library={library} key={library.id} />
                    ))}
                  </div>
                );
              }}
            </Query>
          </section>
        </div>
      </div>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: true,
  },
  userDecisionTimeout: 1000,
})(Maps);

/*

<MapComponent 
            lat={lat}
            lng={lng}
            isMarkerShown={true}
          />
          */