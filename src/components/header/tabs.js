import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { tab_data } from '../../constants/tab_data';

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

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          {tab_data?.map(index => 
              <Tab key={index.project} label={index.project} {...a11yProps(0)} />
          )}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          {tab_data[0].modules?.map(index => 
              <Tab key={index.name} label={index.name} {...a11yProps(0)} />
          )}
        </Tabs>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          {tab_data[1].modules?.map(index => 
              <Tab key={index.name} label={index.name} {...a11yProps(0)} />
          )}
        </Tabs>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          {tab_data[2].modules?.map(index => 
              <Tab key={index.name} label={index.name} {...a11yProps(0)} />
          )}
        </Tabs>
      </TabPanel>
    </Box>
  );
}