import { ReactElement, useEffect, useState } from "react";
import Card from "./Card";
import classes from "../style/Home.module.scss";

const Table: React.FC = (): ReactElement => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [NewtData, setNewData] = useState(data);
  useEffect(() => {
    const ChangeData = () => {
      if (search !== "" || search !== null) {
        setNewData(
          data.filter((e: any) => {
            return e.name.toLowerCase().includes(search);
          })
        );
      } else {
        setNewData(data);
      }
    };
    ChangeData();
  }, [search, data]);

  useEffect(() => {
    const callApi = () => {
      fetch("https://api.imgflip.com/get_memes")
        .then((res) => res.json())
        .then((res) => setData(res.data.memes))
        .catch((err) => console.log(err));
    };
    callApi();
  }, []);
  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <div>
          <h2>Memes Station</h2>
        </div>
        <div className={classes.btn}>
          <input
            placeholder="Search"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
      </div>
      <div>
        {NewtData.length}/{data.length}
      </div>
      <div className={classes.table}>
        {NewtData.map((e: any) => {
          return <Card key={e.id} Name={e.name} image={e.url} />;
        })}
      </div>
    </div>
  );
};

export default Table;
