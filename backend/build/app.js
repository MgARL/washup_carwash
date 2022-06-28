"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = require("./controllers/users");
const appointments_1 = require("./controllers/appointments");
const services_1 = require("./controllers/services");
const vehicles_1 = require("./controllers/vehicles");
require('dotenv').config();
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
//  controllers
app.use('/users', users_1.users);
app.use('/appointments', appointments_1.appointments);
app.use('/services', services_1.services);
app.use('/vehicles', vehicles_1.vehicles);
app.get('*', (req, res) => {
    res.status(404).json({
        message: 'Not Found'
    });
});
exports.default = app;
