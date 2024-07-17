
import { Typography, Box } from "@mui/material";

import { Videos } from "./";

const SearchFeed = () => {



 

  return (
    <Box p={2} minHeight="95vh">
      <Typography variant="h4" fontWeight={900}  color="white" mb={3} ml={{ sm: "100px"}}>
        Search Results for <span style={{ color: "#FC1503" }}></span> videos
      </Typography>
      <Box display="flex">
        <Box sx={{ mr: { sm: '100px' } }}/>
        {<Videos />}
      </Box>
    </Box>
  );
};

export default SearchFeed;
