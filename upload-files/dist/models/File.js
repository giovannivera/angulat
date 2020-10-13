"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    title: String,
    description: String,
    nombre: String,
    archivoPath: String
});
exports.default = mongoose_1.model('File', schema);
