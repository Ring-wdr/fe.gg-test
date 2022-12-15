import Image from 'next/image';
import styles from './css/index.module.css';

export default function Home() {
  return (
    <div className={styles['fe-gg']}>
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
