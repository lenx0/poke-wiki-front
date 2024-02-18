import { Box, Grid, Typography } from "@mui/material";

import PokemonList from "@/app/components/PokemonList";

export default function PokemonCatalog() {
  return (
    <>
      <Grid
        container
        height={80}
        backgroundColor="#272626eb"
        justifyContent="center"
        alignContent="center"
        width="100vw"
      >
        <Typography variant="h2" fontSize={35} fontWeight={700} color="#ffffff">
          Catálogo
        </Typography>
      </Grid>
      <Grid item>
        <PokemonList />
      </Grid>
    </>
  );
}
