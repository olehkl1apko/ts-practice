import { IReminder } from "../interfaces/reminder";

interface ReminderListProps {
  items: IReminder[];
  onRemoveReminder: (id: number) => void;
}

const ReminderList = ({ items, onRemoveReminder }: ReminderListProps) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li className="list-group-item" key={item.id}>
          {item.title}
          <button
            className="btn btn-outline-danger mx-2 rounded-pill"
            onClick={() => onRemoveReminder(item.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ReminderList;
