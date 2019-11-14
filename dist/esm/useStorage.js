var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
// Inspired by useLocalStorage from https://usehooks.com/useLocalStorage/
import { useState, useEffect } from 'react';
import { Plugins } from '@capacitor/core';
export function useStorage() {
    var Storage = Plugins.Storage;
    function get(key) {
        return __awaiter(this, void 0, void 0, function () {
            var v;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Storage.get({ key: key })];
                    case 1:
                        v = _a.sent();
                        if (v) {
                            return [2 /*return*/, v.value];
                        }
                        return [2 /*return*/, null];
                }
            });
        });
    }
    function set(key, value) {
        return Storage.set({ key: key, value: value });
    }
    function remove(key) {
        return Storage.remove({ key: key });
    }
    function keys() {
        return Storage.keys();
    }
    function clear() {
        return Storage.clear();
    }
    return { get: get, set: set, remove: remove, keys: keys, clear: clear };
}
export function useStorageItem(key, initialValue) {
    var _this = this;
    var Storage = Plugins.Storage;
    var _a = useState(null), storedValue = _a[0], setStoredValue = _a[1];
    useEffect(function () {
        function loadValue() {
            return __awaiter(this, void 0, void 0, function () {
                var value, e_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, Storage.get({ key: key })];
                        case 1:
                            value = _a.sent();
                            setStoredValue(value.value ? JSON.parse(value.value) : initialValue);
                            return [3 /*break*/, 3];
                        case 2:
                            e_1 = _a.sent();
                            return [2 /*return*/, initialValue];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        }
        loadValue();
    }, [Storage, setStoredValue, initialValue, key]);
    var setValue = function (value) { return __awaiter(_this, void 0, void 0, function () {
        var e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    setStoredValue(value);
                    return [4 /*yield*/, Storage.set({ key: key, value: JSON.stringify(value) })];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    e_2 = _a.sent();
                    console.error(e_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    return [storedValue, setValue];
}
//# sourceMappingURL=useStorage.js.map