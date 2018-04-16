import { ComposableResolver } from "./composable.resolver";
import { ResolverContext } from "../../interfaces/ResolverContextInterface";
import { GraphQLFieldResolver } from "graphql";

export const authResolver: ComposableResolver<any, ResolverContext> = 
    (resolver: GraphQLFieldResolver<any, ResolverContext>): GraphQLFieldResolver<any, ResolverContext> => {

        return (parent, params, context: ResolverContext, info) => {
            if(context.user || context.authorization)
                return resolver(parent, params, context, info)

            throw new Error('Unauthorized! Token not provided!')
        }

    }