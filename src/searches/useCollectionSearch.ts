import gql from "graphql-tag";

import makeTopLevelSearch from "@saleor/hooks/makeTopLevelSearch";
import { pageInfoFragment } from "@saleor/queries";
import {
  SearchCollections,
  SearchCollectionsVariables
} from "./types/SearchCollections";

export const searchCollections = gql`
  ${pageInfoFragment}
  query SearchCollections($after: String, $first: Int!, $query: String!) {
    search: collections(after: $after, first: $first, query: $query) {
      edges {
        node {
          id
          name
        }
      }
      pageInfo {
        ...PageInfoFragment
      }
    }
  }
`;

export default makeTopLevelSearch<
  SearchCollections,
  SearchCollectionsVariables
>(searchCollections);
