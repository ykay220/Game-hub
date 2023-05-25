import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, //1024px
      }}
    >
      <GridItem bg="coral" area="nav">
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem bg="gold" area="aside">
          Aisde
        </GridItem>
      </Show>
      <GridItem bg="dodgerblue" area="main">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
