import { useEffect, useState } from "react";
import "./App.css";
import ReminderList from "./components/ReminderList";
import { IReminder } from "./interfaces/reminder";
import api from "./services/api";
import NewReminder from "./components/NewReminder";

function App() {
  const [reminders, setReminders] = useState<IReminder[]>([]);

  useEffect(() => {
    const load = async () => {
      const data = await api.getRemainders();
      if (data && data?.length > 0) setReminders(data);
    };

    load();
  }, []);

  const removeReminder = (id: number) => {
    const filteredReminders = reminders.filter(
      (reminder) => reminder.id !== id
    );

    setReminders(filteredReminders);
  };

  const addReminder = async (title: string) => {
    const newReminder = await api.addRemainder(title);
    setReminders([newReminder, ...reminders]);
  };

  return (
    <div className="App">
      <NewReminder onSubmit={addReminder} />
      <ReminderList items={reminders} onRemoveReminder={removeReminder} />
    </div>
  );
}

export default App;
