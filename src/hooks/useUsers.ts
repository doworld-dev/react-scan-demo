import { useState, useCallback } from "react";
import { faker } from "@faker-js/faker";
import { User } from "../types/User";

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  const generateUsers = useCallback((count: number) => {
    const newUsers = Array.from({ length: count }, () => ({
      id: faker.string.uuid(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
    }));
    setUsers(newUsers);
  }, []);

  return { users, generateUsers };
};
