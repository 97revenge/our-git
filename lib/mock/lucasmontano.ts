import { userSchema } from "../zod/user";
import z from 'zod';


export const lucasmontano: z.infer<typeof userSchema> = {
  "login": "lucasmontano",
  "id": 100003,
  "node_id": "MDQ6VXNlcjEwMDAwMw==",
  "avatar_url": "https://avatars.githubusercontent.com/u/100003?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/lucasmontano",
  "html_url": "https://github.com/lucasmontano",
  "followers_url": "https://api.github.com/users/lucasmontano/followers",
  "following_url": "https://api.github.com/users/lucasmontano/following{/other_user}",
  "gists_url": "https://api.github.com/users/lucasmontano/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/lucasmontano/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/lucasmontano/subscriptions",
  "organizations_url": "https://api.github.com/users/lucasmontano/orgs",
  "repos_url": "https://api.github.com/users/lucasmontano/repos",
  "events_url": "https://api.github.com/users/lucasmontano/events{/privacy}",
  "received_events_url": "https://api.github.com/users/lucasmontano/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Lucas Montano",
  "company": "Montano Tech",
  "blog": "https://lucasmontano.dev",
  "location": "São Paulo, Brazil",
  "email": "contact@lucasmontano.dev",
  "hireable": true,
  "bio": "Developer Advocate and content creator focused on web development and cloud technologies.",
  "twitter_username": "lucasmontano",
  "public_repos": 60,
  "public_gists": 10,
  "followers": 5000,
  "following": 300,
  "created_at": "2013-09-10T17:20:45Z",
  "updated_at": "2024-08-10T11:05:30Z"
}
