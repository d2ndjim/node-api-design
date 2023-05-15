"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var express_validator_1 = require("express-validator");
var middleware_1 = require("./modules/middleware");
var product_1 = require("./handlers/product");
var update_1 = require("./handlers/update");
var router = (0, express_1.Router)();
router.get("/product", product_1.getProducts);
router.get("/product/:id", product_1.getOneProduct);
router.post("/product", (0, express_validator_1.body)("name").isString(), middleware_1.handleInputErrors, product_1.createProduct);
router.put("/product/:id", (0, express_validator_1.body)("name").isString(), middleware_1.handleInputErrors, product_1.updateProduct);
router.delete("/product/:id", product_1.deleteProduct);
/**
 * Update
 */
router.get("/update", update_1.getUpdates);
router.get("/update/:id", update_1.getOneUpdate);
router.post("/update", [(0, express_validator_1.body)("title").exists().isString(),
    (0, express_validator_1.body)("body").exists().isString(),
], middleware_1.handleInputErrors, update_1.createUpdate);
router.put("/update/:id", [(0, express_validator_1.body)("title").optional(),
    (0, express_validator_1.body)("body").optional(),
    (0, express_validator_1.body)('status').isIn(["IN_PROGRESS", "LIVE", "DEPRECATED"]),
    (0, express_validator_1.body)("version").optional(),
], middleware_1.handleInputErrors, update_1.updateUpdate);
router.delete("/update/:id", product_1.deleteProduct);
/**
 * UpdatePoint
 */
router.get("/updatepoint", function (req, res) { });
router.get("/updatepoint/:id", function (req, res) { });
router.post("/updatepoint", [(0, express_validator_1.body)("name").isString(), (0, express_validator_1.body)("description").isString()], (0, express_validator_1.body)("updateId").exists().isString(), middleware_1.handleInputErrors, function (req, res) { });
router.put("/updatepoint/:id", [(0, express_validator_1.body)("name").optional().isString(), (0, express_validator_1.body)("description").optional().isString()], middleware_1.handleInputErrors, function (req, res) { });
router.delete("/updatepoint/:id", function (req, res) { });
exports.default = router;
//# sourceMappingURL=router.js.map