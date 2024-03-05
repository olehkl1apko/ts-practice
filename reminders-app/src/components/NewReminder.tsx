import { FormEvent, useState } from "react";

interface NewReminderProps {
  onSubmit: (title: string) => void;
}

const NewReminder = ({ onSubmit }: NewReminderProps): JSX.Element => {
  const [title, setTitle] = useState("");

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    if (!title) return;
    onSubmit(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor=""></label>
      <input
        id="title"
        type="text"
        value={title}
        onChange={(evt) => setTitle(evt.target.value)}
        className="form-control"
        placeholder="type new reminder..."
      />
      <button type="submit" className="btn btn-primary rounded-pill mt-2 mb-5">
        Add reminder
      </button>
    </form>
  );
};

export default NewReminder;
