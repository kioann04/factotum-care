import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

// TODO: maybe add link to youtube video
// maybe add more illustrations
const cards = [
  {
    id: 1,
    title: "Workstation Assesment 1",
    // url: "/workspace",
    image: "/src/images/workstation_front.jpg",
    // description: "Get tips on how to organize your workspace.",
  },
  {
    id: 4,
    // title: "Workstation Assessment 4",
    // url: "/surroundings",
    image: "/src/images/workstation_side.jpg",
    // description: "Need some help to organize your house and family?",
  },
];

export default function Workspace() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Navigation />
      <CssBaseline />

      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          {/* <Container maxWidth="lg">
          </Container> */}
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={6}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.image}
                    // title={card.title}
                  />
                  <CardContent className={classes.cardContent}>
                    {/* <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography> */}
                    {/* <Typography>{card.description}</Typography> */}
                  </CardContent>
                  <CardActions>
                    {/* <Button href={card.url} size="small" color="primary">
                      View
                    </Button> */}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <Footer />
    </React.Fragment>
  );
}