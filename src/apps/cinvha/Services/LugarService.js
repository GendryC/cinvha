require('regenerator-runtime/runtime');

/**
 * 
 * @Component
 */
class LugarService {

    /**
     * @Autowired("CinvhaLugarModel") 
     */
    lugarModel() {}

    async list() {
        try {
            return await this.lugarModel.findAll()
        } catch (error) {
            next(error)
        }


    }

    async create(model) {
        model = model;
        return await this.lugarModel.create(model);

    }

    async edit(model) {
        try {
            return await this.lugarModel.update({ nombre: model.nombre }, {
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
            return await this.lugarModel.destroy({
                where: {
                    id: model_id
                }
            });
        } catch (error) {
            next(error)
        }
    }


}
module.exports = LugarService