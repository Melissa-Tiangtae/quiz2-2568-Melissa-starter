import { useEffect, useState } from "react";
import { Button, Stack, Title, Divider, Container ,Text} from "@mantine/core";
import { v4 as uuidv4 } from "uuid";
import AddFoodModal from "../components/Modal";
import ItemCard from "../components/ItemCard";

type FoodItem = {
  id: string;
  name: string;
  price: number | string;
  quantity: number | string;
  category: string;
};

export default function FoodTracker() {
  const [opened, setOpened] = useState(false);
  const [items, setItems] = useState<FoodItem[]>([]);
  const categories = ["Main Course", "Drink", "Dessert"];

  const handleDelete =(id: string) =>{

    setItems(items.filter((item) => item.id !==id))
  };


  const getTotalCost = () => {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      total = total + Number(items[i].price);
    }
    return total;
  };

  const getCategoryMoney =(catName:string) =>{
    let total=0;
    for(let i = 0; i < items.length; i++){
        if(items[i].category === catName){
          total = total + Number(items[i].price);
        }

    }
      return total;

  }

  const addFood = (
    name: string,
     price: number | string,
    quantity: number | string,
    category: string
  ) => {
    const newFood: FoodItem = {
      id: uuidv4(),
      name: name,
      price: price,
      quantity: quantity,
      category: category,
   
    };
    setItems([...items, newFood]);
  };
 

  return (
    <Container style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <Title order={2} mb="md">
        Food Tracker
      </Title>
      <Button
      onClick={()=>setOpened(true)}
      >Add Food Item</Button>

     

      {/* Type additional AddFoodModal here. */}
       <AddFoodModal
        opened = {opened}
        onClose ={() => setOpened(false)}
        onAdd={addFood}
      />

      <Divider my="md" />
      {/* Type additional total cost here. */}
      <Title order={4}>Total cost: {getTotalCost()} Baht</Title>
      <Stack my="sm">{/* Type additional text here. */}</Stack>


     <Stack>
      <Text>Main Course: {getCategoryMoney("Main Course")} Baht</Text>
      <Text>Drink: {getCategoryMoney("Drink")} Baht</Text>
      <Text>Dessert: {getCategoryMoney("Dessert")} Baht</Text>

      </Stack>

      <Divider my="md" />
      {/* Type additional card here. */}

     
      <Stack>{/* Type additional food card list here. */}
          {items.map((item)=>(

           < ItemCard
           
           name = {item.name}
           price={item.price}
           quantity={item.quantity}
           category={item.category}
           onDelete={handleDelete}
           
           />



          )
        )}

      </Stack>
    </Container>
  );
}
