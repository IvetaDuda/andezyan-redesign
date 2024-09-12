import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.heroContainer}>
      <div className="container" id="hero">
        <h1 className={styles.title}>
          Ми будуємо найкраще для <span className={styles.selection}>ВАС</span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
