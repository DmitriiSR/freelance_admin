"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function start() {
    var _a;
    const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 5000;
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(PORT, () => console.log(`server starts on port ${PORT}`));
}
start();
//# sourceMappingURL=main.js.map