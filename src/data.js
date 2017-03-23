import React from 'react';
import Assessment from 'material-ui/svg-icons/action/assessment';
import GridOn from 'material-ui/svg-icons/image/grid-on';
import PermIdentity from 'material-ui/svg-icons/action/perm-identity';
import Web from 'material-ui/svg-icons/av/web';
import {cyan600, pink600, purple600} from 'material-ui/styles/colors';
import ExpandLess from 'material-ui/svg-icons/navigation/expand-less';
import ExpandMore from 'material-ui/svg-icons/navigation/expand-more';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';

/*
json obj returned from github api
{
  "login": "ncfausti",
  "id": 886669,
  "avatar_url": "https://avatars1.githubusercontent.com/u/886669?v=3",
  "gravatar_id": "",
  "url": "https://api.github.com/users/ncfausti",
  "html_url": "https://github.com/ncfausti",
  "followers_url": "https://api.github.com/users/ncfausti/followers",
  "following_url": "https://api.github.com/users/ncfausti/following{/other_user}",
  "gists_url": "https://api.github.com/users/ncfausti/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/ncfausti/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/ncfausti/subscriptions",
  "organizations_url": "https://api.github.com/users/ncfausti/orgs",
  "repos_url": "https://api.github.com/users/ncfausti/repos",
  "events_url": "https://api.github.com/users/ncfausti/events{/privacy}",
  "received_events_url": "https://api.github.com/users/ncfausti/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Nick Fausti",
  "company": null,
  "blog": null,
  "location": "Philadelphia",
  "email": "ncfausti@gmail.com",
  "hireable": null,
  "bio": null,
  "public_repos": 30,
  "public_gists": 0,
  "followers": 2,
  "following": 2,
  "created_at": "2011-06-30T14:59:12Z",
  "updated_at": "2017-03-21T20:00:56Z"
}
*/

let data = {
  profile: {},
  menus: [
    { text: 'Dashboard', icon: <Assessment/>, link: '/dashboard' },
    { text: 'Repos', icon: <Web/>, link: '/form' },
    { text: 'Followers', icon: <GridOn/>, link: '/table' },
    { text: 'Following', icon: <PermIdentity/>, link: '/login' }
  ],
  tablePage: {
    items: [
      {id: 1, name: 'Product 1', price: '$50.00', category: 'Category 1'},
      {id: 2, name: 'Product 2', price: '$150.00', category: 'Category 2'},
      {id: 3, name: 'Product 3', price: '$250.00', category: 'Category 3'},
      {id: 4, name: 'Product 4', price: '$70.00', category: 'Category 4'},
      {id: 5, name: 'Product 5', price: '$450.00', category: 'Category 5'},
      {id: 6, name: 'Product 6', price: '$950.00', category: 'Category 6'},
      {id: 7, name: 'Product 7', price: '$550.00', category: 'Category 7'},
      {id: 8, name: 'Product 8', price: '$750.00', category: 'Category 8'}
    ]
  },
  dashBoardPage: {
    recentProducts: [
      {id: 1, title: 'Facebook App', text: 'Like my picture of cats'},
      {id: 2, title: 'VR Game', text: 'Virtual Reality'},
      {id: 3, title: 'XYZ', text: 'Learn the alphabet'},
      {id: 4, title: 'Notes', text: 'An app to take notes on'}
    ],
    monthlyCommits: [
      {name: 'Jan', uv: 1700},
      {name: 'Feb', uv: 3000},
      {name: 'Mar', uv: 2000},
      {name: 'Apr', uv: 2780},
      {name: 'May', uv: 2000},
      {name: 'Jun', uv: 1800},
      {name: 'Jul', uv: 2600},
      {name: 'Aug', uv: 2900},
      {name: 'Sep', uv: 3500},
      {name: 'Oct', uv: 3000},
      {name: 'Nov', uv: 2400},
      {name: 'Dec', uv: 2780}
    ],
    newOrders: [
      {pv: 2400},
      {pv: 1398},
      {pv: 9800},
      {pv: 3908},
      {pv: 4800},
      {pv: 3490},
      {pv: 4300}
    ],
    browserUsage: [
      {name: 'Chrome', value: 800, color: cyan600, icon: <ExpandMore/>},
      {name: 'Firefox', value: 300, color: pink600, icon: <ChevronRight/>},
      {name: 'Safari', value: 300, color: purple600, icon: <ExpandLess/>}
    ]
  }
};

export default data;
