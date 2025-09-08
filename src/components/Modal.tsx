import { useState } from "react";
import {
  Modal,
  TextInput,
  NumberInput,
  Select,
  Button,
  Stack,
} from "@mantine/core";

type AddFoodModalProps = {
  opened: boolean;
  onClose: () => void;
  onAdd: (
    name: string,
    price: number | string,
    quantity: number | string,
    category: string
  ) => void;
};

export default function AddFoodModal({opened,onClose,onAdd}: AddFoodModalProps) {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number | string>(0);
  const [quantity, setQuantity] = useState<number | string>(0);
  const [category, setCategory] = useState<string | null>(null);

  const handleSubmit = () => {

    if( !name.trim() || !(typeof price === 'string' ? Number(price):price) || !(typeof quantity === 'string' ? Number(quantity):quantity) || !category ) return;
        onAdd(name,price,quantity,category);
        
        setName("");
        setPrice(0);
        setQuantity(0);
        setCategory(null);
        onClose();

    

  };

  // หากต้องการแปง type string เป็น type number สามารถดูตัวอย่างนี้ได้
  let val_number: number = Number("500.0");
  console.log(val_number + 100); // 600.0

  return (
    /* Type additional text here. */

    <Modal opened={opened} onClose={onClose} title="Add an item" >

      <Stack>
        <TextInput
      size="md"
      label="Name of item"
      withAsterisk
      description="Name of item"
      error={!name.trim() && "This is required"}
      placeholder="e.g Chicken rice"
      value  ={name}
      onChange={(event)=> setName(event.currentTarget.value)}
    />

     <NumberInput
          size="md"
          label="Price per dish"
          withAsterisk
          description="Price per dish"
          error={(!price || Number(price) <= 0) && "Price per dish is required"}
          placeholder="0"
          value={price}
          onChange={(value) => setPrice(value)}
           min={0}
        />

          <NumberInput
          size="md"
          label="Quantity"
          withAsterisk
          description="Quantity"
          error={(!quantity || Number(quantity) <= 0) && "quantity is required"}
          placeholder="0"
          value={quantity}
          onChange={(value) => setQuantity(value)}
           min={0}
        />

        <Select
      label="Category"
      description="Category"
      placeholder="Select a category"
      value={category}
      onChange={(category)=>setCategory(category||null)}
       error={(!category || Boolean(category) === null) && "category is required"}
      data={["Main Course", "Drink", "Dessert"]}
      defaultValue="Main Course"
    />


    <Button onClick={handleSubmit}>Submit</Button>

      </Stack>
    </Modal>
  );
}
