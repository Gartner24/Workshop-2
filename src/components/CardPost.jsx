import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SendIcon from '@mui/icons-material/Send';
import ChatBubbleOutlinedIcon from '@mui/icons-material/ChatBubbleOutlined';


export default function CardPost() {

  return (
    <Card sx={{ maxWidth: 400 }} style={{margin:'0 auto', borderRadius:'15px'}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            <img src="https://ichef.bbci.co.uk/news/640/cpsprodpb/2042/production/_102685280_gettyimages-956294722.jpg" alt="" styled={{maxWidth:'100%'}} />
          </Avatar>
        }
        title="Shrimp and Chorizo Paella"
      />
      <CardMedia style={{padding:'.8rem', borderRadius:'20px'}}
        component="img"
        height="194"
        image="https://ichef.bbci.co.uk/news/640/cpsprodpb/2042/production/_102685280_gettyimages-956294722.jpg"
        alt="Paella dish"
      />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="comment">
          <ChatBubbleOutlinedIcon />
        </IconButton>
        <IconButton aria-label="send">
          <SendIcon />
        </IconButton>
      </CardActions>

      <CardContent>
      <Typography variant="body2" color="text.secondary">
          Nombre Usuario
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      </Card>
  );
}
