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
exports.Partido = void 0;
const typeorm_1 = require("typeorm");
const jugador_entity_1 = require("./jugador.entity");
const ronda_entity_1 = require("./ronda.entity");
let Partido = class Partido {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Partido.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Partido.prototype, "fecha", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => jugador_entity_1.Jugador, (jugador) => jugador.partidosLocal),
    __metadata("design:type", jugador_entity_1.Jugador)
], Partido.prototype, "jugador1", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => jugador_entity_1.Jugador, (jugador) => jugador.partidosVisitante),
    __metadata("design:type", jugador_entity_1.Jugador)
], Partido.prototype, "jugador2", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Partido.prototype, "puntajeJugador1", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Partido.prototype, "puntajeJugador2", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => jugador_entity_1.Jugador, { nullable: true }),
    __metadata("design:type", jugador_entity_1.Jugador)
], Partido.prototype, "ganador", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ronda_entity_1.Ronda, (ronda) => ronda.partidos),
    __metadata("design:type", ronda_entity_1.Ronda)
], Partido.prototype, "ronda", void 0);
Partido = __decorate([
    (0, typeorm_1.Entity)()
], Partido);
exports.Partido = Partido;
