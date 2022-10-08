import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FormModal from '../forms/formModal';

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

export default function TTabs(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log(value);
    setValue(newValue);
  };
  // TODO:: Need to resolve this
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
          <FormModal/>
        </Tabs>
        
      </Box>
      <TabPanel index={0} value={3}>
      <Tabs value={3} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="One One" {...a11yProps(4)} />
          <Tab label="One Two" {...a11yProps(5)} />
          <Tab label="One Three" {...a11yProps(6)} />
        </Tabs>
      </TabPanel>
      <TabPanel index={1} value={7}>
      <Tabs value={7} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Two One" {...a11yProps(8)} />
          <Tab label="Two Two" {...a11yProps(9)} />
          <Tab label="Two Three" {...a11yProps(10)} />
        </Tabs>
      </TabPanel>
      <TabPanel index={2} value={11}>
      <Tabs value={11} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Three One" {...a11yProps(12)} />
          <Tab label="Three Two" {...a11yProps(12)} />
          <Tab label="Three Three" {...a11yProps(13)} />
        </Tabs>
      </TabPanel>
    </Box>
  );
}