/**
 * @Table('entidad')
 * @Model
 * @Schema('cinvha')
 */
class CinvhaEntidad extends R.Model {

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
     *	allowNull: true,
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
    id_organismo() {}

}
module.exports = CinvhaEntidad