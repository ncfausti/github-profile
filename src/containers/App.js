import React, { PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../components/Header';
import LeftDrawer from '../components/LeftDrawer';
import withWidth, {LARGE, SMALL} from 'material-ui/utils/withWidth';
import ThemeDefault from '../theme-default';
import Data from '../data';
import axios from 'axios';

class App extends React.Component {

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
  constructor(props) {
    super(props);
    this.state = {
      navDrawerOpen: false,
      profile: {},
      username: 'ncfausti',
      profileImg: "../images/profile-pic.png"
    };
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.state.username}`)
      .then(res => {
        const profile = res.data;
        this.setState({ profile });
        Data.menus[0].text = "Repos"

        // Update all data fieds here
      });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.width !== nextProps.width) {
      this.setState({navDrawerOpen: nextProps.width === LARGE});
    }
  }

  handleChangeRequestNavDrawer() {
    this.setState({
      navDrawerOpen: !this.state.navDrawerOpen
    });
  }

  render() {
    let { navDrawerOpen } = this.state;
    const paddingLeftDrawerOpen = 236;

    const styles = {
      header: {
        paddingLeft: navDrawerOpen ? paddingLeftDrawerOpen : 0
      },
      container: {
        margin: '80px 20px 20px 15px',
        paddingLeft: navDrawerOpen && this.props.width !== SMALL ? paddingLeftDrawerOpen : 0
      }
    };

    return (
      <MuiThemeProvider muiTheme={ThemeDefault}>
        <div>
          <Header styles={styles.header}
                  handleChangeRequestNavDrawer={this.handleChangeRequestNavDrawer.bind(this)}/>

            <LeftDrawer navDrawerOpen={navDrawerOpen}
                        menus={Data.menus}
                        realName={this.state.profile.name}
                        profileImg={this.state.profile.avatar_url} />

            <div style={styles.container}>
              {this.props.children}
            </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
  width: PropTypes.number
};

export default withWidth()(App);
