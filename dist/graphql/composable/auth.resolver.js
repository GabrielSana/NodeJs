"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authResolver = (resolver) => {
    return (parent, params, context, info) => {
        if (context.user || context.authorization)
            return resolver(parent, params, context, info);
        throw new Error('Unauthorized! Token not provided!');
    };
};
