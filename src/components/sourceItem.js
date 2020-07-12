import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import ListItem from './lisItem';
import FavoriteIcon from '../favorite.png';
import { ToastsContainer, ToastsStore } from 'react-toasts';
import { connect } from 'react-redux';
import { addToCart } from './actions/cartActions';

const SEARCH_QUERY = gql`
query SearchQuery($mbid: MBID!)
{
    lookup{
        artist(mbid: $mbid){
            id 
            name
            country
            gender
            type
            sortName
            releases(first:5){
                nodes{
                    id
                    title
                    date
                }
            }
        }
    }
}
`;

class sourceItem extends Component {
    //function that send the id and the name to reducer 
    // in order to add them to the favorite card
    handleClick = (id, name) => {
        this.props.addToCart(id, name);
    }

    render() {
        let { mbid } = this.props.match.params;
        return (
            <Fragment>
                <h1 className="display-4 my-3">Artist Details</h1>
                <Link to="/" className="btn btn-secondary">Back</Link>
                <hr />
                <Query query={SEARCH_QUERY} variables={{ mbid }}>
                    {
                        ({ loading, error, data }) => {
                            if (loading) return <h4>Loading...</h4>

                            const { sortName, country, gender, type } = data.lookup.artist;

                            return <Fragment>
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
                                            <button className="btn btn-secondary" onClick={() => { this.handleClick(mbid, sortName); ToastsStore.success(sortName + " is added to favorites :)") }}>
                                                <img src={FavoriteIcon} alt="Artists" style={{ width: 50, display: 'block', margin: 'auto' }} />
                                            </button>
                                            <ToastsContainer store={ToastsStore} />
                                        </div>
                                    </div>
                                </div>
                                <h1 className="display-4 my-3">Releases</h1>
                                {
                                    data.lookup.artist.releases.nodes.map(src => (
                                        <ListItem key={src.id} src={src} />
                                    ))
                                }
                            </Fragment>

                        }
                    }
                </Query>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        addToCart: (id, name) => { dispatch(addToCart(id, name)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(sourceItem)    