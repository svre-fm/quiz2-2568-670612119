import { Text, Group } from "@mantine/core";
import type { FooterProps } from "../libs/Footer";

export default function Footer(props : FooterProps) {
  return (
    <Group p="md" justify="center">
      <Text>
        © {props.fullName} {props.studentId} {props.courseName}-{props.year}. All rights reserved.
      </Text>
    </Group>
  );
}
