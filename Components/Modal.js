"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ventana = void 0;
const discord_js_1 = require("discord.js");
const index_1 = require("../Control/index");
class Ventana {
    constructor(props) {
        if (!props.hasOwnProperty('titulo') || typeof props.titulo != 'string')
            throw new index_1.Error('Ventana', index_1.Info.ERRORS.MODAL.NO_TITLE);
        if (!props.hasOwnProperty('id') || typeof props.id != 'string')
            throw new index_1.Error('Ventana', index_1.Info.ERRORS.MODAL.NO_ID);
        if (!props.hasOwnProperty('componentes') || !Array.isArray(props.componentes))
            throw new index_1.Error('Ventana', index_1.Info.ERRORS.MODAL.NO_COMPONENTS);
        if (props.id.length < 1 || props.id.length > 100)
            throw new index_1.Error('Ventana', index_1.Info.ERRORS.MODAL.INVALID_ID_LENGTH);
        if (props.titulo.length < 1 || props.titulo.length > 45)
            throw new index_1.Error('Ventana', index_1.Info.ERRORS.MODAL.INVALID_TITLE_LENGTH);
        if (props.componentes.length < 1 || props.componentes.length > 5)
            throw new index_1.Error('Ventana', index_1.Info.ERRORS.MODAL.COMPONENTS_ITEMS_LIMIT);
        if (props.componentes.some(comp => typeof comp != 'object'))
            throw new index_1.Error('Ventana', index_1.Info.ERRORS.MODAL.COMPONENT_ITEM_INVALID);
        this.componentes = props.componentes;
        this._checkComponents();
        this.titulo = props.titulo;
        this.id = props.id;
    }
    ;
    /**
     *
     * @returns * Ventana ya creada para insertar.
     */
    crear() {
        const ModalCreated = new discord_js_1.Modal()
            .setTitle(this.titulo)
            .setCustomId(this.id);
        const components = this._createComponents();
        for (var i in components) {
            ModalCreated.addComponents(components[i]);
        }
        ;
        return ModalCreated;
    }
    ;
    _createComponents() {
        const components = [];
        this.componentes.map(component => {
            var _a, _b, _c, _d;
            const ActionRow = new discord_js_1.MessageActionRow();
            if (component.tipo == 'INPUT') {
                const styleComponent = {
                    PARRAFO: 'PARAGRAPH',
                    CORTO: 'SHORT'
                };
                const inputComponent = new discord_js_1.TextInputComponent()
                    .setCustomId(component.id)
                    .setLabel(component.label)
                    .setStyle((_a = styleComponent[component.estilo]) !== null && _a !== void 0 ? _a : 'SHORT')
                    .setPlaceholder((_b = component.placeholder) !== null && _b !== void 0 ? _b : ' ')
                    .setRequired((_c = component.requerido) !== null && _c !== void 0 ? _c : false)
                    .setValue((_d = component.valorDefecto) !== null && _d !== void 0 ? _d : '');
                if (component.largoMax && typeof component.largoMax == 'number')
                    inputComponent.setMaxLength(component.largoMax);
                if (component.largoMin && typeof component.largoMin == 'number')
                    inputComponent.setMinLength(component.largoMin);
                ActionRow.addComponents(inputComponent);
                components.push(ActionRow);
            }
            ;
        });
        return components;
    }
    ;
    _checkComponents() {
        const validTypes = ['INPUT'];
        const validStyles = ['CORTO', 'PARAGRAFO'];
        this.componentes.map(component => {
            if (!component.hasOwnProperty('id') || typeof component.id != 'string')
                throw new index_1.Error('Ventana', index_1.Info.ERRORS.MODAL.COMPONENTS('id', 'NO_ID'));
            if (!component.hasOwnProperty('label') || typeof component.label != 'string')
                throw new index_1.Error('Ventana', index_1.Info.ERRORS.MODAL.COMPONENTS('label', 'NO_LABEL'));
            if (!component.hasOwnProperty('tipo') || typeof component.tipo != 'string')
                throw new index_1.Error('Ventana', index_1.Info.ERRORS.MODAL.COMPONENTS('tipo', 'NO_TYPE'));
            if (!validTypes.includes(component.tipo))
                throw new index_1.Error('Ventana', index_1.Info.ERRORS.MODAL.COMPONENTS('tipo', 'INVALID_TYPE'));
            if (component.id.length < 1 || component.id.length > 100)
                throw new index_1.Error('Ventana', index_1.Info.ERRORS.MODAL.COMPONENTS('id', 'INVALID_ID_LENGTH'));
            if (component.label.length < 1 || component.label.length > 45)
                throw new index_1.Error('Ventana', index_1.Info.ERRORS.MODAL.COMPONENTS('label', 'INVALID_LABEL_LENGTH'));
            if (component.tipo == 'INPUT') {
                if (!component.hasOwnProperty('estilo') || typeof component.estilo != 'string')
                    throw new index_1.Error('Ventana', index_1.Info.ERRORS.MODAL.COMPONENTS('estilo', 'NO_STYLE'));
                if (!validStyles.includes(component.estilo))
                    throw new index_1.Error('Ventana', index_1.Info.ERRORS.MODAL.COMPONENTS('estilo', 'INVALID_STYLE'));
                if (component.placeholder && typeof component.placeholder != 'string')
                    throw new index_1.Error('Ventana', index_1.Info.ERRORS.MODAL.COMPONENTS('placeholder', 'NO_PLACEHOLDER'));
                if (component.placeholder && (component.placeholder.length < 1 || component.placeholder.length > 100))
                    throw new index_1.Error('Ventana', index_1.Info.ERRORS.MODAL.COMPONENTS('placeholder', 'INVALID_PLACEHOLDER_LENGTH'));
                if (component.valorDefecto && typeof component.valorDefecto != 'string')
                    throw new index_1.Error('Ventana', index_1.Info.ERRORS.MODAL.COMPONENTS('valorDefecto', 'NO_TYPE_DEFAULT_VAL'));
                if (component.valorDefecto && (component.valorDefecto.length < 50 || component.valorDefecto.length > 4000))
                    throw new index_1.Error('Ventana', index_1.Info.ERRORS.MODAL.COMPONENTS('valorDefecto', 'INVALID_DEFAULT_VAL_LENGTH'));
                if (component.largoMax && isNaN(component.largoMax))
                    throw new index_1.Error('Ventana', index_1.Info.ERRORS.MODAL.COMPONENTS('largoMax', 'INVALD_MAXLENGTH_TYPE'));
                if (component.largoMin && isNaN(component.largoMin))
                    throw new index_1.Error('Ventana', index_1.Info.ERRORS.MODAL.COMPONENTS('largoMin', 'INVALID_MINLENGTH_TYPE'));
                if (component.largoMax && (component.largoMax < 1 || component.largoMax > 4000))
                    throw new index_1.Error('Ventana', index_1.Info.ERRORS.MODAL.COMPONENTS('largoMax', 'INVALID_MAXLENGTH_LENGTH'));
                if (component.largoMin && (component.largoMin < 1 || component.largoMin > 4000))
                    throw new index_1.Error('Ventana', index_1.Info.ERRORS.MODAL.COMPONENTS('largoMin', 'INVALID_MINLENGTH_LENGTH'));
                if (component.hasOwnProperty('requerido') && typeof component.requerido != 'boolean')
                    throw new index_1.Error('Ventana', index_1.Info.ERRORS.MODAL.COMPONENTS('id', 'INVALID_REQUIRED_TYPE'));
            }
            ;
        });
    }
    ;
}
exports.Ventana = Ventana;
;
//# sourceMappingURL=Modal.js.map