import { List, ListItemButton, Grid, ListItemText, Link } from "@mui/material";
import { Competition } from "../logic/interfaces";
import CompetitionEventsList from "./CompetitionEventsList";
import { t } from "i18next";

const CompetitionList = ({ competitions, isPast }: { competitions: Competition[], isPast: boolean; }) => {
    return (
        <List dense={true} disablePadding>
            {competitions.map((competition) => (
                <ListItemButton
                    key={competition.id}
                    component={Link}
                    target="_blank"
                    href={
                        competition.wcaWebsite
                            ? competition.wcaWebsite
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
                            {t('date')}: {new Date(competition.startDate).toLocaleDateString()}
                        </Grid>
                        {(competition.wcaWebsite && !isPast) && (
                            <>
                                <Grid item>
                                    {t('registrationStarts')}: {new Date(competition.registrationOpen).toLocaleDateString()}
                                </Grid>
                                <Grid item>
                                    {t('registrationCloses')}:  {new Date(competition.registrationClose).toLocaleDateString()}
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