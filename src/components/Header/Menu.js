import style from "./Menu.module.css";

const Menu = (props) => {
  return (
    <span className={style.menu} onClick={props.onShow}>
      <svg width="32" height="18" xmlns="http://www.w3.org/20M  00/svg">
        <g fill="#151515" fillRule="evenodd">
          <path d="M0 0h32v2H0zM0 8h32v2H0zM0 16h32v2H0z" />
        </g>
      </svg>
    </span>
  );
};

export default Menu;