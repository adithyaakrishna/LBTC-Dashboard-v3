import React, { useState } from "react";
import {
  Grid,
  LinearProgress,
  //Select,
  //OutlinedInput,
  //MenuItem,
  Divider
} from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import {
  ResponsiveContainer,
  //ComposedChart,
  AreaChart,
  LineChart,
  Line,
  Area,
  PieChart,
  Pie,
  Sector,
  Cell,
  //YAxis,
  //XAxis,
} from "recharts";

// styles
import useStyles from "./styles";

// components
import mock from "./mock";
import Widget from "../../components/Widget/Widget";
import PageTitle from "../../components/PageTitle/PageTitle";
import { Typography } from "../../components/Wrappers/Wrappers";
import Dot from "../../components/Sidebar/components/Dot";
import Table from "./components/Table/Table";
import BigStat from "./components/BigStat/BigStat";
import ApexLineChart from "../charts/components/ApexLineChart";
import Example from "../charts/components/BiAxialBarGraph";
import Example2 from "../charts/components/BiAxialBarGraph-2";
import Example3 from "../charts/components/BiAxialBarGraph-3";
import Example4 from "../charts/components/BiAxialBarGraph-4";
import Example5 from "../charts/components/BiAxialBarGraph-5";
import Example6 from "../charts/components/BiAxialBarGraph-6";

