import styles from "./index.module.scss";

const EventContent = (props) => {
  return <section className={styles.content}>{props.children}</section>;
};

export default EventContent;
