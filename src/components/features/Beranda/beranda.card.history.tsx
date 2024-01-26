import { useState } from 'react';
import { Typography as MuiTypography } from '@mui/material';

const Typography = ({ children }: { children: string }) => (
    <MuiTypography
      variant="h3"
      sx={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        padding: '16px',
        color: 'var(--White, #FFF)', 
        fontFamily: 'Open Sans',
        fontSize: '20px', 
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: '28px', 
        letterSpacing: '-0.75px', 
      }}
    >
      {children}
    </MuiTypography>
  );
  

export const BerandaHistory = () => {
  const [historyItems] = useState([
    {
      imageUrl: 'https://placekitten.com/437/250',
      text: 'Terakhir dilihat 1',
    },
    {
      imageUrl: 'https://s3-alpha-sig.figma.com/img/952d/427e/8216c387f683b8138344c4b3fd98ec41?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K0r01yZSzDRU0DiYTx5fDxQwitabZpSIYJsJeAiquCj9O~tb7Eh-HXpMphXMD0cUqcK~iyaVvP-vaIXAHSj8VHJHDjxsNII~lZ0AfzhTKBJ5GTl77~sfi2klW9JPZ8DCoRm-ghThGZZY5kxXpdXKhqfm8TJMfaIZwcLlaxJov5UcVS3LDPJ8znRKcyZpNHtlxclwcrD~7PibepI~GCGnKehA4ZVBM5LcPQ4HWDAtOl8TEzBpmIjH61sWkPAcNW4jGmToP9qYD6MN5EYyQ9o~Im~Lq1aGo80IQdumkEG6bmKg8PpV3bFSc3RUvMO2G8gaNmscMG66O7vN1nBCzFbgDA__',
      text: 'Bandara Soekarno Hatta',
    },
    {
      imageUrl: 'https://s3-alpha-sig.figma.com/img/d7f5/3f26/5478e6f6f5880fa06a3be759e3e241dd?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D23Tw13P4aWws~X12s7s8~URuas43RYPC-RybMe82aU3~XDRo6wT2MOXCFew3H2JLjgkPfQjIgv0UqoEfBney2yw3FwDr9tDVJpRIXZKhYOxEtOSjnVs7~KQ9v2SGA22MMH1Me8ULwYOjZZfpy1JxtPGrORrsWrYfgiSoFW6qQzwYBW1BmuVLYatPT5a4ia99hnkFA~A6lFxn4TXMSbJLV44Tc4sH6wQsg7CyyfL0aSrK9xcd08nDbVtz~FBGtiknQk3o9QZmXM0vZpzw9aX-tM~Boa4EE5AgmD0ULk07Kyjp3YEdsvySx~TVEOJkc78yl~cLY1jRU4zaHXePNk0sg__',
      text: 'Bandara I Gusti Ngurah Rai',
    },
    {
      imageUrl: 'https://s3-alpha-sig.figma.com/img/4410/e479/9b259bb55a76dea233c0af4e4a400f68?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eOWYCN0WTJtXpdLdBwsuIkwPpEwntDzj61lUBvQrWnjQ7-D5ehiug3J0jxQpTEdboQOE7MNDV09XmU7s54-X3u8HqNeDzMwnnhJLl1GTtGtsYhjdlUnYbAbggeRfP7fBQSLR3FVC2sLhxQHCiKI21bYR8Ra3NeoI7VNMoxrTbyHMyIsP2w2ceIZujHW8z9Ycx23uS4s0LYpREOnOnuJ9yGo3bNNEXIWb0YsmUbYbaYkc~AK7LhX0cwQzXDp6QenzbfatChlb7yF-bKbfyLBQ9NOeyNW~y6vJFlvtHkpeZbh6QiTwi3B2CuQ05PGiXPyeogoYlCotUdLCrTCmUlDc0g__',
      text: 'Stasiun Manggarai',
    },
  ]);


  const latestThreeItems = historyItems.slice(-3).reverse(); 

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {latestThreeItems.map((item, index) => (
        <div key={index} style={{ position: 'relative', width: '437px', height: '250px', marginRight: '16px' }}>
          <img
            src={item.imageUrl}
            alt="Your Image"
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }}
          />
          <Typography>{item.text}</Typography>
        </div>
      ))}
    </div>
  );
};