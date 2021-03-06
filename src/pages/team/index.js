import withRoot from "../../utils/withRoot";
import React from "react";
import { Link, graphql, withPrefix } from "gatsby";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import SEO from "../../components/SEO";
import Page from "../../components/Page";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import { Rocket } from "mdi-material-ui";
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

const Team = props => {
  const teams = props.data.allMarkdownRemark.edges;
  return (
    <Page>
      <SEO title="Meet the Team" />
      <Card>
        <div style={{ display: "flex"}}>
        <IconButton>
          <AssignmentIndIcon />
        </IconButton>
        <CardHeader
          title="Meet the Team"
        />
        </div>
        <Typography paragraph>
          <CardContent>
            With over 100 combined years of service, you can trust the staff to take the best care of you.
          </CardContent>
        </Typography>

        <GridList cellHeight={500} cols={3}>
          {teams.map(edge => {
            const {
              node: {
                frontmatter: {
                  path,
                  title,
                  image: { publicURL },
                  jobtitle
                }
              }
            } = edge;
            return (
              <Link key={path} to={path} style={{overflow: 'hidden'}}>
                <GridListTile cols={1}>
                  <img src={withPrefix(publicURL)} alt={title} />
                  <GridListTileBar
                    title={title}
                    subtitle={jobtitle}
                    actionIcon={
                      <IconButton
                        className="teamIcon"
                        style={{ color: "rgba(255, 255, 255, 0.54)" }}
                      >
                        <Rocket />
                      </IconButton>
                    }
                  />
                </GridListTile>
              </Link>
            );
          })}
        </GridList>
      </Card>
    </Page>
  );
};

export const query = graphql`
  query TeamQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/team/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          html
          frontmatter {
            image {
              publicURL
            }
            title
            path
            jobtitle
          }
        }
      }
    }
  }
`;

export default withRoot(Team);
