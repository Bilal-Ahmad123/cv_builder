import React, { Fragment, useRef, useState } from "react";
import Navbar from "../components/navbar";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { Link, useNavigate } from "react-router-dom";
import { useResume } from "../Zustand/store";
const Experience: React.FC = () => {
  const instituteRef = useRef([]);
  const positionRef = useRef([]);
  const durationRef = useRef([]);
  const descriptionRef = useRef([]);

  const setExperience = useResume((state) => state.setExperience);
  const navigate = useNavigate();

  const formSubmitHandler = (e) => {
    const experience = [];
    e.preventDefault();
    for (var i = 0; i < 2; i++) {
      experience.push({
        Institute: instituteRef.current[i]?.value,
        Position: positionRef.current[i].value,
        Description: descriptionRef.current[i].value,
        Duration: durationRef.current[i].value,
      });
    }
    setExperience(experience);

    navigate("/extra");
  };
  return (
    <Navbar>
      <Fragment>
        <form onSubmit={formSubmitHandler}>
          <div>
            <div className="border-solid shadow-lg border-black mx-20 mt-5 p-3 rounded-md">
              <div className="flex justify-center items-center border-solid border-black h-16 shadow rounded-md">
                <h1 className="text-2xl">Experience Details</h1>
              </div>
              <div className="mt-5 flex justify-center">
                <Box sx={{ width: "100%" }}>
                  {[...Array(2)].map((arr, index) => {
                    return (
                      <Grid
                        key={index}
                        container
                        rowSpacing={2}
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                      >
                        <Grid item md={12}>
                          <h1 className="text-xl">Expreience {index + 1}</h1>
                        </Grid>
                        <Grid item xs={4} md={4}>
                          <TextField
                            id="outlined-basic"
                            label="Institute/Organization"
                            variant="outlined"
                            size="small"
                            className="w-[400px]"
                            inputRef={(ef) =>
                              (instituteRef.current[index] = ef)
                            }
                          />
                        </Grid>
                        <Grid item xs={4} md={4}>
                          <TextField
                            id="outlined-basic"
                            variant="outlined"
                            size="small"
                            className="w-[400px]"
                            label="Position"
                            inputRef={(ef) => (positionRef.current[index] = ef)}
                          />
                        </Grid>
                        <Grid item xs={4} md={4}>
                          <TextField
                            id="outlined-basic"
                            variant="outlined"
                            size="small"
                            className="w-[400px]"
                            label="Duration"
                            inputRef={(ef) => (durationRef.current[index] = ef)}
                          />
                        </Grid>
                        <Grid item xs={8} md={12}>
                          <TextField
                            id="outlined-basic"
                            label="Description"
                            variant="outlined"
                            size="small"
                            className="w-full"
                            inputRef={(ef) =>
                              (descriptionRef.current[index] = ef)
                            }
                          />
                        </Grid>
                        <Grid item md={12}>
                          <hr className="bg-black my-4" />
                        </Grid>
                      </Grid>
                    );
                  })}
                </Box>
              </div>
              <Stack
                direction="row"
                spacing={20}
                className="mt-10 flex justify-center"
              >
                <Link to="/projects">
                  <Button variant="contained" color="success">
                    Back
                  </Button>
                </Link>
                <Button variant="contained" color="success" type="submit">
                  Next
                </Button>
              </Stack>
            </div>
          </div>
        </form>
      </Fragment>
    </Navbar>
  );
};

export default Experience;
