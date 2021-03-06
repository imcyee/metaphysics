import { GraphQLObjectType, GraphQLString } from "graphql"
import { ResolverContext } from "types/graphql"
import { InternalIDFields } from "schema/v1/object_identification"
import { deprecate } from "lib/deprecation"

const AttributionClass = new GraphQLObjectType<any, ResolverContext>({
  name: "AttributionClass",
  description: "Collection of fields that describe attribution class",
  fields: {
    ...InternalIDFields,
    name: {
      type: GraphQLString,
      description: "Shortest form of attribution class display",
    },
    info: {
      type: GraphQLString,
      description:
        "Descriptive phrase used as companion for attribution class name display",
    },
    short_description: {
      type: GraphQLString,
      deprecationReason: deprecate({
        inVersion: 2,
        preferUsageOf: "shortDescription",
      }),
      description: "Longer version of attribution class display",
    },
    long_description: {
      type: GraphQLString,
      deprecationReason: deprecate({
        inVersion: 2,
        preferUsageOf: "longDescription",
      }),
      description:
        "Long descriptive phrase used as companion for short_description",
    },
    shortDescription: {
      type: GraphQLString,
      description: "Longer version of attribution class display",
      resolve: ({ short_description }) => {
        return short_description
      },
    },
    longDescription: {
      type: GraphQLString,
      description:
        "Long descriptive phrase used as companion for short_description",
      resolve: ({ long_description }) => {
        return long_description
      },
    },
  },
})

export default AttributionClass
