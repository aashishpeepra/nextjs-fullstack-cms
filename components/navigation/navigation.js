import styles from "./navigation.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
export default function navigation() {
  const router = useRouter();
  const currentPath = router.pathname;
  return (
    <header className={styles.navigation}>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a className={currentPath == "/" ? styles.active : null}>
                View Story
              </a>
            </Link>
          </li>
          <li>
            <Link href="/create">
              <a className={currentPath == "/create" ? styles.active : null}>
                Create Story
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
