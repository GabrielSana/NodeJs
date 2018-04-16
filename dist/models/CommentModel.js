"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (sequelize, Datatype) => {
    const Comment = sequelize.define('Comment', {
        id: {
            type: Datatype.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        comment: {
            type: Datatype.TEXT,
            allowNull: false
        }
    }, {
        tableName: 'comments'
    });
    Comment.associate = (models) => {
        Comment.belongsTo(models.Post, {
            foreignKey: {
                allowNull: false,
                field: 'post',
                name: 'post'
            }
        });
        Comment.belongsTo(models.User, {
            foreignKey: {
                allowNull: false,
                field: 'user',
                name: 'user'
            }
        });
    };
    return Comment;
};
