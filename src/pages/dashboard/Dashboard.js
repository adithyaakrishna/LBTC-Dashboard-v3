import React, { useState } from "react";
import {
  Grid,
  // LinearProgress,
  // Select,
  // OutlinedInput,
  // MenuItem,
  // Divider
} from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
//import { ArrowForward as ArrowForwardIcon } from "@material-ui/icons";
import {
  ResponsiveContainer,
  // ComposedChart,
  // AreaChart,
  LineChart,
  Line,
  //Area,
  PieChart,
  Pie,
  Cell,
  // YAxis,
  // XAxis,
} from "recharts";
import classnames from "classnames";

// styles
import useStyles from "./styles";

// components
import mock from "./mock";
import Widget from "../../components/Widget";
import PageTitle from "../../components/PageTitle";
import { Typography } from "../../components/Wrappers";
import Dot from "../../components/Sidebar/components/Dot";
import Table from "./components/Table/Table";
import BigStat from "./components/BigStat/BigStat";
import ApexLineChart from "../charts/components/ApexLineChart";

const mainChartData = getMainChartData();
const PieChartData1 = [
  { name: "Tests Done", value: 100, color: "primary" },
  { name: "RATs", value: 100, color: "success" },
  { name: "RTPCR Tests", value: 300, color: "secondary" },
  { name: "+ve Cases in RAT", value: 300, color: "warning" },
  { name: "-ve Cases in RAT", value: 200, color: "success" },
];
const PieChartData = [
  { name: "Tests Done", value: 100, color: "primary" },
  { name: "RATs", value: 100, color: "primary" },
  { name: "RTPCR Tests", value: 300, color: "secondary" },
  
];
const PieChartData2 = [
  { name: "Helpdesks Setup", value: 100, color: "primary" },
  { name: "People who reached out to Helpdesk", value: 100, color: "primary" },
  { name: "People who called our Helpline", value: 100, color: "primary" },
  { name: "Resources Distributed through Helpdesk", value: 300, color: "secondary" },

];

