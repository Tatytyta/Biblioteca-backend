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
exports.Prestamo = void 0;
const typeorm_1 = require("typeorm");
const usuario_entity_1 = require("../usuarios//usuario.entity");
const libros_entity_1 = require("../libros/libros.entity");
let Prestamo = class Prestamo {
    id;
    usuario;
    libro;
    fechaPrestamo;
    fechaDevolucionEstimada;
    fechaDevolucionReal;
    estado;
};
exports.Prestamo = Prestamo;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Prestamo.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_entity_1.Usuario, usuario => usuario.prestamos),
    __metadata("design:type", usuario_entity_1.Usuario)
], Prestamo.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => libros_entity_1.Libro, libro => libro.prestamos),
    __metadata("design:type", libros_entity_1.Libro)
], Prestamo.prototype, "libro", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Prestamo.prototype, "fechaPrestamo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Prestamo.prototype, "fechaDevolucionEstimada", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], Prestamo.prototype, "fechaDevolucionReal", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'activo' }),
    __metadata("design:type", String)
], Prestamo.prototype, "estado", void 0);
exports.Prestamo = Prestamo = __decorate([
    (0, typeorm_1.Entity)('prestamos')
], Prestamo);
//# sourceMappingURL=prestamo.entity.js.map