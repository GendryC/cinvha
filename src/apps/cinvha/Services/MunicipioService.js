require('regenerator-runtime/runtime');

/**
 * 
 * @Component
 */
class MunicipioService {

    /**
     * @Autowired("CinvhaMunicipioModel") 
     */
    municipioModel() {}

    async list() {
        try {
            return await this.municipioModel.findAll()
        } catch (error) {
            next(error)
        }


    }

    async create(model) {
        model = model;
        return await this.municipioModel.create(model);

    }

    async edit(model) {
        try {
            return await this.municipioModel.update({ nombre: model.nombre }, {
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
            return await this.municipioModel.destroy({
                where: {
                    id: model_id
                }
            });
        } catch (error) {
            next(error)
        }
    }


}
module.exports = MunicipioService