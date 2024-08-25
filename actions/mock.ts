"use server"
import { userSchema } from '@/lib/zod/user';
import z from 'zod';





export const mock = () => {

  const instance: z.infer<typeof userSchema> = {
    "login": "97revenge",
    "id": 80254945,
    "node_id": "MDQ6VXNlcjgwMjU0OTQ1",
    "avatar_url": "https://avatars.githubusercontent.com/u/80254945?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/97revenge",
    "html_url": "https://github.com/97revenge",
    "followers_url": "https://api.github.com/users/97revenge/followers",
    "following_url": "https://api.github.com/users/97revenge/following{/other_user}",
    "gists_url": "https://api.github.com/users/97revenge/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/97revenge/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/97revenge/subscriptions",
    "organizations_url": "https://api.github.com/users/97revenge/orgs",
    "repos_url": "https://api.github.com/users/97revenge/repos",
    "events_url": "https://api.github.com/users/97revenge/events{/privacy}",
    "received_events_url": "https://api.github.com/users/97revenge/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Matheus Pereira ",
    "company": null,
    "blog": "",
    "location": "São Paulo , SP , Brazil. ",
    "email": null,
    "hireable": true,
    "bio": "Working  hard",
    "twitter_username": null,
    "public_repos": 28,
    "public_gists": 9,
    "followers": 30,
    "following": 43,
    "created_at": "2021-03-08T10:28:17Z",
    "updated_at": "2024-08-11T01:01:45Z"
  }




  return {
    instance
  }
}