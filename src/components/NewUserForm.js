import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";

function NewUserForm() {
  return (
    <Grid item xl={1} xs={4} md={2}>
      <Box sx={{ padding: "1rem" }}>
        <Box
          sx={{
            p: 2,
            justifyContent: "space-around",
            height: "8rem",
            gridTemplateColumns: { md: "1fr 1fr" },
            gap: 2,
          }}
        >
          <Box>
            <Card sx={{ display: "flex", justifyContent: "space-between" }}>
              <CardContent sx={{ display: "grid", padding: 1, width: "100%" }}>
                <Typography
                  sx={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                  component="div"
                  variant="h5"
                >
                  new user's name
                </Typography>
                <Typography
                  sx={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  new user's email
                </Typography>
                <Box
                  sx={{
                    display: "grid",
                    padding: 2,
                    alignItems: "center",
                    pl: 1,
                    pb: 1,
                  }}
                >
                  <Typography
                    sx={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                    variant="v2"
                    component="div"
                  >
                    Address: new user's address
                  </Typography>
                  <Typography
                    sx={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                    variant="v1"
                    component="div"
                  >
                    Id: new user's id
                  </Typography>
                </Box>
                <Box>
                  <IconButton disabled>
                    <EditIcon />
                  </IconButton>
                  <IconButton disabled>
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </CardContent>
              <CardMedia component="img" sx={{ width: 250 }} />
            </Card>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}

export default NewUserForm;
