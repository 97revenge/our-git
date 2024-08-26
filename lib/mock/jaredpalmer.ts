import z from 'zod';
import { userSchema } from '../zod/user';


export const jaredpalmer: z.infer<typeof userSchema> = {
  "login": "jaredpalmer",
  "id": 100005,
  "node_id": "MDQ6VXNlcjEwMDAwNQ==",
  "avatar_url": "https://avatars.githubusercontent.com/u/100005?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/jaredpalmer",
  "html_url": "https://github.com/jaredpalmer",
  "followers_url": "https://api.github.com/users/jaredpalmer/followers",
  "following_url": "https://api.github.com/users/jaredpalmer/following{/other_user}",
  "gists_url": "https://api.github.com/users/jaredpalmer/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/jaredpalmer/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/jaredpalmer/subscriptions",
  "organizations_url": "https://api.github.com/users/jaredpalmer/orgs",
  "repos_url": "https://api.github.com/users/jaredpalmer/repos",
  "events_url": "https://api.github.com/users/jaredpalmer/events{/privacy}",
  "received_events_url": "https://api.github.com/users/jaredpalmer/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Jared Palmer",
  "company": "Palmer HQ",
  "blog": "https://jaredpalmer.com",
  "location": "Austin, TX",
  "email": "jared@palmerhq.com",
  "hireable": true,
  "bio": "Making the web better. Creator of Formik, TSDX, and more.",
  "twitter_username": "jaredpalmer",
  "public_repos": 80,
  "public_gists": 12,
  "followers": 4000,
  "following": 500,
  "created_at": "2012-08-05T14:22:18Z",
  "updated_at": "2024-08-15T09:55:45Z"
}
