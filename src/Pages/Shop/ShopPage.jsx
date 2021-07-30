import { Route } from "react-router";
import CollectionsOverview from "../../Components/CollectionsOverview/CollectionsOverview";
import CollectionPage from "../Collection/CollectionPage";
const ShopPage = ({ match }) => {
  return (
    <div className='shop-page'>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverview}
      ></Route>
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPage}
      ></Route>
    </div>
  );
};

export default ShopPage;
