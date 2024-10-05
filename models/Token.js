import { Model, Datatypes } from 'sequelize'
import { sequelize } from '../config/db.js'

class Token extends Model {}

Token.init({
    id: {type: Datatypes.INTEGER, primaryKey:true, autoIncrement: true},
    refreshToken: { type: Datatypes.STRING, allowNull: false}
    },
    {
        sequelize,
        modelName: 'token',
        tableName: 'tokens',
    }
)

export { Token }