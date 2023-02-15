import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Input } from "../../../../components";
import * as S from "./EditModalBody.styled";
import { editUser } from "../../../../api/users";

export type TFormValues = {
  name: string;
};

export type EditModalBodyProps = {
  closeModal: () => void;
  user: User;
};

const schema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .matches(/^[A-Za-z\s]*$/, `Name shouldn't have numbers`),
});

export const EditModalBody = ({ closeModal, user }: EditModalBodyProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TFormValues>({ resolver: yupResolver(schema) });

  const submitForm = async (data: TFormValues) => {
    const dataToSend = { ...user };
    dataToSend.name = data.name;
    try {
      setIsLoading(true);
      closeModal();
      await editUser(dataToSend, user.id);
      toast.success(
        `You successfuly edit user name from "${user.name}" to "${data.name}"`
      );
    } catch {
      toast.error("Tou can not add new user. Please try again later");
    }
    setIsLoading(false);
  };

  return (
    <S.Wrapper>
      <h2>You can change user name.</h2>
      <form onSubmit={handleSubmit(submitForm)}>
        <Input
          label="Name: "
          {...register("name")}
          error={errors?.name?.message}
        />
        <Button.Primary
          style={{ width: "200px" }}
          isLoading={isLoading}
          disabled={isLoading}
        >
          Add new user
        </Button.Primary>
      </form>
    </S.Wrapper>
  );
};
