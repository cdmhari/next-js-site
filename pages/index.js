import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    // <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
    //   <h2 className={utilStyles.headingLg}>Blog</h2>
    //   <ul className={utilStyles.list}>
    //     {allPostsData.map(({ id, date, title }) => (
    //       <li className={utilStyles.listItem} key={id}>
    //         {title}
    //         <br />
    //         {id}
    //         <br />
    //         {date}
    //       </li>
    //     ))}
    //   </ul>
    // </section>
    <div>
      <h3>Hi Ishu! from your Hari!</h3>
    </div>
  );
}
