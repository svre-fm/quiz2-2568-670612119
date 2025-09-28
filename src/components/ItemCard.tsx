import { Card, Group, Badge, ActionIcon, Text } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";

type FoodProps = {
  name: string;
  price: number | string;
  quantity: number | string;
  category: string;
  onDelete: () => void;
};

export default function ItemCard(props : FoodProps) {
  const totalcost = Number(props.price) * Number(props.quantity);

  // หากต้องการเปลี่ยนแปลง type ชนิด string เป็น number สามารถใช้วิธีการดังโค้ดตัวอย่างด้านล่างนี้ได้
  // let val_number: number = Number("500.0");
  // console.log(val_number + 100); // 600.0

  return (
      <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Group>
        <Text fw={500}>{props.name}</Text>
        <Text fw={500}>{props.price} Baht x {props.quantity} = {totalcost} Baht  </Text>
        <Badge variant="light" color="green">{props.category}</Badge>
        <ActionIcon variant="light" color="red" onClick={props.onDelete}>
          <IconTrash size="1rem" stroke={2} />
        </ActionIcon>
      </Group>
    </Card>
  );
}
