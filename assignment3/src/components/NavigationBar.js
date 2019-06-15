import React from 'react'
import Link from '@material-ui/core/Link'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        flexGrow: 1
    }
});
function NavigationBar() {
    const classes = useStyles();
    return (
            <AppBar className={classes.root} position="static">
                <Toolbar >
                    <Link to="#" variant="h4" color="textPrimary">Team Management</Link>
                </Toolbar>
            </AppBar>
    );
}
export default NavigationBar
