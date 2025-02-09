import { OmitMerge } from "@/lib/types";
import { InputHTMLAttributes } from "react";
import { FieldValues } from "react-hook-form";
import { InputDefaultProps } from "../form/types";

export type FileInputValueProps = {
  value?: File | undefined;
  onChange?: (value: File | undefined) => void;
};

export type FileInputProps<TForm extends FieldValues> = OmitMerge<
  InputHTMLAttributes<HTMLInputElement>,
  FileInputValueProps & InputDefaultProps<TForm>
> & {
  label?: string;
};

export type FileInputRef = HTMLInputElement;
