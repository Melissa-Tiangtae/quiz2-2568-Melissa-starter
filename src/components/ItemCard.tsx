import { Card, Group, Badge, ActionIcon, Text } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";

type FoodProps = {
  name: string;
  price: number | string;
  quantity: number | string;
  category: string;
  onDelete: () => void;
};



export default function ItemCard({name,price,quantity,category,onDelete}:FoodProps) {
  // หากต้องการเปลี่ยนแปลง type ชนิด string เป็น number สามารถใช้วิธีการดังโค้ดตัวอย่างด้านล่างนี้ได้
  let val_number: number = Number("500.0");
  console.log(val_number + 100); // 600.0

  const handleDelete = () => {
    onDelete();
  };

  return (
    /* Type additional text here. */

      <Card withBorder shadow="sm" radius="md" mb="sm" >
          <Group justify="space-between" align="flex-start">

         <Text> {name}</Text>
         <Text> {price} Baht</Text>
         <Text> {quantity}</Text>
         <Badge color="green" >{category}</Badge>

         

          <ActionIcon
          color="red"
          size="lg"
          variant="light"
          onClick={handleDelete}
        >
          <IconTrash size={18} />
        </ActionIcon>



          </Group>
      </Card>

  );
}
