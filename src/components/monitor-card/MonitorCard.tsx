import styles from './MonitorCard.module.css';

export const MonitorCard = () => {
  return (
    <section className={styles.container}>
      <span>Api Gateway</span>
      <span>Status</span>
      <span>Porta: 8000</span>
      <span>Iniciada: 2h atrás</span>
    </section>
  );
};
