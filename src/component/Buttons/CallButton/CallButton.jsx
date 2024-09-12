import styles from './CallButton.module.scss';

const CallButton = ({ title, className }) => {
  return (
    <div className={`${className} ${styles.btn}`}>
      <a href="tel:+380636270791">{title}</a>
    </div>
  );
};

export default CallButton;
