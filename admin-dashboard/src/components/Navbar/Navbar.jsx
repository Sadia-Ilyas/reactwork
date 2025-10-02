import styles from "./navstyle.module.css";

const Navbar = ({ onAddUser, onShowUsers, onDeletedUsers }) => {
  return (
    <nav className={styles.navbar}>
      <button onClick={onAddUser} className={styles.btnBlue}>
        Add User
      </button>
      <button onClick={onShowUsers} className={styles.btnGreen}>
        Show Users
      </button>
      <button onClick={onDeletedUsers} className={styles.btnRed}>
        Deleted Users
      </button>
    </nav>
  );
};

export default Navbar;
