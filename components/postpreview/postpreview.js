import Link from "next/link";
import styles from "./postpreview.module.css";
export default function PostPreview({preview}){
    return(
        <div className={styles.postpreview}>
            <div className={styles.postpreview_left}>
                <img src="/images/ian-image.jpg" alt=""/>
            </div>
            <div className={styles.postpreview_right}>
                <h2>This is some random blog heading</h2>
                <span>John Doe</span>
                <p>Some description which can be little bit of lorem ipsum. which will still work fine.</p>
            </div>
        </div>
    )
}