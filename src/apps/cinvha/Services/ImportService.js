require('regenerator-runtime/runtime');

/**
 * 
 * @Component
 */
class ImportService {


    /**
     * @Autowired("IncidenciasService")
     */
    IncidenciasService() {}

    async importar(data) {
        //console.log(Object.keys(data))
        var uno = Object.keys(data)
            //console.log(uno[0])
        var conteo_modelos = 0;

        for (var j in uno) {

            var datos_en_key = data[uno[j]];
            //console.log(data[uno[j]])

            for (var i in datos_en_key) {

                var model = {
                    fecha: datos_en_key[i].Fecha + " " + datos_en_key[i].Hora,
                    matricula: datos_en_key[i].Matricula,
                    lugar: datos_en_key[i].Lugar,
                    municipio: datos_en_key[i].Municipio,
                    entidad: datos_en_key[i].Entidad,
                    organismo: datos_en_key[i].Organismo
                }

                //console.log(datos_en_key[i].Fecha.toString())

                try {
                    await this.IncidenciasService.create(model, model.fecha, model.matricula);
                    conteo_modelos++;
                    //console.log("Modelo " + i + " creado")

                } catch (error) {}

            }
        }


        console.log("Procesados " + conteo_modelos + " modelos");
        return "OK";

    }
}

module.exports = ImportService