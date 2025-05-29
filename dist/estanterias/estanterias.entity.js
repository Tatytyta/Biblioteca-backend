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
exports.Estanteria = void 0;
const typeorm_1 = require("typeorm");
const libros_entity_1 = require("../libros/libros.entity");
let Estanteria = class Estanteria {
    id;
    codigo;
    ubicacion;
    capacidad;
    descripcion;
    libros;
};
exports.Estanteria = Estanteria;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Estanteria.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Estanteria.prototype, "codigo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Estanteria.prototype, "ubicacion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Estanteria.prototype, "capacidad", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Estanteria.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => libros_entity_1.Libro, libro => libro.estanteria),
    __metadata("design:type", Array)
], Estanteria.prototype, "libros", void 0);
exports.Estanteria = Estanteria = __decorate([
    (0, typeorm_1.Entity)('estanterias')
], Estanteria);
//# sourceMappingURL=estanterias.entity.js.map