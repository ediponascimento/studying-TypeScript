"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
var matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
matchReader.load();
// mathesReader.matches
var summary = Summary_1.Summary.sumaryReport('West Ham');
summary.buildAndPrintReport(matchReader.matches);
