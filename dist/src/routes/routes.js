"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
const testController = __importStar(require("../controllers/test"));
const router = express.Router();
const setupREST = (router) => {
    return ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'].reduce((ac, i) => {
        ac[i] = (route, ...fns) => router[i.toLowerCase()](route, ...fns);
        return ac;
    }, {});
};
const { GET, POST, PUT, DELETE, PATCH } = setupREST(router);
// GET('/',(req,res)=>{
// res.json({message:'Review app server is up an running'})
// })
//test contollers
POST('/add', testController.addText);
PUT('/add/:id', testController.updateText);
// POST('/signin', userController.userSignIn);
module.exports = router;
