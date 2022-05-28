export default class Failed extends Error {
    private readonly cause;
    constructor(tipo: String, mensaje: String, objectError?: Error);
}
