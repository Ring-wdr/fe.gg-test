import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './css/index.module.css';
// interface ICham {
// id: string;
// name: string;
// image: { full: string };
// }
export default function Home() {
  const [champList, setChampList] = useState<string[]>([]);

  useEffect(() => {
    const ctl = new AbortController();
    const { signal } = ctl;
    (async () => {
      const { data } = await fetch(
        `http://ddragon.leagueoflegends.com/cdn/12.23.1/data/ko_KR/champion.json`,
        { signal }
      ).then((res) => res.json());
      setChampList(Object.keys(data));
    })();
    return () => ctl.abort();
  }, []);
  return (
    <div className={styles['fe-gg']}>
      <div className={styles.champimg}>
        {champList.length > 0 ? (
          <Image
            src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${
              champList[parseInt(String(champList.length * Math.random() - 1))]
            }_0.jpg`}
            alt='randchamp'
            width={200}
            height={400}
          />
        ) : null}
      </div>
      <div>
        <Image
          className={styles.logo}
          src='/logo1.png'
          alt='logo'
          width='650'
          height='145'
        />
      </div>
      <div className={styles.summoner}>
        <label>
          SUMMONER
          <input
            type='text'
            spellCheck='false'
            placeholder='소환사 이름을 입력하세요'
          />
        </label>
        <button>GG</button>
      </div>
    </div>
  );
}
