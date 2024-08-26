import z from 'zod';
import { userSchema } from '../zod/user';


export const developit: z.infer<typeof userSchema> = {
  "login": "developit",
  "id": 100009,
  "node_id": "MDQ6VXNlcjEwMDAwOQ==",
  "avatar_url": "https://avatars.githubusercontent.com/u/100009?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/developit",
  "html_url": "https://github.com/developit",
  "followers_url": "https://api.github.com/users/developit/followers",
  "following_url": "https://api.github.com/users/developit/following{/other_user}",
  "gists_url": "https://api.github.com/users/developit/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/developit/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/developit/subscriptions",
  "organizations_url": "https://api.github.com/users/developit/orgs",
  "repos_url": "https://api.github.com/users/developit/repos",
  "events_url": "https://api.github.com/users/developit/events{/privacy}",
  "received_events_url": "https://api.github.com/users/developit/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Jason Miller",
  "company": "Google",
  "blog": "https://jasonformat.com",
  "location": "Toronto, Canada",
  "email": "jason@developit.ca",
  "hireable": false,
  "bio": "Web performance enthusiast. Creator of Preact and other open-source projects.",
  "twitter_username": "developit",
  "public_repos": 70,
  "public_gists": 9,
  "followers": 6000,
  "following": 350,
  "created_at": "2011-02-14T16:30:00Z",
  "updated_at": "2024-08-22T13:20:40Z"
}
