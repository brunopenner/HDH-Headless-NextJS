import { gql } from "@apollo/client";
import client from "client";

const handler = async (req, res) => {
    try{
        const {data} = await client.query({
            query: gql`
            query AllPropertiesQuery {
                properties(where: {offsetPagination: {offset: 0, size: 3}}) {
                  pageInfo {
                    offsetPagination {
                        total
                    }
                  }
                  nodes {
                    databaseId
                    title
                    uri
                    featuredImage {
                      node {
                        uri
                        sourceUrl
                      }
                    }
                    propertyFeatures {
                      bathrooms
                      bedrooms
                      hasParking
                      petFriendly
                      price
                    }
                  }
                }
              }
            `,
        });
        return res.status(200).json({
            total: data.properties.pageInfo.offsetPagination.total,
            properties: data.properties.nodes,
        });
    } catch(e) {
        console.log("ERROR: ", e)
    }
};

export default handler;