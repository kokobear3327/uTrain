const { gql } = require('apollo-server-express');

module.exports = gql`
    type Post {
        _id: ID!
        content: String
        postedBy: User
    }
    # input type
    input PostCreateInput {
        content: String!
    }
    # input type
    input PostUpdateInput {
        _id: String!
        content: String!
    }
    # queries
    type Query {
        totalPosts: Int!
        allPosts(page: Int): [Post!]!
        postsByUser: [Post!]!
        singlePost(postId: String!): Post!
        search(query: String): [Post]
    }
    # mutations
    type Mutation {
        postCreate(input: PostCreateInput!): Post!
        postUpdate(input: PostUpdateInput!): Post!
        postDelete(postId: String!): Post!
    }
    # subscriptions
    type Subscription {
        postAdded: Post
        postUpdated: Post
        postDeleted: Post
    }
`;
