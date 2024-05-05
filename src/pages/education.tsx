import React, { Fragment, useRef } from "react";
import Navbar from "../components/navbar";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { Link, useNavigate } from "react-router-dom";
import { useResume } from "../Zustand/store";
const Education: React.FC = () => {
  const schoolRef = useRef<HTMLInputElement>(null);
  const sFromRef = useRef<HTMLInputElement>(null);
  const sToRef = useRef<HTMLInputElement>(null);
  const sQualificationRef = useRef<HTMLInputElement>(null);
  const sDecriptionRef = useRef<HTMLInputElement>(null);
  const cCollegeRef = useRef<HTMLInputElement>(null);
  const cFromRef = useRef<HTMLInputElement>(null);
  const cToRef = useRef<HTMLInputElement>(null);
  const cQualificationRef = useRef<HTMLInputElement>(null);
  const cDecriptionRef = useRef<HTMLInputElement>(null);

  const setEducation = useResume((state) => state.setEducation);
  const navigate = useNavigate();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setEducation([
      {
        Institute: schoolRef.current?.value!,
        Qualification: sQualificationRef.current?.value!,
        To: sToRef.current?.value.toString()!,
        From: sFromRef.current?.value.toString()!,
        Description: sDecriptionRef.current?.value!,
      },
      {
        Institute: cCollegeRef.current?.value!,
        Qualification: cQualificationRef.current?.value!,
        To: cToRef.current?.value.toString()!,
        From: cFromRef.current?.value.toString()!,
        Description: cDecriptionRef.current?.value!,
      },
    ]);

    navigate("/projects");
  };

  return (
    <Navbar>
      <Fragment>
        <form onSubmit={formSubmitHandler}>
          <div>
            <div className="border-solid shadow-lg border-black mx-20 mt-5 p-3 rounded-md ">
              <div className="flex justify-center items-center border-solid border-black h-16 shadow rounded-md">
                <h1 className="text-2xl">Education Details</h1>
              </div>
              <div className="mt-5 flex justify-center">
                <Box sx={{ width: "100%" }}>
                  <Grid
                    container
                    rowSpacing={2}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <Grid item xs={4} md={4}>
                      <TextField
                        id="outlined-basic"
                        label="School"
                        variant="outlined"
                        size="small"
                        inputRef={schoolRef}
                        className="w-[400px]"
                        required
                      />
                    </Grid>
                    <Grid item xs={4} md={4}>
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        size="small"
                        className="w-[400px]"
                        required
                        label="From Year"
                        type="date"
                        inputRef={sFromRef}
                      />
                    </Grid>
                    <Grid item xs={4} md={4}>
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        size="small"
                        className="w-[400px]"
                        required
                        label="To Year"
                        type="date"
                        inputRef={sToRef}
                      />
                    </Grid>
                    <Grid item xs={4} md={4}>
                      <TextField
                        id="outlined-basic"
                        label="Qualification"
                        variant="outlined"
                        size="small"
                        className="w-[400px]"
                        required
                        inputRef={sQualificationRef}
                      />
                    </Grid>
                    <Grid item xs={8} md={8}>
                      <TextField
                        id="outlined-basic"
                        label="Description"
                        variant="outlined"
                        size="small"
                        className="w-[877px]"
                        required
                        inputRef={sDecriptionRef}
                      />
                    </Grid>
                    <Grid item md={12}>
                      <hr className="bg-black my-4" />
                    </Grid>
                    <Grid item xs={4} md={4}>
                      <TextField
                        id="outlined-basic"
                        label="College/University"
                        variant="outlined"
                        size="small"
                        className="w-[400px]"
                        required
                        inputRef={cCollegeRef}
                      />
                    </Grid>
                    <Grid item xs={4} md={4}>
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        size="small"
                        className="w-[400px]"
                        required
                        label="From Year"
                        type="date"
                        inputRef={cFromRef}
                      />
                    </Grid>
                    <Grid item xs={4} md={4}>
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        size="small"
                        className="w-[400px]"
                        required
                        label="To Year"
                        type="date"
                        inputRef={cToRef}
                      />
                    </Grid>
                    <Grid item xs={4} md={4}>
                      <TextField
                        id="outlined-basic"
                        label="Qualification"
                        variant="outlined"
                        size="small"
                        className="w-[400px]"
                        required
                        inputRef={cQualificationRef}
                      />
                    </Grid>
                    <Grid item xs={8} md={8}>
                      <TextField
                        id="outlined-basic"
                        label="Description"
                        variant="outlined"
                        size="small"
                        className="w-[877px]"
                        required
                        inputRef={cDecriptionRef}
                      />
                    </Grid>
                  </Grid>
                </Box>
              </div>
              <Stack
                direction="row"
                spacing={20}
                className="mt-10 flex justify-center"
              >
                <Link to="/">
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

export default Education;
