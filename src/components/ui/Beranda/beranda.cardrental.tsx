import React, { useState } from 'react';
import { Typography as MuiTypography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

const generateStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <img
        key={`star-${i}`}
        src="https://s3-alpha-sig.figma.com/img/1374/530e/4b9bd61ddb1f4c2b7931ee05e8e62d29?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JMUl5bNnL4a6fgr50lnIzJGpWox0xyf4drlzpilRgIMrgmXarCRAs13t~6~K7APCESBOyY~OTtQryQA1TNLadn-UmTXXKZmzOqwYqWCAHg32XvkJN1bx57HHXg5Dk-pgBArpWooPTeOgmUX5tGW~UAiRUCmZBiCj7mXumfcw3rHTX3QfA0SCcMq8KNSm34SyWdju31rxrUNLf76H~dKDLcnOGB9mg~n-GCKdrY-3A~2fkw2XpHqmZTFzvhrKrHDO1D5tvovZpcTXUEq9Wv2KpTdvKmFjM0SmwvI9c5UwZ-PuC-fRqsnTE~GX2ChdOFBUwkFiwgWihzIheJYOI2aWtQ__"
        alt="Gold Star"
        style={{ width: '14px', height: '14px' }}
      />
    );
  }

  if (halfStar) {
    stars.push(
      <img
        key="half-star"
        src="https://s3-alpha-sig.figma.com/img/17d8/5b98/cd8d6dc4f62bfddc7d58d021bcaba214?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AFv-wPQUf3LtmmLDaLDUZU272FaMAi1AzxqpsR78zOnLe4PgWg-YixYv3sb5tgC7InSDvP7LErdvxVzv1WZJliiv8YSRlhQBt5z~0jpJT1XCusSyNKiDMh7wDb8cZwnTUw1AdBDvaTb4-vXC23Tw3TWnZyITmm70DiHcFtsFEX4oL-IlSNh2z6B6aZFWbTKs8SU4yPlxjb7s4UnyQaR7ATglmMhZoIcKPJGAaCeRuhY~OdG2Xynbz~s9h0-SOxWVQ2elpVytGeoCR7uQwynEpmOdAZhF3qgGY0ahNjEy8R0Pt~SrSPHcG8yO5NZqM-wlYbWTxCXzvPkjK-3y2DwdRQ__"
        alt="Half Star"
        style={{ width: '14px', height: '14px' }}
      />
    );
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <img
        key={`empty-star-${i}`}
        src="https://s3-alpha-sig.figma.com/img/17d8/5b98/cd8d6dc4f62bfddc7d58d021bcaba214?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AFv-wPQUf3LtmmLDaLDUZU272FaMAi1AzxqpsR78zOnLe4PgWg-YixYv3sb5tgC7InSDvP7LErdvxVzv1WZJliiv8YSRlhQBt5z~0jpJT1XCusSyNKiDMh7wDb8cZwnTUw1AdBDvaTb4-vXC23Tw3TWnZyITmm70DiHcFtsFEX4oL-IlSNh2z6B6aZFWbTKs8SU4yPlxjb7s4UnyQaR7ATglmMhZoIcKPJGAaCeRuhY~OdG2Xynbz~s9h0-SOxWVQ2elpVytGeoCR7uQwynEpmOdAZhF3qgGY0ahNjEy8R0Pt~SrSPHcG8yO5NZqM-wlYbWTxCXzvPkjK-3y2DwdRQ__"
        alt="Empty Star"
        style={{ width: '14px', height: '14px' }}
      />
    );
  }

  return stars;
};

const Typography1 = ({ children, rating, review, ...props }) => (
  <div style={{ display: 'grid', gridTemplateColumns: '1fr auto' }}>
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
    <div>
      <div style={{ marginLeft: '8px', fontSize: '14px', color: '#9E9E9E' }}>
        {rating}/5 ({review} Review)
      </div>
      <div style={{ marginLeft: '8px', fontSize: '14px', color: '#9E9E9E', display: 'flex', justifyContent: 'end' }}>
        {generateStars(parseFloat(rating))}
      </div>
    </div>
  </div>
);

