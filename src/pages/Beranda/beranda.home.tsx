import React from 'react';
import { BerandaButton } from '../../components/ui/Beranda/beranda.button';
import { BerandaHistory } from '../../components/ui/Beranda/beranda.history';
import { BerandaDestinasi } from '../../components/ui/Beranda/beranda.carddestinasi';
import Navbar from "../../components/ui/Beranda/beranda.navbar";
import { TextField, styled, InputAdornment, Typography, Stack } from '@mui/material';
import { BerandaRental } from '../../components/ui/Beranda/beranda.cardrental';

const SearchInput = styled(TextField)(() => ({
  height: '70px',
  width: '763px',
  '& .MuiOutlinedInput-root': {
    borderRadius: '16px',
    '&:hover fieldset': {
      borderColor: 'white',
      backgroundColor: 'white', 
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
      backgroundColor: 'white',
    },
    '&.Mui-disabled fieldset': {
      borderColor: 'white',
      backgroundColor: 'white',
    },
    '& fieldset': {
      borderColor: 'white',
      backgroundColor: 'white',
    },
    '& .MuiInputBase-input': {
      color: 'black',
      zIndex: 1,
    },
    '& .MuiInputBase-input::placeholder': {
      color: '#9E9E9E',
      zIndex: 1, 
    },
    '& .MuiInputAdornment-root': {
      zIndex: 1,
      color: '#9E9E9E',
    },
  },
}));

