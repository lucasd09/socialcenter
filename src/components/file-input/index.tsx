import { fixedForwardRef } from "@/lib/react";
import { ChangeEvent, ForwardedRef } from "react";
import { FieldValues } from "react-hook-form";
import { FormInputBase } from "../form/components/form-input-base";
import { FileInputProps, FileInputRef } from "./types";
import { Icon } from "../icon";
import { Upload, X } from "lucide-react";
import { Button } from "../button";

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

      let preview = null

      const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

        if (!e.target.files) {
          return;
        }

        const file = e.target.files[0];
        const fileUrl = URL.createObjectURL(file)

        preview = fileUrl

        onChange?.(file);
        field?.onChange(file);
      };

      const handleClear = () => {
        preview = null
        field?.onChange(null)
      }

      return (
        <div>
          {preview ? (
            <div className="relative mb-4">
              {accept?.startsWith("video")
                ? <video src={preview} className="w-full h-64 object-contain rounded-md" controls />
                : <img src={preview} alt={id} className="w-full h-40 object-contain rounded-md border py-2" />
              }
              <Button variant="ghost" size="icon" className="absolute top-2 right-2" onClick={handleClear}>
                <Icon src={X} className="size-4" />
              </Button>
            </div>
          ) : <div className="relative">
            <input
              type="file"
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
