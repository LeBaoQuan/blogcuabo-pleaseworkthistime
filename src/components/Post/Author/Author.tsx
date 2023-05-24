import React from "react";

import { useSiteMetadata } from "@/hooks";
import { getContactHref } from "@/utils";

import * as styles from "./Author.module.scss";

const Author = () => {
  const { author } = useSiteMetadata();

  return (
    <div className={styles.author}>
      <p className={styles.bio}>
        {author.bio}
        <a
          className={styles.facebook}
          href={getContactHref("Facebook", author.contacts.facecbook)}
          rel="noopener noreferrer"
          target="_blank"
        >
          <strong>{author.name}</strong> on Facebook
        </a>
      </p>
    </div>
  );
};

export default Author;