//const mainChartData = getMainChartData();
const PieChartData1 = [
  { name: "Tests Done", value: 82, color: "primary" },
  { name: "RATs", value: 41, color: "success" },
  { name: "RTPCR Tests", value: 41, color: "secondary" },
  { name: "+ve Cases in RAT", value: 3, color: "warning" },
  { name: "-ve Cases in RAT", value: 38, color: "warning" },
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
const VulChartData = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

export default function Dashboard_2(props) {
  var classes = useStyles();
  var theme = useTheme();

  // local
  //var [mainChartState, setMainChartState] = useState("monthly");
  var [activeIndex, setActiveIndexId] = useState(0);

  return (
    //Monthly Update Section Starts Here
    <>
      <PageTitle title="Monthly Update (October 2020)" />
      <Grid container spacing={4}>
        <Grid item lg={3} md={8} sm={6} xs={12}>
          <Widget
            title="Activities Conducted This Month"
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
                Resource Distribution - <span style={{ color: "#536DFE" }}>No</span>
              </Typography>
            </div>
            <div>
              <Typography
                size="md"
                color="text"
                colorBrightness="secondary"
                className={classes.progressSectionTitle}
              >
                COVID Test - <span style={{ color: "#536DFE" }}>Yes</span>
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
                No. of Helpdesks Setup - <span style={{ color: "#536DFE" }}>-</span>
              </Typography>
            </div>
            <div className={classes.progressSection}>
              <Typography
                size="md"
                color="text"
                colorBrightness="secondary"
                className={classes.progressSectionTitle}
              >
                No. of People who reached out to the Helpdesk - <span style={{ color: "#536DFE" }}>-</span>
              </Typography>
            </div>
            <div className={classes.progressSection}>
              <Typography
                size="md"
                color="text"
                colorBrightness="secondary"
                className={classes.progressSectionTitle}
              >
                No. of People who called our Helpline - <span style={{ color: "#536DFE" }}>-</span>
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
                Resources Distributed through Helpdesk - <span style={{ color: "#536DFE" }}>-</span>
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

        <Grid item lg={3} md={8} sm={6} xs={12}>
          <Widget
            title="COVID Test Follow-Up"
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
                  COVID Weekly Stats
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
                No of RTPCR Tests- <span style={{ color: "#536DFE" }}>-</span>
              </Typography>
            </div>
            <div className={classes.progressSection}>
              <Typography
                size="md"
                color="text"
                colorBrightness="secondary"
                className={classes.progressSectionTitle}
              >
                No of Results Recieved - <span style={{ color: "#536DFE" }}>-</span>
              </Typography>
            </div>
            <div className={classes.progressSection}>
              <Typography
                size="md"
                color="text"
                colorBrightness="secondary"
                className={classes.progressSectionTitle}
              >
                No of Positive Cases - <span style={{ color: "#536DFE" }}>-</span>
              </Typography>
              {/* <LinearProgress
                variant="determinate"
                value={30}
                classes={{ barColorPrimary: classes.progressBar }}
                className={classes.progress}
              /> */}
            </div>
            <div className={classes.progressSection}>
              <Typography
                size="md"
                color="text"
                colorBrightness="secondary"
                className={classes.progressSectionTitle}
              >
                No of Patients in Home Isolation - <span style={{ color: "#536DFE" }}>-</span>
              </Typography>
              {/* <LinearProgress
                variant="determinate"
                value={30}
                classes={{ barColorPrimary: classes.progressBar }}
                className={classes.progress}
              /> */}
            </div>
            <div className={classes.progressSection}>
              <Typography
                size="md"
                color="text"
                colorBrightness="secondary"
                className={classes.progressSectionTitle}
              >
                No of Patients in Government Treatment - <span style={{ color: "#536DFE" }}>-</span>
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
                Number of People in Private Treatment - <span style={{ color: "#536DFE" }}>-</span>
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

        {/* <Grid container spacing={4}> */}
        {/* <Grid item xs={12} md={6}>
          <Widget title="Total Vulnerable Population" noBodyPadding upperTitle>
            <ResponsiveContainer width="100%" height={400}>
              <PieChart width={200} height={300}>
                <Pie
                  activeIndex={activeIndex}
                  activeShape={renderActiveShape}
                  data={VulChartData}
                  cx={200}
                  cy={150}
                  innerRadius={60}
                  outerRadius={80}
                  fill={theme.palette.primary.main}
                  dataKey="value"
                  onMouseEnter={(e, id) => setActiveIndexId(id)}
                />
              </PieChart>
            </ResponsiveContainer>
          </Widget>
        </Grid> */}
        {/* <Grid item xs={12} md={6}>
          <Widget title="Bargraph with Data" noBodyPadding upperTitle>
            <ResponsiveContainer width="100%" height={400}>
              <Example></Example>
            </ResponsiveContainer>
          </Widget>
        </Grid> */}
      </Grid>
      {/* <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Widget title="Bargraph with Data" noBodyPadding upperTitle>
            <ResponsiveContainer width="100%" height={400}>
              <Example2></Example2>
            </ResponsiveContainer>
          </Widget>
        </Grid>
        <Grid item xs={12} md={6}>
          <Widget title="Bargraph with Data" noBodyPadding upperTitle>
            <ResponsiveContainer width="100%" height={400}>
              <Example3></Example3>
            </ResponsiveContainer>
          </Widget>
        </Grid>
      </Grid> */}
      {/* <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Widget title="Bargraph with Data" noBodyPadding upperTitle>
            <ResponsiveContainer width="100%" height={400}>
              <Example4></Example4>
            </ResponsiveContainer>
          </Widget>
        </Grid>
        <Grid item xs={12} md={6}>
          <Widget title="Bargraph with Data" noBodyPadding upperTitle>
            <ResponsiveContainer width="100%" height={400}>
              <Example5></Example5>
            </ResponsiveContainer>
          </Widget>
        </Grid>
      </Grid> */}
      <Grid container spacing={4}>
        {/* <Grid item xs={12} md={6}>
          <Widget title="Bargraph with Data" noBodyPadding upperTitle>
            <ResponsiveContainer width="100%" height={400}>
              <Example6></Example6>
            </ResponsiveContainer>
          </Widget>
        </Grid> */}

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
                Awareness Drives - <span style={{ color: "#536DFE" }}>-</span>
              </Typography>
            </div>
            <div className={classes.progressSection}>
              <Typography
                size="md"
                color="text"
                colorBrightness="secondary"
                className={classes.progressSectionTitle}
              >
                Population Reached (Approximate) - <span style={{ color: "#536DFE" }}>-</span>
              </Typography>
            </div>
            <div className={classes.progressSection}>
              <Typography
                size="md"
                color="text"
                colorBrightness="secondary"
                className={classes.progressSectionTitle}
              >
                Total Number of Roads Covered - <span style={{ color: "#536DFE" }}>-</span>
              </Typography>
            </div>
            <div className={classes.progressSection}>
              <Typography
                size="md"
                color="text"
                colorBrightness="secondary"
                className={classes.progressSectionTitle}
              >
                Average Distance Covered - <span style={{ color: "#536DFE" }}>-</span>
              </Typography>
            </div><div className={classes.progressSection}>
              <Typography
                size="md"
                color="text"
                colorBrightness="secondary"
                className={classes.progressSectionTitle}
              >
                Number of places Street Play was performed at - <span style={{ color: "#536DFE" }}>6</span>
              </Typography>
            </div>
            <div>
              <Typography
                size="md"
                color="text"
                colorBrightness="secondary"
                className={classes.progressSectionTitle}
              >
                Population Reached (Approximate) - <span style={{ color: "#536DFE" }}>479</span>
              </Typography>
            </div>
            <div>
              <Typography
                size="md"
                color="text"
                colorBrightness="secondary"
                className={classes.progressSectionTitle}
              >
                Total Reach (Approximate) - <span style={{ color: "#536DFE" }}>479</span>
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
                No. of Houses Surveyed - <span style={{ color: "#536DFE" }}>175</span>
              </Typography>
            </div>
            <div className={classes.progressSection}>
              <Typography
                size="md"
                color="text"
                colorBrightness="secondary"
                className={classes.progressSectionTitle}
              >
                No. of Individuals Covered - <span style={{ color: "#536DFE" }}>578</span>
              </Typography>
            </div>
            <div className={classes.progressSection}>
              <Typography
                size="md"
                color="text"
                colorBrightness="secondary"
                className={classes.progressSectionTitle}
              >
                No. of Senior Citizens - <span style={{ color: "#536DFE" }}>64</span>
              </Typography>
            </div>
            <div className={classes.progressSection}>
              <Typography
                size="md"
                color="text"
                colorBrightness="secondary"
                className={classes.progressSectionTitle}
              >
                No. of Children below 10 years - <span style={{ color: "#536DFE" }}>61</span>
              </Typography>
            </div><div className={classes.progressSection}>
              <Typography
                size="md"
                color="text"
                colorBrightness="secondary"
                className={classes.progressSectionTitle}
              >
                No. of People with Disabilities - <span style={{ color: "#536DFE" }}>17</span>
              </Typography>
            </div>
            <div>
              <Typography
                size="md"
                color="text"
                colorBrightness="secondary"
                className={classes.progressSectionTitle}
              >
                No. of people with Medical Comorbidities - <span style={{ color: "#536DFE" }}>107</span>
              </Typography>
              <div className={classes.progressSection}>
                <Typography
                  size="md"
                  color="text"
                  colorBrightness="secondary"
                  className={classes.progressSectionTitle}
                >
                  No. of COVID Tests done - <span style={{ color: "#536DFE" }}>85</span>
                </Typography>
              </div>
              <div className={classes.progressSection}>
                <Typography
                  size="md"
                  color="text"
                  colorBrightness="secondary"
                  className={classes.progressSectionTitle}
                >
                  No. of COVID Positive People - <span style={{ color: "#536DFE" }}>3</span>
                </Typography>s
              </div>
              <div className={classes.progressSection}>
                <Typography
                  size="md"
                  color="text"
                  colorBrightness="secondary"
                  className={classes.progressSectionTitle}
                >
                  No. of COVID Cured People - <span style={{ color: "#536DFE" }}>1</span>
                </Typography>s
              </div>
            </div>
          </Widget>
        </Grid>

        <Grid item lg={3} md={8} sm={6} xs={12}>
          <Widget
            title="Resource Distribution"
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
                  Resource Distribution Stats
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
                No. of Masks Distributed - <span style={{ color: "#536DFE" }}>-</span>
              </Typography>
            </div>
            <div className={classes.progressSection}>
              <Typography
                size="md"
                color="text"
                colorBrightness="secondary"
                className={classes.progressSectionTitle}
              >
                No. of Gloves Distributed - <span style={{ color: "#536DFE" }}>-</span>
              </Typography>
            </div>
            <div className={classes.progressSection}>
              <Typography
                size="md"
                color="text"
                colorBrightness="secondary"
                className={classes.progressSectionTitle}
              >
                No. of People Who Recieved Medicines - <span style={{ color: "#536DFE" }}>-</span>
              </Typography>
            </div>
            <div className={classes.progressSection}>
              <Typography
                size="md"
                color="text"
                colorBrightness="secondary"
                className={classes.progressSectionTitle}
              >
                No. of Hygiene Kits Distributed - <span style={{ color: "#536DFE" }}>-</span>
              </Typography>
            </div><div className={classes.progressSection}>
              <Typography
                size="md"
                color="text"
                colorBrightness="secondary"
                className={classes.progressSectionTitle}
              >
                No. of Ration Kits Distributed - <span style={{ color: "#536DFE" }}>-</span>
              </Typography>
            </div>
            <div>
              <Typography
                size="md"
                color="text"
                colorBrightness="secondary"
                className={classes.progressSectionTitle}
              >
                No. of People Transported to Govt. Care - <span style={{ color: "#536DFE" }}>-</span>
              </Typography>



            </div>
          </Widget>
        </Grid>



      </Grid>

      {/* <Grid container spacing={4}>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Widget
            title="Number of Kids Below 10 Years"
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
                  { value: 50 },
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
        </Grid>

        <Grid item lg={3} md={8} sm={6} xs={12}>
          <Widget
            title="Number of Differently Disabled People"
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
              <div className={classes.legendElement}>
                <Dot color="primary" />
                <Typography
                  color="text"
                  colorBrightness="secondary"
                  className={classes.legendElementText}
                >
                  SDK
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
                Integration
        </Typography>
              <LinearProgress
                variant="determinate"
                value={30}
                classes={{ barColorPrimary: classes.progressBar }}
                className={classes.progress}
              />
            </div>
            <div>
              <Typography
                size="md"
                color="text"
                colorBrightness="secondary"
                className={classes.progressSectionTitle}
              >
                SDK
        </Typography>
              <LinearProgress
                variant="determinate"
                value={55}
                classes={{ barColorPrimary: classes.progressBar }}
                className={classes.progress}
              />
            </div>
          </Widget>
        </Grid>
        <Grid item lg={3} md={8} sm={6} xs={12}>
          <Widget
            title="Server Overview"
            upperTitle
            className={classes.card}
            bodyClass={classes.fullHeightBody}
          >
            <div className={classes.serverOverviewElement}>
              <Typography
                color="text"
                colorBrightness="secondary"
                className={classes.serverOverviewElementText}
              >
                60% / 37°С / 3.3 Ghz
        </Typography>
              <div className={classes.serverOverviewElementChartWrapper}>
                <ResponsiveContainer height={50} width="99%">
                  <AreaChart data={getRandomData(10)}>
                    <Area
                      type="natural"
                      dataKey="value"
                      stroke={theme.palette.secondary.main}
                      fill={theme.palette.secondary.light}
                      strokeWidth={2}
                      fillOpacity="0.25"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className={classes.serverOverviewElement}>
              <Typography
                color="text"
                colorBrightness="secondary"
                className={classes.serverOverviewElementText}
              >
                54% / 31°С / 3.3 Ghz
        </Typography>
              <div className={classes.serverOverviewElementChartWrapper}>
                <ResponsiveContainer height={50} width="99%">
                  <AreaChart data={getRandomData(10)}>
                    <Area
                      type="natural"
                      dataKey="value"
                      stroke={theme.palette.primary.main}
                      fill={theme.palette.primary.light}
                      strokeWidth={2}
                      fillOpacity="0.25"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className={classes.serverOverviewElement}>
              <Typography
                color="text"
                colorBrightness="secondary"
                className={classes.serverOverviewElementText}
              >
                57% / 21°С / 3.3 Ghz
        </Typography>
              <div className={classes.serverOverviewElementChartWrapper}>
                <ResponsiveContainer height={50} width="99%">
                  <AreaChart data={getRandomData(10)}>
                    <Area
                      type="natural"
                      dataKey="value"
                      stroke={theme.palette.warning.main}
                      fill={theme.palette.warning.light}
                      strokeWidth={2}
                      fillOpacity="0.25"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </Widget>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Widget title="Revenue Breakdown" upperTitle className={classes.card}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <ResponsiveContainer width="100%" height={144}>
                  <PieChart margin={{ left: theme.spacing(2) }}>
                    <Pie
                      data={PieChartData}
                      innerRadius={45}
                      outerRadius={60}
                      dataKey="value"
                    >
                      {PieChartData.map((entry, index) => (
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
                  {PieChartData.map(({ name, value, color }, index) => (
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

        {/* <Grid item xs={12}>
          <Widget
            title="Support Requests"
            upperTitle
            noBodyPadding
            bodyClass={classes.tableWidget}
          >

            <ApexLineChart></ApexLineChart>
            <Divider></Divider>
            <Table data={mock.table} />
          </Widget>
        </Grid>

        <Grid item xs={12}>
          <Widget
            title="Support Requests"
            upperTitle
            noBodyPadding
            bodyClass={classes.tableWidget}
          >

            <ApexLineChart></ApexLineChart>
            <Divider></Divider>
            <Table data={mock.table} />
          </Widget>
        </Grid> */}

      {/* <Grid item xs={12}>
    <Widget
      bodyClass={classes.mainChartBody}
      header={
        <div className={classes.mainChartHeader}>
          <Typography
            variant="h5"
            color="text"
            colorBrightness="secondary"
          >
            Daily Line Chart
          </Typography>
          <div className={classes.mainChartHeaderLabels}>
            <div className={classes.mainChartHeaderLabel}>
              <Dot color="warning" />
              <Typography className={classes.mainChartLegentElement}>
                Tablet
              </Typography>
            </div>
            <div className={classes.mainChartHeaderLabel}>
              <Dot color="primary" />
              <Typography className={classes.mainChartLegentElement}>
                Mobile
              </Typography>
            </div>
            <div className={classes.mainChartHeaderLabel}>
              <Dot color="primary" />
              <Typography className={classes.mainChartLegentElement}>
                Desktop
              </Typography>
            </div>
          </div>
          <Select
            value={mainChartState}
            onChange={e => setMainChartState(e.target.value)}
            input={
              <OutlinedInput
                labelWidth={0}
                classes={{
                  notchedOutline: classes.mainChartSelectRoot,
                  input: classes.mainChartSelect,
                }}
              />
            }
            autoWidth
          >
            <MenuItem value="daily">Daily</MenuItem>
            <MenuItem value="weekly">Weekly</MenuItem>
            <MenuItem value="monthly">Monthly</MenuItem>
          </Select>
        </div>
      }
    >
      <ResponsiveContainer width="100%" minWidth={500} height={350}>
        <ComposedChart
          margin={{ top: 0, right: -15, left: -15, bottom: 0 }}
          data={mainChartData}
        >
          <YAxis
            ticks={[0, 2500, 5000, 7500]}
            tick={{ fill: theme.palette.text.hint + "80", fontSize: 14 }}
            stroke={theme.palette.text.hint + "80"}
            tickLine={false}
          />
          <XAxis
            tickFormatter={i => i + 1}
            tick={{ fill: theme.palette.text.hint + "80", fontSize: 14 }}
            stroke={theme.palette.text.hint + "80"}
            tickLine={false}
          />
          <Area
            type="natural"
            dataKey="desktop"
            fill={theme.palette.background.light}
            strokeWidth={0}
            activeDot={false}
          />
          <Line
            type="natural"
            dataKey="mobile"
            stroke={theme.palette.primary.main}
            strokeWidth={2}
            dot={false}
            activeDot={false}
          />
          <Line
            type="linear"
            dataKey="tablet"
            stroke={theme.palette.warning.main}
            strokeWidth={2}
            dot={{
              stroke: theme.palette.warning.dark,
              strokeWidth: 2,
              fill: theme.palette.warning.main,
            }}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </Widget>
  </Grid> */}
      {/* </Grid> * /} */}
    </>
    //Monthly Update Section Ends Here
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
function renderActiveShape(props) {
  var RADIAN = Math.PI / 180;
  var {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  var sin = Math.sin(-RADIAN * midAngle);
  var cos = Math.cos(-RADIAN * midAngle);
  var sx = cx + (outerRadius + 10) * cos;
  var sy = cy + (outerRadius + 10) * sin;
  var mx = cx + (outerRadius + 30) * cos;
  var my = cy + (outerRadius + 30) * sin;
  var ex = mx + (cos >= 0 ? 1 : -1) * 22;
  var ey = my;
  var textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`PV ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
}