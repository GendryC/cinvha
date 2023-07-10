/**
 * @Table('lugar')
 * @Model
 * @Schema('cinvha')
 */
class CinvhaLugar extends R.Model {

    /**
     * @Column({
     *	type: DataTypes.INTEGER,
     *	allowNull: false,
     *	comment: "null",
     *	primaryKey: true,
     *	autoIncrement: true
     * })
     */
    id() {}

    /**
     * @Column({
     *	type: DataTypes.STRING,
     *	allowNull: false,
     *	comment: "null"
     * })
     */
    nombre() {}

    /**
     * @Column({
     *	type: DataTypes.INTEGER,
     *	allowNull: false,
     *	comment: "null"
     * })
     */
    id_municipio() {}

}
module.exports = CinvhaLugar