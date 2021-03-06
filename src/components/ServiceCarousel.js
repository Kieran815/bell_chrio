import withRoot from "../utils/withRoot";
import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import PropTypes from "prop-types";
import Card from "../components/Card";
import Button from "@material-ui/core/Button";
import Carousel from "../components/Carousel";
import Avatar from "@material-ui/core/Avatar";
import AirlineSeatFlatOutlinedIcon from '@material-ui/icons/AirlineSeatFlatOutlined';
import withStyles from "@material-ui/styles/withStyles";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  iconChip: {
    color: "secondary",
    backgroundColor: "primary"
  }
});

const styles = theme => ({
    root: {
      fontWeight: "bold"
    }
  }),
  ServiceCarousel = props => (
    <StaticQuery
      query={graphql`
        query serviceQuery {
          allFile(filter: { extension: { eq: "jpg" } }) {
            edges {
              node {
                publicURL
              }
            }
          }
          allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/services/" } }
            sort: { fields: [frontmatter___date], order: DESC }
          ) {
            edges {
              node {
                id
                frontmatter {
                  image {
                    publicURL
                  }
                  path
                  title
                  date(formatString: "DD MMMM YYYY")
                }
                excerpt
              }
            }
          }
        }
      `}
      render={data => (
        <div style={{ marginBottom: "2em" }}>
          <Card
            title="Our Services"
            avatar={
              <Avatar className={useStyles.iconChip}>
                <AirlineSeatFlatOutlinedIcon color="primary" fontSize="large" />
              </Avatar>
            }
            action={
              <Button
                color="primary"
                variant="contained"
                component={Link}
                to="/services/"
              >
                View All Services
              </Button>
            }
            style={{ minHeight: 523 }}
          >
            <Carousel items={data.allMarkdownRemark.edges} />
          </Card>
        </div>
      )}
    />
  );

ServiceCarousel.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(ServiceCarousel));

// const products = props.data.allMarkdownRemark.edges;
