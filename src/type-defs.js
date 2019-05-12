export default `
type File {
  filename: String!
  mimetype: String!
  encoding: String!
}

type Cable {
  id: ID
  lifespan: Int
  diameter: Int
  size: Int
  general_state: String
}

scalar Upload

# Queries
type Query {
  info: String!
  fileUpload(filename: String!): String!
}

# Mutations
type Mutation {
  createCable (size: Int!, diameter: Int!, lifespan: Int!): ID
  updateCable (id: ID!, lifespan: Int, generalState: String): Cable
  deleteCable (id: ID!): Boolean
}
`
