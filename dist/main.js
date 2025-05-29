"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const port = process.env.PORT ?? 3001;
    await app.listen(port);
    console.log(`🚀 Servidor iniciado exitosamente en: http://localhost:${port}`);
}
bootstrap().catch(error => {
    console.error('Error al iniciar el servidor:', error);
    process.exit(1);
});
//# sourceMappingURL=main.js.map