import z from 'zod';
import { userSchema } from '../zod/user';



export const shuding: z.infer<typeof userSchema> = {
  "login": "shuding",
  "id": 100002,
  "node_id": "MDQ6VXNlcjEwMDAwMg==",
  "avatar_url": "https://avatars.githubusercontent.com/u/100002?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/shuding",
  "html_url": "https://github.com/shuding",
  "followers_url": "https://api.github.com/users/shuding/followers",
  "following_url": "https://api.github.com/users/shuding/following{/other_user}",
  "gists_url": "https://api.github.com/users/shuding/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/shuding/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/shuding/subscriptions",
  "organizations_url": "https://api.github.com/users/shuding/orgs",
  "repos_url": "https://api.github.com/users/shuding/repos",
  "events_url": "https://api.github.com/users/shuding/events{/privacy}",
  "received_events_url": "https://api.github.com/users/shuding/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Shu Ding",
  "company": "Vercel",
  "blog": "https://shud.in",
  "location": "San Francisco, CA",
  "email": "shu@vercel.com",
  "hireable": false,
  "bio": "Software Engineer at Vercel. Creator of several open-source projects.",
  "twitter_username": "shuding_",
  "public_repos": 30,
  "public_gists": 2,
  "followers": 2500,
  "following": 150,
  "created_at": "2014-04-20T09:15:30Z",
  "updated_at": "2024-07-25T14:10:05Z"
}
