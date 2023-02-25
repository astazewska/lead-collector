import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Container } from "../components/Container/Container";
import { Link, Checkbox, TextField, Switch, Button } from "nerdux-ui-system";

import * as styles from "./index.module.scss";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Container>
        <div className={styles.sidebarleft}></div>
        <div>
          <h1>
            Join the Gameboy <span>waiting list</span>
          </h1>
          <div className={styles.oath}>
            <p className={styles.content}>I swear, I'm a classic gameboy fan</p>
            <Switch />
          </div>
          <div className={styles.leads}>
            <TextField
              placeholder="e.g. Richard Parker"
              label="Name"
              id="name"
              name="name"
            />
            <TextField
              placeholder="e.g. richard@gmail.com"
              label="Email"
              id="email"
              name="email"
            />
          </div>
          {/* <Link
            to={"https://nerdux.nerdbord.io/?path=/story/inputs-button--button"}
            target={"_blank"}
          >
            Open UI components documentation
          </Link> */}
        </div>
        <div className={styles.sidebarright}></div>
      </Container>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
