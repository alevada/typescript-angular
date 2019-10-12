import * as _ from 'lodash';
import { GithubApiService } from './GithubApiService';
import { User } from './User';
import { Repo } from './Repo';

let svc = new GithubApiService();
svc.getUserInfo('koushikkothagal', (user: User) => {
    svc.getRepos('koushikkothagal', (reposs: Repo[]) => {
        reposs = _.sortBy(reposs, [function (r) {return r.forkCount * -1}]); // sort by forkCount descending
        reposs = _.take(reposs, 5);
        user.repos = reposs;
        console.log(user);
    });
});

