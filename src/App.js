import { Routes, Route } from 'react-router-dom';
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import DataTable from "./routes/data-table/data-table.component";
import Navigation from "./routes/navigation/navigation.component";

const App = () => {
  const dispatch = useDispatch();

  return (
    < Routes >
      <Route path='/' element={<Navigation />}>
        <Route index element={<DataTable />} />
      </Route>
    </Routes >
  )

}

export default App;
