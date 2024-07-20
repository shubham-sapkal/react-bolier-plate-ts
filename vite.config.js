var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import sass from 'sass';
import { readFile, writeFile } from 'fs/promises';
import { fileURLToPath } from 'url';
function reactVirtualized() {
    var WRONG_CODE = "import { bpfrpt_proptype_WindowScroller } from \"../WindowScroller.js\";";
    return {
        name: 'my:react-virtualized',
        configResolved: function () {
            return __awaiter(this, void 0, void 0, function () {
                var reactVirtualizedPath, brokenFilePath, brokenCode, fixedCode;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            reactVirtualizedPath = path.dirname(fileURLToPath(import.meta.resolve('react-virtualized')));
                            brokenFilePath = path.join(reactVirtualizedPath, '..', // back to dist
                            'es', 'WindowScroller', 'utils', 'onScroll.js');
                            return [4 /*yield*/, readFile(brokenFilePath, 'utf-8')];
                        case 1:
                            brokenCode = _a.sent();
                            fixedCode = brokenCode.replace(WRONG_CODE, '');
                            return [4 /*yield*/, writeFile(brokenFilePath, fixedCode)];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        },
    };
}
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), reactVirtualized()],
    css: {
        preprocessorOptions: {
            scss: {
                implementation: sass,
            },
        },
    },
    resolve: {
        alias: {
            src: '/src',
        },
    },
    server: {
        host: true,
    },
});
