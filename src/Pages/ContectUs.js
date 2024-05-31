import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { FaFacebook, FaLinkedin, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { MdMarkEmailRead } from "react-icons/md";

const Contact1 = () => {
  return (
    <div
      className="bg-gray-100"
      style={{
        paddingBottom: 20,
        paddingTop: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="center"
        style={{
          width: "80%",
          marginTop: "100px",
          backgroundColor: "#F2EDE6",
          paddingBottom: 20,
          borderRadius: 20,
        }}
      >
        {/* First Column - Image */}
        <Grid item xs={12} sm={4} align="center">
          <img
            src="https://picsum.photos/200/300?random=2"
            alt="Contact Us"
            style={{
              width: "90%",
              height: "400px",
              borderRadius: " 50px 0 50px 0",
              zIndex: "99999999999999999",
            }}
          />
        </Grid>

        {/* Second Column - Input Fields */}
        <Grid item xs={12} sm={4} align="center">
          <Typography variant="h5">Get In Touch</Typography>
          <TextField
            align="center"
            id="standard-basic"
            label="Name"
            variant="standard"
            name="name"
          />
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            style={{ marginTop: 10 }}
            name="email"
          />
          <TextField
            id="standard-basic"
            label="Phone"
            variant="standard"
            name="phone"
            style={{ marginTop: 10 }}
          />

          <Grid item xs={12} sm={8} align="center">
            <TextField
              align="center"
              id="standard-basic"
              fullWidth
              label="Message"
              variant="standard"
              multiline
              name="message"
              rows={2}
              style={{ marginTop: 10, marginLeft: 20 }}
            />
          </Grid>
          <Button variant="contained" style={{ marginTop: 15 }}>
            Contact Us
          </Button>
        </Grid>

        {/* Third Column - Contact Info */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h5" className="font-extrabold">
            Contact Info
          </Typography>
          <Typography variant="body1">
            <a href="tel:+1234567890" className="text-black font-semibold">
              <FaPhoneAlt
                style={{ fontSize: "1rem", marginRight: 10, marginTop: 20 }}
              />
              +1234567890
            </a>
          </Typography>
          <Typography
            variant="body1"
            style={{ marginBottom: 80, marginTop: 20 }}
          >
            <a
              href="mailto:example@example.com"
              className="text-black italic"
              style={{ fontSize: "1.4rem", marginRight: "10px" }}
            >
              <MdMarkEmailRead
                style={{ fontSize: "1.4rem", marginRight: 10 }}
              />
              example@example.com
            </a>
          </Typography>
          <Typography>
            <FaLinkedin style={{ fontSize: "2rem", marginRight: "10px" }} />
            <FaFacebook style={{ fontSize: "2rem", marginRight: "10px" }} />
            <FaTwitter style={{ fontSize: "2rem", marginRight: "10px" }} />
            <RiInstagramFill style={{ fontSize: "2rem" }} />
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact1;
