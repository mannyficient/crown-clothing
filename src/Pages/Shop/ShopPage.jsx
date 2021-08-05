import { Component } from "react";
import { Route } from "react-router";
import CollectionsOverview from "../../Components/CollectionsOverview/CollectionsOverview";
import CollectionPage from "../Collection/CollectionPage";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../Firebase/Firebase.utils";
import { connect } from "react-redux";
import { updateCollections } from "../../Redux/Shop/shop.actions";

class ShopPage extends Component {
  unsubscribeFromSnapshot = null;

  componentDidMount = () => {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collection");
    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
    });
  };
  render() {
    const { match } = this.props;
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
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});
export default connect(null, mapDispatchToProps)(ShopPage);
