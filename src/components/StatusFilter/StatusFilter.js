import { Button } from "components/Button/Button";
import css from "./StatusFilter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { statusFilters } from "../../redux/constants";
import { getFilter } from "redux/reducer";
import { setFilterStatus } from "redux/actions";

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const handleFilterChange = filter => dispatch(setFilterStatus(filter));

  return (
    <div className={css.wrapper}>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >All</Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >Active</Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >Completed</Button>
    </div>
  );
};
