import { ModelsInterface } from "./ModelsInterface";
import * as Sequelize from "sequelize";

export interface DBConnection extends ModelsInterface {

    sequelize: Sequelize.Sequelize

}