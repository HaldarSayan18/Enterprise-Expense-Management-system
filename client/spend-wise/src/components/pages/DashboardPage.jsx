import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Icon, Table } from '@mui/material';
import SavingsIcon from '@mui/icons-material/Savings';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

// import Card from 'react-bootstrap/Card';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

export default function DashboardPage() {
    // Initial data
    const [data, setData] = useState([
        { name: "Budget1", value: 30 },
        { name: "Budget2", value: 50 },
        { name: "Budget3", value: 40 },
        { name: "Budget4", value: 25 }
    ]);

    // Function to update data dynamically
    // const updateData = () => {
    //     const newData = data.map((item) => ({
    //         ...item,
    //         value: Math.floor(Math.random() * 100) + 10, // Random values
    //     }));
    //     setData(newData);
    // };

    return (
        <>
            <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                {/* total budget */}
                <Card sx={{
                    maxWidth: 345,
                    marginBottom: "1.5rem",
                    borderStyle: "inset",
                    borderLeft: "none",
                    borderTop: "none",
                    borderColor: "grey"

                }}>
                    <CardContent sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "2rem" }}>
                        <Typography>
                            <Typography variant="h6" component="div">
                                Total Budget
                            </Typography>
                            <p><CurrencyRupeeIcon /> <p>12,800</p></p>
                        </Typography>
                        <Icon id="dashboard-card-section-icon-div">
                            <SavingsIcon id="dashboard-card-section-icon" />
                        </Icon>
                    </CardContent>
                    <CardActions>
                        <Button size="small" variant='outlined' color='warning'>Show Details</Button>
                    </CardActions>
                </Card>
                {/* total spendings */}
                <Card sx={{
                    maxWidth: 345,
                    marginBottom: "1.5rem",
                    borderStyle: "inset",
                    borderLeft: "none",
                    borderTop: "none",
                    borderColor: "grey"
                }}>
                    <CardContent sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "2rem" }}>
                        <Typography>
                            <Typography variant="h6" component="div">
                                Total Spendings
                            </Typography>
                            <p><CurrencyRupeeIcon /> <p>12,800</p></p>
                        </Typography>
                        <Icon id="dashboard-card-section-icon-div">
                            <ReceiptOutlinedIcon id="dashboard-card-section-icon" />
                        </Icon>
                    </CardContent>
                    <CardActions>
                        <Button size="small" variant='outlined' color='warning'>Show Details</Button>
                    </CardActions>
                </Card>
                {/* Num of budget */}
                <Card sx={{
                    maxWidth: 345,
                    marginBottom: "1.5rem",
                    borderStyle: "inset",
                    borderLeft: "none",
                    borderTop: "none",
                    borderColor: "grey"
                }}>
                    <CardContent sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "2rem" }}>
                        <Typography>
                            <Typography variant="h6" component="div">
                                Number of Budget
                            </Typography>
                            <h3>12,800</h3>
                        </Typography>
                        <Icon id="dashboard-card-section-icon-div">
                            <AccountBalanceWalletIcon id="dashboard-card-section-icon" />
                        </Icon>
                    </CardContent>
                    <CardActions>
                        <Button size="small" variant='outlined' color='warning'>Show Details</Button>
                    </CardActions>
                </Card>
            </Box>

            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {/* Expenses Bar Chart */}
                    <Grid item xs={5} md={8}>
                        <Box style={{
                            width: "100%",
                            textAlign: "center",
                        }}>
                            <h2>Expenses Bar Chart</h2>
                            {/* <button
                                onClick={updateData}
                                style={{
                                    padding: "10px",
                                    marginBottom: "20px",
                                    fontSize: "16px",
                                    cursor: "pointer",
                                }}
                            >
                                Update Data
                            </button> */}
                            <ResponsiveContainer width="100%" height={355}>
                                <BarChart data={data}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="value" fill="#8884d8" />
                                </BarChart>
                            </ResponsiveContainer>
                        </Box>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        {/* <Item> */}
                        <Card>
                            <CardContent sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "2rem" }}>
                                <Typography>
                                    <Typography variant="h6" component="div">
                                        Number of Budget
                                    </Typography>
                                    <br />
                                    <h3>12,800</h3>
                                </Typography>
                                <Icon id="dashboard-card-section-icon-div">
                                    <AccountBalanceWalletIcon id="dashboard-card-section-icon" />
                                </Icon>
                            </CardContent>
                            <CardActions>
                                <Button size="small" variant='outlined' color='warning'>Show Details</Button>
                            </CardActions>
                        </Card>
                        {/* </Item> */}
                    </Grid>
                </Grid>
            </Box>
        </>

    );
}