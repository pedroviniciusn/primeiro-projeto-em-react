import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles (() => ({
    container: {
        padding: '15px 0'
    }
}))

const Page = ({ title }) => {
    const classes = useStyles()

    return (
        <>
        <Typography variant="h3" gutterBottom className={classes.container}>
            {title}
        </Typography>
        </>
    )
}

export default Page