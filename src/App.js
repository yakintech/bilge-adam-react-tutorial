import Box from "./props/Box"
import CategoryTable from "./props/CategoryTable"
import Films from "./props/Films"
import Products from "./props/Products"
import UserDetail from "./props/UserDetail"


function App() {

  var categoryList = [
    {
      "id": 2,
      "description": "Sweet and savory sauces relishes spreads and seasonings",
      "name": "Condiments"
    },
    {
      "id": 1,
      "description": "Soft drinks coffees teas beers and ales",
      "name": "Beverages"
    },
    {
      "id": 3,
      "description": "Desserts candies and sweet breads",
      "name": "Confections"
    },
    {
      "id": 4,
      "description": "Cheeses",
      "name": "Dairy Products"
    },
    {
      "id": 5,
      "description": "Breads crackers pasta and cereal",
      "name": "Grains/Cereals"
    },
    {
      "id": 6,
      "description": "Prepared meats",
      "name": "Meat/Poultry"
    },
    {
      "id": 7,
      "description": "Dried fruit and bean curd",
      "name": "Produce"
    },
    {
      "id": 8,
      "description": "Seaweed and fish",
      "name": "Seafood"
    }
  ]


  return (<>
    <Films />
    {/* <Products />
    <Box width={300} height={300} color='red'></Box>
    <Box width={200} height={100} color='yellow'></Box>
    <Box width={100} height={100} color='brown'></Box>
    <Box width={30} height={30} color='purple'></Box>
    <Box /> */}

    {/* <CategoryTable categories={categoryList} />
    <hr></hr>
    <UserDetail name="Çağatay" surname="Yıldız" age={20} points={[2, 3, 1, 4, 3, 2]} /> */}
  </>

  )
}

export default App
