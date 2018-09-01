import React from 'react';
import { Typography, withStyles } from '@material-ui/core' 

const styles = {
    
}

const Location = ({ city }) => 
    <div>
            <Typography color="textSecondary" variant="display2" gutterBottom>
                {city}
            </Typography>
    </div>
 
export default withStyles(styles)(Location);