const Beranda = () => {
  return (
    <>
    <Navbar/>
      <section style={styles.searchSection}>
     
        <div style={styles.searchContainer}>
          <div style={{ marginBottom: '30px' }}>
            <SearchInput
              name="search"
              placeholder="Cari"
              InputProps={{
                startAdornment: <InputAdornment position="start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M5.75 15.8333C5.75 10.2645 10.2645 5.75 15.8333 5.75C21.4022 5.75 25.9167 10.2645 25.9167 15.8333C25.9167 21.4022 21.4022 25.9167 15.8333 25.9167C10.2645 25.9167 5.75 21.4022 5.75 15.8333ZM15.8333 3.75C9.15989 3.75 3.75 9.15989 3.75 15.8333C3.75 22.5068 9.15989 27.9167 15.8333 27.9167C18.8101 27.9167 21.5354 26.8403 23.6413 25.0555L32.5429 33.9571C32.9334 34.3476 33.5666 34.3476 33.9571 33.9571C34.3476 33.5666 34.3476 32.9334 33.9571 32.5429L25.0555 23.6413C26.8403 21.5354 27.9167 18.8101 27.9167 15.8333C27.9167 9.15989 22.5068 3.75 15.8333 3.75Z" fill="#9E9E9E" />
                  </svg>
                </InputAdornment>,
              }}
            />
          </div>
          <BerandaButton />
        </div>
      </section>

      <section style={styles.section2}>
        <div color='red' style={{ borderRadius: '12px', overflow: 'hidden', display: 'flex' }}>
          <img
            src="https://s3-alpha-sig.figma.com/img/cfab/9bcd/cc273561bf39bd50bf3549b161322589?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=psbjOLY8IZJLc-otScYg3u7YMJjpqqzXXNod0Mwa5CR-rHMT-~HqQFr4SLmzxqw-qD1l~OtauomYMSc~YFoo6fETzsRY33W3KmuL98-LqVKGMN4QdPBgk~bjtsixmy1T3Bo1iqZnuy7A7QrNizWwhhFUM7cRkNM6V0y2U6EHvvUBQyWNnefSp5xpf7Em-3vSOq9hbF8S7hZKfoN3Lzy1sxSejkBjk1RPDp2f6kJi11GfSxNWloNkiQOHbYx1eC67~z-XnHllIirwLRsbLcAJ1j7dnUTfR22cg9bAsMXmxhfmIeEbZD8s7kZ92Qvkh3LbnzHnORRK2oCRjG-VJJ~10A__"
            alt="Placeholder"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </section>

      <section style={styles.section3}>
        <Typography style={styles.texttitle}>Terakkhir dilihat</Typography>
        <BerandaHistory />
      </section>

      <section style={styles.section4}>
        <div>
          <Typography style={styles.texttitle}>Destinasi Favorit</Typography>
          <Typography sx={{ maxWidth: '525px' }} style={styles.textdesc}>
            Terbang ke destinasi di Indonesia dan Internasional makin murah dengan promo akhir tahun
          </Typography>
          <BerandaDestinasi />
        </div>
        <div style={{marginBottom:'60px'}}>
          <Typography style={styles.texttitle}>Rekomendasi Maskapai Terbaik</Typography>
          <Typography sx={{ maxWidth: '698px' }} style={styles.textdesc}>
          Nikmati perjalanan Anda dengan rekomendasi maskapai terbaik kami. Pilih maskapai ideal untuk pengalaman terbang tak terlupakan!          </Typography>
          <BerandaRental />
        </div>
        <footer style={styles.footer}>
        <div style={{display:'flex', justifyContent:'space-between', maxWidth:'1305px'}}>
        <Stack direction="row" useFlexGap flexWrap="wrap" >
        <ul style={{listStyleType:'none'}}>
          <li>
          <img src="https://res.cloudinary.com/dgm5qtyrg/image/upload/v1704977133/mgrcp31s8phuo2c7h7cc.png"/>
          </li>
          <li style={styles.footerhead}>
         Payment Partners
          </li>
          <li>
          <ul style={{ listStyleType: 'none', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px 37px', paddingLeft: '0px' }}>
            <li>
              <img src="https://res.cloudinary.com/dgm5qtyrg/image/upload/v1704977587/a4esbquplwkpabwtvbtf.png" />
            </li>
            <li>
              <img src="https://res.cloudinary.com/dgm5qtyrg/image/upload/v1704977587/onooyp2tjwvhzriqzr8i.png"/>
            </li>
            <li>
              <img src="https://res.cloudinary.com/dgm5qtyrg/image/upload/v1704977587/lwxx0kglylbhs4zfpx6b.png" />
            </li>
            <li>
              <img src="https://res.cloudinary.com/dgm5qtyrg/image/upload/v1704977587/ruwif0d3x8dcpkuwsea7.png" />
            </li>
            <li>
              <img src="https://res.cloudinary.com/dgm5qtyrg/image/upload/v1704977587/dmitfaj9fk62y4qhyicj.png"/>
            </li>
            <li>
              <img src="https://res.cloudinary.com/dgm5qtyrg/image/upload/v1704977587/ka1p1773nsrkszyszxqc.png"/>
            </li>
            <li>
              <img src="https://res.cloudinary.com/dgm5qtyrg/image/upload/v1704977587/yhxuamiaoxj2naqwhcmw.png"/>
            </li>
            <li>
              <img src="https://res.cloudinary.com/dgm5qtyrg/image/upload/v1704977587/q9fkghwspl7fkiudimmr.png"/>
            </li>
            <li>
              <img src="https://res.cloudinary.com/dgm5qtyrg/image/upload/v1704977587/plcqalad5ifztpmzzfej.png"/>
            </li>
          </ul>
          </li>
        </ul>
        </Stack>
        <Stack direction="row" useFlexGap flexWrap="wrap">
        <ul style={{listStyleType:'none'}}>
          <Stack direction="row" useFlexGap flexWrap="nowrap" marginBottom={'57px'} marginRight={'80px'}>
          <ul style={{listStyleType:'none'}}>
              <li style={styles.footerhead}>
                Tentang Kaboor
              </li>
              <li style={styles.footertext}>
              Kontak Kami
              </li>
              <li style={styles.footertext}>
              Pusat Bantuan
              </li>
              <li style={styles.footertext}>
              Tentang Kami
              </li>
            </ul>
          </Stack>
          <Stack direction="row" useFlexGap flexWrap="wrap" >
          <ul style={{listStyleType:'none'}}>
            <li style={styles.footerhead}>
                Follow kami di
              </li>
              <li style={styles.footertext}>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path d="M9.75 2.5H20.25C24.25 2.5 27.5 5.75 27.5 9.75V20.25C27.5 22.1728 26.7362 24.0169 25.3765 25.3765C24.0169 26.7362 22.1728 27.5 20.25 27.5H9.75C5.75 27.5 2.5 24.25 2.5 20.25V9.75C2.5 7.82718 3.26384 5.98311 4.62348 4.62348C5.98311 3.26384 7.82718 2.5 9.75 2.5ZM9.5 5C8.30653 5 7.16193 5.47411 6.31802 6.31802C5.47411 7.16193 5 8.30653 5 9.5V20.5C5 22.9875 7.0125 25 9.5 25H20.5C21.6935 25 22.8381 24.5259 23.682 23.682C24.5259 22.8381 25 21.6935 25 20.5V9.5C25 7.0125 22.9875 5 20.5 5H9.5ZM21.5625 6.875C21.9769 6.875 22.3743 7.03962 22.6674 7.33265C22.9604 7.62567 23.125 8.0231 23.125 8.4375C23.125 8.8519 22.9604 9.24933 22.6674 9.54235C22.3743 9.83538 21.9769 10 21.5625 10C21.1481 10 20.7507 9.83538 20.4576 9.54235C20.1646 9.24933 20 8.8519 20 8.4375C20 8.0231 20.1646 7.62567 20.4576 7.33265C20.7507 7.03962 21.1481 6.875 21.5625 6.875ZM15 8.75C16.6576 8.75 18.2473 9.40848 19.4194 10.5806C20.5915 11.7527 21.25 13.3424 21.25 15C21.25 16.6576 20.5915 18.2473 19.4194 19.4194C18.2473 20.5915 16.6576 21.25 15 21.25C13.3424 21.25 11.7527 20.5915 10.5806 19.4194C9.40848 18.2473 8.75 16.6576 8.75 15C8.75 13.3424 9.40848 11.7527 10.5806 10.5806C11.7527 9.40848 13.3424 8.75 15 8.75ZM15 11.25C14.0054 11.25 13.0516 11.6451 12.3483 12.3483C11.6451 13.0516 11.25 14.0054 11.25 15C11.25 15.9946 11.6451 16.9484 12.3483 17.6517C13.0516 18.3549 14.0054 18.75 15 18.75C15.9946 18.75 16.9484 18.3549 17.6517 17.6517C18.3549 16.9484 18.75 15.9946 18.75 15C18.75 14.0054 18.3549 13.0516 17.6517 12.3483C16.9484 11.6451 15.9946 11.25 15 11.25Z" fill="#EBEBEB"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <path d="M22.7563 2.8125H26.8913L17.8575 13.1375L28.4851 27.1875H20.1625L13.6451 18.6662L6.18755 27.1875H2.05005L11.7125 16.1438L1.5188 2.8125H10.05L15.9413 10.6012L22.7563 2.8125ZM21.3051 24.7125H23.5963L8.8063 5.1575H6.34755L21.3051 24.7125Z" fill="#EBEBEB"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <path d="M27.5 15C27.5 8.1 21.9 2.5 15 2.5C8.1 2.5 2.5 8.1 2.5 15C2.5 21.05 6.8 26.0875 12.5 27.25V18.75H10V15H12.5V11.875C12.5 9.4625 14.4625 7.5 16.875 7.5H20V11.25H17.5C16.8125 11.25 16.25 11.8125 16.25 12.5V15H20V18.75H16.25V27.4375C22.5625 26.8125 27.5 21.4875 27.5 15Z" fill="#EBEBEB"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <path d="M23.75 3.75C24.413 3.75 25.0489 4.01339 25.5178 4.48223C25.9866 4.95107 26.25 5.58696 26.25 6.25V23.75C26.25 24.413 25.9866 25.0489 25.5178 25.5178C25.0489 25.9866 24.413 26.25 23.75 26.25H6.25C5.58696 26.25 4.95107 25.9866 4.48223 25.5178C4.01339 25.0489 3.75 24.413 3.75 23.75V6.25C3.75 5.58696 4.01339 4.95107 4.48223 4.48223C4.95107 4.01339 5.58696 3.75 6.25 3.75H23.75ZM23.125 23.125V16.5C23.125 15.4192 22.6957 14.3828 21.9315 13.6185C21.1672 12.8543 20.1308 12.425 19.05 12.425C17.9875 12.425 16.75 13.075 16.15 14.05V12.6625H12.6625V23.125H16.15V16.9625C16.15 16 16.925 15.2125 17.8875 15.2125C18.3516 15.2125 18.7967 15.3969 19.1249 15.7251C19.4531 16.0533 19.6375 16.4984 19.6375 16.9625V23.125H23.125ZM8.6 10.7C9.15695 10.7 9.6911 10.4788 10.0849 10.0849C10.4788 9.6911 10.7 9.15695 10.7 8.6C10.7 7.4375 9.7625 6.4875 8.6 6.4875C8.03973 6.4875 7.50241 6.71007 7.10624 7.10624C6.71007 7.50241 6.4875 8.03973 6.4875 8.6C6.4875 9.7625 7.4375 10.7 8.6 10.7ZM10.3375 23.125V12.6625H6.875V23.125H10.3375Z" fill="#EBEBEB"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <path d="M28.125 14.918C28.125 14.8535 28.125 14.7803 28.1221 14.6953C28.1191 14.458 28.1133 14.1914 28.1074 13.9072C28.084 13.0898 28.043 12.2754 27.9785 11.5078C27.8906 10.4502 27.7617 9.56836 27.5859 8.90625C27.4004 8.21528 27.0368 7.5851 26.5315 7.0787C26.0261 6.5723 25.3966 6.20741 24.7061 6.02051C23.877 5.79785 22.2539 5.66016 19.9688 5.5752C18.8818 5.53418 17.7187 5.50781 16.5557 5.49316C16.1484 5.4873 15.7705 5.48438 15.4307 5.48145H14.5693C14.2295 5.48438 13.8516 5.4873 13.4443 5.49316C12.2812 5.50781 11.1182 5.53418 10.0312 5.5752C7.74609 5.66309 6.12012 5.80078 5.29395 6.02051C4.60313 6.20695 3.97345 6.57169 3.468 7.07816C2.96256 7.58463 2.5991 8.21505 2.41406 8.90625C2.23535 9.56836 2.10938 10.4502 2.02148 11.5078C1.95703 12.2754 1.91602 13.0898 1.89258 13.9072C1.88379 14.1914 1.88086 14.458 1.87793 14.6953C1.87793 14.7803 1.875 14.8535 1.875 14.918V15.082C1.875 15.1465 1.875 15.2197 1.87793 15.3047C1.88086 15.542 1.88672 15.8086 1.89258 16.0928C1.91602 16.9102 1.95703 17.7246 2.02148 18.4922C2.10938 19.5498 2.23828 20.4316 2.41406 21.0938C2.78906 22.4971 3.89062 23.6045 5.29395 23.9795C6.12012 24.2021 7.74609 24.3398 10.0312 24.4248C11.1182 24.4658 12.2812 24.4922 13.4443 24.5068C13.8516 24.5127 14.2295 24.5156 14.5693 24.5186H15.4307C15.7705 24.5156 16.1484 24.5127 16.5557 24.5068C17.7187 24.4922 18.8818 24.4658 19.9688 24.4248C22.2539 24.3369 23.8799 24.1992 24.7061 23.9795C26.1094 23.6045 27.2109 22.5 27.5859 21.0938C27.7646 20.4316 27.8906 19.5498 27.9785 18.4922C28.043 17.7246 28.084 16.9102 28.1074 16.0928C28.1162 15.8086 28.1191 15.542 28.1221 15.3047C28.1221 15.2197 28.125 15.1465 28.125 15.082V14.918ZM26.0156 15.0703C26.0156 15.1318 26.0156 15.1992 26.0127 15.2783C26.0098 15.5068 26.0039 15.7588 25.998 16.0312C25.9775 16.8105 25.9365 17.5898 25.875 18.3135C25.7959 19.2568 25.6846 20.0303 25.5469 20.5488C25.3652 21.2256 24.832 21.7617 24.1582 21.9404C23.543 22.1045 21.9932 22.2363 19.8867 22.3154C18.8203 22.3564 17.6719 22.3828 16.5264 22.3975C16.125 22.4033 15.7529 22.4062 15.4189 22.4062H14.5811L13.4736 22.3975C12.3281 22.3828 11.1826 22.3564 10.1133 22.3154C8.00684 22.2334 6.4541 22.1045 5.8418 21.9404C5.16797 21.7588 4.63477 21.2256 4.45312 20.5488C4.31543 20.0303 4.2041 19.2568 4.125 18.3135C4.06348 17.5898 4.02539 16.8105 4.00195 16.0312C3.99316 15.7588 3.99023 15.5039 3.9873 15.2783C3.9873 15.1992 3.98438 15.1289 3.98438 15.0703V14.9297C3.98438 14.8682 3.98438 14.8008 3.9873 14.7217C3.99023 14.4932 3.99609 14.2412 4.00195 13.9687C4.02246 13.1895 4.06348 12.4102 4.125 11.6865C4.2041 10.7432 4.31543 9.96973 4.45312 9.45117C4.63477 8.77441 5.16797 8.23828 5.8418 8.05957C6.45703 7.89551 8.00684 7.76367 10.1133 7.68457C11.1797 7.64355 12.3281 7.61719 13.4736 7.60254C13.875 7.59668 14.2471 7.59375 14.5811 7.59375H15.4189L16.5264 7.60254C17.6719 7.61719 18.8174 7.64355 19.8867 7.68457C21.9932 7.7666 23.5459 7.89551 24.1582 8.05957C24.832 8.24121 25.3652 8.77441 25.5469 9.45117C25.6846 9.96973 25.7959 10.7432 25.875 11.6865C25.9365 12.4102 25.9746 13.1895 25.998 13.9687C26.0068 14.2412 26.0098 14.4961 26.0127 14.7217C26.0127 14.8008 26.0156 14.8711 26.0156 14.9297V15.0703ZM12.3926 18.9258L19.1895 14.9707L12.3926 11.0742V18.9258Z" fill="#EBEBEB"/>
                </svg>
              </li>
            </ul>
          </Stack>
          </ul>
          <ul style={{listStyleType:'none'}}>
          <li style={styles.footerhead}>
            Tentang Kaboor
            </li>
            <li style={styles.footertext}>
              Pesawat
            </li>
            <li style={styles.footertext}>
              Mobil
            </li>
            <li style={styles.footertext}>
              Bus
            </li>
            <li style={styles.footertext}>
              Kereta Bandara
            </li>
            <li style={styles.footertext}>
              bundling Tiket
            </li>
            <li style={styles.footertext}>
              Reservasi Makanan
            </li>
            <li style={styles.footertext}>
              Airport Express
            </li>
            <li style={styles.footertext}>
              Tambah Bagasi
            </li>
            <li style={styles.footertext}>
              Asuransi Perjalanan
            </li>
          </ul>
          <ul style={{listStyleType:'none'}}>
           <ul style={{marginLeft:'0px', listStyleType:'none', marginBottom:'57px'}}>
           <li style={styles.footerhead}>
              Dukungan
            </li>
            <li style={styles.footertext}>Pusat Bantuan</li>
            <li style={styles.footertext}>Kebijakan Privasi</li>
            <li style={styles.footertext}>Syarat & Ketentuan</li>
           </ul>
           <ul style={{marginLeft:'0px', listStyleType:'none'}}>
           <li style={styles.footerhead}>Download Kaboor Apps</li>
            <li><div style={{maxWidth:'245px'}}><img src="https://res.cloudinary.com/dgm5qtyrg/image/upload/v1704978369/ykccytqhnxhgni9vfkdd.png" alt="playstore" /></div></li>
           </ul>
          </ul>
        </Stack>
        </div>
        </footer>
      </section>
    </>
  );
};

const styles = {
  searchSection: {
    backgroundImage: 'linear-gradient(0deg, rgba(255, 255, 255, 0.60) 0%, rgba(255, 255, 255, 0.60) 100%), url("https://s3-alpha-sig.figma.com/img/b2f0/fd4f/8ec91130e9ef89b84ea82d12323db8be?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e0uGWHGdPO9hatB~NoUASpIzDHEQoNtlCxX4h9NyYEvYI6QeCbuPLPLCUza5NgMinXYhY2JuedXO2mVtrU0-Uvnxi4OypAgeSYJ0Qr56nHKijGiCeIYQf~GhdS44my5afAZsCrJBD1zuiucdl01QsoXxQ--8abBinGkVeCy1WJn2Bj7I8RQCPvnfIq2qeN1eL31I2mpe3uuncJ5knvY5T~t7xoTvDYTIVvpatcV7vVYIGp2p-WU1sYtscs~xpEOLytINPC4J2FzsfoIr6BQ4CJiy6ybQuZzbuUHoOtOXlsTw-qtHN4X3PVmSF1y9gnY8TCyDvfGLmYE1NOzuy9v1ww__")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh', 
    paddingBottom: '48px',
  },
  searchContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  bigPictureSection: {
    backgroundColor: 'red',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '48px',
  },
  section2: {
    height: '523px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  section3: {
    height: '305px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start', 
    padding: '48px 24px', 
  },
  section4: {
    height: '650px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start', 
    marginBottom: '20px',
    padding: '48px 24px', 
  },
  texttitle: {
    color:"#000",
    fontFamily:"Open Sans",
    fontSize:"24px",
    fontWeight:700,
    lineHeight:"40px",
    letterSpacing:"-0.15px",
  },
  textdesc: {
    color:"#9E9E9E",
    fontFamily:"Open Sans",
    fontSize:"20px",
    fontWeight:600,
    lineHeight:"28px",
    letterSpacing:"-0.75px",
  },
  footer: {
    backgroundColor: '#7B52AB',
    padding: '24px',
  },
  footerhead: {
    color:"#FFF",
    fontFamily:"Open Sans",
    fontSize:"24px",
    fontWeight:700,
    lineHeight:"40px",
    letterSpacing:"-0.5px",
  },
  footertext: {
    color:"#FFF",
    fontFamily:"Open Sans",
    fontSize:"16px",
    fontWeight:600,
    lineHeight:"24px",
    letterSpacing:"-0.1pxpx",
  },
};

export default Beranda;
