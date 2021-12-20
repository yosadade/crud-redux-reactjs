import React, { useState, useEffect } from "react";
import { Box, TextField, Button } from "@mui/material";
import { useHistory, useParams } from "react-router";
import useForm from "../utils/useForm";
import { useDispatch, useSelector } from "react-redux";
import { updateUserAction, getSingleUserAction } from "../redux/action";

const EditUser = () => {
  const [form, setForm] = useForm({
    name: "",
    email: "",
    contact: "",
    address: "",
  });
  const [error, setError] = useState();

  const history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.data);

  const { name, email, contact, address } = form;

  // useEffect(() => {
  //     dispatch(getSingleUserAction(id));
  // }, [dispatch, form, id]);

  // useEffect(() => {
  //   if(user) {
  //     setForm({...user})
  //   }
  // }, [setForm, user])

  const handleSubmit = () => {
    if (!name || !email || !contact || !address) {
      setError("please input all field");
    } else {
      dispatch(updateUserAction(form, id));
      setError("");
    }
  };

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        style={{ width: "100px", marginTop: "20px", marginBottom: "20px" }}
        onClick={() => history.push("/")}
      >
        Go Back
      </Button>
      <h3>Edit User {user.name}</h3>
      {error && <h3 style={{ color: "red" }}>{error}</h3>}
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "45ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-basic"
          label="Name"
          variant="standard"
          type="text"
          value={name}
          onChange={(e) => setForm("name", e.target.value)}
        />
        <TextField
          id="standard-basic"
          label="Email"
          variant="standard"
          type="email"
          value={email}
          onChange={(e) => setForm("email", e.target.value)}
        />
        <TextField
          id="standard-basic"
          label="Contact"
          variant="standard"
          type="number"
          value={contact}
          onChange={(e) => setForm("contact", e.target.value)}
        />
        <TextField
          id="standard-basic"
          label="Address"
          variant="standard"
          type="text"
          value={address}
          onChange={(e) => setForm("address", e.target.value)}
        />
      </Box>
      <Button
        variant="contained"
        color="primary"
        style={{ width: "100px", marginTop: "20px" }}
        onClick={handleSubmit}
      >
        Update
      </Button>
    </div>
  );
};

export default EditUser;
