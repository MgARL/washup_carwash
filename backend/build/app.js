"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require('dotenv').config();
const users_1 = __importDefault(require("./controllers/users"));
const appointments_1 = __importDefault(require("./controllers/appointments"));
const services_1 = __importDefault(require("./controllers/services"));
const vehicles_1 = __importDefault(require("./controllers/vehicles"));
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
//  controllers
app.use('/users', users_1.default);
app.use('/appointments', appointments_1.default);
app.use('/services', services_1.default);
app.use('/vehicles', vehicles_1.default);
app.get('*', (req, res) => {
    res.status(404).json({
        message: 'Not Found'
    });
});
exports.default = app;
