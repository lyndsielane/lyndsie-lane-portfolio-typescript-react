import { GetShopifyItems } from "../services/ShopifyStorefrontApi";

function Store() {
  const items = GetShopifyItems();
  const itemList = items.map((item) => <div className="item">{item}</div>);

  return <div className="Store">{itemList}</div>;
}

export default Store;
