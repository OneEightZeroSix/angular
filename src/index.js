import angular from "angular";
var app = angular.module("ng-app", []);
import "./styles/weui.css";
import "./styles/index.css";
// 头部控制器
import searchCtrl from "./controllers/searchCtrl.js";
searchCtrl(app);

import headerCtrl from "./controllers/headerCtrl.js";
headerCtrl(app);
