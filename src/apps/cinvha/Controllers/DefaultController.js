'use strict';

/**
 * Raptor.js - v2
 * 
 * @Route("/")
 * @Controller
 */
class cinvha {

    configure() {

    }

    /**
     * @Get("api/status")
     */
    indexAction(req, res, next) {

        res.json({ status: "Todo bien" });
    }
}

module.exports = cinvha;