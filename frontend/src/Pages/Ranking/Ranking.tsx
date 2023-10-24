import { useEffect, useState } from "react";
import { Box, CircularProgress, Container, Typography } from "@mui/material";
import RankingTable from "../../Components/RankingTable";
import { getRanking } from "../../logic/ranking";
import { Person } from "../../logic/interfaces";

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
                SLS league ranking
            </Typography>
            <RankingTable persons={persons} />
          </Container>
        )}
      </Box>
    </>
  );
};

export default Ranking;