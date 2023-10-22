import { useEffect, useState } from "react";
import { Competition } from "../../logic/interfaces";
import { getAllCompetitions } from "../../logic/competitions";
import { Box, CircularProgress, Grid, Paper, Typography } from "@mui/material";
import logo from "../../assets/logo.svg";
import CompetitionList from "../../Components/CompetitionList";

const Main = () => {

    const [competitions, setCompetitions] = useState<{
        pastCompetitions: Competition[];
        upcomingCompetitions: Competition[];
    }>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    useEffect(() => {
        const fetchData = async () => {
            const data = await getAllCompetitions();
            setCompetitions(data);
            setIsLoading(false);
        };
        fetchData();
    }, []);
    return (
        <>
        <Box sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            flexDirection: "column",
            marginTop: "1em",
        }}>
            <Typography variant="h4">
                SLS - Sadecka Liga Speedcubingu
            </Typography>
            <img src={logo} alt="SLS" style={{width: "20em", height: "20em"}} />
        </Box>
            <Box
                sx={{
                    py: { xs: 2, md: 3 },
                    px: { xs: 1, md: 3 },
                    display: "flex",
                    minHeight: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
             
                <Grid container spacing={2} direction="column" sx={{ flexGrow: 1 }}>
                    <Grid item>
                        <Paper>
                            {isLoading ? (
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        textAlign: "center",
                                    }}
                                >
                                    <CircularProgress />
                                </Box>
                            ) : (
                               <Grid item>
                                <Typography variant="h4" sx={{ textAlign: "center" }}>
                                    Upcoming competitions
                                </Typography>
                                <CompetitionList competitions={competitions.upcomingCompetitions} />
                                <Typography variant="h4" sx={{ textAlign: "center" }}>
                                    Past competitions
                                </Typography>
                                <CompetitionList competitions={competitions.pastCompetitions} />
                                </Grid>
                            )}
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
};

export default Main;