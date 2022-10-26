import styles from "./Todo.module.scss";

function Todo() {
  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.list} notoBold fs-20`}>산책하기</div>
      <div className={`${styles.list} notoBold fs-20`}>씻기기</div>
      <div className={`${styles.list} notoBold fs-20`}>예방접종</div>
    </div>
  );
}

export default Todo;
