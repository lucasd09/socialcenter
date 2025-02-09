import { fixedForwardRef } from "@/lib/react";
import { cn } from "@/lib/utils";
import { ChangeEvent, ForwardedRef } from "react";
import { FieldValues } from "react-hook-form";
import { FormInputBase } from "../form/components/form-input-base";
import { Input } from "../input";
import { FileInputProps, FileInputRef } from "./types";

const FileInputBase = <TForm extends FieldValues>(
  {
    className,
    value,
    form,
    name,
    description,
    label,
    onChange,
    isSkeleton,
    ...props
  }: FileInputProps<TForm>,
  ref: ForwardedRef<FileInputRef>,
) => (
  <FormInputBase
    name={name}
    form={form}
    description={description}
    label={label}
    isSkeleton={isSkeleton}
  >
    {({ field }) => {

      const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

        if (!e.target.files) {
          return;
        }

        const file = e.target.files[0];

        onChange?.(file);
        field?.onChange(file);
      };

      return (
        <Input
          className={cn(
            "flex h-8 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            className,
          )}
          type="file"
          name={name as string}
          description={description}
          label={label}
          ref={ref}
          onChange={handleChange}
          {...props}
        />
      );
    }}
  </FormInputBase>
);

export const FileInput = fixedForwardRef(FileInputBase);
