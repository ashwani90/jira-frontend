import { Grid } from '@mui/material';
import React from 'react';
import { DoughnutChart } from '../../components/charts/StockChart';
import { PolarAreaChart } from '../../components/charts/PolarAreaChart';
import { BubbleChart } from '../../components/charts/BubbleChart';
import { MultitypeChart } from '../../components/charts/MultitypeChart';
import Filter from '../../components/filter/filter';
import { AreaChart } from '../../components/charts/AreaChart';

import Header from '../../components/header/Header';
import Datatabs from '../../components/tabs/Datatabs';

const settings = ["general", "account", "preferences","general", "account", "preferences"];



function Dashboard() {
    return (
        <>
        <Header />
        <Datatabs />
        <Grid container>
            <Grid xs={6} sx={{p: 10}}>
            <DoughnutChart />
            </Grid>
            <Grid xs={6} sx={{p: 10}}>
            <PolarAreaChart />
            </Grid>
            <Grid xs={4} sx={{p: 10}}>
            <BubbleChart />
            </Grid>
            <Grid xs={4} sx={{p: 10}}>
            <MultitypeChart />
            </Grid>
            <Grid xs={4} sx={{p: 10}}>
            <AreaChart />
            </Grid>
        </Grid>
        
</>
    );
}

export default Dashboard;