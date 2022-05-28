"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkEvent = void 0;
const index_1 = require("../Control/index");
function checkEvent(event) {
    return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
        if (!event.hasOwnProperty('nombre') || typeof event.nombre != 'string')
            throw new index_1.Error('Evento', index_1.Info.ERRORS.EVENT.NO_NAME);
        if (!event.hasOwnProperty('ejecutar') || typeof event.ejecutar != 'function')
            throw new index_1.Error('Evento', index_1.Info.ERRORS.EVENT.NO_EXEC);
        return resolve(true);
    }));
}
exports.checkEvent = checkEvent;
;
//# sourceMappingURL=Evento.js.map