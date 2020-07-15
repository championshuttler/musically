import gql from "graphql-tag";

export const HOME_SEARCH_QUERY = gql`
  query SearchQuery($search: String!) {
    search {
      artists(query: $search, first: 50) {
        nodes {
          id
          name
          mbid
        }
        pageInfo {
          hasNextPage
        }
      }
    }
  }
`;

export const ALBUM_DETAILS_SEARCH_QUERY = gql`
  query SearchQuery($mbid: MBID!) {
    lookup {
      artist(mbid: $mbid) {
        id
        name
        country
        gender
        type
        sortName
        rating {
          value
        }
        recordings {
          nodes {
            title
          }
        }
      }
    }
  }
`;

export const ARTIST_SEARCH_QUERY = gql`
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
