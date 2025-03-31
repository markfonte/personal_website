import React, { useState } from 'react';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Alert,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    IconButton,
    Snackbar,
    Tooltip,
    Typography,
} from '@mui/material';
import WebIcon from '@mui/icons-material/Web';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import LikeButton from '../shared/LikeButton';


const styles = {
    expansionHeaderContainer: {
        display: 'flex',
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    resumeText: {
        textAlign: 'left',
        margin: '8px'
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    }
};

export default function ResumeCard() {
    const [resume, setResume] = useState(false);


    const handleResumeChange = () => {
        if (!resume) {
            setResume(true);
        }
    };

    const handleResumeSnackbarClose = (_, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setResume(false);
    };

    return (
        <Box sx={styles.root}>
            <Card raised className="small-card" style={{ minWidth: 300, marginTop: 24 }}>
                <Accordion>
                    <AccordionSummary
                        aria-label="Resumé"
                        aria-controls="resume-content"
                        id="resume-header"
                        expandIcon={
                            <Tooltip title="expand/collapse card" arrow>
                                <ExpandMoreIcon />
                            </Tooltip>
                        }>
                        <a name="resume_card" href="#resume_card" className="gone">
                            Resumé Card
                        </a>
                        <Box sx={styles.expansionHeaderContainer}>
                            <CardHeader
                                className="card-header"
                                title="Resumé 📝" />
                        </Box>
                    </AccordionSummary>
                    <AccordionDetails sx={{ padding: 0 }}>
                        <CardContent sx={{ padding: 0 }}>
                            <Typography paragraph sx={styles.resumeText}>
                                · I have never drank a cup of coffee<br />
                                · I have never drank an energy drink<br />
                                · I have never been outside of the United States + Canada<br />
                                · <i><s>I do my hair every morning by sticking a fork in an electrical socket</s></i><br />
                                · I had never driven a Tesla before I started working for them<br />
                                · If you have ever seen a picture or video of me on stage, there is a 100% chance that my hands are fully clammy<br />
                                · I wore a suit to my first internship interview for some godforsaken reason<br />
                                · I have never owned flour, sugar or other basic baking supplies<br />
                                · I am clearly just doing random stuff on this website...
                            </Typography>
                            <Button variant='outlined' onClick={handleResumeChange}>
                                See PDF
                            </Button>
                        </CardContent>
                    </AccordionDetails>
                </Accordion>
                <CardActions sx={{ justifyContent: 'flex-end' }}>
                    <Tooltip
                        title="see real resumé"
                        arrow>
                        <IconButton aria-label="see real resumé" onClick={handleResumeChange} size="medium">
                            <WebIcon />
                        </IconButton>
                    </Tooltip>
                    <LikeButton likeType='card' likeName='resume_card' />
                </CardActions>
                <Snackbar
                    open={resume}
                    autoHideDuration={4000}
                    onClose={handleResumeSnackbarClose}>
                    <Alert
                        onClose={handleResumeSnackbarClose}
                        severity="success"
                        variant="filled"
                    >
                        Just kidding! You&#39;re going to have to try harder than that!
                    </Alert>
                </Snackbar>
            </Card>
        </Box>
    );
};