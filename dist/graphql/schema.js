"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tools_1 = require("graphql-tools");
const query_1 = require("./query");
const mutation_1 = require("./mutation");
const user_schema_1 = require("./resources/user/user.schema");
const post_schema_1 = require("./resources/post/post.schema");
const comment_schema_1 = require("./resources/comment/comment.schema");
const lodash_1 = require("lodash");
const user_resolvers_1 = require("./resources/user/user.resolvers");
const post_resolvers_1 = require("./resources/post/post.resolvers");
const comment_resolvers_1 = require("./resources/comment/comment.resolvers");
const token_schema_1 = require("./resources/token/token.schema");
const token_resolvers_1 = require("./resources/token/token.resolvers");
const resolvers = lodash_1.merge(token_resolvers_1.tokenResolvers, user_resolvers_1.userResolvers, post_resolvers_1.postResolvers, comment_resolvers_1.commentResolvers);
const schemaDefinition = `
    type Schema{
        query: Query
        mutation: Mutation
    }
`;
exports.default = graphql_tools_1.makeExecutableSchema({
    typeDefs: [
        schemaDefinition,
        query_1.Query,
        mutation_1.Mutation,
        token_schema_1.tokenTypes,
        user_schema_1.userTypes,
        post_schema_1.postTypes,
        comment_schema_1.commentTypes
    ],
    resolvers
});
