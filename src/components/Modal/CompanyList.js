import style from "./CompanyList.module.css";

const CompanyList = () => {
  return (
    <ul className={style.innerList}>
      <li>History</li>
      <li>Our Team</li>
      <li>Blog</li>
    </ul>
  );
};

export default CompanyList;
