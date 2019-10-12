"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _ = __importStar(require("lodash"));
var GithubApiService_1 = require("./GithubApiService");
var svc = new GithubApiService_1.GithubApiService();
svc.getUserInfo('koushikkothagal', function (user) {
    svc.getRepos('koushikkothagal', function (reposs) {
        reposs = _.sortBy(reposs, [function (r) { return r.forkCount * -1; }]); // sort by forkCount descending
        reposs = _.take(reposs, 5);
        user.repos = reposs;
        console.log(user);
    });
});
