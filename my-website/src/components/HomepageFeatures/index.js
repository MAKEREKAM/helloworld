import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'MAKEREKAM',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        MAKEREKAM의 수많은 뻘짓들 중 쓸만한 프로젝트들을 모아둔 사이트.
      </>
    ),
  },
  {
    title: 'MAKEREKAM',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
        <>
            <h1><a href={"https://vanilage.kr/docs/intro"}>문서 보기</a></h1>
        </>
    ),
  },
  {
    title: 'MAKEREKAM',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
        <>
            Github: https://github.com/MAKEREKAM
        </>
    ),
  }
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
