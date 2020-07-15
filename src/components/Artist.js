import React from 'react';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import ListItem from './listItem';
import FavoriteIcon from '../favorite.png';
import { ToastsContainer, ToastsStore } from 'react-toasts';
import { connect } from 'react-redux';
import { addToCart } from './actions/Action';
import { ARTIST_SEARCH_QUERY } from './SearchQuery'

class artist extends React.Component {
  //function that send the id and the name to reducer 
  // in order to add them to the favorite card
  handleClick = (id, name) => {
    ToastsStore.success(name + " is added to favorites :)")
    this.props.addToCart(id, name);
  }

  render() {
    let { mbid } = this.props.match.params;
    return (
      <>
        <h1 className="display-4 my-3">Artist Details</h1>
        <Link to="/" className="btn btn-secondary">Back</Link>
        <hr />
        <Query query={ARTIST_SEARCH_QUERY} variables={{ mbid }}>
          {
            ({ loading, error, data }) => {
              if (error) return <h4>Something went wrong.</h4>;
              if (loading) return <h4>Loading...</h4>;

              const { sortName, country, gender, type } = data.lookup.artist;

              return <>
                <div className="card card-body mb-3">
                  <div className="row">
                    <div className="col-md-7">
                      <h4>Name: {sortName}</h4>
                      <h5>Country: {country}</h5>
                      <h5>Gender: {gender}</h5>
                    </div>
                    <div className="col-md-3">
                      <h5>Type: {type}</h5>
                    </div>
                    <div className="col-md-2">
                      <button className="btn btn-secondary" onClick={() => this.handleClick(mbid, sortName)}>
                        <img src={FavoriteIcon} alt="Artists" style={{ width: 20, display: 'inline', margin: 'auto' }} />
                      </button>
                    </div>
                  </div>
                  <ToastsContainer store={ToastsStore} />
                </div>
                <h1 className="display-4 my-3">Releases</h1>
                {
                  data.lookup.artist.releases.nodes.map(src => (
                    <ListItem key={src.id} src={src} />
                  ))
                }
              </>

            }
          }
        </Query>
      </>
    )
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    addToCart: (id, name) => { dispatch(addToCart(id, name)) }
  }
}

export default connect(mapDispatchToProps)(artist)