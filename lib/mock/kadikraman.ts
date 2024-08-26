import z from 'zod';
import { userSchema } from '../zod/user';


export const kadikraman: z.infer<typeof userSchema> = {
  "login": "kadikraman",
  "id": 100008,
  "node_id": "MDQ6VXNlcjEwMDAwOA==",
  "avatar_url": "https://avatars.githubusercontent.com/u/100008?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/kadikraman",
  "html_url": "https://github.com/kadikraman",
  "followers_url": "https://api.github.com/users/kadikraman/followers",
  "following_url": "https://api.github.com/users/kadikraman/following{/other_user}",
  "gists_url": "https://api.github.com/users/kadikraman/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/kadikraman/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/kadikraman/subscriptions",
  "organizations_url": "https://api.github.com/users/kadikraman/orgs",
  "repos_url": "https://api.github.com/users/kadikraman/repos",
  "events_url": "https://api.github.com/users/kadikraman/events{/privacy}",
  "received_events_url": "https://api.github.com/users/kadikraman/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Kadi Kraman",
  "company": "React Native Europe",
  "blog": "https://kadikraman.com",
  "location": "Tallinn, Estonia",
  "email": "kadi@kraman.com",
  "hireable": false,
  "bio": "Mobile developer specializing in React Native and cross-platform solutions.",
  "twitter_username": "kadikraman",
  "public_repos": 35,
  "public_gists": 4,
  "followers": 1200,
  "following": 220,
  "created_at": "2015-11-08T07:55:22Z",
  "updated_at": "2024-08-18T21:45:50Z"
}
