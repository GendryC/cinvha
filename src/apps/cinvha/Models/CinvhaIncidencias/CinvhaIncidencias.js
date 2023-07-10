/**
 * @Table('incidencias')
 * @Model
 * @Schema('cinvha')
 */
class CinvhaIncidencias extends R.Model {

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
     *	type: DataTypes.DATE,
     *	allowNull: false,
     *	comment: "null"
     * })
     */
    fecha() {}

    /**
     * @Column({
     *	type: DataTypes.STRING,
     *	allowNull: false,
     *	comment: "null"
     * })
     */
    matricula() {}

    /**
     * @Column({
     *	type: DataTypes.INTEGER,
     *	allowNull: false,
     *	comment: "null"
     * })
     */
    id_lugar() {}

    /**
     * @Column({
     *	type: DataTypes.INTEGER,
     *	allowNull: false,
     *	comment: "null"
     * })
     */
    id_entidad() {}

}
module.exports = CinvhaIncidencias