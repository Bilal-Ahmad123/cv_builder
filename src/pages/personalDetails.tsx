import { Fragment, useRef, useState } from "react";
import styles from "./personalDetails.module.css";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { personalDataType } from "../utils/types";
import Navbar from "../components/navbar";
import { Link, useNavigate } from "react-router-dom";
import { useResume } from "../Zustand/store";

const PersonalDetails: React.FC = () => {
  const fnameRef = useRef<HTMLInputElement>(null);
  const lnameRef = useRef<HTMLInputElement>(null);
  const gmailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const websiteRef = useRef<HTMLInputElement>(null);
  const githubRef = useRef<HTMLInputElement>(null);
  const twitterRef = useRef<HTMLInputElement>(null);
  const instagramRef = useRef<HTMLInputElement>(null);
  const linkedinRef = useRef<HTMLInputElement>(null);
  const facebookRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();
  const setPersonalDetails = useResume((state) => state.setPersonalDetails);
  const formSubmitHandler = (e) => {
    e.preventDefault();
    setPersonalDetails({
      FirstName: fnameRef.current?.value!,
      LastName: lnameRef.current?.value!,
      Gmail: gmailRef.current?.value!,
      PhoneNo: phoneRef.current?.value!,
      Github: githubRef.current?.value,
      Linkedin: linkedinRef.current?.value,
      Twitter: twitterRef.current?.value,
      Instagram: instagramRef.current?.value,
      Facebook: facebookRef.current?.value,
      Website: websiteRef.current?.value,
    });

    navigate("/education");
  };

  return (
    <Navbar>
      <Fragment>
        <form onSubmit={formSubmitHandler}>
          <div>
            <div className="border-solid shadow-lg border-black mx-20 mt-5 p-3 rounded-md">
              <div className="flex justify-center items-center border-solid border-black h-16 shadow rounded-md">
                <h1 className="text-2xl">Personal Details</h1>
              </div>
              <div className="mt-5 flex justify-center">
                <Box sx={{ width: "100%" }}>
                  <Grid
                    container
                    rowSpacing={2}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <Grid item xs={12} md={6} sm={12}>
                      <TextField
                        id="outlined-basic"
                        label="First Name"
                        variant="outlined"
                        size="small"
                        className="w-[500px]"
                        inputRef={fnameRef}
                        required
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        id="outlined-basic"
                        label="Last Name"
                        variant="outlined"
                        size="small"
                        className="w-[500px]"
                        required
                        inputRef={lnameRef}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        size="small"
                        className="w-[500px]"
                        required
                        type="email"
                        inputRef={gmailRef}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        id="outlined-basic"
                        label="Phone Number"
                        variant="outlined"
                        size="small"
                        className="w-[500px]"
                        type="number"
                        required
                        inputRef={phoneRef}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        id="outlined-basic"
                        label="Your Website"
                        variant="outlined"
                        size="small"
                        className="w-[500px]"
                        inputRef={websiteRef}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        id="outlined-basic"
                        label="GitHub"
                        variant="outlined"
                        size="small"
                        className="w-[500px]"
                        inputRef={githubRef}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        id="outlined-basic"
                        label="Linkedin"
                        variant="outlined"
                        size="small"
                        className="w-[500px]"
                        inputRef={linkedinRef}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        id="outlined-basic"
                        label="Twitter"
                        variant="outlined"
                        size="small"
                        className="w-[500px]"
                        inputRef={twitterRef}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        id="outlined-basic"
                        label="Facebook"
                        variant="outlined"
                        size="small"
                        className="w-[500px]"
                        inputRef={facebookRef}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        id="outlined-basic"
                        label="Instagram"
                        variant="outlined"
                        size="small"
                        className="w-[500px]"
                        inputRef={instagramRef}
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
                <Button variant="outlined" disabled>
                  Back
                </Button>
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

export default PersonalDetails;
