import React, { useEffect, useState } from "react";
import { Grid, Box, Typography, Card, Button, ListItem } from "@mui/material";
import CreditCardRoundedIcon from "@mui/icons-material/CreditCardRounded";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import Visa from "../../images/visa.png";
import Cash from "../../images/cash.png";
import Done from "../../images/done.png";
import Done2 from "../../images/bluedone1.png";
import moment from 'moment'

import axios from 'axios'

const getAllTransaction = () => {
  let apiUrl = 'http://localhost:7008/transaction'
  return axios.get(apiUrl)
}


function Transacton() {

  const [listTransactions, setListTransactions] = useState([])
  const [listItems, setListItems] = useState([])
  
  useEffect(() => {
		getAllTransaction()
    .then(response => response.data)
    .then(data => {
      console.log(data)
      const items = data.map(
        (el, i) => {
            return (
              <Box key={i}
                display="flex"
                sx={{ backgroundColor: "#f0f0f0", width: "1110px", height: "100px" }}
              >
                <Grid item ml={2}>
                  <Typography
                    color="#0e1724"
                    fontFamily="RobotoHelvetica"
                    fontWeight="bold"
                    mt={3}
                  >
                    {/* 7:30 pm */}
                    {moment(el?.createdAt).format()}
                  </Typography>
                  <Typography
                    color="#0e1724"
                    fontFamily="RobotoHelvetica"
                    fontWeight="bold"
                  >
                    {/* May 06th */}
                  </Typography>
                  <Typography
                    color="#0e1724"
                    fontFamily="RobotoHelvetica"
                    fontWeight="bold"
                    ml={35}
                    mt={-5}
                  >
                    {el.number}
                  </Typography>
                </Grid>
                <Grid item>
                  <img
                    src={el.ccType=='visa' ? Visa : Cash}
                    style={{ width: "40px", marginLeft: 180, marginTop: 33 }}
                  />
                </Grid>
                <Grid item>
                  <Typography
                    color="#0e1724"
                    fontFamily="RobotoHelvetica"
                    fontWeight="bold"
                    ml={20}
                    mt={4}
                  >
                    ${el.paidAmount}
                  </Typography>
                </Grid>
                <Grid item>
                  <img
                    src={el.status ? Done2 : Done}
                    style={{ width: "40px", marginLeft: 210, marginTop: 33 }}
                  />
                </Grid>
              </Box>
            )
        }
      )



      setListItems(items);
    })
	}, [])

  return (
    <Grid container mt={2}> 
    
    <div className="rdc" style={{ height: "700px", backgroundColor: "#fff" }}>
      {listItems}

      <Box
        display="flex"
        sx={{ backgroundColor: "#f0f0f0", width: "1110px", height: "100px" }}
      >
        <Grid item ml={2}>
          <Typography
            color="#0e1724"
            fontFamily="RobotoHelvetica"
            fontWeight="bold"
            mt={3}
          >
            7:30 pm
          </Typography>
          <Typography
            color="#0e1724"
            fontFamily="RobotoHelvetica"
            fontWeight="bold"
          >
            May 06th
          </Typography>
          <Typography
            color="#0e1724"
            fontFamily="RobotoHelvetica"
            fontWeight="bold"
            ml={35}
            mt={-5}
          >
            #909898987
          </Typography>
        </Grid>
        <Grid item>
          <img
            src={Visa}
            style={{ width: "40px", marginLeft: 180, marginTop: 33 }}
          />
        </Grid>
        <Grid item>
          <Typography
            color="#0e1724"
            fontFamily="RobotoHelvetica"
            fontWeight="bold"
            ml={20}
            mt={4}
          >
            $65.02
          </Typography>
        </Grid>
        <Grid item>
          <img
            src={Done2}
            style={{ width: "40px", marginLeft: 210, marginTop: 33 }}
          />
        </Grid>
      </Box>
      <Box
        display="flex"
        sx={{ backgroundColor: "#fff", width: "1110px", height: "100px" }}
      >
        <Grid item ml={2}>
          <Typography
            color="#0e1724"
            fontFamily="RobotoHelvetica"
            fontWeight="bold"
            mt={3}
          >
            7:30 pm
          </Typography>
          <Typography
            color="#0e1724"
            fontFamily="RobotoHelvetica"
            fontWeight="bold"
          >
            May 06th
          </Typography>
          <Typography
            color="#0e1724"
            fontFamily="RobotoHelvetica"
            fontWeight="bold"
            ml={35}
            mt={-5}
          >
            #909898987
          </Typography>
        </Grid>
        <Grid item>
          <img
            src={Cash}
            style={{ width: "40px", marginLeft: 180, marginTop: 33 }}
          />
        </Grid>
        <Grid item>
          <Typography
            color="#0e1724"
            fontFamily="RobotoHelvetica"
            fontWeight="bold"
            ml={20}
            mt={4}
          >
            $65.02
          </Typography>
        </Grid>
        <Grid item>
          <img
            src={Done}
            style={{ width: "40px", marginLeft: 210, marginTop: 33 }}
          />
        </Grid>
      </Box>
      <Box
        display="flex"
        sx={{ backgroundColor: "#f0f0f0", width: "1110px", height: "100px" }}
      >
        <Grid item ml={2}>
          <Typography
            color="#0e1724"
            fontFamily="RobotoHelvetica"
            fontWeight="bold"
            mt={3}
          >
            7:30 pm
          </Typography>
          <Typography
            color="#0e1724"
            fontFamily="RobotoHelvetica"
            fontWeight="bold"
          >
            May 06th
          </Typography>
          <Typography
            color="#0e1724"
            fontFamily="RobotoHelvetica"
            fontWeight="bold"
            ml={35}
            mt={-5}
          >
            #909898987
          </Typography>
        </Grid>
        <Grid item>
          <img
            src={Visa}
            style={{ width: "40px", marginLeft: 180, marginTop: 33 }}
          />
        </Grid>
        <Grid item>
          <Typography
            color="#0e1724"
            fontFamily="RobotoHelvetica"
            fontWeight="bold"
            ml={20}
            mt={4}
          >
            $65.02
          </Typography>
        </Grid>
        <Grid item>
          <img
            src={Done2}
            style={{ width: "40px", marginLeft: 210, marginTop: 33 }}
          />
        </Grid>
      </Box>
      <Box
        display="flex"
        sx={{ backgroundColor: "#fff", width: "1110px", height: "100px" }}
      >
        <Grid item ml={2}>
          <Typography
            color="#0e1724"
            fontFamily="RobotoHelvetica"
            fontWeight="bold"
            mt={3}
          >
            7:30 pm
          </Typography>
          <Typography
            color="#0e1724"
            fontFamily="RobotoHelvetica"
            fontWeight="bold"
          >
            May 06th
          </Typography>
          <Typography
            color="#0e1724"
            fontFamily="RobotoHelvetica"
            fontWeight="bold"
            ml={35}
            mt={-5}
          >
            #909898987
          </Typography>
        </Grid>
        <Grid item>
          <img
            src={Cash}
            style={{ width: "40px", marginLeft: 180, marginTop: 33 }}
          />
        </Grid>
        <Grid item>
          <Typography
            color="#0e1724"
            fontFamily="RobotoHelvetica"
            fontWeight="bold"
            ml={20}
            mt={4}
          >
            $65.02
          </Typography>
        </Grid>
        <Grid item>
          <img
            src={Done}
            style={{ width: "40px", marginLeft: 210, marginTop: 33 }}
          />
        </Grid>
      </Box>
      <Box
        display="flex"
        sx={{ backgroundColor: "#f0f0f0", width: "1110px", height: "100px" }}
      >
        <Grid item ml={2}>
          <Typography
            color="#0e1724"
            fontFamily="RobotoHelvetica"
            fontWeight="bold"
            mt={3}
          >
            7:30 pm
          </Typography>
          <Typography
            color="#0e1724"
            fontFamily="RobotoHelvetica"
            fontWeight="bold"
          >
            May 06th
          </Typography>
          <Typography
            color="#0e1724"
            fontFamily="RobotoHelvetica"
            fontWeight="bold"
            ml={35}
            mt={-5}
          >
            #909898987
          </Typography>
        </Grid>
        <Grid item>
          <img
            src={Visa}
            style={{ width: "40px", marginLeft: 180, marginTop: 33 }}
          />
        </Grid>
        <Grid item>
          <Typography
            color="#0e1724"
            fontFamily="RobotoHelvetica"
            fontWeight="bold"
            ml={20}
            mt={4}
          >
            $65.02
          </Typography>
        </Grid>
        <Grid item>
          <img
            src={Done2}
            style={{ width: "40px", marginLeft: 210, marginTop: 33 }}
          />
        </Grid>
      </Box>
      <Box
        display="flex"
        sx={{ backgroundColor: "#fff", width: "1110px", height: "100px" }}
      >
        <Grid item ml={2}>
          <Typography
            color="#0e1724"
            fontFamily="RobotoHelvetica"
            fontWeight="bold"
            mt={3}
          >
            7:30 pm
          </Typography>
          <Typography
            color="#0e1724"
            fontFamily="RobotoHelvetica"
            fontWeight="bold"
          >
            May 06th
          </Typography>
          <Typography
            color="#0e1724"
            fontFamily="RobotoHelvetica"
            fontWeight="bold"
            ml={35}
            mt={-5}
          >
            #909898987
          </Typography>
        </Grid>
        <Grid item>
          <img
            src={Cash}
            style={{ width: "40px", marginLeft: 180, marginTop: 33 }}
          />
        </Grid>
        <Grid item>
          <Typography
            color="#0e1724"
            fontFamily="RobotoHelvetica"
            fontWeight="bold"
            ml={20}
            mt={4}
          >
            $65.02
          </Typography>
        </Grid>
        <Grid item>
          <img
            src={Done}
            style={{ width: "40px", marginLeft: 210, marginTop: 33 }}
          />
        </Grid>
      </Box>
    </div>
    </Grid>
  );
}

export default Transacton;
