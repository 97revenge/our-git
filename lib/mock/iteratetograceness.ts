import z from 'zod';
import { userSchema } from '../zod/user';


export const iteratetograceness: z.infer<typeof userSchema> = {
  "login": "iteratetograceness",
  "id": 100004,
  "node_id": "MDQ6VXNlcjEwMDAwNA==",
  "avatar_url": "https://avatars.githubusercontent.com/u/100004?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/iteratetograceness",
  "html_url": "https://github.com/iteratetograceness",
  "followers_url": "https://api.github.com/users/iteratetograceness/followers",
  "following_url": "https://api.github.com/users/iteratetograceness/following{/other_user}",
  "gists_url": "https://api.github.com/users/iteratetograceness/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/iteratetograceness/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/iteratetograceness/subscriptions",
  "organizations_url": "https://api.github.com/users/iteratetograceness/orgs",
  "repos_url": "https://api.github.com/users/iteratetograceness/repos",
  "events_url": "https://api.github.com/users/iteratetograceness/events{/privacy}",
  "received_events_url": "https://api.github.com/users/iteratetograceness/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Grace Hopper",
  "company": "Tech Pioneers Inc.",
  "blog": "https://gracehopper.tech",
  "location": "New York, NY",
  "email": "grace@hopper.tech",
  "hireable": false,
  "bio": "Passionate about computer science education and empowering women in tech.",
  "twitter_username": "grace_hopper",
  "public_repos": 25,
  "public_gists": 3,
  "followers": 800,
  "following": 100,
  "created_at": "2016-01-22T08:45:12Z",
  "updated_at": "2024-06-30T16:40:00Z"
}
