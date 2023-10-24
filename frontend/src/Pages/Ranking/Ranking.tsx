import { useEffect, useState } from "react";
import { Box, CircularProgress, Container, Typography } from "@mui/material";
import RankingTable from "../../Components/RankingTable";
import { getRanking } from "../../logic/ranking";
import { Person } from "../../logic/interfaces";
import { t } from "i18next";

const Ranking = () => {
  const [persons, setPersons] = useState<Person[]>([]);
  const [loading, setIsLoading] = useState<boolean>(false);
  const fetchData = async () => {
    setIsLoading(true);
    return await getRanking();
  };
  useEffect(() => {
    fetchData()
      .then((data) => {
        setPersons(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        {loading ? (
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
          <Container sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              variant="h4"
              align="center"
              color="text.primary"
              gutterBottom
            >
              {t("rankingTitle")}
            </Typography>
            <Typography variant="h6" align="center" color="text.secondary">
              {t('rankingInfo1')}
            </Typography>
            <RankingTable persons={persons} />
          </Container>
        )}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", mb: 3 }}>
        <Typography variant="h4" align="center" color="text.primary" gutterBottom>
          {t('rankingInfo2')}
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" gutterBottom>
          1. {t('rankingInfo3')}
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" gutterBottom>
          2. {t('rankingInfo4')} 
        </Typography>
        <img src="/score.png" alt="score table" width="600px" height="800px" />
      </Box>

    </>
  );
};

export default Ranking;