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

export default function AddFoodModal({
  opened,
  onClose,
  onAdd,
}: AddFoodModalProps) {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number | string>(0);
  const [quantity, setQuantity] = useState<number | string>(0);
  const [category, setCategory] = useState<string | null>(null);

  const handleSubmit = () => {
    if (name && price && quantity && category) {
      onAdd(name, price, quantity, category);
      onClose();
      // Reset form fields
      setName("");
      setPrice(0);
      setQuantity(0);
      setCategory(null);
    }
  };

  return (
    <Modal opened={opened} onClose={onClose} title="Add Food Item" centered>
      <Stack>
       <TextInput
        label="Name of item"
        description="Name of item"
        placeholder="e.g.,Chicken Rice"
        value={name}
        error={name === "" ? "Name of item is required" : null}
        inputWrapperOrder={['label', 'description','input', 'error']}
        onChange={(event) => setName(event.currentTarget.value)}
      />
        <NumberInput
          label="Price per dish"
          description="Price per dish"
          value={Number(price)}
          error={price === 0 ? "Price per dish is required" : null}
          min = {0}
          onChange={(val) => setPrice(val ?? 0)}
        />
         <NumberInput
          label="Quantity"
          description="Quantity"
          value={Number(quantity)}
          error={quantity === 0 ? "Quantity is required" : null}
          min = {0}
          onChange={(val) => setQuantity(val ?? 0)}
        />
        <Select
          label="Category"
          description="Category"
          placeholder="Select category"
          error={category === null ? "Category is required" : null}
          value={category}
          onChange={setCategory}
          data={["Main Course", "Drink", "Dessert"]}
        />
        <Button onClick={handleSubmit}>Add</Button>
      </Stack>
    </Modal>
  );
}
