import { Routes, Route } from 'react-router-dom';
import DataTable from "./routes/data-table/data-table.component";
import Navigation from "./routes/navigation/navigation.component";

const App = () => {

  return (
    < Routes >
      <Route path='/' element={<Navigation />}>
        <Route index element={<DataTable />} />
      </Route>
    </Routes >
  )

}

export default App;
