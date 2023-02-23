import React from 'react'
import { Box, Typography, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';


const ChannelCard = ({ channelDetail,marginTop }) => {
    return (
        <Box sx={{
            boxShadow: 'none', borderRadius: '20px', display: "flex",
            justifyContent: "center",alignItems:"center", 
            width: { xs: '300px', md: '300px', lg: '300px' }, height: '326px',
             margin: "auto", marginTop,
        }} >
            <Link to={`/channel/${channelDetail?.id?.channelId}`}>
                <CardContent sx={{
                    display: "flex", flexDirection: 'column',
                    justifyContent: 'center', textAlign: "center", color: "fff"
                }} />

                <CardMedia image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                    alt={channelDetail?.snippet?.title}
                    sx={{ borderRadius: "50%", height: '180px', width: "190px", mb: 2, border: '1px solid #e3e3e3' }}
                />

                <Typography variant='h6' sx={{ color: "white", fontSize: "15px", justifyContent: "center", display: "flex" }} >
                    {channelDetail?.snippet?.title}
                    <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: '5px' }} />
                </Typography>

                {channelDetail?.statistics?.subscriberCount && (
                    <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }} >
                        {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers

                    </Typography>
                )}

            </Link>
        </Box>
    )
}

export default ChannelCard