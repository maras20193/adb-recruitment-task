import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Input } from "../../../../components";
import * as S from "./AddModalBody.styled";
import { addUser, getUsers } from "../../../../api/users";

export type TFormValues = {
  name: string;
};

export type AddModalBodyProps = {
  closeModal: () => void;
};

const schema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .matches(/^[A-Za-z\s]*$/, `Name shouldn't have numbers`),
});

export const AddModalBody = ({ closeModal }: AddModalBodyProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TFormValues>({ resolver: yupResolver(schema) });

  const submitForm = async (data: TFormValues) => {
    try {
      setIsLoading(true);
      await addUser(data);
      await getUsers();
      closeModal();
      toast.success(`You successfuly add new user: ${data.name}`);
    } catch {
      toast.error("Tou can not add new user. Please try again later");
    }
    setIsLoading(false);
  };
  return (
    <S.Wrapper>
      <h2>You can add new user</h2>
      <form onSubmit={handleSubmit(submitForm)}>
        <Input
          label="Name: "
          {...register("name")}
          error={errors?.name?.message}
        />
        <Button.Primary
          style={{ width: "200px", alignSelf: "flex-end" }}
          isLoading={isLoading}
          disabled={isLoading}
        >
          Add new user
        </Button.Primary>
      </form>
    </S.Wrapper>
  );
};
