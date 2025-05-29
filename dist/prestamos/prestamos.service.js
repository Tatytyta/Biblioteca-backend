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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrestamosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const prestamo_entity_1 = require("./prestamo.entity");
let PrestamosService = class PrestamosService {
    prestamoRepository;
    constructor(prestamoRepository) {
        this.prestamoRepository = prestamoRepository;
    }
    async create(createPrestamoDto) {
        const prestamo = this.prestamoRepository.create(createPrestamoDto);
        return await this.prestamoRepository.save(prestamo);
    }
    async findAll() {
        return await this.prestamoRepository.find({
            relations: ['usuario', 'libro']
        });
    }
    async findOne(id) {
        const prestamo = await this.prestamoRepository.findOne({
            where: { id },
            relations: ['usuario', 'libro']
        });
        if (!prestamo) {
            throw new common_1.NotFoundException(`Préstamo con ID ${id} no encontrado`);
        }
        return prestamo;
    }
    async update(id, updatePrestamoDto) {
        const prestamo = await this.findOne(id);
        const prestamoActualizado = Object.assign(prestamo, updatePrestamoDto);
        return await this.prestamoRepository.save(prestamoActualizado);
    }
    async remove(id) {
        const prestamo = await this.findOne(id);
        await this.prestamoRepository.remove(prestamo);
    }
};
exports.PrestamosService = PrestamosService;
exports.PrestamosService = PrestamosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(prestamo_entity_1.Prestamo)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PrestamosService);
//# sourceMappingURL=prestamos.service.js.map