import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
//import { css } from '@emotion/css'

//import { Link } from 'react-router-dom';
//import Auth from '../utils/auth';

// import Home Page with Pictures
// import Profile page here
// import login/signup form

// https://mui.com/material-ui/react-tabs/

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="Profile" {...a11yProps(1)} />
          <Tab label="Login/Sign up" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Insert Home page Here

      </TabPanel>
      <TabPanel value={value} index={1}>
        Insert Profile page here
        
      </TabPanel>
      <TabPanel value={value} index={2}>
        Insert Login here
        {/* if user is logged in show saved list and logout */}
        {/* {Auth.loggedIn() ? (
            <>
                <Tab.Link as={Link} to='/saved'>
                    Here's your bucket list
                </Tab.Link>
                <Tab.Link onClick={Auth.logout}>Logout</Tab.Link>
            </>
        ) : (
            <Tab.Link onClick={() => setValue(true)}>Login/Sign Up</Tab.Link>
        )} */}
      </TabPanel>
    </Box>
  );
}

export default BasicTabs;
