import React, { Fragment, useRef, useState } from "react";
import Navbar from "../components/navbar";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { Link, useNavigate } from "react-router-dom";
import { useResume } from "../Zustand/store";

const Projects: React.FC = () => {
  const titleRef = useRef([]);
  const linkRef = useRef([]);
  const descriptionRef = useRef([]);

  const setProjects = useResume((state) => state.setProjects);
  const navigate = useNavigate();
  const formSubmitHandler = (e) => {
    const projects = [];
    e.preventDefault();
    for (var i = 0; i < 3; i++) {
      projects.push({
        Title: titleRef?.current[i]?.value,
        Link: linkRef.current[i].value,
        Description: descriptionRef.current[i].value,
      });
    }
    setProjects(projects);

    navigate("/experience");
  };

  return (
    <Navbar>
      <Fragment>
        <form onSubmit={formSubmitHandler}>
          <div>
            <div className="border-solid shadow-lg border-black mx-20 my-5 p-3 rounded-md">
              <div className="flex justify-center items-center border-solid border-black h-16 shadow rounded-md">
                <h1 className="text-2xl">Projects Details</h1>
              </div>
              <div className="mt-5 flex justify-center">
                <Box sx={{ width: "100%" }}>
                  <Grid
                    container
                    rowSpacing={2}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    {[...Array(3)].map((arr, index) => {
                      return (
                        <Fragment key={index}>
                          <Grid
                            item
                            xs={4}
                            md={12}
                            className="flex justify-center text-xl"
                          >
                            <h2>Project {index + 1}</h2>
                          </Grid>

                          <Grid
                            item
                            xs={4}
                            md={12}
                            className="flex justify-center"
                          >
                            <TextField
                              id="outlined-basic"
                              label="Title"
                              variant="outlined"
                              size="small"
                              className="w-10/12"
                              // required
                              inputRef={(ef) => (titleRef.current[index] = ef)}
                            />
                          </Grid>
                          <Grid
                            item
                            xs={4}
                            md={12}
                            className="flex justify-center"
                          >
                            <TextField
                              id="outlined-basic"
                              variant="outlined"
                              size="small"
                              className="w-10/12"
                              // required
                              label="Link"
                              inputRef={(ef) => (linkRef.current[index] = ef)}
                            />
                          </Grid>

                          <Grid
                            item
                            xs={8}
                            md={12}
                            className="flex justify-center"
                          >
                            <TextField
                              id="outlined-basic"
                              label="Description"
                              variant="outlined"
                              size="small"
                              className="w-10/12"
                              // required
                              inputRef={(ef) =>
                                (descriptionRef.current[index] = ef)
                              }
                            />
                          </Grid>
                          <Grid item md={12}>
                            <hr className="bg-black my-4" />
                          </Grid>
                        </Fragment>
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
                <Link to="/education">
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

export default Projects;
