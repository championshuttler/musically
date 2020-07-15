import React from "react";
import { Query } from "react-apollo";
import SearchItem from "./SearchItem";
import { HOME_SEARCH_QUERY } from "./SearchQuery";

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }

  updateSearch = (e) => {

    this.setState({
      search: e.target.value,
    });
    localStorage.setItem('search', e.target.value);;
  };

  componentDidMount() {
    if (localStorage.getItem('search')) {
      this.setState({ search: localStorage.getItem('search') })
    }
  }


  render() {
    const { search } = this.state;
    return (
      <>
        <form >
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              onChange={this.updateSearch}
              value={search}
              placeholder="Search for Your Favourist Artist"
            />
          </div>
        </form>
        {search === "" ? (
          <p>Currently its empty please search something :) </p>
        ) : (
            <Query
              query={HOME_SEARCH_QUERY}
              skip={search === ""}
              variables={{ search }}
            >
              {({ loading, error, data = {} }) => {
                if (error) return <h4>Something went wrong.</h4>;
                if (loading) return <h4>Loading...</h4>;

                if (
                  data.search &&
                  data.search.artists &&
                  data.search.artists.nodes
                ) {
                  return (
                    <>
                      <h4>Total results: {data.search.artists.nodes.length}</h4>
                      {data.search.artists.nodes.map((src) => (
                        <SearchItem key={src.mbid} src={src} />
                      ))}
                    </>
                  );
                }
                return <>No data found!</>;
              }}
            </Query>
          )}
      </>
    );
  }
}

export default Home;
