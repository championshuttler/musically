import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import AlbumItem from './AlbumItem';

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
            rating{
              value
            }
      		recordings{
              nodes{
                title
              }
            }
        }
    }
}
`;

export default class AlbumDetails extends Component {
    render() {
        let { mbid } = this.props.match.params;
        return (
            <div>
                <Fragment>
                    <h1 className="display-4 my-3">Album Details</h1>
                    <Link to="/" className="btn btn-secondary">Back</Link>
                    <hr />
                    <Query query={SEARCH_QUERY} variables={{ mbid }}>
                        {
                            ({ loading, error, data }) => {
                                if (loading) return <h4>Loading...</h4>

                                const { name, rating: { value } } = data.lookup.artist;

                                return <Fragment>
                                    <div className="card card-body mb-3">
                                        <div className="row">
                                            <div className="col-md-7">
                                                <h4>Name: {name}</h4>
                                            </div>
                                            <div className="col-md-3">
                                                <h5>Rating: {value}</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <h1 className="display-4 my-3">Recordings</h1>
                                    {
                                        data.lookup.artist.recordings.nodes.map(src => (
                                            <AlbumItem key={src.id} src={src} />
                                        ))
                                    }
                                </Fragment>

                            }
                        }
                    </Query>
                </Fragment>
            </div>
        )
    }
}
