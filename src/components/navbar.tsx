import React, { Fragment } from "react";
import styles from "../pages/personalDetails.module.css";
type Props = { children: React.ReactNode };

const Navbar: React.FC<Props> = (props) => {
  return (
    <Fragment>
      <div className={styles.resumeBuilder}>
        <div className={styles.resumeText}>Resume Builder</div>
      </div>
      {props.children}
    </Fragment>
  );
};

export default Navbar;
