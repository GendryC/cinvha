'use strict';

/**
 * Raptor.js - v2
 * 
 * @Route("/api/lugar")
 * @Controller
 */
class LugarController {

    configure() {

    }

    /**
     * @Autowired("LugarService")
     */
    Service() {}

    /**
     * @Get
     * @Cors
     */
    async list(req, res, next) {
        try {
            res.json(await this.Service.list());
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

            res.json(await this.Service.create(Query))
        } catch (error) {
            next(error)
        }
        console.log(Query)
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

module.exports = LugarController;