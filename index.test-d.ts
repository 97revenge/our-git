import { expectType } from "tsd";
import concat from "./lib";

expectType<string>(concat("foo", "bar"));
expectType<string>(concat(1, 2));
