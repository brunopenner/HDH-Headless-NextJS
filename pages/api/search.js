import { gql } from "@apollo/client";
import client from "client";

const handler = async (req, res) => {
    try{
        const {data} = await client.query({
            query: gql`
            query AllPropertiesQuery {
                properties {
                  nodes {
                    databaseId
                    title
                    uri
                    featuredImage {
                      node {
                        uri
                        title
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
            properties: data.properties.nodes,
        });
    } catch(e) {
        console.log("ERROR: ", e)
    }
};

export default handler;