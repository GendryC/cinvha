'use strict';
const fs = require('fs');

/**
 * Raptor.js - v2
 * Generado automaticamente
 * 
 * @Route("/api/import")
 * @Controller
 * @Import(["./../Services/*"])
 */
class ImportController {

    configure() {

    }

    /**
     * @Autowired("ImportService")
     */
    importService() {}

    /**
     * @Post
     * @Csrf
     */
    async indexAction(req, res, next, Query) {

        //res.json(Query.ruta);
        try {
            var excel2Json = require('node-excel-to-json');

            var data = null;
            excel2Json(Query.ruta, {
                'convert_all_sheet': true,
                'return_type': 'Object',
                //'sheetName': 'LUNES 16'
            }, function(err, output) {
                console.log(Query.ruta)
                data = output;
                //console.log(data);
            });

            res.json(await this.importService.importar(data))


        } catch (error) {
            next(error)
        }
    }
}

module.exports = ImportController;