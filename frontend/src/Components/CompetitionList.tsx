import { List, ListItemButton, Grid, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import { Competition } from "../logic/interfaces";
import CompetitionEventsList from "./CompetitionEventsList";

const CompetitionList = ({ competitions }: { competitions: Competition[] }) => {
    return (
        <List dense={true} disablePadding>
            {competitions.map((competition) => (
                <ListItemButton
                    key={competition.id}
                    component={Link}
                    to={
                        competition.wcaWebsite
                            ? `/competitions/${competition.id}`
                            : "/"
                    }
                    sx={{
                        marginTop: "1.5em",
                    }}
                >
                    <Grid
                        container
                        direction="column"
                        justifyContent="space-between"
                        gap={1}
                    >
                        <Grid item>
                            <ListItemText primary={competition.name} sx={{
                                "& .MuiTypography-root": {
                                    fontSize: "1.5em",
                                }
                            }} />
                        </Grid>
                        <Grid item>
                            Date: {new Date(competition.startDate).toLocaleDateString()}
                        </Grid>
                        {competition.wcaWebsite && (
                            <>
                                <Grid item>
                                    Registration starts: {new Date(competition.registrationOpen).toLocaleDateString()}
                                </Grid>
                                <Grid item>
                                    Registration closes: {new Date(competition.registrationClose).toLocaleDateString()}
                                </Grid>
                            </>
                        )}
                        <Grid item>
                            <CompetitionEventsList events={competition.events} />
                        </Grid>
                    </Grid>
                </ListItemButton>
            ))}
        </List>
    );
};

export default CompetitionList;