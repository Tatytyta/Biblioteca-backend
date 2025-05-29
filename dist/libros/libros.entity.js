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
exports.Libro = void 0;
const typeorm_1 = require("typeorm");
const genero_entity_1 = require("../generos/genero.entity");
const estanterias_entity_1 = require("../estanterias/estanterias.entity");
const prestamo_entity_1 = require("../prestamos/prestamo.entity");
let Libro = class Libro {
    id;
    titulo;
    autor;
    ISBN;
    genero;
    estanteria;
    ejemplaresDisponibles;
    fechaPublicacion;
    prestamos;
};
exports.Libro = Libro;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Libro.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Libro.prototype, "titulo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Libro.prototype, "autor", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Libro.prototype, "ISBN", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => genero_entity_1.Genero, genero => genero.libros),
    __metadata("design:type", genero_entity_1.Genero)
], Libro.prototype, "genero", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => estanterias_entity_1.Estanteria, estanteria => estanteria.libros),
    __metadata("design:type", estanterias_entity_1.Estanteria)
], Libro.prototype, "estanteria", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 1 }),
    __metadata("design:type", Number)
], Libro.prototype, "ejemplaresDisponibles", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], Libro.prototype, "fechaPublicacion", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => prestamo_entity_1.Prestamo, prestamo => prestamo.libro),
    __metadata("design:type", Array)
], Libro.prototype, "prestamos", void 0);
exports.Libro = Libro = __decorate([
    (0, typeorm_1.Entity)('libros')
], Libro);
//# sourceMappingURL=libros.entity.js.map