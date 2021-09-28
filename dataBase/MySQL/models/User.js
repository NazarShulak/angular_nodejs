const { DataTypes } = require('sequelize');

module.exports = (client) => {
    const Users = client.define(
        'Users',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            age: {
                type: DataTypes.INTEGER,
            },
            gender: {
                type: DataTypes.STRING,
            },
            name: {
                type: DataTypes.STRING
            }
        },
        {
            tableName: 'users',
            timestamps: false
        }
    );

    return Users;
};
