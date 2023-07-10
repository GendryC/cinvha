require('regenerator-runtime/runtime');

/**
 * 
 * @Component
 */
class IncidenciasService {

    /**
     * @Autowired("CinvhaIncidenciasModel") 
     */
    incidenciasModel() {}

    /**
     * @Autowired("CinvhaLugarModel")
     */
    lugarModel() {}

    /**
     * @Autowired("CinvhaMunicipioModel")
     */
    municipioModel() {}

    /**
     * @Autowired("CinvhaEntidadModel")
     */
    entidadModel() {}

    /**
     * @Autowired("CinvhaOrganismoModel")
     */
    organismoModel() {}

    async list(Query) {
        if (Query.matricula) {
            console.log("Matchs");
            return await this.incidenciasModel.findAndCountAll({
                where: {
                    matricula: Query.matricula
                }
            })
        } else {
            console.log("No matchs");
            try {
                return await this.incidenciasModel.findAll()
            } catch (error) {
                next(error)
            }
        }




    }

    async create(Query, date, matric) {

        var municipioSaved = await this.municipioModel.findOrCreate({
            where: {
                nombre: Query.municipio
            },
            defaults: {
                nombre: Query.municipio
            }
        })

        //console.log(municipioSaved[0].id)

        var lugarSaved = await this.lugarModel.findOrCreate({
            where: {
                nombre: Query.lugar
            },
            defaults: {
                nombre: Query.lugar,
                id_municipio: municipioSaved[0].id
            }
        })

        var organismoSaved = await this.organismoModel.findOrCreate({
            where: {
                nombre: Query.organismo
            },
            defaults: {
                nombre: Query.organismo
            }
        })

        //console.log(municipioSaved[0].id)

        var entidadSaved = await this.entidadModel.findOrCreate({
            where: {
                nombre: Query.entidad
            },
            defaults: {
                nombre: Query.entidad,
                id_organismo: organismoSaved[0].id
            }
        })

        var model = {
            fecha: date,
            matricula: matric,
            id_lugar: lugarSaved[0].id,
            id_entidad: entidadSaved[0].id
        };
        // return await this.incidenciasModel.create(model);
        return await this.incidenciasModel.findOrCreate({
            where: {
                matricula: matric,
                fecha: date,
            },
            defaults: model
        });
    }

    async find(Query) {

    }


    async edit(model) {
        try {
            return await this.incidenciasModel.update({ nombre: model.matricula, model: fecha, model: id_lugar, model: id_entidad }, {
                where: {
                    id: model.id
                }
            });
        } catch (error) {
            next(error)
        }


    }

    async delete(model_id) {
        try {
            return await this.incidenciasModel.destroy({
                where: {
                    id: model_id
                }
            });
        } catch (error) {
            next(error)
        }
    }
}
module.exports = IncidenciasService