import React, { Fragment, useRef, useState } from "react";
import Navbar from "../components/navbar";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { Link, useNavigate } from "react-router-dom";
import { useResume } from "../Zustand/store";
const Extra: React.FC = () => {
  const skillsRef = useRef([]);
  const interestRef = useRef([]);
  const setExtras = useResume((state) => state.setExtra);

  const navigate = useNavigate();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    let skills = [];
    let interests = [];

    for (var i = 0; i < 6; i++) {
      skills.push(skillsRef.current[i].value);
      interests.push(interestRef.current[i].value);
    }
    setExtras({ Skills: skills, Interests: interests });
    navigate("/resume");
  };

  return (
    <Navbar>
      <Fragment>
        <form onSubmit={formSubmitHandler}>
          <div>
            <div className="border-solid shadow-lg border-black mx-20 mt-5 p-3 rounded-md">
              <div className="flex justify-center items-center border-solid border-black h-16 shadow rounded-md">
                <h1 className="text-2xl">Extra Details</h1>
              </div>
              <div className="mt-5 flex justify-center">
                <Box sx={{ width: "100%" }}>
                  <Grid
                    container
                    rowSpacing={2}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <Grid item md={12}>
                      <h1 className="text-xl">Skills/Languages</h1>
                    </Grid>
                    {[...Array(6)].map((arr, index) => {
                      return (
                        <Grid item xs={4} md={4} key={index}>
                          <TextField
                            id="outlined-basic"
                            label={`Skill ${index + 1}`}
                            variant="outlined"
                            key={index}
                            size="small"
                            className="w-[400px]"
                            inputRef={(ef) => (skillsRef.current[index] = ef)}
                          />
                        </Grid>
                      );
                    })}

                    <Grid item md={12}>
                      <hr className="bg-black my-4" />
                    </Grid>
                    <Grid item md={12}>
                      <h1 className="text-xl">Interest</h1>
                    </Grid>
                    {[...Array(6)].map((arr, index) => {
                      return (
                        <Grid item xs={4} md={4} key={index}>
                          <TextField
                            id="outlined-basic"
                            label={`Interest ${index + 1}`}
                            variant="outlined"
                            size="small"
                            className="w-[400px]"
                            inputRef={(ef) => (interestRef.current[index] = ef)}
                            key={index}
                          />
                        </Grid>
                      );
                    })}
                  </Grid>
                </Box>
              </div>
              <Stack
                direction="row"
                spacing={20}
                className="mt-10 flex justify-center"
              >
                <Link to="/experience">
                  <Button variant="contained" color="success">
                    Back
                  </Button>
                </Link>
                <Button variant="contained" color="success" type="submit">
                  Submit
                </Button>
              </Stack>
            </div>
          </div>
        </form>
      </Fragment>
    </Navbar>
  );
};

export default Extra;
