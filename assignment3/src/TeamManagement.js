import React, {useState, useEffect} from 'react'
import axios from 'axios'
import NavigationBar from './components/NavigationBar'
import TeamInterface from './components/TeamInterface'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

const url = "https://murmuring-spire-82736.herokuapp.com/";
const HeadTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#CACFD2',
      contrastText: 'black',
    },
    // textPrimary: {
    //   main: '#6A5955',
    //   contrastText: '#AEA3A0',
    // }
    }});
function TeamManagement() {
  const [Teams, loadTeams] = useState([]);
  const [Employees, loadEmployees] = useState([]);
  const [Projects, loadProjects] = useState([]);
  const [LoadStatus, setLoadStatus] = useState(false);

  useEffect( () => {
    const fetchData = async () => {
      let t = await axios.get(url + 'teams-raw');
      loadTeams(t.data);
      let e = await axios.get(url + 'employees');
      loadEmployees(e.data);
      let p = await axios.get(url + 'projects');
      loadProjects(p.data);
      setLoadStatus(true);
    };
    fetchData();
  }, []);
  return (
      <MuiThemeProvider theme={HeadTheme}>
      <Container>
        <NavigationBar />
          <Box display="flex"
               alignContent="flex-start"
               flexDirection="row"
               flexWrap="wrap"
          >
          { LoadStatus ?
            Teams.map(
                team =>
                    <TeamInterface
                        key={team._id}
                        Team={team}
                        Employees={Employees}
                        Projects={Projects}
                        Url={url}
                    />
                ) :
              (
                  <p>loading is in progress...</p>
              )
              }
            </Box>
      </Container>
    </MuiThemeProvider>
    );
}
export default TeamManagement
