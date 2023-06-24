import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

import styles from './styles.module.css';

import whitelistRaffleImage from '@site/static/img/whitelist-raffle.png';

const ShowcaseItems = [
  {
    title: 'Whitelist Raffle',
    imageUrl: whitelistRaffleImage,
    description: (
      <>
        Trustless, On-Chain Whitelist Raffle
      </>
    ),
    link: 'https://whitelistraffle.avax.sh'
  }
];

function ShowcaseItem({ imageUrl, title, description, link }) {
  return (
    <div className="showcaseItem col col--4">
      <div className="card">
        <div className="card__image">
          <img
            src={imageUrl}
            alt={title}
            title={title} />
        </div>
        <div className="card__body">
          <h4>{title}</h4>
          <small>
            {description}
          </small>
        </div>
        <div className="card__footer">
          <Link href={link} className="button button--primary button--block">Visit</Link>
        </div>
      </div>
    </div>
  );
}

export default function ShowcasePageList() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {ShowcaseItems.map((props, idx) => (
            <ShowcaseItem key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
