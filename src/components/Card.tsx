import classes from "../style/Card.module.scss";

const Card = (props: any) => {
  return (
    <div className={classes.card}>
      <img src={props.image} alt="img" />
      <label>{props.Name}</label>
    </div>
  );
};
export default Card;
