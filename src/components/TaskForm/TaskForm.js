import { Button } from "components/Button/Button";
import { useDispatch } from "react-redux";
import css from "./TaskForm.module.css";
import { addTask } from "redux/actions";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const TaskForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    if (form.elements.text.value.trim() === '') {
            Notify.warning('Please enter your task');
         return;
        }
    dispatch(addTask(form.elements.text.value));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <Button type="submit">Add task</Button>
    </form>
  );
};
