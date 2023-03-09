import {Column, DataType, Model, Table} from "sequelize-typescript";

interface UserCreationAttrs {
    email: string,
    full_name: string,
    password: string
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;
    @Column({type: DataType.STRING})
    full_name: string;
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;
    @Column({type: DataType.STRING})
    password: string;
}
