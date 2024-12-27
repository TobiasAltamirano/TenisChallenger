"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jugador = void 0;
const typeorm_1 = require("typeorm");
const partido_entity_1 = require("./partido.entity");
let Jugador = class Jugador {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Jugador.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Jugador.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Jugador.prototype, "apellido", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Jugador.prototype, "edad", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Jugador.prototype, "nacionalidad", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Jugador.prototype, "ranking", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Jugador.prototype, "partidosJugados", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Jugador.prototype, "partidosGanados", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Jugador.prototype, "partidosPerdidos", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => partido_entity_1.Partido, (partido) => partido.jugador1),
    __metadata("design:type", Array)
], Jugador.prototype, "partidosComoJugador1", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => partido_entity_1.Partido, (partido) => partido.jugador2),
    __metadata("design:type", Array)
], Jugador.prototype, "partidosComoJugador2", void 0);
Jugador = __decorate([
    (0, typeorm_1.Entity)()
], Jugador);
exports.Jugador = Jugador;
