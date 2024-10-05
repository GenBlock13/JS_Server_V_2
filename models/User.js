import { Model, Datatypes } from 'sequelize'
import { sequelize } from '../config/db.js'
import { Token } from './Token.js'

class User extends Model { }

User.init({
    id: { type: Datatypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: Datatypes.STRING, allowNull: false },
    email: { type: Datatypes.STRING, unique: true, allowNull: false },
    password: { type: Datatypes.STRING, allowNull: false },
    role: { type: Datatypes.STRING, defaultValue: 'USER' },
},
    {
        sequelize,
        modelName: 'user',
        tableName: 'users',
    }
)

User.hasOne(Token)
Token.belongsTo(User)

export { User }