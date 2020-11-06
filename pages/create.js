import styles from "../styles/Home.module.css";
import EditorJs from "react-editor-js";
import { EDITOR_JS_TOOLS } from "../utils/constants";
import styleModals from "../styles/modal.module.css";
import { useState, useRef } from "react";
import useSWR from "swr";
export default function Create() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR("/api/data", fetcher);
  const [open, setOpen] = useState(false);
  const instanceRef = useRef(null);
  async function handleSave() {
    const savedData = await instanceRef.current.save();
    console.log(savedData);
  }
  const [editorData, setEditorData] = useState({});
  const onStoryPublish = (event) => {
    console.log("Called");

    console.log(editorData);
    event.preventDefault();
  };
  const shouldShowPopup = () => {
    return open ? (
      <div className={styleModals.modal}>
        <h3>Publish your stunning blog</h3>
        <form autoComplete="on">
          <fieldset>
            <label htmlFor="name">Name</label>
            <input
              minLength={5}
              required
              type="text"
              id="name"
              name="name"
              placeholder="Author's Name"
            />
          </fieldset>
          <fieldset>
            <label htmlFor="title">Title</label>
            <input
              required
              minLength={10}
              maxLength={70}
              type="text"
              id="title"
              name="title"
              placeholder="Blog Title"
            />
          </fieldset>
          <fieldset>
            <label htmlFor="description">Description</label>
            <textarea
              required
              id="description"
              maxLength={100}
              minLength={20}
              name="description"
              placeholder="Short Description of your blog post"
            ></textarea>
          </fieldset>
          <button
            onClick={(event) => onStoryPublish(event)}
            className={styleModals.modal_button}
            type="submit"
          >
            Publish
          </button>
        </form>
        <button
          style={{ backgroundColor: "#ff0000aa" }}
          className={styleModals.modal_button}
          onClick={() => setOpen(false)}
          type="button"
        >
          Close
        </button>
      </div>
    ) : null;
  };
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return (
    <div className={styles.container}>
      <EditorJs
        tools={EDITOR_JS_TOOLS}
        instanceRef={(instance) => (instanceRef.current = instance)}
        data={data}
        onChange={(data) => setEditorData(data)}
      />
      {shouldShowPopup()}
      {open ? null : (
        <button
          onClick={() => setOpen(true)}
          className={styleModals.modal_button}
          type="button"
        >
          Publish
        </button>
      )}
    </div>
  );
}