const BerandaRentalCard = ({ imageUrl, text, genre, price, rating, review }) => (
  <Card sx={{ maxWidth: 325, width: '100%', height: 435, marginRight: '16px', borderRadius: '8px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', position: 'relative' }}>
    <CardActionArea>
      <div style={{ position: 'absolute', top: 10, right: 15, background:  'var(--Primary-01, linear-gradient(270deg, #3A42FF 0%, #7B52AB 100%))', color: 'white', padding: '8px', borderRadius: '32px' }}>
        Promo Terbaik
      </div>
      <CardMedia component="img" height="182" image={imageUrl} alt="Image" />
      <CardContent>
        <div style={{ height: '225px',  display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
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
          </div>
          <div>
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
          </div>
        </div>
      </CardContent>
    </CardActionArea>
  </Card>
);

export const BerandaRental = () => {//data dummy 
  const [historyItems] = React.useState([
    {
      imageUrl: "https://s3-alpha-sig.figma.com/img/4409/b092/1970fcd74b74e1b8edd396bc9c03ba34?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GdgZpcNIGlIy7F5VgO62LU6aRCk-ETpIP0FXipVRyvYGgILGnUlPfB8r-C-FPu6WLfNbECXn2VNsUfqq-nhRY9QHWKmn8G23BR7anVqN9jsbwjfZexdvcPrJ-SHZyhtogpzj~~M2fUdJSOpETjYSy~yvWbocDCgWpWl4yau-sotiZQkxpdI~BBe77wxuZTpJYeli-293aMFjc7obgci9EwPpemuvrhQKEbIOqin4PGVYLDI7vo15v8AbJVTgETkc5PiMQTrMZkhEjKzuy34d-scg~vu7xmffJm9sc4wF9kBr86B8fWlQ50UCTV3dVQhEcWlCMiv8T3xKXpB6g3qosg__",
      text: "Toyota yariz",
      genre: "Ekonomi",
      price: "1.000.000",
      rating: "4",
      review: "23",
    },
    {
      imageUrl: "https://s3-alpha-sig.figma.com/img/4409/b092/1970fcd74b74e1b8edd396bc9c03ba34?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GdgZpcNIGlIy7F5VgO62LU6aRCk-ETpIP0FXipVRyvYGgILGnUlPfB8r-C-FPu6WLfNbECXn2VNsUfqq-nhRY9QHWKmn8G23BR7anVqN9jsbwjfZexdvcPrJ-SHZyhtogpzj~~M2fUdJSOpETjYSy~yvWbocDCgWpWl4yau-sotiZQkxpdI~BBe77wxuZTpJYeli-293aMFjc7obgci9EwPpemuvrhQKEbIOqin4PGVYLDI7vo15v8AbJVTgETkc5PiMQTrMZkhEjKzuy34d-scg~vu7xmffJm9sc4wF9kBr86B8fWlQ50UCTV3dVQhEcWlCMiv8T3xKXpB6g3qosg__",
      text: "Toyota Avanza",
      genre: "Ekonomi",
      price: "200.000",
      rating: "4",
      review: "23",
    },
    {
      imageUrl: "https://s3-alpha-sig.figma.com/img/4409/b092/1970fcd74b74e1b8edd396bc9c03ba34?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GdgZpcNIGlIy7F5VgO62LU6aRCk-ETpIP0FXipVRyvYGgILGnUlPfB8r-C-FPu6WLfNbECXn2VNsUfqq-nhRY9QHWKmn8G23BR7anVqN9jsbwjfZexdvcPrJ-SHZyhtogpzj~~M2fUdJSOpETjYSy~yvWbocDCgWpWl4yau-sotiZQkxpdI~BBe77wxuZTpJYeli-293aMFjc7obgci9EwPpemuvrhQKEbIOqin4PGVYLDI7vo15v8AbJVTgETkc5PiMQTrMZkhEjKzuy34d-scg~vu7xmffJm9sc4wF9kBr86B8fWlQ50UCTV3dVQhEcWlCMiv8T3xKXpB6g3qosg__",
      text: "Honda Jeep",
      genre: "Ekonomi",
      price: "400.000",
      rating: "4",
      review: "23",
    },
    {
      imageUrl: "https://s3-alpha-sig.figma.com/img/4409/b092/1970fcd74b74e1b8edd396bc9c03ba34?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GdgZpcNIGlIy7F5VgO62LU6aRCk-ETpIP0FXipVRyvYGgILGnUlPfB8r-C-FPu6WLfNbECXn2VNsUfqq-nhRY9QHWKmn8G23BR7anVqN9jsbwjfZexdvcPrJ-SHZyhtogpzj~~M2fUdJSOpETjYSy~yvWbocDCgWpWl4yau-sotiZQkxpdI~BBe77wxuZTpJYeli-293aMFjc7obgci9EwPpemuvrhQKEbIOqin4PGVYLDI7vo15v8AbJVTgETkc5PiMQTrMZkhEjKzuy34d-scg~vu7xmffJm9sc4wF9kBr86B8fWlQ50UCTV3dVQhEcWlCMiv8T3xKXpB6g3qosg__",
      text: "Yaris",
      genre: "Ekonomi",
      price: "1.000.000",
      rating: "4",
      review: "23",
    },
    {
      imageUrl: "https://s3-alpha-sig.figma.com/img/4409/b092/1970fcd74b74e1b8edd396bc9c03ba34?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GdgZpcNIGlIy7F5VgO62LU6aRCk-ETpIP0FXipVRyvYGgILGnUlPfB8r-C-FPu6WLfNbECXn2VNsUfqq-nhRY9QHWKmn8G23BR7anVqN9jsbwjfZexdvcPrJ-SHZyhtogpzj~~M2fUdJSOpETjYSy~yvWbocDCgWpWl4yau-sotiZQkxpdI~BBe77wxuZTpJYeli-293aMFjc7obgci9EwPpemuvrhQKEbIOqin4PGVYLDI7vo15v8AbJVTgETkc5PiMQTrMZkhEjKzuy34d-scg~vu7xmffJm9sc4wF9kBr86B8fWlQ50UCTV3dVQhEcWlCMiv8T3xKXpB6g3qosg__",
      text: "Yaris",
      genre: "Ekonomi",
      price: "200.000",
      rating: "4",
      review: "23",
    },
    {
      imageUrl: "https://s3-alpha-sig.figma.com/img/4409/b092/1970fcd74b74e1b8edd396bc9c03ba34?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GdgZpcNIGlIy7F5VgO62LU6aRCk-ETpIP0FXipVRyvYGgILGnUlPfB8r-C-FPu6WLfNbECXn2VNsUfqq-nhRY9QHWKmn8G23BR7anVqN9jsbwjfZexdvcPrJ-SHZyhtogpzj~~M2fUdJSOpETjYSy~yvWbocDCgWpWl4yau-sotiZQkxpdI~BBe77wxuZTpJYeli-293aMFjc7obgci9EwPpemuvrhQKEbIOqin4PGVYLDI7vo15v8AbJVTgETkc5PiMQTrMZkhEjKzuy34d-scg~vu7xmffJm9sc4wF9kBr86B8fWlQ50UCTV3dVQhEcWlCMiv8T3xKXpB6g3qosg__",
      text: "Yaris",
      genre: "Ekonomi",
      price: "400.000",
      rating: "4",
      review: "23",
    },
    {
      imageUrl: "https://s3-alpha-sig.figma.com/img/4409/b092/1970fcd74b74e1b8edd396bc9c03ba34?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GdgZpcNIGlIy7F5VgO62LU6aRCk-ETpIP0FXipVRyvYGgILGnUlPfB8r-C-FPu6WLfNbECXn2VNsUfqq-nhRY9QHWKmn8G23BR7anVqN9jsbwjfZexdvcPrJ-SHZyhtogpzj~~M2fUdJSOpETjYSy~yvWbocDCgWpWl4yau-sotiZQkxpdI~BBe77wxuZTpJYeli-293aMFjc7obgci9EwPpemuvrhQKEbIOqin4PGVYLDI7vo15v8AbJVTgETkc5PiMQTrMZkhEjKzuy34d-scg~vu7xmffJm9sc4wF9kBr86B8fWlQ50UCTV3dVQhEcWlCMiv8T3xKXpB6g3qosg__",
      text: "Yaris",
      genre: "Ekonomi",
      price: "200.000",
      rating: "4",
      review: "23",
    },
    {
      imageUrl: "https://s3-alpha-sig.figma.com/img/4409/b092/1970fcd74b74e1b8edd396bc9c03ba34?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GdgZpcNIGlIy7F5VgO62LU6aRCk-ETpIP0FXipVRyvYGgILGnUlPfB8r-C-FPu6WLfNbECXn2VNsUfqq-nhRY9QHWKmn8G23BR7anVqN9jsbwjfZexdvcPrJ-SHZyhtogpzj~~M2fUdJSOpETjYSy~yvWbocDCgWpWl4yau-sotiZQkxpdI~BBe77wxuZTpJYeli-293aMFjc7obgci9EwPpemuvrhQKEbIOqin4PGVYLDI7vo15v8AbJVTgETkc5PiMQTrMZkhEjKzuy34d-scg~vu7xmffJm9sc4wF9kBr86B8fWlQ50UCTV3dVQhEcWlCMiv8T3xKXpB6g3qosg__",
      text: "Yaris",
      genre: "Ekonomi",
      price: "400.000",
      rating: "4",
      review: "23",
    },
    {
      imageUrl: "https://s3-alpha-sig.figma.com/img/4409/b092/1970fcd74b74e1b8edd396bc9c03ba34?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GdgZpcNIGlIy7F5VgO62LU6aRCk-ETpIP0FXipVRyvYGgILGnUlPfB8r-C-FPu6WLfNbECXn2VNsUfqq-nhRY9QHWKmn8G23BR7anVqN9jsbwjfZexdvcPrJ-SHZyhtogpzj~~M2fUdJSOpETjYSy~yvWbocDCgWpWl4yau-sotiZQkxpdI~BBe77wxuZTpJYeli-293aMFjc7obgci9EwPpemuvrhQKEbIOqin4PGVYLDI7vo15v8AbJVTgETkc5PiMQTrMZkhEjKzuy34d-scg~vu7xmffJm9sc4wF9kBr86B8fWlQ50UCTV3dVQhEcWlCMiv8T3xKXpB6g3qosg__",
      text: "Yaris",
      genre: "Ekonomi",
      price: "1.000.000",
      rating: "4",
      review: "23",
    },
    {
      imageUrl: "https://s3-alpha-sig.figma.com/img/4409/b092/1970fcd74b74e1b8edd396bc9c03ba34?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GdgZpcNIGlIy7F5VgO62LU6aRCk-ETpIP0FXipVRyvYGgILGnUlPfB8r-C-FPu6WLfNbECXn2VNsUfqq-nhRY9QHWKmn8G23BR7anVqN9jsbwjfZexdvcPrJ-SHZyhtogpzj~~M2fUdJSOpETjYSy~yvWbocDCgWpWl4yau-sotiZQkxpdI~BBe77wxuZTpJYeli-293aMFjc7obgci9EwPpemuvrhQKEbIOqin4PGVYLDI7vo15v8AbJVTgETkc5PiMQTrMZkhEjKzuy34d-scg~vu7xmffJm9sc4wF9kBr86B8fWlQ50UCTV3dVQhEcWlCMiv8T3xKXpB6g3qosg__",
      text: "Yaris",
      genre: "Ekonomi",
      price: "200.000",
      rating: "4",
      review: "23",
    },
    {
      imageUrl: "https://s3-alpha-sig.figma.com/img/4409/b092/1970fcd74b74e1b8edd396bc9c03ba34?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GdgZpcNIGlIy7F5VgO62LU6aRCk-ETpIP0FXipVRyvYGgILGnUlPfB8r-C-FPu6WLfNbECXn2VNsUfqq-nhRY9QHWKmn8G23BR7anVqN9jsbwjfZexdvcPrJ-SHZyhtogpzj~~M2fUdJSOpETjYSy~yvWbocDCgWpWl4yau-sotiZQkxpdI~BBe77wxuZTpJYeli-293aMFjc7obgci9EwPpemuvrhQKEbIOqin4PGVYLDI7vo15v8AbJVTgETkc5PiMQTrMZkhEjKzuy34d-scg~vu7xmffJm9sc4wF9kBr86B8fWlQ50UCTV3dVQhEcWlCMiv8T3xKXpB6g3qosg__",
      text: "Yaris",
      genre: "Ekonomi",
      price: "400.000",
      rating: "4",
      review: "23",
    },
 
  ]);

  
  const [visibleItems, setVisibleItems] = useState(4);// inisial data yang muncul (4 item)

  const loadMoreItems = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 4); // menambah item (+4)
  };

  const latestItems = historyItems.slice(0, visibleItems);

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(auto-fill, minmax(calc(25% - 16px), 1fr))`, gap: '16px', margin: '16px 0' }}>
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
      </div>
      {visibleItems < historyItems.length && (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '0 auto', marginTop:'40px'}}>
          <button
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
          </button>
        </div>
      )}
    </div>
  );
};