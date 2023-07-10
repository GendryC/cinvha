/**
 * @Table('organismo')
 * @Model
 * @Schema('cinvha')
 */
class CinvhaOrganismo extends R.Model {

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

}
module.exports = CinvhaOrganismo