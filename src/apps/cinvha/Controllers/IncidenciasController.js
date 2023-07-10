'use strict';
require('regenerator-runtime/runtime');

/**
 * Raptor.js - v2
 * Generado automaticamente
 * 
 * @Route("/api/incidencias")
 * @Controller
 * @Import(["./../Services/*"])
 */
class IncidenciasController {

    configure() {

    }

    /**
     * @Autowired("IncidenciasService")
     */
    Service() {}

    /**
     * @Get
     * @Cors
     */
    async list(req, res, next, Query) {
        try {
            res.json(await this.Service.list(Query));
        } catch (error) {
            res.json({ problem: error })
        }

    }

    /**
     * @Post
     * @Csrf
     */
    async add(req, res, next, Query) {
        try {
            res.json(await this.Service.create(Query, Query.fecha, Query.matricula))
        } catch (error) {
            next(error)
        }
    }

    /**
     * @Post("/find")
     * @Csrf
     */
    async find(req, res, next, Query) {
        try {
            console.log(Query)
            res.json(await this.Service.find(Query));
        } catch (error) {
            next(error)
        }
    }

    /**
     * @Patch
     * @Csrf
     */
    async edit(req, res, next, Query) {
        try {
            res.json(await this.Service.edit(Query));
        } catch (error) {
            res.json({ problem: error })
        }
    }

    /**
     * @Delete
     * @Csrf
     */
    async delete(req, res, next, Query) {
        try {
            res.json(await this.Service.delete(Query.id));
        } catch (error) {
            res.json({ problem: error })
        }
    }


}

module.exports = IncidenciasController;