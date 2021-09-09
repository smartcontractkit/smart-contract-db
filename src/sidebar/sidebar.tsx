import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import styles from '../../styles/components/sidebar.module.css'

// use list
// look into how to use with import { useRouter } from 'next/router';
// use the adapter versions?
// I.E. NextLinkComposed and Link

export const Sidebar: React.FC = () => {
    return (
        <List component="nav" className={styles.container}>
            <ListItem>
                <ListItemText primary="Communities" />
            </ListItem>
            <ListItem>
                <ListItemText primary="Consultants" />
            </ListItem>
            <ListItem>
                <ListItemText primary="Events" />
            </ListItem>
            <ListItem>
                <ListItemText primary="Education" />
            </ListItem>
            <List component="div">
                <ListItem>
                    <ListItemText primary="Books" className={styles.nested} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Tutorials" className={styles.nested} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Courses" className={styles.nested} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Workshops" className={styles.nested} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Trainers" className={styles.nested} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Schools" className={styles.nested} />
                </ListItem>
            </List>
            <ListItem>
                <ListItemText primary="Tools" />
            </ListItem>
            <List component="div">
                <ListItem>
                    <ListItemText primary="IDEs" className={styles.nested} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Frameworks" className={styles.nested} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Libraries" className={styles.nested} />
                </ListItem>
            </List>
            <hr/>
            <ListItem>
                <ListItemText primary="Glossary" />
            </ListItem>
        </List>
    )
}