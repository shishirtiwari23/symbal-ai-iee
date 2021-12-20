import apiData from "../../utils/data/apiData.json";
import Table from "../../components/table/Table";
import styles from "./Home.module.scss";
import { useFetch } from "../../utils/customHooks";

const Home = () => {
  const sortedData = apiData.data.sort((a, b) => a.id - b.id); //This wiill Return the data array in sorted format
  const [data, isDataLoading] = useFetch("https://www.example.com/get-data"); // When the will work should use this "data" for apiData
  if (isDataLoading) return <h1 className={styles.loading}>Loading...</h1>;
  return (
    <div className={styles.container}>
      <Table data={sortedData} />
    </div>
  );
};

export default Home;
