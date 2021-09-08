import React from 'react';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import styles from '../../styles/components/header.module.css'

export const Header: React.FC = () => {
    return (
        <header>
            <Grid container spacing={3} className={styles.grid}>
                <Grid item xs={6}>
                    <span className={styles.logo}>[lib]</span> 
                </Grid>
                <Grid item xs={6}>
                    <Link href="#"> 
                        <span className={styles.contribute}>Contribute at </span> 
                        <span className={styles.contributeLogo}><GitHubIcon /> <b>GitHub</b></span>
                    </Link>
                </Grid>
            </Grid>
        </header>
    )
}