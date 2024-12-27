"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const jugador_module_1 = require("./modules/jugador.module");
const partido_module_1 = require("./modules/partido.module");
const torneo_module_1 = require("./modules/torneo.module");
const ronda_module_1 = require("./modules/ronda.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'tu_usuario',
                password: 'tu_contraseña',
                database: 'torneo_tenis',
                entities: [__dirname + '/**/*.entity{.ts,.js}'],
                synchronize: true,
            }),
            jugador_module_1.JugadorModule,
            partido_module_1.PartidoModule,
            torneo_module_1.TorneoModule,
            ronda_module_1.RondaModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
