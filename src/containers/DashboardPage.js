import React from 'react';
import {cyan600, pink600, purple600, orange600} from 'material-ui/styles/colors';
import Assessment from 'material-ui/svg-icons/action/assessment';
// import Face from 'material-ui/svg-icons/action/face';
import ThumbUp from 'material-ui/svg-icons/action/thumb-up';
// import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import DateRange from 'material-ui/svg-icons/action/date-range';
import Code from 'material-ui/svg-icons/action/code';
import InfoBox from '../components/dashboard/InfoBox';
// import NewOrders from '../components/dashboard/NewOrders';
import MonthlyCommits from '../components/dashboard/MonthlyCommits';
// import BrowserUsage from '../components/dashboard/BrowserUsage';
import RecentRepos from '../components/dashboard/RecentRepos';
import Paper from 'material-ui/Paper';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
// import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

import globalStyles from '../styles';
import Data from '../data';

// const DashboardPage = () => {
class DashboardPage extends React.Component {

  constructor(props) {
    super(props);
    this.styles = {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
    gridList: {
      width: 500,
      height: 450,
      overflowY: 'auto',
    },
    paper: {
      backgroundColor: pink600,
      height: 150,
      padding:"0px !important"
    },
    div: {
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '95%',
      height: 85
    },
    header: {
      color: "white",
      backgroundColor: "green",
      padding: 10
    }
  };

  this.tilesData = [
  {
    img: 'https://tctechcrunch2011.files.wordpress.com/2015/04/codecode.jpg?w=738',
    title: 'Scala Conference',
    author: 'jill111',
  },
  {
    img: 'https://static.esea.net/global/images/users/679944.1458605905.jpg',
    title: 'Cybersecurity',
    author: 'H4ckerz',
  },
  {
    img: 'http://cdn.wallpapersafari.com/83/73/6oIFGZ.jpeg',
    title: 'The Matrix',
    author: 'Neo',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cheeseburger.jpg/300px-Cheeseburger.jpg',
    title: 'Free Cheeseburger',
    author: 'Ronald M.',
  }
];

  }


  formatDate(d) {
    let date = new Date(d);
    return date.toDateString();
  }
  render() {

  return (
    <div>
      <h3 style={globalStyles.navigation}>Profile / Dashboard</h3>

      <div className="row">

        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
          <InfoBox Icon={Code}
                   color={pink600}
                   title="Public Repos"
                   value={this.props.profile.public_repos}
          />
        </div>


        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
          <InfoBox Icon={ThumbUp}
                   color={cyan600}
                   title="Following"
                   value={this.props.profile.following}
          />
        </div>

        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
          <InfoBox Icon={Assessment}
                   color={purple600}
                   title="Followers"
                   value={this.props.profile.followers}

          />
        </div>

        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
          <InfoBox Icon={DateRange}
                   color={orange600}
                   title="Member Since"
                   value={this.formatDate(this.props.profile.created_at)}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 m-b-15">
          <MonthlyCommits data={Data.dashBoardPage.monthlyCommits}/>
          <br></br>
          <RecentRepos data={Data.dashBoardPage.recentProducts}/>
        </div>

          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">

            <Paper>
              <div style={{...globalStyles.title, ...this.styles.header}}>Upcoming Events</div>

              <div style={globalStyles.div}>
                <div style={this.styles.root}>

                  <GridList cellHeight={180} style={this.styles.gridList}>
                    {this.tilesData.map((tile) => (
                      <GridTile
                        key={tile.img}
                        title={tile.title}
                        subtitle={<span>by <b>{tile.author}</b></span>}
                        actionIcon={<IconButton><StarBorder color="white" /></IconButton>}>
                        <img src={tile.img} />
                      </GridTile>
                    ))}
                  </GridList>
                </div>
                </div>

              </Paper>

            </div>

        </div>


    </div>
  );
}
}
export default DashboardPage;
