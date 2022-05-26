import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { SnackbarProvider } from "notistack";
import MainComponent from "./components/MainComponent";

function App() {
  const [data, setData] = useState(null);

  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=10")
      .then((res) => res.json())
      .then(
        (result) => {
          setData(result.results);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box>
      <SnackbarProvider maxSnack={4}>
        {data && <MainComponent data={data} />}
      </SnackbarProvider>
    </Box>
  );
}

export default App;
