require('regenerator-runtime/runtime');

/**
 * 
 * @Component
 */
class EntidadService {

    /**
     * @Autowired("CinvhaEntidadModel") 
     */
    entidadModel() {}

    async list() {
        try {
            return await this.entidadModel.findAll()
        } catch (error) {
            next(error)
        }


    }

    async create(model) {
        model = model;
        return await this.entidadModel.create(model);

    }

    async edit(model) {
        try {
            return await this.entidadModel.update({ nombre: model.nombre }, {
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
            return await this.entidadModel.destroy({
                where: {
                    id: model_id
                }
            });
        } catch (error) {
            next(error)
        }
    }


}
module.exports = EntidadService