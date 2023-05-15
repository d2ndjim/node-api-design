"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router_1 = __importDefault(require("./router"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var auth_1 = require("./modules/auth");
var user_1 = require("./handlers/user");
var app = (0, express_1.default)();
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
// app.use((req, res, next) => {
//   req.shh_secret = "shh";
//   next();
// });
app.get("/", function (req, res) {
    // console.log("GET /");
    res.status(200);
    res.json({ message: "Hello World!" });
});
app.use("/api", auth_1.protect, router_1.default);
app.post("/user", user_1.createNewUser);
app.post("/signin", user_1.signin);
exports.default = app;
//# sourceMappingURL=server.js.map