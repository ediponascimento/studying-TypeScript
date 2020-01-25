import { MatchReader } from "./MatchReader";
import { Summary } from './Summary';

const matchReader = MatchReader.fromCsv('football.csv')
matchReader.load();
// mathesReader.matches

const summary = Summary.sumaryReport('West Ham');

summary.buildAndPrintReport(matchReader.matches);