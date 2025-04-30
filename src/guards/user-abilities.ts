import { ActionsSubjectAbility } from "./ability";

export type UserType = "admin" | "user";

export const getAbilitiesByUser = (user: UserType) => {
  const abilities: Record<UserType, ActionsSubjectAbility[]> = {
    user: [
      {
        action: "read",
        subject: "Task",
      },
      {
        action: "update",
        subject: "Task",
      },
    ],

    admin: [
      {
        action: "update",
        subject: "Task",
      },
      {
        action: "delete",
        subject: "Task",
      },
      {
        action: "create",
        subject: "Task",
      },
      {
        action: "read",
        subject: "Task",
      },
    ],
  };

  return abilities[user];
};
