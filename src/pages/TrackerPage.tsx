import { useState } from "react";
import { Button, Stack, Title, Divider, Container,Card, Group,Text } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks'; 
import { v4 as uuidv4 } from "uuid";

type FoodItem = {
  id: string;
  name: string;
  price: number | string;
  quantity: number | string;
  category: string;
};

export default function FoodTracker() {
  // const [opened, setOpened] = useState(false);
  // const [items, setItems] = useState<FoodItem[]>([]);
  // const categories = ["Main Course", "Drink", "Dessert"];

  // const openModal = () => {
  //   setOpened(true);
  // }

  return (
    <Container style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <Title order={2} mb="md">
        Food Tracker
      </Title>
      <Button variant="filled">Add Food Item</Button>
      {/* Type additional AddFoodModal here. */}

      <Divider my="md" />
      {/* Type additional total cost here. */}
      <Title order={4}>Total cost: {} Baht</Title>
      <Stack my="sm">{/* Type additional text here. */}</Stack>

      <Divider my="md" />
      {/* Type additional card here. */}

      <Stack w="100%">{/* Type additional food card list here. */}
        {/* {items.map((item) => (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Group>
            <Text>
              
            </Text>
            <Text>
              
            </Text>
          </Group>
        </Card>
        ))} */}
      </Stack>
    </Container>
  );
}
