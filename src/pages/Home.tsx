import { Button, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export interface UserInfo {
  name: string;
  gender: string;
  lang: string;
}

const Home: React.FC = () => {

    const navigate = useNavigate();

  const [user, setUser] = useState<UserInfo>({
    name: "",
    gender: "Male",
    lang: "Java",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    console.log(user);
    navigate("/exam", {
        state: user
    })
  }

  return (
    <div>      
      <form
      data-testid="home"
    onSubmit={handleSubmit}
      >
        <div
        style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "100px",
            textAlign: "left"
        }}
        >
          <h2>Online MCQ</h2>
          <TextField
            value={user.name}
            name="name"
            type="text"
            placeholder="Please enter your name"
            variant="outlined"
            onChange={handleInputChange}
            sx={{width: "25%", marginBottom: "30px"}}
          />
          <TextField
          select
          label="Select Gender"
            name="gender"
            value={user.gender}
            onChange={handleInputChange}
            sx={{width: "25%", marginBottom: "30px"}}
            
          >
            <MenuItem key="Male" value="Male">
                  Male
              </MenuItem>
            <MenuItem key="Female" value="Female">
                  Female
              </MenuItem>
            
          </TextField>
          <TextField 
            select
            label="Select Language"
              name="lang"
              value={user.lang}
              onChange={handleInputChange}
              sx={{width: "25%", marginBottom: "25px"}}
          >
            
            <MenuItem key="Java" value="Java">
                  Java
              </MenuItem>
            <MenuItem key="NodeJS" value="NodeJS">
                  NodeJS
              </MenuItem>
          </TextField>
          <Button sx={{width: "25%"}} size="large" variant="contained" type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default Home;
