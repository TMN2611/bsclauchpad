import React from 'react';
import { useSelector } from 'react-redux';

import { isDarkModeSelector } from '../../redux/selectors';
import Particles from '../../component/Particle';
import Button from '../../component/Ui/Button';
import { Link } from 'react-router-dom';
import { Box, Grid } from '@mui/material';
import './home.css';
export default function HomePage() {
  const isDarkMode = useSelector(isDarkModeSelector);

  const customProps = {
    bgcolor: !isDarkMode ? '#fff' : '#1a1a1a',
  };
  return (
    <div className='home'>
      <div className='container'>
        <div className='home-banner'>
          <h1 className='home-heading'>
            BSCPAD is the first decentralized IDO platform for the Binance Smart
            Chain Network.
          </h1>

          <Grid
            container
            sx={{
              display: 'flex',
              justifyContent: 'center',
              m: 1,
              p: 1,
            }}
          >
            <Grid item sx={8}>
              <p className='home-desc'>
                BSCPad will empower crypto currency projects with the ability to
                distribute tokens and raise liquidity.
              </p>
            </Grid>
          </Grid>

          <Box sx={{ mt: 5 }}>
            <div className='home-btns'>
              <Link to='/projects'>
                <Button primary title='View all Projects' large />
              </Link>

              <Button
                pancake
                title='Buy on Pancake Swap'
                large
                iconName='fa-solid fa-bag-shopping'
                href={
                  'https://pancakeswap.finance/swap?outputCurrency=0x5A3010d4d8D3B5fB49f8B6E57FB9E48063f16700'
                }
              />
              <Button
                success
                title='Apply for IDO'
                large
                href={
                  'https://docs.google.com/forms/d/e/1FAIpQLSclUCzTFDndSBmyRCNXv9aWweQOAY6MbQnK_nMo9qTFdIxc1Q/viewform'
                }
              />
              <Button
                mexc
                title='Buy on MEXC'
                large
                href={'https://www.mexc.com/exchange/BSCPAD_USDT'}
              />
              <Button
                gateio
                title='Buy on Gate.io'
                large
                href={'https://www.gate.io/vn/trade/BSCPAD_USDT?ch=ann19843'}
              />
            </div>
          </Box>

          <Box sx={{ mt: 9 }}>
            <div className='home-socials'>
              <Button
                primary
                outlinePrimary
                title='View all Projects'
                small
                iconName='fa-brands fa-telegram'
              />

              <Button
                primary
                outlinePrimary
                title='View all Projects'
                small
                iconName='fa-solid fa-m'
              />

              <Button
                primary
                outlinePrimary
                title='View all Projects'
                small
                iconName='fa-brands fa-twitter'
              />
            </div>
          </Box>
        </div>
        <div className='home-partners'>
          <div className='home-partners-list'>
            <div className='home-partners-item'>
              <h6 className='home-partners-heading'>Our Partners</h6>
            </div>
            <div className='home-partners-item'>
              <a href='#' className='home-partners-link'>
                <img src='./img/partners/chainlink.svg' alt='' />
              </a>
            </div>
            <div className='home-partners-item'>
              <a href='#' className='home-partners-link'>
                {!isDarkMode ? (
                  <img src='./img/partners/bluezilla.png' alt='' />
                ) : (
                  <img src='./img/partners/bluezilla-dark.png' alt='' />
                )}
              </a>
            </div>
            <div className='home-partners-item'>
              <a href='#' className='home-partners-link'>
                {!isDarkMode ? (
                  <img src='./img/partners/TronPad_black.png' alt='' />
                ) : (
                  <img src='./img/partners/TronPad_white.png' alt='' />
                )}
              </a>
            </div>
          </div>
        </div>
        <section className='home-about'>
          <div className='container'>
            <Grid
              container
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Grid item sx={6}>
                <Box
                  sx={{
                    pb: 8,
                  }}
                >
                  <div className='home-section-head'>
                    <div className='home-section-title'>ABOUT US</div>
                  </div>
                </Box>
              </Grid>
            </Grid>

            <div className='home-about-list'>
              <div className='home-about-text'>
                <h6>WHAT IS BSCPAD?</h6>
                <h2>
                  The BSC Launch Pad is the first decentralized IDO platform for
                  the Binance Smart Chain Network.
                </h2>
                <p>
                  BSCPad will empower crypto currency projects with the ability
                  to distribute tokens and raise liquidity.
                </p>
                <Box sx={{ mt: 5 }}>
                  <h6>WHY CHOOSE US?</h6>
                </Box>
                <h2>
                  BSCPad has found a solution to incentivize and reward all
                  token stakers in a way that is inclusive and with a low
                  barrier to entry.
                </h2>
                <p>
                  The fundamental flaws of existing launchpads is that acquiring
                  enough tokens to participate in the ecosystem is prohibitive,
                  and even if you do stake the tokens, you are not guaranteed an
                  allocation spot. They are based on a first come first serve
                  basis where automated bots can fill the whitelist spots in a
                  matter of seconds. BSCPad is creating fair decentralized
                  launches, you can choose between a lottery tier or a
                  guaranteed allocation tier and if you win the lottery you get
                  a guaranteed allocation in the first round (Allocation round).
                </p>
                <p>
                  The hallmark of the BSCPad is a two-round system that makes
                  every tier level guaranteed an allocation. There is no first
                  come first serve or bots; only fair distributed rewards for
                  all participants.
                </p>
              </div>
              <div className='home-about-img-wrapper'>
                <div className='home-about-img'>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: '100%',
                      px: 6,
                    }}
                  >
                    <img src='/img/sc-medium-a.png' alt='' />
                    <div className='home-about-circle'></div>
                  </Box>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='home-howItwork'>
          <Grid
            container
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Grid item sx={6}>
              <Box
                sx={{
                  pb: 8,
                }}
              >
                <div className='home-section-head'>
                  <div className='home-section-title'>
                    THE BSCPAD TIERED SYSTEM
                  </div>
                  <p className='home-section-desc'>
                    BSCPad will showcase a fixed tier system based on the number
                    of tokens staked. Lottery Tiers will share 20% of total
                    raise and rest 80% of the raise is assigned for guaranteed
                    allocation tiers based on the pool weights assigned.
                  </p>
                </div>
              </Box>
            </Grid>
          </Grid>

          <div className='home-round1'>
            <Box
              sx={{
                mt: 5,
                textTransform: 'uppercase',
                textAlign: 'center',
                fontSize: 28,
                fontWeight: 'bold',
              }}
            >
              <p className='home-round-heading'>Round 1 - Allocation Round</p>
            </Box>

            <div className='home-round1-list'>
              <div className='home-round1-item'>
                <div className='home-round1-item-wrapper'>
                  <h3 className='home-round1-type'>Bronze</h3>
                  <p>Staking Requirement</p>
                  <h4 className='home-round1-price'>1000</h4>
                  <p>Staking Length Required</p>
                  <h4>3 hours before Allocation Round opens</h4>
                  <p>SWhitelist Requirement Twittert</p>
                  <h4>Like, Comment & Retweet</h4>
                  <p>SWhitelist Requirement Twittert</p>
                  <h4>Lottery Tickets </h4>
                  <p>1</p>
                </div>
              </div>
              <div className='home-round1-item'>
                <div className='home-round1-item-wrapper'>
                  <h3 className='home-round1-type'>Bronze</h3>
                  <p>Staking Requirement</p>
                  <h4 className='home-round1-price'>1000</h4>
                  <p>Staking Length Required</p>
                  <h4>3 hours before Allocation Round opens</h4>
                  <p>SWhitelist Requirement Twittert</p>
                  <h4>Like, Comment & Retweet</h4>
                  <p>SWhitelist Requirement Twittert</p>
                  <h4>Lottery Tickets </h4>
                  <p>1</p>
                </div>
              </div>
              <div className='home-round1-item'>
                <div className='home-round1-item-wrapper'>
                  <h3 className='home-round1-type'>Bronze</h3>
                  <p>Staking Requirement</p>
                  <h4 className='home-round1-price'>1000</h4>
                  <p>Staking Length Required</p>
                  <h4>3 hours before Allocation Round opens</h4>
                  <p>SWhitelist Requirement Twittert</p>
                  <h4>Like, Comment & Retweet</h4>
                  <p>SWhitelist Requirement Twittert</p>
                  <h4>Lottery Tickets </h4>
                  <p>1</p>
                </div>
              </div>
              <div className='home-round1-item'>
                <div className='home-round1-item-wrapper'>
                  <h3 className='home-round1-type'>Bronze</h3>
                  <p>Staking Requirement</p>
                  <h4 className='home-round1-price'>1000</h4>
                  <p>Staking Length Required</p>
                  <h4>3 hours before Allocation Round opens</h4>
                  <p>SWhitelist Requirement Twittert</p>
                  <h4>Like, Comment & Retweet</h4>
                  <p>SWhitelist Requirement Twittert</p>
                  <h4>Lottery Tickets </h4>
                  <p>1</p>
                </div>
              </div>
              <div className='home-round1-item'>
                <div className='home-round1-item-wrapper'>
                  <h3 className='home-round1-type'>Bronze</h3>
                  <p>Staking Requirement</p>
                  <h4 className='home-round1-price'>1000</h4>
                  <p>Staking Length Required</p>
                  <h4>3 hours before Allocation Round opens</h4>
                  <p>SWhitelist Requirement Twittert</p>
                  <h4>Like, Comment & Retweet</h4>
                  <p>SWhitelist Requirement Twittert</p>
                  <h4>Lottery Tickets </h4>
                  <p>1</p>
                </div>
              </div>
              <div className='home-round1-item'>
                <div className='home-round1-item-wrapper'>
                  <h3 className='home-round1-type'>Bronze</h3>
                  <p>Staking Requirement</p>
                  <h4 className='home-round1-price'>1000</h4>
                  <p>Staking Length Required</p>
                  <h4>3 hours before Allocation Round opens</h4>
                  <p>SWhitelist Requirement Twittert</p>
                  <h4>Like, Comment & Retweet</h4>
                  <p>SWhitelist Requirement Twittert</p>
                  <h4>Lottery Tickets </h4>
                  <p>1</p>
                </div>
              </div>
            </div>
            <Box sx={{ textAlign: 'center' }}>
              In the first round, called the “Allocation Round”, users can
              purchase the amount allotted to them based on their tier.
            </Box>
          </div>
          <div className='home-round2'>
            <Box
              sx={{
                mt: 5,
                textTransform: 'uppercase',
                textAlign: 'center',
                fontSize: 28,
                fontWeight: 'bold',
              }}
            >
              <p className='home-round-heading'>Round 2 - FCFS ROUND</p>
            </Box>

            <div className='home-round2-list'>
              <div className='home-round2-itemImg'>
                <img src='/img/gfx-e.png' alt='' />
              </div>
              <div className='home-round2-itemText'>
                <p>
                  In round 2, the unsold tokens from the first round are made
                  available on a FCFS basis, only to guaranteed tiers (Platinum
                  and above). These members can purchase an additional amount
                  that is determined by a tier-based formula. This round is open
                  until all tokens are sold, typically lasting for only a few
                  minutes. After all the tokens are sold, the IDO is concluded.
                </p>
                <h3>
                  We will be collecting both data and feedback on the IDO
                  structure in order to optimize the system over time as well as
                  taking into consideration community feedback and potential DAO
                  proposals.
                </h3>
                <p>
                  Our system is a predictable and provably fair system giving
                  our users the proper incentives to accumulate and hold tokens
                  and support each and every project launched. Over time, we
                  will tweak weights, add new tiers and change other parameters
                  as necessary to keep the system functional, competitive and
                  rewarding for all community members.
                </p>
                <p>
                  $BSCPAD is the next evolution of blockchain launchpads solving
                  the fundamental flaws that plague existing launchpads. This
                  platform benefits all holders of the token and allows for fair
                  launches giving traders of all sizes the opportunity to invest
                  in the best upcoming Binance Smart Chain projects.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className='home-advisors'>
          <h2 className='home-section-title'>
            INCUBATOR AND INVESTMENT PARTNER
          </h2>
          <div className='home-card'>
            <div className='home-card-img'>
              {!isDarkMode ? (
                <img src='./img/partners/bluezilla.png' alt='' />
              ) : (
                <img src='./img/partners/bluezilla-dark.png' alt='' />
              )}
            </div>
            <p>
              We specialize in taking your innovative and new idea from concept
              to completion through our market leading advisory, investment,
              development, influencer marketing and legal support services.
            </p>
            <p>
              We are the only VC with in house developers, designers, marketers,
              influencers, traders, legal and launch pads.
            </p>
            <p>
              We help by not only bringing capital and partners, but every
              aspect of your project from tokenomics to post launch marking.
            </p>

            <Button
              primary
              title='Learn more'
              outlinePrimary
              small
              href='https://bluezilla.vc/'
            />
          </div>
        </section>
        <section className='home-advisors'>
          <h2 className='home-section-title'>LEGAL PARTNER</h2>
          <div className='home-card'>
            <div className='home-card-img'>
              <img src='/img/partners/SilkLegal_main_horizontal.png' alt='' />
            </div>
            <p>
              Silk Legal is a boutique law firm specializing in FinTech and
              Cryptocurrency. We combine a deep understanding of blockchain
              technology with an expert knowledge of international regulations
              to analyze issues, risks and opportunities. Silk Legal is a proud
              member of Global Digital Finance, the leading global association
              of digital asset companies advocating for and accelerating the
              adoption of best practices for digital assets.
            </p>
          </div>
        </section>
        <section className='home-contact'>
          <h2 className='home-section-title'>Contact</h2>
          <div className='home-contact-wrapper'>
            <div className='home-about-img'>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                  px: 6,
                }}
              >
                <div className='home-contact-list'>
                  <li className='home-contact-item'>
                    <div className='home-contact-icon'>
                      <i className='fa-solid fa-headset'></i>
                    </div>
                    <a href='#' className='home-contact-link'>
                      Contact Support
                    </a>
                  </li>
                  <li className='home-contact-item'>
                    <div className='home-contact-icon'>
                      <i className='fa-brands fa-telegram'></i>
                    </div>
                    <a href='#' className='home-contact-link'>
                      Join us on Telegram
                    </a>
                  </li>
                  <li className='home-contact-item'>
                    <div className='home-contact-icon'>
                      <i className='fa-brands fa-twitter'></i>
                    </div>
                    <a href='#' className='home-contact-link'>
                      Follow our Twitter
                    </a>
                  </li>
                  <li className='home-contact-item'>
                    <div className='home-contact-icon'>
                      <i className='fa-solid fa-earth-americas'></i>
                    </div>
                    <a href='#' className='home-contact-link'>
                      www.bscpad.com
                    </a>
                  </li>
                </div>
                {/* <img src='/img/dot-c-azalea.png' alt='' /> */}
                <div className='home-about-circle'></div>
              </Box>
            </div>
          </div>
        </section>
      </div>
      <Particles customProps={customProps}></Particles>
    </div>
  );
}
