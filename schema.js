const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLBoolean } = require('graphql');

// Lunch Type
const LunchType = new GraphQLObjectType({
  name: 'Lunch',
  fields: () => ({
    flight_number: { type: GraphQLInt },
    mission_number: { type: GraphQLString },
    launch_year: { type: GraphQLString },
    launch_date_local: { type: GraphQLString },
    launch_success: { type: GraphQLBoolean },
    rocket: { type: RocketType }
  })
})

// Rocket Type
const RocketType = new GraphQLObjectType({
  name: 'Lunch',
  fields: () => ({
    rocket_id: { type: GraphQLString },
    rocket_name: { type: GraphQLString },
    rocket_type: { type: GraphQLString }
  })
})
