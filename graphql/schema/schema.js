import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge";
import { utils_typeDef } from "../typeDefs/utils_typeDef.js";
import { utils_resolver } from "../resolvers/utils_resolver.js";





export const typeDefs = mergeTypeDefs([

    utils_typeDef,
])



export const resolvers = mergeResolvers([

    utils_resolver,
])