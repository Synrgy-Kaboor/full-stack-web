import React, { useState } from 'react';
import { Typography as MuiTypography, Stack, TypographyProps, Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import stargold from '../../../assets/star-on.png';
import stargray from '../../../assets/star-off.png';
import card from '../../../assets/cardberanda.png';
const generateStars = (rating: number) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <img
        key={`star-${i}`}
        src={stargold}        
        alt="Gold Star"
        style={{ width: '14px', height: '14px' }}
      />
    );
  }

  if (halfStar) {
    stars.push(
      <img
        key="half-star"
        src={stargray}//belum ada            
        alt="Half Star"
        style={{ width: '14px', height: '14px' }}
      />
    );
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <img
        key={`empty-star-${i}`}
        src={stargray}//belum ada             
        alt="Empty Star"
        style={{ width: '14px', height: '14px' }}
      />
    );
  }

  return stars;
};

const Typography1 = ({ children, rating, review, ...props }: { children: string, rating: string, review: string } & TypographyProps) => (
  <Stack style={{ display: 'grid', gridTemplateColumns: '1fr auto' }}>
    <MuiTypography
      variant="h3"
      sx={{
        color: 'var(--Neutral-09, #1C1C1E)',
        fontFamily: 'Open Sans',
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: '30px',
        letterSpacing: '-0.75px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        ...props, 
      }}
    >
      {children}
    </MuiTypography>
    <Stack>
      <Stack style={{ marginLeft: '8px', fontSize: '14px', color: '#9E9E9E' }}>
        {rating}/5 ({review} Review)
      </Stack>
      <Stack direction={'row'} style={{ marginLeft: '8px', fontSize: '14px', color: '#9E9E9E', display: 'flex', justifyContent: 'end' }}>
        {generateStars(parseFloat(rating))}
      </Stack>
    </Stack>
  </Stack>
);

const BerandaRentalCard = ({ imageUrl, text, genre, price, rating, review }: { imageUrl: string, text: string, genre: string, price: string, rating: string, review: string }) => (
  <Card sx={{ maxWidth: 325, width: '100%', height: 435, marginRight: '16px', borderRadius: '8px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', position: 'relative' }}>
    <CardActionArea>
      <Stack sx={{
        position: 'absolute', 
        top: 10, 
        right: 15, 
        background:  'var(--Primary-01, linear-gradient(270deg, #3A42FF 0%, #7B52AB 100%))', 
        color: 'white', 
        padding: '8px', 
        borderRadius: '32px'
      }}>
        Promo Terbaik
      </Stack>
     
      <CardMedia component="img" height="182" image={imageUrl} alt="Image" />
      <CardContent>
        <Stack sx={{
        height: '225px',  display: 'flex', flexDirection: 'column', justifyContent: 'space-between'  
        }}>
          <Stack>
            <Typography1
              gutterBottom
              overflow="hidden"
              color="var(--Neutral-09, #1C1C1E)"
              textOverflow="ellipsis"
              fontSize="20px"
              fontWeight={700}
              lineHeight="30px"
              letterSpacing="-0.75px"
              rating={rating}
              review={review}
            >
              {text}
            </Typography1>

            <MuiTypography
              variant="body2"
              color="#9E9E9E"
              fontFamily="Open Sans"
              fontSize="18px"
              fontWeight={400}
              lineHeight="26px"
              letterSpacing="-0.15px"
            >
              {genre}
            </MuiTypography>
          </Stack>
          <Stack>
            <MuiTypography
              variant="body2"
              color="var(--Neutral-06, var(--android-bottom-navigation-bottom-navigation-selected-color, #9E9E9E));"
              fontFamily="Open Sans"
              fontSize="16px"
              fontWeight={600}
              lineHeight="24px"
              letterSpacing="-0.15px"
            >
              Mulai dari
            </MuiTypography>
            <MuiTypography
              variant="body2"
              sx={{
                background: 'var(--Primary-01, linear-gradient(270deg, #3A42FF 0%, #7B52AB 100%))',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontFamily: 'Open Sans',
                fontSize: '24px',
                fontWeight: 700,
                lineHeight: '40px',
                letterSpacing: '-0.5px',
              }}
            >
              Rp. {price}
            </MuiTypography>
          </Stack>
          </Stack>
      </CardContent>
    </CardActionArea>
  </Card>
);

export const BerandaRental = () => {//data dummy 
  const [historyItems] = React.useState([
    {
      imageUrl: card,
      text: 'Toyota yariz',
      genre: 'Ekonomi',
      price: '1.000.000',
      rating: '4',
      review: '23',
    },
    {
      imageUrl: card,      
      text: 'Super Jet Air',
      genre: 'Ekonomi',
      price: '200.000',
      rating: '4',
      review: '23',
    },
    {
      imageUrl: card,      
      text: 'Lion Air',
      genre: 'Ekonomi',
      price: '400.000',
      rating: '4',
      review: '23',
    },
    {
      imageUrl: card,      
      text: 'Garuda Air',
      genre: 'Ekonomi',
      price: '1.000.000',
      rating: '4',
      review: '23',
    },
    {
      imageUrl: card,      
      text: 'Garuda Air',
      genre: 'Ekonomi',
      price: '200.000',
      rating: '4',
      review: '23',
    },
    {
      imageUrl: card,      
      text: 'Garuda Air',
      genre: 'Ekonomi',
      price: '400.000',
      rating: '4',
      review: '23',
    },
    {
      imageUrl: card,      
      text: 'Yaris',
      genre: 'Ekonomi',
      price: '200.000',
      rating: '4',
      review: '23',
    },
    {
      imageUrl: card,      
      text: 'Yaris',
      genre: 'Ekonomi',
      price: '400.000',
      rating: '4',
      review: '23',
    },
    {
      imageUrl: card,      
      text: 'Yaris',
      genre: 'Ekonomi',
      price: '1.000.000',
      rating: '4',
      review: '23',
    },
    {
      imageUrl: card,      
      text: 'Yaris',
      genre: 'Ekonomi',
      price: '200.000',
      rating: '4',
      review: '23',
    },
    {
      imageUrl: card,      
      text: 'Yaris',
      genre: 'Ekonomi',
      price: '400.000',
      rating: '4',
      review: '23',
    },
 
  ]);

  
  const [visibleItems, setVisibleItems] = useState(4);// inisial data yang muncul (4 item)

  const loadMoreItems = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 4); // menambah item (+4)
  };

  const latestItems = historyItems.slice(0, visibleItems);

  return (
    <Stack>
            <Stack sx={{display: 'grid', gridTemplateColumns: `repeat(auto-fill, minmax(calc(25% - 16px), 1fr))`, gap: '16px', margin: '16px 0'}}>
        {latestItems.map((item, index) => (
          <BerandaRentalCard
            key={index}
            imageUrl={item.imageUrl}
            text={item.text}
            genre={item.genre}
            price={item.price}
            rating={item.rating}
            review={item.review}
          />
        ))}
      </Stack>
      {visibleItems < historyItems.length && (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '0 auto', marginTop:'40px'}}>
          <Button size='medium'
            style={{
              display: 'flex',
              padding: '12px 20px',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '8px',
              background: 'var(--Primary-01, linear-gradient(270deg, #3A42FF 0%, #7B52AB 100%))',
              color: '#fff', 
              cursor: 'pointer',
              border: 'none',
            }}
            onClick={loadMoreItems}
          >
            Lihat Semua
          </Button>
        </div>
      )}
    </Stack>
  );
};