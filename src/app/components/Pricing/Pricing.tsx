'use client';
import React from 'react';
import Head from 'next/head';
import styles from './Pricing.module.css';
import PricingCard from './PricingCard';

const pricingData = [
  {
    plan: 'Common',
    price: 0,
    text: 'For individuals and teams getting started with Huly.',
    storage: '10 GB Storage',
    bandwidth: '100 GB Bandwidth',
    borderUrl: '/border-videos/common.mp4',
    cardImage: '/card-images/common.svg',
  },
  {
    plan: 'Rare',
    price: 19,
    text: 'For individual creatives, freelancers, and micro-agencies.',
    storage: '50 GB Storage',
    bandwidth: '500 GB Bandwidth',
    borderUrl: '/border-videos/rare.mp4',
    cardImage: '/card-images/rare.svg',
  },
  {
    plan: 'Epic',
    price: 99,
    text: 'For professional creative companies and small businesses.',
    storage: '100 GB Storage',
    bandwidth: '1 TB Bandwidth',
    borderUrl: '/border-videos/epic.mp4',
    cardImage: '/card-images/epic.svg',
  },
  {
    plan: 'Legendary',
    price: 399,
    text: 'For large creative companies and medium-sized businesses.',
    storage: '500 GB Storage',
    bandwidth: '5 TB Bandwidth',
    borderUrl: '/border-videos/legendary.mp4',
    cardImage: '/card-images/legendary.svg',
  },
];

const PricingComponent = () => {
  const [activeCard, setActiveCard] = React.useState(0);

  const handleCard = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    e.currentTarget.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'center', // 'start', 'end', 'center', 'nearest'
    });
    setActiveCard(index);
  };

  return (
    <>
      <Head>
        <title>Pricing Cards</title>
      </Head>

      <div>
        <div className={styles.pricingContainer}>
          {pricingData.map((card, index) => (
            <PricingCard
              cardData={card}
              index={index}
              key={index}
              activeCard={activeCard}
              handleCard={handleCard}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default PricingComponent;
