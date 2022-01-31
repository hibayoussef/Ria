import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import { darken } from "@material-ui/core/styles/colorManipulator";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import JWTLoginTab from "./tabs/JWTLoginTab";

const useStyles = makeStyles((theme) => ({
  root: {
    background: `linear-gradient(to right, ${
      theme.palette.primary.dark
    } 0%, ${darken(theme.palette.primary.dark, 0.5)} 100%)`,
    color: theme.palette.primary.contrastText,
  },
  leftSection: {},
  rightSection: {
    background: `linear-gradient(to right, ${
      theme.palette.primary.dark
    } 0%, ${darken(theme.palette.primary.dark, 0.5)} 100%)`,
    color: theme.palette.primary.contrastText,
  },
}));

function Login() {
  const classes = useStyles();
  const [selectedTab, setSelectedTab] = useState(0);

  function handleTabChange(event, value) {
    setSelectedTab(value);
  }

  return (
    <div
      className={clsx(
        classes.root,
        "flex flex-col flex-auto items-center justify-center flex-shrink-0 p-16 md:p-24"
      )}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex w-full max-w-400 md:max-w-3xl rounded-20 shadow-2xl overflow-hidden"
      >
        <Card
          className={clsx(
            classes.leftSection,
            "flex flex-col w-full max-w-sm items-center justify-center shadow-0"
          )}
          square
        >
          <CardContent className="flex flex-col  w-full py-96 max-w-320">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.2 } }}
            >
              <div className="flex items-center mb-6">
                <div
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  className="flex mb-32"
                >
                  <div>
                    <Typography
                      className="text-20 font-semibold logo-text"
                      color="inherit"
                    >
                      Login
                    </Typography>
                    <Typography
                      className="text-14 tracking-widest -mt-13 font-700 mb-10"
                      color="textSecondary"
                    >
                      fill in your login information
                    </Typography>
                  </div>
                </div>
              </div>
            </motion.div>

            {<JWTLoginTab />}
          </CardContent>

          <div className="flex flex-col items-center justify-center pb-32">
            <div>
              <span className="font-normal mr-8">Don't have an account?</span>
              <Link className="font-normal" to="/register">
                Register
              </Link>
            </div>
            <Link className="font-normal mt-8" to="/">
              Back to Dashboard
            </Link>
          </div>
        </Card>

        <div
          className={clsx(
            classes.rightSection,
            "hidden md:flex flex-1 items-center justify-center p-64"
          )}
        >
          <div className="max-w-320">
            <motion.div
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
            >
              <img
                src="assets/images/logos/brick.png"
                color="#F6F7F9"
                width="110rem"
                height="100rem"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Login;
