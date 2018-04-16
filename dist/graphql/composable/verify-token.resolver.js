"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const utils_1 = require("../../utils/utils");
exports.verifyTokenResolver = (resolver) => {
    return (parent, params, context, info) => {
        const token = context.authorization ? context.authorization.split(' ')[1] : undefined;
        jwt.verify(token, utils_1.JWT_SECRET, (err, decoded) => {
            if (!err)
                return resolver(parent, params, context, info);
            throw new Error(`${err.name}: ${err.message}`);
        });
    };
};
