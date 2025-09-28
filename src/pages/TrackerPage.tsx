import { useState } from "react";
import { Button, Stack, Title, Divider, Container, Text } from "@mantine/core";
// import { useDisclosure } from '@mantine/hooks'; 
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
  // const categories = ["Main Course", "Drink", "Dessert"];
  const totalCost = items.reduce((total, item) => total + Number(item.price) * Number(item.quantity), 0);
  const mainCourseCost = items
    .filter((item) => item.category === "Main Course")
    .reduce((total, item) => total + Number(item.price) * Number(item.quantity), 0);
  const DrinkCost = items
    .filter((item) => item.category === "Drink")
    .reduce((total, item) => total + Number(item.price) * Number(item.quantity), 0); 
  const DessertCost = items
    .filter((item) => item.category === "Dessert")
    .reduce((total, item) => total + Number(item.price) * Number(item.quantity), 0); 


  return (
    <Container style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <Title order={2} mb="md">
        Food Tracker
      </Title>
      <Button variant="filled" onClick={() => setOpened(true)}>Add Food Item</Button>
      <AddFoodModal 
        opened={opened}
        onClose={() => setOpened(false)}
        onAdd={(name, price, quantity, category) => {
        setItems((prev) => [
          ...prev,
          { id: uuidv4(), name, price, quantity, category },
        ]);
        }}
      />
      {/* Type additional AddFoodModal here. */}

      <Divider my="md" />
      {/* Type additional total cost here. */}
      <Stack my="sm">
        <Title order={4}>Total cost: {totalCost} Baht</Title>
        <Text>Main Course: {mainCourseCost} Baht</Text>
        <Text>Drink: {DrinkCost} Baht</Text>
        <Text>Dessert: {DessertCost} Baht</Text>
      </Stack>

      <Divider my="md" />
      {/* Type additional card here. */}
      <Stack w="100%">{/* Type additional food card list here. */}
        {items.map((item) => (
          <ItemCard
            key={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            category={item.category}
            onDelete={() =>
              setItems((prev) => prev.filter((i) => i.id !== item.id))
            }
          />
        ))}
      </Stack>
    </Container>
  );
}