export default function Dashboard(props) {
  var classes = useStyles();
  var theme = useTheme();

  // local
  //var [mainChartState, setMainChartState] = useState("monthly");

  return (
    // Daily Update Section Starts Here
    <>
      <PageTitle title="Today's Update" color="#ffffff" />
      <Grid container spacing={4}>
        {/* <Grid item lg={3} md={4} sm={6} xs={12}>
          <Widget
            title="Number of Houses Surveyed"
            upperTitle
            bodyClass={classes.fullHeightBody}
            className={classes.card}
          >
            <div className={classes.visitsNumberContainer}>
              <Typography size="xl" weight="medium">
                12, 678
              </Typography>
              <LineChart
                width={55}
                height={30}
                data={[
                  { value: 10 },
                  { value: 15 },
                  { value: 10 },
                  { value: 17 },
                  { value: 18 },
                ]}
                margin={{ left: theme.spacing(2) }}
              >
                <Line
                  type="natural"
                  dataKey="value"
                  stroke={theme.palette.success.main}
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </div>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item>
                <Typography color="text" colorBrightness="secondary">
                  Registrations
                </Typography>
                <Typography size="md">860</Typography>
              </Grid>
              <Grid item>
                <Typography color="text" colorBrightness="secondary">
                  Sign Out
                </Typography>
                <Typography size="md">32</Typography>
              </Grid>
              <Grid item>
                <Typography color="text" colorBrightness="secondary">
                  Rate
                </Typography>
                <Typography size="md">3.25%</Typography>
              </Grid>
            </Grid>
          </Widget>
        </Grid> */}
        <Grid item lg={3} md={8} sm={6} xs={12}>
          <Widget
            title="Activities Conducted Today"
            upperTitle
            className={classes.card}
            bodyClass={classes.fullHeightBody}
          >
            <div className={classes.performanceLegendWrapper}>
              <div className={classes.legendElement}>
                <Dot color="warning" />
                <Typography
                  color="text"
                  colorBrightness="secondary"
                  className={classes.legendElementText}
                >
                  Integration
                </Typography>
              </div>
              
            </div>
            <div className={classes.progressSection}>
              <Typography
                size="md"
                color="text"
                colorBrightness="secondary"
                className={classes.progressSectionTitle}
              >
                Survey - <span style={{ color: "#536DFE" }}>Yes</span>
              </Typography>
            </div>
            <div className={classes.progressSection}>
              <Typography
                size="md"
                color="text"
                colorBrightness="secondary"
                className={classes.progressSectionTitle}
              >
                Awareness Drives - <span style={{ color: "#536DFE" }}>No</span>
              </Typography>
            </div>
            <div className={classes.progressSection}>
              <Typography
                size="md"
                color="text"
                colorBrightness="secondary"
                className={classes.progressSectionTitle}
              >
                Street Play - <span style={{ color: "#536DFE" }}>Yes</span>
              </Typography>
            </div>
            <div className={classes.progressSection}>
              <Typography
                size="md"
                color="text"
                colorBrightness="secondary"
                className={classes.progressSectionTitle}
              >
                Helpdesk Operation - <span style={{ color: "#536DFE" }}>No</span>
              </Typography>
            </div><div className={classes.progressSection}>
              <Typography
                size="md"
                color="text"
                colorBrightness="secondary"
                className={classes.progressSectionTitle}
              >
                Resource Distribution - <span style={{ color: "#536DFE" }}>Yes</span>
              </Typography>
            </div>
            <div>
              <Typography
                size="md"
                color="text"
                colorBrightness="secondary"
                className={classes.progressSectionTitle}
              >
                COVID Test - <span style={{ color: "#536DFE" }}>20</span>
              </Typography>
            </div>
          </Widget>
        </Grid>
        <Grid item lg={3} md={8} sm={6} xs={12}>
          <Widget
            title="Helpdesk Update"
            upperTitle
            className={classes.card}
            bodyClass={classes.fullHeightBody}
          >
            <div className={classes.performanceLegendWrapper}>
              <div className={classes.legendElement}>
                <Dot color="success" />
                <Typography
                  color="text"
                  colorBrightness="secondary" style={{ color: "#FF5C93" }}
                  className={classes.legendElementText}
                >
                  Helpdesk Stats
                </Typography>
              </div>
            </div>
            <div className={classes.progressSection}>
              <Typography
                size="md"
                color="text"
                colorBrightness="secondary"
                className={classes.progressSectionTitle}
              >
                No. of Helpdesks Setup - <span style={{ color: "#536DFE" }}>20</span>
              </Typography>
            </div>
            <div className={classes.progressSection}>
              <Typography
                size="md"
                color="text"
                colorBrightness="secondary"
                className={classes.progressSectionTitle}
              >
                No. of People who reached out to the Helpdesk - <span style={{ color: "#536DFE" }}>20</span>
              </Typography>
            </div>
            <div className={classes.progressSection}>
              <Typography
                size="md"
                color="text"
                colorBrightness="secondary"
                className={classes.progressSectionTitle}
              >
                No. of People who called our Helpline - <span style={{ color: "#536DFE" }}>20</span>
              </Typography>
              {/* <LinearProgress
                variant="determinate"
                value={30}
                classes={{ barColorPrimary: classes.progressBar }}
                className={classes.progress}
              /> */}
            </div>
            <div>
              <Typography
                size="md"
                color="text"
                colorBrightness="secondary"
                className={classes.progressSectionTitle}
              >
                Resources Distributed through Helpdesk - <span style={{ color: "#536DFE" }}>20</span>
              </Typography>
              {/* <LinearProgress
                variant="determinate"
                value={55}
                classes={{ barColorPrimary: classes.progressBar }}
                className={classes.progress}
              /> */}

            </div>
          </Widget>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Widget title="Covid Test Update in Numbers" upperTitle className={classes.card}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <ResponsiveContainer width="100%" height={144}>
                  <PieChart margin={{ left: theme.spacing(2) }}>
                    <Pie
                      data={PieChartData1}
                      innerRadius={45}
                      outerRadius={60}
                      dataKey="value"
                    >
                      {PieChartData1.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={theme.palette[entry.color].main}
                        />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </Grid>
              <Grid item xs={6}>
                <div className={classes.pieChartLegendWrapper}>
                  {PieChartData1.map(({ name, value, color }, index) => (
                    <div key={color} className={classes.legendItemContainer}>
                      <Dot color={color} />
                      <Typography style={{ whiteSpace: "nowrap" }}>
                        &nbsp;{name}&nbsp;
                      </Typography>
                      <Typography color="text" colorBrightness="secondary">
                        &nbsp;{value}
                      </Typography>
                    </div>
                  ))}
                </div>
              </Grid>
            </Grid>
          </Widget>
        </Grid>
      </Grid>
      
      {/* Second Row Section */}

      <Grid container spacing={4}>
        <Grid item lg={3} md={8} sm={6} xs={12}>
          <Widget
            title="Awareness & Street Play Update"
            upperTitle
            className={classes.card}
            bodyClass={classes.fullHeightBody}
          >
            <div className={classes.performanceLegendWrapper}>
              <div className={classes.legendElement}>
                <Dot color="warning" />
                <Typography
                  color="text"
                  colorBrightness="secondary"
                  className={classes.legendElementText}
                >
                  Awareness Stats
                </Typography>
              </div>
            </div>
            <div className={classes.progressSection}>
              <Typography
                size="md"
                color="text"
                colorBrightness="secondary"
                className={classes.progressSectionTitle}
              >
                Awareness Drives - <span style={{ color: "#536DFE" }}>Yes</span>
              </Typography>
            </div>
            <div className={classes.progressSection}>
              <Typography
                size="md"
                color="text"
                colorBrightness="secondary"
                className={classes.progressSectionTitle}
              >
                Population Reached (Approximate) - <span style={{ color: "#536DFE" }}>No</span>
              </Typography>
            </div>
            <div className={classes.progressSection}>
              <Typography
                size="md"
                color="text"
                colorBrightness="secondary"
                className={classes.progressSectionTitle}
              >
                Total Number of Roads Covered - <span style={{ color: "#536DFE" }}>Yes</span>
              </Typography>
            </div>
            <div className={classes.progressSection}>
              <Typography
                size="md"
                color="text"
                colorBrightness="secondary"
                className={classes.progressSectionTitle}
              >
                Average Distance Covered - <span style={{ color: "#536DFE" }}>No</span>
              </Typography>
            </div><div className={classes.progressSection}>
              <Typography
                size="md"
                color="text"
                colorBrightness="secondary"
                className={classes.progressSectionTitle}
              >
                Number of places Street Play was performed at - <span style={{ color: "#536DFE" }}>Yes</span>
              </Typography>
            </div>
            <div>
              <Typography
                size="md"
                color="text"
                colorBrightness="secondary"
                className={classes.progressSectionTitle}
              >
                Population Reached (Approximate) - <span style={{ color: "#536DFE" }}>20</span>
              </Typography>
            </div>
            <div>
              <Typography
                size="md"
                color="text"
                colorBrightness="secondary"
                className={classes.progressSectionTitle}
              >
                Total Reach (Approximate) - <span style={{ color: "#536DFE" }}>20</span>
              </Typography>
            </div>
          </Widget>
        </Grid>
        <Grid item lg={3} md={8} sm={6} xs={12}>
          <Widget
            title="Survey Update"
            upperTitle
            className={classes.card}
            bodyClass={classes.fullHeightBody}
          >
            <div className={classes.performanceLegendWrapper}>
              <div className={classes.legendElement}>
                <Dot color="warning" />
                <Typography
                  color="text"
                  colorBrightness="secondary"
                  className={classes.legendElementText}
                >
                  Survey Stats
                </Typography>
              </div>
            </div>
            <div className={classes.progressSection}>
              <Typography
                size="md"
                color="text"
                colorBrightness="secondary"
                className={classes.progressSectionTitle}
              >
                No. of Houses Surveyed - <span style={{ color: "#536DFE" }}>Yes</span>
              </Typography>
            </div>
            <div className={classes.progressSection}>
              <Typography
                size="md"
                color="text"
                colorBrightness="secondary"
                className={classes.progressSectionTitle}
              >
                No. of Individuals Covered - <span style={{ color: "#536DFE" }}>No</span>
              </Typography>
            </div>
            <div className={classes.progressSection}>
              <Typography
                size="md"
                color="text"
                colorBrightness="secondary"
                className={classes.progressSectionTitle}
              >
                No. of Senior Citizens - <span style={{ color: "#536DFE" }}>Yes</span>
              </Typography>
            </div>
            <div className={classes.progressSection}>
              <Typography
                size="md"
                color="text"
                colorBrightness="secondary"
                className={classes.progressSectionTitle}
              >
                No. of Children below 10 years - <span style={{ color: "#536DFE" }}>No</span>
              </Typography>
            </div><div className={classes.progressSection}>
              <Typography
                size="md"
                color="text"
                colorBrightness="secondary"
                className={classes.progressSectionTitle}
              >
                No. of People with Disabilities - <span style={{ color: "#536DFE" }}>Yes</span>
              </Typography>
            </div>
            <div>
              <Typography
                size="md"
                color="text"
                colorBrightness="secondary"
                className={classes.progressSectionTitle}
              >
                No. of people with Medical Comorbidities - <span style={{ color: "#536DFE" }}>20</span>
              </Typography>
              <div className={classes.progressSection}>
                <Typography
                  size="md"
                  color="text"
                  colorBrightness="secondary"
                  className={classes.progressSectionTitle}
                >
                  No. of COVID Tests done - <span style={{ color: "#536DFE" }}>Yes</span>
                </Typography>
              </div>
              <div className={classes.progressSection}>
                <Typography
                  size="md"
                  color="text"
                  colorBrightness="secondary"
                  className={classes.progressSectionTitle}
                >
                  No. of COVID Positive People - <span style={{ color: "#536DFE" }}>Yes</span>
                </Typography>
              </div>
            </div>
          </Widget>
        </Grid>
        {mock.bigStat.map(stat => (
          <Grid item md={6} sm={12} xs={12} key={stat.product}>
            <BigStat {...stat} />
          </Grid>
        ))}
      </Grid>
    </>
    //Daily Update Section Ends Here
  );
}

// #######################################################################
function getRandomData(length, min, max, multiplier = 10, maxDiff = 10) {
  var array = new Array(length).fill();
  let lastValue;

  return array.map((item, index) => {
    let randomValue = Math.floor(Math.random() * multiplier + 1);

    while (
      randomValue <= min ||
      randomValue >= max ||
      (lastValue && randomValue - lastValue > maxDiff)
    ) {
      randomValue = Math.floor(Math.random() * multiplier + 1);
    }

    lastValue = randomValue;

    return { value: randomValue };
  });
}

function getMainChartData() {
  var resultArray = [];
  var tablet = getRandomData(31, 3500, 6500, 7500, 1000);
  var desktop = getRandomData(31, 1500, 7500, 7500, 1500);
  var mobile = getRandomData(31, 1500, 7500, 7500, 1500);

  for (let i = 0; i < tablet.length; i++) {
    resultArray.push({
      tablet: tablet[i].value,
      desktop: desktop[i].value,
      mobile: mobile[i].value,
    });
  }

  return resultArray;
}
