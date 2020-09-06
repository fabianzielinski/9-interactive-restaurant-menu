const Item = (props) => (
  <li
    className={props.active ? "enable" : "disable"}
    onClick={() => props.changeStatus(props.id)}
  >
    {props.name}
  </li>
);
