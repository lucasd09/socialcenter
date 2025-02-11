import { fixedForwardRef } from "@/lib/react";
import { ChangeEvent, ForwardedRef } from "react";
import { FieldValues } from "react-hook-form";
import { FormInputBase } from "../form/components/form-input-base";
import { FileInputProps, FileInputRef } from "./types";
import { Icon } from "../icon";
import { Upload } from "lucide-react";
import { FilePreview } from "./components/file-preview";

const FileInputBase = <TForm extends FieldValues>(
  {
    className,
    value: baseValue,
    form,
    name,
    description,
    label,
    onChange,
    isSkeleton,
    accept,
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

      const id = `${String(name)}-input`

      const value = form ? (field?.value ?? "") : baseValue;

      const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

        if (!e.target.files) {
          return;
        }

        const file = e.target.files[0];

        onChange?.(file);
        field?.onChange(file);
      };

      const handleClear = () => {
        field?.onChange(null)
      }

      return (
        <div>
          {value ? (
            <FilePreview accept={accept} file={value} onClear={handleClear} />
          ) : <div className="relative">
            <input
              type="file"
              value={value}
              onChange={handleChange}
              ref={ref}
              className="hidden"
              id={id}
              accept={accept}
              {...props}
            />
            <label
              htmlFor={id}
              className="flex items-center justify-center border rounded-md py-5 text-muted-foreground text-sm cursor-pointer"
            >
              <Icon src={Upload} className="size-5 mr-2" />
            </label>
          </div>}
        </div>
      );
    }}
  </FormInputBase>
);

export const FileInput = fixedForwardRef(FileInputBase);
