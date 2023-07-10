require('regenerator-runtime/runtime');

/**
 * 
 * @Component
 */
class OrganismoService {

    /**
     * @Autowired("CinvhaOrganismoModel") 
     */
    organismoModel() {}

    async list() {
        try {
            return await this.organismoModel.findAll()
        } catch (error) {
            next(error)
        }


    }

    async edit(model) {
        try {
            return await this.organismoModel.update({ nombre: model.nombre }, {
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
            return await this.organismoModel.destroy({
                where: {
                    id: model_id
                }
            });
        } catch (error) {
            next(error)
        }
    }

    async create(model) {
        model = model;
        return await this.organismoModel.create(model);

    }


}
module.exports = OrganismoService